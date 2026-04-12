import Navbar from '@/components/Navbar';
import HeroEditorial from '@/components/HeroEditorial';
import ProjectBook from '@/components/ProjectBook';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import AboutLetter from '@/components/AboutLetter';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroEditorial />
      <ProjectBook />
      <ResumeSection />
      <Experience />
      <Education />
      <AboutLetter />
      <Footer />
    </main>
  );
}
