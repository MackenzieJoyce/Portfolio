import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';

// import Project from './components/Project';

const styles = {
  projectContainer: {
    // width: '70%',
    padding: 0,
    display: 'flex',
    height: 'fit-content'
    // flexWrap: 'wrap'
  },
  aTag: {
    padding: 0
  },
  img: {
    width: '50%'
  }
};

const Portfolio = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="contentEntire" style={styles.projectContainer}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* Bringing in the Project component as a prop */}
        {projects.map((project) => (
          // <Project key={project.id} project={project} />
          <Carousel.Item key={project.id}>
            <a
              href={project.link}
              style={styles.aTag}
              target="_blank"
              rel="noopener noreferrer"
              className="projectEntire"
            >
              <img
                src={project.img}
                alt={project.title}
                style={styles.img}
                className="projectImg"
              />
            </a>
            <Carousel.Caption>
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <p>{project.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
