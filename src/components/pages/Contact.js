import React from 'react';
import {
  FaGithub,
  FaTwitterSquare,
  FaDiscord,
  FaLinkedin
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
// import EmailForm from './compPlugins/EmailForm';

const styles = {
  list: {
    fontSize: '1.3rem',
    display: 'flex',
    flexDirection: 'column'
  },
  span: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  li: {
    margin: '10%'
  },
  a: {
    padding: 0
  }
};

const Contact = () => {
  return (
    <>
      <div className="content contentLittle">
        <div>
          <h3 className="title">Get In Touch</h3>
          <div style={styles.list}>
            <div>
              <Link to="/Portfolio/contact/email">
                Email Me!
              </Link>
            </div>
            <ul>
              <li style={styles.li}>
                <div className="glowOnHover">
                  <a
                    href="https://github.com/MackenzieJoyce"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github: MackenzieJoyce"
                    style={styles.a}
                  >
                    <span style={styles.span}>
                      <FaGithub />
                      GitHub - MackenzieJoyce
                    </span>
                  </a>
                </div>
              </li>

              <li style={styles.li}>
                <div className="glowOnHover">
                  <a
                    href="https://www.linkedin.com/in/mackenziejoyce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github: MackenzieJoyce"
                    style={styles.a}
                  >
                    <span style={styles.span}>
                      <FaLinkedin />
                      LinkedIn - MackenzieJoyce
                    </span>
                  </a>
                </div>
              </li>

              <li style={styles.li}>
                <div className="glowOnHover">
                  <a
                    href="https://twitter.com/FreshCodeFish"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter: FreshCodeFish"
                    style={styles.a}
                  >
                    <span style={styles.span}>
                      <FaTwitterSquare />
                      Twitter - FreshCodeFish
                    </span>
                  </a>
                </div>
              </li>

              <li style={styles.li}>
                <span style={styles.span}>
                  <FaDiscord />
                  Discord - MackenzieJoyce#5843
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
