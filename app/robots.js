 const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      // ✅ Allow Facebook scraper
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      // ✅ Allow Twitter scraper
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}