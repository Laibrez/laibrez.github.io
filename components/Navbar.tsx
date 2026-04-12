'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-6 md:px-14 py-6 bg-[#3A0610]/90 backdrop-blur-xl border-b border-[#BAFF39]/15">
      <Link href="/" className="font-montserrat font-extralight text-[0.85rem] tracking-[0.25em] uppercase text-[#E8E2D8] hover:text-[#BAFF39] transition-colors">
        Laisha Bravo Juárez
      </Link>
      <ul className="hidden md:flex gap-10 list-none">
        {[
          { name: 'Projects', href: '/projects' },
          { name: 'Experience', href: '/#experience' },
          { name: 'Education', href: '/#education' },
          { name: 'About', href: '/#about' },
          { name: 'Contact', href: 'mailto:laishabj@gmail.com' },
        ].map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              className="font-montserrat font-extralight text-[0.72rem] tracking-[0.2em] uppercase text-[#D4C9B8] hover:text-[#BAFF39] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#BAFF39] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Mobile Placeholder - can be expanded if needed */}
      <div className="md:hidden">
        <svg className="w-5 h-5 text-[#BAFF39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  );
}
