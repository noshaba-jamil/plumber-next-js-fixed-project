'use client'

import Link from 'next/link'

 const SERVICES = [
  { name: 'Emergency Plumbing',              slug: '/emergency-plumber-springfield-mo',                     icon: 'ri-alarm-warning-fill' },
  { name: 'Drain Cleaning',                  slug: '/drain-cleaning-springfield-mo',                        icon: 'ri-water-flash-fill' },
  { name: 'Leak Detection',                  slug: '/leak-detection-springfield-mo',                        icon: 'ri-search-eye-fill' },
  { name: 'Water Heater Repair',              slug: '/water-heater-repair-springfield-mo',                   icon: 'ri-temp-hot-fill' },
  { name: 'Sewer Line Repair',                slug: '/sewer-line-repair-springfield-mo',                     icon: 'ri-arrow-down-circle-fill' },
  { name: 'Pipe Repair & Install',            slug: '/pipe-repair-installation-springfield-mo',              icon: 'ri-tools-fill' },
  { name: 'Water Heater Installation',        slug: '/water-heater-installation-springfield-mo',             icon: 'ri-fire-line' },
  { name: 'Tankless Water Heater Install',    slug: '/tankless-water-heater-installation-springfield-mo',    icon: 'ri-flashlight-fill' },
  { name: 'Water Softener Installation',      slug: '/water-softener-installation-springfield-mo',           icon: 'ri-drop-line' },
  { name: 'Gas Line Repair & Install',        slug: '/gas-line-repair-installation-springfield-mo',          icon: 'ri-fire-fill' },
  { name: 'Whole-Home Repiping',              slug: '/repiping-springfield-mo',                              icon: 'ri-git-branch-line' },
  { name: 'Sewer Camera Inspection',          slug: '/sewer-camera-inspection-springfield-mo',                icon: 'ri-camera-fill' },
  { name: 'Trenchless Sewer Repair',          slug: '/trenchless-sewer-repair-springfield-mo',                icon: 'ri-git-merge-line' },
  { name: 'Hydro Jetting',                    slug: '/hydro-jetting-springfield-mo',                          icon: 'ri-water-flash-fill' },
  { name: 'Slab Leak Repair',                 slug: '/slab-leak-repair-springfield-mo',                       icon: 'ri-home-gear-fill' },
  { name: 'Sump Pump Installation & Repair',  slug: '/sump-pump-installation-springfield-mo',                 icon: 'ri-rainy-fill' },
  { name: 'Toilet Repair & Installation',     slug: '/toilet-repair-installation-springfield-mo',             icon: 'ri-checkbox-blank-circle-fill' },
  { name: 'Faucet & Fixture Installation',    slug: '/faucet-fixture-installation-springfield-mo',            icon: 'ri-shower-fill' },
  { name: 'Garbage Disposal Repair',          slug: '/garbage-disposal-repair-springfield-mo',                icon: 'ri-delete-bin-5-fill' },
  { name: 'Backflow Testing & Certification', slug: '/backflow-testing-springfield-mo',                       icon: 'ri-shield-check-line' },
  { name: 'Frozen Pipe Repair',               slug: '/frozen-pipe-repair-springfield-mo',                     icon: 'ri-snowy-fill' },
  { name: 'Bathroom & Kitchen Remodel',       slug: '/bathroom-kitchen-remodel-plumbing-springfield-mo',       icon: 'ri-hammer-fill' },
  { name: 'Commercial Plumbing',              slug: '/commercial-plumber-springfield-mo',                     icon: 'ri-building-4-fill' },
  { name: 'New Construction Plumbing',        slug: '/new-construction-plumbing-springfield-mo',              icon: 'ri-building-2-fill' },
]
 const ALL_CITIES = [
  { slug: 'springfield-mo',              name: 'Springfield' },
  { slug: 'nixa-mo',                     name: 'Nixa' },
  { slug: 'ozark-mo',                    name: 'Ozark' },
  { slug: 'republic-battlefield-mo',     name: 'Republic & Battlefield' },
  { slug: 'willard-mo',                  name: 'Willard' },
  { slug: 'rogersville-mo',              name: 'Rogersville' },
  { slug: 'strafford-mo',                name: 'Strafford' },
  { slug: 'clever-billings-mo',          name: 'Clever & Billings' },
  { slug: 'ash-grove-mo',                name: 'Ash Grove' },
  { slug: 'walnut-grove-mo',             name: 'Walnut Grove' },
  { slug: 'fair-grove-mo',               name: 'Fair Grove' },
  { slug: 'marshfield-mo',               name: 'Marshfield' },
  { slug: 'bolivar-mo',                  name: 'Bolivar' },
  { slug: 'mount-vernon-mo',             name: 'Mount Vernon' },
  { slug: 'aurora-mo',                   name: 'Aurora' },
  { slug: 'highlandville-spokane-mo',    name: 'Highlandville & Spokane' },
  { slug: 'neosho-mo',                   name: 'Neosho' },
   
]

