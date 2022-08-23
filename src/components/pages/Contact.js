import React from 'react';
import { FaGithub, FaTwitterSquare, FaDiscord } from 'react-icons/fa';

import EmailForm from './compPlugins/EmailForm';

const styles = {
  title: {
    textAlign: 'center',
    marginBottom: 30
  },
  list: {
    fontSize: '1.5rem',
    display: 'flex',
    flexDirection: 'column'
  },
  span: {
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const Contact = () => {
  return (
    <>
      {/* <h3 style={styles.title}>Get In Touch</h3> */}

      <div className="content contentEntire">
        <div className='contentIndiv'>
        {/* className="container" */}
          <h3 className="title">Get In Touch</h3>
          <div style={styles.list}>
            <span style={styles.span}>
              <FaGithub />
              <a
                href="https://github.com/MackenzieJoyce"
                // target="_blank"
                title="Github: MackenzieJoyce"
              >
                MackenzieJoyce
              </a>
            </span>
            <span style={styles.span}>
              <FaTwitterSquare />
              <a
                href="https://twitter.com/FreshCodeFish"
                // target="_blank"
                title="Twitter: FreshCodeFish"
              >
                FreshCodeFish
              </a>
            </span>
            <span style={styles.span}>
              <FaDiscord />
              MackenzieJoyce#5843
            </span>
            {/* <span>
          <FaDice20 />
          Roll20: RollingUpRoses
        </span> */}
            {/* <span>LinkedIn</span>
        <span>Share this portfolio</span> */}
            {/* 
          <span>
            Phone
            <a href="tel:321.234.5397" title="Phone number: 321.234.5397">
              321.234.5397
            </a>
          </span> */}

            {/* <span style={styles.span}>Email</span> */}
          </div>
        </div>
        <EmailForm />
      </div>
    </>
  );
};

// target _blank's are giving errors

// Add the EmailForm so you can toggle the option

export default Contact;
