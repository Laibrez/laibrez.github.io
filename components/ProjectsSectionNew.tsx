'use client';

import { useState } from 'react';

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
  const [featuredProject, setFeaturedProject] = useState(projects[0]);

  return (
    <section id="projects" className="section">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-semibold text-white mb-16 text-center">
          Featured Projects
        </h2>

        {/* Featured Project Display */}
        <div className="featured-project mb-16 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--accent-primary)] p-12 transition-all duration-300 hover:border-[var(--accent-highlight)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12">
            {/* Large Preview */}
            <div className="relative">
              <div className="aspect-video bg-black/50 rounded-xl overflow-hidden border border-[#2a2a2a] relative">
                {featuredProject.liveUrl ? (
                  <>
                    <iframe
                      src={featuredProject.liveUrl}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      title={`${featuredProject.name} preview`}
                      loading="lazy"
                      style={{ filter: 'brightness(0.9)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-lg">
                    {featuredProject.demoUrl ? '🎥 Video Demo Available' : 'In Development'}
                  </div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-white mb-4">
                {featuredProject.name}
              </h3>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1.5 rounded-full border border-[var(--accent-primary)] text-[var(--text-secondary)] bg-[var(--bg-tertiary)] hover:border-[var(--accent-highlight)] transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                {featuredProject.description}
              </p>

              {/* Action buttons */}
              {(featuredProject.liveUrl || featuredProject.demoUrl) && (
                <div className="flex flex-wrap gap-3">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-[var(--accent-primary)] text-white rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-highlight)] transition-all duration-300"
                    >
                      View Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {featuredProject.demoUrl && (
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-[var(--accent-primary)] text-[var(--text-secondary)] rounded-lg hover:text-white hover:border-[var(--accent-highlight)] transition-all duration-300"
                    >
                      Watch Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Project Gallery */}
        <div className="relative">
          <h3 className="text-2xl font-semibold text-white mb-6">All Projects</h3>
          <div className="overflow-x-auto overflow-y-hidden pb-6 -mx-4 px-4" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-6 min-w-max">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setFeaturedProject(project)}
                  className={`project-card-mini min-w-[300px] h-[220px] bg-[var(--bg-tertiary)] rounded-xl cursor-pointer transition-all duration-300 border overflow-hidden ${
                    featuredProject.id === project.id 
                      ? 'border-[var(--accent-highlight)]' 
                      : 'border-transparent hover:border-[var(--accent-highlight)]'
                  }`}
                  style={{ 
                    transform: featuredProject.id === project.id ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: featuredProject.id === project.id ? '0 8px 24px rgba(0, 0, 0, 0.3)' : 'none'
                  }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {project.name}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full border border-[var(--accent-primary)] text-[var(--text-tertiary)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-[var(--text-tertiary)]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-3 flex-1">
                      {project.description}
                    </p>
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
