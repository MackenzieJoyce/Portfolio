import React from 'react';
// import PortfolioContainer from './components/PortfolioContainer';
import NavTabs from './components/NavTabs';

const App = () => {
  return (
    <div>
      {/* <PortfolioContainer /> */}
      <NavTabs />
    </div>

    // <Router>
    //   <NavTabs />
    //   <Routes>
    //     {/* <Route path='/' element={<PortfolioContainer />} /> */}
    //     <Route path='/' element={<About />} />
    //     <Route path='/portfolio' element={<Portfolio projects={projects} />} />
    //     <Route path='/contact' element={<Contact EmailForm={EmailForm} />} />
    //     <Route path='/resume' element={<Resume />} />
    //   </Routes>
    // </Router>
  );
};

// Make obj and set up browserrouter around ^
export default App;
