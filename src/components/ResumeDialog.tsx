import React from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Download } from '@mui/icons-material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any>; },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ResumeDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

const ResumeDialog: React.FC<ResumeDialogProps> = ({ open, onClose, title, pdfUrl }) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            {title}
          </Typography>
          <Button href={pdfUrl} download color="inherit" startIcon={<Download />}>
            Download
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: 'calc(100% - 64px)', width: '100%', position: 'relative' }}>
        <iframe
          src={pdfUrl}
          title={title}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </Box>
    </Dialog>
  );
};

export default ResumeDialog;
