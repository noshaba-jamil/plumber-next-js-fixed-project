'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import MapEmbed from '@/components/MapEmbed'
import CtaBanner from '@/components/CtaBanner'
import { SERVICES, SERVICE_AREAS } from '@/data/services'

const AREA_DETAILS = [
  { name: 'Springfield, MO', label: 'Primary Service Area', desc: 'Our primary service area. We provide 24/7 emergency plumbing, drain cleaning, leak detection, water heater repair, sewer line repair, and pipe installation throughout all of Springfield, Missouri.' },
  { name: 'Nixa, MO', label: '', desc: 'Professional plumbing services available in Nixa, MO. Emergency repairs, drain cleaning, leak detection, and water heater repair for homeowners and businesses in Nixa.' },
  { name: 'Ozark, MO', label: '', desc: 'Reliable plumbing solutions for Ozark, MO residents. Our team provides fast emergency response and quality plumbing repairs throughout Ozark and surrounding neighborhoods.' },
  { name: 'Republic & Battlefield, MO', label: '', desc: 'Full plumbing services available in Republic and Battlefield, MO. Emergency plumbing, sewer line repair, pipe installation, and more for all property types.' },
]

export default function ServiceAreas() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        h1="Plumbing Service Areas — Springfield MO & Surrounding Cities"
        subtitle="Our professional plumbing services are available throughout Springfield, Missouri and the surrounding communities. Fast, reliable plumbing for every home and business in the region."
      />

      <section className="section section-alt">
        <div className="container">
          <div className="sec-center">
            <div className="stag">Coverage Area</div>
            <h2 className="sh">Areas We Serve Around <em>Springfield MO</em></h2>
            <p className="ssub">Our plumbing services are available throughout <strong>Springfield</strong> and surrounding communities. We proudly serve homeowners and businesses in nearby areas. Our goal is to provide reliable plumbing solutions for residents across the region.</p>
          </div>

          {/* City cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3, marginTop: 52 }}>
            {AREA_DETAILS.map((area, i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.05)', padding: '40px 36px', transition: 'var(--t)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--card2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--card)'}>
                <div style={{ width: 52, height: 52, background: 'var(--blue)', borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 8px 32px rgba(39,82,245,0.4)' }}>
                  <i className="ri-map-pin-fill" style={{ fontSize: 22, color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                  {area.name}{area.label && <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 15 }}> — {area.label}</span>}
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 16 }}>{area.desc}</p>
                <a href="tel:+14170000000" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--gold)', fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 13 }}>
                  Call Now <i className="ri-arrow-right-line" />
                </a>
              </div>
            ))}
          </div>

          {/* Available services in each area */}
          <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', padding: '48px 40px', marginTop: 3 }}>
            <div className="stag">Services Available in All Areas</div>
            <h2 className="sh" style={{ marginBottom: 28 }}>Plumbing Services Available <em>Throughout the Region</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
              {SERVICES.map(s => (
                <Link key={s.id} href={s.slug} style={{ background: 'var(--navy3)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', transition: 'var(--t)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.borderColor = 'var(--blue)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}>
                  <i className={s.icon} style={{ color: 'var(--gold)', fontSize: 20, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13.5, color: '#fff' }}>{s.name}</span>
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
                  Find Us in <span style={{ color: 'var(--gold)' }}>Springfield, Missouri</span>
                </h3>
              </div>
              <a href="https://maps.google.com/?q=Springfield,MO" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
                <i className="ri-external-link-line" />Open in Google Maps
              </a>
            </div>
            <MapEmbed height={480} />
          </div>

          {/* Internal links */}
          <div className="ilinks-section" style={{ marginTop: 3, padding: '40px 0' }}>
            <div className="ilinks-title">Quick Links — Springfield Plumbing Services</div>
            <div className="ilinks-grid">
              <Link className="ilink" href="/"><i className="ri-home-4-fill" />Home</Link>
              {SERVICES.map(s => (
                <Link key={s.id} className="ilink" href={s.slug}><i className={s.icon} />{s.name} Springfield MO</Link>
              ))}
              <Link className="ilink" href="/about"><i className="ri-information-fill" />About Our Company</Link>
              <Link className="ilink" href="/contact"><i className="ri-phone-fill" />Contact Us — Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title='Need Plumbing Service in <em>Your Area?</em>'
        subtitle="Contact us today to schedule service. Our plumbers are ready to assist homeowners and businesses throughout the Springfield region."
      />
    </>
  )
}
