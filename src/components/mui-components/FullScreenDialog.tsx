// src/mui-components/FullScreenDialog.jsx
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
import { Box } from '@mui/material';
import { Close, Download, Downloading } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
        className="resume-button"
      >
        RESUME
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              VIPUL SHARMA RESUME - MASTER, SEPTEMBER, 2024
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <Close/>
            </Button>
          </Toolbar>
        </AppBar>
        {/* PDF Viewer Section */}
        <Box sx={{ height: 'calc(100% - 64px)', width: '100%', position: 'relative' }}>
        <iframe
          src="/resume.pdf"
          title="Resume"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
        {/* Fallback Download Link */}
        <Box sx={{ position: 'absolute', top: 20, right: 40 }}>
          <Button
            variant="contained"
            color="primary"
            href="/resume.pdf"
            download
          >
            <Download/>
          </Button>
        </Box>
      </Box>
      </Dialog>
    </React.Fragment>
  );
}
