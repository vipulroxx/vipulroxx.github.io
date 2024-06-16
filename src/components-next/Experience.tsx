import React from "react";
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, Typography, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	heading: {
	fontSize: theme.typography.pxToRem(15),
	flexBasis: '33.33%',
	flexShrink: 0,
	},
	secondaryHeading: {
	fontSize: theme.typography.pxToRem(15),
	color: theme.palette.text.secondary,
	},
}));

function Experience() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false || '');
	
	const handleChange: any = (panel: any) => (event: EventListenerObject, isExpanded: boolean | string) => {
		setExpanded(isExpanded ? panel : false);
	};
	    
	return (
		<>
		<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
			<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel1bh-content"
			id="panel1bh-header"
			>
			<Typography className={classes.heading}>Advisory Associate</Typography>
			<Typography className={classes.secondaryHeading}>
			PricewaterhouseCoopers, Bangalore
			</Typography>
			</AccordionSummary>
			<AccordionDetails>
			<Typography>
			Advisory associate in AppTech at PwC
			</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
			<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel2bh-content"
			id="panel2bh-header"
			>
			<Typography className={classes.heading}>Project Intern</Typography>
			<Typography className={classes.secondaryHeading}>
			Tata Steel, Jamshedpur, Jharkhand
			</Typography>
			</AccordionSummary>
			<AccordionDetails>
			<Typography>
			The project was <b>Pseudo defect reduction in Surface Inspection System at CRM Bara</b>.
			<ul>
				<li>Sanitized SQUINS dataset given by the department with proper defect listing</li>
				<li>Classified metallic defects using twofold procedure applied in surface inspection system</li>
				<li>Used a convolutional auto encoder to detect 27 types of defects</li>
			</ul>
			</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
			<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel3bh-content"
			id="panel3bh-header"
			>
			<Typography className={classes.heading}>Research Project Member</Typography>
			<Typography className={classes.secondaryHeading}>
			Institute of Technical Education and Research, Bhubaneswar
			</Typography>
			</AccordionSummary>
			<AccordionDetails>
			<Typography>
			Breast Cancer Classification using Deep Neural Network	
			</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
			<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel4bh-content"
			id="panel4bh-header"
			>
			<Typography className={classes.heading}>Teaching Assistant</Typography>
			<Typography className={classes.secondaryHeading}>Association of Computer Science , University of Minnesota, Morris</Typography>
			</AccordionSummary>
			<AccordionDetails>
			<Typography>
			Introduction to Digital Media Computation using Python Programming Language
			</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
			<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel5bh-content"
			id="panel5bh-header"
			>
			<Typography className={classes.heading}>Research Project Member</Typography>
			<Typography className={classes.secondaryHeading}>
			Association of Computer Science, University of Minnesota, Morris
			</Typography>
			</AccordionSummary>
			<AccordionDetails>
			<Typography>
			Power Consumption Project that shows power usage around University in an Android, IOS and Web based Application
			</Typography>
			</AccordionDetails>
		</Accordion>
		</>
	);
}

export default Experience;