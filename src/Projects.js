import React from "react";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

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
    backgroundColor: '#f44336',
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

function Projects(){
	const classes = useStyles();
  	const [expandedOne, setExpandedOne] = React.useState(false);
	const [expandedTwo, setExpandedTwo] = React.useState(false);
	const [expandedThree, setExpandedThree] = React.useState(false);
	const [expandedFour, setExpandedFour] = React.useState(false);
	const [expandedFive, setExpandedFive] = React.useState(false);
	const [expandedSix, setExpandedSix] = React.useState(false);
	const [expandedSeven, setExpandedSeven] = React.useState(false);
	const [expandedEight, setExpandedEight] = React.useState(false);
	const [expandedNine, setExpandedNine] = React.useState(false);
	const [expandedTen, setExpandedTen] = React.useState(false);
	const [expandedEleven, setExpandedEleven] = React.useState(false);
	const [expandedTwelve, setExpandedTwelve] = React.useState(false);
	const [expandedThirteen, setExpandedThirteen] = React.useState(false);

  	const handleExpandedOneClick = () => {
    		setExpandedOne(!expandedOne);
  	};
	
	const handleExpandedTwoClick = () => {
		setExpandedTwo(!expandedTwo);
	};

	const handleExpandedThreeClick = () => {
		setExpandedThree(!expandedThree);
	};

	const handleExpandedFourClick = () => {
		setExpandedFour(!expandedFour);
	};

	const handleExpandedFiveClick = () => {
		setExpandedFive(!expandedFive);
	};

	const handleExpandedSixClick = () => {
		setExpandedSix(!expandedSix);
	};

	const handleExpandedSevenClick = () => {
		setExpandedSeven(!expandedSeven);
	};

	const handleExpandedEightClick = () => {
		setExpandedEight(!expandedEight);
	};

	const handleExpandedNineClick = () => {
		setExpandedNine(!expandedNine);
	};

	const handleExpandedTenClick = () => {
		setExpandedTen(!expandedTen);
	};

	const handleExpandedElevenClick = () => {
		setExpandedEleven(!expandedEleven);
	};

	const handleExpandedTwelveClick = () => {
		setExpandedTwelve(!expandedTwelve);
	};

	const handleExpandedThirteenClick = () => {
		setExpandedThirteen(!expandedThirteen);
	};

	return (
		<>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedOne,
			})}
			onClick={handleExpandedOneClick}
			aria-expanded={expandedOne}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedOne} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedTwo,
			})}
			onClick={handleExpandedTwoClick}
			aria-expanded={expandedTwo}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedTwo} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedThree,
			})}
			onClick={handleExpandedThreeClick}
			aria-expanded={expandedThree}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedThree} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedFour,
			})}
			onClick={handleExpandedFourClick}
			aria-expanded={expandedFour}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedFour} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedFive,
			})}
			onClick={handleExpandedFiveClick}
			aria-expanded={expandedFive}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedFive} timeout="auto" unmountOnExit>
			<CardContent>
			<Typography paragraph>Key Points:</Typography>
			<Typography paragraph>
			<li>Application build in Android aimed to make customer and vendor interact faster in terms of grocery buying and selling sector respectively</li>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedSix,
			})}
			onClick={handleExpandedSixClick}
			aria-expanded={expandedSix}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedSix} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedSeven,
			})}
			onClick={handleExpandedSevenClick}
			aria-expanded={expandedSeven}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedSeven} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedEight,
			})}
			onClick={handleExpandedEightClick}
			aria-expanded={expandedEight}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedEight} timeout="auto" unmountOnExit>
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
			title="UNIX System Call and Concepts"
			subheader="August, 2020"
			/>
			<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
			<b>Professor: </b>Sanjay Kumar Jena<br></br>
			<b>Course: </b>UNIX System Programming
			</Typography>
			</CardContent>
			<CardActions disableSpacing>
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedNine,
			})}
			onClick={handleExpandedNineClick}
			aria-expanded={expandedNine}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedNine} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedTen,
			})}
			onClick={handleExpandedTenClick}
			aria-expanded={expandedTen}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedTen} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedEleven,
			})}
			onClick={handleExpandedElevenClick}
			aria-expanded={expandedEleven}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedEleven} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedTwelve,
			})}
			onClick={handleExpandedTwelveClick}
			aria-expanded={expandedTwelve}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedTwelve} timeout="auto" unmountOnExit>
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
			<IconButton>
			<InfoIcon />
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
			[classes.expandOpen]: expandedThirteen,
			})}
			onClick={handleExpandedThirteenClick}
			aria-expanded={expandedThirteen}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expandedThirteen} timeout="auto" unmountOnExit>
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
		</>
	);
}

export default Projects;