import React from 'react';

import Project from './Project';

const Portfolio = ({ project }) => {
  return (
    <>
      {/* Bringing in the Project component as a prop */}
      <Project key={project.id} project={project} />
    </>
  );
};

export default Portfolio;
