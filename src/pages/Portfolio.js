import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Portfolio = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="contentPages">
      <h2>Projects</h2>
      <div className="content" style={styles.projectContainer}>
        <Carousel
          className="carouselOfProjects"
          // ^Read in the voice of Carousel of Progress
          style={styles.carousel}
          activeIndex={index}
          onSelect={handleSelect}
        >
          {/* Bringing in the Project component as a prop */}
          {projects.map((project) => (
            <Carousel.Item key={project.id} style={styles.inner}>
              <img
                src={project.img}
                alt={project.title}
                style={styles.img}
                className="projectImg"
              />
              <Carousel.Caption className="carouselCaption">
                <a
                  href={project.link}
                  style={styles.carouselCaption}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 style={styles.projectTitleCarousel}>{project.title}</h3>
                  <p style={styles.projectTechCarousel}>{project.tech}</p>
                  <p style={styles.innerText}>{project.text}</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="listedProjects">
          {projects.map((project) => (
            <div
              key={project.id}
              className="listedProjectContainer"
              style={styles.inner}
            >
              <img
                src={project.img}
                alt={project.title}
                style={styles.listedImg}
                className="projectImg"
              />
              <div className="listedProjectCaption">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectTech}>{project.tech}</p>
                  <p>{project.text}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ^ End of .content */}
    </main>
  );
};

const styles = {
  projectContainer: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  aTag: {
    padding: 0
  },
  img: {
    width: '60%'
  },
  listedImg: {
    width: '80%'
  },
  carousel: {
    width: '90%'
  },
  inner: {
    textAlign: 'center'
  },
  innerText: {
    width: 'fit-content'
  },
  carouselCaption: {
    paddingBottom: '2%',
    background: '#181818',
    border: 'none',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectTitleCarousel: {
    marginBottom: '2%'
  },
  projectTechCarousel: {
    marginBottom: '1%',
    color: '#ffdf5d'
  },
  projectTitle: {
    marginBottom: '3%'
  },
  projectTech: {
    marginBottom: '2%',
    fontSize: '.9rem',
    color: '#ffdf5d'
  }
};

export default Portfolio;
