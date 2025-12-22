'use client';

interface Project {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  liveUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'VibeRdy.xyz',
    technologies: ['React', 'Python', 'AWS', 'Automation'],
    description: 'Team-based hackathon project. Developed frontend and backend, deployed on AWS. Designed an automation server for website testing, delivering performance insights in under 3 minutes.',
    liveUrl: 'https://viberdy.xyz/',
    demoUrl: 'https://youtu.be/Y-FfwD_dGnc',
  },
  {
    id: 2,
    name: 'FIU Surf',
    technologies: ['Community', 'Events', 'Web Development'],
    description: 'Live website for FIU Surf Club, promoting surf culture at Florida International University and organizing community events.',
    liveUrl: 'https://fiusurf.com',
  },
  {
    id: 3,
    name: 'ALPFA FIU',
    technologies: ['Professional Development', 'Community Platform'],
    description: 'Professional platform for ALPFA at Florida International University, the largest ALPFA student chapter in the U.S. (600+ members), fostering leadership and career development.',
    liveUrl: 'https://alpfafiu.org',
  },
  {
    id: 4,
    name: 'RunwAI',
    technologies: ['Python', 'React', 'UI/UX', 'AI Integration'],
    description: 'AI-powered outfit recommendation platform that helps users discover and style their perfect looks using advanced machine learning.',
    liveUrl: 'https://outfit-ai-three.vercel.app',
  },
  {
    id: 5,
    name: 'LifeQuest',
    technologies: ['AI', 'Product Development'],
    description: 'AI-powered product with comprehensive feature set. Strong focus on AI integration and product development. View the full demonstration on YouTube.',
    liveUrl: 'https://devpost.com/software/lifequest-17u34t',
    demoUrl: 'https://youtu.be/TXWbPKSUEoE',
  },
  {
    id: 6,
    name: 'Friend Finder',
    technologies: ['Hackathon Project', '2nd Place'],
    description: 'Hackathon project that secured 2nd place. Innovative solution for connecting people and building communities.',
    demoUrl: 'https://youtu.be/Rmel-JFJUEc',
  },
  {
    id: 7,
    name: 'Castiq',
    technologies: ['Flutter', 'Dart', 'iOS', 'Android'],
    description: 'Professional marketplace platform for models (In Development). Focused on cross-platform mobile development and product architecture.',
  },
  {
    id: 8,
    name: 'Kestra',
    technologies: ['Open Source', 'UI/UX Design'],
    description: 'Open source UI/UX project focused on creating intuitive and accessible design systems for modern web applications.',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-light text-white mb-20 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group"
            >
              {/* Project thumbnail/preview area */}
              <div className="aspect-video bg-black/50 rounded-lg mb-4 overflow-hidden relative border border-[#2a2a2a]">
                {project.liveUrl ? (
                  <>
                    <iframe
                      src={project.liveUrl}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      title={`${project.name} preview`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                    {project.demoUrl ? '🎥 Video Demo Available' : 'In Development'}
                  </div>
                )}
              </div>

              {/* Project info */}
              <h3 className="text-3xl font-light text-white mb-4">
                {project.name}
              </h3>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full border border-[#5a0000] text-[#cccccc] hover:bg-[#5a0000]/10 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#cccccc] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Action buttons */}
              {(project.liveUrl || project.demoUrl) && (
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[#5a0000] text-white rounded hover:bg-[#5a0000] transition-all duration-300"
                    >
                      View Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[#5a0000] text-white rounded hover:bg-[#5a0000] transition-all duration-300"
                    >
                      Demo Video
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
