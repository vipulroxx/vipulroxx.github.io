import React from "react";
import { Button } from "@mui/material";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

function Publication() {
	return (
		<Card>
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
					<Typography component="div">
						<ul>
							<li>Used Supervised Learning to predict whether cancer present is through Benign or Malignant tumour using ReLU and sigmoid function.</li>
							<li>Sanitized the dataset by correlating and one hot encoding all the features for getting relevant features to be used as inputs to DNN classifier.</li>
							<li>Achieved 94% accuracy on a 5 layered DNN, providing better results compared to other earlier works.</li>
						</ul>
					</Typography>
					<Button 
						size="large" 
						color="secondary" 
						variant="contained" 
						href="https://www.inderscienceonline.com/doi/abs/10.1504/IJISDC.2023.10012345" 
						target="_blank" 
						className="resume-button"
					>
						READ
					</Button>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Publication;