import React from 'react';
import {
  FaGithub,
  FaTwitterSquare,
  FaDiscord,
  FaLinkedin
} from 'react-icons/fa';

import EmailForm from './compPlugins/EmailForm';

const styles = {
  list: {
    fontSize: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  span: {
    marginBottom: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const Contact = () => {
  return (
    <>
      <div className="content contentEntire">
        <div className="contentIndiv">
          <h3 className="title">Get In Touch</h3>
          <div style={styles.list}>
            <a
              href="https://github.com/MackenzieJoyce"
              target="_blank"
              rel="noopener noreferrer"
              title="Github: MackenzieJoyce"
            >
              <span style={styles.span}>
                <FaGithub />
                GitHub - MackenzieJoyce
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/mackenziejoyce/"
              target="_blank"
              rel="noopener noreferrer"
              title="Github: MackenzieJoyce"
            >
              <span style={styles.span}>
                <FaLinkedin />
                LinkedIn - MackenzieJoyce
              </span>
            </a>

            <a
              href="https://twitter.com/FreshCodeFish"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter: FreshCodeFish"
            >
              <span style={styles.span}>
                <FaTwitterSquare />
                Twitter - FreshCodeFish
              </span>
            </a>

            <span style={styles.span}>
              <FaDiscord />
              Discord - MackenzieJoyce#5843
            </span>
          </div>
        </div>
        <EmailForm />
      </div>
    </>
  );
};

export default Contact;
