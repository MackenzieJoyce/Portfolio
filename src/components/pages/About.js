import React from 'react';

// import NavTabs from '../NavTabs';

const About = () => {
  return (
    <div className="content contentEntire">
      {/* <NavTabs /> */}
      <div className="contentIndiv">
        <img
          className="title"
          src="../../../Assets/Business Profile.jpeg"
          alt="Mackenzie Joyce"
        />
        <h1>Mackenzie Joyce</h1>
      </div>
      <div className="contentIndiv">
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
