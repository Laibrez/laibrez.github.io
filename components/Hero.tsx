import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero-wrap" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,0,0,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          <div className="flex-shrink-0 group">
            <div className="relative w-[12rem] h-[20rem] rounded-2xl overflow-hidden border-2 border-[#5a0000] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image 
                src="/Meprofile.jpg" 
                alt="Laisha Alexandra Bravo Juarez"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-sm font-light text-white tracking-tight leading-tight mb-3 sm:text-base">
              Laisha Alexandra Bravo Juárez
            </h1>
            <h3 className="text-xl font-light text-[#cccccc] mb-6 flex items-center justify-center lg:justify-start gap-2">
              Computer Science <span className="text-white/40">·</span> Software Engineer
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#cccccc]/90 mb-10 max-w-xl mx-auto lg:mx-0">
              I try to solve complex problems by combining algorithms, creativity, and thoughtful system design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#resume" className="btn">
                RESUMÉ
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center lg:text-left lg:pl-80">
          <p className="text-sm text-[#cccccc]/50 font-light">
            Based in Miami, FL and Mexico City, Mexico · Graduated Fall 2025
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
