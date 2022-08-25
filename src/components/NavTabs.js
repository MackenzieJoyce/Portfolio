import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaUser, FaCode, FaPhone, FaFileAlt } from 'react-icons/fa';

const styles = {
  nav: {
    marginBottom: 20
  }
};

const NavTabs = () => {
  return (
    <header>
      <Tabs
        style={styles.nav}
        centered
        sx={{
          button: { color: '#fff' },
          'button:hover': { color: 'gray' },
          'button.Mui-selected': { color: '#FF8E53' },
          '.css-1aquho2-MuiTabs-indicator': { background: '#FE6B8B' }
        }}
      >
        <Link to='/'>
          <Tab icon={<FaUser />} label='ABOUT' />
        </Link>
        <Link to='/portfolio'>
          <Tab icon={<FaCode />} label='PORTFOLIO' />
        </Link>
        <Link to='/contact'>
          <Tab icon={<FaPhone />} label='CONTACT' />
        </Link> 
        <Link to='/resume'>
          <Tab icon={<FaFileAlt />} label='RESUME' />
        </Link>
      </Tabs>
    </header>
  );
};

export default NavTabs;
