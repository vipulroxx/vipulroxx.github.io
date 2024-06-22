import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ProjectIcon from '@material-ui/icons/Code';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Achievements from './components-next/Achievements.tsx';
import Experience from './components-next/Experience';
import Home from './components-next/Home';
import Projects from './components-next/Projects';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Navigation Tab">
          <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Experience" icon={<WorkIcon />} {...a11yProps(1)} />
          <Tab label="Achievements" icon={<EmojiEventsIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Projects/> 
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Experience/> 
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Achievements/> 
      </TabPanel>
    </div>
  );
}

export default App;