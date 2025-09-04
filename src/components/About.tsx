    import React from 'react';
    import '../assets/styles/About.css';

interface DateItemProps {
  month: string;
  day: string;
  date: string;
  event: string;
}

const DateItem: React.FC<DateItemProps> = ({ month, day, date, event }) => (
  <div className="date-item">
    <div className="date-box">
      <span>{month}</span>
      <span>{day}</span>
    </div>
    <div className="date-details">
      <div>{date}</div>
      <div>{event}</div>
    </div>
  </div>
);

const ImportantDatesGrid: React.FC = () => {
  return (
    <>
      <div className="grid-container">
        <div className="left-panel">
          <div className="section">
            <h2>About I2IT</h2>
            <p>The International Conference on Information, Implementation and Innovation in Technology (I2IT) is a premier event bringing together researchers, engineers, and practitioners to share their latest findings and discuss future trends in the field of technology.</p>
            <a href="#">Read More</a>
          </div>

          <div className="section">
            <h2>IEEE I2IT</h2>
            <p>2nd International Conference on Control Communication, Computing & Automation 2025</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="right-panel">
          <h2>IMPORTANT DATES</h2>
          <DateItem month="May" day="15" date="15th May 2026" event="Full Paper Submission" />
          <DateItem month="July" day="5" date="5th July 2026" event="Notification of Acceptance" />
          <DateItem month="July" day="10" date="10th July 2026" event="Registration and Payment" />
          <DateItem month="July" day="31" date="31st July 2026" event="Last date of Registration and Payment" />
        </div>
      </div>
    </>
  );
};

export default ImportantDatesGrid;
