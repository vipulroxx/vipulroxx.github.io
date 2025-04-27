import React, { useState } from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import FileDialog from "./FileDialog"; // Adjust path if necessary

interface Certificate {
  title: string;
  type: 'image' | 'pdf'; // Explicitly type 'type'
  file: string;
}

export default function CertificatesGallery() {
  const [selectedFile, setSelectedFile] = useState<{
    open: boolean;
    title: string;
    url: string;
    type: 'image' | 'pdf' | null;
  }>({
    open: false,
    title: "",
    url: "",
    type: null,
  });

  const certificates: Certificate[] = [ // Explicitly type the 'certificates' array
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

  const handleOpenDialog = (title: string, file: string, type: 'image' | 'pdf') => {
    setSelectedFile({ open: true, title: title, url: file, type: type });
  };

  const handleCloseDialog = () => {
    setSelectedFile({ ...selectedFile, open: false });
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
        {certificates.map((certificate, index) => (
          <Card key={index} style={{ width: 250, height: 250 }}>
            <CardActionArea
              onClick={() => handleOpenDialog(certificate.title, certificate.file, certificate.type)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}
            >
              {certificate.type === "image" ? (
                <img
                  src={certificate.file}
                  alt={certificate.title}
                  style={{ width: "80%", height: "auto", objectFit: "contain", marginTop: 20 }}
                />
              ) : (
                <PictureAsPdfIcon style={{ fontSize: 80, color: "red", marginTop: 20 }} />
              )}
              <CardContent>
                <Typography variant="h6" align="center">
                  {certificate.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      {selectedFile.open && selectedFile.type && (
        <FileDialog
          open={selectedFile.open}
          onClose={handleCloseDialog}
          title={selectedFile.title}
          fileUrl={selectedFile.url}
          fileType={selectedFile.type}
        />
      )}
    </div>
  );
}