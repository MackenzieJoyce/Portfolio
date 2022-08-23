import React from 'react';

import Project from './compPlugins/Project';

const Portfolio = ({ project }) => {
  return (
    <div className="content">
      {/* Bringing in the Project component as a prop */}
      <Project key={project.id} project={project} />
    </div>
  );
};

export default Portfolio;
