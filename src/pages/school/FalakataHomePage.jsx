import React from 'react';
import Hero from '../../components/Hero';
import AboutSection from '../../components/AboutSection';
import MissionSection from '../../components/MissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import CampusesSection from '../../components/CampusesSection';
import InternationalSection from '../../components/InternationalSection';

const FalakataHomePage = () => {
  return (
    <>
      <Hero video="/Video/TIGPS_Falakata.mp4" />
      <AboutSection
  title="TECHNO INDIA GROUP PUBLIC SCHOOL, FALAKATA"
  paragraphs={[
    "TIGPS Falakata embarked on its journey of knowledge management in 2014. This co-educational, CBSE-affiliated English medium school offers a stress-free yet stimulating environment that inspires students to excel. Committed to a dynamic teaching-learning experience, the institution ensures that students enjoy the process of acquiring knowledge.",
    "The academic curriculum integrates value education, environmental studies, communication skills, sports, and artistic and aesthetic development. Beyond traditional classrooms, TIGPS Falakata boasts advanced laboratories, a digital library, a multi-purpose hall, a hobby club, a health and wellness counseling committee, and a school transport service.",
    "Recreational facilities include a playground, a yoga room, and a badminton court. With a focus on intellectual and creative growth, TIGPS Falakata nurtures young minds capable of transforming future societies through critical and creative thinking."
  ]}
  image="/pictures/schools/Falakata/Falakata1.jpg"
/>
      <MissionSection />
      <LegacySection />
      <FounderSection />
      <CampusesSection />
      <InternationalSection />
    </>
  );
};

export default FalakataHomePage;