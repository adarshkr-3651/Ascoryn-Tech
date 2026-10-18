'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            // SW registered successfully
          })
          .catch(() => {
            // Registration failed or unsupported environment
          });
      });
    }
  }, []);

  return null;
}
