import type { Metadata, Viewport } from 'next';
import './globals.css';
import ServiceWorkerRegister from '@/components/service-worker-register';
import { FAQS } from '@/lib/data';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#070D1B' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ascoryntech.com'),
  title: {
    default: 'Ascoryn Tech | Enterprise AI, Cloud & Full-Stack Engineering',
    template: '%s | Ascoryn Tech',
  },
  description:
    'Ascoryn Tech is a premier technology partner delivering high-velocity enterprise software development, autonomous AI agent pipelines, multi-cloud DevOps architecture, and advanced FinTech solutions.',
  applicationName: 'Ascoryn Tech',
  authors: [{ name: 'Ascoryn Tech Inc.', url: 'https://www.ascoryntech.com' }],
  generator: 'Next.js',
  keywords: [
    'Ascoryn Tech',
    'Innovating for Tomorrow',
    'Enterprise Software Development Nepal',
    'AI & LLM Automation Agency',
    'Multi-Cloud DevOps Architecture',
    'Next.js Full-Stack Engineering',
    'FinTech Core Solutions',
    'Custom SaaS Engineering',
    'Software Company Kathmandu',
    'Autonomous AI Agents',
    'IT Consulting Nepal',
  ],
  creator: 'Ascoryn Tech Inc.',
  publisher: 'Ascoryn Tech Inc.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.ascoryntech.com',
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Ascoryn Tech | Enterprise AI, Cloud & Full-Stack Engineering',
    description:
      'Engineering the next digital horizon for growing enterprises with high-velocity software, AI pipelines, and bank-grade security.',
    url: 'https://www.ascoryntech.com',
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
    description:
      'Innovating for Tomorrow with high-velocity cloud architecture and intelligent AI solutions.',
    images: ['/logo.png'],
    creator: '@ascoryntech',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.ascoryntech.com/#website',
        url: 'https://www.ascoryntech.com',
        name: 'Ascoryn Tech',
        description: 'Enterprise AI pipelines, multi-cloud architecture, and full-stack software engineering.',
        publisher: {
          '@id': 'https://www.ascoryntech.com/#organization',
        },
      },
      {
        '@type': ['Organization', 'ProfessionalService', 'ITService'],
        '@id': 'https://www.ascoryntech.com/#organization',
        name: 'Ascoryn Tech Inc.',
        alternateName: 'Ascoryn Tech',
        url: 'https://www.ascoryntech.com',
        logo: 'https://www.ascoryntech.com/logo.png',
        image: 'https://www.ascoryntech.com/logo.png',
        slogan: 'Innovating for Tomorrow',
        description:
          'Ascoryn Tech delivers high-velocity enterprise software development, autonomous AI agent pipelines, multi-cloud architecture, and advanced FinTech solutions.',
        email: 'info@ascoryntech.com',
        telephone: ['+977-9762958887', '+977-9745653468'],
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sankhamul-31',
          addressLocality: 'Kathmandu',
          postalCode: '44600',
          addressRegion: 'Bagmati Province',
          addressCountry: 'NP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 27.6855,
          longitude: 85.334,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        sameAs: [
          'https://www.ascoryntech.com',
          'https://wa.me/9779762958887',
        ],
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
            contactType: 'technical consulting',
            areaServed: 'Global',
            availableLanguage: ['English', 'Nepali'],
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.ascoryntech.com/#faq',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#070D1B] dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
