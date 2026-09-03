 import Link from 'next/link'
import { SERVICES } from '@/data/services'
import '@/components/RelatedServices.css'

// ── NEW: exact-match anchor text overrides. Your target keyword is
// "emergency plumber springfield mo" — but SERVICES entries use the name
// "Emergency Plumbing", so every internal link site-wide was passing the
// anchor text "Emergency Plumbing Springfield MO" to your #1 money page
// instead of the actual phrase you're trying to rank for. Anchor text is
// one of the strongest internal relevance signals Google uses, so this
// was silently working against the Day 5–12 cannibalization fixes. ──
const ANCHOR_OVERRIDES = {
  emergency: 'Emergency Plumber Springfield MO',
}

function anchorFor(service) {
  return ANCHOR_OVERRIDES[service.id] || `${service.name} Springfield MO`
}

export default function RelatedServices({ currentId }) {
  const others = SERVICES.filter(s => s.id !== currentId)

  // ── NEW: pin Emergency Plumbing first in the related grid (when it's
  // not the current page) so it gets top visual placement and the
  // earliest link position on every other service page — both help
  // signal its priority to search engines and steer more real click
  // traffic toward it. ──
  const emergencyFirst = [...others].sort((a, b) => {
    if (a.id === 'emergency') return -1
    if (b.id === 'emergency') return 1
    return 0
  })

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
            {emergencyFirst.map(s => (
              <Link
                key={s.id}
                href={s.slug}
                className="rsvc-card"
                title={anchorFor(s)}
                style={s.id === 'emergency' ? { borderColor: 'var(--gold, #d4a941)', position: 'relative' } : undefined}
              >
                {s.id === 'emergency' && (
                  <span
                    style={{
                      position: 'absolute', top: 10, right: 10,
                      fontSize: 10, fontWeight: 800, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: 'var(--gold, #d4a941)',
                      background: 'rgba(212,169,65,0.12)',
                      border: '1px solid rgba(212,169,65,0.35)',
                      padding: '3px 8px', borderRadius: 99,
                    }}
                  >
                    24/7
                  </span>
                )}
                <div className="ricon"><i className={s.icon} /></div>
                <div className="rname">{s.id === 'emergency' ? 'Emergency Plumber' : s.name}</div>
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
                <i className={s.icon} />{anchorFor(s)}
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