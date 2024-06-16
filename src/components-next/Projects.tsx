import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2), // Add spacing between cards
  },
  avatar: {
    backgroundColor: "#f44336",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
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
  // Add more projects as needed
];

function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (index: any) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <>
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
    </>
  );
}

export default Projects;
