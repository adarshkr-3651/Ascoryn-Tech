import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ascoryn Tech | Full Stack, AI & Automations, FinTech & Cloud DevOps',
    short_name: 'Ascoryn Tech',
    description: 'Enterprise Full-Stack software engineering, autonomous AI & automations, FinTech cores, and multi-cloud DevOps architecture.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070D1B',
    theme_color: '#070D1B',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
