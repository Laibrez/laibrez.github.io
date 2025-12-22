'use client';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-20">
      {/* Subtle background gradient - NO red */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Hero Container - Side by Side Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {/* LEFT: Large Profile Picture */}
          <div className="profile-image-wrapper relative flex-shrink-0">
            <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-br from-[#2a2a2a] to-[#4a4a4a] opacity-60 z-[-1]" />
            <img 
              src="/Meprofile.jpg" 
              alt="Laisha Bravo Juarez"
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-xl object-cover"
              style={{ filter: 'grayscale(20%)' }}
            />
          </div>
          
          {/* RIGHT: Text Content */}
          <div className="hero-content flex-1 max-w-2xl text-center md:text-left" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold text-white tracking-tight mb-4">
              Laisha Bravo Juarez
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-[#a1a1a1] mb-6">
              Computer Science Student & Software Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-[#a1a1a1] mb-10 leading-relaxed">
              Building elegant digital experiences with modern technologies
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary w-full sm:w-auto"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn w-full sm:w-auto"
              >
                Download Resume
              </button>
            </div>
          </div>
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
