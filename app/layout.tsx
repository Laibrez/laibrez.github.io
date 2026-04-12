import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Montserrat, Great_Vibes } from 'next/font/google';
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Laisha Alexandra Bravo Juárez",
  description: "Computer Science Graduate & Software Engineer. Portfolio 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${montserrat.variable} ${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} font-montserrat bg-[#4A0812] text-[#F8F4EE] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
