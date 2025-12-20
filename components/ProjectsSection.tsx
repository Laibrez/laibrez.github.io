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
    name: 'VibeRdy.xyz',
    descriptor: 'React · Python · AWS · Automation',
    description:
      'Team-based hackathon project. Developed frontend and backend, deployed on AWS. Designed an automation server for website testing, delivering performance insights in under 3 minutes.',
    link: 'https://viberdy.xyz/',
    demo: 'https://youtu.be/Y-FfwD_dGnc',
  },
  {
    id: 2,
    name: 'RunwAI',
    descriptor: 'Python · React · UI/UX · AI Integration',
    description:
      'AI Personal Stylist - Web application for personalized outfit recommendations. Contributed to UI/UX design, frontend development, and system integration with the recommendation engine.',
  },
  {
    id: 3,
    name: 'Castiq',
    descriptor: 'Flutter · Dart · iOS · Android',
    description:
      'Professional marketplace platform for models (In Development). Focused on cross-platform mobile development and product architecture.',
  },
  {
    id: 4,
    name: 'Smart Greenhouse',
    descriptor: 'Arduino · Python · IoT',
    description:
      'Developed a system to monitor and control greenhouse temperature using real-time sensor data.',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  Project Image
                </div>
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
