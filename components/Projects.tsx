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
    desc: `Design, creation, and building of high-performance creative testing infrastructures integrated for SeriouslyHallie studios to optimize marketing funnels.`,
    caseStudy: {
      problem: `Marketing funnels at SeriouslyHallie studios lacked a high-velocity environment for testing ad-variants and landing pages efficiently.`,
      role: `Lead Developer, architecting micro-services for rapid deployment of creative testing environments.`,
      solution: `Built a full-stack testing infrastructure using Docker for consistent deployments and Node.js for a robust tracking API, aggregating behavior data into a PostgreSQL analytics engine.`,
      impact: `Enabled the deployment and tracking of new creative variants in minutes, significantly accelerating marketing iteration cycles.`
    },
    links: [{ label: 'Live Site', url: 'https://odd.shstesting.com' }],
    num: '01'
  },
  {
    name: 'Bdside La',
    role: 'SeriouslyHallie Studios',
    thumb: '/bsidela.png',
    tags: ['Next.js', 'Creative Direction'],
    languages: ['Next.js', 'Framer Motion', 'GSAP', 'Three.js'],
    desc: `Design and building of a digital showroom for high-fidelity typography and fluid interaction, created with Hallie.`,
    caseStudy: {
      problem: `Needed a digital showroom that matched the precision and fluid aesthetics of the high-fashion industry without compromising browser performance.`,
      role: `Creative Technologist & Frontend Developer, pushing the boundaries of web animation and layout fluidity.`,
      solution: `Architected a "liquid" layout using GSAP and Framer Motion, merging technical execution with high-level design to create an immersive, visual-first experience.`,
      impact: `Delivered a production-ready, high-fidelity showroom that serves as a benchmark for creative interaction in the studio's portfolio.`
    },
    links: [{ label: 'Live Site', url: 'https://bsidela.com' }],
    num: '02'
  },
  {
    name: 'FIU SURF',
    role: 'Director of Technology',
    thumb: '/fiusurfss.png',
    tags: ['React', 'Tailwind', 'E-commerce'],
    languages: ['TypeScript', 'Next.js', 'PostgreSQL', 'Framer Motion'],
    desc: `Led the digital transformation of FIU Surf Club, building a high-performance e-commerce and community platform.`,
    caseStudy: {
      problem: `The FIU Surf Club lacked a centralized digital home for its growing community to manage events, memberships, and merchandise.`,
      role: `Director of Technology, leading the development and deployment of the entire digital platform.`,
      solution: `Architected a modern, responsive UI with React and Tailwind CSS. Integrated secure e-commerce gateways, automated event notifications, and a robust PostgreSQL backend for member management.`,
      impact: `Scaled the platform to support 1,000+ concurrent users, seamlessly bridging surf culture with production-grade software engineering.`
    },
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
    caseStudy: {
      problem: `The largest ALPFA student chapter in the U.S. required a scalable platform to manage high traffic, events, and complex member interactions.`,
      role: `Lead Web Developer, focusing on platform optimization, custom plugin integration, and member engagement tracking.`,
      solution: `Optimized a WordPress-based community architecture, integrating custom systems for restricted content, membership databases, and sponsor showcases.`,
      impact: `Successfully supported a growing base of 600+ active members while maintaining national brand alignment and high accessibility standards.`
    },
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
    caseStudy: {
      problem: `Traditional productivity tools lack the engagement necessary for long-term behavioral transformation.`,
      role: `AI Logic Lead & Backend Developer, responsible for real-time task orchestration and LLM integration.`,
      solution: `Developed an RPG-style gamified life coach using OpenAI's GPT-4o to analyze goals and generate dynamic missions, supported by a highly scalable FastAPI backend.`,
      impact: `Successfully delivered a real-time reactive prototype under intense hackathon pressure, proving the viability of AI in interactive productivity.`
    },
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
    caseStudy: {
      problem: `The talent discovery process in the high-end modeling and creative sectors is fragmented and lacks a unified digital marketplace.`,
      role: `Co-Founder & Lead Architect, driving both business strategy and full-stack technical execution.`,
      solution: `Built a mobile-first marketplace using Flutter for cross-platform consistency, Firebase for real-time messaging, and GCP for secure asset management.`,
      impact: `Established a high-fidelity foundation for a premium industry tool, successfully managing team integration and strategic partnerships.`
    },
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
    caseStudy: {
      problem: `Manual website performance testing is a severe bottleneck, slowing down deployment pipelines.`,
      role: `Backend Automation Engineer, developing the core testing engine and metric pipelines.`,
      solution: `Created a parallel processing tool using AWS Lambda and Selenium to run cross-browser suites instantly, storing and interpreting metrics via InfluxDB.`,
      impact: `Achieved the ability to deliver deep, actionable website insights and quality metrics in under 3 minutes.`
    },
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
    caseStudy: {
      problem: `E-commerce fashion lacks hyper-personalized, visual "try-on" experiences tailored to individual aesthetic profiles.`,
      role: `Project Lead & Full Stack Developer, coordinating a team of 12+ members over a 3-month development cycle.`,
      solution: `Integrated Stable Diffusion and custom-trained LoRAs with a Next.js frontend to generate realistic, personalized fashion previews.`,
      impact: `Successfully delivered an AI-driven personal stylist MVP, demonstrating the future of generative personalization in e-commerce.`
    },
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
    caseStudy: {
      problem: `International and commuter students frequently experience severe social isolation and struggle to find relevant local communities.`,
      role: `Mobile Developer & Product Strategist, conducting user problem analysis based on interviews.`,
      solution: `Built a mobile app utilizing the Google Maps API for real-time geolocation tracking and a custom matching algorithm for pairing users by proximity and interest.`,
      impact: `Secured 2nd Place at the EmpowHer Hackathon for addressing a critical social gap with a scalable mobile solution.`
    },
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
    caseStudy: {
      problem: `Unequal access to affordable healthcare services for vulnerable and low-income populations in the U.S.`,
      role: `Product Lead & Philanthropy Fellow (Representing FIU), managing user research, MVP definition, and stakeholder coordination.`,
      solution: `Developed a performant digital directory using Sanity.io (headless CMS), React, and GraphQL to centralize free and low-cost clinic data, allowing real-time administrative updates.`,
      impact: `Won a $25,000 grant from the Ford Philanthropy Fellowship (Social Innovation Award Winners), mapping critical healthcare access for low-income demographics.`
    },
    links: [{ label: 'Live Site', url: 'https://www.medicbridges.com/' }],
    num: '10'
  },
  {
    name: 'Rollio Payments',
    role: 'Creators Payout',
    thumb: '/greenbee.png',
    tags: ['Fintech', 'Compliance'],
    languages: ['TypeScript', 'Supabase', 'Stripe API', 'Next.js'],
    desc: `Automated compliance and payout infrastructure for creator marketplaces, handling international tax and fund flows.`,
    caseStudy: {
      problem: `Content creators and marketplaces face immense friction, delays, and complexity when managing cross-border payouts and regulatory compliance.`,
      role: `Product Manager & Lead Developer, designing payment flows, API integrations, and low-friction onboarding strategies.`,
      solution: `Architected a claim-based payout flow using Stripe Connect and Supabase Edge Functions. Built automated W-9 collection workflows and social performance tracking APIs.`,
      impact: `Reduced failed transactions and optimized compliance efficiency, creating a seamless "set-and-forget" infrastructure for creative founders.`
    },
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

                 {selectedProject.caseStudy ? (
                   <div className="space-y-12 text-[#3D2508]">
                     {/* The Problem */}
                     <div>
                       <h4 className="vogue-label text-[0.8rem] text-[#6B0F1A] tracking-[0.3em] uppercase mb-4 border-b border-[#d4c9b8] pb-2">The Problem / Challenge</h4>
                       <p className="font-cormorant text-xl leading-relaxed font-bold">
                         <span className="float-left text-[4.5rem] font-black font-cinzel text-[#6B0F1A] leading-[0.8] mr-4 mt-1 drop-shadow-[3px_3px_0_rgba(186,255,57,0.3)]">
                           {selectedProject.caseStudy.problem.charAt(0)}
                         </span>
                         {selectedProject.caseStudy.problem.slice(1)}
                       </p>
                     </div>

                     {/* My Role */}
                     <div>
                       <h4 className="vogue-label text-[0.8rem] text-[#6B0F1A] tracking-[0.3em] uppercase mb-4 border-b border-[#d4c9b8] pb-2">Role & Contribution</h4>
                       <p className="font-cormorant text-xl leading-relaxed font-bold">{selectedProject.caseStudy.role}</p>
                     </div>

                     {/* The Solution */}
                     <div>
                       <h4 className="vogue-label text-[0.8rem] text-[#6B0F1A] tracking-[0.3em] uppercase mb-4 border-b border-[#d4c9b8] pb-2">The Solution</h4>
                       <p className="font-cormorant text-xl leading-relaxed font-bold">{selectedProject.caseStudy.solution}</p>
                     </div>

                     {/* Impact & Results */}
                     <div>
                       <h4 className="vogue-label text-[0.8rem] text-[#6B0F1A] tracking-[0.3em] uppercase mb-4 border-b border-[#d4c9b8] pb-2">Impact & Results</h4>
                       <div className="bg-[#BAFF39]/10 border-l-[3px] border-[#BAFF39] p-6 shadow-sm">
                         <p className="font-cormorant text-xl font-bold leading-relaxed">{selectedProject.caseStudy.impact}</p>
                       </div>
                     </div>
                   </div>
                 ) : (
                   <div className="space-y-10 font-cormorant text-xl text-[#3D2508] leading-relaxed font-bold">
                      <p className="first-letter:float-left first-letter:text-[6.5rem] first-letter:font-black first-letter:font-cinzel first-letter:text-[#6B0F1A] first-letter:leading-[0.8] first-letter:mr-6 first-letter:mt-2 first-letter:drop-shadow-[5px_5px_0_rgba(186,255,57,0.3)]">
                         {selectedProject.desc}
                      </p>
                   </div>
                 )}

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
