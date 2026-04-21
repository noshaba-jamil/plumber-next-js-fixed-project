 import { buildOpenGraph, buildTwitterCard } from '@/lib/seo'
import Link from 'next/link'

export const dynamic = 'force-static'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'

export const metadata = {
  title: 'Plumbing Tips & Advice Springfield MO | Blog',
  description: 'Expert plumbing tips, cost guides, and emergency advice for Springfield MO homeowners. Learn from licensed local plumbers.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: buildOpenGraph({
    title: 'Plumbing Tips & Advice Springfield MO | Blog',
    description: 'Expert plumbing tips, cost guides, and emergency advice for Springfield MO homeowners.',
    canonical: `${SITE_URL}/blog`,
  }),
}

export const BLOG_POSTS = [
  {
    slug: 'how-much-does-a-plumber-cost-springfield-mo',
    title: 'How Much Does a Plumber Cost in Springfield MO?',
    description: 'Real pricing data for plumbing services in Springfield MO — emergency calls, drain cleaning, water heater repair and more.',
    date: '2026-01-08',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: '/blog1.webp',
    keywords: ['plumber cost Springfield MO', 'how much does a plumber cost', 'plumbing prices Springfield'],
  },
  {
    slug: 'best-plumber-near-me-springfield-mo',
    title: 'How to Find the Best Plumber in Springfield MO',
    description: 'What to look for when choosing a plumber in Springfield MO — licensing, reviews, pricing transparency, and response time.',
    date: '2026-01-22',
    readTime: '5 min read',
    category: 'Homeowner Guide',
    image: '/blog2.webp',
    keywords: ['best plumber Springfield MO', 'plumber near me Springfield', 'find plumber Springfield Missouri'],
  },
  {
    slug: 'plumber-open-24-hours-springfield-missouri',
    title: '24 Hour Plumber in Springfield MO — Emergency Guide',
    description: 'What to do when a plumbing emergency strikes at 2am in Springfield MO and steps to minimize damage while help is on the way.',
    date: '2026-02-05',
    readTime: '4 min read',
    category: 'Emergency Tips',
    image: '/blog3.webp',
    keywords: ['plumber open 24 hours Springfield Missouri', '24 hour plumber Springfield', 'emergency plumber Springfield MO'],
  },
  {
    slug: 'how-to-fix-burst-pipe-springfield-mo',
    title: 'Burst Pipe in Springfield MO? Do This Immediately',
    description: 'A burst pipe can cause thousands in damage. Here\'s exactly what to do in the first 10 minutes to protect your Springfield MO home.',
    date: '2026-02-19',
    readTime: '5 min read',
    category: 'Emergency Tips',
    image: '/blog4.webp',
    keywords: ['burst pipe Springfield MO', 'how to fix burst pipe', 'burst pipe repair Springfield Missouri'],
  },
  {
    slug: 'emergency-plumbing-cost-springfield-mo',
    title: 'Emergency Plumbing Cost in Springfield MO Explained',
    description: 'Honest breakdown of emergency plumbing costs in Springfield MO — what drives pricing up and how to get fair upfront quotes.',
    date: '2026-03-05',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: '/blog5.webp',
    keywords: ['emergency plumbing cost Springfield MO', 'emergency plumber price Springfield', '24/7 plumber cost Missouri'],
  },
  {
    slug: 'signs-you-need-drain-cleaning-springfield-mo',
    title: '7 Signs You Need Drain Cleaning in Springfield MO',
    description: 'Slow drains, bad odors, gurgling pipes — how to tell when a drain issue needs professional attention vs. a DIY fix.',
    date: '2026-03-19',
    readTime: '4 min read',
    category: 'Maintenance Tips',
    image: '/blog6.webp',
    keywords: ['drain cleaning Springfield MO', 'blocked drain Springfield', 'drain cleaning cost Springfield Missouri'],
  },
  {
    slug: 'water-heater-not-working-springfield-mo',
    title: 'Water Heater Not Working in Springfield MO? Here\'s Why',
    description: 'No hot water this morning? This guide covers the 8 most common water heater failures and which ones need a plumber right away.',
    date: '2026-04-01',
    readTime: '5 min read',
    category: 'Homeowner Guide',
    image: '/blog7.webp',
    keywords: ['water heater not working Springfield MO', 'water heater repair Springfield', 'no hot water Springfield Missouri'],
  },
  {
    slug: 'how-to-prevent-frozen-pipes-springfield-mo',
    title: 'How to Prevent Frozen Pipes in Springfield MO',
    description: 'Springfield MO winters freeze pipes. Learn how to protect your plumbing, handle a freeze, and know when to call a plumber.',
    date: '2026-04-03',
    readTime: '5 min read',
    category: 'Maintenance Tips',
    image: '/blog8.webp',
    keywords: ['frozen pipes Springfield MO', 'prevent frozen pipes Springfield', 'burst pipe winter Springfield Missouri'],
  },
  {
    slug: 'sewer-line-repair-vs-replacement-springfield-mo',
    title: 'Sewer Line Repair vs. Replacement in Springfield MO',
    description: 'Camera inspection found a sewer problem? Learn when repair is enough and when full replacement makes more financial sense.',
    date: '2026-04-05',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: '/blog9.webp',
    keywords: ['sewer line repair Springfield MO', 'sewer line replacement Springfield', 'trenchless sewer repair Springfield Missouri'],
  },
  {
    slug: 'leak-detection-springfield-mo-guide',
    title: 'Hidden Water Leak? Leak Detection in Springfield MO',
    description: 'Thermal imaging, acoustic sensors, pressure testing — how professional leak detection works and why it costs less than hidden damage.',
    date: '2026-04-08',
    readTime: '5 min read',
    category: 'Homeowner Guide',
    image: '/blog10.webp',
    keywords: ['leak detection Springfield MO', 'hidden water leak Springfield', 'water leak detection Springfield Missouri'],
  },
]

