'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
import { SERVICES, CONTACT_INFO } from '@/data/services'

// ── NEW: full 17-area list for the expanded "Service Area" section below —
// matches the same city list used in Navbar/Home/CityPageClient/
// ServiceDetailClient for consistency, including Neosho. ──
const AREA_LINKS = [
  { slug: 'springfield-mo',           name: 'Springfield' },
  { slug: 'nixa-mo',                  name: 'Nixa' },
  { slug: 'ozark-mo',                 name: 'Ozark' },
  { slug: 'republic-battlefield-mo',  name: 'Republic & Battlefield' },
  { slug: 'willard-mo',               name: 'Willard' },
  { slug: 'rogersville-mo',           name: 'Rogersville' },
  { slug: 'strafford-mo',             name: 'Strafford' },
  { slug: 'clever-billings-mo',       name: 'Clever & Billings' },
  { slug: 'ash-grove-mo',             name: 'Ash Grove' },
  { slug: 'walnut-grove-mo',          name: 'Walnut Grove' },
  { slug: 'fair-grove-mo',            name: 'Fair Grove' },
  { slug: 'marshfield-mo',            name: 'Marshfield' },
  { slug: 'bolivar-mo',               name: 'Bolivar' },
  { slug: 'mount-vernon-mo',          name: 'Mount Vernon' },
  { slug: 'aurora-mo',                name: 'Aurora' },
  { slug: 'highlandville-spokane-mo', name: 'Highlandville & Spokane' },
  { slug: 'neosho-mo',                name: 'Neosho' },
]

