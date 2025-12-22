'use client';

interface Experience {
  id: number;
  position: string;
  company: string;
  dateRange: string;
  location: string;
  description: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
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
    id: 2,
    position: 'Project Manager',
    company: 'Laboratorio Clínico MexaLab',
    dateRange: '2021 – 2024',
    location: 'Mexico City, MX',
    description: [
      'Co-led the launch of a second clinical laboratory',
      'Built and managed a 15+ member team',
      'Handled permits, HR, and legal processes',
      'Developed mexalab.com using HTML, CSS, and JavaScript',
      'Led SEO and digital marketing strategy:',
      '• +177.8% website clicks',
      '• +52.3% social profile interactions',
      '• +22.7% increase in final sales',
    ],
    link: 'https://mexalab.com',
  },
  {
    id: 3,
    position: 'Co-Founder',
    company: "Laboratorios D'ALFA",
    dateRange: 'Oct 2020 – Jul 2021',
    location: 'Mexico City, MX',
    description: [
      'Co-founded a medical laboratory from scratch',
      'Led recruitment, finances, marketing, and legal compliance',
    ],
  },
  {
    id: 4,
    position: 'Tech Contributions',
    company: 'ALPFA FIU',
    dateRange: 'Web Support · Integrations',
    location: '',
    description: [
      'Provided technical support for event pages, membership content, and sponsor integrations',
    ],
    link: 'https://alpfafiu.org',
  },
  {
    id: 5,
    position: 'Open Source Contribution',
    company: 'Kestra',
    dateRange: 'UI/UX · Frontend Logic',
    location: '',
    description: [
      'Collaborated on improving UI/UX and frontend logic',
    ],
  },
];

export default function ExperienceSectionNew() {
  return (
    <section id="experience" className="section section-alt">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-light text-white mb-20 text-center">
          Professional Experience
        </h2>

        {/* Timeline layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5a0000] via-[#8B0000] to-[#5a0000]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 md:pl-20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#5a0000] border-4 border-black" />

                {/* Experience card */}
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-[#8B0000] mb-2">
                        {exp.company}
                      </h4>
                      <div className="text-sm text-[#cccccc]/70 flex flex-wrap gap-3">
                        {exp.dateRange && <span>{exp.dateRange}</span>}
                        {exp.location && (
                          <>
                            <span>·</span>
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-[#8B0000] hover:text-white transition-colors duration-300"
                      >
                        Visit
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-2 text-[#cccccc]">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#5a0000] mt-1.5 text-xs">▸</span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
