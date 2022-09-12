import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-bootstrap/Carousel';

const styles = {
  aTag: {
    padding: 0
  },
  img: {
    width: '60%',
    // height: 440,
    background: 'rgb(255, 223, 93, 0.5)'
  }
};

const Project = ({ project }) => {
  return (
      <a
        href={project.link}
        style={styles.aTag}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={project.img} alt={project.title} style={styles.img} />
        <h3>{project.title}</h3>
        <span>{project.tech}</span>
        <p>{project.text}</p>
      </a>
  );
};

export default Project;
