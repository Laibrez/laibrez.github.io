import HeroSlideshow from '@/components/HeroSlideshow';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AboutSection from '@/components/AboutSection';
import VerticalNav from '@/components/VerticalNav';

export default function Home() {
  return (
    <div className="w-full">
      <VerticalNav />
      <HeroSlideshow />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
    </div>
  );
}
