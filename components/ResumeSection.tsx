'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ResumeSection() {
  const [showFull, setShowFull] = useState(false);
  const [showLang, setShowLang] = useState(false);

  return (
    <section id="full-resume" className="bg-[#6B0F1A] py-16 md:py-24 px-6 md:px-14 flex flex-col items-center relative overflow-hidden">
      {/* Editorial Hairline */}
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#BAFF39]/20" />

      <div className="max-w-[1300px] w-full text-center">
        <div className="flex flex-col items-center gap-6 mb-12 animate-fade-up">
          <div className="flex items-center gap-6">
            <div className="w-8 hairline-h opacity-30" />
            <span className="vogue-label text-[0.75rem] text-[#BAFF39]">ARCHIVE ACCESSION</span>
            <div className="w-8 hairline-h opacity-30" />
          </div>
          <h2 className="font-cinzel text-[clamp(2.2rem,5vw,4.5rem)] font-black text-[#F8F4EE] leading-[0.9] tracking-tight uppercase">
            THE RESUMÉ
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16 animate-fade-up [animation-delay:300ms]">
          <button
            onClick={() => setShowFull(!showFull)}
            className="vogue-label text-[0.85rem] text-[#1a0405] bg-[#BAFF39] px-12 py-5 hover:bg-[#F8F4EE] transition-all duration-500 shadow-2xl hover:-translate-y-2 active:scale-95 border-none"
          >
            {showFull ? 'REDACT ARCHIVE' : 'OPEN FULL DOSSIER'}
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowLang(!showLang)}
              className="vogue-label text-[0.85rem] text-[#BAFF39] border-[1px] border-[#BAFF39] px-12 py-5 hover:bg-[#BAFF39] hover:text-[#1a0405] transition-all duration-500 hover:-translate-y-2 active:scale-95 shadow-xl flex items-center gap-4"
            >
              DOWNLOAD PDF
              <svg 
                className={`w-4 h-4 transition-transform duration-500 ${showLang ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showLang && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-[#1a0405] border border-[#BAFF39]/30 shadow-3xl z-[500] animate-fade-up overflow-hidden">
                <a
                  href="/ResumeEng.pdf"
                  target="_blank"
                  className="block vogue-label text-[0.7rem] text-[#BAFF39] px-6 py-4 hover:bg-[#BAFF39] hover:text-[#1a0405] transition-all border-b border-[#BAFF39]/10"
                  onClick={() => setShowLang(false)}
                >
                  ENGLISH VERSION
                </a>
                <a
                  href="/resumeSpanish.pdf"
                  target="_blank"
                  className="block vogue-label text-[0.7rem] text-[#BAFF39] px-6 py-4 hover:bg-[#BAFF39] hover:text-[#1a0405] transition-all"
                  onClick={() => setShowLang(false)}
                >
                  VERSIÓN ESPAÑOL
                </a>
              </div>
            )}
          </div>
        </div>

        {showFull && (
          <div className="animate-fade-up bg-[#FAF6EE] p-6 md:p-12 lg:p-16 shadow-[0_60px_150px_rgba(0,0,0,0.8)] relative overflow-hidden text-left border-[0.5px] border-[#BAFF39]/30">
            {/* Editorial Grid Texture */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 2px,rgba(0,0,0,1) 2px,rgba(0,0,0,1) 4px)' }} />

            <div className="relative text-[#3D2508] font-cormorant space-y-8 md:space-y-12">

              {/* Header Spread */}
              <div className="text-center space-y-4 md:space-y-6 border-b-[1px] border-[#d4c9b8] pb-8 md:pb-12">
                <div className="flex justify-center mb-2 md:mb-4">
                  <span className="vogue-label text-[0.5rem] md:text-[0.55rem] text-[#6B0F1A] border border-[#6B0F1A]/20 px-3 py-0.5">CLASSIFIED: OFFICIAL RECORDS</span>
                </div>
                <h3 className="font-cinzel text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight text-[#1a0405] leading-[0.9]">
                  Laisha Alexandra <br /> Bravo Juárez
                </h3>
                <div className="flex items-center justify-center gap-4 md:gap-8 mt-4 md:mt-6">
                  <div className="w-6 md:w-12 hairline-h bg-[#6B0F1A]/40" />
                  <p className="vogue-label text-[0.65rem] md:text-[0.8rem] text-[#6B0F1A]">Software Engineer · BS @ FIU</p>
                  <div className="w-6 md:w-12 hairline-h bg-[#6B0F1A]/40" />
                </div>
              </div>

              {/* Magazine Grid Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

                {/* Left Column */}
                <div className="space-y-12 md:space-y-16">
                  <section>
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <span className="vogue-label text-[0.7rem] md:text-[0.8rem] text-[#6B0F1A]">01 // MISSION</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <p className="font-cormorant text-xl md:text-2xl leading-tight italic text-[#1a0405] font-black border-l-[3px] border-[#6B0F1A]/20 pl-6 md:pl-8 py-1 md:py-2">
                      "I bridge clinical insight with software precision to architect human-centric solutions for a complex future."
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <span className="vogue-label text-[0.7rem] md:text-[0.8rem] text-[#6B0F1A]">02 // EXHIBITS</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <ul className="space-y-4 md:space-y-6">
                      {[
                        { name: 'FIU SURF', url: 'https://fiusurf.com', role: 'TECHNICAL DIRECTOR' },
                        { name: 'ALPFA FIU', url: 'https://alpfafiu.org', role: 'FULL STACK DEV' },
                        { name: 'LIFEQUEST', url: 'https://devpost.com/software/lifequest-17u34t', role: 'AI ARCHITECT' },
                        { name: 'CASTIQ', url: 'https://castiq-d85d4.web.app/', role: 'CO-FOUNDER' },
                        { name: 'VIBERDY.XYZ', url: 'https://viberdy.xyz/', role: 'INFRASTRUCTURE' },
                        { name: 'ODD.STESTING', url: 'https://odd.shstesting.com', role: 'STUDIO WEBMASTER' },
                        { name: 'BSIDELA', url: 'https://bsidela.com', role: 'CREATIVE TECH' },
                      ].map(proj => (
                        <li key={proj.name} className="group border-b-[0.5px] border-[#d4c9b8]/40 pb-2 hover:translate-x-2 transition-all duration-500">
                          <a href={proj.url} target="_blank" className="flex justify-between items-baseline group-hover:px-2 transition-all">
                            <p className="font-cinzel text-lg md:text-xl font-black text-[#1a0405] group-hover:text-[#6B0F1A] transition-colors">{proj.name}</p>
                            <span className="vogue-label text-[0.55rem] md:text-[0.6rem] text-[#9a8e7e] group-hover:text-[#6B0F1A] transition-colors">{proj.role}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Right Column */}
                <div className="space-y-8 md:space-y-16">
                  <section>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <span className="vogue-label text-[0.7rem] md:text-[0.8rem] text-[#6B0F1A]">03 // ARSENAL</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <div className="space-y-6 md:space-y-10">
                      <div className="border-l-[1px] border-[#6B0F1A]/10 pl-6 md:pl-8">
                        <p className="vogue-label text-[0.55rem] md:text-[0.65rem] text-[#6B0F1A] mb-2 md:mb-4 tracking-[0.2em] md:tracking-[0.5em]">SYSTEM LANGUAGES</p>
                        <p className="font-cormorant text-lg md:text-xl font-black text-[#1a0405]">Python · JavaScript · TypeScript · Java · C++ · SQL</p>
                      </div>
                      <div className="border-l-[1px] border-[#6B0F1A]/10 pl-6 md:pl-8">
                        <p className="vogue-label text-[0.55rem] md:text-[0.65rem] text-[#6B0F1A] mb-2 md:mb-4 tracking-[0.2em] md:tracking-[0.5em]">OPERATIONAL FRAMEWORKS</p>
                        <p className="font-cormorant text-lg md:text-xl font-black text-[#1a0405]">React · Next.js · Node.js · Flutter · Firebase · AWS · Tailwind</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <span className="vogue-label text-[0.7rem] md:text-[0.8rem] text-[#6B0F1A]">04 // ACQUIRED DATA</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <ul className="space-y-6 md:space-y-10">
                      <li className="flex gap-4 md:gap-8 group">
                        <span className="vogue-label text-lg md:text-xl text-[#BAFF39] drop-shadow-[0_0_10px_#BAFF39] shrink-0">I</span>
                        <div>
                          <p className="font-cinzel text-lg md:text-xl font-black text-[#1a0405] uppercase leading-none mb-1 md:mb-2">Software Consultant</p>
                          <p className="font-cormorant text-base md:text-lg font-bold italic text-[#8B6340]">EDICOM · 2026 – Present</p>
                        </div>
                      </li>
                      <li className="flex gap-4 md:gap-8 group">
                        <span className="vogue-label text-lg md:text-xl text-[#6B0F1A]/40 group-hover:text-[#6B0F1A] transition-colors shrink-0">II</span>
                        <div>
                          <p className="font-cinzel text-lg md:text-xl font-black text-[#1a0405] uppercase leading-none mb-1 md:mb-2">Dean’s List Distinction</p>
                          <p className="font-cormorant text-base md:text-lg font-bold italic text-[#8B6340]">Academic Excellence · FIU Engineering Portfolio</p>
                          <div className="mt-4 md:mt-6 relative group/img overflow-hidden border border-[#6B0F1A]/10 shadow-lg max-w-md">
                            <Image 
                              src="/FIU.JPG" 
                              alt="Dean's List Distinction FIU" 
                              width={800} 
                              height={600} 
                              className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>

              </div>

              <div className="text-center pt-16 md:pt-32 border-t-[0.5px] border-[#d4c9b8] flex flex-col items-center gap-6">
                <div className="w-1 hairline-v h-12 md:h-20 bg-[#6B0F1A]/20" />
                <p className="vogue-label text-[0.6rem] md:text-[0.75rem] text-[#b5a898] font-black tracking-[0.4em] md:tracking-[0.8em]">AUTHORIZED ARCHIVE EDITION · 2026 // L-A-B-J</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
