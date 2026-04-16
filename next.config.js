 /** @type {import('next').NextConfig} */
const nextConfig = {

  // ── SECURITY HEADERS ──────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
              "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
              "img-src 'self' data: https://images.unsplash.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
              "frame-src https://www.google.com",
            ].join('; '),
          },
        ],
      },
    ]
  },

  // ── REDIRECTS ─────────────────────────────────────────────────
  async redirects() {
    return [
      // ✅ FIX 1 — Force non-www → www (permanent 301)
      // This makes Google pick ONE canonical version of your site
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'springfieldmoplumber.com' }],
        destination: 'https://www.springfieldmoplumber.com/:path*',
        permanent: true,
      },

      // ✅ FIX 2 — Keep your existing /index redirect
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // ── IMAGES ───────────────────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  compress:       true,
  poweredByHeader: false,
}

module.exports = nextConfig