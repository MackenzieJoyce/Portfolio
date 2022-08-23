import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaUser, FaCode, FaPhone, FaFileAlt } from 'react-icons/fa';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import project from '../project';

const NavTabs = () => {
  // Says which tab is currently clicked
  const [selectedTab, setSelectedTab] = React.useState(0);

  // Fxn triggered whenever you click another tab
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
      <>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="icon tabs for navigation"
        centered
        // Supposed to make the underline lightBlue 
        // TextIndicatorProps={{sx: { backgroundColor: 'lightBlue', height: 4}}} 
        
        sx={{ 
          "button": { color: '#fff' },
          "button:hover": {color: 'gray'},
          "button.Mui-selected": {color: 'lightBlue'}
        }}
        >
          <Tab icon={<FaUser />} label="ABOUT" />
          <Tab icon={<FaCode />} label="PORTFOLIO" />
          <Tab icon={<FaPhone />} label="CONTACT" />
          <Tab icon={<FaFileAlt />} label="RESUME" />
        </Tabs>
        {/* Says: When the tab selected is at # it will show the specific page info */}
        {/* This is sorta like a turnary but not */}
        {selectedTab === 0 && <About />}
        {selectedTab === 1 && <Portfolio project={project} />}
        {selectedTab === 2 && <Contact />}
        {selectedTab === 3 && <Resume />}
      </>
  );
};

export default NavTabs;