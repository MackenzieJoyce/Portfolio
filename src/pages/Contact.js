import React from 'react';
import {
  FaGithub,
  FaTwitterSquare,
  FaDiscord,
  FaLinkedin
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const styles = {
  title: { 
    margin: '0 10% 10% 10%'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  },
  span: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  a: {
    padding: '5%',
    fontSize: '1.1rem',
    lineHeight: '1.7rem',
  },
  emailMe: { 
    fontSize: '1.5rem'
  },
  icons: {
    fontSize: '2.4rem',
    marginBottom: '5%',
  },
  leftAndRight: {
    display: 'flex',
    justifyContent: 'space-around',
  }
};

const Contact = () => {
  return (
    <>
      <div className="content contentLittle">
        <div>
          <h3 className="title" style={styles.title}>Get In Touch</h3>
          <div style={styles.list}>
            <div style={styles.emailMe}>
              <Link to="/contact/email">Email Me!</Link>
            </div>
            <ul style={styles.leftAndRight}>

              <div>
              {/* ^ style={styles.sides} */}
                <li style={styles.a}>
                    <a
                      href="https://github.com/MackenzieJoyce"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github: MackenzieJoyce"
                    >
                      <span style={styles.span}>
                        <FaGithub style={styles.icons} />
                        GitHub - MackenzieJoyce
                      </span>
                    </a>
                </li>

                <li style={styles.a}>
                    <a
                      href="https://www.linkedin.com/in/mackenziejoyce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github: MackenzieJoyce"
                    >
                      <span style={styles.span}>
                        <FaLinkedin style={styles.icons} />
                        LinkedIn - MackenzieJoyce
                      </span>
                      </a>
                </li>
              </div>

              <div>
              {/* ^ style={styles.sides} */}
                <li style={styles.a}>
                    <a
                      href="https://twitter.com/FreshCodeFish"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter: FreshCodeFish"
                      >
                      <span style={styles.span}>
                        <FaTwitterSquare style={styles.icons} />
                        Twitter - FreshCodeFish
                      </span>
                    </a>
                </li>

                <li style={styles.a}>
                  <span style={styles.span}>
                    <FaDiscord style={styles.icons} />
                    Discord - MackenzieJoyce#5843
                  </span>
                </li>
              </div>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
