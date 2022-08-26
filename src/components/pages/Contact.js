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
    fontSize: '1.3rem',
    display: 'flex',
    flexDirection: 'column'
  },
  span: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  a: {
    padding: 0
  },
  icons: {
    // background: 'linear-gradient(45deg, #ffdf5d 30%, #FF8E53 90%)',
    fontSize: '2rem',
    marginBottom: '5%',
  },
  leftAndRight: {
    width: '100%',
    // marginBottom: '13%',
    display: 'flex',
    justifyContent: 'space-around',
  }, 
  sides: { 
    minWidth: 200,
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
};

const Contact = () => {
  return (
    <>
      <div className="content contentLittle">
        <div>
          <h3 className="title" style={styles.title}>Get In Touch</h3>
          <div style={styles.list}>
            <div>
              <Link to="/Portfolio/contact/email">Email Me!</Link>
            </div>
            <ul  style={styles.leftAndRight}>

              <div style={styles.sides}>
                <li>
                  <div>
                    <a
                      href="https://github.com/MackenzieJoyce"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github: MackenzieJoyce"
                      style={styles.a}
                    >
                      <span style={styles.span}>
                        <FaGithub style={styles.icons} />
                        GitHub - MackenzieJoyce
                      </span>
                    </a>
                  </div>
                </li>

                <li>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/mackenziejoyce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github: MackenzieJoyce"
                      style={styles.a}
                    >
                      <span style={styles.span}>
                        <FaLinkedin style={styles.icons} />
                        LinkedIn - MackenzieJoyce
                      </span>
                    </a>
                  </div>
                </li>
              </div>

              <div style={styles.sides}>
                <li>
                  <div>
                    <a
                      href="https://twitter.com/FreshCodeFish"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter: FreshCodeFish"
                      style={styles.a}
                    >
                      <span style={styles.span}>
                        <FaTwitterSquare style={styles.icons} />
                        Twitter - FreshCodeFish
                      </span>
                    </a>
                  </div>
                </li>

                <li>
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
