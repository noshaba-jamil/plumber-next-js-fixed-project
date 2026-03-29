'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/ServiceCard'
import CtaBanner from '@/components/CtaBanner'
import { SERVICES } from '@/data/services'

export default function Services() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        h1="Professional Plumbing Services in Springfield MO"
        subtitle="Keeping your plumbing system in good condition is essential for the comfort and safety of your home. Our professional plumbing services in Springfield MO provide reliable solutions for residential and commercial properties."
      />

      <section className="section section-alt">
        <div className="container">
          <div className="sec-center" style={{ marginBottom: 20 }}>
            <div className="stag">Our Services</div>
            <h2 className="sh">Complete Plumbing Solutions for Homes <em>&amp; Businesses</em></h2>
            <p className="ssub">Plumbing problems can happen unexpectedly. Our skilled plumbers provide a wide range of services designed to fix problems quickly and prevent future issues.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, marginTop: 52 }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>

          {/* Maintenance block */}
          <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', padding: 52, marginTop: 3 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
              <div>
                <div className="stag">Preventive Care</div>
                <h2 className="sh">Plumbing Maintenance &amp; <em>Preventive Services</em></h2>
                <div className="content-block" style={{ marginTop: 16 }}>
                  <p>Regular plumbing maintenance can help prevent costly repairs and extend the life of your plumbing system. Our plumbers provide inspections and preventive services designed to keep your pipes, fixtures, and water systems working efficiently.</p>
                  <p>Routine maintenance can help identify small problems before they become serious issues. By keeping your plumbing system in good condition, you can avoid unexpected emergencies and protect your home from water damage.</p>
                </div>
                <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', marginTop: 16 }}>
                  <i className="ri-calendar-check-line" />Schedule Maintenance
                </Link>
              </div>
              <div>
                <div className="stag">Why Choose Us</div>
                <h2 className="sh">Why Choose Our Springfield <em>Plumbing Experts</em></h2>
                <div className="split-feats" style={{ marginTop: 16 }}>
                  {[['ri-shield-check-fill', 'Experienced Plumbers', 'Years of experience handling a wide range of plumbing problems.'],
                    ['ri-roadster-fill', 'Fast Response Times', 'We understand plumbing problems need quick attention.'],
                    ['ri-tools-fill', 'Modern Equipment', 'Advanced tools to diagnose and perform efficient repairs.']
                  ].map(([icon, title, desc], i) => (
                    <div key={i} className="sfeat">
                      <div className="sfeat-icon"><i className={icon} /></div>
                      <div><h4>{title}</h4><p>{desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div className="ilinks-section" style={{ marginTop: 3, padding: '40px 0' }}>
            <div className="ilinks-title">Direct Links — All Springfield Plumbing Service Pages</div>
            <div className="ilinks-grid">
              {SERVICES.map(s => (
                <Link key={s.id} className="ilink" href={s.slug}><i className={s.icon} />{s.name} Springfield MO</Link>
              ))}
              <Link className="ilink" href="/service-areas"><i className="ri-map-pin-fill" />Service Areas</Link>
              <Link className="ilink" href="/contact"><i className="ri-phone-fill" />Contact Us — Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title='Schedule Professional <em>Plumbing Service Today</em>'
        subtitle="If you need reliable plumbing services in Springfield MO, our experienced plumbers are ready to help. Contact our team today to schedule a service appointment."
      />
    </>
  )
}
