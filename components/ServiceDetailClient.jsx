'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
import RelatedServices from '@/components/RelatedServices'
import { SERVICES, CONTACT_INFO } from '@/data/services'
import { FAQ_SCHEMAS } from '@/lib/seo'

// ── NEW: city links for the "Areas We Also Serve" section below. Mirrors
// the same 16-city list used in CityPageClient.jsx/Navbar/Home for
// consistency. Each service page links to every city page using
// service-specific anchor text ("{Service} in {City}, MO") — this closes
// the internal-linking loop, since city pages already link out to every
// service but no service page previously linked back to the cities. ──
const AREA_LINKS = [
  { slug: 'springfield-mo',           name: 'Springfield' },
  { slug: 'nixa-mo',                  name: 'Nixa' },
  { slug: 'ozark-mo',                 name: 'Ozark' },
  { slug: 'republic-battlefield-mo',  name: 'Republic & Battlefield' },
  { slug: 'willard-mo',               name: 'Willard' },
  { slug: 'rogersville-mo',           name: 'Rogersville' },
  { slug: 'strafford-mo',             name: 'Strafford' },
  { slug: 'clever-billings-mo',       name: 'Clever & Billings' },
  { slug: 'ash-grove-mo',             name: 'Ash Grove' },
  { slug: 'walnut-grove-mo',          name: 'Walnut Grove' },
  { slug: 'fair-grove-mo',            name: 'Fair Grove' },
  { slug: 'marshfield-mo',            name: 'Marshfield' },
  { slug: 'bolivar-mo',               name: 'Bolivar' },
  { slug: 'mount-vernon-mo',          name: 'Mount Vernon' },
  { slug: 'aurora-mo',                name: 'Aurora' },
  { slug: 'highlandville-spokane-mo', name: 'Highlandville & Spokane' },
  { slug: 'neosho-mo', name: 'Neosho' },
]

