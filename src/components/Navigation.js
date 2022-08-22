import { Link } from 'react-router-dom';
import { FaUser, FaCode, FaPhone, FaFileAlt } from 'react-icons/fa';

const Navigation = () => {
  return (
    <header>
      <nav>
        <h3>
          <FaUser />
          {/* FaGrinBeam */}
          <Link to="/">About</Link>
        </h3>
        <h3>
          <FaCode />
          <Link to="/portfolio">Portfolio</Link>
        </h3>
        <h3>
          <FaPhone />
          <Link to="/contact">Contact</Link>
        </h3>
        <h3>
          <FaFileAlt />
          <Link to="/resume">Resume</Link>
        </h3>
      </nav>
    </header>
  );
};

export default Navigation;
