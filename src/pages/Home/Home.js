import React from 'react'
import HeroSection from './_HeroSection';
import AboutMeSection from './_AboutMeSection';
import ServiceSection from './_ServiceSection';
import SkillSection from './_SkillSection';

export default function Home() {
  return (
    <>
        <main>
            <HeroSection />

            <AboutMeSection />

            <ServiceSection />

            <SkillSection />
        </main>

    </>
  );
}
