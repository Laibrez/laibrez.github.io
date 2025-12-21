'use client';

interface Project {
  id: number;
  name: string;
  descriptor: string;
  description: string;
  link?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'FIU Surf Club',
    descriptor: 'Web Development · Community Platform',
    description:
      'Live website for FIU Surf Club, promoting surf culture at Florida International University and organizing community events.',
    link: 'https://fiusurf.com',
  },
  {
    id: 2,
    name: 'ALPFA FIU',
    descriptor: 'Web Development · Community Platform',
    description:
      'Professional platform for ALPFA at Florida International University, the largest ALPFA student chapter in the U.S. (600+ members), fostering leadership and career development.',
    link: 'https://alpfafiu.org',
  },
  {
    id: 3,
    name: 'Runwai',
    descriptor: 'AI · Fashion Technology',
    description:
      'AI-powered outfit recommendation platform that helps users discover and style their perfect looks using advanced machine learning.',
    link: 'https://outfit-ai-three.vercel.app',
  },
  {
    id: 4,
    name: 'Kestra',
    descriptor: 'Open Source · UI/UX Design',
    description:
      'Open source UI/UX project focused on creating intuitive and accessible design systems for modern web applications.',
  },
  {
    id: 5,
    name: 'LifeQuest',
    descriptor: 'AI · Product Development',
    description:
      'AI-powered product with comprehensive feature set. Strong focus on AI integration and product development. View the full demonstration on YouTube.',
    link: 'https://devpost.com/software/lifequest-17u34t',
    demo: 'https://youtu.be/TXWbPKSUEoE',
  },
  {
    id: 6,
    name: 'VibeRdy',
    descriptor: 'React · Python · AWS · Automation',
    description:
      'Team-based hackathon project. Developed frontend and backend, deployed on AWS. Designed an automation server for website testing, delivering performance insights in under 3 minutes.',
    link: 'https://viberdy.xyz/',
    demo: 'https://youtu.be/Y-FfwD_dGnc',
  },
  {
    id: 7,
    name: 'Friend Finder',
    descriptor: 'Hackathon Project · 2nd Place',
    description:
      'Hackathon project that secured 2nd place. Innovative solution for connecting people and building communities.',
    demo: 'https://youtu.be/Rmel-JFJUEc',
  },
  {
    id: 8,
    name: 'Castiq',
    descriptor: 'Flutter · Dart · iOS · Android',
    description:
      'Professional marketplace platform for models (In Development). Focused on cross-platform mobile development and product architecture.',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-8" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(255,255,255,0.98))' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-gray-900 mb-16 text-center fade-in">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative glass-light rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                {project.link ? (
                  <>
                    <iframe
                      src={project.link}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      title={`${project.name} preview`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/50 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                    Project Image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 tracking-wide">
                  {project.descriptor}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {(project.link || project.demo) && (
                  <div className="flex gap-3 pt-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                      >
                        🔗 Visit
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                      >
                        🎥 Demo
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 rounded-lg transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
