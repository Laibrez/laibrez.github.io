'use client';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-8">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#5a0000]/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Picture and Name Container */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Profile Picture */}
          <img 
            src="/Meprofile.jpg" 
            alt="Laisha Bravo Juarez"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#5a0000]"
          />
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            Laisha Bravo Juarez
          </h1>
        </div>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-light text-[#cccccc] mb-8">
          Computer Science Student & Software Engineer
        </h2>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#cccccc]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building elegant digital experiences with modern technologies
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn btn-primary w-full sm:w-auto"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="btn w-full sm:w-auto"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
