/// <reference types="webpack-env" />
import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../App.css"; // Ensure the CSS animations are applied

// Dynamically import all images from the moments folder
const importAll = (requireContext: __WebpackModuleApi.RequireContext): { src: string; title: string }[] =>
  requireContext.keys().map((key: string) => ({
    src: requireContext(key).default || requireContext(key),
    title: key.replace("./", "").replace(".png", "").replace(/_/g, " "),
  }));

const photos = importAll(require.context("/src/static/img/moments", false, /\.png$/));

function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Default to the first image
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Track animation state

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
        setIsTransitioning(false);
      }, 500); // Match the animation duration
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsTransitioning(false);
      }, 500); // Match the animation duration
    }
  };

  const handleClose = () => {
    window.location.href = "/"; // Redirect to the home page
  };

  return (
    <Dialog open={true} maxWidth="md" PaperProps={{ sx: { overflow: "hidden", borderRadius: "16px" } }}>
      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "1rem",
          backgroundColor: "#f5f5f5", // Match the app's background color
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
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
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <div
          className={`photo-container ${isTransitioning ? "fade-out" : "fade-in"}`}
          style={{
            width: "90%",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
          }}
        >
          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 16,
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
}

export default PhotoGallery;
