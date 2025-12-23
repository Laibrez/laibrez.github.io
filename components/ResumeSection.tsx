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
                  href="/ResumeEng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-base"
                >
                  View Resume (English)
                </a>
                <a
                  href="/ResumeEng.pdf"
                  download="Laisha_Bravo_Resume_English.pdf"
                  className="btn w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
                  title="Download Resume"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
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
                  className="btn w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
                  title="Download Resume"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
