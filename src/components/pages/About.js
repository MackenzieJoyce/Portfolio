import React from 'react';

// import profile from '../../img/businessProfile'
// import NavTabs from '../NavTabs';

const styles = {
  profile: {
    width: 320,
    borderRadius: 200,
    margin: '1%'
  }
};

const About = () => {
  return (
    <div className="content contentEntire">
      {/* <NavTabs /> */}
      <div className="contentIndiv">
        <div className="title">
          <img
            style={styles.profile}
            src={require('../../img/businessProfile.jpeg')}
            alt="Mackenzie Joyce"
          />
        </div>
        <h1>Mackenzie Joyce</h1>
      </div>
      <div className="contentIndiv" border-right="1px solid gray">
        <h2 className="title">Front-End Web Developer</h2>
        <p>
          I am a recent graduate of a full-stack coding bootcamp. My strong suit
          is creating web apps that are clean and simple, yet still have
          character and draw people in.
        </p>
        <p>
          Moving forward, I will be honing my skills in front-end frameworks and
          libraries, and continuing my practice in back-end development. I am
          looking for work, so please feel free to meesage me regarding
          opportunities... Or just say hi!
        </p>
      </div>
    </div>
  );
};

export default About;
