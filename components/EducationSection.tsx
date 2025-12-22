'use client';

interface Education {
  institution: string;
  degree: string;
  timeline: string;
  location: string;
  coursework?: string[];
}

interface Certification {
  name: string;
  issuer: string;
}

const education: Education[] = [
  {
    institution: 'Florida International University (FIU)',
    degree: 'Bachelor of Arts in Computer Science',
    timeline: 'Expected Fall 2025',
    location: 'Miami, FL',
    coursework: [
      'Data Structures',
      'Software Engineering',
      'Computer Architecture',
      'Human-Computer Interaction',
    ],
  },
  {
    institution: 'Instituto Tecnológico de Monterrey',
    degree: '',
    timeline: '',
    location: 'Mexico City, MX',
  },
];

const certifications: Certification[] = [
  {
    name: 'Computational Thinking',
    issuer: 'University of Pennsylvania',
  },
  {
    name: 'Artificial Intelligence',
    issuer: 'IBM',
  },
  {
    name: 'JavaScript',
    issuer: 'Google',
  },
  {
    name: 'INSIDE LVMH Certificate',
    issuer: 'LVMH',
  },
  {
    name: 'Hackathon Winner',
    issuer: 'Various',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-light text-white mb-20 text-center">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Formal Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white mb-8 border-b border-[#2a2a2a] pb-4">
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-light text-white mb-3">
                  {edu.institution}
                </h4>
                
                {edu.degree && (
                  <p className="text-[#cccccc] mb-2">
                    {edu.degree}
                  </p>
                )}
                
                <div className="text-sm text-[#cccccc]/70 mb-4">
                  {edu.timeline && <span>{edu.timeline}</span>}
                  {edu.timeline && edu.location && <span className="mx-2">·</span>}
                  {edu.location && <span>{edu.location}</span>}
                </div>

                {edu.coursework && (
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                    <p className="text-sm text-[#cccccc]/70 mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#cccccc]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white mb-8 border-b border-[#2a2a2a] pb-4">
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card hover:border-[#5a0000] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5a0000]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-light text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-[#cccccc]/70">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
