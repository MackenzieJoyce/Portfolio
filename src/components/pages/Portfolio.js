import React from 'react';

import Project from './compPlugins/Project';

const styles = { 
  projects: { 
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flex: '0 0 33.333333%'
  }
}

const Portfolio = ({ projects }) => {
  return (
    <div className="content" style={styles.projects}>
      {/* Bringing in the Project component as a prop */}
      {projects.map((projects) => (
        <Project key={projects.id} project={projects} />
      ))}
    </div>
  );
};

export default Portfolio;
