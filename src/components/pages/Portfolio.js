import React from 'react';

import Project from './compPlugins/Project';


const styles = {
  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
};

const Portfolio = ({ projects }) => {
  return (
    <div className="content" style={styles.projectContainer}>
      {/* Bringing in the Project component as a prop */}
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
