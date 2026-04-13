'use client';

interface Experience {
  id: number;
  position: string;
  company: string;
  dateRange: string;
  location: string;
  description: string[];
  link?: string;
  isSpecialAction?: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    position: 'Software Integration Consultant',
    company: 'EDICOM',
    dateRange: 'Jan 2026 – Present',
    location: 'Mexico',
    description: [
      'Implementation and configuration of EDI solutions for enterprise system integrations and automation',
      'Technical requirements analysis, mapping, and validation to ensure interoperability across business systems',
      'Collaboration with technical teams to optimize processes and ensure compliance with international standards'
    ],
  },
  {
    id: 2,
    position: 'Freelance Web Developer & Creative',
    company: 'SeriouslyHallie Studios',
    dateRange: '2025 – Present',
    location: 'Miami, FL',
    description: [
      'Contributing to web development, branding, and design for high-end creative projects',
      'Building and refining digital experiences for clients like bsidela.com and odd.shstesting.com',
      'Ensuring alignment between technical implementation and sophisticated creative direction'
    ],
    link: '#projects',
    isSpecialAction: true,
  },
  {
    id: 3,
    position: 'Intern',
    company: "Women's Center, FIU",
    dateRange: 'Mar 2025 – Dec 2025',
    location: 'Miami, FL',
    description: [
      'Organized and coordinated campus events to increase student engagement',
      'Proposed initiatives that improved outreach and participation',
    ],
  },
  {
    id: 4,
    position: 'Project Manager',
    company: 'Laboratorio Clínico MexaLab',
    dateRange: '2021 – 2024',
    location: 'Mexico City, MX',
    description: [
      'Co-led the launch of a second clinical laboratory',
      'Built and managed a 15+ member team',
      'Handled architecture and deployment of the mexalab.com digital presence',
    ],
    link: 'https://mexalab.netlify.app/',
  },
  {
    id: 5,
    position: 'Co-Founder',
    company: "Laboratorios D'ALFA",
    dateRange: '2020 – 2021',
    location: 'Mexico City, MX',
    description: [
      'Co-founded a medical laboratory startup focusing on rapid diagnostic testing',
      'Led recruitment, financial planning, and marketing strategies from ground up',
    ],
  },
];

export default function Experience() {
  const triggerBook = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('turnProjectBook', { detail: { pageNum: 1 } });
    window.dispatchEvent(event);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="bg-[#FAF6EE] py-32 px-6 md:px-14 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
           <h2 className="font-cormorant text-5xl md:text-6xl font-light italic text-[#3d2508] mb-4">
             Professional Experience
           </h2>
           <div className="w-20 h-1 bg-[#6B0F1A] mx-auto" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#d4c9b8] hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={exp.id}
                  className={`relative md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                >
                  <div className={`absolute top-4 w-3 h-3 rounded-full bg-[#6B0F1A] border-2 border-[#FAF6EE] hidden md:block ${isLeft ? 'right-[-6px]' : 'left-[-6px]'}`} />

                  <div className="bg-white border border-[#d4c9b8] p-8 md:p-10 shadow-sm">
                    <div className="mb-6">
                      <h3 className="font-cinzel text-xl md:text-2xl font-black text-[#3d2508] mb-2 uppercase tracking-tight">
                        {exp.position}
                      </h3>
                      <h4 className="vogue-label text-[#6B0F1A] text-[0.85rem] tracking-[0.3em] font-black uppercase">
                        {exp.company}
                      </h4>
                      <div className="w-12 h-[2px] bg-[#BAFF39] mt-3" />
                    </div>

                    <div className="vogue-label text-[0.65rem] text-[#9a8e7e] mt-4 mb-10 flex flex-wrap gap-2 uppercase tracking-[0.2em]">
                       <span>{exp.dateRange}</span>
                       <span className="opacity-40 px-1">|</span>
                       <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 font-cormorant text-xl text-[#3D2508] leading-relaxed font-bold">
                          <span className="text-[#BAFF39] mt-1.5 text-xs">◆</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.link && (
                      <div className="mt-6 flex items-center gap-4">
                        <div className="w-8 h-[0.5px] bg-[#5a0000]" />
                        {exp.isSpecialAction ? (
                          <button onClick={triggerBook} className="vogue-label text-[0.7rem] text-[#8B0000] hover:text-white transition-all uppercase tracking-[0.4em]">
                            View Collection Spreads
                          </button>
                        ) : (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="vogue-label text-[0.7rem] text-[#8B0000] hover:text-white transition-all uppercase tracking-[0.4em]">
                            Access Portal
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
