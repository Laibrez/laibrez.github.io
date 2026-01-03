import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laisha Bravo Juarez | Portfolio",
  description: "Computer Science Graduate & Software Engineer. Building digital experiences with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
