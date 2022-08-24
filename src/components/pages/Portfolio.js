import React from 'react';

import Project from './compPlugins/Project';


const Portfolio = ({ projects }) => {
  return (
    <div className="content">
      {/* Bringing in the Project component as a prop */}
      {projects.map((projects) => (
        <Project key={projects.id} project={projects} />
      ))}
    </div>
  );
};

export default Portfolio;