export default function ServiceDetailClient({ serviceId, h1 }) {
  const service = SERVICES.find(s => s.id === serviceId)
  if (!service) return null

  // ── FIX: previously a ternary chain only covered emergency/drain/leak/
  // heater/sewer and silently fell back to "Quality Pipe Work That Lasts
  // for Years" (the Pipe Repair service's own tagline) for every other
  // service — including Water Softener, Gas Line, Tankless, Sump Pump,
  // etc. That's why the water softener page showed a pipe-repair phrase
  // twice. Every service now gets its own heading pair, with a safe
  // name-based fallback for any service not explicitly listed. ──
  const HEADING_MAP = {
    emergency:          ['Fast Emergency Plumbing Response', 'Why Choose Our Emergency Plumbing Services'],
    drain:              ['Professional Drain Cleaning Solutions', 'Signs You Need Drain Cleaning'],
    leak:               ['Advanced Leak Detection Technology', 'Reliable Leak Repair Solutions'],
    heater:             ['Water Heater Problems We Fix', 'Tank and Tankless Water Heater Repair'],
    sewer:              ['Common Sewer Line Problems', 'Sewer Line Inspection & Repair'],
    pipe:               ['Quality Pipe Work That Lasts for Years', 'Pipe Repair Done Right the First Time'],
    'water-heater-install': ['New Water Heater Installation Done Right', 'Sized and Installed to Last'],
    'tankless-install': ['Endless Hot Water, Installed Right', 'Why Homeowners Choose Tankless'],
    'water-softener':   ['Water Softener Installation Done Right', 'Protect Your Plumbing From Hard Water'],
    'gas-line':         ['Safe, Code-Compliant Gas Line Work', 'Gas Line Repair Done Right'],
    repiping:           ['Whole-Home Repiping Done Right', 'Eliminate Recurring Pipe Leaks for Good'],
    'sewer-camera':     ['See the Problem Before You Pay for Repair', 'HD Sewer Camera Inspection'],
    trenchless:         ['No-Dig Sewer Repair Done Right', 'Protect Your Yard With Trenchless Repair'],
    'hydro-jetting':    ['Deep Drain Cleaning That Actually Works', 'Clears What Snaking Leaves Behind'],
    'slab-leak':        ['Slab Leak Detection Without the Guesswork', 'Non-Invasive Slab Leak Repair'],
    'sump-pump':        ['Protect Your Basement Before Storms Hit', 'Sump Pump Installation & Repair Done Right'],
    'toilet-repair':    ['Toilet Repair Done Right, Same Day', 'From a Simple Fix to Full Replacement'],
    'faucet-fixture':   ['Faucet & Fixture Work Done Right', 'Leak-Free Installation, Every Time'],
    'garbage-disposal': ['Garbage Disposal Repair Done Right', 'Fixed Fast, or Replaced Properly'],
    'backflow-testing': ['Backflow Testing Done Right, On Schedule', 'Stay Compliant Without the Hassle'],
    'frozen-pipe':      ['Frozen Pipe Repair Done Right', 'Fast Response Before It Bursts'],
    'remodel-plumbing': ['Remodel Plumbing Done Right', 'Rough-In Timing That Keeps Your Project Moving'],
    commercial:         ['Commercial Plumbing Done Right', 'Fast Response When Downtime Costs Money'],
    'new-construction': ['New Construction Plumbing Done Right', 'Built to Code, On Your Schedule'],
  }
  const [primaryHeading, secondaryHeading] = HEADING_MAP[service.id] || [
    `${service.name} Done Right`,
    `Quality ${service.name} That Lasts`,
  ]

  // ── NEW: pull the matching FAQ set (if any) for visible rendering.
  // FAQ_SCHEMAS entries were previously only injected as invisible JSON-LD
  // in the route file — Google's guidance is structured data should match
  // visible page content, and answer engines scan visible text, not schema
  // alone. This renders the same Q&As as a real accordion. ──
  // ── FIX: FAQ_SCHEMAS in seo.js uses camelCase keys (waterSoftener,
  // gasLine, sumpPump...) but service.id is kebab-case (water-softener,
  // gas-line, sump-pump...). The direct lookup FAQ_SCHEMAS[serviceId] only
  // ever matched the 8 single-word ids (emergency, drain, leak, heater,
  // sewer, repiping, trenchless, commercial) — every other service's FAQ
  // content existed in seo.js but never rendered on its page. This map
  // bridges the two naming conventions so all services with FAQ content
  // actually display it. ──
  const FAQ_KEY_MAP = {
    'water-heater-install': 'waterHeaterInstall',
    'tankless-install':     'tanklessInstall',
    'water-softener':       'waterSoftener',
    'gas-line':             'gasLine',
    'sewer-camera':         'sewerCamera',
    'hydro-jetting':        'hydroJetting',
    'slab-leak':            'slabLeak',
    'sump-pump':            'sumpPump',
    'toilet-repair':        'toiletRepair',
    'faucet-fixture':       'faucetFixture',
    'garbage-disposal':     'garbageDisposal',
    'backflow-testing':     'backflowTesting',
    'frozen-pipe':          'frozenPipe',
    'remodel-plumbing':     'remodelPlumbing',
    'new-construction':     'newConstruction',
  }
  const faqKey = FAQ_KEY_MAP[serviceId] || serviceId
  const faqData = FAQ_SCHEMAS[faqKey]?.mainEntity?.map(q => ({
    q: q.name,
    a: q.acceptedAnswer.text,
  }))

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
          <div className="split-content" style={{ maxWidth: 880, margin: '0 auto' }}>
            <div className="stag">{service.name}</div>

            {/* H2 — single per section, no duplicates */}
            <h2 className="sh">{primaryHeading}</h2>

            <div className="content-block" style={{ marginTop: 20 }}>
              <p>{service.intro}</p>

              {/* ── NEW: AEO "Quick Answer" box — a short, bolded, directly
                  extractable answer near the top of the page. This is the
                  format Google featured snippets and AI answer engines
                  (ChatGPT, Perplexity, Google AI Overviews) preferentially
                  pull from. Uses the existing service.desc field — no new
                  content invented, just repositioned for extractability. ── */}
              <div
                style={{
                  background: 'rgba(212,169,65,0.06)',
                  border: '1px solid rgba(212,169,65,0.25)',
                  borderLeft: '3px solid var(--gold)',
                  padding: '16px 20px',
                  margin: '20px 0 28px',
                  borderRadius: 2,
                }}
              >
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: '#fff' }}>
                  <strong>Quick answer:</strong> {service.desc}
                </p>
              </div>

              {/* ── Styled inline image — appears once, not duplicated with hero ── */}
              <figure style={{ margin: '28px 0', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img
                  src={service.image}
                  alt={`${service.name} Springfield MO`}
                  style={{ width: '100%', height: 'clamp(240px, 40vw, 420px)', objectFit: 'cover', display: 'block' }}
                />
                <figcaption
                  style={{
                    padding: '12px 18px',
                    background: 'var(--card)',
                    fontSize: 13,
                    color: 'var(--text-dim)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  Licensed {service.name.toLowerCase()} service in Springfield, MO
                </figcaption>
              </figure>

              {/* FIX: was <h2> — changed to <h3> to prevent duplicate H2 issues */}
              <h3 style={{ color: '#fff', fontSize: 17, marginTop: 20, marginBottom: 10 }}>
                {service.id === 'drain'  ? 'Common Causes of Drain Blockages' :
                 service.id === 'leak'   ? 'Signs You May Have a Hidden Leak' :
                 service.id === 'heater' ? 'Water Heater Problems We Fix' :
                 service.id === 'sewer'  ? 'Common Sewer Line Problems' :
                 `Common ${service.shortName || service.name} Issues We Handle`}
              </h3>
            </div>

            <div className="ctags">
              {service.problems.map((p, i) => (
                <span key={i} className="ctag"><i className="ri-check-fill" />{p}</span>
              ))}
            </div>

            {/* FIX: was <h2> — changed to <h3> */}
            <h3 style={{ color: '#fff', fontSize: 17, marginTop: 28, marginBottom: 10 }}>
              {secondaryHeading}
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
                  Common Plumbing Emergencies —{' '}
                  <em>What to Do Before We Arrive</em>
                </h2>
                <p style={{ marginBottom: 24 }}>
                  Not every plumbing emergency looks the same, and what you do in the first few
                  minutes matters. Here is exactly what to do for each type of emergency while
                  our plumber is on the way.
                </p>

                {[
                  {
                    title: 'Burst Pipe',
                    icon: 'ri-water-flash-fill',
                    steps: [
                      'Shut off your main water valve immediately — usually near the water meter, basement, or crawlspace',
                      'Turn off the affected fixture if the shutoff is isolated to one area',
                      'Move furniture, electronics, and valuables away from standing water',
                      'Do not attempt a permanent repair yourself — a temporary clamp can fail and cause more damage',
                    ],
                  },
                  {
                    title: 'Major Water Leak',
                    icon: 'ri-drop-fill',
                    steps: [
                      'Identify the source if visible — under a sink, behind a toilet, or at a supply line connection',
                      'Shut off the local fixture valve, or the main if the source is unclear',
                      'Place towels or a container to limit spread while you wait',
                      'Photograph the damage for your insurance claim before cleanup begins',
                    ],
                  },
                  {
                    title: 'Sewer Backup',
                    icon: 'ri-recycle-fill',
                    steps: [
                      'Avoid all contact with the contaminated water — it poses a real health risk',
                      'Keep children and pets away from the affected area entirely',
                      'Stop using every drain and toilet in the house until we arrive',
                      'Do not attempt to plunge or snake it yourself — this can push the blockage further in',
                    ],
                  },
                  {
                    title: 'Overflowing Toilet',
                    icon: 'ri-checkbox-blank-circle-fill',
                    steps: [
                      'Turn the shutoff valve behind the toilet base clockwise to stop the water supply',
                      'If the valve is stuck or missing, remove the tank lid and lift the float to stop the fill cycle',
                      'Avoid flushing again until the blockage is cleared',
                      'Lay towels down to contain any overflow while you wait',
                    ],
                  },
                  {
                    title: 'No Hot Water / Water Heater Failure',
                    icon: 'ri-fire-fill',
                    steps: [
                      'Check the breaker (electric units) or pilot light (gas units) — this resolves the issue in some cases',
                      'If you see water pooling at the base of the tank, turn off the water supply and power/gas to the unit',
                      'Note any unusual sounds, smells, or error codes to tell your plumber',
                      'A leaking tank is not repairable — only shut it down and wait, do not attempt a fix',
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: 24, background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)', padding: '20px 24px', borderLeft: '3px solid var(--gold)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <i className={item.icon} style={{ color: 'var(--gold)', fontSize: 20 }} />
                      <h3 style={{ color: '#fff', fontSize: 16, margin: 0, fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>{item.title}</h3>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.8 }}>
                      {item.steps.map((s, j) => <li key={j}>{s}</li>)}
                    </ul>
                  </div>
                ))}

                <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 40, marginBottom: 16 }}>
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

            {/* ── NEW: Visible FAQ accordion — renders for any service with a
                matching FAQ_SCHEMAS entry (currently emergency and heater).
                Makes the JSON-LD schema match real page content per Day 11
                AEO requirements, instead of the schema-only setup that
                existed before. ── */}
            {faqData && faqData.length > 0 && (
              <div className="content-block" style={{ marginTop: 40 }}>
                <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 20 }}>
                  Frequently Asked Questions —{' '}
                  <em>{service.name} in Springfield MO</em>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {faqData.map((f, i) => (
                    <details
                      key={i}
                      style={{
                        background: 'var(--card)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderLeft: '3px solid var(--gold)',
                        padding: '4px 22px',
                        borderRadius: 2,
                      }}
                    >
                      <summary
                        style={{
                          cursor: 'pointer',
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: '#fff',
                          listStyle: 'none',
                          padding: '16px 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 16,
                        }}
                      >
                        <span>{f.q}</span>
                        <i className="ri-add-line" style={{ color: 'var(--gold)', fontSize: 20, flexShrink: 0 }} />
                      </summary>
                      <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7, paddingBottom: 18, marginTop: -6 }}>
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* ── NEW: Areas We Also Serve — closes the internal-linking
                loop. City pages already link to every service; no service
                page previously linked back to the cities. Anchor text is
                service-specific ("{Service} in {City}, MO"), reinforcing
                the service+location combination for both classic SEO and
                LLM/AI answer engines mapping service coverage by area. ── */}
            <div className="content-block" style={{ marginTop: 40 }}>
              <h2 className="sh" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 12 }}>
                Areas We Also <em>Serve</em>
              </h2>
              <p style={{ marginBottom: 20 }}>
                {service.name} is available throughout Springfield MO and every community we serve nearby:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {AREA_LINKS.map(area => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="ctag"
                    style={{ textDecoration: 'none' }}
                    title={`${service.name} in ${area.name}, MO`}
                  >
                    <i className="ri-map-pin-fill" />{area.name}, MO
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
              <a href={CONTACT_INFO.phoneHref} className="btn-primary">
                <i className="ri-phone-fill" />CALL NOW — GET HELP FAST
              </a>
              <Link href="/contact" className="btn-secondary">Free Estimate</Link>
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