'use client';

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
              I&apos;m a passionate software engineer and Computer Science student at Florida International University, 
              with a unique background that bridges business leadership and technical innovation. My journey began in 
              the healthcare industry, where I co-founded and managed clinical laboratories in Mexico City, leading teams 
              of 15+ people and driving significant digital growth through strategic web development and marketing.
            </p>
            
            <p className="text-lg text-[#cccccc] leading-relaxed mb-6">
              Today, I specialize in building elegant, user-centric applications using modern technologies like React, 
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
        </div>
      </div>
    </section>
  );
}
