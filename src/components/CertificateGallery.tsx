import React, { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDialog from "./FileDialog";
import SectionHeader from "./fx/SectionHeader";
import Reveal from "./fx/Reveal";
import TiltCard from "./fx/TiltCard";

interface Certificate {
  title: string;
  type: "image" | "pdf";
  file: string;
}

const certificates: Certificate[] = [
  { title: "ITC Infotech Certificate of Recognition", type: "image", file: "/c0.png" },
  { title: "PwC D'Art of Disruption", type: "image", file: "/c1.jpeg" },
  { title: "AWS Partner Cloud Economics Accrediation", type: "pdf", file: "/c2.pdf" },
  { title: "AWS Partner Accrediation Business Digital", type: "pdf", file: "/c3.pdf" },
  { title: "AWS Certified Cloud Practitioner", type: "pdf", file: "/c4.pdf" },
  { title: "AWS Certified Solution Architect", type: "pdf", file: "/c5.pdf" },
  { title: "PwC NodeJS Learning Program", type: "pdf", file: "/c6.pdf" },
  { title: "Linkedin Learning: Cloud Native Projects: Azure Serverless", type: "pdf", file: "/c7.pdf" },
  { title: "Udemy University of Alberta Object-Oriented Design", type: "pdf", file: "/c8.pdf" },
  { title: "Coursera Building Modern Python Applications on AWS", type: "pdf", file: "/c9.pdf" },
  { title: "Building Modern Python Applications on AWS", type: "pdf", file: "/c10.pdf" },
];

export default function CertificatesGallery() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <div className="page">
      <SectionHeader
        kicker={`${String(certificates.length).padStart(2, "0")} / Certificates`}
        title="Certificates"
        sub="Cloud, engineering and design credentials. Click one to view it."
      />

      <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {certificates.map((c, i) => (
          <Reveal key={c.file} delay={(i % 4) * 60}>
            <TiltCard
              className="cert-card"
              role="button"
              tabIndex={0}
              onClick={() => setSelected(c)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(c)}
            >
              <div className="thumb">
                {c.type === "image" ? (
                  <img src={c.file} alt={c.title} loading="lazy" />
                ) : (
                  <PictureAsPdfIcon sx={{ fontSize: 72, color: "var(--pink)", filter: "drop-shadow(0 0 18px rgba(244,114,182,.5))" }} />
                )}
              </div>
              <div className="title">{c.title}</div>
              <span className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase" }}>{c.type}</span>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {selected && (
        <FileDialog
          open
          onClose={() => setSelected(null)}
          title={selected.title}
          fileUrl={selected.file}
          fileType={selected.type}
        />
      )}
    </div>
  );
}
