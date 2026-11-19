import React, { useState } from "react";
import { Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DownloadIcon from "@mui/icons-material/Download";
import ResumeDialog from "./ResumeDialog";
import SectionHeader from "./fx/SectionHeader";
import Reveal from "./fx/Reveal";
import TiltCard from "./fx/TiltCard";

const POINTS = [
  "Used Supervised Learning to predict whether cancer present is through Benign or Malignant tumour using ReLU and sigmoid function.",
  "Sanitized the dataset by correlating and one hot encoding all the features for getting relevant features to be used as inputs to DNN classifier.",
  "Achieved 94% accuracy on a 5 layered DNN, providing better results compared to other earlier works.",
];

function Publication() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      <SectionHeader kicker="01 / Research" title="Publication" sub="Peer-reviewed work in applied deep learning." />

      <Reveal delay={100}>
        <TiltCard className="pub-card" max={4} style={{ marginTop: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <span className="kicker">International Journal of Intelligent System Design and Computing</span>
              <h3 className="section-title" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", marginTop: 18 }}>
                Breast Cancer Classification using Deep Neural Network
              </h3>
              <ul className="pub-points">
                {POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Button variant="contained" size="large" startIcon={<MenuBookIcon />} onClick={() => setOpen(true)}>
                  Read paper
                </Button>
                <Button variant="outlined" size="large" startIcon={<DownloadIcon />} href="/research.pdf" download>
                  Download PDF
                </Button>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="pub-stat gradient-text">94%</div>
              <div className="mono" style={{ color: "var(--muted)", marginTop: 10, fontSize: 13 }}>
                accuracy · 5-layer DNN
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28, flexWrap: "wrap" }}>
                {["Supervised learning", "ReLU + sigmoid", "One-hot encoding"].map((t) => (
                  <span key={t} className="tech-pill" style={{ padding: "6px 12px", fontSize: 13 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>

      <ResumeDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Research Paper - Breast Cancer Classification"
        pdfUrl="/research.pdf"
      />
    </div>
  );
}

export default Publication;
