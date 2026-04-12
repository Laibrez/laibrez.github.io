const skills = [
  'JavaScript (ES6+)', 'React', 'Next.js', 'Flutter', 'Python', 'HTML/CSS', 
  'Tailwind CSS', 'AWS (Deployment, S3, Amplify)', 'SQL', 'Git', 
  'Software Testing', 'UI/UX Design'
];

export default function AboutContact() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="section bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-light text-center mb-16 text-white">About Me</h2>
          <div className="space-y-6 text-lg text-[#cccccc] leading-relaxed text-center sm:text-left">
            <p>
              I am a Computer Science graduate passionate about building digital experiences that are both functional and aesthetically pleasing. 
              My journey has led me from co-founding medical laboratories to developing AI-powered outfit recommendation systems and automation tools.
            </p>
            <p>
              I believe in the power of thoughtful design and robust engineering to solve real-world problems. Whether it's crafting a mobile marketplace 
              or optimizing a testing server, I bring a commitment to quality and a love for continuous learning.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-light text-white text-center mb-10 border-b border-[#2a2a2a] pb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map(skill => (
                <span key={skill} className="px-5 py-2 rounded-full bg-[#5a0000]/10 border border-[#5a0000] text-[#cccccc] text-xs hover:bg-[#5a0000]/30 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-12 text-white">Get In Touch</h2>
          <p className="text-xl text-[#cccccc] mb-16 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {[
              { name: 'LinkedIn', url: 'https://linkedin.com/in/laisha-bravo-juarez', icon: 'linkedin' },
              { name: 'GitHub', url: 'https://github.com/laibrez', icon: 'github' },
              { name: 'Devpost', url: 'https://devpost.com/laishabraja', icon: 'code' },
              { name: 'Email', url: 'mailto:laishabraja@gmail.com', icon: 'mail' }
            ].map(social => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 border border-[#5a0000] text-white rounded hover:bg-[#5a0000] transition-all"
              >
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-12 border-t border-[#2a2a2a]">
            <p className="text-sm text-[#cccccc]/40 font-light">
              © {new Date().getFullYear()} Laisha Alexandra Bravo Juárez. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