// ── UPDATED: now accepts h1 as a prop instead of hardcoding it. The
// hardcoded version was "About Our Plumbing Company in Springfield MO" —
// a near-exact match for the "plumbing companies in springfield mo" head
// term flagged in the Day 10 cannibalization map, silently competing with
// the homepage for that broader query. Falls back to the old text only if
// no prop is passed, so nothing breaks if the route file isn't updated. ──
export default function AboutClient({ h1 }) {
  return (
    <>
      <PageHero
        image="/aboutus.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        h1={h1 || 'Licensed Plumbers Serving Springfield, MO — Meet Our Team'}
        subtitle="Finding a reliable plumber is important when you want dependable service and long-lasting plumbing solutions. Our company is dedicated to providing professional plumbing services for homeowners and businesses in Springfield."
      />

      {/* ── NEW: clear, unambiguous entity statement for GEO/AI extraction.
          A single declarative sentence stating what the business is, what
          it does, and where — placed before the narrative "Our Story"
          content so AI systems and search engines can extract core facts
          without parsing through prose. ── */}
      <section style={{ padding: '0', background: 'var(--navy3, #0d1a2f)' }}>
        <div className="container" style={{ padding: '28px 20px' }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', maxWidth: 820 }}>
            We are a licensed and insured plumbing company providing residential and commercial plumbing services — including emergency repairs, drain cleaning, water heater repair and installation, sewer line repair, and pipe repair — to Springfield, Missouri and surrounding communities including Nixa, Ozark, Republic, Battlefield, and Willard. We are available 24/7 for emergency service and provide upfront written pricing before any work begins.
          </p>
        </div>
      </section>

      {/* SPLIT — story & mission */}
      <section style={{ padding: 0 }}>
        <div className="split">
          <div className="split-img">
    <img
  src="/plummberimag.webp"
  alt="We work with experienced and qualified plumbing professionals and Springfield MO providing professional plumbing services"
  width={800}
  height={600}
  loading="lazy"
  decoding="async"
/>
            <div className="img-overlay" />
            <div className="split-badge"><div className="big">24/7</div><div className="sm">Emergency Service</div></div>
            <div className="split-rating"><i className="ri-shield-check-fill" style={{ fontSize: 18 }} /><div className="cnt">Licensed &amp; Insured — Springfield, MO</div></div>
          </div>
          <div className="split-content">
            <div className="stag">Our Story</div>
            <h2 className="sh">Committed to Quality &amp; <em>Customer Satisfaction</em></h2>
            <div className="content-block" style={{ marginTop: 16 }}>
              <p>With a commitment to quality workmanship and customer satisfaction, our team works hard to ensure every plumbing job is completed efficiently and professionally. Our experienced plumbers handle everything from emergency plumbing repairs to routine maintenance and advanced plumbing solutions.</p>
              <h3 style={{ color: '#fff', fontSize: 17, marginTop: 20, marginBottom: 8 }}>Our Mission</h3>
              <p>Our mission is to provide dependable plumbing services that residents can trust. We understand how important a properly functioning plumbing system is for everyday comfort and safety. That is why our team is committed to delivering fast response times, accurate diagnoses, and long-lasting repairs for every customer in <strong>Springfield</strong>. We focus on solving plumbing problems efficiently while maintaining the highest standards of professionalism and customer care.</p>
            </div>
            <div className="ctags">
              {[['ri-shield-star-fill', 'Licensed Plumbers'], ['ri-award-fill', 'Fully Insured'], ['ri-price-tag-3-fill', 'Upfront Pricing'], ['ri-timer-flash-fill', '24/7 Available']].map(([icon, label], i) => (
                <span key={i} className="ctag"><i className={icon} />{label}</span>
              ))}
            </div>
            <div className="about-stats">
              {[['24/7', 'Emergency'], ['10+', 'Years Experience'], ['100%', 'Satisfaction']].map(([n, l], i) => (
                <div key={i} className="ast"><div className="n">{n}</div><div className="l">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCED TEAM + SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <div className="stag">Our Team</div>
              <h2 className="sh">Experienced Plumbing <em>Professionals</em></h2>
              <div className="content-block" style={{ marginTop: 16 }}>
                <p>We work with experienced and qualified plumbing professionals. Our plumbing technicians are trained to handle a wide range of plumbing issues, from simple repairs to complex system problems. With years of experience working with residential and commercial plumbing systems, our team understands the challenges that property owners face when plumbing problems occur.</p>
                <p>Using modern equipment and proven repair methods, we ensure that every plumbing service is completed safely and effectively. Our goal is to provide reliable solutions that prevent future issues and keep your plumbing system working smoothly.</p>
                <h3 style={{ color: '#fff', fontSize: 17, marginTop: 20, marginBottom: 8 }}>Commitment to Quality and Customer Satisfaction</h3>
                <p>Customer satisfaction is the foundation of our business. We believe that clear communication, honest pricing, and professional workmanship are essential to building long-term relationships with our customers.</p>
                <p>Our plumbers take the time to explain the problem, discuss the available repair options, and provide reliable solutions that fit your needs. By focusing on quality service and dependable repairs, we strive to be a plumbing company that homeowners in <strong>Springfield</strong> can rely on whenever plumbing issues arise.</p>
              </div>
            </div>
            <div>
              <div className="stag">Services We Offer</div>
              <h2 className="sh">Plumbing Services <em>We Provide</em></h2>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.8, margin: '16px 0 24px' }}>
                We offer a full range of plumbing services to meet the needs of property owners in <strong>Springfield</strong>. Each service is performed with careful attention to detail.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {SERVICES.map(s => (
                  <Link key={s.id} href={s.slug} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.05)', padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, borderLeft: '3px solid var(--blue)', transition: 'var(--t)', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--card2)'; e.currentTarget.style.borderLeftColor = 'var(--gold)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.borderLeftColor = 'var(--blue)' }}>
                    <i className={s.icon} style={{ color: 'var(--teal)', fontSize: 18, flexShrink: 0 }} />
                    <span style={{ fontSize: 14.5, fontWeight: 600, color: '#fff' }}>{s.name}</span>
                    <i className="ri-arrow-right-line" style={{ color: 'var(--gold)', fontSize: 14, marginLeft: 'auto' }} />
                  </Link>
                ))}
              </div>

              <div style={{ marginTop: 28 }}>
                <div className="stag">Service Area</div>
                <h2 className="sh" style={{ fontSize: 22 }}>Serving Springfield and <em>Nearby Communities</em></h2>
                <div style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.8, margin: '12px 0 16px' }}>
                  <p style={{ marginBottom: 12 }}>
                    Whether you need a same-day plumber in Nixa, MO, emergency drain cleaning near Ozark, or a trusted local plumbing company serving Republic and Battlefield, our licensed team knows these communities — not just Springfield.
                  </p>
                  <p style={{ marginBottom: 12 }}>
                    We're also the plumber homeowners call for well and septic-friendly plumbing in the rural stretches around Ash Grove and Walnut Grove, affordable water heater repair in Willard, and dependable 24/7 emergency service across Rogersville, Strafford, Clever, Billings, and Fair Grove.
                  </p>
                  <p style={{ marginBottom: 0 }}>
                    Further out, we're a familiar name for residential and rural plumbing repair in Marshfield, Bolivar, Mount Vernon, and Aurora, plumbing services near Highlandville and Spokane, and — for Newton County homeowners — a licensed plumber serving Neosho, MO and the surrounding Ozarks.
                  </p>
                </div>
                <p style={{ color: 'var(--text-dim)', fontSize: 14, margin: '0 0 16px' }}>
                  Tap any area below to see local response times, coverage details, and services near you:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {AREA_LINKS.map(area => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="ctag"
                      style={{ textDecoration: 'none' }}
                      title={`Plumbing services in ${area.name}, MO`}
                    >
                      <i className="ri-map-pin-fill" />{area.name}, MO
                    </Link>
                  ))}
                </div>
                <Link href="/service-areas" className="btn-secondary" style={{ display: 'inline-flex' }}>
                  <i className="ri-map-pin-fill" />View All Service Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: Local Expertise — topical authority section. Draws only on
          facts already established across the site's 24 service pages
          (clay soil sewer stress, moderate water hardness, freeze-thaw
          pipe risk) — reinforces genuine local expertise for E-E-A-T/GEO
          without inventing new claims. Links to the specific service
          pages where each issue is addressed in depth. ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Local Expertise</div>
            <h2 className="sh">Why Springfield-Specific Knowledge <em>Matters</em></h2>
            <p className="ssub">Plumbing isn't generic — the soil, water, and climate around Springfield, MO create specific issues that a plumber unfamiliar with the area can miss.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 44 }}>
            {[
              {
                icon: 'ri-landscape-fill',
                title: 'Clay-Heavy Soil',
                desc: 'Greene County\'s clay-heavy soil shifts with moisture changes, stressing sewer lines over time and contributing to root intrusion and pipe joint separation — a leading cause of sewer backups we diagnose locally.',
                link: '/sewer-line-repair-springfield-mo',
                linkText: 'Sewer line repair',
              },
              {
                icon: 'ri-drop-fill',
                title: 'Moderate Water Hardness',
                desc: 'Springfield\'s municipal water carries moderate hardness that accelerates scale buildup in pipes, water heaters, and tankless heat exchangers — shortening equipment life without a properly sized softener.',
                link: '/water-softener-installation-springfield-mo',
                linkText: 'Water softener installation',
              },
              {
                icon: 'ri-snowy-fill',
                title: 'Missouri Freeze-Thaw Cycles',
                desc: 'Hard winter freezes put exposed pipes at real risk, particularly in crawlspaces, exterior walls, and older homes without modern insulation — a seasonal pattern we see every year across our service area.',
                link: '/frozen-pipe-repair-springfield-mo',
                linkText: 'Frozen pipe repair',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '28px 24px' }}>
                <i className={item.icon} style={{ fontSize: 28, color: 'var(--teal)', display: 'block', marginBottom: 14 }} />
                <h3 style={{ fontSize: 15, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
                <Link href={item.link} style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 700, textDecoration: 'underline' }}>
                  {item.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS — E-E-A-T signals */}
      <section className="section">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Credentials &amp; Licensing</div>
            <h2 className="sh">Licensed, Insured &amp; <em>Background-Checked</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, marginTop: 40 }}>
            {[
              { icon: "ri-shield-star-fill", title: "Licensed Plumbers", val: "Licensed by the State of Missouri — every technician verified before stepping on your property" },
              { icon: "ri-award-fill", title: "Fully Insured", val: "General Liability + Workers Comp — Your home is protected on every job" },
              { icon: "ri-user-search-fill", title: "Background-Checked Team", val: "Every plumber is background-checked before joining our team" },
              { icon: "ri-map-pin-fill", title: "Local Springfield Business", val: "Serving Springfield MO · Nixa · Ozark · Republic · Battlefield" },
            ].map(({ icon, title, val }, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "3px solid var(--teal)", padding: "28px 24px" }}>
                <i className={icon} style={{ fontSize: 28, color: "var(--teal)", display: "block", marginBottom: 14 }} />
                <h3 style={{ fontSize: 15, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--text-dim)", fontSize: 13, lineHeight: 1.7 }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Our Values</div>
            <h2 className="sh">The Principles That <em>Drive Everything</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, marginTop: 52 }}>
            {[['ri-time-fill', 'Always On Time', 'For emergencies, 60-minute arrival guaranteed — no excuses, no delays, no exceptions.', '/time.webp'],
              ['ri-shield-check-fill', 'Honest & Transparent', 'Written estimate before any work. We never recommend unnecessary repairs. Integrity first.', '/honest.webp'],
              ['ri-trophy-fill', 'Quality Craftsmanship', 'Every repair performed to the highest standard using quality materials for lasting results.', 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?w=600&q=80&fit=crop']
            ].map(([icon, title, desc, img], i) => (
              <div key={i} style={{ background: 'var(--card)', overflow: 'hidden', borderBottom: '3px solid transparent', transition: 'var(--t)', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--card2)'; e.currentTarget.style.borderBottomColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
                <div style={{ height: 180, overflow: 'hidden' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                </div>
                <div style={{ padding: '28px 28px 36px' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--r)', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={icon} style={{ fontSize: 22, color: '#fff' }} />
                  </div>
                  <h3 style={{ marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title='Contact Our Plumbing Experts <em>Today</em>'
        subtitle="If you are looking for a trusted plumbing company in Springfield, our team is here to help. Whether you need emergency plumbing repairs, routine maintenance, or professional inspections, we are committed to providing reliable service."
      />
    </>
  )
}