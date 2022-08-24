import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import projects from './projects';
import Contact from './components/pages/Contact';
import EmailForm from './components/pages/compPlugins/EmailForm';
import Resume from './components/pages/Resume';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PortfolioContainer />} />
        <Route path='/' element={<About />} />
        <Route path='/portfolio' element={<Portfolio projects={projects} />} />
        <Route path='/contact' element={<Contact EmailForm={EmailForm} />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
};

// Make obj and set up browserrouter around ^
export default App;
