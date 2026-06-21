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

              {/* ── NEW: Emergency cost section — only shown on emergency page ── */}
              {service.id === 'emergency' && (
                <div className="content-block" style={{ marginTop: 36 }}>
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 16 }}>
                    Emergency Plumbing Costs in Springfield MO —{' '}
                    <em>What to Expect</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    Emergency plumbing costs in Springfield MO depend on the type of repair needed.
                    Here is what most homeowners pay:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                    {[
                      'Burst pipe emergency repair: $200–$600 depending on pipe type and location',
                      'Overflowing toilet clearing: $150–$300 same visit',
                      'Sewer backup emergency clearing: $300–$600 for main line',
                      'Emergency water heater repair: $200–$500 same day',
                      'Hidden leak emergency location and repair: $300–$800',
                    ].map((item, i) => (
                      <span key={i} className="ctag"><i className="ri-check-fill" />{item}</span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 28 }}>
                    We provide a written upfront quote before starting. You always know the price
                    first. Call{' '}
                    <a href={CONTACT_INFO.phoneHref} style={{ color: 'var(--gold)', fontWeight: 700 }}>
                      (417) 373-4862
                    </a>{' '}
                    for an immediate estimate.
                  </p>

                  <h3 style={{ color: '#fff', fontSize: 17, marginTop: 8, marginBottom: 10 }}>
                    Do Emergency Plumbers Charge More at Night?
                  </h3>
                  <p style={{ marginBottom: 0 }}>
                    Some plumbers add a large after-hours surcharge. We provide upfront pricing on
                    every call — day or night. Our goal is honest, transparent pricing that you
                    approve before work begins.
                  </p>

                  {/* NEW H2 — After Hours / Neighborhoods */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 40, marginBottom: 16 }}>
                    After Hours Plumber Near Me —{' '}
                    <em>Serving All Springfield Neighborhoods</em>
                  </h2>
                  <p>
                    Whether you are in south Springfield, Republic Road, National Avenue, Battlefield,
                    or anywhere across the metro — our after-hours plumbers are dispatched from
                    central Springfield and reach most neighborhoods within 30–60 minutes. We cover
                    all zip codes including 65801, 65802, 65803, 65804, 65806, 65807, 65809, and 65810.
                    No matter where you are or what time it is, call us and a real person answers immediately.
                  </p>
                </div>
              )}

              {/* ── NEW: Water heater sections — only shown on heater page ── */}
              {service.id === 'heater' && (
                <div className="content-block" style={{ marginTop: 36 }}>

                  {/* H2 — Brands */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 16 }}>
                    Water Heater Brands We Service{' '}
                    <em>in Springfield MO</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    Our plumbers repair and replace all major water heater brands serving Springfield MO homes, including:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                    {[
                      'Rheem water heater repair Springfield MO',
                      'Bradford White water heater repair Springfield MO',
                      'A.O. Smith water heater service Springfield MO',
                      'Navien tankless water heater repair Springfield MO',
                      'Rinnai tankless service Springfield MO',
                      'Noritz, State, American, Kenmore, GE — all serviced',
                    ].map((item, i) => (
                      <span key={i} className="ctag"><i className="ri-check-fill" />{item}</span>
                    ))}
                  </div>

                  {/* H2 — Repair vs Replacement */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 40, marginBottom: 16 }}>
                    Water Heater Repair vs Replacement —{' '}
                    <em>Springfield MO Guide 2026</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    The decision to repair or replace your water heater depends on three factors:
                    age, repair cost, and energy efficiency.
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                    {[
                      'Under 8 years old: Almost always repair. Parts are available and the tank still has life.',
                      '8–12 years old: Compare repair cost vs. a new unit. If repair exceeds 50% of replacement cost, replace.',
                      'Over 12 years old: Replacement is usually the smarter long-term investment.',
                      'Leaking from bottom: Always replace — a leaking tank cannot be repaired safely.',
                    ].map((item, i) => (
                      <span key={i} className="ctag"><i className="ri-check-fill" />{item}</span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 0 }}>
                    Not sure which option is right for you? Call{' '}
                    <a href={CONTACT_INFO.phoneHref} style={{ color: 'var(--gold)', fontWeight: 700 }}>
                      (417) 373-4862
                    </a>{' '}
                    and we will give you an honest recommendation — no upselling.
                  </p>
                </div>
              )}

              {/* ── NEW: Sewer sections — only shown on sewer page ── */}
              {service.id === 'sewer' && (
                <div className="content-block" style={{ marginTop: 36 }}>

                  {/* H2 — Warning signs */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 16 }}>
                    How to Tell If You Have a Sewer Line Problem{' '}
                    <em>in Springfield MO</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    These are the most reliable warning signs of sewer line failure:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                    {[
                      'Multiple drains backing up at the same time (not just one drain — all of them)',
                      'Sewage or rotten egg smell coming from floor drains inside the home',
                      'Gurgling sounds from toilet when you run the sink or dishwasher',
                      'Soggy wet patches in your yard above where the sewer line runs',
                      'Unusually green or lush grass in one strip of your yard',
                      'Sewage backing up into your tub or shower when you flush',
                    ].map((item, i) => (
                      <span key={i} className="ctag">
                        <span style={{ color: 'var(--gold)', fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 28 }}>
                    If you see 2 or more of these signs, call us immediately at{' '}
                    <a href={CONTACT_INFO.phoneHref} style={{ color: 'var(--gold)', fontWeight: 700 }}>
                      (417) 373-4862
                    </a>.
                  </p>

                  {/* H3 — Trenchless availability */}
                  <h3 style={{ color: '#fff', fontSize: 17, marginTop: 8, marginBottom: 10 }}>
                    Is Trenchless Sewer Repair Available in All Springfield MO Neighborhoods?
                  </h3>
                  <p style={{ marginBottom: 0 }}>
                    Trenchless sewer repair is available in most Springfield MO properties. The two
                    main methods — pipe lining and pipe bursting — require only one or two small
                    access points rather than a full trench. Properties with severe pipe collapse or
                    very shallow lines may require traditional trenching. We determine the best method
                    after camera inspection — and only recommend trenchless when it is genuinely the
                    right solution for your specific situation.
                  </p>
                </div>
              )}

              {/* ── NEW: Drain cleaning sections — only shown on drain page ── */}
              {service.id === 'drain' && (
                <div className="content-block" style={{ marginTop: 36 }}>

                  {/* H2 — Cost */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 16 }}>
                    How Much Does Drain Cleaning Cost{' '}
                    <em>in Springfield MO?</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    Drain cleaning costs in Springfield MO depend on the drain type and severity of
                    the blockage:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                    {[
                      'Simple bathroom drain cleaning (snake): $100–$200',
                      'Kitchen drain cleaning (snake): $150–$250',
                      'Stubborn blockage with hydro-jetting: $250–$450',
                      'Main sewer line drain cleaning: $300–$600',
                      'Floor drain cleaning: $150–$300',
                    ].map((item, i) => (
                      <span key={i} className="ctag"><i className="ri-check-fill" />{item}</span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 28 }}>
                    All prices include labor. We provide a written upfront estimate before starting —
                    you know the price first. No surprise fees.
                  </p>

                  {/* H3 — Hydro-jetting */}
                  <h3 style={{ color: '#fff', fontSize: 17, marginTop: 8, marginBottom: 10 }}>
                    Is Hydro-Jetting Worth It in Springfield MO?
                  </h3>
                  <p style={{ marginBottom: 0 }}>
                    Yes, for stubborn or recurring clogs. Standard drain snaking pushes through the
                    blockage. Hydro-jetting at 3,500 PSI scours the entire inside of the pipe —
                    removing grease, scale, and root debris completely. For kitchen drains with heavy
                    grease buildup or main lines with recurring root intrusion, hydro-jetting is the
                    most cost-effective long-term solution.
                  </p>
                </div>
              )}

              {/* ── NEW: Leak detection sections — only shown on leak page ── */}
              {service.id === 'leak' && (
                <div className="content-block" style={{ marginTop: 36 }}>

                  {/* H2 — High water bill */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 16 }}>
                    Is a Hidden Leak Making Your Water Bill High{' '}
                    <em>in Springfield MO?</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    A sudden spike in your water bill without a change in usage almost always means
                    a hidden leak somewhere in your plumbing system. A leak dripping at just 1 gallon
                    per hour costs $80–$120 per year in wasted water. A larger leak at 10 gallons per
                    hour can add $800–$1,200 to your annual water bill — or more. The most common
                    hidden leaks we find in Springfield MO homes are:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                    {[
                      'Slab leaks (under the concrete foundation)',
                      'Wall leaks from corroded or pinhole-damaged copper pipes',
                      'Toilet supply line leaks',
                      'Irrigation system leaks underground',
                    ].map((item, i) => (
                      <span key={i} className="ctag"><i className="ri-check-fill" />{item}</span>
                    ))}
                  </div>

                  {/* H2 — Slab leak */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 40, marginBottom: 16 }}>
                    Slab Leak Detection{' '}
                    <em>in Springfield MO</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    A slab leak is a leak in the water lines running beneath your home's concrete slab
                    foundation. They are common in older Springfield MO homes built on clay-heavy
                    Missouri soil, where ground movement stresses pipes over time. Signs include:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                    {[
                      'Warm or hot spots on your floor',
                      'Sound of running water when everything is off',
                      'Cracked flooring or tiles',
                      'Unusually high water bills',
                    ].map((item, i) => (
                      <span key={i} className="ctag"><i className="ri-check-fill" />{item}</span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 28 }}>
                    Slab leaks require electronic leak detection equipment to pinpoint — we locate
                    them precisely before any concrete work begins.
                  </p>

                  {/* H2 — DIY leak check */}
                  <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 40, marginBottom: 16 }}>
                    How to Check for a Water Leak in Your{' '}
                    <em>Springfield MO Home</em>
                  </h2>
                  <p style={{ marginBottom: 16 }}>
                    You can do a quick water leak test yourself in 15 minutes:
                  </p>
                  <div className="ctags" style={{ flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                    {[
                      'Turn off all water in your home — faucets, appliances, ice maker, irrigation',
                      'Go to your water meter and look at the flow indicator (a small triangle or dial)',
                      'If the indicator is moving with all water off — you have a leak somewhere',
                      'Record your meter reading, wait 1 hour without using any water, check again',
                      'Any change in the reading confirms a leak in the system',
                    ].map((item, i) => (
                      <span key={i} className="ctag">
                        <span style={{ color: 'var(--gold)', fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 0 }}>
                    If your test confirms a leak, call us at{' '}
                    <a href={CONTACT_INFO.phoneHref} style={{ color: 'var(--gold)', fontWeight: 700 }}>
                      (417) 373-4862
                    </a>
                    . We use thermal imaging and acoustic sensors to find it without tearing up walls.
                  </p>
                </div>
              )}

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