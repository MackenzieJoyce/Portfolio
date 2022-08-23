import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaUser, FaCode, FaPhone, FaFileAlt } from 'react-icons/fa';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import project from './project';


const App = () => {
  // Says which tab is currently clicked
  const [selectedTab, setSelectedTab] = React.useState(0);

  // Fxn triggered whenever you click another tab
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <header>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="icon tabs for navigation"
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
    </header>
  );
};

export default App
