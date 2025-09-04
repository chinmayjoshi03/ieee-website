import React from 'react';

const ConferenceTitleBanner: React.FC = () => {
  return (
    <section className="conference-title-banner">
      <div className="conference-title-content">
        <h1 className="conference-main-title">
          2nd IEEE International Conference on Information, Implementation and Innovation in Technology
        </h1>
        <h2 className="conference-code">(IEEE I2ITCON2026)</h2>
        <div className="conference-details">
          <div className="detail-item">📅 July 10-11, 2026</div>
          <div className="detail-item">📍 Pune, India</div>
          <div className="detail-item">🎓 Academic Excellence</div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTitleBanner;