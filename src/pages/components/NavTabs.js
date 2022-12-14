import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCode,
  // faEnvelope
} from '@fortawesome/free-solid-svg-icons';


const NavTabs = () => {

  return (
    <header style={styles.header}>
      <nav style={styles.nav} aria-label='styled tabs'>
        <Link style={styles.navTab} className='navTab' to='/'>
          <FontAwesomeIcon icon={faUser} />
          <span>ABOUT</span>
        </Link>
        <Link
          style={styles.navTab}
          className='navTab'
          to='/portfolio'
        >
          <FontAwesomeIcon icon={faCode} />
          <span>PORTFOLIO</span>
        </Link>
        {/* <Link style={styles.navTab} className='navTab' to='/contact-me'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>CONTACT ME</span>
        </Link> */}
      </nav>
    </header>
  );
};

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

export default NavTabs;