// Services grouped by category for the "Plumbing Services We Provide" section.
// Matches SERVICES by slug so each still links straight to its own service page —
// this is purely a display grouping, not a separate data source.
const SERVICE_GROUPS = [
  {
    label: 'Emergency Plumbing',
    slugs: ['/emergency-plumber-springfield-mo', '/frozen-pipe-repair-springfield-mo'],
  },
  {
    label: 'Drain & Sewer',
    slugs: [
      '/drain-cleaning-springfield-mo',
      '/hydro-jetting-springfield-mo',
      '/sewer-line-repair-springfield-mo',
      '/sewer-camera-inspection-springfield-mo',
      '/trenchless-sewer-repair-springfield-mo',
    ],
  },
  {
    label: 'Water Systems',
    slugs: [
      '/water-heater-repair-springfield-mo',
      '/water-heater-installation-springfield-mo',
      '/tankless-water-heater-installation-springfield-mo',
      '/water-softener-installation-springfield-mo',
      '/gas-line-repair-installation-springfield-mo',
    ],
  },
  {
    label: 'Pipe & Leak Services',
    slugs: [
      '/leak-detection-springfield-mo',
      '/pipe-repair-installation-springfield-mo',
      '/repiping-springfield-mo',
      '/slab-leak-repair-springfield-mo',
      '/sump-pump-installation-springfield-mo',
    ],
  },
  {
    label: 'Fixtures',
    slugs: [
      '/toilet-repair-installation-springfield-mo',
      '/faucet-fixture-installation-springfield-mo',
      '/garbage-disposal-repair-springfield-mo',
    ],
  },
  {
    label: 'Commercial',
    slugs: [
      '/commercial-plumber-springfield-mo',
      '/new-construction-plumbing-springfield-mo',
      '/backflow-testing-springfield-mo',
      '/bathroom-kitchen-remodel-plumbing-springfield-mo',
    ],
  },
]

