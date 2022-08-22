import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About'

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path='/' element={
          <>
            <About />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
