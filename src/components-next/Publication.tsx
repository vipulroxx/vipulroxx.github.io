import React from "react";
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";


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
			<li>Used Supervised Learning to predict whether cancer present is through Benign or Malignant tumour using ReLU and sigmoid function.</li>
			<li>Sanitized the dataset by correlating and one hot encoding all the features for getting relevant features to be used as inputs to DNN classifier</li>
			<li>Achieved 94% accuracy on a 5 layered DNN, providing better results compared to other earlier works</li> 
			</Typography>
			{/* Publication Button */}
			<Button size="large" color="secondary" variant="contained" href="https://indersci.scienceconnect.io/api/oauth/authorize?ui_locales=en&scope=affiliations+login_method+merged_users+openid+settings&response_type=code&redirect_uri=https%3A%2F%2Fwww.inderscienceonline.com%2Faction%2FoidcCallback%3FidpCode%3Dconnect&state=Dps2IO0LOrpSUAYYguc7KpMagiP%2BIkg0XqeTxxiXDcoMUsy1tr1sUr%2BpEJNPT%2B4X9d8lXi0ojbxHP3m5LcVrkQiJBsCo7l7tzW8Sns3oAS%2B%2F%2Fbc1rYYx5sJfonHHclqFSWWcRN%2B9YC5UoTLggTDfwYdAiYnlMRRgadgqTZ6AJ9c%3D&prompt=none&nonce=emaHTjr0RwfPil9CG01NEvyRu11THsilqSvHUTVELBM%3D&client_id=indersci" target="_blank" className="resume-button">
				READ
			</Button>
			</CardContent>
		</CardActionArea>
		</Card>
	);
}

export default Publication;