// I think id needs to be useId
import React from 'react';

const styles = {
  little: {
    width: 400
  },
  short: {
    margin: '0 15%'
  },
  miniTitle: {
    margin: '5% 0 5% 0'
  },
  sides: { 
    width: '100%',
    marginBottom: '10%',
    display: 'flex',
    justifyContent: 'space-around', 
  }
};

const Resume = () => {
    const onDownload = () => {
      const press = document.createElement("a");
      press.download = `Resume_Mackenzie_Joyce.pdf`;
      press.href = "../../public/Resume_Mackenzie_Joyce.pdf";
      press.click();
    };

  return (
    <div className="contentLittle">
      <h3 className="title" style={styles.short}>
        Resume
      </h3>
      <h4 style={styles.miniTitle}>Proficiencies</h4>
      <ul style={styles.sides}>
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
      <h4 style={styles.miniTitle}>Download my Full Resume Here</h4>
      <button className="btn" title="Resume" onClick={onDownload}>Download</button>
    </div>
  );
};

export default Resume;
