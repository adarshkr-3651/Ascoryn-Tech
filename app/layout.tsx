import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ascoryntech.vercel.app'),
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
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Ascoryn Tech | Innovating for Tomorrow',
    description: 'Engineering the next digital horizon for growing enterprises with AI, Cloud & Full-Stack solutions.',
    url: 'https://ascoryntech.vercel.app',
    siteName: 'Ascoryn Tech',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Ascoryn Tech - Innovating for Tomorrow',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascoryn Tech | Enterprise Software & AI Innovation',
    description: 'Innovating for Tomorrow with high-velocity cloud architecture and intelligent AI solutions.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ascoryn Tech',
    url: 'https://ascoryntech.vercel.app',
    logo: 'https://ascoryntech.vercel.app/logo.png',
    slogan: 'Innovating for Tomorrow',
    description: 'Enterprise AI pipelines, multi-cloud architecture, and full-stack software engineering.',
    email: 'ascoryntech@gmail.com',
    telephone: ['+977-9762958887', '+977-9745653468'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sankhamul-31',
      addressLocality: 'Kathmandu',
      postalCode: '44600',
      addressCountry: 'NP',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+977-9762958887',
        contactType: 'customer support',
        areaServed: 'Global',
        availableLanguage: ['English', 'Nepali'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+977-9745653468',
        contactType: 'technical support',
        areaServed: 'Global',
        availableLanguage: ['English', 'Nepali'],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#070D1B] dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

