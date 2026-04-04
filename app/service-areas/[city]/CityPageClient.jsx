'use client'

import Link from 'next/link'

const SERVICES = [
  { name: 'Emergency Plumbing',      slug: '/emergency-plumber-springfield-mo',        icon: 'ri-alarm-warning-fill' },
  { name: 'Drain Cleaning',          slug: '/drain-cleaning-springfield-mo',            icon: 'ri-water-flash-fill' },
  { name: 'Leak Detection',          slug: '/leak-detection-springfield-mo',            icon: 'ri-search-eye-fill' },
  { name: 'Water Heater Repair',     slug: '/water-heater-repair-springfield-mo',       icon: 'ri-temp-hot-fill' },
  { name: 'Sewer Line Repair',       slug: '/sewer-line-repair-springfield-mo',         icon: 'ri-arrow-down-circle-fill' },
  { name: 'Pipe Repair & Install',   slug: '/pipe-repair-installation-springfield-mo',  icon: 'ri-tools-fill' },
]

const ALL_CITIES = [
  { slug: 'springfield-mo',          name: 'Springfield' },
  { slug: 'nixa-mo',                 name: 'Nixa' },
  { slug: 'ozark-mo',                name: 'Ozark' },
  { slug: 'republic-battlefield-mo', name: 'Republic & Battlefield' },
  { slug: 'willard-mo',              name: 'Willard' },
  { slug: 'rogersville-mo',          name: 'Rogersville' },
  { slug: 'strafford-mo',            name: 'Strafford' },
  { slug: 'clever-billings-mo',      name: 'Clever & Billings' },
]

