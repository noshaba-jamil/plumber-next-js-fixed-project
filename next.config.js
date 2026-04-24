 /** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
      // ✅ Allow OG images to be fetched by anyone
      {
        source: '/:path*.jpg',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        source: '/:path*.png',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',       value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin' },
          // ✅ REMOVED strict CSP — was blocking Facebook, Twitter, Google bots
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'springfieldmoplumber.com' }],
        destination: 'https://www.springfieldmoplumber.com/:path*',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  compress:        true,
  poweredByHeader: false,
}

module.exports = nextConfig