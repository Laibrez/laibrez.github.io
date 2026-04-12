'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

const allProjects = [
  {
    name: 'FIU SURF',
    role: 'Director of Technology',
    thumb: '/fiusurfss.png',
    tags: ['React', 'Tailwind', 'E-commerce'],
    languages: ['TypeScript', 'Next.js', 'PostgreSQL', 'Framer Motion'],
    desc: `Led the digital transformation of FIU Surf Club, building a high-performance e-commerce platform.`,
    fullDesc: `As the Director of Technology, I architected a modern digital home for Florida International University's surf community. The platform features a fluid, responsive UI designed to evoke surf culture while maintaining rigorous technical standards.`,
    num: '01',
    links: [{ label: 'Live Site', url: 'https://fiusurf.com' }]
  },
  {
    name: 'ALPFA FIU',
    role: 'Developer',
    thumb: '/alpfass.png',
    tags: ['WordPress', 'Community Platform'],
    languages: ['PHP', 'JavaScript', 'SQL', 'Elementor'],
    desc: `Architected the professional digital presence for the largest ALPFA student chapter in the U.S.`,
    fullDesc: `Working with ALPFA FIU, I optimized a large-scale community platform to handle high traffic and complex member interactions. My work focused on performance optimization and custom plugin integration.`,
    num: '02',
    links: [{ label: 'Live Site', url: 'https://alpfafiu.org' }]
  },
  {
    name: 'LifeQuest',
    role: 'ShellHacks 2025',
    thumb: '/LifeQuest.png',
    tags: ['AI', 'Product Development'],
    languages: ['Python', 'OpenAI API', 'React', 'FastAPI'],
    desc: `AI-powered gamified life coach developed during Florida's largest hackathon.`,
    fullDesc: `LifeQuest uses advanced LLMs to turn mundane daily tasks into a gamified RPG experience. I was responsible for the AI logic layer, integrating OpenAI's GPT-4o to analyze user goals and generate dynamic "missions." The system features a real-time reactive frontend and a FastAPI backend designed to scale under hackathon-level pressure. LifeQuest represents the intersection of productivity tools and interactive entertainment.`,
    num: '03',
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/lifequest-17u34t' }]
  },
  {
    name: 'CASTIQ',
    role: 'Co-Founder',
    thumb: '/Castiq.png',
    tags: ['Flutter', 'Marketplace'],
    languages: ['Dart', 'Firebase', 'Go', 'GCP'],
    desc: `Professional marketplace platform for high-end modeling and creative sectors.`,
    fullDesc: `Castiq is an ambitious venture aimed at digitizing the talent discovery process. As a co-founder, I led the mobile-first architecture using Flutter, ensuring a unified experience across iOS and Android. The backend relies on Firebase for real-time messaging and GCP for secure asset hosting. We focus on "high-fidelity" interactions, creating a premium feel that matches the luxury industry we serve.`,
    num: '04',
    links: [{ label: 'Live', url: 'https://castiq-d85d4.web.app/' }]
  },
  {
    name: 'VibeRdy.xyz',
    role: 'AWS Engineer',
    thumb: '/VibeRdy.png',
    tags: ['Python', 'AWS', 'Automation'],
    languages: ['Python', 'AWS Lambda', 'Selenium', 'InfluxDB'],
    desc: `Performance-driven automation server providing deep website insights and quality metrics.`,
    fullDesc: `VibeRdy leverages AWS Lambda for parallel processing and Selenium for browser automation, returning performance analytics in record time.`,
    num: '05',
    links: [{ label: 'Live Site', url: 'https://viberdy.xyz/' }]
  },
  {
    name: 'RunwAI',
    role: 'AI Stylist',
    thumb: '/runwai.png',
    tags: ['Python', 'React', 'AI Integration'],
    languages: ['Python', 'PyTorch', 'Next.js', 'Stable Diffusion'],
    desc: `Generative AI platform serving as a personal stylist using custom-aesthetic profiles.`,
    fullDesc: `RunwAI utilizes Stable Diffusion and custom-trained LoRAs to generate realistic fashion previews, allowing users to "try on" clothes digitally.`,
    num: '06',
    links: [{ label: 'GitHub', url: 'https://github.com/Laibrez/outfit-ai' }]
  },
  {
    name: 'Friend Finder',
    role: 'Hackathon 2nd Place',
    thumb: '/friendfinder.png',
    tags: ['Social Impact', 'Community'],
    languages: ['React Native', 'Node.js', 'Express', 'Google Maps API'],
    desc: `A community-building tool designed to combat social isolation through event discovery.`,
    fullDesc: `Securing 2nd place at the EmpowHer Hackathon, Friend Finder uses the Google Maps API to show users community events and potential social connections.`,
    num: '07',
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/friendfinder-ev8h0w' }]
  },
  {
    name: 'MedicBridges',
    role: 'Philanthropy Fellow',
    thumb: '/medicbridge.png',
    tags: ['Healthcare Access'],
    languages: ['React', 'Sanity.io', 'Tailwind CSS', 'GraphQL'],
    desc: `Centralizing healthcare resources by mapping lower-cost clinical access across the U.S.`,
    fullDesc: `MedicBridges is a mission-driven platform designed to close healthcare gaps, developing a performant digital directory using Sanity.io.`,
    num: '08',
    links: [{ label: 'Live Site', url: 'https://www.medicbridges.com/' }]
  },
  {
    name: 'GreenBee',
    role: 'Payout Platform',
    thumb: '/greenbee.png',
    tags: ['Compliance', 'API'],
    languages: ['TypeScript', 'Supabase', 'Stripe API', 'Next.js'],
    desc: `Automated compliance and payout infrastructure for creator marketplaces.`,
    fullDesc: `GreenBee solves the "unsexy" parts of creator marketplaces: tax forms, identity verification, and cross-border payouts. I built the Stripe Connect integration and the automated W-9 collection workflow using Supabase Edge Functions. The goal was to create a "set-and-forget" infrastructure that allows creative founders to focus on their users while the technical backend handles global compliance.`,
    num: '09',
    links: [{ label: 'Live', url: 'https://gcaztiq.vercel.app/' }]
  },
  {
    name: 'Odd Jobber',
    role: 'SeriouslyHallie Studios',
    thumb: '/oddstesting.png',
    tags: ['Full Stack'],
    languages: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    desc: `High-performance creative testing infrastructures for complex marketing funnels.`,
    fullDesc: `Developed micro-services for high-velocity creative testing with SeriouslyHallie studios, using Docker and PostgreSQL to aggregate user behavior data.`,
    num: '10',
    links: [{ label: 'Live Site', url: 'https://odd.shstesting.com' }]
  },
  {
    name: 'Bdside La',
    role: 'Creative Tech w/ Hallie',
    thumb: '/bsidela.png',
    tags: ['Next.js', 'Creative Direction'],
    languages: ['Next.js', 'Framer Motion', 'GSAP', 'Three.js'],
    desc: `A digital showroom for the future of creative direction and high-fidelity typography.`,
    fullDesc: `Bdside La pushes boundaries of browser performance with Hallie using GSAP and Framer Motion, merging technical execution with creative movement.`,
    num: '11',
    links: [{ label: 'Live Site', url: 'https://bsidela.com' }]
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const openModal = (proj: typeof allProjects[0]) => {
    setSelectedProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-[#3A0610]">
      <Navbar />
      
      <div className="pt-44 pb-32 px-6 md:px-14">
        <header className="max-w-[1300px] mx-auto mb-24 space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-6 text-[#BAFF39] text-[0.8rem] font-extrabold tracking-[0.6em] uppercase">
            <div className="w-16 h-[2px] bg-[#BAFF39]" />
            THE COMPLETE ARCHIVE
          </div>
          <h1 className="font-cinzel text-[clamp(2.5rem,8vw,7.5rem)] font-extrabold text-[#F8F4EE] leading-tight tracking-[0.05em]">PROJECTS GRID</h1>
          <p className="font-cormorant text-2xl italic text-[#D4C9B8] max-w-2xl leading-relaxed">
            A comprehensive retrospective viewing all technical achievements across health-tech, creative integration, and AI-driven platforms.
          </p>
        </header>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {allProjects.map((proj, idx) => (
            <div 
              key={idx} 
              onClick={() => openModal(proj)}
              className="group relative bg-[#1a0405] border border-[#BAFF39]/10 p-2 transition-all hover:border-[#BAFF39]/30 shadow-2xl animate-fade-up cursor-pointer" 
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="aspect-video relative overflow-hidden mb-8">
                <Image src={proj.thumb} alt={proj.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 font-cinzel text-[#BAFF39] text-sm font-black bg-[#1a0405]/80 px-3 py-1 border border-[#BAFF39]/20">{proj.num}</div>
              </div>
              
              <div className="px-6 pb-10 space-y-6">
                 <div>
                   <h2 className="font-cinzel text-3xl font-extrabold text-[#F8F4EE] mb-2 group-hover:text-[#BAFF39] transition-colors uppercase">{proj.name}</h2>
                   <p className="vogue-label text-[0.65rem] text-[#BAFF39] tracking-[0.3em] uppercase">{proj.role}</p>
                 </div>

                 <p className="font-cormorant text-xl text-[#F8F4EE] leading-relaxed italic line-clamp-3">
                    {proj.desc}
                 </p>
                 
                 <div className="flex flex-wrap gap-2">
                   {proj.languages?.slice(0, 3).map(lang => (
                     <span key={lang} className="vogue-label text-[0.5rem] px-2 py-1 bg-[#BAFF39]/5 text-[#BAFF39]/60 border border-[#BAFF39]/10 uppercase tracking-widest">{lang}</span>
                   ))}
                 </div>

                 <div className="pt-6 border-t border-[#BAFF39]/10">
                   {proj.links.map(l => (
                     <span key={l.label} className="font-montserrat text-[0.7rem] font-bold tracking-[0.4em] uppercase text-[#F8F4EE] hover:text-[#BAFF39] transition-all flex items-center gap-3">
                       {l.label}
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
           <div onClick={closeModal} className="absolute inset-0 bg-[#1a0405]/95 backdrop-blur-xl" />
           <div className="relative w-full max-w-[1200px] h-[85vh] bg-[#FAF6EE] overflow-y-auto shadow-6xl animate-scale-up rounded-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-[40vh] lg:h-full relative overflow-hidden">
                 <Image src={selectedProject.thumb} alt={selectedProject.name} fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col relative bg-white">
                 <button onClick={closeModal} className="absolute top-10 right-10 vogue-label text-[0.8rem] text-[#6B0F1A] border-b-[1.5px] border-[#BAFF39] pb-1">CLOSE</button>
                 <span className="vogue-label text-[0.7rem] text-[#6B0F1A] mb-4">REF. {selectedProject.num}</span>
                 <h2 className="font-cinzel text-5xl font-black text-[#1a0405] mb-8 uppercase">{selectedProject.name}</h2>
                 <p className="font-cormorant text-2xl font-bold italic text-[#6B0F1A] border-l-4 border-[#6B0F1A]/10 pl-8 mb-10">{selectedProject.desc}</p>
                 <div className="font-cormorant text-xl text-[#3D2508] leading-relaxed font-bold mb-10">{selectedProject.fullDesc}</div>
                 <div className="flex gap-4 flex-wrap mb-10">
                    {selectedProject.languages.map(lang => (
                       <span key={lang} className="vogue-label text-[0.65rem] text-[#6B0F1A] bg-[#BAFF39]/10 px-4 py-2 border border-[#BAFF39]/30">{lang}</span>
                    ))}
                 </div>
                 <div className="mt-auto">
                    {selectedProject.links.map(l => (
                       <a key={l.label} href={l.url} target="_blank" className="vogue-label text-[0.8rem] text-[#1a0405] border-b-2 border-[#BAFF39] pb-1 font-black">{l.label}</a>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
