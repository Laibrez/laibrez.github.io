import HeroSlideshow from '@/components/HeroSlideshow';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSlideshow />
      <ProjectsSection />
    </div>
  );
}
