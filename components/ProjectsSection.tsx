'use client';

interface Project {
  id: number;
  name: string;
  descriptor: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'FIU Surf Club',
    descriptor: 'React · Tailwind · UI/UX',
    description:
      'A modern web application for the FIU Surf Club, featuring event management, member profiles, and beach condition updates.',
  },
  {
    id: 2,
    name: 'Portfolio Redesign',
    descriptor: 'Next.js · TypeScript · Animation',
    description:
      'A sleek and interactive portfolio website showcasing projects with smooth animations and modern design principles.',
  },
  {
    id: 3,
    name: 'Task Manager App',
    descriptor: 'React Native · Firebase · Mobile',
    description:
      'Cross-platform mobile application for task management with real-time synchronization and collaborative features.',
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
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 rounded-lg transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
