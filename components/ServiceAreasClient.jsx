 'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import MapEmbed from '@/components/MapEmbed'
import CtaBanner from '@/components/CtaBanner'
import FAQAccordion from '@/components/FAQAccordion'
import { SERVICES } from '@/data/services'

const AREA_FAQS = [
  {
    q: 'What cities near Springfield MO do you serve?',
    a: 'We serve Springfield MO and all surrounding communities within roughly 30 miles — including Nixa, Ozark, Republic, Battlefield, Willard, Rogersville, Strafford, Clever, Billings, Ash Grove, Walnut Grove, Fair Grove, Marshfield, Bolivar, Mount Vernon, Aurora, Highlandville, and Spokane. Contact us if you are unsure whether your location is covered.'
  },
  {
    q: 'Do you offer 24/7 emergency plumbing in Nixa and Ozark MO?',
    a: 'Yes. We provide 24/7 emergency plumbing in Nixa, Ozark, and all nearby cities. Our licensed plumbers are available nights, weekends, and holidays with an average on-site response time under 60 minutes from our Springfield base.'
  },
  {
    q: 'How quickly can a plumber arrive in Republic or Battlefield MO?',
    a: 'Republic and Battlefield are approximately 12 miles southwest of our Springfield headquarters. For emergency calls we typically have a licensed plumber on-site within 45–60 minutes.'
  },
  {
    q: 'Do you serve rural areas outside Springfield MO?',
    a: 'Yes. We serve homeowners and businesses in rural Greene, Christian, Webster, Polk, and Lawrence counties — including Rogersville, Clever, Billings, Strafford, Bolivar, Mount Vernon, Aurora, and the Highlandville/Spokane area along with Ash Grove, Walnut Grove, and Fair Grove.'
  },
  {
    q: 'Is there an extra charge for service outside Springfield city limits?',
    a: 'We do not charge trip fees for most areas within our standard service radius. For locations beyond that we always confirm pricing before dispatching — no surprises.'
  },
  {
    q: 'Do you handle commercial plumbing in these areas?',
    a: 'Yes. We serve both homeowners and commercial properties across all service areas including Springfield, Nixa, Ozark, Republic, Bolivar, Aurora, and surrounding communities.'
  }
]

const SERVICE_AREAS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "PlumbingBusiness",
  "name": "Springfield Plumbing",
  "url": "https://www.springfieldmoplumber.com",
  "telephone": "+14173734862",
  "description": "Professional plumbing services in Springfield MO and surrounding cities including Nixa, Ozark, Republic, Battlefield, Willard, Rogersville, Strafford, Clever, Billings, Ash Grove, Walnut Grove, Fair Grove, Marshfield, Bolivar, Mount Vernon, Aurora, Highlandville, and Spokane.",
  "areaServed": [
    { "@type": "City", "name": "Springfield",   "addressRegion": "MO" },
    { "@type": "City", "name": "Nixa",          "addressRegion": "MO" },
    { "@type": "City", "name": "Ozark",         "addressRegion": "MO" },
    { "@type": "City", "name": "Republic",      "addressRegion": "MO" },
    { "@type": "City", "name": "Battlefield",   "addressRegion": "MO" },
    { "@type": "City", "name": "Willard",       "addressRegion": "MO" },
    { "@type": "City", "name": "Rogersville",   "addressRegion": "MO" },
    { "@type": "City", "name": "Strafford",     "addressRegion": "MO" },
    { "@type": "City", "name": "Clever",        "addressRegion": "MO" },
    { "@type": "City", "name": "Billings",      "addressRegion": "MO" },
    { "@type": "City", "name": "Ash Grove",     "addressRegion": "MO" },
    { "@type": "City", "name": "Walnut Grove",  "addressRegion": "MO" },
    { "@type": "City", "name": "Fair Grove",    "addressRegion": "MO" },
    { "@type": "City", "name": "Marshfield",    "addressRegion": "MO" },
    { "@type": "City", "name": "Bolivar",       "addressRegion": "MO" },
    { "@type": "City", "name": "Mount Vernon",  "addressRegion": "MO" },
    { "@type": "City", "name": "Aurora",        "addressRegion": "MO" },
    { "@type": "City", "name": "Highlandville", "addressRegion": "MO" },
    { "@type": "City", "name": "Spokane",       "addressRegion": "MO" },
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Springfield",
    "addressRegion": "MO",
    "postalCode": "65806",
    "addressCountry": "US"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": AREA_FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
}

