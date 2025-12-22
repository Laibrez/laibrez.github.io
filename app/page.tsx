import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSectionNew from '@/components/ProjectsSectionNew';
import ExperienceSectionNew from '@/components/ExperienceSectionNew';
import EducationSection from '@/components/EducationSection';
import ResumeSection from '@/components/ResumeSection';
import AboutSectionNew from '@/components/AboutSectionNew';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <HeroSection />
      <ProjectsSectionNew />
      <ExperienceSectionNew />
      <EducationSection />
      <ResumeSection />
      <AboutSectionNew />
      <ContactSection />
    </div>
  );
}
