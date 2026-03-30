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
           <a
  href={CONTACT_INFO.phoneHref}
  className="btn-white"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    textAlign: 'center',
    fontSize: 'clamp(12px, 2.5vw, 16px)',
    padding: '10px 14px',
    whiteSpace: 'normal',
    lineHeight: '1.2'
  }}
>
  <i className="ri-phone-fill" />
  <span style={{ wordBreak: 'break-word' }}>
    {primaryLabel}
  </span>
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
