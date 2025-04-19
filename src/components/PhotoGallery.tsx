/// <reference types="webpack-env" />
import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../App.css"; // Ensure the CSS animations are applied

// Dynamically import all images from the moments folder
const importAll = (requireContext: __WebpackModuleApi.RequireContext): { src: string; title: string }[] =>
  process.env.NODE_ENV === "test"
    ? [] // Return an empty array in tests
    : requireContext.keys().map((key: string) => ({
        src: requireContext(key).default || requireContext(key),
        title: key.replace("./", "").replace(".png", "").replace(/_/g, " "),
      }));

const photos = importAll(
  process.env.NODE_ENV === "test"
    ? ({
        keys: () => [],
        resolve: () => "",
        id: "mock",
      } as unknown as __WebpackModuleApi.RequireContext) // Mock require.context in tests
    : require.context("/src/static/img/moments", false, /\.png$/)
);

function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Default to the first image
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Track animation state

  if (photos.length === 0) {
    return <div>No photos available</div>; // Handle empty photos array
  }

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
    <Dialog
      open={true}
      maxWidth="md"
      PaperProps={{
        sx: {
          position: "absolute",
          width: "80%",
          height: "80%",
          top: "50%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          borderRadius: "16px",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#ffffff",
          padding: "16px",
          "@media (max-width: 500px)": {
            left: "40%",
            transform: "translate(-50%, -50%)",
          },
          "@media (min-width: 501px) and (max-width: 1024px)": {
            maxWidth: "600px",
          },
          "@media (min-width: 1025px)": {
            maxWidth: "800px",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
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
            src={photos[selectedIndex]?.src || ""}
            alt={photos[selectedIndex]?.title || "Photo"}
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
