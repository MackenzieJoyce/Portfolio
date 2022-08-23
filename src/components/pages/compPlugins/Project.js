// I want this structure to be added to every project in the array
// I really don't think the expressions will fill in like that, but it gives me an idea on where to start

// Taken from  https://tympanus.net/codrops/2011/11/02/original-hover-effects-with-css3/

import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  return (
    <div className="view view-first">
      <h3>{project.title}</h3>
      <p>{project.text}</p>
      <span>{project.tech}</span>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired
};

export default Project;
