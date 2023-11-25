import React from 'react'
import HeroSection from './_HeroSection';
import AboutMeSection from './_AboutMeSection';
import ServiceSection from './_ServiceSection';
import SkillSection from './_SkillSection';
import RecentProtfolio from './_RecentProtfolio';

export default function Home() {
  return (
    <>
        <main>
            <HeroSection />

            <AboutMeSection />

            <ServiceSection />

            <SkillSection />

            <RecentProtfolio />
        </main>

    </>
  );
}
