 // app/sitemap.js

const SITE_URL = 'https://www.springfieldmoplumber.com'  // ✅ NO trailing slash

const BLOG_SLUGS = [
  { slug: 'how-much-does-a-plumber-cost-springfield-mo',      date: '2024-11-01' },
  { slug: 'best-plumber-near-me-springfield-mo',              date: '2024-10-15' },
  { slug: 'plumber-open-24-hours-springfield-missouri',       date: '2024-10-01' },
  { slug: 'how-to-fix-burst-pipe-springfield-mo',             date: '2024-09-15' },
  { slug: 'emergency-plumbing-cost-springfield-mo',           date: '2024-09-01' },
  { slug: 'signs-you-need-drain-cleaning-springfield-mo',     date: '2024-08-15' },
  { slug: 'water-heater-not-working-springfield-mo',          date: '2024-08-01' },
  { slug: 'how-to-prevent-frozen-pipes-springfield-mo',       date: '2024-07-15' },
  { slug: 'sewer-line-repair-vs-replacement-springfield-mo',  date: '2024-07-01' },
  { slug: 'leak-detection-springfield-mo-guide',              date: '2024-06-15' },
]

export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: `${SITE_URL}`,                                              priority: 1.0,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/services`,                                     priority: 0.9,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/emergency-plumber-springfield-mo`,             priority: 0.95, changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/drain-cleaning-springfield-mo`,                priority: 0.85, changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/leak-detection-springfield-mo`,                priority: 0.85, changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/water-heater-repair-springfield-mo`,           priority: 0.85, changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/sewer-line-repair-springfield-mo`,             priority: 0.85, changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/pipe-repair-installation-springfield-mo`,      priority: 0.85, changeFrequency: 'weekly',  lastModified: now },
    { url: `${SITE_URL}/about`,                                        priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${SITE_URL}/contact`,                                      priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${SITE_URL}/faq`,                                          priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${SITE_URL}/service-areas`,                                priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${SITE_URL}/blog`,                                         priority: 0.7,  changeFrequency: 'weekly',  lastModified: now },
  ]

  const blogPages = BLOG_SLUGS.map(({ slug, date }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
    lastModified: new Date(date),
  }))

  const cityPages = [
    'springfield-mo',
    'nixa-mo',
    'ozark-mo',
    'republic-battlefield-mo',
    'willard-mo',
    'rogersville-mo',
    'strafford-mo',
    'clever-billings-mo',
  ].map(city => ({
    url: `${SITE_URL}/service-areas/${city}`,
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: now,
  }))

  return [...staticPages, ...blogPages, ...cityPages]
}