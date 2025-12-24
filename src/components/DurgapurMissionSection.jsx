import React from 'react';
import './DurgapurMissionSection.css';

const DurgapurMissionSection = ({ schoolData }) => {
  const missionVision = [
    {
      title: 'Mission',
      description: schoolData ? 
        `To provide opportunities to keen learners, driven by entrepreneurial innovation, empowered by empathy, and guided by the wisdom to harness technology’s limitless potential.` :
        'To provide opportunities to keen learners, driven by entrepreneurial innovation, empowered by empathy, and guided by the wisdom to harness technology’s limitless potential.'
    },
    {
      title: 'Vision',
      description: schoolData ? 
        `To introduce an innovative and advanced learning environment in the country and to cultivate skilled and visionary professionals who are equipped to tackle the challenges of the new millennium.` :
        'To introduce an innovative and advanced learning environment in the country and to cultivate skilled and visionary professionals who are equipped to tackle the challenges of the new millennium.'
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-left">
          <img
            src="/pictures/durgapur/durgapur-home-mission-vission.jpg"
            alt="TIGPS Campus"
            className="mission-image"
          />
        </div>

        <div className="mission-right">
          {missionVision.map((item, index) => (
            <div key={index} className="mission-card">
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DurgapurMissionSection;
