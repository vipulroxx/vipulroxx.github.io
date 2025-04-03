import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Experience from "./components/Experience";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <Router>
      <nav style={{ padding: "16px", backgroundColor: "#f5f5f5" }}>
        <Link to="/" style={{ marginRight: "16px" }}>Experience</Link>
        <Link to="/gallery">Photo Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
