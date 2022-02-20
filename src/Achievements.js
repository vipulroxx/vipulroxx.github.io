import React from "react";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Accordion, Typography, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.paper,
	},
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

function Achievements() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	    
	return (
        <>
        <h3>PUBLICATION</h3>
		<Card className={classes.root}>
		<CardActionArea>
			<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			Breast Cancer Classification using Deep Neural Network
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			Published on International Journal of Intelligent System Design and Computing
			</Typography>
			</CardContent>
			<CardContent>
			<Typography paragraph>Key Points:</Typography>
			<Typography paragraph>
			<li>Used Supervised Learning to predict whether cancer present is through Benign or Malignant tumour using ReLU and sigmoid function</li>
			<li>Sanitized the dataset by correlating and one hot encoding all the features for getting relevant features to be used as inputs to DNN classifier</li>
			<li>Achieved 94% accuracy on a 5 layered DNN, providing better results compared to other earlier works</li> 
			</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" color="primary" size="small" href="https://drive.google.com/file/d/1k_FrhbkSrQ2NylLzkFgMqWnfqjwHzsvB/view?usp=sharing" target="_blank">Read</Button>
			</CardActions>
		</CardActionArea>
		</Card>
        <br/>
        <h3>CERTIFICATIONS AND ACCREDITATIONS</h3>
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography className={classes.heading}>Certified Solution Architect Associate</Typography>
                <Typography className={classes.secondaryHeading}>
                AWS	
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Issued Jan 2022. Expires Jan 2025<br/>
                Credential ID: FGJE57HLNE1EQV33
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography className={classes.heading}>Certified Cloud Practitioner</Typography>
                <Typography className={classes.secondaryHeading}>
                AWS	
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Issued Feb 2022. Expires Feb 2025<br/>
                Credential ID: T27HWJ9LMEV1Q031 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography className={classes.heading}>APN Partner: Business Professional</Typography>
                <Typography className={classes.secondaryHeading}>
                AWS	
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Issued Jan 2022
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className={classes.heading}>APN Partner: Cloud Economics</Typography>
                <Typography className={classes.secondaryHeading}>
                AWS	
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Issued Feb 2022
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
                >
                <Typography className={classes.heading}>Building Modern Python Applications on AWS</Typography>
                <Typography className={classes.secondaryHeading}>
                COURSERA
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Issued May 2021<br/>
                Credential ID: UL7ZFM5A5QC5
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        </>
	);
}

export default Achievements;
