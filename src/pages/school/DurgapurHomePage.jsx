import React from 'react';
import Hero from '../../components/DurgapurHero';
import AboutSection from '../../components/DurgapurAboutSection';
import MissionSection from '../../components/DurgapurMissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import CampusesSection from '../../components/CampusesSection';
import InternationalSection from '../../components/InternationalSection';

const DurgapurHomePage = () => {
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

export default DurgapurHomePage;