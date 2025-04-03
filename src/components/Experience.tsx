import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import { Box, Tooltip } from '@mui/material';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@mui/material/Button/Button";
import { Download } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Experience() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false || '');
	const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({}); // State to toggle additional details
	
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	const handleChange: any = (panel: any) => (event: EventListenerObject, isExpanded: boolean | string) => {
		setExpanded(isExpanded ? panel : false);
	};

	const toggleShowMore = (key: string) => {
		setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
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
			  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
			    <Typography>
			      Advisory associate in AppTech at PwC
			    </Typography>
			    <Button
			      size="large"
			      color="secondary"
			      variant="contained"
			      onClick={handleClickOpen}
			      className="resume-button"
			    >
			      VIEW WORK DONE
			    </Button>
			  </Box>
			  <Dialog
			    open={open}
			    onClose={handleClose}
			    TransitionComponent={Transition}
			    PaperProps={{
			      sx: {
			        width: '80%',
			        maxWidth: '1200px',
			        position: 'absolute',
			        top: '50%',
			        left: '50%',
			        transform: 'translate(-50%, -50%)',
			        borderRadius: '16px',
			        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)',
			        backgroundColor: '#ffffff',
			        overflowY: 'auto',
			        maxHeight: '90vh',
			        padding: '16px',
			        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
			        '&:hover': {
			          transform: 'translate(-50%, -50%) scale(1.02)',
			          boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.4)',
			        },
			      },
			    }}
			  >
			    <AppBar sx={{ position: 'relative', backgroundColor: '#1976d2' }}>
			      <Toolbar>
			        <IconButton
			          edge="start"
			          color="inherit"
			          onClick={handleClose}
			          aria-label="close"
			        >
			          <CloseIcon />
			        </IconButton>
			        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
			          SUMMARY OF WORK DONE AT PWC
			        </Typography>
			      </Toolbar>
			    </AppBar>
			    <Box sx={{ padding: '16px', maxHeight: '80vh', overflowY: 'auto' }}>
			      <Typography variant="h6" gutterBottom>
			        WORK EXPERIENCE
			      </Typography>
			      <Typography variant="subtitle1" gutterBottom>
			        PRICEWATERHOUSECOOPERS US Associate Solution Architect, Data Scientist & Full Stack Developer
			      </Typography>
			      <Typography variant="body1" gutterBottom>
			        <b>P&T Digital, Global IFS, Sept 2021 - Present</b>
			        <Tooltip title="Copy to clipboard">
			          <IconButton size="small" color="primary" sx={{ ml: 1 }} onClick={() => navigator.clipboard.writeText('P&T Digital, Global IFS, Sept 2021 - Present')}>
			            <ContentCopyIcon />
			          </IconButton>
			        </Tooltip>
			      </Typography>
			      <Typography variant="body2" gutterBottom>
			        <b>PwC Learning & Developments:</b> PwC Full Stack Programme Boot Camps & PwC Certifications
			      </Typography>
			      <ul>
			        <li>
			          Achieved certifications for all PwC Full Stack Programmes, .NET, Java & Spring Framework, NodeJS, React & Angular Boot Camps.
			          <Tooltip title="More Info">
			            <IconButton size="small" color="primary" onClick={() => toggleShowMore('pwcCertifications')}>
			              <InfoIcon />
			            </IconButton>
			          </Tooltip>
			          {showMore['pwcCertifications'] && (
			            <Typography variant="body2" sx={{ mt: 1 }}>
			              Also certified for Excellent Quality Developer Persona Badge & internal training programs for leadership qualities, learning pathways, and Gen AI 2.0.
			            </Typography>
			          )}
			        </li>
			      </ul>
			      <Typography variant="body2" gutterBottom>
			        <b>External Client: A Healthcare Diagnostics Company</b>
			      </Typography>
			      <ul>
			        <li>
			          Solution Architect, Data Scientist, and Full Stack Developer role for one of the largest healthcare diagnostics centers in India.
			          <Tooltip title="More Info">
			            <IconButton size="small" color="primary" onClick={() => toggleShowMore('healthcareClient')}>
			              <InfoIcon />
			            </IconButton>
			          </Tooltip>
			          {showMore['healthcareClient'] && (
			            <Typography variant="body2" sx={{ mt: 1 }}>
			              Created complete backend for app discovery phase using Python, Langchain, Elastic Search, Docker Networking, Azure, React, and embedding models.
			            </Typography>
			          )}
			        </li>
			      </ul>
			      <Typography variant="body2" gutterBottom>
			        <b>Microsoft Azure Devboards Product Release Notes Plugin</b>
			      </Typography>
			      <ul>
			        <li>
			          Full Stack Developer role for Microsoft Azure Devboards Product Management, Release Notes Plugin using Semantic Kernel, Python, Azure, React, OpenAPI.
			          <Tooltip title="More Info">
			            <IconButton size="small" color="primary" onClick={() => toggleShowMore('azurePlugin')}>
			              <InfoIcon />
			            </IconButton>
			          </Tooltip>
			          {showMore['azurePlugin'] && (
			            <Typography variant="body2" sx={{ mt: 1 }}>
			              Created backend for release 1.0 using skills and contexts to generate release notes in text, PDF, or HTML formats.
			            </Typography>
			          )}
			        </li>
			      </ul>
			      <Typography variant="body2" gutterBottom>
			        <b>Concourse 2.0</b>
			      </Typography>
			      <ul>
			        <li>
			          Full Stack Developer & Data/Solution Design Architect role for Concourse 2.0.
			          <Tooltip title="More Info">
			            <IconButton size="small" color="primary" onClick={() => toggleShowMore('concourse')}>
			              <InfoIcon />
			            </IconButton>
			          </Tooltip>
			          {showMore['concourse'] && (
			            <Typography variant="body2" sx={{ mt: 1 }}>
			              Played a key role in migrating from Monolith to Event-Based Module Federated Sub-Module Distributed Micro-Front Ends.
			            </Typography>
			          )}
			        </li>
			      </ul>
			      <Typography variant="body2" gutterBottom>
			        <b>AI Factory: PwC Digital Generative AI Initiative</b>
			      </Typography>
			      <ul>
			        <li>
			          Worked as a backend developer for Chat-PwC, a Generative-AI internal service.
			          <Tooltip title="More Info">
			            <IconButton size="small" color="primary" onClick={() => toggleShowMore('aiFactory')}>
			              <InfoIcon />
			            </IconButton>
			          </Tooltip>
			          {showMore['aiFactory'] && (
			            <Typography variant="body2" sx={{ mt: 1 }}>
			              Created Proof of Concept for end-to-end application development and deployment using ChatGPT from OpenAI.
			            </Typography>
			          )}
			        </li>
			      </ul>
			    </Box>
			  </Dialog>
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
