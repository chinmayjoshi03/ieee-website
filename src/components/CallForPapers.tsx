import React from 'react';
import '../assets/styles/CallForPapers.css';

const CallForPapers: React.FC = () => {
  const tracks = [
    {
      title: "Track 1 – Artificial Intelligence and Applications",
      topics: [
        "Assistive Well-Being",
        "Immersive Technology", 
        "Brain-Computer Interface",
        "ANN and Evolutionary Algorithms",
        "Computer Vision",
        "Natural Language Processing",
        "AI Ethics",
        "Open AI"
      ]
    },
    {
      title: "Track 2 – Data Science",
      topics: [
        "Information Visualization and Predictive Analysis",
        "Role of Data Analytics in Holistic Education",
        "Data Analytics in Banking and Business",
        "Data Analytics for Smart Cities",
        "Nature-Inspired Computing",
        "Optimization techniques",
        "Geoinformatics",
        "Data-Driven Society",
        "Blockchain and Data Mining"
      ]
    },
    {
      title: "Track 3 – Communication and Signal Processing",
      topics: [
        "Mobile and Wireless Networks",
        "Microwave Communication",
        "Ad-hoc and Sensor Networks",
        "Cognitive Radio",
        "Privacy and Security of Communication Networks",
        "5G Technology",
        "EMI and Compatibility",
        "Music, Speech and Audio Processing",
        "Image and Video Processing"
      ]
    },
    {
      title: "Track 4 – Internet of Things and Robotics",
      topics: [
        "IoT for Affordable Agriculture",
        "Low Power IoT Solutions",
        "Visual Personal Assistance",
        "Robotics in Healthcare, Defense, Space Technology",
        "Wearable Electronics",
        "IoT Security & Privacy",
        "Human-Robot Teaming and Co-Bots",
        "Drone Technology"
      ]
    },
    {
      title: "Track 5 – Sustainable Technological Innovations",
      topics: [
        "Digitally Enabled Innovation",
        "Innovation & Technology Management",
        "Human-Computer Interaction",
        "Pervasive Computing",
        "Virtual Reality, Augmented Reality, Mixed Reality",
        "Automotive Electronics",
        "Innovation in Material Sciences",
        "Cloud Technologies and Edge Computing"
      ]
    }
  ];

  const importantDates = [
    { event: "Paper Submission Opening", date: "January 15, 2026" },
    { event: "Submission Deadline", date: "May 15, 2026" },
    { event: "Acceptance Notification", date: "July 5, 2026" },
    { event: "Early Bird Registration Deadline", date: "July 10, 2026" },
    { event: "Camera-ready paper submission", date: "July 20, 2026" },
    { event: "Registration Deadline", date: "July 31, 2026" },
    { event: "Conference Dates", date: "July 10-11, 2026" }
  ];

  return (
    <div className="call-for-papers-container">
      {/* Hero Section */}
      <section className="cfp-hero">
        <div className="cfp-hero-content">
          <h1 className="cfp-hero-title">Call for Papers</h1>
          <h2 className="cfp-conference-title">
            2nd IEEE International Conference on Information, Implementation and Innovation in Technology
          </h2>
          <p className="cfp-hero-subtitle">IEEE I2ITCON2026 • July 10-11, 2026 • Pune, India</p>
          <div className="cfp-theme">
            <span className="theme-label">Conference Theme:</span>
            <span className="theme-text">"Information, Implementation and Innovation in Technology"</span>
          </div>
        </div>
      </section>

      {/* Conference Overview */}
      <section className="cfp-overview">
        <div className="cfp-content-wrapper">
          <h2>Conference Overview</h2>
          <p>
            The theme of IEEE I2ITCON2026 being 'Information, Implementation and Innovation in Technology' 
            includes all aspects of Information, Implementation and Technological Innovations to bring together 
            Researchers, Engineers, and practitioners. It encompasses wide and diverse topics of applications 
            in the fields of Science, Engineering, Technology, and Management.
          </p>
          <p>
            IEEE I2ITCON2026 aims to identify and explore the issues, opportunities, and solutions to various 
            problems in society, environment, and industry using cutting-edge techniques of Science and Technology 
            by bringing together researchers from Academia and Industry, under a unique forum.
          </p>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="cfp-guidelines">
        <div className="cfp-content-wrapper">
          <h2>Submission Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline-card">
              <div className="guideline-icon">📄</div>
              <h3>Paper Template</h3>
              <p>All submissions must use the official IEEE conference template</p>
              <a href="https://www.ieee.org/conferences/publishing/templates.html" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="guideline-link">
                Download Template
              </a>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">📤</div>
              <h3>Paper Submission</h3>
              <p>Submit your papers through our online submission system</p>
              <a href="#" className="guideline-link">Submit Paper</a>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">✅</div>
              <h3>Review Process</h3>
              <p>All papers undergo rigorous peer-review process</p>
              <a href="#" className="guideline-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Topics of Interest */}
      <section className="cfp-topics">
        <div className="cfp-content-wrapper">
          <h2>Topics of Interest</h2>
          <p className="topics-intro">
            Topics of interest for submission include, but are not limited to the following:
          </p>
          <div className="tracks-container">
            {tracks.map((track, index) => (
              <div key={index} className="track-card">
                <h3 className="track-title">{track.title}</h3>
                <ul className="topics-list">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="topic-item">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Track 6 - Coming Soon */}
            <div className="track-card track-coming-soon">
              <h3 className="track-title">Track 6 – Coming Soon</h3>
              <p className="coming-soon-text">
                Additional track details will be announced shortly. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="cfp-dates">
        <div className="cfp-content-wrapper">
          <h2>Important Dates</h2>
          <div className="dates-grid">
            {importantDates.map((item, index) => (
              <div key={index} className="date-card">
                <div className="date-icon">📅</div>
                <div className="date-content">
                  <h3>{item.event}</h3>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="dates-note">
            <p><strong>Note:</strong> All dates are subject to change. Please check this page regularly for updates.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="cfp-contact">
        <div className="cfp-content-wrapper">
          <h2>Contact Information</h2>
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-content">
              <h3>For any queries, please contact:</h3>
              <p>Conference Organizing Committee</p>
              <a href="mailto:conference@i2itcon2026.org" className="contact-email">
                conference@i2itcon2026.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cfp-cta">
        <div className="cfp-content-wrapper">
          <div className="cta-content">
            <h2>Ready to Submit Your Research?</h2>
            <p>Join leading researchers and industry experts at IEEE I2ITCON2026</p>
            <div className="cta-buttons">
              <a href="https://www.ieee.org/conferences/publishing/templates.html" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="cta-button secondary">
                Download Template
              </a>
              <a href="#" className="cta-button primary">Submit Your Paper</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;