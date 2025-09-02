import React from 'react';
import { NavLink } from 'react-router-dom';
import ieeeLogo from '../assets/ieee.png'; // Ensure the path is correct

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src={ieeeLogo}
            alt="IEEE Logo" 
            className="logo"
          />
     
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li><a href="#speakers">Speakers</a></li>
            <li>
              <NavLink
                to="/call-for-papers"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Call for Papers
              </NavLink>
              <ul className="dropdown">
                <li><a href="#submission-guidelines">Submission Guidelines</a></li>
                <li><a href="#registration-details">Registration Details</a></li>
                <li><a href="#important-dates">Important Dates</a></li>
              </ul>
            </li>
            <li>
              <a href="#author-guidelines">Authors</a>
              <ul className="dropdown">
                <li><a href="#review-process">Review Process</a></li>
                <li><a href="#plagiarism-policy">Plagiarism Policy</a></li>
                <li><a href="#copyright-policy">Copyright Policy</a></li>
                <li><a href="#camera-ready-info">Camera Ready</a></li>
              </ul>
            </li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#committee">Committee</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;