// Curated, geographically-logical neighbor lists — not every city links to
// all 16 others. Keeps internal linking useful instead of a giant flat list.
const NEARBY_CITIES = {
  'springfield-mo': ['nixa-mo', 'ozark-mo', 'republic-battlefield-mo', 'willard-mo', 'strafford-mo'],
  'nixa-mo': ['ozark-mo', 'highlandville-spokane-mo', 'springfield-mo', 'clever-billings-mo'],
  'ozark-mo': ['nixa-mo', 'springfield-mo', 'highlandville-spokane-mo', 'republic-battlefield-mo'],
  'republic-battlefield-mo': ['springfield-mo', 'ozark-mo', 'clever-billings-mo', 'willard-mo'],
  'willard-mo': ['springfield-mo', 'ash-grove-mo', 'republic-battlefield-mo'],
  'rogersville-mo': ['springfield-mo', 'strafford-mo', 'marshfield-mo'],
  'strafford-mo': ['springfield-mo', 'rogersville-mo', 'fair-grove-mo', 'marshfield-mo'],
  'clever-billings-mo': ['ozark-mo', 'nixa-mo', 'highlandville-spokane-mo', 'aurora-mo'],
  'ash-grove-mo': ['springfield-mo', 'walnut-grove-mo', 'willard-mo'],
  'walnut-grove-mo': ['ash-grove-mo', 'springfield-mo', 'bolivar-mo'],
  'fair-grove-mo': ['springfield-mo', 'strafford-mo', 'marshfield-mo'],
  'marshfield-mo': ['springfield-mo', 'strafford-mo', 'rogersville-mo', 'fair-grove-mo'],
  'bolivar-mo': ['springfield-mo', 'walnut-grove-mo', 'ash-grove-mo'],
  'mount-vernon-mo': ['springfield-mo', 'aurora-mo', 'republic-battlefield-mo', 'neosho-mo'],
  'aurora-mo': ['mount-vernon-mo', 'clever-billings-mo', 'republic-battlefield-mo', 'neosho-mo'],
  'highlandville-spokane-mo': ['nixa-mo', 'ozark-mo', 'clever-billings-mo', 'springfield-mo'],
  'neosho-mo': ['mount-vernon-mo', 'aurora-mo', 'clever-billings-mo', 'springfield-mo'],
}

// Cities whose FAQ/problem data explicitly calls out commercial, rental, or
// light-industrial plumbing demand — used to decide whether the "Residential
// & Commercial" section shows a genuine commercial callout or just the
// residential-only version, instead of claiming commercial service everywhere.
const COMMERCIAL_CITIES = new Set(['springfield-mo', 'aurora-mo', 'republic-battlefield-mo', 'bolivar-mo', 'neosho-mo'])

