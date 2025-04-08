import React, { useState } from "react";
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Box, Card, CardActionArea, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Publication() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
						onClick={handleClickOpen}
						className="resume-button"
					>
						READ
					</Button>
				</CardContent>
			</CardActionArea>

			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Research Paper - Breast Cancer Classification
						</Typography>
					</Toolbar>
				</AppBar>
				<Box sx={{ height: "calc(100% - 64px)", width: "100%", position: "relative" }}>
					<iframe
						src="/research.pdf"
						title="Research Paper"
						style={{ width: "100%", height: "100%", border: "none" }}
					/>
				</Box>
			</Dialog>
		</Card>
	);
}

export default Publication;