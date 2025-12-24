import React, { useEffect, useState } from 'react';

function DurgapurHero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? 'auto' : '75vh',
        minHeight: isMobile ? '0' : '550px',
        maxHeight: isMobile ? 'none' : '850px',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/pictures/hero_section/poster.jpg"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      >
        <source src="/pictures/Durgapur/TIGPS_Durgapur.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default DurgapurHero;
