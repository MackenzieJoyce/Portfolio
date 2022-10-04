import React from 'react';

const Resume = () => {
  return (
    <main className="content">
      <h4 className="resumeSubTitle" style={styles.subTitle}>
        Proficiencies
      </h4>
      <ul className="resumeUl" style={styles.ul}>
        <div>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bulma</li>
          <li>Materials UI</li>
        </div>
        <div>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </div>
      </ul>
    </main>
  );
};

const styles = {
  // underlineSmaller: {
  //   margin: '0 8%'
  // },
  // subTitle: {
  //   margin: '5% 0 5% 0'
  // },
  // ul: {
  //   width: '100%',
  //   marginBottom: '13%',
  //   fontSize: '1.1rem',
  //   // lineHeight: '1.7rem',
  //   display: 'flex',
  //   justifyContent: 'space-around'
  // }
};

export default Resume;
