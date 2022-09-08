import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavTabs from './pages/components/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import EmailForm from './pages/components/EmailForm';
import Resume from './pages/Resume';

import projects from './pages/components/projects';

const App = () => {
  return (
    <div className="wrapAll">
      <Router>
        <NavTabs />

        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/email" element={<EmailForm />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;