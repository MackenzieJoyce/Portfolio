import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const styles = {
  ul: {
    // width: '100%',
    //   margin: '0 5%',
    position: 'fixed',
    bottom: 0,
    left: 10,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-end'
    alignItems: 'center'
  },
  a: {
    padding: '10%'
  }
};

const Footer = () => {
  return (
    <ul className="contactUlTag" style={styles.ul}>
      <li className="contactATag" style={styles.a}>
        <a
          href="https://github.com/MackenzieJoyce"
          target="_blank"
          rel="noopener noreferrer"
          title="Github: MackenzieJoyce"
        >
          <span className="contactSpanTag" style={styles.span}>
            <FaGithub className="contactIcons" style={styles.icons} />
          </span>
        </a>
      </li>

      <li className="contactATag" style={styles.a}>
        <a
          href="https://www.linkedin.com/in/mackenziejoyce/"
          target="_blank"
          rel="noopener noreferrer"
          title="Github: MackenzieJoyce"
        >
          <span className="contactSpanTag" style={styles.span}>
            <FaLinkedin className="contactIcons" style={styles.icons} />
          </span>
        </a>
      </li>

      <li className="contactATag" style={styles.a}>
        <a
          href="https://twitter.com/FreshCodeFish"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter: FreshCodeFish"
        >
          <span className="contactSpanTag" style={styles.span}>
            <FaTwitterSquare className="contactIcons" style={styles.icons} />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Footer;