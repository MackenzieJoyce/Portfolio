import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="projectCard">
      <img src={project.img} alt={project.title} />
      <div className='projectCardContent'>
        <h3 className="title">{project.title}</h3>
        <p className="">{project.text}</p>
        <span className="standout">{project.tech}</span>
      </div>
    </div>
  );
};

export default Project;
