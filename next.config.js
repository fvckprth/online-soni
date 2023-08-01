/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible'); 

const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      formats: ['image/avif','image/webp'],
      domains: ['cdn.sanity.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/*',
        },
      ],
    },
  };

  async function rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://plausible.io/js/script.js'
      },
      {
        source: '/api/event',
        destination: 'https://plausible.io/api/event'
      },
      // You can also add more rewrites for other Plausible extensions as mentioned in the instructions
    ];
  };
  
module.exports = nextConfig;
  

