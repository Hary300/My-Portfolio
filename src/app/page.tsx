import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import AboutMeSection from '@/components/sections/AboutMeSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import FaqSection from '@/components/sections/FaqSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServiceSection from '@/components/sections/ServiceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WorkingSection from '@/components/sections/WorkingSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <AboutMeSection />
        <SkillsSection />
        <WorkingSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
