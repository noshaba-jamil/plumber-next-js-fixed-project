import Link from 'next/link'
import { SERVICES } from '@/data/services'
import '@/components/RelatedServices.css'

export default function RelatedServices({ currentId }) {
  const others = SERVICES.filter(s => s.id !== currentId)

  return (
    <>
      {/* RELATED SERVICES GRID */}
      <section className="related-svc">
        <div className="container">
          <div className="related-header">
            <div>
              <div className="stag">More Services</div>
              <h2 className="sh" style={{ fontSize: 'clamp(22px,2.5vw,32px)' }}>
                Other Plumbing Services in <em>Springfield MO</em>
              </h2>
            </div>
            <Link href="/services" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              <i className="ri-apps-fill" /> All Services
            </Link>
          </div>
          <div className="related-svc-grid">
            {others.map(s => (
              <Link key={s.id} href={s.slug} className="rsvc-card">
                <div className="ricon"><i className={s.icon} /></div>
                <div className="rname">{s.name}</div>
                <div className="rdesc">Springfield MO</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL SEO LINKS */}
      <div className="ilinks-section">
        <div className="ilinks-inner container">
          <div className="ilinks-title">Quick Links — Springfield Plumbing Services</div>
          <div className="ilinks-grid">
            <Link className="ilink" href="/"><i className="ri-home-4-fill" />Home</Link>
            <Link className="ilink" href="/services"><i className="ri-apps-fill" />All Plumbing Services Springfield MO</Link>
            {SERVICES.map(s => (
              <Link key={s.id} className="ilink" href={s.slug}>
                <i className={s.icon} />{s.name} Springfield MO
              </Link>
            ))}
            <Link className="ilink" href="/service-areas"><i className="ri-map-pin-fill" />Service Areas — Nixa, Ozark, Republic</Link>
            <Link className="ilink" href="/about"><i className="ri-information-fill" />About Our Company</Link>
            <Link className="ilink" href="/contact"><i className="ri-phone-fill" />Contact Us — Free Estimate</Link>
          </div>
        </div>
      </div>
    </>
  )
}
