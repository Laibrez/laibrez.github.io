'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ResumeSection() {
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="full-resume" className="bg-[#6B0F1A] py-32 px-6 md:px-14 flex flex-col items-center relative overflow-hidden">
      {/* Editorial Hairline */}
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#BAFF39]/20" />

      <div className="max-w-[1300px] w-full text-center">
        <div className="flex flex-col items-center gap-8 mb-20 animate-fade-up">
          <div className="flex items-center gap-8">
            <div className="w-12 hairline-h opacity-30" />
            <span className="vogue-label text-[0.85rem] text-[#BAFF39]">ARCHIVE ACCESSION</span>
            <div className="w-12 hairline-h opacity-30" />
          </div>
          <h2 className="font-cinzel text-[clamp(2.8rem,6vw,6.5rem)] font-black text-[#F8F4EE] leading-[0.9] tracking-tight uppercase">
            THE RESUMÉ
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-24 animate-fade-up [animation-delay:300ms]">
          <button
            onClick={() => setShowFull(!showFull)}
            className="vogue-label text-[0.9rem] text-[#1a0405] bg-[#BAFF39] px-16 py-6 hover:bg-[#F8F4EE] transition-all duration-500 shadow-2xl hover:-translate-y-2 active:scale-95 border-none"
          >
            {showFull ? 'REDACT ARCHIVE' : 'OPEN FULL DOSSIER'}
          </button>
          <a
            href="/ResumeEng.pdf"
            target="_blank"
            className="vogue-label text-[0.9rem] text-[#BAFF39] border-[1px] border-[#BAFF39] px-16 py-6 hover:bg-[#BAFF39] hover:text-[#1a0405] transition-all duration-500 hover:-translate-y-2 active:scale-95 shadow-xl"
          >
            DOWNLOAD PDF
          </a>
        </div>

        {showFull && (
          <div className="animate-fade-up bg-[#FAF6EE] p-6 md:p-20 lg:p-32 shadow-[0_60px_150px_rgba(0,0,0,0.8)] relative overflow-hidden text-left border-[0.5px] border-[#BAFF39]/30">
            {/* Editorial Grid Texture */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 2px,rgba(0,0,0,1) 2px,rgba(0,0,0,1) 4px)' }} />

            <div className="relative text-[#3D2508] font-cormorant space-y-12 md:space-y-24">

              {/* Header Spread */}
              <div className="text-center space-y-6 md:space-y-8 border-b-[1px] border-[#d4c9b8] pb-12 md:pb-24">
                <div className="flex justify-center mb-4 md:mb-6">
                  <span className="vogue-label text-[0.55rem] md:text-[0.6rem] text-[#6B0F1A] border border-[#6B0F1A]/20 px-3 md:px-4 py-1">CLASSIFIED: OFFICIAL RECORDS</span>
                </div>
                <h3 className="font-cinzel text-3xl md:text-5xl lg:text-8xl font-black uppercase tracking-tight text-[#1a0405] leading-[0.9]">
                  Laisha Alexandra <br /> Bravo Juárez
                </h3>
                <div className="flex items-center justify-center gap-4 md:gap-10 mt-6 md:mt-10">
                  <div className="w-8 md:w-16 hairline-h bg-[#6B0F1A]/40" />
                  <p className="vogue-label text-[0.7rem] md:text-[1rem] text-[#6B0F1A]">Software Engineer · BS @ FIU</p>
                  <div className="w-8 md:w-16 hairline-h bg-[#6B0F1A]/40" />
                </div>
              </div>

              {/* Magazine Grid Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                {/* Left Column */}
                <div className="space-y-28">
                  <section>
                    <div className="flex items-center gap-4 mb-6 md:mb-10">
                      <span className="vogue-label text-[0.8rem] md:text-[1rem] text-[#6B0F1A]">01 // MISSION</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <p className="font-cormorant text-2xl md:text-4xl leading-tight italic text-[#1a0405] font-black border-l-[3px] border-[#6B0F1A]/20 pl-6 md:pl-10 py-2 md:py-4">
                      "I bridge clinical insight with software precision to architect human-centric solutions for a complex future."
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-8 md:mb-12">
                      <span className="vogue-label text-[0.8rem] md:text-[1rem] text-[#6B0F1A]">02 // EXHIBITS</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <ul className="space-y-6 md:space-y-12">
                      {[
                        { name: 'FIU SURF', url: 'https://fiusurf.com', role: 'TECHNICAL DIRECTOR' },
                        { name: 'ALPFA FIU', url: 'https://alpfafiu.org', role: 'FULL STACK DEV' },
                        { name: 'LIFEQUEST', url: 'https://devpost.com/software/lifequest-17u34t', role: 'AI ARCHITECT' },
                        { name: 'CASTIQ', url: 'https://castiq-d85d4.web.app/', role: 'CO-FOUNDER' },
                        { name: 'VIBERDY.XYZ', url: 'https://viberdy.xyz/', role: 'INFRASTRUCTURE' },
                        { name: 'ODD.STESTING', url: 'https://odd.shstesting.com', role: 'STUDIO WEBMASTER' },
                        { name: 'BSIDELA', url: 'https://bsidela.com', role: 'CREATIVE TECH' },
                      ].map(proj => (
                        <li key={proj.name} className="group border-b-[0.5px] border-[#d4c9b8]/40 pb-4 shadow-sm md:shadow-none hover:translate-x-2 md:hover:translate-x-4 transition-all duration-500">
                          <a href={proj.url} target="_blank" className="flex justify-between items-baseline md:group-hover:px-4 transition-all">
                            <p className="font-cinzel text-xl md:text-3xl font-black text-[#1a0405] group-hover:text-[#6B0F1A] transition-colors">{proj.name}</p>
                            <span className="vogue-label text-[0.6rem] md:text-[0.65rem] text-[#9a8e7e] group-hover:text-[#6B0F1A] transition-colors">{proj.role}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Right Column */}
                <div className="space-y-14 md:space-y-28">
                  <section>
                    <div className="flex items-center gap-4 mb-8 md:mb-12">
                      <span className="vogue-label text-[0.8rem] md:text-[1rem] text-[#6B0F1A]">03 // ARSENAL</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <div className="space-y-8 md:space-y-16">
                      <div className="border-l-[1px] border-[#6B0F1A]/10 pl-6 md:pl-10">
                        <p className="vogue-label text-[0.6rem] md:text-[0.7rem] text-[#6B0F1A] mb-3 md:mb-6 tracking-[0.2em] md:tracking-[0.5em]">SYSTEM LANGUAGES</p>
                        <p className="font-cormorant text-xl md:text-3xl font-black text-[#1a0405]">Python · JavaScript · TypeScript · Java · C++ · SQL</p>
                      </div>
                      <div className="border-l-[1px] border-[#6B0F1A]/10 pl-6 md:pl-10">
                        <p className="vogue-label text-[0.6rem] md:text-[0.7rem] text-[#6B0F1A] mb-3 md:mb-6 tracking-[0.2em] md:tracking-[0.5em]">OPERATIONAL FRAMEWORKS</p>
                        <p className="font-cormorant text-xl md:text-3xl font-black text-[#1a0405]">React · Next.js · Node.js · Flutter · Firebase · AWS · Tailwind</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-8 md:mb-12">
                      <span className="vogue-label text-[0.8rem] md:text-[1rem] text-[#6B0F1A]">04 // ACQUIRED DATA</span>
                      <div className="flex-1 hairline-h bg-[#d4c9b8]/60" />
                    </div>
                    <ul className="space-y-8 md:space-y-14">
                      <li className="flex gap-6 md:gap-10 group">
                        <span className="vogue-label text-xl md:text-2xl text-[#BAFF39] drop-shadow-[0_0_10px_#BAFF39] shrink-0">I</span>
                        <div>
                          <p className="font-cinzel text-xl md:text-3xl font-black text-[#1a0405] uppercase leading-none mb-2 md:mb-3">Software Consultant</p>
                          <p className="font-cormorant text-lg md:text-xl font-bold italic text-[#8B6340]">EDICOM · 2026 – Present // International Integration</p>
                        </div>
                      </li>
                      <li className="flex gap-6 md:gap-10 group">
                        <span className="vogue-label text-xl md:text-2xl text-[#6B0F1A]/40 group-hover:text-[#6B0F1A] transition-colors shrink-0">II</span>
                        <div>
                          <p className="font-cinzel text-xl md:text-3xl font-black text-[#1a0405] uppercase leading-none mb-2 md:mb-3">Dean’s List Distinction</p>
                          <p className="font-cormorant text-lg md:text-xl font-bold italic text-[#8B6340]">Academic Excellence · FIU Engineering Portfolio</p>
                          <div className="mt-6 md:mt-8 relative group/img overflow-hidden border border-[#6B0F1A]/10 shadow-lg max-w-lg">
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
