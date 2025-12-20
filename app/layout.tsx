import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laisha | Portfolio",
  description: "Computer Science · Software Engineer · UI/UX · Frontend · App Developer",
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
