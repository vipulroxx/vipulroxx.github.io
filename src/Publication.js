import React from "react";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.paper,
	},
}));

function Publication() {
	const classes = useStyles();
	return (
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
	);
}

export default Publication;