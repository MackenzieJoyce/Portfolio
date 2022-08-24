import React from 'react';

const Project = ({ project }) => {
  return (
    <>
      <a href={project.link}>
        <img src={project.img} alt={project.title} height='400px' />
        <h3>{project.title}</h3>
      </a>
    </>

    // <div className="projectCard">
    //   <img src={project.img} alt={project.title} />
    //   <div className='projectCardContent'>
    //     <h3 className="title">{project.title}</h3>
    //     <p className="">{project.text}</p>
    //     <span className="standout">{project.tech}</span>
    //   </div>
    // </div>
  );
};

export default Project;
