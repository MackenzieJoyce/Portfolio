import React from 'react';

// import profile from '../../img/businessProfile'
// import NavTabs from '../NavTabs';

const styles = {
  // profile: {
  //   width: 320,
  //   borderRadius: 200,
  //   margin: '1%',
  //   // border: '2px solid #f7af88',
  //   boxShadow: '0 0 5px 3px #ffdf5d'
  // }

  aboutP: {
    margin: '2% 0% 0% 0%'
  },
  subtitle: {
    margin: '2% 0 7% 0',
    color: '#ffdf5d'
  },
  button: {
    width: 'fit-content',
    margin: '4% 4% 0 0'
  }
};

const About = () => {
  const handleEmailClick = () => {
    const press = document.createElement('a');
    press.href = 'mailto:MackenzieJoyce414@gmail.com';
    press.target = '_blank';
    press.rel = 'noreferrer';
    press.click();
  }

  const onDownload = () => {
    const press = document.createElement('a');
    press.download = `Resume_Mackenzie_Joyce.pdf`;
    press.href = '../../public/Resume_Mackenzie_Joyce.pdf';
    press.click();
  };

  return (
    <div className="content">
      <div className="contentIndiv">
        <h1>Mackenzie Joyce</h1>
        <h3 style={styles.subtitle}>Full-Stack Web Developer</h3>
        <p>Hello there!</p>
        <p style={styles.aboutP}>
          When creating front-end web apps, I am for a simple design with plenty
          of character to leave a great impression. My focus is on providing
          exceptional user experience with great design.
        </p>
        <p style={styles.aboutP}>
          At the moment I am reworking older projects to include a MERN stack. I
          am looking for work, so please feel free to meesage me regarding
          opportunities... Or just say hi!
        </p>
        <button
          className="btn"
          style={styles.button}
          title="Email Address: MackenzieJoyce414@gmail.com"
          onClick={handleEmailClick}
        >
          Email Me
        </button>
        <button
          className="btn"
          style={styles.button}
          title="Resume"
          onClick={onDownload}
        >
          Download my Resume
        </button>
      </div>

      <div className="aboutImg">
        <img
          style={styles.profile}
          src={require('../assets/img/businessProfile.jpeg')}
          alt="Mackenzie Joyce"
        />
      </div>
    </div>
  );
};

export default About;
