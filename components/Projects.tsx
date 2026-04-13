'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'Odd Jobber',
    role: 'SeriouslyHallie Studios',
    thumb: '/oddstesting.png',
    tags: ['Full Stack'],
    languages: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    desc: `High-performance creative testing infrastructures integrated for SeriouslyHallie studios to optimize marketing funnels.`,
    fullDesc: `At Odd Jobber, I developed micro-services for high-velocity creative testing with SeriouslyHallie studios. We built an environment where new landing pages and ad-variants could be deployed and tracked in minutes. I utilized Docker for consistent deployment environments and Node.js for the tracking API that aggregates user behavior data into our PostgreSQL analytics engine.`,
    links: [{ label: 'Live Site', url: 'https://odd.shstesting.com' }],
    num: '01'
  },
  {
    name: 'Bdside La',
    role: 'Creative Tech w/ Hallie',
    thumb: '/bsidela.png',
    tags: ['Next.js', 'Creative Direction'],
    languages: ['Next.js', 'Framer Motion', 'GSAP', 'Three.js'],
    desc: `A digital showroom for high-fidelity typography and fluid interaction, created with Hallie.`,
    fullDesc: `Bdside La is a visual-first project with Hallie where I pushed the boundaries of browser performance. Using GSAP and Framer Motion, I created a layout that feels "liquid" as the user interacts with it. Every transition is architected to feel intentional, echoing the precision of the high-fashion industry. It demonstrates my ability to merge technical execution with high-level creative direction.`,
    links: [{ label: 'Live Site', url: 'https://bsidela.com' }],
    num: '02'
  },
  {
    name: 'FIU SURF',
    role: 'Director of Technology',
    thumb: '/fiusurfss.png',
    tags: ['React', 'Tailwind', 'E-commerce'],
    languages: ['TypeScript', 'Next.js', 'PostgreSQL', 'Framer Motion'],
    desc: `Led the digital transformation of FIU Surf Club, building a high-performance e-commerce and community platform. Developed custom event registration workflows and member management systems.`,
    fullDesc: `As the Director of Technology, I architected a modern digital home for Florida International University's surf community. The platform features a fluid, responsive UI designed to evoke surf culture while maintaining rigorous technical standards. I implemented secure payment gateways for merchandise, automated email notifications for club events, and a robust backend for member database management. The project served as a bridge between creative community vibes and production-grade software engineering.`,
    links: [{ label: 'Live Site', url: 'https://fiusurf.com' }],
    num: '03'
  },
  {
    name: 'ALPFA FIU',
    role: 'Developer',
    thumb: '/alpfass.png',
    tags: ['WordPress', 'Community Platform'],
    languages: ['PHP', 'JavaScript', 'SQL', 'Elementor'],
    desc: `Architected the professional digital presence for the largest ALPFA student chapter in the U.S., supporting 600+ active members.`,
    fullDesc: `Working with ALPFA FIU, I optimized a large-scale community platform to handle high traffic and complex member interactions. My work focused on performance optimization, custom plugin integration, and a data-driven approach to member engagement tracking. I ensured the platform remained accessible and professionally aligned with the national organization's brand while delivering a unique local experience for FIU students.`,
    links: [{ label: 'Live Site', url: 'https://alpfafiu.org' }],
    num: '04'
  },
  {
    name: 'LifeQuest',
    role: 'ShellHacks 2025',
    thumb: '/LifeQuest.png',
    tags: ['AI', 'Product Development'],
    languages: ['Python', 'OpenAI API', 'React', 'FastAPI'],
    desc: `AI-powered gamified life coach developed during Florida's largest hackathon. Focused on behavioral transformation through AI.`,
    fullDesc: `LifeQuest uses advanced LLMs to turn mundane daily tasks into a gamified RPG experience. I was responsible for the AI logic layer, integrating OpenAI's GPT-4o to analyze user goals and generate dynamic "missions." The system features a real-time reactive frontend and a FastAPI backend designed to scale under hackathon-level pressure. LifeQuest represents the intersection of productivity tools and interactive entertainment.`,
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/lifequest-17u34t' }],
    num: '05'
  },
  {
    name: 'CASTIQ',
    role: 'Co-Founder',
    thumb: '/Castiq.png',
    tags: ['Flutter', 'Marketplace'],
    languages: ['Dart', 'Firebase', 'Go', 'GCP'],
    desc: `Professional marketplace platform for high-end modeling and creative sectors, currently in private development.`,
    fullDesc: `Castiq is an ambitious venture aimed at digitizing the talent discovery process. As a co-founder, I led the mobile-first architecture using Flutter, ensuring a unified experience across iOS and Android. The backend relies on Firebase for real-time messaging and GCP for secure asset hosting. We focus on "high-fidelity" interactions, creating a premium feel that matches the luxury industry we serve.`,
    links: [{ label: 'Live', url: 'https://castiq-d85d4.web.app/' }],
    num: '06'
  },
  {
    name: 'VibeRdy.xyz',
    role: 'Hackathon Project',
    thumb: '/VibeRdy.png',
    tags: ['Python', 'AWS', 'Automation'],
    languages: ['Python', 'AWS Lambda', 'Selenium', 'InfluxDB'],
    desc: `Performance-driven automation server providing deep website insights and quality metrics in under 180 seconds.`,
    fullDesc: `VibeRdy was built to solve the bottleneck of slow manual testing. By leveraging AWS Lambda for parallel processing and Selenium for browser automation, we created a tool that can run cross-browser suites and return performance analytics in record time. I developed the core automation engine and the data visualization layer that interprets InfluxDB metrics for the end user.`,
    links: [{ label: 'Live Site', url: 'https://viberdy.xyz/' }],
    num: '07'
  },
  {
    name: 'RunwAI',
    role: 'AI Stylist',
    thumb: '/runwai.png',
    tags: ['Python', 'React', 'AI Integration'],
    languages: ['Python', 'PyTorch', 'Next.js', 'Stable Diffusion'],
    desc: `Generative AI platform that serves as a personal stylist, curating outfits based on user-specific aesthetic profiles.`,
    fullDesc: `RunwAI utilizes Stable Diffusion and custom-trained LoRAs to generate realistic fashion previews for users. I implemented the integration between the generative engine and a fluid Next.js frontend, allowing users to "try on" clothes digitally. The project focuses on the future of e-commerce where personalization is driven by generative algorithms.`,
    links: [{ label: 'GitHub', url: 'https://github.com/Laibrez/outfit-ai' }],
    num: '08'
  },
  {
    name: 'Friend Finder',
    role: 'Hackathon 2nd Place',
    thumb: '/friendfinder.png',
    tags: ['Social Impact', 'Community'],
    languages: ['React Native', 'Node.js', 'Express', 'Google Maps API'],
    desc: `A community-building tool designed to combat social isolation through hyper-local event discovery.`,
    fullDesc: `Securing 2nd place at the EmpowHer Hackathon, Friend Finder uses the Google Maps API to show users community events and potential social connections in their immediate vicinity. I focused on the real-time geolocation tracking and the matching algorithm that pairs users based on shared interests and proximity. It is a tool for social good built with a modern mobile stack.`,
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/friendfinder-ev8h0w' }],
    num: '09'
  },
  {
    name: 'MedicBridges',
    role: 'Philanthropy Fellow',
    thumb: '/medicbridge.png',
    tags: ['Healthcare Access'],
    languages: ['React', 'Sanity.io', 'Tailwind CSS', 'GraphQL'],
    desc: `Centralizing healthcare resources by mapping and analyzing low-cost clinical access across the United States.`,
    fullDesc: `MedicBridges is a mission-driven platform designed to close healthcare gaps. Working as a Philanthropy Fellow, I developed a performant digital directory using Sanity.io as a headless CMS and React for the frontend. The system allows clinic administrators to update their data in real-time while providing users with a seamless, accessible interface for finding care. We used GraphQL to efficiently query complex geographic and clinical data.`,
    links: [{ label: 'Live Site', url: 'https://www.medicbridges.com/' }],
    num: '10'
  },
  {
    name: 'GreenBee',
    role: 'Payout Platform',
    thumb: '/greenbee.png',
    tags: ['Compliance', 'API'],
    languages: ['TypeScript', 'Supabase', 'Stripe API', 'Next.js'],
    desc: `Automated compliance and payout infrastructure for creator marketplaces, handling international tax and fund flows.`,
    fullDesc: `GreenBee solves the "unsexy" parts of creator marketplaces: tax forms, identity verification, and cross-border payouts. I built the Stripe Connect integration and the automated W-9 collection workflow using Supabase Edge Functions. The goal was to create a "set-and-forget" infrastructure that allows creative founders to focus on their users while the technical backend handles global compliance.`,
    links: [{ label: 'Live', url: 'https://gcaztiq.vercel.app/' }],
    num: '11'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (proj: typeof projects[0]) => {
    setSelectedProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="bg-[#1a0405] py-40 px-6 md:px-14 relative overflow-hidden">
      
      {/* Editorial Grid Header */}
      <div className="max-w-[1400px] mx-auto flex flex-col items-center mb-32">
         <div className="flex items-center gap-8 mb-8">
            <div className="w-16 h-[1.5px] bg-[#BAFF39]/30" />
            <span className="vogue-label text-[0.8rem] text-[#BAFF39] tracking-[0.6em]">DIGITAL ARCHIVE</span>
            <div className="w-16 h-[1.5px] bg-[#BAFF39]/30" />
         </div>
         <h2 className="font-cinzel text-[clamp(2.5rem,7vw,6.5rem)] font-black text-[#F8F4EE] leading-none text-center uppercase tracking-tighter">
            Full Inventory
         </h2>
         <p className="vogue-label text-[0.65rem] text-[#BAFF39]/40 mt-6 tracking-[0.4em] uppercase">Ref. 2023-2026 // Collected Works</p>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
         {projects.map((proj, idx) => (
           <div 
             key={idx} 
             onClick={() => openModal(proj)}
             className="group cursor-pointer animate-fade-up"
             style={{ animationDelay: `${idx * 100}ms` }}
           >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full mb-10 overflow-hidden bg-[#3A0610] rounded-sm transform transition-all duration-700 group-hover:scale-[0.98] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                 <Image 
                   src={proj.thumb} 
                   alt={proj.name} 
                   fill 
                   className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 group-hover:saturate-[1.2]" 
                 />
                 <div className="absolute inset-0 bg-[#6B0F1A]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute top-6 right-6 font-cinzel text-5xl font-black text-white/10 group-hover:text-[#BAFF39]/20 transition-colors uppercase">{proj.num}</div>
              </div>

              {/* Text Meta */}
              <div className="space-y-4">
                 <div className="flex justify-between items-center border-b border-[#BAFF39]/10 pb-4">
                    <span className="vogue-label text-[0.65rem] text-[#BAFF39] tracking-[0.3em]">{proj.role}</span>
                 </div>
                 <h3 className="font-cinzel text-3xl font-black text-[#F8F4EE] tracking-tighter group-hover:text-[#BAFF39] transition-colors uppercase">{proj.name}</h3>
                 <p className="font-cormorant text-xl text-[#F8F4EE] leading-relaxed italic line-clamp-3 mb-4">
                    {proj.desc}
                 </p>
                 
                 {/* Languages Bar */}
                 <div className="flex flex-wrap gap-2 pt-4">
                    {proj.languages.slice(0, 3).map(lang => (
                      <span key={lang} className="vogue-label text-[0.5rem] px-2 py-1 bg-[#BAFF39]/5 text-[#BAFF39]/60 border border-[#BAFF39]/10 uppercase tracking-widest">{lang}</span>
                    ))}
                    {proj.languages.length > 3 && (
                      <span className="vogue-label text-[0.5rem] px-2 py-1 text-[#BAFF39]/30">+ MORE</span>
                    )}
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* MODAL SYSTEM */}
      {selectedProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
           {/* Overlay */}
           <div 
             onClick={closeModal}
             className="absolute inset-0 bg-[#1a0405]/95 backdrop-blur-xl animate-fade-in" 
           />
           
           {/* Modal Body */}
           <div className="relative w-full max-w-[1200px] h-[85vh] bg-[#FAF6EE] overflow-y-auto shadow-6xl animate-scale-up rounded-sm flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-1/2 h-[40vh] lg:h-full relative overflow-hidden group">
                 <Image 
                   src={selectedProject.thumb} 
                   alt={selectedProject.name} 
                   fill 
                   className="object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:from-transparent lg:to-black/40" />
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col relative bg-white">
                 <button 
                   onClick={closeModal}
                   className="absolute top-10 right-10 vogue-label text-[0.8rem] text-[#6B0F1A] border-b-[1.5px] border-[#BAFF39] hover:border-[#6B0F1A] pb-1 transition-all"
                 >
                   CLOSE ARCHIVE
                 </button>

                 <div className="flex items-center gap-6 mb-10 opacity-40">
                    <span className="vogue-label text-[0.7rem] uppercase tracking-[0.4em]">Inventory ID: {selectedProject.num}</span>
                    <div className="w-8 h-[1px] bg-[#6B0F1A]" />
                    <span className="vogue-label text-[0.7rem] uppercase tracking-[0.4em]">{selectedProject.role}</span>
                 </div>

                 <h2 className="font-cinzel text-[4rem] font-black text-[#1a0405] leading-[0.9] mb-12 tracking-tighter uppercase">
                    {selectedProject.name}
                 </h2>

                 <p className="font-cormorant text-2xl font-bold italic text-[#6B0F1A] leading-relaxed border-l-4 border-[#6B0F1A]/10 pl-10 mb-12">
                    "{selectedProject.desc}"
                 </p>

                 <div className="space-y-10 font-cormorant text-xl text-[#3D2508] leading-relaxed font-bold">
                    <p className="first-letter:float-left first-letter:text-[6.5rem] first-letter:font-black first-letter:font-cinzel first-letter:text-[#6B0F1A] first-letter:leading-[0.8] first-letter:mr-6 first-letter:mt-2 first-letter:drop-shadow-[5px_5px_0_rgba(186,255,57,0.3)]">
                       {selectedProject.fullDesc}
                    </p>
                 </div>

                 {/* Tech Stack Segment */}
                 <div className="mt-16 pt-10 border-t border-[#d4c9b8] space-y-8">
                    <div className="space-y-4">
                       <span className="vogue-label text-[0.6rem] text-[#6B0F1A]/50 uppercase tracking-[0.5em]">Languages Used</span>
                       <div className="flex flex-wrap gap-4">
                          {selectedProject.languages.map(lang => (
                             <span key={lang} className="vogue-label text-[0.65rem] text-[#6B0F1A] bg-[#BAFF39]/10 px-4 py-2 border border-[#BAFF39]/30">{lang}</span>
                          ))}
                       </div>
                    </div>

                    <div className="flex gap-10 pt-6">
                       {selectedProject.links.map(link => (
                          <a 
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            className="vogue-label text-[0.8rem] text-[#1a0405] border-b-[2px] border-[#BAFF39] hover:border-[#6B0F1A] transition-all pb-1 font-black"
                          >
                             {link.label}
                          </a>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

    </section>
  );
}
