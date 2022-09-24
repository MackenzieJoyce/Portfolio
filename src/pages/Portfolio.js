import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';

// import Project from './components/Project';

const styles = {
  subtitle: {
    margin: '0 0 1% 18%',
    color: '#ffdf5d'
  },
  projectContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  aTag: {
    padding: 0
  },
  img: {
    width: '60%'
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
    padding: '2% 0',
    background: '#181818',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const Portfolio = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h2 style={styles.subtitle}>Projects</h2>

      <div className="content" style={styles.projectContainer}>
        <Carousel
          style={styles.carousel}
          activeIndex={index}
          onSelect={handleSelect}
        >
          {/* Bringing in the Project component as a prop */}
          {projects.map((project) => (
            // <Project key={project.id} project={project} />
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
                  // className="projectEntire"
                >
                  <h3>{project.title}</h3>
                  <p style={styles.innerText}>{project.tech}</p>
                  <p style={styles.innerText}>{project.text}</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <h3>One</h3>
        </Carousel.Item>
        <Carousel.Item>
            <h3>Two</h3>
        </Carousel.Item>
        <Carousel.Item>
            <h3>Three</h3>
        </Carousel.Item>
      </Carousel> */}
      </div>
    </>
  );
};

export default Portfolio;
