import React from 'react';
import {
  FaGithub,
  FaTwitterSquare,
  FaDiscord,
  FaLinkedin
} from 'react-icons/fa';

// import { Link } from 'react-router-dom';

const styles = {
  // title: {
  //   margin: '0 8%'
  // },
  // list: {
  //   display: 'flex',
  //   flexDirection: 'column'
  // },
  // span: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center'
  // },
  // a: {
  //   padding: '5%',
  //   fontSize: '1.1rem',
  //   lineHeight: '1.7rem'
  // },
  // emailMe: {
  //   marginTop: '5%',
  //   fontSize: '1.5rem'
  // },
  // icons: {
  //   fontSize: '2.4rem',
  //   marginBottom: '5%'
  // },
  // ul: {
  //   display: 'flex',
  //   justifyContent: 'space-around'
  // }
};

const Contact = () => {
  return (
    <div className="contentLittle">
        <h3 className="title contactTitle" style={styles.title}>
          Get In Touch
        </h3>
        <div className="contactList squareContent" style={styles.list}>
          <div className="contactEmailMe" style={styles.emailMe}>
            {/* <Link to="/contact/email"> */}
            <a
              href="mailto:MackenzieJoyce414@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email Address: MackenzieJoyce414@gmail.com"
            >
              Email Me!
            </a>
            {/* </Link> */}
          </div>
          <ul className="contactUlTag" style={styles.ul}>
            <div>
              {/* ^ style={styles.sides} */}
              <li className="contactATag" style={styles.a}>
                <a
                  href="https://github.com/MackenzieJoyce"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github: MackenzieJoyce"
                >
                  <span className="contactSpanTag" style={styles.span}>
                    <FaGithub className="contactIcons" style={styles.icons} />
                    GitHub - MackenzieJoyce
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
                    LinkedIn - MackenzieJoyce
                  </span>
                </a>
              </li>
            </div>

            <div>
              {/* ^ style={styles.sides} */}
              <li className="contactATag" style={styles.a}>
                <a
                  href="https://twitter.com/FreshCodeFish"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter: FreshCodeFish"
                >
                  <span className="contactSpanTag" style={styles.span}>
                    <FaTwitterSquare
                      className="contactIcons"
                      style={styles.icons}
                    />
                    Twitter - FreshCodeFish
                  </span>
                </a>
              </li>

              <li className="contactATag" style={styles.a}>
                <span className="contactSpanTag" style={styles.span}>
                  <FaDiscord className="contactIcons" style={styles.icons} />
                  Discord - MackenzieJoyce#5843
                </span>
              </li>
            </div>
          </ul>
        </div>
    </div>
  );
};

export default Contact;
