import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Project from './components/Project';

const styles = {
  projectContainer: {
    width: 'fit-content',
    padding: 0,
    display: 'flex'    // flexWrap: 'wrap'
  }
};

const Portfolio = ({ projects }) => {
  return (
    <div className="contentEntire" style={styles.projectContainer}>
      <Carousel style={styles.arrow}>
        {/* Bringing in the Project component as a prop */}
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
