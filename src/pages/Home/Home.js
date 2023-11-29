import React from 'react'
import HeroSection from './_HeroSection';
import AboutMeSection from './_AboutMeSection';
import ServiceSection from './_ServiceSection';
import SkillSection from './_SkillSection';
import RecentProtfolio from './_RecentProtfolio';
import BlogSection from './_BlogSection';
import FooterSection from './_FooterSection';
import Sidebar from '../../components/Layout/Sidebar';

export default function Home() {
  return (
    <>
        <main>
            <Sidebar />

            <HeroSection />

            <AboutMeSection />

            <ServiceSection />

            <SkillSection />

            <RecentProtfolio />

            <BlogSection />

            <FooterSection />
        </main>

    </>
  );
}
