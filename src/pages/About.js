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
    margin: '3% 0% 0% 0%'
  },
  subtitle: {
    marginTop: '2%',
    color: '#ffdf5d'
  },
  button: {
    marginTop: '5%',
    // display: 'flex',
    // justifyContent: 'center'
  }
};

const About = () => {
  return (
    <div className="content contentEntire">
      {/* <NavTabs /> */}
      <div className="contentIndiv">
        <h1 className="squareContent">Mackenzie Joyce</h1>
        <h4 style={styles.subtitle}>Full-Stack Web Developer</h4>
        <p style={styles.aboutP}>Hello there!</p>
        <p style={styles.aboutP}>
          My focus is providing exceptional user experience with great design.
          When creating front-end web apps, I am for a simple design with plenty
          character to leave a great impression.
        </p>
        <p style={styles.aboutP}>
          At the moment I am going through older projects and reworking them to
          include a MERN stack. I am looking for work, so please feel free to
          meesage me regarding opportunities... Or just say hi!
        </p>
        <div style={styles.button}>
          <button className="btn" style={styles.aboutP}>Email Me</button>
        </div>
      </div>

      <div className="squareContent">
        <div className="title aboutTitle">
          <img
            style={styles.profile}
            src={require('../assets/img/businessProfile.jpeg')}
            alt="Mackenzie Joyce"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
