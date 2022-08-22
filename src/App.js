import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [project, setProject] = useState([
    {
      id: 1,
      title: 'Backyard Jungle',
      text: 'An online forum for Gardeners',
      tech: 'Handlebars/Bootstrap/Express/RESTful API'
    },
    {
      id: 2,
      title: 'Mix Up Movie Night',
      text: 'Your great night chosen by our app',
      tech: 'HTML/CSS/JavaScript'
    },
    {
      id: 3,
      title: 'Note Taker',
      text: 'Simple design for all your complicated tasks',
      tech: 'React'
    },
    {
      id: 4,
      title: 'Conversation Ender',
      text: "Your choices matter, don't let the conversation die",
      tech: 'HTML/CSS/JavaScript'
    },
    {
      id: 5,
      title: 'E-commerce Back End',
      text: 'Set up your next e-commerce site',
      tech: 'Express'
    },
    {
      id: 6,
      title: 'Text Editor Extreme',
      text: 'Install the app and take your notes on the go',
      tech: 'Back-End JavaScript'
    }
  ]);

  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio project={project} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