export default function BlogPage() {
  const categories = [...new Set(BLOG_POSTS.map(p => p.category))]

  return (
    <div style={{ paddingTop: 90, background: 'var(--navy)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'var(--navy2)', padding: '80px 5% 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="stag">Plumbing Knowledge Hub</div>
          <h1 className="sh" style={{ fontSize: 'clamp(32px,4vw,52px)', marginBottom: 16 }}>
            Plumbing Tips &amp; Advice<br /><em>for Springfield MO Homeowners</em>
          </h1>
          <p className="ssub" style={{ maxWidth: 600 }}>
            Expert guides on costs, emergencies, and maintenance from licensed Springfield MO plumbers. Everything you need to protect your home.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 32 }}>
            <span style={{ background: 'var(--red)', color: '#fff', padding: '6px 16px', borderRadius: 99, fontSize: 13, fontFamily: "'Syne',sans-serif", fontWeight: 800 }}>
              All Posts
            </span>
            {categories.map(c => (
              <span key={c} style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', padding: '6px 16px', borderRadius: 99, fontSize: 13, fontFamily: "'Syne',sans-serif", fontWeight: 700, cursor: 'pointer' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
            {BLOG_POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <article style={{ background: 'var(--card)', borderBottom: '3px solid transparent', transition: 'var(--t)', overflow: 'hidden' }} className="blog-card-link">
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={200}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                  <div style={{ padding: '24px 24px 32px' }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(232,50,28,0.15)', color: 'var(--red)', padding: '4px 12px', borderRadius: 99, fontSize: 11, fontFamily: "'Syne',sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                        {post.category}
                      </span>
                      <span style={{ color: 'var(--text-dimmer)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <i className="ri-time-line" />{post.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 19, color: '#fff', lineHeight: 1.3, marginBottom: 12 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                      {post.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                      <span style={{ fontSize: 12, color: 'var(--text-dimmer)' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span style={{ color: 'var(--amber)', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                        Read More <i className="ri-arrow-right-line" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div style={{ background: 'var(--red)', borderRadius: 'var(--rlg)', padding: '52px 48px', marginTop: 60, textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(24px,2.5vw,36px)', color: '#fff', marginBottom: 12 }}>
              Plumbing Emergency in Springfield MO?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Don&apos;t wait — call our licensed emergency plumber available 24/7.
            </p>
            <a href="tel:+14173734862" style={{ background: '#fff', color: 'var(--navy)', padding: '16px 36px', borderRadius: 'var(--r)', fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <i className="ri-phone-fill" /> Call +1 (417) 373-4862 Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}