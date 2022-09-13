import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faPhone, faFileLines } from '@fortawesome/free-solid-svg-icons';

// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

// import projects from './pages/compPlugins/projects';

const styles = {
  // header: {
  //   width: '60%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // nav: {
  //   margin: '2%',
  //   width: '75%',
  //   display: 'flex',
  //   justifyContent: 'space-around'
  // },
  // navTab: { 
  //   minHeight: 42,
  //   display: 'flex',
  //   flexDirection: 'column', 
  //   justifyContent: 'space-between',
  //   padding: '3%', 
  // }
};

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: '#ffdf5d'
//   },
//   '& .MuiTabs-indicatorSpan': {
//     margin: 0,
//     maxWidth: 40,
//     width: '100%',
//     backgroundColor: '#FF8E53'
//   }
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: 'rgba(255, 255, 255, 0.7)',
//     '&.Mui-selected': {
//       color: '#fff'
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)'
//     }
//   })
// );

const NavTabs = () => {
  // ^^^ { currentPage, handlePageChange }
  // Says which tab is currently clicked
  // const [selectedTab, setSelectedTab] = useState(0);

  // Fxn triggered whenever you click another tab
  // const handleChange = (event, newValue) => {
  //   setSelectedTab(newValue);
  // };

  // const [pages] = useState([
  //   {name: 'About'},
  //   {name: 'Portfolio'},
  //   {name: 'Contact'},
  //   {name: 'Resume'}
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <header style={styles.header}>
      <nav
        // value={value}
        // onChange={handleChange}
        style={styles.nav}
        aria-label="styled tabs"
        // sx={{
        //   button: { color: '#fff' },
        //   'button:hover': { color: 'gray' }
        // 'button.Mui-selected': { color: '#FF8E53' },
        // 'button:focus': { color: '#FF8E53', borderBottom: '3px solid #ffdf5d'},
        // '.css-1aquho2-MuiTabs-indicator': { background: '#FE6B8B' },
        // 'div.MuiTabs-scroller.MuiTabs-fixed.css-jpln7h-MuiTabs-scroller': {
        //   width: '530px'
        // }
        // 'div.MuiTabs-scroller.MuiTabes-fixed div.MuiTabs-flexContainer.css-heg063-MuiTabs-flexContainer': { display: 'flex', justifyContent: 'center' }
        // }}
      >
        <Link style={styles.navTab} className='navTab' to="/">
          {/* <Tab
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-active-link' : 'nav-link'}
          >
            ABOUT
          </Tab> */}
          {/* <StyledTab icon={<FaUser />} label="ABOUT" /> */}
          <FontAwesomeIcon icon={faUser} />
          <span>ABOUT</span>
        </Link>

        <Link style={styles.navTab} className='navTab' to="/portfolio">
          {/* <Tab
            onClick={() => handlePageChange('About')}
            className={
              currentPage === 'Portfolio' ? 'nav-active-link' : 'nav-link'
            }
          >
            PORTFOLIO
          </Tab> */}
          {/* <StyledTab icon={<FaCode />} label="PORTFOLIO" /> */}
          <FontAwesomeIcon icon={faCode} />
          <span>PORTFOLIO</span>
        </Link>

        <Link style={styles.navTab} className='navTab' to="/contact">
          {/* <Tab
            onClick={() => handlePageChange('About')}
            className={
              currentPage === 'Contact' ? 'nav-active-link' : 'nav-link'
            }
          >
            CONTACT
          </Tab> */}
          {/* <StyledTab icon={<FaPhone />} label="CONTACT" /> */}
          <FontAwesomeIcon icon={faPhone} />
          <span>CONTACT</span>
        </Link>

        <Link style={styles.navTab} className='navTab' to="/resume">
          {/* <Tab
            onClick={() => handlePageChange('About')}
            className={
              currentPage === 'Resume' ? 'nav-active-link' : 'nav-link'
            }
          >
            RESUME
          </Tab> */}
          {/* <StyledTab icon={<FaFileAlt />} label="RESUME" /> */}
          <FontAwesomeIcon icon={faFileLines} />
          <span>RESUME</span>
        </Link>
      </nav>
      {/* {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Portfolio projects={projects} />}
      {selectedTab === 2 && <Contact />}
      {selectedTab === 3 && <Resume />} */}
    </header>
  );
};

export default NavTabs;
