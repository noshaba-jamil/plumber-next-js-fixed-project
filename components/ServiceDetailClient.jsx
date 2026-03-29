'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
import RelatedServices from '@/components/RelatedServices'
import { SERVICES, CONTACT_INFO } from '@/data/services'

export default function ServiceDetailClient({ serviceId, h1 }) {
  const service = SERVICES.find(s => s.id === serviceId)
  if (!service) return null

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name },
  ]

  return (
    <>
      <PageHero
        image={service.image}
        breadcrumbs={breadcrumbs}
        h1={h1 || service.h1}
        subtitle={service.intro}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-img">
              <img src={service.image} alt={`${service.name} Springfield MO`} />
              <div className="img-overlay" />
            </div>
            <div className="split-content">
              <div className="stag">{service.name}</div>

              {/* H2 — single per section, no duplicates */}
              <h2 className="sh">
                {service.id === 'emergency' ? <>Fast Emergency <em>Plumbing Response</em></> :
                 service.id === 'drain'     ? <>Professional Drain Cleaning <em>Solutions</em></> :
                 service.id === 'leak'      ? <>Advanced Leak Detection <em>Technology</em></> :
                 service.id === 'heater'    ? <>Water Heater Problems <em>We Fix</em></> :
                 service.id === 'sewer'     ? <>Common Sewer Line <em>Problems</em></> :
                 <>Quality Pipe Work That <em>Lasts for Years</em></>}
              </h2>

              <div className="content-block" style={{ marginTop: 20 }}>
                <p>{service.intro}</p>
                {/* FIX: was <h2> — changed to <h3> to prevent duplicate H2 issues */}
                <h3 style={{ color: '#fff', fontSize: 17, marginTop: 20, marginBottom: 10 }}>
                  {service.id === 'drain'  ? 'Common Causes of Drain Blockages' :
                   service.id === 'leak'   ? 'Signs You May Have a Hidden Leak' :
                   service.id === 'heater' ? 'Water Heater Problems We Fix' :
                   service.id === 'sewer'  ? 'Common Sewer Line Problems' :
                   'Common Issues We Handle'}
                </h3>
              </div>

              <div className="ctags">
                {service.problems.map((p, i) => (
                  <span key={i} className="ctag"><i className="ri-check-fill" />{p}</span>
                ))}
              </div>

              {/* FIX: was <h2> — changed to <h3> */}
              <h3 style={{ color: '#fff', fontSize: 17, marginTop: 28, marginBottom: 10 }}>
                {service.id === 'emergency' ? 'Why Choose Our Emergency Plumbing Services' :
                 service.id === 'drain'  ? 'Signs You Need Drain Cleaning' :
                 service.id === 'leak'   ? 'Reliable Leak Repair Solutions' :
                 service.id === 'heater' ? 'Tank and Tankless Water Heater Repair' :
                 service.id === 'sewer'  ? 'Sewer Line Inspection & Repair' :
                 'Quality Pipe Work That Lasts for Years'}
              </h3>
              <div className="ctags" style={{ marginTop: 16 }}>
                {service.benefits.map((b, i) => (
                  <span key={i} className="ctag"><i className="ri-check-fill" />{b}</span>
                ))}
              </div>

              {/* Long-form content block — 600+ words per service for SEO */}
              <div className="content-block" style={{ marginTop: 28 }}>
                {service.longContent && service.longContent.map((block, i) => (
                  <div key={i}>
                    {block.h3 && <h3 style={{ color: '#fff', fontSize: 17, marginTop: 20, marginBottom: 8 }}>{block.h3}</h3>}
                    <p style={{ marginBottom: 12 }}>{block.p}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
                <a href={CONTACT_INFO.phoneHref} className="btn-primary">
                  <i className="ri-phone-fill" />CALL NOW — GET HELP FAST
                </a>
                <Link href="/contact" className="btn-secondary">Free Estimate</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Need <em>${service.name}</em> in Springfield MO?`}
        subtitle={`Contact our professional plumbers today for reliable ${service.name.toLowerCase()} services in Springfield MO.`}
      />

      <RelatedServices currentId={service.id} />
    </>
  )
}
