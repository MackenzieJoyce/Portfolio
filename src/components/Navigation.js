import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <h3>
          <Link to="/">About</Link>
        </h3>
        <h3>
          <Link to="/portfolio">Portfolio</Link>
        </h3>
        <h3>
          <Link to="/contact">Contact</Link>
        </h3>
        <h3>
          <Link to="/resume">Resume</Link>
        </h3>
      </nav>
    </header>
  );
};

export default Navigation;
