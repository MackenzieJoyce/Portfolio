import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaUser, FaCode, FaPhone, FaFileAlt } from 'react-icons/fa';

// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

// import projects from './pages/compPlugins/projects';

const styles = {
  nav: {
    marginBottom: '3%',
    width: '75%',
  }, 
  header: { 
    width: '100%',
  }
};

const NavTabs = () => {
  // Says which tab is currently clicked
  const [selectedTab, setSelectedTab] = useState(0);

  // Fxn triggered whenever you click another tab

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <header style={styles.header}>
      <Tabs
        onClick={selectedTab}
        onChange={handleChange}
        style={styles.nav}
        sx={{
          button: { color: '#fff' },
          'button:hover': { color: 'gray' },
          // 'button.Mui-selected': { color: '#FF8E53' },
          // 'button:focus': { color: '#FF8E53', borderBottom: '3px solid #ffdf5d'},
          '.css-1aquho2-MuiTabs-indicator': { background: '#FE6B8B' },
          'div.MuiTabs-scroller.MuiTabs-fixed.css-jpln7h-MuiTabs-scroller': {
            width: '530px'
          },
          // 'div.MuiTabs-scroller.MuiTabes-fixed div.MuiTabs-flexContainer.css-heg063-MuiTabs-flexContainer': { display: 'flex', justifyContent: 'center' }
        }}
      >
        <Link to="/">
          <Tab icon={<FaUser />} label="ABOUT" />
        </Link>
        <Link to="/project">
          <Tab icon={<FaCode />} label="PORTFOLIO" />
        </Link>
        <Link to="/contact">
          <Tab icon={<FaPhone />} label="CONTACT" />
        </Link>
        <Link to="/resume">
          <Tab icon={<FaFileAlt />} label="RESUME" />
        </Link>
      </Tabs>
      {/* {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Portfolio projects={projects} />}
      {selectedTab === 2 && <Contact />}
      {selectedTab === 3 && <Resume />} */}
    </header>
  );
};

export default NavTabs;
