import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li>
            <a href="#call-for-papers">Call for Papers</a>
            <ul className="dropdown">
              <li><a href="#call-for-papers">Call for Papers</a></li>
              <li><a href="#registration-details">Registration Details</a></li>
              <li><a href="#registration-guidelines">Registration Guidelines</a></li>
            </ul>
          </li>
          <li>
            <a href="#author-guidelines">Author Guidelines</a>
            <ul className="dropdown">
              <li><a href="#review-process">Review Process</a></li>
              <li><a href="#plagiarism-policy">Plagiarism Policy</a></li>
              <li><a href="#copyright-policy">Copyright Policy</a></li>
              <li><a href="#camera-ready-info">Camera Ready Info</a></li>
            </ul>
          </li>
          <li><a href="#schedule">Schedule </a></li>
          <li><a href="#committee">Committee</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;