'use client';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#5a0000]/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Container - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-8">
          
          {/* Profile Picture - Vertical/Portrait Format */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <img 
                src="/Meprofile.jpg" 
                alt="Laisha Alexandra Bravo Juarez"
                className="w-48 h-80 sm:w-56 sm:h-88 lg:w-64 lg:h-96 rounded-2xl object-cover border-2 border-[#5a0000] transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#5a0000]/0 group-hover:bg-[#5a0000]/5 transition-all duration-300" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Main heading */}
            <h1 className="text-lg sm:text-xl lg:text-2xl font-light text-white tracking-tight leading-snug mb-2">
              Laisha Alexandra Bravo Juarez
           </h1>
            
           <h2 className="text-xs sm:text-sm lg:text-base font-light text-[#b3b3b3] leading-relaxed">
              Computer Science <span className="text-white/40">·</span> Software Engineer
            </h2>
            
            {/* Tagline - More Prominent */}
            <p className="text-xs sm:text-sm lg:text-base text-[#cccccc]/90 mb-10 leading-relaxed">
              I try to solve complex problems by combining algorithms, creativity, and thoughtful system design. 
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-base"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="btn w-full sm:w-auto px-8 py-3.5 text-base"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Info - Optional Accent */}
        <div className="text-center lg:text-left lg:pl-80 mt-8">
          <p className="text-sm text-[#cccccc]/50 font-light">
            Based in Miami, FL and Mexico City, Mexico · Graduated Fall 2025
          </p>
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
