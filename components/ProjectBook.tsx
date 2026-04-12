'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'FIU SURF',
    role: 'Director of Technology',
    thumb: '/fiusurfss.png',
    tags: ['React', 'Tailwind', 'E-commerce'],
    languages: ['TypeScript', 'Next.js', 'PostgreSQL', 'Framer Motion'],
    desc: 'Led the digital transformation of FIU Surf Club, building a high-performance e-commerce platform.',
    links: [{ label: 'Live Site', url: 'https://fiusurf.com' }],
    num: '01'
  },
  {
    name: 'ALPFA FIU',
    role: 'Developer',
    thumb: '/alpfass.png',
    tags: ['WordPress', 'Community Platform'],
    languages: ['PHP', 'JavaScript', 'SQL', 'Elementor'],
    desc: 'Architected the professional digital presence for the largest ALPFA student chapter in the U.S.',
    links: [{ label: 'Live Site', url: 'https://alpfafiu.org' }],
    num: '02'
  },
  {
    name: 'LifeQuest',
    role: 'ShellHacks 2025',
    thumb: '/LifeQuest.png',
    tags: ['AI', 'Product Development'],
    languages: ['Python', 'OpenAI API', 'React', 'FastAPI'],
    desc: 'AI-powered gamified life coach developed during Florida\'s largest hackathon.',
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/lifequest-17u34t' }],
    num: '03'
  },
  {
    name: 'CASTIQ',
    role: 'Co-Founder',
    thumb: '/Castiq.png',
    tags: ['Flutter', 'Marketplace'],
    languages: ['Dart', 'Firebase', 'Go', 'GCP'],
    desc: 'Professional marketplace platform for high-end modeling and creative sectors.',
    links: [{ label: 'Live', url: 'https://castiq-d85d4.web.app/' }],
    num: '04'
  },
  {
    name: 'VibeRdy.xyz',
    role: 'Hackathon Project',
    thumb: '/VibeRdy.png',
    tags: ['Python', 'AWS', 'Automation'],
    languages: ['Python', 'AWS Lambda', 'Selenium', 'InfluxDB'],
    desc: 'Performance-driven automation server providing deep website insights and quality metrics.',
    links: [{ label: 'Live Site', url: 'https://viberdy.xyz/' }],
    num: '05'
  },
  {
    name: 'RunwAI',
    role: 'AI Stylist',
    thumb: '/runwai.png',
    tags: ['Python', 'React', 'AI Integration'],
    languages: ['Python', 'PyTorch', 'Next.js', 'Stable Diffusion'],
    desc: 'Generative AI platform serving as a personal stylist using custom-aesthetic profiles.',
    links: [{ label: 'GitHub', url: 'https://github.com/Laibrez/outfit-ai' }],
    num: '06'
  },
  {
    name: 'Friend Finder',
    role: 'Hackathon 2nd Place',
    thumb: '/friendfinder.png',
    tags: ['Social Impact', 'Community'],
    languages: ['React Native', 'Node.js', 'Express', 'Google Maps API'],
    desc: 'A community-building tool designed to combat social isolation through event discovery.',
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/friendfinder-ev8h0w' }],
    num: '07'
  },
  {
    name: 'MedicBridges',
    role: 'Philanthropy Fellow',
    thumb: '/medicbridge.png',
    tags: ['Healthcare Access'],
    languages: ['React', 'Sanity.io', 'Tailwind CSS', 'GraphQL'],
    desc: `Centralizing healthcare resources by mapping lower-cost clinical access across the U.S.`,
    links: [{ label: 'Live Site', url: 'https://www.medicbridges.com/' }],
    num: '08'
  },
  {
    name: 'GreenBee',
    role: 'Payout Platform',
    thumb: '/greenbee.png',
    tags: ['Compliance', 'API'],
    languages: ['TypeScript', 'Supabase', 'Stripe API', 'Next.js'],
    desc: 'Automated compliance and payout infrastructure for creator marketplaces.',
    links: [{ label: 'Live', url: 'https://gcaztiq.vercel.app/' }],
    num: '09'
  },
  {
    name: 'Odd Jobber',
    role: 'SeriouslyHallie Studios',
    thumb: '/oddstesting.png',
    tags: ['Full Stack'],
    languages: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    desc: `High-performance creative testing infrastructures for SeriouslyHallie studios.`,
    links: [{ label: 'Live Site', url: 'https://odd.shstesting.com' }],
    num: '10'
  },
  {
    name: 'Bdside La',
    role: 'Creative Tech w/ Hallie',
    thumb: '/bsidela.png',
    tags: ['Next.js', 'Creative Direction'],
    languages: ['Next.js', 'Framer Motion', 'GSAP', 'Three.js'],
    desc: `A digital showroom for high-fidelity typography and creative movement with Hallie.`,
    links: [{ label: 'Live Site', url: 'https://bsidela.com' }],
    num: '11'
  }
];

