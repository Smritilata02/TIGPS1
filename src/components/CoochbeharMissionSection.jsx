import React from 'react';
import './CoochbeharMissionSection.css';

const CoochbeharMissionSection = ({ schoolData }) => {
  const missionVision = [
    {
      title: 'Mission',
      description: schoolData ? 
        `We strive to prepare dynamic and compassionate individuals, committed to the development of humanity who will meet the challenges of a global society while retaining their traditional values.` :
        'We strive to prepare dynamic and compassionate individuals, committed to the development of humanity who will meet the challenges of a global society while retaining their traditional values.'
    },
    {
      title: 'Vision',
      description: schoolData ? 
        `We are committed to shaping young minds to ensure that they develop the competencies essential for achieving success in every pursuit and leadership in the emerging creative economy.` :
        'We are committed to shaping young minds to ensure that they develop the competencies essential for achieving success in every pursuit and leadership in the emerging creative economy.'
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-left">
          <img
            src="/pictures/coochbehar/coochbehar_home_mission_vission.jpg"
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

export default CoochbeharMissionSection;
