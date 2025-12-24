import React, { useEffect, useRef, useState } from 'react';
import './CoochbeharAboutSection.css';

const CoochbeharAboutSection = () => {
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
                    TIGPS Coochbehar, began its journey in 2008 , affiliated under CBSE. It is a well known co-educational, English medium school located in Matikata,Madhupur More. School provides great opportunities through various activities to the children for their intellectual and aesthetic development.
                  </p>
                  <p className="about-text">
                    The faculty not only imparts knowledge but also encourages the students to take part in a variety of other ways like group activities, education technology, smart board classrooms, computer-aided learning, debate, quiz, etc. 
                  </p>
                  <p className="about-text">
                    Numerous co-curricular activities are embedded in their academic programmes.The school has a separate activity room where yoga, dance, music, craft and similar things are taught.
                  </p>
                  <p className="about-text">
                    TIGPS Coochbehar attempts to encourage ways that would strengthen the potentials of students and bring out the best in them.
                  </p>
            </div>
          </div>
          <div ref={imageRef} className="about-right-section">
            <div className="about-image-container">
              <img 
                src="/pictures/coochbehar/coochbehar-about-us.jpg" 
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

export default CoochbeharAboutSection;
