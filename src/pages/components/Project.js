import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-bootstrap/Carousel';

const styles = {
  aTag: {
    padding: 0
  },
  img: {
    // width: '60%',
    // height: 440,
    background: 'rgb(255, 223, 93, 0.5)',
    borderRadius: 5
  }
};

const Project = ({ project }) => {
  return (
    <a
      href={project.link}
      style={styles.aTag}
      target="_blank"
      rel="noopener noreferrer"
      className='projectEntire'
    >
      <img src={project.img} alt={project.title} style={styles.img}  className='projectImg'/>
      <div className='projectInfo'>
        <h3>{project.title}</h3>
        <p>{project.tech}</p>
        <p>{project.text}</p>
      </div>
    </a>
  );
};

export default Project;
