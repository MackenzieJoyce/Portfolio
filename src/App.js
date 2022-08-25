import React from 'react';
// import PortfolioContainer from './components/PortfolioContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import projects from './components/pages/compPlugins/projects';

const App = () => {
  return (
    <div className="wrapAll">
      {/* <PortfolioContainer /> */}
      <Router>
        <NavTabs />

        <Routes>
          {/* <Route path='/' element={<PortfolioContainer />} /> */}
          <Route path="/" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

// Make obj and set up browserrouter around ^
export default App;
