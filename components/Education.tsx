const certs = [
  {
    name: 'Computational Thinking',
    issuer: 'University of Pennsylvania',
  },
  {
    name: 'Artificial Intelligence',
    issuer: 'IBM',
  },
  {
    name: 'JavaScript',
    issuer: 'Google',
  },
  {
    name: 'Google Project Management Professional Certificate',
    issuer: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/verify/T2E52L2NYLJB',
  },
  {
    name: 'Project Management Tracker (Excel)',
    issuer: 'Coursera / Google',
  }
];

export default function Education() {
  return (
    <section id="education" className="bg-[#3A0610] py-28 px-6 md:px-14">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 text-[#BAFF39] text-[0.65rem] font-extralight tracking-[0.4em] uppercase mb-4">
          <div className="w-12 h-[0.5px] bg-[#BAFF39]" />
          Academic Foundation
          <div className="w-12 h-[0.5px] bg-[#BAFF39]" />
        </div>
        <h2 className="font-cormorant text-[clamp(2rem,4vw,3.5rem)] font-light italic text-[#F8F4EE]">
          Education & Certifications
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Education */}
        <div className="space-y-8">
          <h3 className="font-cinzel text-xl font-bold text-[#BAFF39] tracking-widest mb-8 border-b border-[#BAFF39]/20 pb-4">Formal Education</h3>
          
          <div className="bg-[#4A0812] border border-[#BAFF39]/10 p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-cormorant text-4xl text-[#BAFF39]/5 font-bold italic group-hover:text-[#BAFF39]/10 transition-colors">FIU</div>
            <h4 className="font-cormorant text-2xl font-bold text-[#F8F4EE] mb-2">Florida International University</h4>
            <p className="font-montserrat text-[0.7rem] tracking-[0.2em] uppercase text-[#D4C9B8] mb-1">Bachelor of Science in Computer Science</p>
            <p className="font-montserrat text-[0.6rem] font-normal tracking-[0.1em] text-[#BAFF39] mb-4">Dean’s List – Academic Excellence</p>
            <p className="font-cormorant text-sm italic text-[#D4C9B8]/60 mb-8">College of Engineering and Computing · Graduation Dec 2025</p>
            
            <div className="pt-6 border-t border-[#BAFF39]/10">
              <p className="font-montserrat text-[0.55rem] font-light tracking-widest uppercase text-[#BAFF39] mb-4">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Software Engineering', 'Human-Computer Interaction', 'Logic for CS'].map(course => (
                  <span key={course} className="font-montserrat text-[0.5rem] tracking-wider uppercase px-3 py-1 border border-[#BAFF39]/30 text-[#D4C9B8] hover:border-[#BAFF39] transition-all">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#4A0812] border border-[#BAFF39]/10 p-8">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-cormorant text-xl font-bold text-[#F8F4EE]">Tecnológico de Monterrey</h4>
              <span className="font-cormorant text-xs italic text-[#D4C9B8]/60">Graduation May 2020</span>
            </div>
            <p className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#D4C9B8]/70">High School · Mexico City, MX</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h3 className="font-cinzel text-xl font-bold text-[#BAFF39] tracking-widest mb-8 border-b border-[#BAFF39]/20 pb-4">Specialized Certs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {certs.map((cert, idx) => (
              <div key={idx} className="bg-[#4A0812] border border-[#BAFF39]/10 p-6 group transition-all hover:bg-[#5a0000]">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full border border-[#BAFF39]/40 flex items-center justify-center shrink-0 group-hover:bg-[#BAFF39] transition-all group-hover:border-[#BAFF39]">
                    <svg className="w-5 h-5 text-[#BAFF39] group-hover:text-[#4A0812] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-cormorant text-lg font-bold text-[#F8F4EE] leading-tight mb-0.5">
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#BAFF39] transition-colors inline-flex items-center gap-2">
                          {cert.name}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      ) : cert.name}
                    </h4>
                    <p className="font-montserrat text-[0.55rem] tracking-[0.2em] uppercase text-[#D4C9B8]/70">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
