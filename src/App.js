import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Home from './components/Home';
import PhotoGallery from './components/PhotoGallery';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publication from './components/Publication';
import CertificateGallery from './components/CertificateGallery';
import CursorGlow from './components/fx/CursorGlow';

// Order must match the <Tab> order below.
const TABS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Publication', path: '/publication' },
  { label: 'Moments', path: '/moments' },
];
const TAB_PATHS = TABS.map((t) => t.path);

function AppRoutes() {
  // Derive the active tab from the URL so it stays correct on deep links and back/forward.
  // GitHub Pages redirects /experience to /experience/, so ignore a trailing slash.
  const { pathname } = useLocation();
  const path = (pathname.replace(/\/+$/, '') || '/').toLowerCase();
  const tabIndex = TAB_PATHS.indexOf(path);
  const value = tabIndex !== -1 ? tabIndex : path === '/certificategallery' ? false : 0;

  // Start each page at the top, like a normal multi-page site.
  React.useEffect(() => {
    if (typeof window.scrollTo === 'function' && !/jsdom/.test(navigator.userAgent)) window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="app-shell">
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <CursorGlow />

      <header className="nav-glass">
        <Link to="/" className="nav-logo" aria-label="Vipul Sharma, home">VS</Link>
        <div className="nav-spacer" />
        <Tabs
          value={value}
          textColor="inherit"
          aria-label="Navigation Tab"
          variant="scrollable"
          scrollButtons={false}
          sx={{
            minHeight: 44,
            p: '4px',
            borderRadius: 999,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            maxWidth: '100%',
            // Sliding pill behind the active tab
            '& .MuiTabs-indicator': {
              height: '100%',
              borderRadius: 999,
              background: 'linear-gradient(120deg, rgba(34,211,238,.22), rgba(167,139,250,.22))',
              border: '1px solid rgba(167,139,250,.45)',
              boxShadow: '0 0 20px -4px rgba(167,139,250,.6)',
              zIndex: 0,
            },
          }}
        >
          {TABS.map((tab, i) => (
            <Tab
              key={tab.path}
              label={tab.label}
              component={Link}
              to={tab.path}
              disableRipple
              sx={{
                zIndex: 1,
                minHeight: 36,
                minWidth: 0,
                px: { xs: 1.5, sm: 2.25 },
                py: 0.75,
                borderRadius: 999,
                fontSize: 14,
                color: value === i ? 'var(--text)' : 'var(--muted)',
                transition: 'color .25s',
                '&:hover': { color: 'var(--text)' },
              }}
            />
          ))}
        </Tabs>
      </header>

      <main key={path} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/moments" element={<PhotoGallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publication" element={<Publication />} />
          <Route path='/CertificateGallery' element={<CertificateGallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
