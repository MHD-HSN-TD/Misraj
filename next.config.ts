import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com', // Specify the hostname of the external image source
        pathname: '/products/images/**', // Allow all paths under this directory
      },
    ],
  },
};
// Add any other configuration options here

export default nextConfig; // Correctly export the configuration
