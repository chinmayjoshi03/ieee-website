import React, { useState, useEffect } from 'react';

const LandingSection: React.FC = () => {
  const calculateTimeRemaining = () => {
    const targetDate = new Date('2026-07-10T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  };

  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="landing-section-upper">
        <h1>
          Advancing Technology • Fostering Innovation • Building Tomorrow
        </h1>
        <p className="conference-subtitle">
          Join leading researchers and industry experts for cutting-edge presentations and networking
        </p>
        <a href="#about" className="cta-button">
          Register Now
        </a>
      </div>

      <section className="landing-section-lower">
        <div className="landing-section-lower-left-box">
          <div className="landing-section-lower-heading">Conference Dates</div>
          <div className="landing-section-lower-body">
            10th & 11th July 2026
          </div>
          <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', opacity: 0.9, fontWeight: '400' }}>
            Two days of cutting-edge research presentations, workshops, and networking opportunities
          </p>
        </div>
        <div className="countdown">
          {countdown.expired ? (
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              Conference is Live!
            </div>
          ) : (
            <>
              <div>
                <span>{countdown.days}</span>
                <span>Days</span>
              </div>
              <div>
                <span>{countdown.hours}</span>
                <span>Hours</span>
              </div>
              <div>
                <span>{countdown.minutes}</span>
                <span>Minutes</span>
              </div>
              <div>
                <span>{countdown.seconds}</span>
                <span>Seconds</span>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default LandingSection;