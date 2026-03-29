import { buildOpenGraph, buildTwitterCard } from '@/lib/seo'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://plumberspringfieldmo.com'

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
    title: 'How Much Does a Plumber Cost in Springfield MO? (2024 Guide)',
    description: 'Real pricing data for plumbing services in Springfield MO — emergency calls, drain cleaning, water heater repair and more. Know what to expect before you call.',
    date: '2024-11-01',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fit=crop',
    keywords: ['plumber cost Springfield MO', 'how much does a plumber cost', 'plumbing prices Springfield'],
  },
  {
    slug: 'best-plumber-near-me-springfield-mo',
    title: 'How to Find the Best Plumber Near You in Springfield MO',
    description: 'What to look for when choosing a plumber in Springfield MO — licensing, reviews, pricing transparency, and response time. A homeowner\'s complete guide.',
    date: '2024-10-15',
    readTime: '5 min read',
    category: 'Homeowner Guide',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&fit=crop',
    keywords: ['best plumber Springfield MO', 'plumber near me Springfield', 'find plumber Springfield Missouri'],
  },
  {
    slug: 'plumber-open-24-hours-springfield-missouri',
    title: '24 Hour Plumber in Springfield Missouri — What to Do in an Emergency',
    description: 'What to do when a plumbing emergency strikes at 2am in Springfield MO. Steps to minimize damage while waiting for your 24-hour plumber to arrive.',
    date: '2024-10-01',
    readTime: '4 min read',
    category: 'Emergency Tips',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80&fit=crop',
    keywords: ['plumber open 24 hours Springfield Missouri', '24 hour plumber Springfield', 'emergency plumber Springfield MO'],
  },
  {
    slug: 'how-to-fix-burst-pipe-springfield-mo',
    title: 'Burst Pipe in Springfield MO? Do This Immediately (Step-by-Step)',
    description: 'A burst pipe can cause thousands in water damage. Here\'s exactly what to do in the first 10 minutes to minimize damage in your Springfield MO home.',
    date: '2024-09-15',
    readTime: '5 min read',
    category: 'Emergency Tips',
    image: 'https://images.unsplash.com/photo-1617839625591-e5a789593135?w=600&q=80&fit=crop',
    keywords: ['burst pipe Springfield MO', 'how to fix burst pipe', 'burst pipe repair Springfield Missouri'],
  },
  {
    slug: 'emergency-plumbing-cost-springfield-mo',
    title: 'Emergency Plumbing Cost in Springfield MO — No Hidden Fees Guide',
    description: 'Honest breakdown of emergency plumbing costs in Springfield MO. What drives pricing up, what to avoid, and how to get fair upfront pricing every time.',
    date: '2024-09-01',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fit=crop',
    keywords: ['emergency plumbing cost Springfield MO', 'emergency plumber price Springfield', '24/7 plumber cost Missouri'],
  },
  {
    slug: 'signs-you-need-drain-cleaning-springfield-mo',
    title: '7 Signs You Need Professional Drain Cleaning in Springfield MO',
    description: 'Slow drains, bad odors, gurgling pipes — how to tell when a drain issue needs professional attention and when you can handle it yourself.',
    date: '2024-08-15',
    readTime: '4 min read',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    keywords: ['drain cleaning Springfield MO', 'blocked drain Springfield', 'drain cleaning cost Springfield Missouri'],
  },
  {
    slug: 'water-heater-not-working-springfield-mo',
    title: 'Water Heater Not Working in Springfield MO? Here\'s Why (And What To Do)',
    description: 'No hot water this morning? This guide covers the 8 most common water heater failures in Springfield MO homes — and which ones need a plumber immediately.',
    date: '2024-08-01',
    readTime: '5 min read',
    category: 'Homeowner Guide',
    image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?w=600&q=80&fit=crop',
    keywords: ['water heater not working Springfield MO', 'water heater repair Springfield', 'no hot water Springfield Missouri'],
  },
  {
    slug: 'how-to-prevent-frozen-pipes-springfield-mo',
    title: 'How to Prevent Frozen Pipes in Springfield MO This Winter',
    description: 'Springfield MO winters get cold enough to freeze pipes. Here\'s exactly how to protect your plumbing, what to do if a pipe freezes, and when to call a plumber.',
    date: '2024-07-15',
    readTime: '5 min read',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fit=crop',
    keywords: ['frozen pipes Springfield MO', 'prevent frozen pipes Springfield', 'burst pipe winter Springfield Missouri'],
  },
  {
    slug: 'sewer-line-repair-vs-replacement-springfield-mo',
    title: 'Sewer Line Repair vs. Replacement in Springfield MO — How to Decide',
    description: 'Camera inspection revealed a sewer problem? This guide explains when repair is enough and when full replacement makes more financial sense for Springfield MO homeowners.',
    date: '2024-07-01',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80&fit=crop',
    keywords: ['sewer line repair Springfield MO', 'sewer line replacement Springfield', 'trenchless sewer repair Springfield Missouri'],
  },
  {
    slug: 'leak-detection-springfield-mo-guide',
    title: 'Hidden Water Leak? How Leak Detection Works in Springfield MO',
    description: 'Thermal imaging, acoustic sensors, pressure testing — a clear explanation of how professional leak detection works and why it costs less than the damage a hidden leak causes.',
    date: '2024-06-15',
    readTime: '5 min read',
    category: 'Homeowner Guide',
    image: 'https://images.unsplash.com/photo-1617839625591-e5a789593135?w=600&q=80&fit=crop',
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
                <article style={{ background: 'var(--card)', borderBottom: '3px solid transparent', transition: 'var(--t)', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--card2)'; e.currentTarget.style.borderBottomColor = 'var(--red)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>

                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            <a href="tel:+14170000000" style={{ background: '#fff', color: 'var(--navy)', padding: '16px 36px', borderRadius: 'var(--r)', fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <i className="ri-phone-fill" /> Call (417) 000-0000 Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
