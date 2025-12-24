import React from 'react';
import Hero from '../../components/CoochbeharHero';
import AboutSection from '../../components/CoochbeharAboutSection';
import MissionSection from '../../components/CoochbeharMissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import CampusesSection from '../../components/CampusesSection';
import InternationalSection from '../../components/InternationalSection';

const CoochbeharHomePage = () => {
  return (
    <>
      <Hero carousel={true} />
      <AboutSection />
      <MissionSection />
      <LegacySection />
      <FounderSection />
      <CampusesSection />
      <InternationalSection />
    </>
  );
};

export default CoochbeharHomePage;