const AREA_DETAILS = [
  {
    name: 'Springfield, MO', slug: 'springfield-mo', label: 'Primary Service Area',
    population: '~170,000', distance: 'Home Base from Springfield',
    zipCodes: '65801, 65802, 65803, 65804, 65805, 65806, 65807, 65808, 65809, 65810, 65814, 65817, 65890, 65897, 65898, 65899',
    image: '/Springfield.webp',
    imgAlt: 'Plumber performing emergency plumbing repair in Springfield Missouri home',
    imgTitle: 'Professional Plumbing Services in Springfield, MO',
    h3: 'Plumbing Services in Springfield, MO',
    desc: 'Our primary service area. 24/7 emergency plumbing, drain cleaning, leak detection, water heater repair, sewer line repair, and pipe installation throughout all of Springfield — including Downtown, Midtown, Galloway, Southern Hills, and all 34 city neighborhoods.',
    neighborhoods: ['Downtown', 'Midtown', 'Galloway', 'Southern Hills', 'SW Springfield'],
  },
  {
    name: 'Nixa, MO', slug: 'nixa-mo', label: '',
    population: '~25,000', distance: '~12 miles south from Springfield', zipCodes: '65714',
    image: '/nixa.webp',
    imgAlt: 'Licensed plumber fixing water heater in Nixa Missouri residence',
    imgTitle: 'Water Heater Repair and Plumbing Services in Nixa, MO',
    h3: 'Plumbing Services in Nixa, MO',
    desc: 'Professional plumbing in Nixa, MO — emergency repairs, drain cleaning, leak detection, and water heater repair. Typically on-site within 60 minutes from our Springfield base.',
    neighborhoods: ['Nixa City Center', 'Christian County', 'New Nixa subdivisions'],
  },
  {
    name: 'Ozark, MO', slug: 'ozark-mo', label: '',
    population: '~20,000', distance: '~14 miles south from Springfield', zipCodes: '65721',
    image: '/ozark.webp',
    imgAlt: 'Professional drain cleaning service being performed in Ozark Missouri',
    imgTitle: 'Drain Cleaning and Plumbing Repair in Ozark, MO',
    h3: 'Plumbing Services in Ozark, MO',
    desc: 'Reliable plumbing for Ozark, MO residents — fast emergency response, sewer line inspection, pipe repair, and full residential plumbing throughout Ozark and Christian County.',
    neighborhoods: ['Ozark City Center', 'Christian County', 'James River corridor'],
  },
  {
    name: 'Republic & Battlefield, MO', slug: 'republic-battlefield-mo', label: '',
    population: '~18,000+', distance: '~12 miles SW from Springfield', zipCodes: '65738, 65619',
    image: '/Battlefield.webp',
    imgAlt: 'Plumber repairing sewer line for homeowner in Republic Missouri',
    imgTitle: 'Sewer Line Repair and Plumbing Services in Republic and Battlefield, MO',
    h3: 'Plumbing in Republic & Battlefield, MO',
    desc: 'Full plumbing services in Republic and Battlefield — emergency plumbing, sewer line repair, pipe installation, and new construction plumbing for all property types.',
    neighborhoods: ['Republic City', 'Battlefield', 'SW corridor'],
  },
  {
    name: 'Willard, MO', slug: 'willard-mo', label: '',
    population: '~6,000', distance: '~13 miles NW from Springfield', zipCodes: '65781',
    image: '/WillardMissourihome.webp',
    imgAlt: 'Leak detection specialist inspecting pipes in Willard Missouri home',
    imgTitle: 'Leak Detection and Plumbing Services in Willard, MO',
    h3: 'Plumbing Services in Willard, MO',
    desc: 'Expert plumbing for Willard, MO — leak detection, pipe repair, drain cleaning, and emergency plumbing for homes and businesses in Willard and rural Greene County.',
    neighborhoods: ['Willard city', 'Rural Greene County'],
  },
  {
    name: 'Rogersville, MO', slug: 'rogersville-mo', label: '',
    population: '~4,500', distance: '~18 miles east from Springfield', zipCodes: '65742',
    image: '/Rogersville.webp',
    imgAlt: 'Water heater installation service in Rogersville Missouri',
    imgTitle: 'Water Heater Installation and Plumbing in Rogersville, MO',
    h3: 'Plumbing Services in Rogersville, MO',
    desc: 'Trusted plumbing in Rogersville, MO — water heater installation, drain cleaning, and emergency leak repairs for Webster County homeowners and businesses.',
    neighborhoods: ['Rogersville city', 'Webster County', 'James River area'],
  },
  {
    name: 'Strafford, MO', slug: 'strafford-mo', label: '',
    population: '~2,500', distance: '~15 miles NE from Springfield', zipCodes: '65757',
    image: '/StraffordMissouri.webp',
    imgAlt: 'Plumbing inspection and pipe installation in Strafford Missouri',
    imgTitle: 'Pipe Installation and Plumbing Inspection in Strafford, MO',
    h3: 'Plumbing Services in Strafford, MO',
    desc: 'Quality plumbing for Strafford, MO — emergency repairs, pipe installation, water heater service, and drain cleaning along the I-44 corridor northeast of Springfield.',
    neighborhoods: ['Strafford city', 'I-44 corridor', 'Greene County east'],
  },
  {
    name: 'Clever & Billings, MO', slug: 'clever-billings-mo', label: '',
    population: '~2,000+', distance: '~20 miles SW from Springfield', zipCodes: '65631, 65610',
    image: '/BillingsMissouri.webp',
    imgAlt: 'Emergency plumbing repair service in Clever and Billings Missouri',
    imgTitle: 'Emergency Plumbing and Drain Cleaning in Clever and Billings, MO',
    h3: 'Plumbing Services in Clever & Billings, MO',
    desc: 'Plumbing in Clever and Billings — emergency plumbing, drain cleaning, and water heater repair for rural Christian County homeowners and small businesses.',
    neighborhoods: ['Clever city', 'Billings', 'Christian County SW'],
  },
  {
    name: 'Ash Grove, MO', slug: 'ash-grove-mo', label: '',
    population: '~1,500', distance: '~18 miles NW of Springfield', zipCodes: '65604',
    image: '/AshGrove.webp',
    imgAlt: 'Licensed emergency plumber serving Ash Grove MO',
    imgTitle: 'Well, Septic, and Rural Plumbing Services in Ash Grove, MO',
    h3: 'Plumbing Services in Ash Grove, MO',
    desc: 'Licensed emergency plumber serving Ash Grove, MO — well, septic, and rural plumbing experts with upfront pricing and fast response.',
    neighborhoods: ['Downtown Ash Grove', 'Highway 265 corridor', 'Rural & acreage properties'],
  },
  {
    name: 'Walnut Grove, MO', slug: 'walnut-grove-mo', label: '',
    population: '~950', distance: '~20 miles NW of Springfield', zipCodes: '65770',
    image: '/WalnutGrove.webp',
    imgAlt: 'Licensed emergency plumber serving Walnut Grove MO',
    imgTitle: 'Rural Well and Septic Plumbing Services in Walnut Grove, MO',
    h3: 'Plumbing Services in Walnut Grove, MO',
    desc: 'Licensed emergency plumber serving Walnut Grove, MO — rural well and septic experts with upfront pricing.',
    neighborhoods: ['Downtown Walnut Grove', 'Rural farming & acreage properties'],
  },
  {
    name: 'Fair Grove, MO', slug: 'fair-grove-mo', label: '',
    population: '~1,400', distance: '~15 miles NE of Springfield', zipCodes: '65648',
    image: '/FairGrove.webp',
    imgAlt: 'Licensed emergency plumber serving Fair Grove MO',
    imgTitle: 'Rural and Growing Residential Plumbing Services in Fair Grove, MO',
    h3: 'Plumbing Services in Fair Grove, MO',
    desc: 'Licensed emergency plumber serving Fair Grove, MO — rural and growing residential plumbing experts.',
    neighborhoods: ['Downtown Fair Grove', 'Highway 65 corridor', 'Rural & newer residential properties'],
  },
  {
    name: 'Marshfield, MO', slug: 'marshfield-mo', label: '',
    population: '~7,500', distance: '~22 miles east of Springfield', zipCodes: '65706',
    image: '/Marshfield.webp',
    imgAlt: 'Licensed emergency plumber serving Marshfield MO',
    imgTitle: 'Rural and Residential Plumbing Services in Marshfield, MO',
    h3: 'Plumbing Services in Marshfield, MO',
    desc: 'Licensed emergency plumber serving Marshfield, MO — rural and residential plumbing experts, upfront pricing.',
    neighborhoods: ['Downtown Marshfield', 'I-44 corridor', 'Rural & newer residential properties'],
  },
  {
    name: 'Bolivar, MO', slug: 'bolivar-mo', label: '',
    population: '~10,800', distance: '~25 miles north of Springfield', zipCodes: '65613',
    image: '/Bolivar.webp',
    imgAlt: 'Licensed emergency plumber serving Bolivar MO',
    imgTitle: 'Residential, Well and Septic Plumbing Services in Bolivar, MO',
    h3: 'Plumbing Services in Bolivar, MO',
    desc: 'Licensed emergency plumber serving Bolivar, MO — residential, well & septic experts, upfront pricing.',
    neighborhoods: ['Downtown Bolivar', 'Southwest Baptist University area', 'Rural & residential properties'],
  },
  {
    name: 'Mount Vernon, MO', slug: 'mount-vernon-mo', label: '',
    population: '~4,400', distance: '~25 miles SW of Springfield', zipCodes: '65712',
    image: '/MountVernon.webp',
    imgAlt: 'Licensed emergency plumber serving Mount Vernon MO',
    imgTitle: 'Residential, Well and Septic Plumbing Services in Mount Vernon, MO',
    h3: 'Plumbing Services in Mount Vernon, MO',
    desc: 'Licensed emergency plumber serving Mount Vernon, MO — residential, well & septic experts.',
    neighborhoods: ['Downtown Mount Vernon', 'Historic square area', 'Rural & farming properties'],
  },
  {
    name: 'Aurora, MO', slug: 'aurora-mo', label: '',
    population: '~7,300', distance: '~30 miles SW of Springfield', zipCodes: '65605',
    image: '/Aurora.webp',
    imgAlt: 'Licensed emergency plumber serving Aurora MO',
    imgTitle: 'Residential, Well, Septic and Commercial Plumbing Services in Aurora, MO',
    h3: 'Plumbing Services in Aurora, MO',
    desc: 'Licensed emergency plumber serving Aurora, MO — residential, well, septic & commercial plumbing.',
    neighborhoods: ['Downtown Aurora', 'Commercial & light-industrial corridor', 'Rural & residential properties'],
  },
  {
    name: 'Highlandville & Spokane, MO', slug: 'highlandville-spokane-mo', label: '',
    population: '~2,000+', distance: '~15 miles south of Springfield', zipCodes: '65669, 65754',
    image: '/HighlandvilleSpokane.webp',
    imgAlt: 'Licensed emergency plumber serving Highlandville and Spokane MO',
    imgTitle: 'Rural and Growing Residential Plumbing Services in Highlandville & Spokane, MO',
    h3: 'Plumbing Services in Highlandville & Spokane, MO',
    desc: 'Licensed emergency plumber serving Highlandville & Spokane, MO — rural and growing residential plumbing experts.',
    neighborhoods: ['Highway 160 corridor', 'Subdivisions & rural properties'],
  },
]

