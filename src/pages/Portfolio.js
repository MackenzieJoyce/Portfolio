import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Project from './components/Project';

const styles = {
  projectContainer: {
    // width: '70%',
    padding: 0,
    display: 'flex'
    // flexWrap: 'wrap'
  }
};

const Portfolio = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="contentEntire" style={styles.projectContainer}>
      <Carousel
        style={styles.arrow}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {/* Bringing in the Project component as a prop */}
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
