import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {


  return (
    <div className="container">
      <Navigation />
      <Router>
        <Routes>
          {/* <Route path="/" element={<About />} />
          <Route path="portfolio" element={<Portfolio project={project} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          If they try anything else it all explodes 
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>there's nothing here!</p>
              </main>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
