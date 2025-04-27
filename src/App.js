import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Home from './components/Home';
import PhotoGallery from './components/PhotoGallery';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publication from './components/Publication';
import CertificateGallery from './components/CertificateGallery';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div style={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
        <AppBar position="static" style={{ flexWrap: 'wrap' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Navigation Tab"
            variant="scrollable"
            scrollButtons="auto"
            style={{ width: '100%' }}
          >
            <Tab
              label="Home"
              icon={<HomeIcon sx={{ color: value === 0 ? 'gold' : 'inherit' }} />}
              component={Link}
              to="/"
              style={{ textTransform: 'none', transition: 'color 0.3s' }}
              sx={{
                '&:hover': { color: 'gold' },
                color: value === 0 ? 'gold' : 'inherit',
              }}
            />
            <Tab
              label="Projects"
              icon={<CodeIcon sx={{ color: value === 1 ? 'gold' : 'inherit' }} />}
              component={Link}
              to="/projects"
              style={{ textTransform: 'none', transition: 'color 0.3s' }}
              sx={{
                '&:hover': { color: 'gold' },
                color: value === 1 ? 'gold' : 'inherit',
              }}
            />
            <Tab
              label="Experience"
              icon={<WorkIcon sx={{ color: value === 2 ? 'gold' : 'inherit' }} />}
              component={Link}
              to="/experience"
              style={{ textTransform: 'none', transition: 'color 0.3s' }}
              sx={{
                '&:hover': { color: 'gold' },
                color: value === 2 ? 'gold' : 'inherit',
              }}
            />
            <Tab
              label="Publication"
              icon={<MenuBookIcon sx={{ color: value === 3 ? 'gold' : 'inherit' }} />}
              component={Link}
              to="/publication"
              style={{ textTransform: 'none', transition: 'color 0.3s' }}
              sx={{
                '&:hover': { color: 'gold' },
                color: value === 3 ? 'gold' : 'inherit',
              }}
            />
            <Tab
              label="Moments"
              icon={<PhotoCameraIcon sx={{ color: value === 4 ? 'gold' : 'inherit' }} />}
              component={Link}
              to="/moments"
              style={{ textTransform: 'none', transition: 'color 0.3s' }}
              sx={{
                '&:hover': { color: 'gold' },
                color: value === 4 ? 'gold' : 'inherit',
              }}
            />
          </Tabs>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moments" element={<PhotoGallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publication" element={<Publication />} />
          <Route path='/CertificateGallery' element={<CertificateGallery />} />
          <Route path="*" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;