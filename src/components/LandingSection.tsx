import React from 'react';

const LandingSection: React.FC = () => {
  return (
    <section className="landing-section">
      <h1>2nd IEEE International Conference on Information, Implementation and Innovation in Technology (IEEE I2ITCON2026)</h1>
      <p>Theme: Information, Implementation and Innovation in Technology</p>
      <p>Includes all aspects of Information, Implementation and Technological Innovations to bring together Researchers, Engineers, and practitioners.</p>
      <p>Conference Date: 10th & 11th July 2026</p>
      <div className="countdown">
        <span>Days</span> <span>Hours</span> <span>Minutes</span> <span>Seconds</span>
      </div>
    </section>
  );
};

export default LandingSection;