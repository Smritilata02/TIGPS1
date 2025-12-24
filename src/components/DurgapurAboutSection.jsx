import React, { useEffect, useRef, useState } from 'react';
import './DurgapurAboutSection.css';

const DurgapurAboutSection = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [showCta, setShowCta] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current && !hasAnimatedRef.current) {
              entry.target.classList.add('animate-in');
              hasAnimatedRef.current = true;
              setTimeout(() => setShowCta(true), 500);
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add('slide-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 ref={titleRef} className="about-title">TECHNO INDIA GROUP PUBLIC SCHOOL</h2>
        <div className="about-content">
          <div className="about-left-section">
            <div className="about-text-wrapper">
                  <p className="about-text">
                    Techno India Group Public School Durgapur, established in 2015, leverages innovation to shape students' futures. This co-educational English medium school, in India's second planned city, follows a CBSE-affiliated curriculum (Affiliation No. 2430399) from pre-primary to senior secondary levels.
                  </p>
                  <p className="about-text">
                    Committed to holistic development, TIGPS Durgapur integrates academics with sports, extracurricular, and social awareness initiatives. With extensive indoor and outdoor sports facilities, it promotes physical well-being alongside intellectual growth. Programs like the Tobacco and Smoking Free campus by the Students Eco Club further enrich student engagement, ensuring a balanced educational experience. 
                  </p>
                  <p className="about-text">
                    The school offers comprehensive health and hygiene care, interactive PSA activity classes, a modern cafeteria, and well-facilitated hostel accommodations for students. The management and teachers have carefully structured every aspect to foster each child's innate curiosity and love for learning.
                  </p>
            </div>
          </div>
          <div ref={imageRef} className="about-right-section">
            <div className="about-image-container">
              <img 
                src="/pictures/durgapur/durgapur-about-us.jpg" 
                alt="Techno India Group Public School campus" 
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DurgapurAboutSection;
