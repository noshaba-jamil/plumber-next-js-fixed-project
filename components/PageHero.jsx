 import Link from 'next/link'

export default function PageHero({ image, alt, breadcrumbs = [], h1, subtitle }) {
  return (
    <section className="ph">
      <div className="ph-bg">
        <img
          src={image}
          alt={alt || h1}
          width={1400}
          height={600}
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div className="ph-inner">
        {breadcrumbs.length > 0 && (
          <nav className="bc" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {b.href ? <Link href={b.href}>{b.label}</Link> : <span>{b.label}</span>}
                {i < breadcrumbs.length - 1 && <span style={{ color: 'var(--text-dimmer)' }}>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1>{h1}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}