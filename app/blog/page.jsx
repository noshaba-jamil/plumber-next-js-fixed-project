 import { buildOpenGraph } from '@/lib/seo'
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
    date: '2026-01-08', readTime: '6 min read', category: 'Cost Guide', image: '/blog1.webp',
    keywords: ['plumber cost Springfield MO', 'how much does a plumber cost', 'plumbing prices Springfield'],
  },
  {
    slug: 'best-plumber-near-me-springfield-mo',
    title: 'How to Find the Best Plumber in Springfield MO',
    description: 'What to look for when choosing a plumber in Springfield MO — licensing, reviews, pricing transparency, and response time.',
    date: '2026-01-22', readTime: '5 min read', category: 'Homeowner Guide', image: '/blog2.webp',
    keywords: ['best plumber Springfield MO', 'plumber near me Springfield', 'find plumber Springfield Missouri'],
  },
  {
    slug: 'plumber-open-24-hours-springfield-missouri',
    title: '24 Hour Plumber in Springfield MO — Emergency Guide',
    description: 'What to do when a plumbing emergency strikes at 2am in Springfield MO and steps to minimize damage while help is on the way.',
    date: '2026-02-05', readTime: '4 min read', category: 'Emergency Tips', image: '/blog3.webp',
    keywords: ['plumber open 24 hours Springfield Missouri', '24 hour plumber Springfield', 'emergency plumber Springfield MO'],
  },
  {
    slug: 'how-to-fix-burst-pipe-springfield-mo',
    title: 'Burst Pipe in Springfield MO? Do This Immediately',
    description: "A burst pipe can cause thousands in damage. Here's exactly what to do in the first 10 minutes to protect your Springfield MO home.",
    date: '2026-02-19', readTime: '5 min read', category: 'Emergency Tips', image: '/blog4.webp',
    keywords: ['burst pipe Springfield MO', 'how to fix burst pipe', 'burst pipe repair Springfield Missouri'],
  },
  {
    slug: 'emergency-plumbing-cost-springfield-mo',
    title: 'Emergency Plumbing Cost in Springfield MO Explained',
    description: 'Honest breakdown of emergency plumbing costs in Springfield MO — what drives pricing up and how to get fair upfront quotes.',
    date: '2026-03-05', readTime: '6 min read', category: 'Cost Guide', image: '/blog5.webp',
    keywords: ['emergency plumbing cost Springfield MO', 'emergency plumber price Springfield', '24/7 plumber cost Missouri'],
  },
  {
    slug: 'signs-you-need-drain-cleaning-springfield-mo',
    title: '7 Signs You Need Drain Cleaning in Springfield MO',
    description: 'Slow drains, bad odors, gurgling pipes — how to tell when a drain issue needs professional attention vs. a DIY fix.',
    date: '2026-03-19', readTime: '4 min read', category: 'Maintenance Tips', image: '/blog6.webp',
    keywords: ['drain cleaning Springfield MO', 'blocked drain Springfield', 'drain cleaning cost Springfield Missouri'],
  },
  {
    slug: 'water-heater-not-working-springfield-mo',
    title: "Water Heater Not Working in Springfield MO? Here's Why",
    description: 'No hot water this morning? This guide covers the 8 most common water heater failures and which ones need a plumber right away.',
    date: '2026-04-01', readTime: '5 min read', category: 'Homeowner Guide', image: '/blog7.webp',
    keywords: ['water heater not working Springfield MO', 'water heater repair Springfield', 'no hot water Springfield Missouri'],
  },
  {
    slug: 'how-to-prevent-frozen-pipes-springfield-mo',
    title: 'How to Prevent Frozen Pipes in Springfield MO',
    description: 'Springfield MO winters freeze pipes. Learn how to protect your plumbing, handle a freeze, and know when to call a plumber.',
    date: '2026-04-03', readTime: '5 min read', category: 'Maintenance Tips', image: '/blog8.webp',
    keywords: ['frozen pipes Springfield MO', 'prevent frozen pipes Springfield', 'burst pipe winter Springfield Missouri'],
  },
  {
    slug: 'sewer-line-repair-vs-replacement-springfield-mo',
    title: 'Sewer Line Repair vs. Replacement in Springfield MO',
    description: 'Camera inspection found a sewer problem? Learn when repair is enough and when full replacement makes more financial sense.',
    date: '2026-04-05', readTime: '6 min read', category: 'Cost Guide', image: '/blog9.webp',
    keywords: ['sewer line repair Springfield MO', 'sewer line replacement Springfield', 'trenchless sewer repair Springfield Missouri'],
  },
  {
    slug: 'leak-detection-springfield-mo-guide',
    title: 'Hidden Water Leak? Leak Detection in Springfield MO',
    description: 'Thermal imaging, acoustic sensors, pressure testing — how professional leak detection works and why it costs less than hidden damage.',
    date: '2026-04-08', readTime: '5 min read', category: 'Homeowner Guide', image: '/blog10.webp',
    keywords: ['leak detection Springfield MO', 'hidden water leak Springfield', 'water leak detection Springfield Missouri'],
  },
  {
    slug: 'why-is-my-water-bill-so-high-springfield-mo',
    title: "Why Is My Water Bill So High? A Springfield MO Homeowner's Guide",
    description: 'Sudden spike in your Springfield MO water bill? Could be a hidden leak. Learn the top 7 causes and when to call a licensed plumber.',
    date: '2026-06-19', readTime: '6 min read', category: 'Homeowner Guide', image: '/blog11.webp',
    keywords: ['why is my water bill so high Springfield MO', 'high water bill Springfield', 'hidden leak Springfield Missouri'],
  },
  {
    slug: 'how-to-shut-off-water-springfield-mo',
    title: 'How to Shut Off Water in Your Springfield MO Home (Step-by-Step)',
    description: 'Step-by-step guide to shutting off water in your Springfield MO home during a plumbing emergency. Valve locations + what to do next.',
    date: '2026-06-20', readTime: '5 min read', category: 'Emergency Tips', image: '/blog12.webp',
    keywords: ['how to shut off water Springfield MO', 'main water shutoff valve Springfield', 'emergency water shutoff Missouri'],
  },
  {
    slug: 'sewer-backup-warning-signs-springfield-mo',
    title: '8 Sewer Backup Warning Signs Springfield MO Homeowners Should Know',
    description: 'Learn the 8 warning signs of sewer backup in your Springfield MO home. When to call a plumber and what it costs.',
    date: '2026-06-20', readTime: '6 min read', category: 'Emergency Tips', image: '/blog13.webp',
    keywords: ['signs of sewer backup Springfield MO', 'sewer backup Springfield', 'sewer backup warning signs Missouri'],
  },
  {
    slug: 'tankless-vs-tank-water-heater-springfield-mo',
    title: 'Tankless vs Tank Water Heater — Springfield MO Cost & Comparison Guide',
    description: 'Tankless vs tank water heater in Springfield MO — upfront cost, operating cost, lifespan, pros and cons. Expert comparison from a licensed plumber.',
    date: '2026-06-20', readTime: '7 min read', category: 'Cost Guide', image: '/blog14.webp',
    keywords: ['tankless water heater Springfield MO', 'tankless vs tank water heater Springfield', 'water heater comparison Springfield Missouri'],
  },
  {
    slug: 'plumbing-cost-springfield-mo-2026',
    title: 'How Much Does Plumbing Cost in Springfield MO? (2026 Price Guide)',
    description: 'Complete 2026 plumbing cost guide for Springfield MO. Emergency, drain cleaning, water heater, sewer repair — all with price ranges.',
    date: '2026-06-20', readTime: '7 min read', category: 'Cost Guide', image: '/blog15.webp',
    keywords: ['plumbing cost Springfield MO', 'plumber prices Springfield 2026', 'how much does plumbing cost Springfield Missouri'],
  },
  {
    slug: 'trenchless-sewer-repair-springfield-mo',
    title: 'Trenchless Sewer Repair in Springfield MO — Is It Worth It?',
    description: 'Trenchless sewer repair in Springfield MO — how it works, cost vs traditional dig, and when it is the right choice.',
    date: '2026-06-20', readTime: '6 min read', category: 'Cost Guide', image: '/blog16.webp',
    keywords: ['trenchless sewer repair Springfield MO', 'pipe lining Springfield', 'trenchless pipe bursting Springfield Missouri'],
  },
  {
    slug: 'water-heater-making-noise-springfield-mo',
    title: "Water Heater Making Noise? Here's What It Means in Springfield MO",
    description: 'Water heater making popping, rumbling, or hissing noises in Springfield MO? Our plumbers explain every sound and what to do.',
    date: '2026-06-20', readTime: '5 min read', category: 'Homeowner Guide', image: '/blog17.webp',
    keywords: ['water heater making noise Springfield MO', 'water heater popping sounds Springfield', 'noisy water heater Springfield Missouri'],
  },
  {
    slug: 'how-to-choose-emergency-plumber-springfield-mo',
    title: 'How to Choose an Emergency Plumber in Springfield MO',
    description: 'How to choose the best emergency plumber in Springfield MO — licensing, response time, pricing, and red flags to avoid.',
    date: '2026-06-20', readTime: '5 min read', category: 'Homeowner Guide', image: '/blog18.webp',
    keywords: ['how to choose emergency plumber Springfield MO', 'best emergency plumber Springfield', 'find licensed plumber Springfield Missouri'],
  },
  {
    slug: 'signs-you-need-a-plumber-springfield-mo',
    title: '5 Signs You Need a Plumber Right Now in Springfield MO',
    description: '5 plumbing warning signs Springfield MO homeowners should never ignore. Know when to call immediately vs wait.',
    date: '2026-06-20', readTime: '4 min read', category: 'Emergency Tips', image: '/blog19.webp',
    keywords: ['need a plumber Springfield MO', 'signs you need a plumber Springfield', 'plumbing emergency signs Springfield Missouri'],
  },
  {
    slug: 'low-water-pressure-springfield-mo',
    title: 'What Causes Low Water Pressure in Springfield MO Homes?',
    description: 'Low water pressure in your Springfield MO home? We explain every cause — from municipal supply issues to corroded pipes — and how to fix them.',
    date: '2026-06-20', readTime: '6 min read', category: 'Homeowner Guide', image: '/blog20.webp',
    keywords: ['low water pressure Springfield MO', 'water pressure problem Springfield', 'fix low water pressure Springfield Missouri'],
  },
  // ── NEW: DAY 1 ──
  {
    slug: 'plumber-nixa-mo',
    title: 'Emergency Plumber in Nixa MO — Licensed, 24/7, Upfront Pricing',
    description: 'Need a plumber in Nixa MO? Licensed emergency plumber serving Nixa and Christian County. Same-day service, upfront pricing, no call-out fee. Call (417) 373-4862.',
    date: '2026-07-01', readTime: '7 min read', category: 'Geo/Local', image: '/blog-nixa.webp',
    keywords: ['plumber Nixa MO', 'emergency plumber Nixa Missouri', 'plumber near me Nixa', 'drain cleaning Nixa MO', '24 hour plumber Nixa', 'water heater repair Nixa MO'],
  },
  // ── NEW: DAY 2 ──
  {
    slug: 'plumber-ozark-mo',
    title: 'Plumber in Ozark MO — Same-Day Service, Licensed & Insured',
    description: 'Need a plumber in Ozark MO? Licensed emergency plumber serving Ozark and all of Christian County. Same-day response, upfront pricing, $0 call-out fee. Call (417) 373-4862.',
    date: '2026-07-02', readTime: '7 min read', category: 'Geo/Local', image: '/blog-ozark.webp',
    keywords: ['plumber Ozark MO', 'emergency plumber Ozark Missouri', 'plumber near me Ozark', 'drain cleaning Ozark MO', '24 hour plumber Ozark', 'water heater repair Ozark MO', 'sewer repair Ozark MO'],
  },
]