export default function CityPageClient({ city, citySlug }) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy)' }}>
        <img
          src={city.image}
          alt={city.imgAlt}
          width={1400} height={500}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ padding: '80px 20px 72px' }}>

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: `${city.name}, MO` },
              ].map((b, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {b.href
                    ? <Link href={b.href} style={{ fontSize: 12, color: 'var(--text-dimmer)', textDecoration: 'none', fontWeight: 600 }}>{b.label}</Link>
                    : <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700 }}>{b.label}</span>
                  }
                  {i < arr.length - 1 && <i className="ri-arrow-right-s-line" style={{ color: 'var(--text-dimmer)', fontSize: 14 }} />}
                </span>
              ))}
            </nav>

            {/* Distance badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,169,65,0.12)', border: '1px solid rgba(212,169,65,0.35)', padding: '5px 14px', marginBottom: 20 }}>
              <i className="ri-map-pin-fill" style={{ color: 'var(--gold)', fontSize: 13 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{city.distance}</span>
            </div>

            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 52px)', color: '#fff', lineHeight: 1.15, marginBottom: 20, maxWidth: 720 }}>
              Plumber in <span style={{ color: 'var(--gold)' }}>{city.name}, {city.state}</span> — 24/7 Emergency Plumbing
            </h1>

            <p style={{ fontSize: 18, color: 'var(--text-dim)', lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
              Licensed emergency plumber serving {city.name}, MO ({city.zip}). We answer every call 24 hours a day — no voicemail, no hold times. Fast response, upfront pricing, no hidden fees.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="tel:+14173734862" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="ri-phone-fill" />CALL NOW — +1 (417) 373-4862
              </a>
              <Link href="/contact" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="ri-calendar-line" />Request Service
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 24, marginTop: 36, flexWrap: 'wrap' }}>
              {['Licensed & Insured', '24/7 Emergency', 'Upfront Pricing', '4.8★ Google'].map(badge => (
                <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--text-dim)', fontWeight: 600 }}>
                  <i className="ri-shield-check-fill" style={{ color: 'var(--gold)', fontSize: 15 }} />{badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CITY INFO + SERVICES ─────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}>

            {/* Left — City Info */}
            <div>
              <div className="stag">About This Area</div>
              <h2 className="sh">Plumbing Services in <em>{city.name}, MO</em></h2>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{city.longDesc}</p>

              {/* City detail cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                {[
                  { icon: 'ri-group-fill',   label: 'Population', value: city.population },
                  { icon: 'ri-map-2-fill',   label: 'County',     value: city.county },
                  { icon: 'ri-mail-fill',    label: 'ZIP Code',   value: city.zip },
                  { icon: 'ri-route-fill',   label: 'Distance',   value: city.distance },
                ].map(item => (
                  <div key={item.label} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <i className={item.icon} style={{ color: 'var(--gold)', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text-dimmer)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Neighborhoods */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-dimmer)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Areas Covered</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {city.neighborhoods.map(n => (
                    <span key={n} style={{ fontSize: 12, padding: '5px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-dim)' }}>{n}</span>
                  ))}
                </div>
              </div>

              <a href="tel:+14173734862" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="ri-phone-fill" />Call for Service in {city.name}
              </a>
            </div>

            {/* Right — Services */}
            <div>
              <div className="stag">What We Do</div>
              <h2 className="sh">Services Available in <em>{city.name}</em></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
                {SERVICES.map(s => (
                  <Link key={s.slug} href={s.slug}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '18px 20px', textDecoration: 'none', transition: 'var(--t)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(212,169,65,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'var(--card)' }}>
                    <span style={{ width: 40, height: 40, background: 'rgba(212,169,65,0.12)', border: '1px solid rgba(212,169,65,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={s.icon} style={{ color: 'var(--gold)', fontSize: 18 }} />
                    </span>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>{s.name}</span>
                    <i className="ri-arrow-right-s-line" style={{ color: 'var(--text-dimmer)', fontSize: 18, marginLeft: 'auto' }} />
                  </Link>
                ))}
              </div>

              {/* Emergency CTA box */}
              <div style={{ marginTop: 20, background: 'rgba(212,169,65,0.08)', border: '1px solid rgba(212,169,65,0.3)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <i className="ri-alarm-warning-fill" style={{ color: 'var(--gold)', fontSize: 22 }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: '#fff' }}>24/7 Emergency in {city.name}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 14, lineHeight: 1.6 }}>A real person answers every call — day, night, weekend, holiday. We dispatch immediately to minimize your damage.</p>
                <a href="tel:+14173734862" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--gold)', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
                  <i className="ri-phone-fill" />+1 (417) 373-4862
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Why Choose Us</div>
            <h2 className="sh">Why {city.name} Homeowners <em>Call Us First</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginTop: 44 }}>
            {[
              { icon: 'ri-time-fill',                 title: '24/7 Real Person Answers',   desc: 'No voicemail, no hold music. A licensed dispatcher picks up every call — day or night — and sends a plumber immediately.' },
              { icon: 'ri-shield-check-fill',         title: 'Licensed & Insured',          desc: 'Every technician is State of Missouri licensed, fully insured, and background-checked. Your home is fully protected.' },
              { icon: 'ri-money-dollar-circle-fill',  title: 'Upfront Pricing',             desc: 'We diagnose, explain, and give you a written price before starting any work. No hidden fees, no surprise charges.' },
              { icon: 'ri-tools-fill',                title: 'Fixed Right First Visit',     desc: 'Our trucks arrive stocked with common parts. We fix most problems on the first visit — no second trips, no delays.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '28px 24px' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(212,169,65,0.12)', border: '1px solid rgba(212,169,65,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <i className={item.icon} style={{ color: 'var(--gold)', fontSize: 22 }} />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#fff', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--blue)', padding: '64px 20px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', marginBottom: 14 }}>
            Need a Plumber in <span style={{ color: 'var(--gold)' }}>{city.name}, MO?</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 32px' }}>
            Licensed, insured, and available 24/7. Call now and get a real person — not voicemail.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+14173734862" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16 }}>
              <i className="ri-phone-fill" />CALL NOW — +1 (417) 373-4862
            </a>
            <Link href="/contact" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <i className="ri-mail-send-fill" />Request Service Online
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────────────────── */}
      <section className="section section-alt" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <div className="ilinks-section">
            <div className="ilinks-title">Other Areas We Serve Near {city.name}</div>
            <div className="ilinks-grid">
              <Link className="ilink" href="/service-areas"><i className="ri-map-fill" />All Service Areas</Link>
              {ALL_CITIES.filter(c => c.slug !== citySlug).map(c => (
                <Link key={c.slug} className="ilink" href={`/service-areas/${c.slug}`}>
                  <i className="ri-map-pin-fill" />Plumber in {c.name}, MO
                </Link>
              ))}
              {SERVICES.map(s => (
                <Link key={s.slug} className="ilink" href={s.slug}>
                  <i className={s.icon} />{s.name} — Springfield MO
                </Link>
              ))}
              <Link className="ilink" href="/contact"><i className="ri-phone-fill" />Free Estimate — Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}