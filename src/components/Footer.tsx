import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
          <a href="#sitemap">Sitemap</a>
        </div>
        <p>&copy; 2025 IEEE I2ITCON2026 Conference. All Rights Reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
          Designed & Developed by WebMaster Team, I2IT
        </p>
      </div>
    </footer>
  );
};

export default Footer;