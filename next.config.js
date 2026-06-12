 /** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
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
          { key: 'X-Frame-Options',        value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  async redirects() {
    return [
       // ✅ ADD THIS — forces http → https
    {
      source: '/:path*',
      has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
      destination: 'https://www.springfieldmoplumber.com/:path*',
      permanent: true,
    },
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
    // ✅ ADDED: auto-convert to AVIF then WebP (huge size savings)
    formats: ['image/avif', 'image/webp'],
    // ✅ ADDED: cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  compress:        true,
  poweredByHeader: false,
}
module.exports = {
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig