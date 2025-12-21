'use client';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-8" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(255,255,255,0.98))' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-light text-gray-900 mb-16 text-center fade-in">
          About Me
        </h2>

        <div className="space-y-8">
          <div className="text-center glass-light rounded-lg p-8 fade-in">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Computer Science · Software Engineer
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              UI/UX · Frontend · App Developer
            </p>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600 glass-light rounded-lg p-8 fade-in">
            <p className="leading-relaxed">
              I&apos;m a passionate software engineer with expertise in building modern web 
              and mobile applications. My experience spans across full-stack development, 
              UI/UX design, and contributing to open-source projects.
            </p>
            
            <p className="leading-relaxed">
              I specialize in creating user-centric applications using technologies like 
              React, Next.js, Python, and Flutter. Whether it&apos;s developing automation 
              systems, designing intuitive interfaces, or building cross-platform mobile 
              apps, I focus on delivering high-quality solutions that make a difference.
            </p>

            <p className="leading-relaxed">
              When I&apos;m not coding, I enjoy contributing to the tech community through 
              open-source contributions and supporting student organizations with 
              technical initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
