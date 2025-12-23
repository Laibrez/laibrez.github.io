'use client';

export default function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-light text-white mb-20 text-center">
          Resume
        </h2>

        <div className="max-w-[800px] mx-auto">
          <div className="card text-center">
            <p className="text-lg text-[#cccccc] leading-relaxed mb-8">
              View or download my resume in your preferred language
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* English Resume */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href="/FAANGPath_Simple_Template__Copy_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-base"
                >
                  View Resume (English)
                </a>
                <a
                  href="/FAANGPath_Simple_Template__Copy_.pdf"
                  download="Laisha_Bravo_Resume_English.pdf"
                  className="btn w-full sm:w-auto px-8 py-3.5 text-base text-sm"
                >
                  Download
                </a>
              </div>

              {/* Spanish Resume */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href="/resumeSpanish.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-base"
                >
                  View Resume (Spanish)
                </a>
                <a
                  href="/resumeSpanish.pdf"
                  download="Laisha_Bravo_Resume_Spanish.pdf"
                  className="btn w-full sm:w-auto px-8 py-3.5 text-base text-sm"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
