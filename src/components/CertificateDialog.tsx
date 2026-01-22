import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import FileDialog from "./FileDialog";

interface Certificate {
  title: string;
  type: "image" | "pdf";
  file: string;
}

interface CertificateDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  certificates: Certificate[];
}

export default function CertificateDialog({
  open,
  onClose,
  title,
  certificates,
}: CertificateDialogProps) {
  const [selectedFile, setSelectedFile] = useState<{
    open: boolean;
    title: string;
    url: string;
    type: "image" | "pdf" | null;
  }>({
    open: false,
    title: "",
    url: "",
    type: null,
  });

  const handleOpenFileDialog = (
    certTitle: string,
    file: string,
    type: "image" | "pdf"
  ) => {
    setSelectedFile({ open: true, title: certTitle, url: file, type: type });
  };

  const handleCloseFileDialog = () => {
    setSelectedFile({ ...selectedFile, open: false });
  };

  const handleDownload = (file: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          {title}
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {certificates.map((certificate, index) => (
              <Card
                key={index}
                sx={{
                  width: 250,
                  height: 300,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <CardActionArea
                  onClick={() =>
                    handleOpenFileDialog(
                      certificate.title,
                      certificate.file,
                      certificate.type
                    )
                  }
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flex: 1,
                    padding: "16px",
                  }}
                >
                  {certificate.type === "image" ? (
                    <img
                      src={certificate.file}
                      alt={certificate.title}
                      style={{
                        width: "80%",
                        height: "120px",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <PictureAsPdfIcon
                      sx={{ fontSize: 80, color: "red" }}
                    />
                  )}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      marginTop: "12px",
                    }}
                  >
                    {certificate.title}
                  </Typography>
                </CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "8px",
                    borderTop: "1px solid #eee",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Tooltip title="Download">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        const fileName =
                          certificate.type === "image"
                            ? `${certificate.title}.jpg`
                            : `${certificate.title}.pdf`;
                        handleDownload(certificate.file, fileName);
                      }}
                    >
                      <DownloadIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Card>
            ))}
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: "16px" }}>
          <Button onClick={onClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {selectedFile.open && selectedFile.type && (
        <FileDialog
          open={selectedFile.open}
          onClose={handleCloseFileDialog}
          title={selectedFile.title}
          fileUrl={selectedFile.url}
          fileType={selectedFile.type}
        />
      )}
    </>
  );
}
