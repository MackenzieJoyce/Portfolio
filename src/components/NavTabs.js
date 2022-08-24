import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaUser, FaCode, FaPhone, FaFileAlt } from 'react-icons/fa';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import projects from './pages/compPlugins/projects';

const styles = {
  nav: {
    marginBottom: 30
  }
};

const NavTabs = () => {
  // ^props
  // const { match, history } = props;
  // const { params } = match;
  // const { page } = params;

  // const tabNameToIndex = {
  //   0: 'about',
  //   1: 'portfolio',
  //   2: 'contact',
  //   3: 'resume'
  // };

  // const indexToTabName = {
  //   about: 0,
  //   portfolio: 1,
  //   contact: 2,
  //   resume: 3
  // };

  // Says which tab is currently clicked
  const [selectedTab, setSelectedTab] = React.useState(0);
    // (indexToTabName[page]);

  // Fxn triggered whenever you click another tab
  const handleChange = (event, newValue) => {
    // history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <header>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="icon tabs for navigation"
        style={styles.nav}
        centered
        sx={{
          button: { color: '#fff' },
          'button:hover': { color: 'gray' },
          'button.Mui-selected': { color: '#FF8E53' },
          '.css-1aquho2-MuiTabs-indicator': { background: '#FE6B8B' }
        }}
      >
        {/* <Link to='/'> */}
          <Tab icon={<FaUser />} label='ABOUT' />
        {/* </Link> */}
        {/* <Link to='/portfolio'> */}
          <Tab icon={<FaCode />} label='PORTFOLIO' />
        {/* </Link> */}
        {/* <Link to='/contact'> */}
          <Tab icon={<FaPhone />} label='CONTACT' />
        {/* </Link> */}
        {/* <Link to='/resume'> */}
          <Tab icon={<FaFileAlt />} label='RESUME' />
        {/* </Link> */}
      </Tabs>
      {/* Says: When the tab selected is at # it will show the specific page info */}
      {/* This is sorta like a turnary but not */}
      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Portfolio projects={projects} />}
      {selectedTab === 2 && <Contact />}
      {selectedTab === 3 && <Resume />}
    </header>
  );
};

export default NavTabs;
