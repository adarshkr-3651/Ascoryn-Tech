import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: '/new-logo.png',
        destination: '/logo.png',
      },
    ];
  },
};

export default nextConfig;


