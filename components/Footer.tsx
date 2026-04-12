'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0405] py-32 px-6 md:px-14 border-t border-[#BAFF39]/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#BAFF39]/30" />
      <div className="hero-texture absolute inset-0 opacity-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-end relative z-10">

        {/* Masthead Credits */}
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-16 hairline-h bg-[#BAFF39]/40" />
            <span className="vogue-label text-[0.85rem] text-[#BAFF39]">MASTERHEAD & CONTACT</span>
          </div>

          <h2 className="font-great-vibes text-[clamp(4.5rem,7vw,6.5rem)] text-[#BAFF39] leading-none mb-8 drop-shadow-[0_0_40px_rgba(186,255,57,0.25)]">
            Laisha Alexandra
          </h2>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="vogue-label text-[0.6rem] text-[#D4C9B8]/40 block tracking-[0.4em]">CONNECTIVITY</span>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/laibrez" target="_blank" className="vogue-label text-[0.75rem] text-[#F8F4EE] hover:text-[#BAFF39] transition-all">GITHUB // @LAIBREZ</a>
                <a href="https://linkedin.com/in/laibrez" target="_blank" className="vogue-label text-[0.75rem] text-[#F8F4EE] hover:text-[#BAFF39] transition-all">LINKEDIN // PROFILE</a>
                <a href="mailto:laishabj@gmail.com" className="vogue-label text-[0.75rem] text-[#F8F4EE] hover:text-[#BAFF39] transition-all uppercase">EMAIL // DIRECT</a>
              </div>
            </div>
            <div className="space-y-4">
              <span className="vogue-label text-[0.6rem] text-[#D4C9B8]/40 block tracking-[0.4em]">GEOGRAPHY</span>
              <p className="vogue-label text-[0.75rem] text-[#F8F4EE]">MIAMI, FLORIDA <br /> MEXICO CITY, MX</p>
            </div>
          </div>
        </div>

        {/* Closing Statements */}
        <div className="flex flex-col lg:items-end gap-16">
          <div className="space-y-6 text-center lg:text-right">
            <span className="vogue-label text-[0.6rem] text-[#BAFF39] border border-[#BAFF39]/30 px-4 py-1.5 uppercase">Authorized Digital Edition</span>
            <div className="font-cinzel text-[clamp(2.5rem,5vw,6rem)] font-black text-[#F8F4EE]/5 tracking-[0.2em] leading-[0.85] select-none">
              ARCHIVE <br /> 2026
            </div>
          </div>

          <div className="text-center lg:text-right space-y-4 border-t border-[#BAFF39]/10 pt-10 w-full lg:w-auto">
            <p className="vogue-label text-[0.55rem] text-[#D4C9B8]/30 tracking-[0.5em] leading-relaxed uppercase">
              © {currentYear} LAISHA ALEXANDRA BRAVO JUÁREZ. <br />
              DEVELOPED AT THE INTERSECTION OF CREATIVITY & LOGIC.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 flex justify-center">
        <div className="w-[0.5px] h-32 bg-gradient-to-b from-[#BAFF39]/40 to-transparent" />
      </div>
    </footer>
  );
}
