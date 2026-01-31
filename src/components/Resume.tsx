import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Paper } from '@mui/material';
import { AttachEmailTwoTone, Download, Workspaces, Email, ContentCopy } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any>; },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Resume() {
  const [open, setOpen] = React.useState(false);
  const [showContactDialog, setShowContactDialog] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const email = "vipulsharma936@gmail.com";

  const handleClickOpen = () => {
    setShowContactDialog(true);
  };

  const handleClose = () => {
    setShowContactDialog(false);
    setOpen(false);
  };

  const handleResumeClick = () => {
    setShowContactDialog(false);
    // Use a small timeout to ensure dialog closes before opening resume
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Button
        size="large"
        startIcon={<Workspaces />}
        sx={{
          backgroundColor: "#b4016fb9",
          color: "white",
          "&:hover": { backgroundColor: "#a0015fb9" }
        }}
        onClick={handleClickOpen}
        className="resume-button"
      >
        RESUME
      </Button>

      {/* Contact Dialog */}
      <Dialog
        open={showContactDialog}
        onClose={() => setShowContactDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backdropFilter: 'blur(10px)',
            maxWidth: 500,
            width: '90%'
          }
        }}
      >
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setShowContactDialog(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Email Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <Email sx={{ fontSize: 48 }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              letterSpacing: 1.5
            }}
          >
            Let's Connect!
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              opacity: 0.95,
              lineHeight: 1.6
            }}
          >
            To access my detailed resume, please reach out to me via email. I'm always excited to discuss opportunities and collaborations!
          </Typography>

          {/* Email Box */}
          <Paper
            sx={{
              width: '100%',
              p: 2.5,
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                wordBreak: 'break-all'
              }}
            >
              {email}
            </Typography>
            <IconButton
              onClick={handleCopyEmail}
              sx={{
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
              }}
              size="small"
            >
              <ContentCopy />
            </IconButton>
          </Paper>

          {copied && (
            <Typography variant="caption" sx={{ color: '#90EE90', fontWeight: 600 }}>
              ✓ Email copied to clipboard!
            </Typography>
          )}

          {/* Buttons */}
          <Button
            variant="contained"
            startIcon={<Email />}
            href={`mailto:${email}`}
            sx={{
              width: '100%',
              backgroundColor: 'white',
              color: '#667eea',
              fontWeight: 700,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Send Email
          </Button>

          {/* Footer */}
          <Typography
            variant="caption"
            sx={{
              opacity: 0.8,
              textAlign: 'center',
              mt: 2
            }}
          >
            Looking forward to hearing from you! 🚀
          </Typography>
        </Box>
      </Dialog>

      {/* Resume Dialog */}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              VIPUL SHARMA RESUME - MASTER
            </Typography>
            <Button href="/resume.pdf" download color="inherit" startIcon={<Download />}>
              Download
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ height: 'calc(100% - 64px)', width: '100%', position: 'relative' }}>
          <iframe
            src="/resume.pdf"
            title="Resume"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <Box sx={{ position: 'absolute', top: 20, right: 40 }}>
            <Button variant="contained" color="primary" href="mailto:vipulsharma936@gmail.com">
              <AttachEmailTwoTone /> CONTACT
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <footer>
            <Typography variant="body2" color="text.secondary" align="center">
              &copy; 2024 Vipul Sharma. All rights reserved.
              <br />
              Designed and Developed by Vipul Sharma
            </Typography>
          </footer>
        </Box>
      </Dialog>
    </>
  );
}