export default function CityPageClient({ city, citySlug }) {
  const nearby = (NEARBY_CITIES[citySlug] || [])
    .map(slug => ALL_CITIES.find(c => c.slug === slug))
    .filter(Boolean)
  const zipCodes = city.zip ? city.zip.split(',').map(z => z.trim()).filter(Boolean) : []
  const isCommercialArea = COMMERCIAL_CITIES.has(citySlug)
  return (
    <>
      {/* ── HERO — proper background-image with gradient overlay ──────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `linear-gradient(180deg, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.94) 60%, var(--navy) 100%), url(${city.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,169,65,0.14)', border: '1px solid rgba(212,169,65,0.4)', padding: '5px 14px', marginBottom: 20, backdropFilter: 'blur(4px)' }}>
              <i className="ri-map-pin-fill" style={{ color: 'var(--gold)', fontSize: 13 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{city.distance}</span>
            </div>

            {/* ── H1 — now driven by city.h1 (unique per-city headline from the
                title/H1 map), falling back to the original templated string
                so nothing breaks if a city is ever missing the field. ── */}
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 52px)', color: '#fff', lineHeight: 1.15, marginBottom: 20, maxWidth: 720, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              {city.h1 || (
                <>Trusted Local Plumber in <span style={{ color: 'var(--gold)' }}>{city.name}, {city.state}</span></>
              )}
            </h1>

            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
              Licensed plumber serving {city.name}, MO ({city.zip}) with 24/7 emergency response — no voicemail, no hold times. Fast dispatch, upfront pricing, no hidden fees. Have an urgent issue right now? Contact our <Link href="/emergency-plumber-springfield-mo" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>emergency plumber</Link>.
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
              {['Licensed & Insured', '24/7 Emergency', 'Upfront Pricing'].map(badge => (
                <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="stag">About This Area</div>
              <h2 className="sh">Plumbing Services in <em>{city.name}, MO</em></h2>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{city.longDesc}</p>
              {city.secondaryDesc && (
                <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{city.secondaryDesc}</p>
              )}

              <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
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

              {city.responseTime && (
                <div style={{ marginBottom: 28, background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Response Time</div>
                  <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7 }}>{city.responseTime}</p>
                </div>
              )}

              <a href="tel:+14173734862" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="ri-phone-fill" />Call for Service in {city.name}
              </a>
            </div>

            <div>
              <div className="stag">What We Do</div>
              <h2 className="sh">Plumbing Services We Provide in <em>{city.name}, MO</em></h2>
              <div style={{ marginTop: 24 }}>
                {SERVICE_GROUPS.map(group => {
                  const groupServices = group.slugs
                    .map(slug => SERVICES.find(s => s.slug === slug))
                    .filter(Boolean)
                  if (!groupServices.length) return null
                  return (
                    <div key={group.label} style={{ marginBottom: 22 }}>
                      <div style={{ display: 'inline-block', background: '#dc2626', color: '#ffffff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', padding: '6px 14px', borderRadius: 4, marginBottom: 10 }}>
                        {group.label}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {groupServices.map(s => (
                          <Link key={s.slug} href={s.slug}
                            style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '14px 18px', textDecoration: 'none', transition: 'var(--t)' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(212,169,65,0.06)' }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'var(--card)' }}>
                            <span style={{ width: 34, height: 34, background: 'rgba(212,169,65,0.12)', border: '1px solid rgba(212,169,65,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <i className={s.icon} style={{ color: 'var(--gold)', fontSize: 15 }} />
                            </span>
                            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: '#fff' }}>{s.name}</span>
                            <i className="ri-arrow-right-s-line" style={{ color: 'var(--text-dimmer)', fontSize: 17, marginLeft: 'auto' }} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div style={{ marginTop: 4, background: 'rgba(212,169,65,0.08)', border: '1px solid rgba(212,169,65,0.3)', padding: '24px' }}>
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

      {/* ── COMMON PROBLEMS ──────────────────────────────────────────────── */}
      {city.problems?.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="sec-center">
              <div className="stag">Local Issues</div>
              <h2 className="sh">Common Plumbing Problems in <em>{city.name}, {city.state}</em></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginTop: 44 }}>
              {city.problems.map(p => (
                <div key={p.title} style={{ background: '#b91c1c', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '28px 24px' }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <i className={p.icon} style={{ color: '#ffffff', fontSize: 22 }} />
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#ffffff', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEIGHBORHOODS & ZIP CODES ────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 48 }}>
            <div>
              <div className="stag">Coverage</div>
              <h2 className="sh">Neighborhoods & Communities We Serve in <em>{city.name}, {city.state}</em></h2>
              <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7, marginTop: 14, marginBottom: 20 }}>
                Our plumbers regularly work throughout {city.name} and the surrounding area, including:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {city.neighborhoods.map(n => (
                  <span key={n} style={{ fontSize: 13, padding: '7px 14px', background: 'var(--card)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-dim)' }}>
                    <i className="ri-map-pin-2-line" style={{ color: 'var(--gold)', marginRight: 6, fontSize: 12 }} />{n}
                  </span>
                ))}
              </div>
            </div>
            {zipCodes.length > 0 && (
              <div>
                <div className="stag">Coverage</div>
                <h2 className="sh">{city.name}, {city.state} ZIP Codes We Serve</h2>
                <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7, marginTop: 14, marginBottom: 20 }}>
                  We dispatch plumbers to every ZIP code in our {city.name} service area:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {zipCodes.map(z => (
                    <span key={z} style={{ fontSize: 13, fontWeight: 700, padding: '7px 14px', background: 'rgba(212,169,65,0.08)', border: '1px solid rgba(212,169,65,0.25)', color: 'var(--gold)' }}>
                      {z}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL & COMMERCIAL ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Property Types</div>
            <h2 className="sh">Plumbing for Homes {isCommercialArea ? 'and Businesses ' : ''}in <em>{city.name}, {city.state}</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isCommercialArea ? 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))' : '1fr', gap: 20, marginTop: 44, maxWidth: isCommercialArea ? 'none' : 640, marginLeft: isCommercialArea ? 0 : 'auto', marginRight: isCommercialArea ? 0 : 'auto' }}>
            <div style={{ background: '#b91c1c', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '28px 24px' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <i className="ri-home-4-fill" style={{ color: '#ffffff', fontSize: 22 }} />
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#ffffff', marginBottom: 10 }}>Residential Plumbing</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                From single-family homes to rental properties, we handle everyday repairs, fixture installs, and full system evaluations for homeowners and landlords throughout {city.name}.
              </p>
            </div>
            {isCommercialArea && (
              <div style={{ background: '#b91c1c', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '28px 24px' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <i className="ri-building-4-fill" style={{ color: '#ffffff', fontSize: 22 }} />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#ffffff', marginBottom: 10 }}>Commercial Plumbing</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                  We also serve {city.name}'s businesses — backflow testing, larger-capacity water heaters, and fast-response repairs sized for commercial and light-industrial properties.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY PLUMBING TIE-IN — supports the dedicated emergency page
          instead of duplicating it; brief situational list + a single link
          out to /emergency-plumber-springfield-mo. ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="stag">Emergencies</div>
              <h2 className="sh">Need an Emergency Plumber in <em>{city.name}</em>?</h2>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.8, marginTop: 14, marginBottom: 20 }}>
                Some plumbing problems can't wait for a scheduled appointment. If you're dealing with any of the following in {city.name}, call us right away:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {['Burst or leaking pipes', 'Sewer backups', 'No water at all', 'Overflowing toilet', 'Water heater leaking or flooding', 'Visible water damage'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <i className="ri-alarm-warning-fill" style={{ color: 'var(--gold)', fontSize: 15 }} />
                    <span style={{ fontSize: 14, color: 'var(--text-dim)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/emergency-plumber-springfield-mo" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="ri-alarm-warning-fill" />See Our Emergency Plumbing Service
              </Link>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <i className="ri-phone-fill" style={{ color: 'var(--gold)', fontSize: 24 }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: '#fff' }}>Call Now — Real Person, 24/7</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 20 }}>
                No voicemail, no hold music. A dispatcher answers every call and sends a plumber to your {city.name} address as fast as possible.
              </p>
              <a href="tel:+14173734862" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--gold)', fontWeight: 800, fontSize: 18, textDecoration: 'none' }}>
                <i className="ri-phone-fill" />+1 (417) 373-4862
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Why Choose Us</div>
            <h2 className="sh">Why {city.name} Homeowners <em>Call Us First</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 20, marginTop: 44 }}>
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

      {/* ── HOW OUR SERVICE WORKS ────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Our Process</div>
            <h2 className="sh">How Our Plumbing Service Works in <em>{city.name}</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 20, marginTop: 44 }}>
            {[
              { step: '1', title: 'Contact Us',         desc: 'Call or request service online and tell us what\'s happening — no automated menus.' },
              { step: '2', title: 'Diagnose the Issue',  desc: 'A licensed plumber evaluates the problem on-site and confirms the actual cause.' },
              { step: '3', title: 'Explain Your Options', desc: 'You get a clear, written explanation of the repair and the price before we start.' },
              { step: '4', title: 'Complete the Work',    desc: 'We perform the agreed-upon repair using stocked parts whenever possible.' },
              { step: '5', title: 'Verify the Fix',       desc: 'We test the system before we leave to confirm the issue is fully resolved.' },
            ].map(item => (
              <div key={item.step} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '24px 20px', position: 'relative' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: 'rgba(212,169,65,0.35)', lineHeight: 1, marginBottom: 12 }}>{item.step}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT LOCAL WORK — only renders when city.caseStudies has real
          entries. Never populate this with invented projects; leave it out
          until genuine {city.name} jobs (with real details/photos) exist. ── */}
      {city.caseStudies?.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="sec-center">
              <div className="stag">Local Projects</div>
              <h2 className="sh">Recent Plumbing Work in <em>{city.name}, {city.state}</em></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 20, marginTop: 44 }}>
              {city.caseStudies.map(cs => (
                <div key={cs.title} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '28px 24px' }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#fff', marginBottom: 14 }}>{cs.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>
                    <div><strong style={{ color: 'var(--gold)' }}>Problem:</strong> {cs.problem}</div>
                    <div><strong style={{ color: 'var(--gold)' }}>Diagnosis:</strong> {cs.diagnosis}</div>
                    <div><strong style={{ color: 'var(--gold)' }}>Solution:</strong> {cs.solution}</div>
                    <div><strong style={{ color: 'var(--gold)' }}>Result:</strong> {cs.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ — redesigned accordion, matches theme, no dead space ──────── */}
      {city.faqs?.length > 0 && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="sec-center">
              <div className="stag">Questions & Answers</div>
              <h2 className="sh">Plumber in <em>{city.name}, {city.state}</em> — FAQs</h2>
            </div>
            <div style={{ maxWidth: 780, margin: '44px auto 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {city.faqs.map((f) => (
                <details
                  key={f.q}
                  className="faq-item"
                  style={{
                    background: '#b91c1c',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderLeft: '3px solid #ffffff',
                    padding: '4px 22px',
                    borderRadius: 4,
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#ffffff',
                      listStyle: 'none',
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                    }}
                  >
                    <span>{f.q}</span>
                    <i className="ri-add-line faq-icon" style={{ color: '#ffffff', fontSize: 20, flexShrink: 0, transition: 'transform 0.2s' }} />
                  </summary>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, paddingBottom: 18, marginTop: -6 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
       <section style={{ background: 'var(--blue, #0b1f3a)', padding: 'clamp(32px, 8vw, 56px) 20px', marginTop: 'clamp(24px, 6vw, 40px)' }}>
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

      {/* ── INTERNAL LINKS — nearby cities kept to a curated, geographically
          logical set (see NEARBY_CITIES) rather than linking all 15 other
          city pages from every page. ── */}
      <section className="section section-alt" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <div className="ilinks-section">
            <div className="ilinks-title">Other Areas We Serve Near {city.name}</div>
            <div className="ilinks-grid">
              <Link className="ilink" href="/service-areas"><i className="ri-map-fill" />All Service Areas</Link>
              {nearby.map(c => (
                <Link key={c.slug} className="ilink" href={`/service-areas/${c.slug}`}>
                  <i className="ri-map-pin-fill" />Plumber in {c.name}, MO
                </Link>
              ))}
            </div>
          </div>
          <div className="ilinks-section" style={{ marginTop: 28 }}>
            <div className="ilinks-title">Related Plumbing Services in {city.name}</div>
            <div className="ilinks-grid">
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

      <style jsx global>{`
        .faq-item[open] > summary .faq-icon {
          transform: rotate(45deg);
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        /* ── Mobile responsiveness safety net ──────────────────────────
           1. Nothing on the page should ever be able to force horizontal
              scroll — this is the actual fix for the clipped/scrolled
              layout seen on narrow phones (a fixed-minimum grid track
              wider than the viewport was the cause).
           2. Long words/URLs wrap instead of pushing width out.
           3. On very narrow phones, the 2-up info-card grid (Population /
              County / ZIP / Distance) stacks to a single column instead
              of squeezing two cramped columns.
           4. Section/container side padding is trimmed slightly below
              420px so content isn't unnecessarily tight against edges. ── */
        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }
        img, svg, video, iframe {
          max-width: 100%;
          height: auto;
        }
        h1, h2, h3, p, a {
          overflow-wrap: break-word;
          word-break: break-word;
        }
        @media (max-width: 420px) {
          .info-grid {
            grid-template-columns: 1fr !important;
          }
          .container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </>
  )
}