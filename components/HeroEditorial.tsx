'use client';

import Image from 'next/image';

export default function HeroEditorial() {
  return (
    <section id="hero" className="min-h-screen lg:min-h-0 lg:h-auto bg-[#6B0F1A] flex items-center px-6 md:px-14 py-20 lg:py-40 relative transition-all duration-700">
      <div className="hero-texture absolute inset-0 pointer-events-none" />
      {/* Hairline Divider */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 hairline-v opacity-30" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,450px)_1fr] gap-12 lg:gap-24 items-center relative z-10 px-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto">

        {/* Text Block - High-Impact Typography (Order 1 on mobile, 2 on desktop) */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0 max-w-full">
          <div className="relative inline-block mb-10 md:mb-14 px-4 lg:px-0 max-w-full">
            <h1 className="font-cinzel text-[clamp(2.4rem,10vw,8rem)] font-black leading-[0.85] tracking-[0.01em] text-[#F8F4EE] block z-10 animate-fade-up [animation-delay:500ms] w-full text-center lg:text-left">
              LAISHA ALEXANDRA
            </h1>
            <span className="font-great-vibes text-[clamp(2.8rem,11vw,7.5rem)] font-normal leading-none text-[#BAFF39] absolute -bottom-[1em] lg:-bottom-[0.8em] right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 lg:-right-4 xl:-right-12 z-20 whitespace-nowrap drop-shadow-[0_0_80px_rgba(186,255,57,0.5)] animate-fade-up [animation-delay:800ms] scale-100 md:scale-110">
              Bravo Juárez
            </span>
          </div>

          <div className="w-24 md:w-40 h-[1.5px] bg-[#BAFF39] my-6 md:my-12 animate-expand [animation-delay:1200ms] opacity-50" />

          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-up [animation-delay:900ms]">
            <p className="vogue-label text-[0.8rem] md:text-[1.1rem] text-[#D4C9B8] tracking-[0.2em] md:tracking-widest">
              Computer Science <span className="text-[#BAFF39] mx-2 md:mx-4 font-black tracking-widest">—</span> Software Engineer
            </p>
          </div>

          <p className="font-cormorant text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] font-bold leading-tight md:leading-relaxed text-[#E8E2D8] max-w-2xl lg:max-w-3xl mb-10 md:mb-14 animate-fade-up [animation-delay:1100ms] italic opacity-90 border-l-[2px] border-[#BAFF39]/20 pl-6 md:pl-10">
            "I try to solve complex problems by combining algorithms, creativity, and thoughtful system design."
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 animate-fade-up [animation-delay:1300ms]">
            <a href="#projects" className="btn-vogue-primary">
              View Projects
            </a>
            <a href="#full-resume" className="btn-vogue-secondary uppercase">
              RESUMÉ
            </a>
          </div>
        </div>

        {/* Photo Block - (Order 2 on mobile, 1 on desktop) */}
        <div className="order-2 lg:order-1 relative animate-fade-up w-full max-w-[280px] md:max-w-[400px] lg:max-w-[450px] mx-auto lg:mx-0 group">
          {/* Outer frame */}
          <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border border-[#BAFF39]/30 pointer-events-none z-10 transition-all duration-500 group-hover:scale-105" />

          {/* Background offset */}
          <div className="absolute top-3 left-3 -right-3 -bottom-3 bg-[#3A0610] -z-10 shadow-xl" />

          {/* Image container */}
          <div className="relative w-full aspect-[3/5] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <Image
              src="/Meprofile.jpg"
              alt="Laisha Alexandra Bravo Juárez"
              fill
              className="object-cover object-top contrast-[1.05] saturate-[0.9] transition-all duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-8 px-6 md:px-12 animate-fade-up [animation-delay:1500ms] w-full justify-center">
        <div className="hidden md:block w-12 md:w-16 hairline-h opacity-20" />
        <span className="vogue-label text-[0.55rem] md:text-[0.65rem] text-[#E8E2D8]/50 text-center tracking-[0.3em] md:tracking-[0.5em] whitespace-nowrap">
          Miami, FL and Mexico City, Mexico
        </span>
        <div className="hidden md:block w-12 md:w-16 hairline-h opacity-20" />
      </div>

      <style jsx>{`
        .btn-vogue-primary {
          font-family: var(--font-montserrat);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          padding: 1.4rem 4rem;
          background: #BAFF39;
          color: #1a0405;
          box-shadow: 0 15px 45px rgba(186, 255, 57, 0.25);
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          border: 1px solid #BAFF39;
        }
        .btn-vogue-primary:hover {
          background: #3A0610;
          color: #BAFF39;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 70px rgba(0,0,0,0.6);
        }
        .btn-vogue-secondary {
          font-family: var(--font-montserrat);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          padding: 1.4rem 4rem;
          border: 1px solid #BAFF39;
          color: #BAFF39;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .btn-vogue-secondary:hover {
          background: #BAFF39;
          color: #1a0405;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 70px rgba(0,0,0,0.4);
        }
      `}</style>
    </section>
  );
}
