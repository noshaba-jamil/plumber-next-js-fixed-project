import Link from 'next/link'
import { CONTACT_INFO } from '@/data/services'

export default function CtaBanner({
  title,
  subtitle,
  primaryLabel = 'CALL NOW — GET HELP FAST',
  secondaryLabel = 'REQUEST EMERGENCY SERVICE',
  showEstimate = true
}) {
  return (
    <section className="cta-sec">
      <div className="cta-bg" />
      <div className="cta-g1" />
      <div className="cta-g2" />
      <div className="cta-in container">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p>{subtitle}</p>}
        <div className="cta-acts">
          <a href={CONTACT_INFO.phoneHref} className="btn-white">
            <i className="ri-phone-fill" />{primaryLabel}
          </a>
          {showEstimate && (
            <Link href="/contact" className="btn-outline-white">
              <i className="ri-calendar-check-line" />{secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
