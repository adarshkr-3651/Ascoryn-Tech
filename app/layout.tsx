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
    default: 'Ascoryn Tech | Full Stack, AI & Automations, FinTech & Cloud DevOps',
    template: '%s | Ascoryn Tech',
  },
  description:
    'Ascoryn Tech is a premier enterprise technology partner delivering high-velocity Full-Stack software engineering, autonomous AI & intelligent automations, institutional FinTech systems, and multi-cloud DevOps architecture.',
  applicationName: 'Ascoryn Tech',
  authors: [{ name: 'Ascoryn Tech Inc.', url: 'https://www.ascoryntech.com' }],
  generator: 'Next.js',
  keywords: [
    'Ascoryn Tech',
    'Innovating for Tomorrow',
    'Full Stack Software Engineering',
    'AI & Automations',
    'Autonomous AI Agents',
    'FinTech Core Solutions',
    'Cloud DevOps Architecture',
    'Next.js 15 Full-Stack',
    'Kubernetes Multi-Cloud DevOps',
    'Enterprise Software Development Nepal',
    'High-Throughput Payment Gateways',
    'SRE Site Reliability Engineering',
    'Custom SaaS Engineering Kathmandu',
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
    title: 'Ascoryn Tech | Full Stack, AI & Automations, FinTech & Cloud DevOps',
    description:
      'Engineering the next digital horizon for growing enterprises with Full-Stack software, autonomous AI & automations, institutional FinTech systems, and multi-cloud DevOps.',
    url: 'https://www.ascoryntech.com',
    siteName: 'Ascoryn Tech',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Ascoryn Tech - Full Stack, AI & Automations, FinTech & Cloud DevOps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascoryn Tech | Full Stack, AI & Automations, FinTech & Cloud DevOps',
    description:
      'Innovating for Tomorrow with high-velocity Full-Stack software, AI automations, FinTech cores, and cloud DevOps resilience.',
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
        description: 'Enterprise Full-Stack software engineering, autonomous AI & automations, institutional FinTech systems, and multi-cloud DevOps architecture.',
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
          'Ascoryn Tech delivers high-velocity Full-Stack software engineering, autonomous AI agent pipelines, multi-cloud DevOps architecture, and institutional FinTech solutions.',
        email: 'info@ascoryntech.com',
        telephone: ['+977-9762958887', '+977-9745653468'],
        priceRange: '$$$',
        knowsAbout: [
          'Full-Stack Software Engineering',
          'AI & Intelligent Automations',
          'FinTech Core Systems & Payment Gateways',
          'Multi-Cloud DevOps & 24/7 SRE Monitoring',
          'Next.js 15 & React 19 Architecture',
          'Kubernetes & Serverless Microservices',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Ascoryn Tech Enterprise Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Full-Stack Enterprise Software',
                description: 'Custom Next.js web applications, cross-platform mobile apps, and scalable API gateways.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI & Intelligent Automations',
                description: 'Autonomous AI agents, LLM fine-tuning, RAG pipelines, and automated document cognition.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'FinTech Core & Asset Management',
                description: 'Real-time portfolio tracking, double-entry automated ledgers, and sub-second fraud detection.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Multi-Cloud DevOps & SRE',
                description: 'Resilient AWS/GCP Kubernetes architecture, Terraform IaC, and 24/7 SRE reliability engineering.',
              },
            },
          ],
        },
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
