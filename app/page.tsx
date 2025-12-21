import Navigation from '@/components/Navigation';
import VerticalNav from '@/components/VerticalNav';
import HeroSection from '@/components/HeroSection';
import ProjectsSectionNew from '@/components/ProjectsSectionNew';
import ExperienceSectionNew from '@/components/ExperienceSectionNew';
import EducationSection from '@/components/EducationSection';
import AboutSectionNew from '@/components/AboutSectionNew';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <VerticalNav />
      <HeroSection />
      <ProjectsSectionNew />
      <ExperienceSectionNew />
      <EducationSection />
      <AboutSectionNew />
      <ContactSection />
    </div>
  );
}
