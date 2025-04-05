import React, { useState } from "react";
import { styled } from "@mui/material/styles"; // Updated import
import clsx from "clsx";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Updated import
import InfoIcon from "@mui/icons-material/Info"; // Updated import
import Typography from "@mui/material/Typography"; // Updated import
import Card from "@mui/material/Card"; // Updated import
import CardHeader from "@mui/material/CardHeader"; // Updated import
import CardContent from "@mui/material/CardContent"; // Updated import
import CardActions from "@mui/material/CardActions"; // Updated import
import Collapse from "@mui/material/Collapse"; // Updated import
import Avatar from "@mui/material/Avatar"; // Updated import
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Updated import
import IconButton from "@mui/material/IconButton"; // Updated import
import '../App.css';

const PREFIX = 'Projects';

const classes = {
  root: `${PREFIX}-root`,
  avatar: `${PREFIX}-avatar`,
  expand: `${PREFIX}-expand`,
  expandOpen: `${PREFIX}-expandOpen`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2), // Add spacing between cards
  },
  [`& .${classes.avatar}`]: {
    backgroundColor: "#f44336",
  },
  [`& .${classes.expand}`]: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  [`& .${classes.expandOpen}`]: {
    transform: "rotate(180deg)",
  },
}));

const projectsData = [
  {
    title: "Samadhaan",
    subheader: "June, 2021",
    professor: "Monalisa Panda",
    course: "PHP & MySQL",
    description: [
      "Build a concern logging application using PHP, HTML, CSS & JS",
      "Concerns can be logged by a user living in a housing colony and an administrator can attend those concerns",
      "Final system was used in Ambuja Cement Colony at Sindri, Jharkhand and can be visited on ",
      <a href="https://accsindrisamadhan.com" style={{ textDecoration: 'none' }}>ACCSINDRISAMADHAN.COM</a>
    ]
  },
  {
    title: "ITER Academics",
    subheader: "June, 2021",
    professor: "Kaberi Das",
    course: "Senior Design Project",
    description: [
      "Built ITER Academics website which allows users to view course outcomes, departments & course information offered by ITER, SOA",
      "Website was build using single page application development concept with latest tools including ReactJS & material design concept"
    ]
  },
  {
    title: "Information Retrieval from any Document",
    subheader: "February, 2021",
    professor: "Sushree Priyadarshini",
    course: "Information Retrieval",
    description: [
      "Pre-processed the document data by tokenization, stop word removal and stemming in Python",
      "Calculated the term and document frequency to take out the term score after the document was pre-processed",
      "Information was then extracted by taking out the cosine similarity"
    ]
  },
  {
    title: "Diabetes Classification",
    subheader: "February, 2021",
    professor: "Kaberi Das",
    course: "Data Mining",
    description: [
      "Classified the diabetes dataset with 3 different classifiers and compared each framework’s accuracy",
      "Classifiers used were Decision Trees, Bayesian Networks and Neural Networks and were implemented in Python"
    ]
  },
  {
    title: "IPC Sockets, AES Encrypt, MD5 hashed",
    subheader: "February, 2021",
    professor: "Mitrabinda Rai",
    course: "Software Engineering using Android",
    description: [
      "Application build in Android aimed to make customer and vendor interact faster in terms of grocery buying and selling sector respectively",
      "Allowed the user to create a grocery list of their choice from listed products available on the application based on different price points",
      "The final list was converted to PDF and could be send to any vendor through online social messaging platform such as WhatsApp"
    ]
  },
  {
    title: "CPU Schedulers",
    subheader: "October, 2020",
    professor: "Rajshree Das",
    course: "Design of Operating Systems",
    description: [
      "Implemented CPU schedulers using FCFS, SJF, SRTF, and RR based policies",
      "Users could choose their preferred choice of policy and check against the process running from the ready queue",
      "Output given to the user was Gnatt chart, average wait time, average turnaround time and average response time"
    ]
  },
  {
    title: "Lexical Analyzer",
    subheader: "September, 2020",
    professor: "Niranjan Panda",
    course: "Compiler Design",
    description: [
      "Used finite state machine having a set of states, a set of transitions, and a string of input data",
      "FSM was then implemented in C to recognize a list of identifiers and non-negative integers"
    ]
  },
  {
    title: "UNIX System Call and Concepts",
    subheader: "August, 2020",
    professor: "Sanjay Kumar Jena",
    course: "UNIX System Programming",
    description: [
      "Used system calls including fork, wait, strtok and dup2 for processes, tokenizing arguments and duplicating file descriptors",
      "Implemented concepts such as pipes, critical sections and inter process communication in C"
    ]
  },
  {
    title: "Implementation of Algorithms",
    subheader: "August, 2019",
    professor: "Satyaranjan Das",
    course: "Algorithm Design 2",
    description: [
      "Implemented N-Queens, Binomial Coefficient, CYK, Edit Distance, Floyd-Warshall algorithms in C++",
      "Implemented Knapsack, Linear Integer Partition, Backtracking and Matric Chain Order Optimal Parenthesis algorithms in C++"
    ]
  },
  {
    title: "SAGE",
    subheader: "October, 2017",
    professor: "Nicholas McPhee",
    course: "Software Design, Development",
    description: [
      "Developed SAGE (Synonyms, Antonyms, General Sense & Example Usage), a game for teachers and students who want to improve vocabulary",
      "Designed for a classroom setting, the game can be accessed on ",
      <a style={{ textDecoration: "none" }} href="https://sage.cards">SAGE.CARDS</a>,
      "Students try to guess the meaning of a word through hints which is controlled by the teacher"
    ]
  },
  {
    title: "Point of Sales",
    subheader: "September, 2017",
    professor: "Peter Dolan",
    course: "Database Systems",
    description: [
      "Developed a point of sales web application using Angular JS, Node JS and MariaDB",
      "Main features included login utility, editing items for transaction and selling a transaction",
      "Login utility always (re)loaded on display screen showing username and password for a particular user",
      "Built an API providing endpoints for fetching buttons and manipulating transactions"
    ]
  },
  {
    title: "Axxelerate",
    subheader: "August, 2017",
    professor: "Peter Dolan",
    course: "Database Systems",
    description: [
      "Created a Python based search engine using Scrapy for crawling webpages that downloads a webpage and selectively collects information",
      "Crawler could also download more webpages based on the links found in the current webpage",
      "Used MariaDB for the database to store the records and various tables",
      "Database indexed a Binary Tree, the word column in the keyword table and then just joint with page ordering by PageRank.",
      "Used Flask for the webserver and used Angular 4 and Material Design approach for front end"
    ]
  }
];


function Projects() {
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (index: any) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <Root>
      {projectsData.map((project, index) => (
        <Card key={index} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {index + 1}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={project.title}
            subheader={project.subheader}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Professor: </b>
              {project.professor}
              <br />
              <b>Course: </b>
              {project.course}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="info">
              <InfoIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded === index,
              })}
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded === index}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded === index} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Key Points:</Typography>
              <Typography paragraph>
                {project.description.map((point, idx) => (
                  <React.Fragment key={idx}>{point}</React.Fragment>
                ))}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Root>
  );
}

export default Projects;
