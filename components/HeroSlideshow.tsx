'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  descriptor: string;
  image: string;
  type?: 'image' | 'video' | 'website';
  videoId?: string;
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'VibeRdy.xyz',
    descriptor: 'React · Python · AWS · Automation',
    image: '/projects/viberdy.svg',
    type: 'video',
    videoId: 'Y-FfwD_dGnc',
  },
  {
    id: 2,
    name: 'FIU Surf',
    descriptor: 'Community · Events · Web Development',
    image: '/projects/surf-club.svg',
    type: 'website',
    websiteUrl: 'https://fiusurf.com',
  },
  {
    id: 3,
    name: 'ALPFA FIU',
    descriptor: 'Professional Development · Community Platform',
    image: '/projects/portfolio.svg',
    type: 'website',
    websiteUrl: 'https://alpfafiu.org',
  },
  {
    id: 4,
    name: 'RunwAI',
    descriptor: 'Python · React · UI/UX · AI Integration',
    image: '/projects/runwai.svg',
    type: 'website',
    websiteUrl: 'https://outfit-ai-three.vercel.app',
  },
  {
    id: 5,
    name: 'LifeQuest',
    descriptor: 'AI · Product Development',
    image: '/projects/lifequest.svg',
    type: 'video',
    videoId: 'TXWbPKSUEoE',
  },
  {
    id: 6,
    name: 'Friend Finder',
    descriptor: 'Hackathon Project · 2nd Place',
    image: '/projects/friendfinder.svg',
    type: 'video',
    videoId: 'Rmel-JFJUEc',
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isHovering]);

  // Handle scroll for profile photo animation
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const progress = Math.min(window.scrollY / 200, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const handleSlideClick = useCallback(() => {
    // Smooth scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden mt-[50px] mb-[50px]">
      {/* Profile Photo - Top Left */}
      <div
        className="absolute top-8 left-8 z-20 transition-all duration-500 ease-out"
        style={{
          transform: `scale(${1 - scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      >
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-lg transition-all duration-500 hover:scale-110">
            <Image
              src="/Meprofile.jpg"
              alt="Laisha"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>
          {/* Microtext below profile */}
          <div className="mt-2 text-left">
            <p className="text-xs text-white/70 font-light tracking-wide whitespace-nowrap">
              Computer Science · Software Engineer
            </p>
            <p className="text-xs text-white/70 font-light tracking-wide whitespace-nowrap">
              UI/UX · Frontend · App Developer
            </p>
          </div>
        </div>
      </div>

      {/* Slideshow Container */}
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={handleSlideClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images with Transitions */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Content - Video, Website, or Image */}
            <div className="absolute inset-0 bg-black">
              {project.type === 'video' && project.videoId ? (
                // YouTube Video Preview
                <a
                  href={`https://youtu.be/${project.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-preview absolute inset-0 block"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                    alt={`${project.name} demo video`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <span className="play-btn absolute inset-0 flex items-center justify-center text-[4rem] text-white bg-black/25 transition-all duration-300 hover:bg-black/40">
                    ▶
                  </span>
                </a>
              ) : project.type === 'website' && project.websiteUrl ? (
                // Website Preview
                <div className="site-preview absolute inset-0 overflow-hidden">
                  <iframe
                    src={project.websiteUrl}
                    className="w-[120%] h-[120%] border-none scale-85 origin-top-left blur-[1px] pointer-events-none"
                    loading="lazy"
                    title={`${project.name} preview`}
                  />
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-overlay absolute inset-0 flex items-end justify-end p-8 text-white text-sm no-underline bg-gradient-to-t from-black/40 to-transparent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Live Site →
                  </a>
                </div>
              ) : (
                // Regular Image
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
            </div>

            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

            {/* Project Text Overlay */}
            <div className="absolute inset-0 flex items-end justify-center pb-32">
              <div
                className={`text-center transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <h2 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">
                  {project.name}
                </h2>
                <p className="text-lg md:text-xl text-white/80 font-light tracking-wider">
                  {project.descriptor}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Progress Indicator Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'w-12 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
