import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, Tooltip, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, TableSortLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    position: 'relative',
  },
  infoIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
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
  const [open, setOpen] = React.useState(false);
  const [expandedDialog, setExpandedDialog] = useState<string | false>(false);
  const [trainingDialogOpen, setTrainingDialogOpen] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState<{ name: string; completedDate: string; details: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;

  interface DialogContent {
    title: string;
    details: string;
    impacts?: { title: string; description: string }[];
  }

  const [dialogContent, setDialogContent] = useState<DialogContent | null>(null);

  const handleClickOpen = (content: DialogContent) => {
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogContent(null);
    setExpandedDialog(false);
  };

  const handleDialogAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedDialog(isExpanded ? panel : false);
  };

  const handleTrainingDialogOpen = (training: { name: string; completedDate: string; details: string }) => {
    setSelectedTraining(training);
    setTrainingDialogOpen(true);
  };

  const handleTrainingDialogClose = () => {
    setTrainingDialogOpen(false);
    setSelectedTraining(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const experiences = [
    {
      title: "CTA",
      subtitle: "PwC US AC",
      description: "Associate Solution Architect, Data Scientist & Full Stack Developer Global and Foreign Advisory",
      dialogContent: {
        title: "PwC Work Summary",
        details: "SUMMARY OF WORK DONE AT PWC",
        impacts: [
          {
            title: "External Client: Foreign Policies",
            description: "Using .NET, React, and SQL to administer as a technical admin across various change requests and working across pillars.",
          },
          {
            title: "PwC Learning & Developments",
            description: "Achieved certifications for all PwC Full Stack Programmes, .NET, Java & Spring Framework, NodeJS, React & Angular Boot Camps.",
          },
          {
            title: "External Client: A Healthcare Diagnostics Company",
            description: "Solution Architect, Data Scientist, and Full Stack Developer role for one of the largest healthcare diagnostics centers in India.",
          },
          {
            title: "Microsoft Azure Devboards Product Release Notes Plugin",
            description: "Full Stack Developer role for Microsoft Azure Devboards Product Management, Release Notes Plugin using Semantic Kernel, Python, Azure, React, OpenAPI.",
          },
          {
            title: "Absolute Systems and Functions",
            description: "Used Power Query, Microsoft Dataverse, Excel, and LeanIX to perform business data cutovers and transformations, ensuring seamless data migration and integration.",
          },
          {
            title: "Concourse 2.0",
            description: "Played a key role in migrating from Monolith to Event-Based Module Federated Sub-Module Distributed Micro-Front Ends.",
          },
          {
            title: "AI Factory: PwC Digital Generative AI Initiative",
            description: "Created Proof of Concept for end-to-end application development and deployment using ChatGPT from OpenAI.",
          },
          {
            title: "Concourse User Story Coach",
            description: "Developed a user story coaching tool using Flask and other Python frameworks as the backend, integrated with Concourse 2.0 for enhanced user story management.",
          },
        ],
      },
    },
    {
      title: "Project Intern",
      subtitle: "Tata Steel, Jamshedpur, Jharkhand",
      description: "Pseudo defect reduction in Surface Inspection System at CRM Bara",
      dialogContent: {
        title: "Tata Steel Project",
        details: "Implemented advanced algorithms to reduce pseudo defects in the Surface Inspection System at CRM Bara, leading to improved production quality and reduced downtime.",
      },
    },
    {
      title: "Research Project Member",
      subtitle: "Institute of Technical Education and Research, Bhubaneswar",
      description: "Breast Cancer Classification using Deep Neural Network",
      dialogContent: {
        title: "Breast Cancer Classification",
        details: "Developed a deep learning model for breast cancer classification, achieving high accuracy in early detection and aiding in better diagnostic decisions.",
      },
    },
    {
      title: "Teaching Assistant",
      subtitle: "University of Minnesota, Morris",
      description: "Introduction to Digital Media Computation using Python Programming Language",
      dialogContent: {
        title: "Teaching Assistant Role",
        details: "Assisted in teaching Python programming for digital media computation, enhancing student engagement and understanding through interactive sessions.",
      },
    },
    {
      title: "Research Project Member",
      subtitle: "University of Minnesota, Morris",
      description: "Power Consumption Project that shows power usage around University in an Android, iOS, and Web-based Application",
      dialogContent: {
        title: "Power Consumption Project",
        details: "Developed a cross-platform application to monitor and visualize power usage across the university, promoting energy efficiency and sustainability.",
      },
    },
  ];

  const professionalTraining = [
    {
      name: "2+2 Coaching in Action",
      completedDate: "2/27/2025",
      details: "A coaching program focused on enhancing leadership and mentoring skills.",
    },
    {
      name: "Full Stack Upskilling ‐ React Programming Bootcamp ‐ Project Advanced ‐ React Form…",
      completedDate: "2/26/2025",
      details: "Advanced React programming bootcamp covering forms, state management, and project architecture.",
    },
    {
      name: "AC ISMS Annual Refresher Training Program FY 25",
      completedDate: "2/26/2025",
      details: "Annual refresher training on Information Security Management Systems (ISMS).",
    },
    {
      name: "FY25 One Firm Ethics, Independence, Risk and Compliance Training ‐ Administrative, …",
      completedDate: "2/4/2025",
      details: "Comprehensive training on ethics, independence, and compliance for administrative staff.",
    },
    {
      name: "Final assessment ‐ FY25 One Firm Ethics, Independence, Risk and Compliance Training…",
      completedDate: "2/4/2025",
      details: "Final assessment for the FY25 ethics and compliance training program.",
    },
    {
      name: "Personal independence webcast: Avoiding the most common personal independence…",
      completedDate: "1/31/2025",
      details: "Webcast on maintaining personal independence and avoiding common pitfalls.",
    },
    {
      name: "Art of 'I' ‐ I am assertive",
      completedDate: "1/28/2025",
      details: "Session on assertiveness and effective communication in professional settings.",
    },
    {
      name: "Cultural Agility Virtual Workshop",
      completedDate: "11/11/2024",
      details: "Workshop on developing cultural agility and working effectively in diverse teams.",
    },
    {
      name: "Prevention of Sexual Harassment Training ﴾ACs in India﴿",
      completedDate: "11/4/2024",
      details: "Mandatory training on the prevention of sexual harassment in the workplace.",
    },
    {
      name: "Career Development Immersion Experience Playback ‐ English",
      completedDate: "10/15/2024",
      details: "Playback session on career development strategies and experiences.",
    },
    {
      name: "Effective Communication Skills",
      completedDate: "9/20/2024",
      details: "Training focused on improving verbal and written communication skills in professional settings.",
    },
    {
      name: "Advanced Leadership Program",
      completedDate: "8/15/2024",
      details: "Comprehensive program on leadership strategies and team management.",
    },
    {
      name: "Data Privacy and Security Essentials",
      completedDate: "7/10/2024",
      details: "Training on best practices for ensuring data privacy and security in organizational workflows.",
    },
    {
      name: "Time Management Mastery",
      completedDate: "6/5/2024",
      details: "Workshop on effective time management techniques to enhance productivity.",
    },
    {
      name: "Conflict Resolution in Teams",
      completedDate: "5/25/2024",
      details: "Training on resolving conflicts within teams to foster collaboration and harmony.",
    },
    {
      name: "Agile Methodologies and Scrum Practices",
      completedDate: "4/15/2024",
      details: "In-depth training on Agile methodologies and Scrum practices for project management.",
    },
  ];

  const filteredTraining = professionalTraining.filter((training) =>
    training.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          '@media (max-width: 500px)': {
            flexDirection: 'column',
          },
          '@media (min-width: 501px) and (max-width: 800px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          '@media (min-width: 801px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        {experiences.map((exp, index) => (
          <Card 
            key={index} 
            className={classes.card} 
            sx={{ 
              width: '100%',
              '@media (min-width: 501px) and (max-width: 800px)': {
                width: '48%',
              },
              '@media (min-width: 801px)': {
                width: '30%',
              },
            }}
          >
            <Tooltip title="More Info">
              <IconButton
                size="small"
                color="primary"
                className={classes.infoIcon}
                onClick={() => handleClickOpen(exp.dialogContent)}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <CardContent>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {exp.subtitle}
              </Typography>
              <Typography variant="body2">{exp.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ width: '100%', padding: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Professional Training
        </Typography>
        <TextField
          label="Search Training"
          variant="outlined"
          fullWidth
          margin="dense"
          onChange={handleSearchChange}
        />
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 'calc(100vh - 400px)',
            overflowY: 'auto',
            width: '100%',
            '@media (max-width: 500px)': {
              maxHeight: 'calc(100vh - 300px)',
              width: '100%',
            },
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel>Training Name</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Completed Date</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Details</TableSortLabel>
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTraining
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((training, index) => (
                  <TableRow key={index}>
                    <TableCell>{training.name}</TableCell>
                    <TableCell>{training.completedDate}</TableCell>
                    <TableCell>{training.details}</TableCell>
                    <TableCell>
                      <Tooltip title="View Details">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => handleTrainingDialogOpen(training)}
                        >
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredTraining.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPageOptions={[rowsPerPage]}
          />
        </TableContainer>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            width: '40%',
            maxWidth: '40%',
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
              {dialogContent?.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: '16px' }}>
          <Typography variant="body1" gutterBottom>
            {dialogContent?.details}
          </Typography>
          {dialogContent?.impacts &&
            dialogContent.impacts.map((impact, idx) => (
              <Accordion
                key={idx}
                expanded={expandedDialog === `panel${idx}`}
                onChange={handleDialogAccordionChange(`panel${idx}`)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${idx}-content`} id={`panel${idx}-header`}>
                  <Typography variant="h6">{impact.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{impact.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Box>
      </Dialog>
      <Dialog
        open={trainingDialogOpen}
        onClose={handleTrainingDialogClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: 0,
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            height: '100vh',
            padding: 0,
          },
        }}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#1976d2' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleTrainingDialogClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Training Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: '16px' }}>
          <Typography variant="h6">{selectedTraining?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Completed Date: {selectedTraining?.completedDate}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '8px' }}>
            {selectedTraining?.details}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Experience;
