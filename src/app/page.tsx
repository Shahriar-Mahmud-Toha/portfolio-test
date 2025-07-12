import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import HeroSectionV2 from '@/components/sections/HeroSectionV2';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSectionV2 />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