export default function ServiceAreasClient({ h1 }) {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_AREAS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PageHero
        image="/Springfield1.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        h1={h1 || 'Plumbing Service Areas — Springfield MO & Surrounding Cities'}
        subtitle="Professional plumbing throughout Springfield, Missouri and all nearby communities. 24/7 emergency response in Nixa, Ozark, Republic, Willard, Rogersville, Strafford, Bolivar, Aurora, and beyond."
      />

      {/* Coverage quick-bar */}
      <div style={{ background: 'var(--navy3)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: '16px 0' }}>
            {['Springfield','Nixa','Ozark','Republic','Battlefield','Willard','Rogersville','Strafford','Clever','Billings','Ash Grove','Walnut Grove','Fair Grove','Marshfield','Bolivar','Mount Vernon','Aurora','Highlandville','Spokane'].map(city => (
              <span key={city} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                {city}, MO
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* City cards — each card is now a clickable Link */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Coverage Area</div>
            <h2 className="sh">Areas We Serve Around <em>Springfield MO</em></h2>
            <p className="ssub">Our licensed plumbers serve <strong>Springfield, Missouri</strong> and all surrounding communities — <strong>Nixa, Ozark, Republic, Battlefield, Willard, Rogersville, Strafford, Clever, Billings, Ash Grove, Walnut Grove, Fair Grove, Marshfield, Bolivar, Mount Vernon, Aurora, Highlandville, and Spokane</strong>.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginTop: 52 }}>
            {AREA_DETAILS.map((area, i) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article
                  style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease', cursor: 'pointer', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)'; e.currentTarget.style.borderColor = 'rgba(212,169,65,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
                >
                  <figure style={{ margin: 0, position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={area.image}
                      alt={area.imgAlt}
                      title={area.imgTitle}
                      width={800}
                      height={200}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      fetchpriority={i === 0 ? 'high' : 'auto'}
                      decoding="async"
                      style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', aspectRatio: '4 / 1' }}
                    />
                    <figcaption
                      aria-hidden="true"
                      style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,0.75))', padding: '28px 16px 10px', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                      {area.distance}
                    </figcaption>
                  </figure>

                  <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {area.label && (
                      <span style={{ display: 'inline-block', background: 'rgba(212,169,65,0.15)', border: '1px solid rgba(212,169,65,0.4)', color: 'var(--gold)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', marginBottom: 12 }}>
                        {area.label}
                      </span>
                    )}
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{area.h3}</h3>
                    <div style={{ display: 'flex', gap: 14, marginBottom: 10, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 11, color: 'var(--text-dimmer)' }}>Pop. {area.population}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-dimmer)' }}>ZIP: {area.zipCodes}</span>
                    </div>
                    <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.75, marginBottom: 14, flex: 1 }}>{area.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
                      {area.neighborhoods.map(n => (
                        <span key={n} style={{ fontSize: 11, padding: '3px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-dim)' }}>{n}</span>
                      ))}
                    </div>
                    {/* View city page CTA */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--gold)', fontWeight: 800, fontSize: 13, marginTop: 'auto' }}>
                      <i className="ri-map-pin-fill" /> View Plumbing Services in {area.name} <i className="ri-arrow-right-line" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Services strip */}
          <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', padding: '48px 40px', marginTop: 32 }}>
            <div className="stag">Available in All Areas</div>
            <h2 className="sh" style={{ marginBottom: 28 }}>Plumbing Services Available <em>Throughout the Region</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
              {SERVICES.map(s => (
                <Link key={s.id} href={s.slug} title={`${s.name} in Springfield MO and nearby cities`}
                  style={{ background: 'var(--navy3)', border: '1px solid rgba(255,255,255,0.05)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', transition: 'var(--t)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.borderColor = 'var(--blue)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}>
                  <i className={s.icon} style={{ color: 'var(--gold)', fontSize: 18, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#fff' }}>{s.name}</span>
                  <i className="ri-arrow-right-s-line" style={{ color: 'var(--text-dimmer)', fontSize: 16, marginLeft: 'auto' }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div style={{ marginTop: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div>
                <div className="stag" style={{ marginBottom: 8 }}>Service Map</div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 28, color: '#fff' }}>
                  Find Us in <span style={{ color: 'var(--gold)' }}>Springfield, Missouri &amp; Region</span>
                </h3>
              </div>
              <a href="https://maps.google.com/?q=Springfield,MO" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
                <i className="ri-external-link-line" />Open in Google Maps
              </a>
            </div>
            <MapEmbed height={480} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="stag">Common Questions</div>
              <h2 className="sh">Service Area <em>FAQs</em></h2>
              <p className="ssub" style={{ maxWidth: '100%', marginBottom: 32 }}>
                Questions about our coverage, response times, and pricing across Springfield MO and surrounding cities.
              </p>
              <a href="tel:+14173734862" className="btn-primary" style={{ display: 'inline-flex' }}>
                <i className="ri-phone-fill" />Call Us Directly
              </a>
            </div>
            <div>
              <FAQAccordion faqs={AREA_FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="section section-alt" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container">
          <div className="ilinks-section">
            <div className="ilinks-title">Quick Links — Springfield MO Plumbing &amp; Service Areas</div>
            <div className="ilinks-grid">
              <Link className="ilink" href="/"><i className="ri-home-4-fill" />Home</Link>
              {AREA_DETAILS.map(area => (
                <Link key={area.slug} className="ilink" href={`/service-areas/${area.slug}`}>
                  <i className="ri-map-pin-fill" />Plumber in {area.name}
                </Link>
              ))}
              {SERVICES.map(s => (
                <Link key={s.id} className="ilink" href={s.slug}>
                  <i className={s.icon} />{s.name} Springfield MO
                </Link>
              ))}
              <Link className="ilink" href="/about"><i className="ri-information-fill" />About Our Company</Link>
              <Link className="ilink" href="/contact"><i className="ri-phone-fill" />Free Estimate — Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title='Need a Plumber in <em>Your Area?</em>'
        subtitle="We serve Springfield MO, Nixa, Ozark, Republic, Willard, Rogersville, Strafford, Bolivar, Aurora, and all nearby communities. Call now for fast, professional service."
      />
    </>
  )
}