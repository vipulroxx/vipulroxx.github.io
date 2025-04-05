/// <reference types="webpack-env" />
import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Dynamically import all images from the moments folder
const importAll = (requireContext: __WebpackModuleApi.RequireContext): { src: string; title: string }[] =>
  requireContext.keys().map((key: string) => ({
    src: requireContext(key).default || requireContext(key),
    title: key.replace("./", "").replace(".png", "").replace(/_/g, " "),
  }));

const photos = importAll(require.context("/src/static/img/moments", false, /\.png$/));

function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Default to the first image

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleClose = () => {
    window.location.href = "/"; // Redirect to the home page
  };

  return (
    <Dialog open={true} maxWidth="md" PaperProps={{ sx: { overflow: "hidden" } }}>
      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "1rem", // Add padding for smaller screens
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 16,
            color: "black",
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <img
          src={photos[selectedIndex].src}
          alt={photos[selectedIndex].title}
          style={{
            width: "90%", // Adjust width for responsiveness
            height: "auto",
            objectFit: "contain",
            borderRadius: "16px",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
          }}
        />

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 16,
            color: "black",
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
}

export default PhotoGallery;
