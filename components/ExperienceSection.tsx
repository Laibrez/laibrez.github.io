'use client';

interface Experience {
  id: number;
  title: string;
  organization: string;
  descriptor: string;
  description: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Tech Contributions',
    organization: 'ALPFA FIU',
    descriptor: 'Web Support · Integrations',
    description:
      'Provided technical support for event pages, membership content, and sponsor integrations for the largest ALPFA student chapter in the U.S. (600+ members).',
    link: 'https://alpfafiu.org',
  },
  {
    id: 2,
    title: 'Open Source Contribution',
    organization: 'Kestra',
    descriptor: 'UI/UX · Frontend Logic',
    description:
      'Collaborated on an open-source project, improving UI/UX and assisting with frontend logic and usability enhancements.',
  },
  {
    id: 3,
    title: 'Student Involvement',
    organization: 'FIU Surf',
    descriptor: 'Community · Events',
    description:
      'Active member of the FIU Surf Club, participating in community events and promoting surf culture at Florida International University.',
    link: 'https://fiusurf.com',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {exp.organization}
                  </p>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-0 text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                  >
                    Visit
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                {exp.descriptor}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
