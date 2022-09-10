import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavTabs from './pages/components/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import EmailForm from './pages/components/EmailForm';
import Resume from './pages/Resume';

import projects from './pages/components/projects';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === 'ABOUT') {
  //     return <About />;
  //   }
  //   if (currentPage === 'PORTFOLIO') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'CONTACT') {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="wrapAll">
      <Router>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* {renderPage()} */}

        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/email" element={<EmailForm />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
