'use client';

import { useState, useRef } from 'react';

export default function AboutLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  const skills = [
    'Leadership', 'Planning', 'Budgeting', 'Agile/Scrum', 'React & Next.js', 'Full-Stack Logic', 'UI/UX Design'
  ];

  return (
    <section id="about" className="bg-[#FAF6EE] py-40 px-6 md:px-14 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute -top-20 -right-20 pointer-events-none opacity-[0.03] select-none">
        <div className="font-cinzel text-[20rem] font-black text-[#6B0F1A]">LBJ</div>
      </div>

      <div className="max-w-[800px] mx-auto relative z-10 transition-all duration-700">
        
        {/* ENVELOPE / SEALED SECTION */}
        {!isOpen && (
          <div 
            onClick={toggleLetter}
            className="w-full cursor-pointer animate-fade-up relative group"
          >
            <div className="bg-[#1a0405] border-[1px] border-[#BAFF39]/10 p-16 md:p-24 shadow-4xl flex flex-col items-center justify-center text-center gap-10 relative overflow-hidden rounded-sm group-hover:bg-[#1f0506] transition-colors">
               <div className="leather-texture absolute inset-0 opacity-30" />
               <div className="absolute inset-4 border border-[#BAFF39]/10 pointer-events-none" />
               
               <div className="w-16 h-16 rounded-full border border-[#BAFF39]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#BAFF39] transition-all duration-700">
                  <div className="w-10 h-10 border-[1px] border-[#BAFF39] rotate-45" />
               </div>
               
               <div className="space-y-4">
                  <span className="vogue-label text-[1rem] tracking-[0.8em] text-[#BAFF39]">OPEN CORRESPONDENCE</span>
                  <p className="vogue-label text-[0.6rem] text-[#BAFF39]/40 tracking-[0.4em] uppercase">Private Editorial // Ref: LS-26</p>
               </div>

               <div className="absolute bottom-8 right-8 opacity-20">
                  <span className="vogue-label text-[0.45rem] text-[#BAFF39] tracking-[1em]">MIAMI, FL</span>
               </div>
            </div>
          </div>
        )}

        {/* REVEALED MAGAZINE CONTENT (Inside the same 800px card) */}
        {isOpen && (
          <div 
            className="w-full animate-fade-up bg-white border border-[#d4c9b8] shadow-2xl relative overflow-hidden flex flex-col"
          >
             {/* Paper Texture Overlay */}
             <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply pointer-events-none grayscale" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/handmade-paper.png')"}} />

             <div className="p-8 md:p-14 lg:p-16 relative">
                {/* Internal Page Marker */}
                <div className="flex justify-between items-center mb-16 opacity-30 border-b border-[#d4c9b8] pb-6">
                   <span className="vogue-label text-[0.5rem] tracking-[0.3em] uppercase">Volume 01</span>
                   <span className="vogue-label text-[0.5rem] tracking-[0.3em] uppercase">Page 04</span>
                </div>

                {/* Article Masthead */}
                <div className="flex flex-col items-center mb-16">
                   <div className="flex items-center gap-6 mb-4">
                      <div className="w-10 h-[0.5px] bg-[#6B0F1A]/30" />
                      <span className="vogue-label text-[0.7rem] text-[#6B0F1A] tracking-[0.4em]">EDITORIAL FEATURE</span>
                      <div className="w-10 h-[0.5px] bg-[#6B0F1A]/30" />
                   </div>
                   <h2 className="font-cinzel text-5xl md:text-6xl font-black text-[#1a0405] leading-none text-center uppercase tracking-tighter">
                     About Me
                   </h2>
                </div>

                {/* Narrative Grid */}
                <div className="space-y-12">
                   <p className="font-cormorant text-xl md:text-2xl font-bold italic text-[#6B0F1A] leading-relaxed border-l-2 border-[#6B0F1A]/20 pl-8">
                     "Architecting digital experiences with clinical precision and a designer&apos;s intent."
                   </p>

                   <div className="font-cormorant text-lg text-[#3D2508] leading-relaxed font-bold space-y-6">
                      <p className="first-letter:float-left first-letter:text-7xl first-letter:font-black first-letter:font-cinzel first-letter:text-[#6B0F1A] first-letter:leading-[0.8] first-letter:mr-4 first-letter:mt-1 first-letter:drop-shadow-[3px_3px_0_rgba(186,255,57,0.3)]">
                        I&apos;m a software engineer and FIU graduate, bridging business leadership and technical innovation. 
                        My journey began in the healthcare industry, where I co-founded clinical laboratories in Mexico City. 
                        Managing teams and driving digital growth taught me that innovation is about the architecture of trust.
                      </p>
                      <p>
                        Today, I specialize in building user-centric applications using React and Next.js, 
                        focusing on high-quality solutions that balance high-fashion aesthetics with production-ready stability.
                      </p>
                   </div>

                   {/* Compact Specifications Box */}
                   <div className="border border-[#d4c9b8]/60 p-8 bg-[#FAF6EE]/30 relative">
                      <span className="vogue-label text-[0.5rem] text-[#6B0F1A] block mb-4 tracking-widest uppercase">Specifications</span>
                      <div className="flex flex-wrap gap-2">
                         {skills.map(skill => (
                           <span key={skill} className="vogue-label text-[0.5rem] text-[#6B0F1A] px-3 py-1 border border-[#6B0F1A]/10 bg-white/50">{skill}</span>
                         ))}
                      </div>
                   </div>

                   <div className="flex justify-between items-end pt-12 border-t border-[#d4c9b8]/40">
                      <div className="flex flex-col gap-1">
                        <div className="w-12 h-[1px] bg-[#6B0F1A]" />
                        <span className="font-great-vibes text-4xl text-[#6B0F1A]">Laisha Alexandra</span>
                      </div>
                      <button 
                         onClick={toggleLetter}
                         className="vogue-label text-[0.6rem] text-[#6B0F1A] border-b border-[#6B0F1A]/30 hover:border-[#BAFF39] transition-all pb-1 uppercase tracking-[0.4em]"
                      >
                         Seal Card
                      </button>
                   </div>
                </div>
             </div>
          </div>
        )}

      </div>
    </section>
  );
}
