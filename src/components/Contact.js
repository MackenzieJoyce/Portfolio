import React from 'react';

import { FaGithub, FaTwitterSquare, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Get in touch!</h5>
        <h6 className="card-subtitle text-muted">Social Media</h6>
        {/* Add icons for each span */}
        <span className="card-text">
          <FaGithub />
          <a
            href="https://github.com/MackenzieJoyce"
            target="_blank"
            title="Github: MackenzieJoyce"
          >
            GitHub: MackenzieJoyce
          </a>
        </span>
        <span>
          <FaTwitterSquare />
          <a
            href="https://twitter.com/FreshCodeFish"
            target="_blank"
            title="Twitter: FreshCodeFish"
          >
            Twitter: FreshCodeFish
          </a>
        </span>
        <span>
          <FaDiscord />
          Discord: MackenzieJoyce#5843
        </span>
        {/* <span>
          <FaDice20 />
          Roll20: RollingUpRoses
        </span> */}
        {/* <span className="card-text">LinkedIn</span>
        <span className="card-text">Share this portfolio</span> */}

        <h6 className="card-subtitle text-muted">Phone</h6>
        <p className="card-text">
          <a href="tel:321.234.5397" title="Phone number: 321.234.5397">
            321.234.5397
          </a>
        </p>

        <h6 className="card-subtitle text-muted">Email</h6>
        <p className="card-text">
          {' '}
          <a
            href="mailto:MackenzieJoyce414@gmail.com"
            target="_blank"
            title="Email Address: MackenzieJoyce414@gmail.com"
          >
            MackenzieJoyce414@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
