import React from 'react';

const MarqueeBar: React.FC = () => {
  return (
    <div className="bg-gray-200 text-sm py-2 overflow-hidden">
      <style>
        {`
          .marquee-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            animation: scroll-left 15s linear infinite;
            animation-delay: -7.5s; 
            width: 200%;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <div className="marquee-content">
        <a href="#" className="inline-block px-2">Session Schedule - I2IT-2025</a>
        <a href="#" className="inline-block px-2">Conference registrations</a>
        <a href="#" className="inline-block px-2">Conference Registration are closed</a>
        <a href="#" className="inline-block px-2">paper submission closed</a>

        <a href="#" className="inline-block px-2">Session Schedule - I2IT-2025</a>
        <a href="#" className="inline-block px-2">Conference registrations</a>
        <a href="#" className="inline-block px-2">Conference Registration are closed</a>
        <a href="#" className="inline-block px-2">paper submission closed</a>
      </div>
    </div>
  );
};

export default MarqueeBar;
