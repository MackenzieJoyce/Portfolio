import React from 'react';

const styles = { 
  aTag: { 
    padding: 0
  }
}

const Project = ({ project }) => {
  return (
    <>
      <a href={project.link} style={styles.aTag}>
        <img src={project.img} alt={project.title} height='440px' />
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
