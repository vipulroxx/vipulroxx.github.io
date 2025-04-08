import React, { useState } from "react";
import { Box, Card, CardContent, CardActions, Dialog, AppBar, Toolbar, IconButton, Typography, Tooltip, Accordion, AccordionSummary, AccordionDetails, Slide, Grid, Paper, TextField } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any>; },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Projects() {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<string | null>(null);
  const [expandedDialog, setExpandedDialog] = useState<string | false>(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClickOpen = (content: string) => {
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogContent(null);
  };

  const handleDialogAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedDialog(isExpanded ? panel : false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const projectsData = [
    {
      title: "Samadhaan",
      subheader: "June, 2021",
      description: "Build a concern logging application using PHP, HTML, CSS & JS...",
      dialogContent: "Concerns can be logged by a user living in a housing colony and an administrator can attend those concerns. Final system was used in Ambuja Cement Colony at Sindri, Jharkhand and can be visited on https://accsindrisamadhan.com.",
      githubLink: "https://github.com/example/samadhaan",
      liveLink: "https://accsindrisamadhan.com",
    },
    {
      title: "ITER Academics",
      subheader: "June, 2021",
      description: "Built ITER Academics website which allows users to view course outcomes...",
      dialogContent: "Website was built using single-page application development concept with latest tools including ReactJS & material design concept.",
      githubLink: "https://github.com/example/iter-academics",
      liveLink: null,
    },
    {
      title: "Information Retrieval from any Document",
      subheader: "February, 2021",
      description: "Pre-processed the document data by tokenization, stop word removal and stemming in Python...",
      dialogContent: "Calculated the term and document frequency to take out the term score after the document was pre-processed. Information was then extracted by taking out the cosine similarity.",
    },
    {
      title: "Diabetes Classification",
      subheader: "February, 2021",
      description: "Classified the diabetes dataset with 3 different classifiers...",
      dialogContent: "Classifiers used were Decision Trees, Bayesian Networks, and Neural Networks and were implemented in Python. Compared each framework’s accuracy.",
    },
    {
      title: "IPC Sockets, AES Encrypt, MD5 hashed",
      subheader: "February, 2021",
      description: "Application built in Android aimed to make customer and vendor interact faster...",
      dialogContent: "Allowed the user to create a grocery list of their choice from listed products available on the application based on different price points. The final list was converted to PDF and could be sent to any vendor through online social messaging platforms such as WhatsApp.",
    },
    {
      title: "CPU Schedulers",
      subheader: "October, 2020",
      description: "Implemented CPU schedulers using FCFS, SJF, SRTF, and RR based policies...",
      dialogContent: "Users could choose their preferred choice of policy and check against the process running from the ready queue. Output given to the user was Gantt chart, average wait time, average turnaround time, and average response time.",
    },
    {
      title: "Lexical Analyzer",
      subheader: "September, 2020",
      description: "Used finite state machine having a set of states, a set of transitions, and a string of input data...",
      dialogContent: "FSM was then implemented in C to recognize a list of identifiers and non-negative integers.",
    },
    {
      title: "UNIX System Call and Concepts",
      subheader: "August, 2020",
      description: "Used system calls including fork, wait, strtok, and dup2 for processes...",
      dialogContent: "Implemented concepts such as pipes, critical sections, and inter-process communication in C.",
    },
    {
      title: "Implementation of Algorithms",
      subheader: "August, 2019",
      description: "Implemented N-Queens, Binomial Coefficient, CYK, Edit Distance, Floyd-Warshall algorithms in C++...",
      dialogContent: "Also implemented Knapsack, Linear Integer Partition, Backtracking, and Matrix Chain Order Optimal Parenthesis algorithms in C++.",
    },
    {
      title: "SAGE",
      subheader: "October, 2017",
      description: "Developed SAGE (Synonyms, Antonyms, General Sense & Example Usage), a game for teachers and students...",
      dialogContent: "Designed for a classroom setting, the game can be accessed on https://sage.cards. Students try to guess the meaning of a word through hints controlled by the teacher.",
    },
    {
      title: "Point of Sales",
      subheader: "September, 2017",
      description: "Developed a point of sales web application using Angular JS, Node JS, and MariaDB...",
      dialogContent: "Main features included login utility, editing items for transaction, and selling a transaction. Built an API providing endpoints for fetching buttons and manipulating transactions.",
    },
    {
      title: "Axxelerate",
      subheader: "August, 2017",
      description: "Created a Python-based search engine using Scrapy for crawling webpages...",
      dialogContent: "Crawler could download more webpages based on the links found in the current webpage. Used MariaDB for the database to store the records and Flask for the webserver. Frontend was built using Angular 4 and Material Design approach.",
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.dialogContent.toLowerCase().includes(searchQuery)
  );

  return (
    <Box sx={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '24px', fontWeight: 'bold' }}>
        Projects
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search projects..."
        onChange={handleSearchChange}
        sx={{ marginBottom: '24px' }}
      />
      <Box sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <Grid 
          container 
          spacing={3} 
          justifyContent="center" 
          sx={{
            '@media (max-width: 500px)': {
              flexDirection: 'column',
              alignItems: 'center',
            },
            '@media (min-width: 501px) and (max-width: 800px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
              display: 'grid',
              gap: '16px',
            },
            '@media (min-width: 801px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
              display: 'grid',
              gap: '16px',
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              key={index} 
              sx={{
                '@media (max-width: 500px)': {
                  width: '100%',
                },
              }}
            >
              <Paper elevation={3} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <Card sx={{ position: 'relative', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: '8px' }}>
                      {project.subheader}
                    </Typography>
                    <Typography variant="body2" sx={{ height: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', padding: '8px 16px' }}>
                    <Tooltip title="View Details">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => handleClickOpen(project.dialogContent)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View on GitHub">
                      <IconButton
                        size="small"
                        color="secondary"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                    {project.liveLink && (
                      <Tooltip title="View Live">
                        <IconButton
                          size="small"
                          color="default"
                          onClick={() => window.open(project.liveLink, "_blank")}
                        >
                          <LaunchIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
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
              Project Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: '16px', maxHeight: '80vh', overflowY: 'auto' }}>
          <Accordion
            expanded={expandedDialog === 'panel1'}
            onChange={handleDialogAccordionChange('panel1')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <Typography variant="h6">Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                {dialogContent}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Projects;