export default function ProjectBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalLeaves = projects.length + 1; // Projects + Back Cover

  useEffect(() => {
    const handleTurn = (e: any) => {
      if (typeof e.detail?.pageNum === 'number') {
        setCurrentPage(e.detail.pageNum);
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('turnProjectBook', handleTurn);
    return () => window.removeEventListener('turnProjectBook', handleTurn);
  }, []);

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalLeaves));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="featured-book" className="min-h-screen bg-[#3A0610] pt-16 pb-32 px-6 md:px-14 relative transition-all duration-1000 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#BAFF39]/10" />

      <div className="text-center mb-24 animate-fade-up">
        <div className="flex items-center justify-center gap-8 mb-6">
          <div className="w-20 h-[0.5px] bg-[#BAFF39]/60" />
          <span className="vogue-label text-[1rem] text-[#BAFF39]">COLLECTOR'S ARCHIVE</span>
          <div className="w-20 h-[0.5px] bg-[#BAFF39]/60" />
        </div>
        <h2 className="font-cormorant text-[clamp(3rem,6vw,6rem)] font-light italic text-[#F8F4EE] leading-none">
          Portfolio Exhibition
        </h2>
      </div>

      <div className="relative flex flex-col items-center gap-6 lg:gap-8 transition-all duration-1000">

        {/* Book Container - Mobile Adjusted Height (480px) / Desktop (680px) */}
        <div className="relative w-[340px] md:w-[400px] lg:w-[1000px] h-[480px] lg:h-[680px] [perspective:3500px] [transform-style:preserve-3d]">

          {/* THE PAGES */}

          {/* 1. FRONT COVER */}
          <div
            className={`absolute inset-y-0 right-0 w-full lg:w-[500px] origin-left transition-transform duration-[1400ms] cubic-bezier(0.19,1,0.22,1) z-[200] preserve-3d cursor-pointer leather-book ${currentPage >= 1 ? '-rotate-y-[180deg]' : '-rotate-y-[6deg] lg:-translate-x-1/2'
              }`}
            onClick={currentPage === 0 ? nextPage : undefined}
          >
            {/* Front Side - ENGRAVED LEATHER COVER */}
            <div className="absolute inset-0 leather-texture-bg backface-hidden flex flex-col items-center justify-center gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.6)] rounded-r-xl overflow-hidden border-l-[4px] border-black/40">
              {/* Stitched Detail */}
              <div className="stitched-border" />
              
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-20" />
              
              <div className="brass-corner top-0 left-0 z-30" />
              <div className="brass-corner top-0 right-0 rotate-90 z-30" />
              <div className="brass-corner bottom-0 left-0 -rotate-90 z-30" />
              <div className="brass-corner bottom-0 right-0 rotate-180 z-30" />

              <div className="flex flex-col items-center z-10 scale-[0.7] md:scale-90 lg:scale-100">
                <span className="vogue-label text-[0.8rem] text-[#3d1b10]/60 tracking-[0.6em] mb-4">EDITION MMXXVI</span>
                <h2 className="engraved-text font-cinzel text-5xl lg:text-7xl font-black tracking-[0.2em] text-center leading-tight select-none">
                  PROJECTS
                </h2>
                <div className="w-16 h-[1.5px] bg-[#3d1b10]/20 my-4 lg:my-6" />
                <span className="vogue-label text-[0.7rem] text-[#3d1b10]/50 tracking-[0.8em] uppercase">Archive Collection</span>
              </div>
            </div>
            
            {/* Inside Front Cover - BLANK SILK PAPER */}
            <div className="absolute inset-0 bg-[#FAF6EE] rotate-y-180 backface-hidden shadow-[inset_50px_0_70px_rgba(0,0,0,0.15)] rounded-l-md overflow-hidden">
               <div className="w-full h-full silk-paper opacity-40 absolute inset-0" />
            </div>
          </div>

          {/* 2. PROJECT LEAVES */}
          {projects.map((proj, idx) => {
            const pageNum = idx + 1;
            const isHidden = currentPage < pageNum || currentPage > pageNum + 1;
            
            return (
              <div
                key={idx}
                className={`absolute inset-y-0 right-0 w-full lg:w-[500px] origin-left transition-all duration-[800ms] shadow-2xl preserve-3d ${
                  currentPage > pageNum 
                    ? '-rotate-y-[180deg]' 
                    : 'rotate-y-0'
                } ${isHidden ? 'opacity-0 invisible pointer-events-none hidden' : 'opacity-100 visible flex'}`}
                style={{
                  zIndex: 120 - pageNum,
                  transitionDelay: `${currentPage > pageNum ? idx * 20 : 0}ms`,
                }}
              >
                {/* Front Side of Leaf (Project Page on the Right) */}
                <div className="absolute inset-0 bg-[#FAF6EE] flex flex-col backface-hidden border-l-[1px] border-[#d4c9b8] overflow-hidden shadow-[inset_-25px_0_60px_rgba(0,0,0,0.08)] rounded-r-sm">
                  <div className="h-full flex flex-col p-10 lg:p-14 relative z-10">
                    <div className="flex justify-between items-center border-b-[1px] border-[#d4c9b8] pb-3 lg:pb-4 mb-4 lg:mb-6">
                      <span className="vogue-label text-[0.6rem] lg:text-[0.7rem] text-[#6B0F1A] font-black">{proj.role}</span>
                      <span className="font-cinzel text-lg lg:text-xl font-black text-[#6B0F1A] opacity-30">{proj.num}</span>
                    </div>

                    <h3 className="font-cinzel text-2xl lg:text-4xl font-black text-[#1a0405] mb-4 lg:mb-6 leading-none tracking-tighter uppercase">{proj.name}</h3>

                    <div className="relative aspect-[16/10] w-full mb-4 lg:mb-8 border-[1px] border-[#d4c9b8] shadow-2xl group overflow-hidden bg-white">
                      <Image 
                        src={proj.thumb} 
                        alt={proj.name} 
                        fill 
                        className="object-cover transition-all group-hover:scale-105 duration-1000" 
                        sizes="600px"
                      />
                    </div>

                    <p className="font-cormorant text-[1rem] lg:text-[1.2rem] font-bold leading-tight text-[#3d2508] mb-6 lg:mb-8 italic border-l-[3px] border-[#6B0F1A]/10 pl-6 lg:pl-8 line-clamp-2 md:line-clamp-3 overflow-hidden">
                      {proj.desc}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-10 border-t-[1.3px] border-[#d4c9b8] pt-8">
                      {proj.links.map(l => (
                        <a key={l.label} href={l.url} target="_blank" className="vogue-label text-[0.7rem] text-[#1a0405] border-b-[2px] border-[#FFD700] hover:border-[#6B0F1A] transition-all pb-1 font-black">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Side of Leaf - BLANK SILK PAPER */}
                <div className="absolute inset-0 bg-[#FAF6EE] rotate-y-180 backface-hidden shadow-[inset_60px_0_100px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border-r-[1px] border-[#d4c9b8] rounded-l-sm">
                   <div className="w-full h-full silk-paper opacity-40 absolute inset-0" />
                </div>
              </div>
            );
          })}

          {/* 3. BACK COVER */}
          <div
            className={`absolute inset-y-0 right-0 w-full lg:w-[500px] origin-left transition-all duration-[1400ms] cubic-bezier(0.19,1,0.22,1) z-[10] preserve-3d cursor-pointer ${currentPage > totalLeaves ? '-rotate-y-[180deg]' : ''
              } ${currentPage === 0 ? 'opacity-0 invisible pointer-events-none hidden' : 'opacity-100 visible'}`}
          >
            {/* Last Internal Surface - RIGHT SIDE */}
            <div className="absolute inset-0 bg-[#FAF6EE] flex flex-col items-center justify-center backface-hidden border-l-[1px] border-[#d4c9b8] rounded-r-sm p-16">
              <div className="w-20 hairline-h bg-[#6B0F1A]/30 mb-8" />
              <h4 className="vogue-label text-2xl text-[#6B0F1A] mb-4">FINIS</h4>
              <span className="vogue-label text-[0.7rem] tracking-[0.6em] uppercase text-[#b5a898]">END OF VOLUME I</span>
            </div>

            {/* External Back Cover (Shown on LEFT) */}
            <div className="absolute inset-0 bg-[#3d1b10] rotate-y-180 backface-hidden shadow-5xl flex flex-col items-center justify-center rounded-l-md p-16">
              <div className="leather-texture absolute inset-0 opacity-50" />
              <h4 className="font-great-vibes text-[7rem] lg:text-[9rem] text-[#BAFF39] leading-none mb-4 drop-shadow-[0_0_50px_rgba(186,255,57,0.4)]">
                Thank You
              </h4>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrentPage(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="mt-16 vogue-label text-[0.75rem] text-[#BAFF39] border-[1.5px] border-[#BAFF39]/40 px-12 py-5 hover:bg-[#BAFF39] hover:text-[#1a0405] transition-all font-black"
              >
                RE-OPEN ARCHIVE
              </button>
            </div>
          </div>


        </div>
        
        {/* NAVIGATION CONTROLS */}
        <div className="flex flex-col items-center gap-6 mt-2 mb-16">
          {currentPage > 0 && (
            <div className="flex items-center gap-10 z-[300]">
              <button
                onClick={prevPage}
                className={`flex flex-col items-center group transition-all duration-500 ${currentPage < 1 ? 'opacity-0 scale-50 pointer-events-none' : 'hover:scale-110 active:scale-90'}`}
              >
                  <div className="w-14 h-14 rounded-full border-[1.5px] border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#1a0405] backdrop-blur-lg shadow-2xl transition-all duration-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </div>
                  <span className="mt-2 vogue-label text-[0.7rem] text-[#FFD700] hidden lg:block tracking-[0.5em] font-black">REVERSE</span>
              </button>

              <button
                onClick={nextPage}
                className={`flex flex-col items-center group transition-all duration-500 ${currentPage > projects.length ? 'opacity-0 scale-50 pointer-events-none' : 'hover:scale-110 active:scale-90'}`}
              >
                <div className="w-14 h-14 rounded-full border-[1.5px] border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#1a0405] backdrop-blur-lg shadow-2xl transition-all duration-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
                <span className="mt-2 vogue-label text-[0.7rem] text-[#FFD700] hidden lg:block tracking-[0.5em] font-black">ADVANCE</span>
              </button>
            </div>
          )}


          <a
            href="/projects"
            className="group flex flex-col items-center gap-6 mt-12 transition-all duration-700 hover:scale-102"
          >
            <div className="vogue-label text-[1.1rem] text-[#FFD700] group-hover:text-white transition-colors relative font-black tracking-widest">
              EXPLORE HIGH-DENSITY GRID ARCHIVE
              <div className="absolute -bottom-6 left-0 w-0 h-[2px] bg-[#FFD700] group-hover:w-full transition-all duration-1000" />
            </div>
            <p className="font-cormorant text-2xl italic text-[#FFD700]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">For a pure technical overview</p>
          </a>
        </div>

      </div>

      <style jsx global>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .shadow-5xl { box-shadow: 0 60px 150px rgba(0,0,0,0.9); }
        
        .silk-paper {
          background-image: url('https://www.transparenttextures.com/patterns/handmade-paper.png');
          background-repeat: repeat;
        }

        .brass-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border-left: 2px solid #BAFF39;
          border-top: 2px solid #BAFF39;
          opacity: 0.3;
          margin: 15px;
        }

        .leather-texture-bg {
          background-color: #895129;
          background-image: url("https://www.transparenttextures.com/patterns/leather.png");
        }

        .engraved-text {
          background-image: url("https://www.transparenttextures.com/patterns/leather.png");
          background-clip: text;
          -webkit-background-clip: text;
          color: rgba(212, 175, 55, 0.9);
          filter: drop-shadow(0.5px 0.5px 0px rgba(255,255,255,0.2)) drop-shadow(-1px -1px 2px rgba(0,0,0,0.7));
        }

        .stitched-border {
          border: 2.5px dashed #6b4423;
          border-radius: 8px;
          position: absolute;
          inset: 15px;
          pointer-events: none;
          opacity: 0.6;
        }

        .leather-book {
          background-color: #3d1b10;
          border-radius: 4px 15px 15px 4px;
          background-image: 
            linear-gradient(to right, 
              rgba(0,0,0,0.3) 0px, 
              rgba(0,0,0,0.1) 15px, 
              transparent 20px),
            linear-gradient(90deg, #ac7434 2px, transparent 2px);
          box-shadow: 
            5px 5px 15px rgba(0,0,0,0.5),
            inset -2px 0 5px rgba(255,255,255,0.1);
        }

        .leather-book::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(0,0,0,0.2);
          box-shadow: 1px 0 2px rgba(255,255,255,0.05);
          z-index: 30;
        }

        .leather-book-base {
          background-color: #3d1b10;
          background-image: 
            linear-gradient(to right, 
              rgba(0,0,0,0.4) 0px, 
              rgba(0,0,0,0.2) 20px, 
              transparent 40px);
          box-shadow: inset 10px 0 30px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