const RESPONSIVE_CSS = `
  @media (max-width: 960px) { .bl-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (max-width: 560px) { .bl-grid { grid-template-columns: 1fr !important; } }
  .bl-card-img { height: 200px; }
  @media (max-width: 960px) { .bl-card-img { height: 180px !important; } }
  @media (max-width: 560px) { .bl-card-img { height: 200px !important; } }
  @media (max-width: 400px) { .bl-card-img { height: 170px !important; } }
  @media (max-width: 768px) {
    .bl-card-body  { padding: 18px 18px 24px !important; }
    .bl-card-title { font-size: 17px !important; line-height: 1.3 !important; }
    .bl-card-desc  { font-size: 13px !important; }
  }
  @media (max-width: 480px) {
    .bl-card-body  { padding: 14px 14px 20px !important; }
    .bl-card-title { font-size: 16px !important; margin-bottom: 8px !important; }
    .bl-card-desc  { margin-bottom: 14px !important; }
  }
  @media (max-width: 900px) { .bl-hero { padding: 56px 5% 44px !important; } }
  @media (max-width: 768px) { .bl-hero { padding: 40px 5% 32px !important; } .bl-hero p { font-size: 15px !important; } }
  @media (max-width: 480px) { .bl-hero { padding: 28px 4% 24px !important; } .bl-hero p { font-size: 14px !important; } }
  @media (max-width: 768px) { .bl-filter-row { margin-top: 20px !important; gap: 8px !important; } .bl-filter-row span { font-size: 12px !important; padding: 5px 12px !important; } }
  @media (max-width: 400px) { .bl-filter-row span { font-size: 11px !important; padding: 4px 10px !important; } }
  @media (max-width: 768px) { .bl-bottom-cta { padding: 40px 28px !important; margin-top: 40px !important; } .bl-bottom-cta h2 { font-size: clamp(20px, 4vw, 28px) !important; } .bl-bottom-cta p { font-size: 14px !important; } }
  @media (max-width: 560px) { .bl-bottom-cta { padding: 28px 18px !important; } .bl-bottom-cta a { display: flex !important; width: 100% !important; box-sizing: border-box !important; justify-content: center !important; font-size: 14px !important; padding: 14px 20px !important; } }
  @media (max-width: 768px) { .bl-outer { padding-top: 70px !important; } }
  @media (max-width: 480px) { .bl-outer { padding-top: 60px !important; } }
`

