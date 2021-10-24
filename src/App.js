import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import ProjectIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import PublicationIcon from '@material-ui/icons/Assessment';
import SchoolIcon from '@material-ui/icons/School'
import InfoIcon from '@material-ui/icons/Info';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import ProfileImage from './1.jpeg';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
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

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Projects" icon={<ProjectIcon />} {...a11yProps(1)} />
          <Tab label="Experience" icon={<WorkIcon />} {...a11yProps(2)} />
          <Tab label="Publications" icon={<PublicationIcon />} {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div class="profile-container">
        <img src={ProfileImage} alt="Vipul Sharma" style={{
          height: "300px",
          width: "300px",
          border: "none",
          borderRadius: "50%",
          float: "left",

        }}></img>
          <h1>VIPUL SHARMA</h1>
          <Chip
            icon={<SchoolIcon />}
            variant="outlined"
            size="small"
            label="ITER, Siksha 'O' Anusandhan"  
            color="secondary"
          /><br></br><br></br>
          
          <a href="https://www.facebook.com/vipulvsss/"><FacebookIcon color="primary" fontSize="large"/></a>
          <a href="https://www.instagram.com/vipuls_ig/"><InstagramIcon color="secondary" fontSize="large"/></a>
          <a href="https://www.linkedin.com/in/vipul-vs-sharma/"><LinkedInIcon color="primary" fontSize="large"/></a>
          <a href="https://twitter.com/vipulVSsharma"><TwitterIcon color="primary" fontSize="large"/></a>
          <a href="https://www.reddit.com/user/vipulroxx"><RedditIcon color="secondary" fontSize="large"/></a>
          <a href="https://github.com/vipulroxx"><GitHubIcon color="primary" fontSize="large"/></a><br></br><br></br>
        
          <Button variant="outlined" color="primary" href="https://drive.google.com/file/d/1psbeamXpHgRB3CJzyXkgf_FxzjmMksFh/view?usp=sharing">
            Resume
          </Button>
        </div>
        <div class="paper-profile">
        <Paper elevation={3} style={{padding: "15px"}}>
          <p>
            My passion for programming has been built exponentially through a very early age when I got introduced to object oriented programming with Java. The idea of building a solution to a problem using functions which could be used recursively greatly amused me as I started my coding career. I remember writing Java codes for easy problems such as sorting and technical questions which gave a spark to my coding ability. As I grew up, this interest builds into a hobby through which I was able to relax my mind while at the same time learning latest technologies built by open-source communities around the world. This gave me confidence as I saw people with better abilities in coding which made me want to look up to them as mentors so I could get better at my hobby which soon turned into my passion.<br></br><br></br>
            The great world of open source helped me build a quality within me, that being of contributing, even so that I was awarded as the finalist of Google Code-in 2014. The contest more over taught me a lot about contributions and how we can do it via various version controls like GitHub. From then on, I have been consistent on GitHub and have send a lot of contributions to various organisations. Working on different android projects and going to hackathons makes me happy. Content fills my heart when I touch the keyboard. Programming has changed my way of conduct. I seem to do things in what I perceive as a logical manner, and I tend to ask 'how do we do this', forcing my brain to break down stuff into individual tasks. I remember less 'what', but more of 'how'. It's some sort of vectorial memory that I like. Programming makes me proud. It defines and completes me.<br></br><br></br>
            With recent advancements in AI, I believe human race can do really well if we make the use of the computational power we have got. It's up to us to save the planet, our home and the generation to come so that they can thrive to do better towards humanity instead. I want to learn and implement my knowledge through the use of powerful computation techniques to get to what I want to achieve in life along with making businesses more productive and efficient through my knowledge and capabilities.
          </p>
        </Paper>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              1
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Samadhaan"
          subheader="June, 2021"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Monalisa Panda<br></br>
            <b>Course: </b>PHP & MySQL
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Build a concern logging application using PHP, HTML, CSS & JS</li>
              <li>Concerns can be logged by a user living in a housing colony and an administrator can attend those concerns</li>
              <li>Final system was used in Ambuja Cement Colony at Sindri, Jharkhand and can be visited on <a href="https://accsindrisamadhan.com" style={{textDecoration: 'none'}}>ACCSINDRISAMADHAN.COM</a></li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              2
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="ITER Academics"
          subheader="June, 2021"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Kaberi Das<br></br>
            <b>Course: </b>Senior Design Project
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Built ITER Academics website which allows users to view course outcomes, departments & course information offered by ITER, SOA</li>
              <li>Website was build using single page application development concept with latest tools including ReactJS & material design concept</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              3
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Information Retrieval from any Document"
          subheader="February, 2021"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Sushree Priyadarshini<br></br>
            <b>Course: </b>Information Retrieval
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Pre-processed the document data by tokenization, stop word removal and stemming in Python</li>
              <li>Calculated the term and document frequency to take out the term score after the document was pre-processed</li>
              <li>Information was then extracted by taking out the cosine similarity</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>


      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              4
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Diabetes Classification"
          subheader="February, 2021"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Kaberi Das<br></br>
            <b>Course: </b>Data Mining
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Classified the diabetes dataset with 3 different classifiers and compared each framework’s accuracy</li>
              <li>Classifiers used were Decision Trees, Bayesian Networks and Neural Networks and were implemented in Python</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              5
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="IPC Sockets, AES Encrypt, MD5 hashed"
          subheader="February, 2021"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Mitrabinda Rai<br></br>
            <b>Course: </b>Software Engineering using Android
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Application build in Android aimed to make customer & vendor interact faster in terms of grocery buying and selling sector respectively</li>
              <li>Allowed the user to create a grocery list of their choice from listed products available on the application based on different price points</li>
              <li>The final list was converted to PDF and could be send to any vendor through online social messaging platform such as WhatsApp</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              6
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="IPC Sockets, AES Encrypt, MD5 hashed"
          subheader="November, 2020"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Suchintan Mishra<br></br>
            <b>Course: </b>UNIX Network Programming
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Built a concurrent server under UNIX by forking a child process which handles multiple client and checked it via Wire-Shark tool</li>
              <li>Encrypted data between servers and clients using AES Symmetric Key which was used for decryption as well</li>
              <li>Preserved integrity of data between server and clients by computing hash values using MD5 hashing method</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              7
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="CPU Schedulers"
          subheader="October, 2020"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Rajshree Das<br></br>
            <b>Course: </b>Design of Operating Systems
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Implemented CPU schedulers using FCFS, SJF, SRTF, and RR based policies</li>
              <li>Users could choose their preferred choice of policy and check against the process running from the ready queue</li>
              <li>Output given to the user was Gnatt chart, average wait time, average turnaround time and average response time</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              8
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Lexical Analyzer"
          subheader="September, 2020"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Niranjan Panda<br></br>
            <b>Course: </b>Compiler Design
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Used finite state machine having a set of states, a set of transitions, and a string of input data</li>
              <li>FSM was then implemented in C to recognize a list of identifiers and non-negative integers</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              9
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="UNIX System Call & Concepts"
          subheader="August, 2020"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Sanjay Kumar Jena<br></br>
            <b>Course: </b>UNIX System Programming
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Used system calls including fork, wait, strtok and dup2 for processes, tokenizing arguments and duplicating file descriptors</li>
              <li>Implemented concepts such as pipes, critical sections and inter process communication in C</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              10
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Implementation of Algorithms"
          subheader="August, 2019"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Satyaranjan Das<br></br>
            <b>Course: </b>Algorithm Design 2
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Implemented N-Queens, Binomial Coefficient, CYK, Edit Distance, Floyd-Warshall algorithms in C++</li>
              <li>Implemented Knapsack, Linear Integer Partition, Backtracking and Matric Chain Order Optimal Parenthesis algorithms in C++</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              11
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="SAGE"
          subheader="October, 2017"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Nicholas McPhee<br></br>
            <b>Course: </b>Software Design, Development
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Developed SAGE (Synonyms, Antonyms, General Sense & Example Usage), a game for teachers and students who want to improve vocabulary</li>
              <li>Designed for a classroom setting, the game can be accessed on <a style={{textDecoration: "none"}} href="https://sage.cards">SAGE.CARDS</a></li>
              <li>Students try to guess the meaning of a word through hints which is controlled by the teacher</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              12
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Point of Sales"
          subheader="September, 2017"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor: </b>Peter Dolan<br></br>
            <b>Course: </b>Database Systems
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
              <li>Developed a point of sales web application using Angular JS, Node JS and MariaDB</li>
              <li>Main features included login utility, editing items for transaction and selling a transaction</li>
              <li>Login utility always (re)loaded on display screen showing username and password for a particular user</li>
              <li>Built an API providing endpoints for fetching buttons and manipulating transactions</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              13
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Axxelerate"
          subheader="August, 2017"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Professor:</b> Peter Dolan<br></br>
            <b>Course:</b> Database Systems
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <InfoIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
            <li>Created a Python based search engine using Scrapy for crawling webpages that downloads a webpage and selectively collects information</li>
            <li>Crawler could also download more webpages based on the links found in the current webpage</li>
            <li>Used MariaDB for the database to store the records and various tables</li>
            <li>Database indexed a Binary Tree, the word column in the keyword table and then just joint with page ordering by PageRank.</li>
            <li>Used Flask for the webserver and used Angular 4 and Material Design approach for front end</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card><br></br>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Accordion expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Advisory Associate</Typography>
          <Typography className={classes.secondaryHeading}>
          PricewaterhouseCoopers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Advisory associate in AppTech at PwC.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handlePanelChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
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
      <Accordion expanded={expanded === 'panel3'} onChange={handlePanelChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
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
      </TabPanel>

      <TabPanel value={value} index={3}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Breast Cancer Classification using Deep Neural Network
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          International Journal of Intelligent System Design and Computing
          </Typography>
        </CardContent>
          <CardContent>
            <Typography paragraph>Key Points:</Typography>
            <Typography paragraph>
            <li>Used Supervised Learning to predict whether cancer present is through Benign or Malignant tumour using ReLU and sigmoid function.</li>
            <li>Sanitized the dataset by correlating and one hot encoding all the features for getting relevant features to be used as inputs to DNN classifier</li>
            <li>Achieved 94% accuracy on a 5 layered DNN, providing better results compared to other earlier works</li> 
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
      </TabPanel>
    </div>
  );
}
