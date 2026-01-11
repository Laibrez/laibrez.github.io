'use client';

const skills = [
  'Leadership',
  'Planning',
  'Budgeting',
  'Agile/Scrum',
];

export default function AboutSectionNew() {
  return (
    <section id="about" className="section section-alt">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-light text-white mb-20 text-center">
          About Me
        </h2>

        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="card">
            <p className="text-lg text-[#cccccc] leading-relaxed mb-6">
              I&apos;m a passionate software engineer and Computer Science graduate from Florida International University, 
              with a unique background that bridges business leadership and technical innovation. My journey began in 
              the healthcare industry, where I co-founded and managed clinical laboratories in Mexico City, leading teams 
              of 15+ people and driving significant digital growth through strategic web development and marketing.
            </p>
            
            <p className="text-lg text-[#cccccc] leading-relaxed mb-6">
              Today, I specialize in building user-centric applications using modern technologies like React, 
              Next.js, Python, and Flutter. I&apos;m particularly drawn to the intersection of AI, UI/UX design, and 
              full-stack development. Whether it&apos;s developing automation systems, designing intuitive interfaces, 
              or building cross-platform mobile apps, I focus on delivering high-quality solutions that make a 
              tangible difference.
            </p>

            <p className="text-lg text-[#cccccc] leading-relaxed">
              Beyond coding, I&apos;m deeply committed to community building and mentorship. I actively contribute to 
              student organizations like ALPFA FIU and FIU Surf, support open-source projects like Kestra, and enjoy 
              competing in hackathons where I can collaborate with talented peers to solve real-world problems. I believe 
              in the power of technology to create positive change, and I&apos;m always excited to take on new challenges 
              that push the boundaries of what&apos;s possible.
            </p>
          </div>

          {/* Skills Section */}
          <div className="card mt-8">
            <h3 className="text-2xl font-light text-white mb-6 text-center border-b border-[#2a2a2a] pb-4">
              Key Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#5a0000]/20 border border-[#5a0000] text-[#cccccc] hover:bg-[#5a0000]/30 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