export default function BlogPage() {
  const categories = [...new Set(BLOG_POSTS.map(p => p.category))]
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
      <div className="bl-outer" style={{ paddingTop: 90, background: 'var(--navy)', minHeight: '100vh' }}>
      <section className="bl-hero" style={{ background: 'var(--navy2)', padding: '80px 5% 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="stag">Plumbing Knowledge Hub</div>
          <h1 className="sh" style={{ fontSize: 'clamp(28px,4vw,52px)', marginBottom: 16 }}>
            Plumbing Tips &amp; Advice<br /><em>for Springfield MO Homeowners</em>
          </h1>
          <p className="ssub" style={{ maxWidth: 600, fontSize: 'clamp(14px,1.6vw,16px)' }}>
            Expert guides on costs, emergencies, and maintenance from licensed Springfield MO plumbers. Everything you need to protect your home.
          </p>
          <div className="bl-filter-row" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 32 }}>
            <span style={{ background: 'var(--red)', color: '#fff', padding: '6px 16px', borderRadius: 99, fontSize: 13, fontFamily: "'Syne',sans-serif", fontWeight: 800 }}>All Posts</span>
            {categories.map(c => (
              <span key={c} style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', padding: '6px 16px', borderRadius: 99, fontSize: 13, fontFamily: "'Syne',sans-serif", fontWeight: 700, cursor: 'pointer' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section bl-section">
        <div className="container">
          <div className="bl-grid" style={{ display: 'grid', gap: '3px' }}>
            {BLOG_POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <article style={{ background: 'var(--card)', borderBottom: '3px solid transparent', transition: 'var(--t)', overflow: 'hidden', height: '100%' }} className="blog-card-link">
                  <div className="bl-card-img" style={{ overflow: 'hidden' }}>
                    <img src={post.image} alt={post.title} width={600} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div className="bl-card-body" style={{ padding: '24px 24px 32px' }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(232,50,28,0.15)', color: 'var(--red)', padding: '4px 12px', borderRadius: 99, fontSize: 11, fontFamily: "'Syne',sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>{post.category}</span>
                      <span style={{ color: 'var(--text-dimmer)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}><i className="ri-time-line" />{post.readTime}</span>
                    </div>
                    <h2 className="bl-card-title" style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 19, color: '#fff', lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h2>
                    <p className="bl-card-desc" style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{post.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                      <span style={{ fontSize: 12, color: 'var(--text-dimmer)' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span style={{ color: 'var(--amber)', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>Read More <i className="ri-arrow-right-line" /></span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="bl-bottom-cta" style={{ background: 'var(--red)', borderRadius: 'var(--rlg)', padding: '52px 48px', marginTop: 60, textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(22px,2.5vw,36px)', color: '#fff', marginBottom: 12 }}>Plumbing Emergency in Springfield MO?</h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(14px,1.5vw,16px)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Don&apos;t wait — call our licensed emergency plumber available 24/7.</p>
            <a href="tel:+14173734862" style={{ background: '#fff', color: 'var(--navy)', padding: '16px 36px', borderRadius: 'var(--r)', fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <i className="ri-phone-fill" /> Call +1 (417) 373-4862 Now
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}