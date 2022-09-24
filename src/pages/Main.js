import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

const styles = {
  aboutP: {
    margin: '2% 0% 0% 0%'
  },
  button: {
    marginTop: '4%'
  },
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

const Main = ({ projects }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
      {/*  */}
      {/* ABOUT */}
      {/*  */}
      <div className="content contentEntire">
        <div className="contentIndiv">
          <h1 className="squareContent">Mackenzie Joyce</h1>
          <h3 style={styles.subtitle}>Full-Stack Web Developer</h3>
          <p>Hello there!</p>
          <p style={styles.aboutP}>
            My focus is providing exceptional user experience with great design.
            When creating front-end web apps, I am for a simple design with
            plenty character to leave a great impression.
          </p>
          <p style={styles.aboutP}>
            At the moment I am going through older projects and reworking them
            to include a MERN stack. I am looking for work, so please feel free
            to meesage me regarding opportunities... Or just say hi!
          </p>
          <button className="btn" style={styles.button} title="Email Me">
            Email Me
          </button>
        </div>

        <div className="squareContent">
          <div className="title aboutTitle">
            <img
              style={styles.profile}
              src={require('../assets/img/businessProfile.jpeg')}
              alt="Mackenzie Joyce"
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* PORTFOLIO */}
      {/*  */}
      <div>
        <h2 style={styles.subtitle}>Projects</h2>

        <div className="contentEntire" style={styles.projectContainer}>
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
        </div>
      </div>
      {/*  */}
      {/* CONTACT */}
      {/*  */}
      <div className="contentEntire">
        <h3 className="title contactTitle" style={styles.title}>
          Get In Touch
        </h3>
        <div>
          <form></form>
        </div>
      </div>
    </>
  );
};

export default Main;
