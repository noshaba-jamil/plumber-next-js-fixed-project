 /** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      // Allow image access
      {
        source: '/:path*.jpg',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },

      // Security Headers
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
  key: 'Content-Security-Policy',
  value:
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: *.googletagmanager.com *.google-analytics.com; " +
    "style-src 'self' 'unsafe-inline' https: *.googleapis.com; " +
    "img-src 'self' data: blob: https: *.google-analytics.com *.gstatic.com; " +
    "font-src 'self' data: https: *.gstatic.com *.googleapis.com; " +
    "connect-src 'self' https: *.google-analytics.com *.googletagmanager.com; " +
    "frame-src 'self' https: *.google.com *.googleapis.com; " +
    "frame-ancestors 'self';"
},
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Force HTTP → HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.springfieldmoplumber.com/:path*',
        permanent: true,
      },

      // Force non-www → www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'springfieldmoplumber.com',
          },
        ],
        destination: 'https://www.springfieldmoplumber.com/:path*',
        permanent: true,
      },

      // Redirect /index → /
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 60,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],

    // REMOVE THIS if you want Next.js image optimization
    // unoptimized: true,
  },

  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;