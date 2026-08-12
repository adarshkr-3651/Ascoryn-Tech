import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ascoryn Tech | Innovating for Tomorrow - Enterprise AI & Cloud Engineering',
  description: 'Ascoryn Tech delivers high-velocity enterprise software development, autonomous AI agent pipelines, multi-cloud architecture, and zero-trust cybersecurity.',
  keywords: [
    'Ascoryn Tech',
    'Innovating for Tomorrow',
    'Enterprise Software Development',
    'AI & LLM Automation',
    'Cloud DevOps',
    'Next.js Enterprise Solutions',
    'Zero-Trust Cybersecurity',
  ],
  authors: [{ name: 'Ascoryn Tech Inc.' }],
  openGraph: {
    title: 'Ascoryn Tech | Innovating for Tomorrow',
    description: 'Engineering the next digital horizon for growing enterprises with AI, Cloud & Full-Stack solutions.',
    url: 'https://ascoryntech.com',
    siteName: 'Ascoryn Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascoryn Tech | Enterprise Software & AI Innovation',
    description: 'Innovating for Tomorrow with high-velocity cloud architecture and intelligent AI solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 dark:bg-[#070D1B] dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
