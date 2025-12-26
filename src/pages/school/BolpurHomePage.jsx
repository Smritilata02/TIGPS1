import React from 'react';
import Hero from '../../components/Hero';
import AboutSection from '../../components/AboutSection';
import MissionSection from '../../components/MissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import InternationalSection from '../../components/InternationalSection';

const BolpurHomePage = () => {
  return (
    <>
      <Hero video="/Video/tigps_bolpur.mp4" />
      <AboutSection
  title="TECHNO INDIA GROUP PUBLIC SCHOOL, BOLPUR"
 
  image="/pictures/schools/Bolpur.avif"
/> 

      <MissionSection />
      <LegacySection />
      <FounderSection />
      <InternationalSection />
    </>
  );
};

export default BolpurHomePage;