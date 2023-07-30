/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      formats: ['image/avif','image/webp'],
      domains: ['cdn.sanity.io'],  // Add this line
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/*',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  