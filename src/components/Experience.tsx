import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, Tooltip, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, TableSortLabel, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ResumeDialog from './ResumeDialog'; // Reuse the Resume-like dialog component

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '100%',
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
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

  const [openTataSteelDialog, setOpenTataSteelDialog] = useState(false);
  const [openResearchDialog, setOpenResearchDialog] = useState(false);

  const handleOpenTataSteelDialog = () => setOpenTataSteelDialog(true);
  const handleCloseTataSteelDialog = () => setOpenTataSteelDialog(false);

  const handleOpenResearchDialog = () => setOpenResearchDialog(true);
  const handleCloseResearchDialog = () => setOpenResearchDialog(false);

  interface DialogContent {
    title: string;
    details: string;
    impacts?: { title: string; description: string; technologies?: { href: string; src: string; alt: string }[] }[];
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

  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
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
            technologies: [
              { href: "https://azure.microsoft.com/en-us/services/devops/", src: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png", alt: "Azure DevOps" },
              { href: "https://dotnet.microsoft.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", alt: ".NET" },
              { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React" },
              { href: "https://www.microsoft.com/en-us/sql-server", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg", alt: "SQL Server" },
            ],
          },
          {
            title: "PwC Learning & Developments",
            description: "Achieved certifications for all PwC Full Stack Programmes, .NET, Java & Spring Framework, NodeJS, React & Angular Boot Camps.",
            technologies: [
              { href: "https://angular.io", src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "Angular" },
              { href: "https://nodejs.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
              { href: "https://spring.io/projects/spring-boot", src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", alt: "Spring Boot" },
            ],
          },
          {
            title: "External Client: A Healthcare Diagnostics Company",
            description: "Solution Architect, Data Scientist, and Full Stack Developer role for one of the largest healthcare diagnostics centers in India.",
            technologies: [
              { href: "https://azure.microsoft.com/en-us/services/devops/", src: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png", alt: "Azure DevOps" },
              { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
              { href: "https://dotnet.microsoft.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", alt: ".NET" },
              { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React" },
              { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
            ],
          },
          {
            title: "Microsoft Azure Devboards Product Release Notes Plugin",
            description: "Full Stack Developer role for Microsoft Azure Devboards Product Management, Release Notes Plugin using Semantic Kernel, Python, Azure, React, OpenAPI.",
            technologies: [
              { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
              { href: "https://azure.microsoft.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg", alt: "Azure" },
              { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React" },
              { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
              { href: "https://aka.ms/semantic-kernel", src: "https://avatars.githubusercontent.com/u/6154722?s=200&v=4", alt: "Semantic Kernel" },
              { href: "https://www.openapis.org/", src: "https://avatars.githubusercontent.com/u/6844498?s=200&v=4", alt: "OpenAPI" },
            ],
          },
          {
            title: "Absolute Systems and Functions",
            description: "Used Power Query, Microsoft Dataverse, Excel, and LeanIX to perform business data cutovers and transformations, ensuring seamless data migration and integration.",
            technologies: [
              { href: "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro", src: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png", alt: "Dataverse" },
              { href: "https://www.microsoft.com/en-us/microsoft-365/excel", src: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg", alt: "Excel" },
            ],
          },
          {
            title: "Concourse 2.0",
            description: "Played a key role in migrating from Monolith to Event-Based Module Federated Sub-Module Distributed Micro-Front Ends.",
            technologies: [
              { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
              { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React" },
              { href: "https://webpack.js.org/", src: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png", alt: "Webpack" },
              { href: "https://azure.microsoft.com/en-in/", src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", alt: "Azure" },
            ],
          },
          {
            title: "AI Factory: PwC Digital Generative AI Initiative",
            description: "Created Proof of Concept for end-to-end application development and deployment using ChatGPT from OpenAI.",
            technologies: [
              { href: "https://openai.com/chatgpt", src: "https://avatars.githubusercontent.com/u/78924801?s=200&v=4", alt: "ChatGPT" },
              { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
            ],
          },
          {
            title: "Concourse User Story Coach",
            description: "Developed a user story coaching tool using Flask and other Python frameworks as the backend, integrated with Concourse 2.0 for enhanced user story management.",
            technologies: [
              { href: "https://flask.palletsprojects.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", alt: "Flask" },
              { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
            ],
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
      technologies: [
        { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
        { href: "https://opencv.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg", alt: "OpenCV" },
      ],
    },
    {
      title: "Research Project Member",
      subtitle: "Institute of Technical Education and Research, Bhubaneswar",
      description: "Breast Cancer Classification using Deep Neural Network",
      dialogContent: {
        title: "Breast Cancer Classification",
        details: "Developed a deep learning model for breast cancer classification, achieving high accuracy in early detection and aiding in better diagnostic decisions.",
      },
      technologies: [
        { href: "https://www.tensorflow.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
        { href: "https://pytorch.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg", alt: "PyTorch" },
        { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
      ],
    },
    {
      title: "Teaching Assistant",
      subtitle: "University of Minnesota, Morris",
      description: "Introduction to Digital Media Computation using Python Programming Language",
      dialogContent: {
        title: "Teaching Assistant Role",
        details: "Assisted in teaching Python programming for digital media computation, enhancing student engagement and understanding through interactive sessions.",
      },
      technologies: [
        { href: "https://www.python.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
      ],
    },
    {
      title: "Research Project Member",
      subtitle: "University of Minnesota, Morris",
      description: "Power Consumption Project that shows power usage around University in an Android, iOS, and Web-based Application",
      dialogContent: {
        title: "Power Consumption Project",
        details: "Developed a cross-platform application to monitor and visualize power usage across the university, promoting energy efficiency and sustainability.",
      },
      technologies: [
        { href: "https://reactnative.dev/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React Native" },
        { href: "https://firebase.google.com/", src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "Firebase" },
        { href: "https://developer.android.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg", alt: "Android" },
        { href: "https://developer.apple.com/ios/", src: "https://developer.apple.com/assets/elements/icons/ios/ios-128x128_2x.png", alt: "iOS" },
      ],
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
          '@media (max-width: 600px)': {
            flexDirection: 'column',
          },
          '@media (min-width: 601px) and (max-width: 1024px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          '@media (min-width: 1025px)': {
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
              minWidth: '100%',
              position: 'relative',
            }}
          >
            <Tooltip title="More Info">
              <IconButton
                size="small"
                color="primary"
                className={classes.infoIcon}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 1,
                }}
                onClick={() => handleClickOpen(exp.dialogContent)}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                {exp.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                {exp.description}
              </Typography>
              {exp.title === "Project Intern" && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginTop: '8px' }}
                  onClick={handleOpenTataSteelDialog}
                >
                  View Report
                </Button>
              )}
              {exp.title === "Research Project Member" && exp.subtitle.includes("Institute of Technical Education and Research") && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginTop: '8px' }}
                  onClick={handleOpenResearchDialog}
                >
                  View Research
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* Tata Steel Report Dialog */}
      <ResumeDialog
        open={openTataSteelDialog}
        onClose={handleCloseTataSteelDialog}
        title="Tata Steel Internship Final Report"
        pdfUrl="/Tata_Steel_Internship_Final_Report.pdf"
      />
      {/* Research Paper Dialog */}
      <ResumeDialog
        open={openResearchDialog}
        onClose={handleCloseResearchDialog}
        title="Research Paper - Breast Cancer Classification"
        pdfUrl="/research.pdf"
      />
      <Box sx={{ maxWidth: '100%', padding: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Professional Training
        </Typography>
        <TextField
          placeholder="Search Training"
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
            '@media (max-width: 600px)': {
              maxHeight: 'calc(100vh - 300px)',
              width: '100%',
            },
            '@media (max-width: 1024px)': {
              maxHeight: 'calc(100vh - 350px)',
            },
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '0.875rem' }}>
                  <TableSortLabel>Training Name</TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>
                  <TableSortLabel>Completed Date</TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>
                  <TableSortLabel>Details</TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTraining
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((training, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{training.name}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{training.completedDate}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{training.details}</TableCell>
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
            position: 'absolute',
            width: '80%',
            height: '80%',
            top: '50%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '16px',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#ffffff',
            padding: '16px',
            '@media (max-width: 500px)': {
              transform: 'translate(-50%, -50%)',
            },
            '@media (min-width: 501px) and (max-width: 1024px)': {
              maxWidth: '600px',
            },
            '@media (min-width: 1025px)': {
              maxWidth: '800px',
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
                  {impact.technologies && (
                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                      {impact.technologies.map((tech, index) => (
                        <Link key={index} href={tech.href} target="_blank" rel="noopener noreferrer">
                          <img src={tech.src} alt={tech.alt} width="24" height="24" />
                        </Link>
                      ))}
                    </Box>
                  )}
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
            width: '100vw',
            height: '80vh',
            position: 'absolute',
            top: '10%',
            left: 0,
            margin: 0,
            borderRadius: 0,
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            '@media (min-width: 515px)': {
              width: '80%',
              left: '10%',
            },
            '@media (min-width: 1024px)': {
              width: '60%',
              left: '20%',
            },
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
