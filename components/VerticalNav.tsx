'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About Me' },
];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-8 top-8 z-50">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3 transition-all duration-300"
            aria-label={`Navigate to ${item.label}`}
          >
            {/* Dot indicator */}
            <div
              className={`transition-all duration-300 rounded-full ${
                activeSection === item.id
                  ? 'w-3 h-3 bg-gray-900'
                  : 'w-2 h-2 bg-gray-300 group-hover:bg-gray-500 group-hover:w-2.5 group-hover:h-2.5'
              }`}
            />

            {/* Label - appears on hover */}
            <span
              className={`text-sm font-light tracking-wide transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
                activeSection === item.id
                  ? 'text-gray-900'
                  : 'text-gray-400'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
