'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
import { SERVICES, CONTACT_INFO } from '@/data/services'

export default function About() {
  return (
    <>
      <PageHero
        image="/aboutus.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        h1="About Our Plumbing Company in Springfield MO"
        subtitle="Finding a reliable plumber is important when you want dependable service and long-lasting plumbing solutions. Our company is dedicated to providing professional plumbing services for homeowners and businesses in Springfield."
      />

      {/* SPLIT — story & mission */}
      <section style={{ padding: 0 }}>
        <div className="split">
          <div className="split-img">
    <img
  src="/plummberimag.webp"
  alt="Experienced licensed plumber Springfield MO providing professional plumbing services"
  width={800}
  height={600}
  loading="lazy"
  decoding="async"
/>
            <div className="img-overlay" />
            <div className="split-badge"><div className="big">24/7</div><div className="sm">Emergency Service</div></div>
            <div className="split-rating"><div className="stars">★★★★★</div><div className="score">4.8/5</div><div className="cnt">Springfield, MO</div></div>
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
              {[['ri-shield-star-fill', 'Licensed Plumbers'], ['ri-award-fill', 'Fully Insured'], ['ri-star-fill', '4.8★ Rated'], ['ri-timer-flash-fill', '24/7 Available']].map(([icon, label], i) => (
                <span key={i} className="ctag"><i className={icon} />{label}</span>
              ))}
            </div>
            <div className="about-stats">
              {[['24/7', 'Emergency'], ['4.8★', 'Rating'], ['100%', 'Satisfaction']].map(([n, l], i) => (
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
                <p>Our plumbing technicians are trained to handle a wide range of plumbing issues, from simple repairs to complex system problems. With years of experience working with residential and commercial plumbing systems, our team understands the challenges that property owners face when plumbing problems occur.</p>
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
                <p style={{ color: 'var(--text-dim)', fontSize: 14, margin: '12px 0 16px' }}>
                  Our plumbing services are available throughout <strong>Springfield</strong> and nearby communities including Nixa, Ozark, Republic, and Battlefield.
                </p>
                <Link href="/service-areas" className="btn-secondary" style={{ display: 'inline-flex' }}>
                  <i className="ri-map-pin-fill" />View Service Areas
                </Link>
              </div>
            </div>
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
              { icon: "ri-shield-star-fill", title: "Missouri Plumbing License", val: "License: Replace With Real # · Issued by State of Missouri" },
              { icon: "ri-award-fill", title: "Fully Insured", val: "General Liability + Workers Comp — Your home is protected on every job" },
              { icon: "ri-map-pin-fill", title: "Local Springfield Business", val: "Serving Springfield MO · Nixa · Ozark · Republic · Battlefield" },
              { icon: "ri-star-fill", title: "4.8★ Google Rating", val: "150+ verified reviews from real Springfield MO homeowners" },
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
