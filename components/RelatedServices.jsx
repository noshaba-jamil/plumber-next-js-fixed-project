import Link from 'next/link'
import { SERVICES } from '@/data/services'
import '@/components/RelatedServices.css'

// ── FIX (service-template cleanup pass): previously this component linked
// to ALL 23 other services twice on every page — once as a card grid, once
// again as a "Quick Links" text list immediately below with the same
// targets. That's ~46 outbound links to "everything else on the site" on
// every single service page (×24 pages), which is the dense, undifferentiated
// internal-link graph the site audit flagged as reducing Google's ability to
// infer which pages are actually related to which.
//
// Replaced with a curated map of 3–5 genuinely related services per page
// (e.g. Water Heater Repair links to Water Heater Installation, Tankless
// Install, Water Softener, and Gas Line — not Toilet Repair or Sump Pump).
// The duplicate "Quick Links" text section is removed entirely — the card
// grid already provides those links once.
//
// Also removed: the forced "pin Emergency first" sort and the exact-match
// anchor override (ANCHOR_OVERRIDES). Both were called out directly in the
// original site audit (point 21) — over-optimized internal anchor text is a
// pattern to move away from, not increase. Emergency still appears in the
// curated map wherever it's a genuinely relevant related service (frozen
// pipe, sump pump, pipe repair, sewer, water heater), using its normal
// service name as anchor text like every other link. ──
const RELATED_MAP = {
  emergency:          ['pipe', 'heater', 'sewer', 'frozen-pipe', 'sump-pump'],
  drain:              ['hydro-jetting', 'sewer', 'sewer-camera', 'trenchless'],
  leak:               ['slab-leak', 'pipe', 'repiping', 'sewer-camera'],
  heater:             ['water-heater-install', 'tankless-install', 'water-softener', 'gas-line'],
  sewer:              ['sewer-camera', 'trenchless', 'hydro-jetting', 'drain'],
  pipe:               ['repiping', 'slab-leak', 'frozen-pipe', 'leak'],
  'water-heater-install': ['heater', 'tankless-install', 'water-softener', 'gas-line'],
  'tankless-install': ['water-heater-install', 'heater', 'water-softener', 'gas-line'],
  'water-softener':   ['heater', 'tankless-install', 'pipe'],
  'gas-line':         ['heater', 'tankless-install', 'new-construction', 'commercial'],
  repiping:           ['pipe', 'leak', 'slab-leak', 'frozen-pipe'],
  'sewer-camera':     ['sewer', 'trenchless', 'drain', 'hydro-jetting'],
  trenchless:         ['sewer', 'sewer-camera', 'hydro-jetting'],
  'hydro-jetting':    ['drain', 'sewer', 'sewer-camera'],
  'slab-leak':        ['leak', 'pipe', 'repiping'],
  'sump-pump':        ['emergency', 'frozen-pipe', 'pipe'],
  'toilet-repair':    ['faucet-fixture', 'garbage-disposal', 'remodel-plumbing'],
  'faucet-fixture':   ['toilet-repair', 'garbage-disposal', 'remodel-plumbing'],
  'garbage-disposal': ['faucet-fixture', 'toilet-repair', 'drain'],
  'backflow-testing': ['commercial', 'new-construction', 'gas-line'],
  'frozen-pipe':      ['emergency', 'pipe', 'sump-pump'],
  'remodel-plumbing': ['toilet-repair', 'faucet-fixture', 'new-construction', 'gas-line'],
  commercial:         ['backflow-testing', 'gas-line', 'new-construction', 'emergency'],
  'new-construction': ['commercial', 'gas-line', 'remodel-plumbing', 'backflow-testing'],
}

export default function RelatedServices({ currentId }) {
  const relatedIds = RELATED_MAP[currentId] || []
  const related = relatedIds
    .map(id => SERVICES.find(s => s.id === id))
    .filter(Boolean)

  if (related.length === 0) return null

  return (
    <>
      {/* RELATED SERVICES GRID — curated, not every service on the site */}
      <section className="related-svc">
        <div className="container">
          <div className="related-header">
            <div>
              <div className="stag">Related Services</div>
              <h2 className="sh" style={{ fontSize: 'clamp(22px,2.5vw,32px)' }}>
                You Might Also <em>Need</em>
              </h2>
            </div>
            <Link href="/services" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              <i className="ri-apps-fill" /> All Services
            </Link>
          </div>
          <div className="related-svc-grid">
            {related.map(s => (
              <Link
                key={s.id}
                href={s.slug}
                className="rsvc-card"
                title={`${s.name} Springfield MO`}
              >
                <div className="ricon"><i className={s.icon} /></div>
                <div className="rname">{s.name}</div>
                <div className="rdesc">Springfield MO</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}