import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavTabs from './pages/components/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './pages/components/Footer';

import projects from './pages/components/projects';

const App = () => {
  // const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   (currentPage === 'ABOUT') ?
  //     return <About />;
  //   : return (currentPage === 'PORTFOLIO') {
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Router>
        <NavTabs
          // currentPage={currentPage}
          // handlePageChange={handlePageChange}
        />

        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
