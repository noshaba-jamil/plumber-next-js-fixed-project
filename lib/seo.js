 /**
 * SEO Configuration — Centralized metadata for all pages
 * ✅ WWW consistent across all URLs
 * ✅ Professional email in schema
 * ✅ @type array — LocalBusiness + Plumber
 * ✅ aggregateRating removed (add later with real review data)
 * ✅ All canonical URLs correct
 * ✅ og-image.png consistent everywhere
 * ✅ BASE_METADATA has no self-references or duplicate keys
 * ✅ sameAs — GitHub Pages URL removed (only authoritative profiles)
 * ✅ openingHoursSpecification is an array (Google spec)
 * ✅ WEBSITE_SCHEMA includes SearchAction / potentialAction
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'
const PHONE    = process.env.NEXT_PUBLIC_PHONE    || '+14173734862'

// ── BASE METADATA ─────────────────────────────────────────────
export const BASE_METADATA = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Springfield MO Plumber' }],
  creator: 'Springfield MO Plumber',
  publisher: 'Springfield MO Plumber',
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Springfield Emergency Plumbing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emergency Plumber Springfield MO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

 export const PAGE_META = {
  home: {
    title: 'Emergency Plumber Springfield MO — 24/7, Near Me',
    description: '24/7 emergency plumber in Springfield MO. Real person answers. Same day. Upfront pricing. No hidden fees. Call (417) 373-4862.',
    canonical: `${SITE_URL}`,
    h1: 'Emergency Plumber in Springfield MO — 24/7 Fast Plumbing Repair',
  },
  services: {
    title: 'Plumbing Services Springfield MO | Licensed & Affordable',
    description: 'Complete plumbing services in Springfield MO — emergency, drain, water heater, sewer & pipe repair. 24/7. Upfront pricing. Call (417) 373-4862.',
    canonical: `${SITE_URL}/services`,
    h1: 'Professional Plumbing Services in Springfield MO',
  },
  about: {
    title: 'About Us | Licensed Plumbers Springfield MO ',
    description: 'Licensed & insured Springfield MO plumbers. 10+ years experience. Upfront pricing, background-checked team, available 24/7. Call (417) 373-4862.',
    canonical: `${SITE_URL}/about`,
    h1: 'About Our Plumbing Company in Springfield MO',
  },
  contact: {
    title: 'Contact Emergency Plumber Springfield MO | 24/7',
    description: 'Contact Springfield MO trusted emergency plumber. 24/7. Fast response. Call (417) 373-4862 or submit our quick form for immediate help.',
    canonical: `${SITE_URL}/contact`,
    h1: 'Contact Our Emergency Plumber in Springfield MO',
  },
  faq: {
    title: 'Plumbing FAQ Springfield MO | Common Questions',
    description: 'Answers to plumbing questions in Springfield MO. Costs, response times, emergency services & more. Licensed plumbers available 24/7.',
    canonical: `${SITE_URL}/faq`,
    h1: 'Frequently Asked Questions — Emergency Plumber Springfield MO',
  },
  areas: {
    title: 'Plumbing Service Areas | Springfield MO & Nearby Cities',
    description: 'Emergency plumbing in Springfield, Nixa, Ozark, Republic, Battlefield MO. Fast local response. Licensed & insured. Available 24/7.',
    canonical: `${SITE_URL}/service-areas`,
    h1: 'Plumbing Service Areas — Springfield MO & Surrounding Cities',
  },
  emergency: {
    title: 'Emergency Plumber Springfield MO | 24/7 Near Me',
    description: 'Burst pipe or sewer backup in Springfield MO? We answer 24/7. Same-day emergency plumber. $0 call-out fee. Call (417) 373-4862.',
    canonical: `${SITE_URL}/emergency-plumber-springfield-mo`,
    h1: 'Emergency Plumber Springfield MO — 24 Hour Plumbing Services',
  },
  drain: {
    title: 'Drain Cleaning Springfield MO | Same Day | From $150',
    description: 'Clogged drain in Springfield MO? Same-day drain cleaning — hydro-jetting & snaking. From $150. Licensed. Upfront pricing. Call (417) 373-4862.',
    canonical: `${SITE_URL}/drain-cleaning-springfield-mo`,
    h1: 'Drain Cleaning Springfield MO — Professional Drain Unclogging',
  },
  leak: {
    title: 'Leak Detection Springfield MO | Find Hidden Leaks',
    description: 'High water bill or hidden leak in Springfield MO? Thermal imaging finds leaks in walls & underground — no demolition. Call (417) 373-4862.',
    canonical: `${SITE_URL}/leak-detection-springfield-mo`,
    h1: 'Leak Detection Springfield MO — Accurate Water Leak Detection',
  },
  heater: {
    title: 'Water Heater Repair Springfield MO | Same Day Service',
    description: 'No hot water in Springfield MO? We repair all water heaters same day. Tank & tankless. From $150. Upfront pricing. Call (417) 373-4862.',
    canonical: `${SITE_URL}/water-heater-repair-springfield-mo`,
    h1: 'Water Heater Repair Springfield MO — Hot Water System Experts',
  },
  sewer: {
    title: 'Sewer Line Repair Springfield MO | Camera + Trenchless',
    description: 'Sewer problems in Springfield MO? Camera inspection + trenchless repair available. Same day. Licensed. From $350. Call (417) 373-4862.',
    canonical: `${SITE_URL}/sewer-line-repair-springfield-mo`,
    h1: 'Sewer Line Repair Springfield MO — Professional Sewer Plumbing',
  },
  pipe: {
    title: 'Pipe Repair & Repiping Springfield MO | Same Day',
    description: 'Leaking, burst, or corroded pipes in Springfield MO? We repair or repipe same day. All pipe types. Licensed. Upfront pricing. (417) 373-4862.',
    canonical: `${SITE_URL}/pipe-repair-installation-springfield-mo`,
    h1: 'Pipe Repair & Installation Springfield MO',
  },
  waterHeaterInstall: {
    title: 'Water Heater Installation Springfield MO | Same-Week',
    description: 'New water heater installation in Springfield MO — tank & tankless, all brands. Old unit removal included. Call (417) 373-4862.',
    canonical: `${SITE_URL}/water-heater-installation-springfield-mo`,
    h1: 'Water Heater Installation in Springfield, MO',
  },
  tanklessInstall: {
    title: 'Tankless Water Heater Installation Springfield MO',
    description: 'Tankless water heater installation in Springfield MO. Endless hot water, lower costs. All brands. Call (417) 373-4862.',
    canonical: `${SITE_URL}/tankless-water-heater-installation-springfield-mo`,
    h1: 'Tankless Water Heater Installation in Springfield, MO',
  },
  waterSoftener: {
    title: 'Water Softener Installation Springfield MO | Hard Water Fix',
    description: 'Water softener & filtration installation in Springfield MO. Free water test. Call (417) 373-4862.',
    canonical: `${SITE_URL}/water-softener-installation-springfield-mo`,
    h1: 'Water Softener Installation in Springfield, MO',
  },
  gasLine: {
    title: 'Gas Line Repair & Installation Springfield MO | Licensed',
    description: 'Licensed gas line installation & repair in Springfield MO. New hookups, leak repair, code-compliant. Call (417) 373-4862.',
    canonical: `${SITE_URL}/gas-line-repair-installation-springfield-mo`,
    h1: 'Gas Line Repair & Installation in Springfield, MO',
  },
  repiping: {
    title: 'Whole-Home Repiping Springfield MO | PEX & Copper',
    description: 'Whole-home repiping in Springfield MO for older homes with failing pipes. PEX & copper. Call (417) 373-4862.',
    canonical: `${SITE_URL}/repiping-springfield-mo`,
    h1: 'Whole-Home Repiping in Springfield, MO',
  },
  sewerCamera: {
    title: 'Sewer Camera Inspection Springfield MO | HD Video',
    description: 'HD sewer camera inspection in Springfield MO. See the exact problem before you pay for repair. Call (417) 373-4862.',
    canonical: `${SITE_URL}/sewer-camera-inspection-springfield-mo`,
    h1: 'Sewer Camera Inspection in Springfield, MO',
  },
  trenchless: {
    title: 'Trenchless Sewer Repair Springfield MO | No-Dig Repair',
    description: 'Trenchless sewer repair in Springfield MO protects your yard & landscaping. Camera-verified. Call (417) 373-4862.',
    canonical: `${SITE_URL}/trenchless-sewer-repair-springfield-mo`,
    h1: 'Trenchless Sewer Repair in Springfield, MO',
  },
  hydroJetting: {
    title: 'Hydro Jetting Springfield MO | Deep Drain Cleaning',
    description: 'Professional hydro jetting in Springfield MO clears grease, roots & scale. Call (417) 373-4862.',
    canonical: `${SITE_URL}/hydro-jetting-springfield-mo`,
    h1: 'Hydro Jetting in Springfield, MO',
  },
  slabLeak: {
    title: 'Slab Leak Repair Springfield MO | Detection & Repair',
    description: 'Slab leak detection & repair in Springfield MO. Non-invasive detection. Call (417) 373-4862 now.',
    canonical: `${SITE_URL}/slab-leak-repair-springfield-mo`,
    h1: 'Slab Leak Repair in Springfield, MO',
  },
  sumpPump: {
    title: 'Sump Pump Installation & Repair Springfield MO',
    description: 'Sump pump installation, repair & battery backup in Springfield MO. Call (417) 373-4862 today.',
    canonical: `${SITE_URL}/sump-pump-installation-springfield-mo`,
    h1: 'Sump Pump Installation & Repair in Springfield, MO',
  },
  toiletRepair: {
    title: 'Toilet Repair & Installation Springfield MO | Same Day',
    description: 'Toilet repair & installation in Springfield MO. Same-day service. Call (417) 373-4862 now.',
    canonical: `${SITE_URL}/toilet-repair-installation-springfield-mo`,
    h1: 'Toilet Repair & Installation in Springfield, MO',
  },
  faucetFixture: {
    title: 'Faucet & Fixture Installation Springfield MO',
    description: 'Faucet, sink & fixture installation and repair in Springfield MO. Same-day service. Call (417) 373-4862.',
    canonical: `${SITE_URL}/faucet-fixture-installation-springfield-mo`,
    h1: 'Faucet & Fixture Installation in Springfield, MO',
  },
  garbageDisposal: {
    title: 'Garbage Disposal Repair & Installation Springfield MO',
    description: 'Garbage disposal repair & installation in Springfield MO. Same-day service. Call (417) 373-4862.',
    canonical: `${SITE_URL}/garbage-disposal-repair-springfield-mo`,
    h1: 'Garbage Disposal Repair & Installation in Springfield, MO',
  },
  backflowTesting: {
    title: 'Backflow Testing & Certification Springfield MO',
    description: 'Annual backflow testing & certification in Springfield MO. Fast scheduling. Call (417) 373-4862.',
    canonical: `${SITE_URL}/backflow-testing-springfield-mo`,
    h1: 'Backflow Testing & Certification in Springfield, MO',
  },
  frozenPipe: {
    title: 'Frozen Pipe Repair Springfield MO | Emergency Response',
    description: 'Frozen & burst pipe repair in Springfield MO. Emergency response. Call (417) 373-4862 now.',
    canonical: `${SITE_URL}/frozen-pipe-repair-springfield-mo`,
    h1: 'Frozen Pipe Repair in Springfield, MO',
  },
  remodelPlumbing: {
    title: 'Bathroom & Kitchen Remodel Plumbing Springfield MO',
    description: 'Bathroom & kitchen remodel plumbing in Springfield MO. Code-compliant rough-in. Call (417) 373-4862.',
    canonical: `${SITE_URL}/bathroom-kitchen-remodel-plumbing-springfield-mo`,
    h1: 'Bathroom & Kitchen Remodel Plumbing in Springfield, MO',
  },
  commercial: {
    title: 'Commercial Plumber Springfield MO | Fast Business Response',
    description: 'Commercial plumbing in Springfield MO for restaurants, offices & property managers. Call (417) 373-4862.',
    canonical: `${SITE_URL}/commercial-plumber-springfield-mo`,
    h1: 'Commercial Plumber in Springfield, MO',
  },
  newConstruction: {
    title: 'New Construction Plumbing Springfield MO | Builder Partner',
    description: 'New construction plumbing in Springfield MO for builders & homeowners. Call (417) 373-4862.',
    canonical: `${SITE_URL}/new-construction-plumbing-springfield-mo`,
    h1: 'New Construction Plumbing in Springfield, MO',
  },
}

// ── OPEN GRAPH HELPER ─────────────────────────────────────────
export function buildOpenGraph(meta, path = '') {
  return {
    title: meta.title,
    description: meta.description,
    url: meta.canonical || `${SITE_URL}${path}`,
    siteName: 'Springfield MO Plumber',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Emergency Plumber Springfield MO — 24/7 Fast Response',
      },
    ],
  }
}

// ── TWITTER CARD HELPER ───────────────────────────────────────
export function buildTwitterCard(meta) {
  return {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [`${SITE_URL}/og-image.png`],
  }
}

// ══════════════════════════════════════════════════════════════
//  JSON-LD SCHEMAS
// ══════════════════════════════════════════════════════════════

// ── LOCAL BUSINESS SCHEMA ─────────────────────────────────────
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Plumber'],
  '@id': `${SITE_URL}/#business`,
  name: 'Springfield MO Plumber',
  alternateName: 'Springfield Plumber',
  url: SITE_URL,
  telephone: '+14173734862',
  email: 'springfieldmoplumber@gmail.com',
  description: 'Licensed emergency plumber in Springfield MO — available 24/7. Fast response, upfront pricing, no hidden fees.',
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/favicon.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '220 S Campbell Avenue',
    addressLocality: 'Springfield',
    addressRegion: 'MO',
    postalCode: '65806',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.2090,
    longitude: -93.2923,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Springfield',
      sameAs: 'https://en.wikipedia.org/wiki/Springfield,_Missouri',
    },
    { '@type': 'City', name: 'Nixa' },
    { '@type': 'City', name: 'Ozark' },
    { '@type': 'City', name: 'Republic' },
    { '@type': 'City', name: 'Battlefield' },
    { '@type': 'City', name: 'Willard' },
    { '@type': 'City', name: 'Rogersville' },
    { '@type': 'City', name: 'Strafford' },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  hasMap: 'https://www.google.com/maps/place/220+S+Campbell+Ave,+Springfield,+MO+65806',
  // ✅ Only authoritative directory/social profiles in sameAs
  // GitHub Pages URL removed — it is not an authoritative business profile
  sameAs: [
    'https://www.facebook.com/springfieldmoplumber',
  ],
}

// ── FAQ SCHEMAS ───────────────────────────────────────────────
export const FAQ_SCHEMAS = {
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How fast can an emergency plumber arrive in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our emergency plumbers respond immediately — 24/7/365 — and aim to arrive within 60 minutes in most Springfield MO locations.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer 24/7 plumbing services in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide 24/7 emergency plumbing services in Springfield MO including nights, weekends, and holidays. A real person answers every call.' },
      },
      {
        '@type': 'Question',
        name: 'How much does an emergency plumber cost in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Costs vary by job. We provide a full written estimate after diagnosis — before any work starts. No hidden fees, no surprise charges.' },
      },
      {
        '@type': 'Question',
        name: 'Are your Springfield plumbers licensed and insured?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All our plumbers are licensed by the State of Missouri and carry full liability insurance. Your home is fully protected on every job.' },
      },
      {
        '@type': 'Question',
        name: 'What should I do if a pipe bursts right now?',
        acceptedAnswer: { '@type': 'Answer', text: 'Immediately turn off your main water shutoff valve to stop the flow. Then call us — we dispatch right away. Every minute of water flow increases damage costs.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer same-day service for non-emergencies?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. For standard plumbing repairs and services, we offer same-day and next-morning appointments in most cases throughout Springfield MO and surrounding areas.' },
      },
    ],
  },
  home: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How fast can an emergency plumber arrive in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our emergency plumbers respond immediately — 24/7/365 — and aim to arrive within 60 minutes in most Springfield MO locations.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer 24/7 plumbing services in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide 24/7 emergency plumbing services in Springfield MO including nights, weekends, and holidays. A real person answers every call.' },
      },
      {
        '@type': 'Question',
        name: 'How much does an emergency plumber cost in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Costs vary by job. We provide a full written estimate after diagnosis — before any work starts. No hidden fees, no surprise charges.' },
      },
      {
        '@type': 'Question',
        name: 'Are your Springfield plumbers licensed and insured?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All our plumbers are licensed by the State of Missouri and carry full liability insurance. Your home is fully protected on every job.' },
      },
    ],
  },
  emergency: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I do when a pipe bursts in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Immediately turn off your main water shutoff valve to stop the flow. Then call our emergency plumber in Springfield MO. Every minute of delay increases damage.' },
      },
      {
        '@type': 'Question',
        name: 'How fast does your emergency plumber respond in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'We dispatch immediately upon receiving your call — 24/7. Most Springfield MO locations are reached within 60 minutes.' },
      },
      {
        '@type': 'Question',
        name: 'Do you charge extra for emergency plumbing at night?',
        acceptedAnswer: { '@type': 'Answer', text: 'We provide upfront pricing before starting any work. We never inflate emergency pricing — you approve the cost before we begin.' },
      },
      {
        '@type': 'Question',
        name: 'What plumbing emergencies do you handle in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'We handle all emergencies including burst pipes, sewer backups, overflowing toilets, clogged drains, water heater failures, and severe leaks.' },
      },
    ],
  },
  drain: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does drain cleaning cost in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Drain cleaning costs vary by severity and location. We provide upfront pricing before starting work. Call (417) 373-4862 for a free estimate.' },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I need professional drain cleaning?',
        acceptedAnswer: { '@type': 'Answer', text: 'Signs include slow draining sinks, recurring clogs, bad odors from drains, and gurgling sounds in pipes. These indicate a blockage that needs professional removal.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer same-day drain cleaning in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer same-day drain cleaning service throughout Springfield MO and surrounding areas including Nixa, Ozark, Republic and Battlefield.' },
      },
    ],
  },
  leak: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I know if I have a hidden water leak?',
        acceptedAnswer: { '@type': 'Answer', text: 'Signs include unexpectedly high water bills, water stains on walls or ceilings, mold growth, and decreased water pressure throughout your home.' },
      },
      {
        '@type': 'Question',
        name: 'Can you find leaks without cutting into walls?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We use thermal imaging cameras and acoustic sensors to locate leaks precisely without any unnecessary wall damage.' },
      },
    ],
  },
  heater: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do I have no hot water in my Springfield MO home?',
        acceptedAnswer: { '@type': 'Answer', text: 'Common causes include a failed heating element, pilot light issue, thermostat problem, or sediment buildup. Our plumbers diagnose and fix it same day.' },
      },
      {
        '@type': 'Question',
        name: 'Do you repair tankless water heaters in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We repair both traditional tank and modern tankless water heaters from all major brands in Springfield MO.' },
      },
    ],
  },
  sewer: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are signs of sewer line problems in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Warning signs include multiple slow drains throughout the house, sewage odors, gurgling toilets, and water backing up in unexpected places.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer trenchless sewer repair in Springfield MO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer trenchless sewer repair options that fix sewer lines without digging up your yard, protecting your landscaping and saving money.' },
      },
    ],
  },
  waterHeaterInstall: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does it cost to install a new water heater in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Standard tank installations run $1,200–$2,200 fully installed. Tankless installations range $2,800–$4,500 depending on capacity and any required gas or electrical upgrades.' } },
      { '@type': 'Question', name: 'Is it cheaper to repair or replace my water heater?', acceptedAnswer: { '@type': 'Answer', text: 'If your unit is under 8 years old with an isolated issue, repair is usually cheaper. If it is over 10 years old or the repair cost exceeds about half the price of a new unit, replacement is typically the better long-term value.' } },
      { '@type': 'Question', name: 'Do you remove and dispose of my old water heater?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, removal and disposal of your old unit is included in every installation — no separate haul-away fee.' } },
      { '@type': 'Question', name: 'Do I need a permit to install a water heater in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, water heater installation typically requires a permit in Springfield. We handle permitting as part of our installation service.' } },
    ],
  },
  tanklessInstall: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does tankless water heater installation cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Installed cost typically runs $2,800–$4,500, depending on unit capacity and whether gas line or electrical upgrades are required.' } },
      { '@type': 'Question', name: 'How long do tankless water heaters last compared to tank units?', acceptedAnswer: { '@type': 'Answer', text: 'Tankless units typically last 20+ years with proper maintenance, roughly double the 10–12 year lifespan of a traditional tank water heater.' } },
      { '@type': 'Question', name: 'Do tankless water heaters save money on utility bills?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, typically 8–34% on water heating costs depending on usage, since they only heat water on demand rather than maintaining a constantly heated tank.' } },
    ],
  },
  waterSoftener: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Does Springfield, MO water actually need a softener?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Springfield's municipal water carries moderate hardness that causes scale buildup in pipes, water heaters, and fixtures over time." } },
      { '@type': 'Question', name: 'How much does a water softener installation cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Whole-home systems typically run $1,500–$3,500 installed, depending on capacity and whether combined filtration is included.' } },
      { '@type': 'Question', name: 'How do I know if I have hard water in my home?', acceptedAnswer: { '@type': 'Answer', text: 'Common signs include white scale on faucets, soap that does not lather well, spots on dishes, and a water heater failing sooner than expected.' } },
    ],
  },
  gasLine: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should I do if I smell gas in my Springfield home?', acceptedAnswer: { '@type': 'Answer', text: 'Leave the house immediately without using any switches or appliances, then call your gas utility emergency line and our emergency team right away.' } },
      { '@type': 'Question', name: 'Do I need a permit for gas line work in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, most gas line installation and repair work requires a permit and inspection, which we handle as part of our service.' } },
      { '@type': 'Question', name: 'How much does gas line repair cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Most gas line repairs range from $150–$500 depending on the extent of the damage and accessibility.' } },
    ],
  },
  repiping: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does it cost to repipe a house in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Whole-home repiping typically runs $4,000–$12,000 depending on home size, bathroom count, and whether PEX or copper is used.' } },
      { '@type': 'Question', name: 'Is PEX or copper better for repiping in Missouri?', acceptedAnswer: { '@type': 'Answer', text: 'PEX is the practical choice for most Springfield homes — freeze-resistant, 25–40% less than copper, and fewer joints. Copper is more durable but costs more.' } },
      { '@type': 'Question', name: 'Will I be without water during the repiping process?', acceptedAnswer: { '@type': 'Answer', text: 'We restore water service between work periods wherever possible rather than leaving your entire home without water for the full project duration.' } },
    ],
  },
  sewerCamera: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does a sewer camera inspection cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'A standard inspection costs $250–$400, and the fee is often credited toward any repair work you choose to move forward with.' } },
      { '@type': 'Question', name: 'Should I get a sewer camera inspection before buying a house in Springfield?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, strongly recommended, especially for older homes, since sewer laterals are not part of a standard home inspection.' } },
      { '@type': 'Question', name: 'Will a sewer camera inspection damage my pipes?', acceptedAnswer: { '@type': 'Answer', text: 'No, the camera is non-invasive and simply travels through your existing pipe — no digging or cutting is required.' } },
    ],
  },
  trenchless: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does trenchless sewer repair cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Pipe lining typically runs $80–$250 per linear foot. Pipe bursting is quoted individually based on pipe length and site conditions.' } },
      { '@type': 'Question', name: 'Will trenchless repair damage my landscaping or driveway?', acceptedAnswer: { '@type': 'Answer', text: 'No — trenchless methods access the pipe through one or two small points rather than a full-length trench, protecting the rest of your yard.' } },
      { '@type': 'Question', name: 'Is trenchless sewer repair always possible for a damaged sewer line?', acceptedAnswer: { '@type': 'Answer', text: 'No, severely collapsed pipe or situations requiring a change in grade may still require traditional excavation. We confirm suitability with a camera inspection first.' } },
    ],
  },
  hydroJetting: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does hydro jetting cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Hydro jetting typically costs $300–$600 depending on the length of the line and the severity of buildup.' } },
      { '@type': 'Question', name: 'How is hydro jetting different from a regular drain snake?', acceptedAnswer: { '@type': 'Answer', text: 'A snake punches a path through a clog but often leaves buildup on the pipe walls. Hydro jetting scours the entire pipe circumference, fully removing buildup.' } },
      { '@type': 'Question', name: 'Is hydro jetting safe for all pipes?', acceptedAnswer: { '@type': 'Answer', text: 'Hydro jetting is safe for most modern PVC and cast-iron pipe in good condition. For older or compromised pipe, we recommend a camera inspection first.' } },
    ],
  },
  slabLeak: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I know if I have a slab leak?', acceptedAnswer: { '@type': 'Answer', text: 'Common signs include an unexplained spike in your water bill, a warm spot on the floor, the sound of running water when everything is off, and cracks in flooring or walls.' } },
      { '@type': 'Question', name: 'How much does slab leak repair cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Detection and spot repair typically costs $500–$2,500. More extensive re-routing or re-piping ranges $2,000–$4,000 or more depending on scope.' } },
      { '@type': 'Question', name: 'Can a slab leak be repaired without cutting into the concrete?', acceptedAnswer: { '@type': 'Answer', text: 'In many cases, yes — re-routing the affected line above the slab avoids extensive concrete work while permanently resolving the leak.' } },
    ],
  },
  sumpPump: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does sump pump installation cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'New installation with battery backup typically runs $800–$2,000. Replacing a pump in an existing pit generally costs $300–$800.' } },
      { '@type': 'Question', name: 'Why does battery backup matter for a sump pump?', acceptedAnswer: { '@type': 'Answer', text: 'Power outages often occur during the same severe storms that create the greatest flood risk. Battery backup keeps the pump running during an outage.' } },
      { '@type': 'Question', name: 'How often should a sump pump be replaced?', acceptedAnswer: { '@type': 'Answer', text: 'Most sump pumps have an expected lifespan of 7–10 years. We recommend proactive replacement before failure, especially heading into spring storm season.' } },
    ],
  },
  toiletRepair: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Why does my toilet keep running?', acceptedAnswer: { '@type': 'Answer', text: 'Most running toilets are caused by a worn flapper or a fill valve that will not shut off completely — both typically inexpensive, quick repairs.' } },
      { '@type': 'Question', name: 'How much does toilet repair cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Simple repairs like flapper or fill valve replacement typically cost $100–$250. Wax ring reseating generally runs $150–$300.' } },
      { '@type': 'Question', name: 'How much does a new toilet installation cost?', acceptedAnswer: { '@type': 'Answer', text: 'Full replacement and installation, including the new fixture, typically runs $300–$700 depending on the toilet model.' } },
    ],
  },
  faucetFixture: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does faucet installation cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Labor typically runs $150–$400 depending on complexity, plus the cost of the fixture itself if not already purchased.' } },
      { '@type': 'Question', name: 'Can you install a faucet I have already purchased?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are happy to install fixtures you have purchased, or recommend options that fit your budget and needs.' } },
      { '@type': 'Question', name: 'Do you install frost-free outdoor spigots?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we install frost-free hose bibs, which are less prone to freeze damage than standard outdoor faucets.' } },
    ],
  },
  garbageDisposal: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'My garbage disposal hums but will not spin — what is wrong?', acceptedAnswer: { '@type': 'Answer', text: 'This almost always indicates a jam between the impeller and grind ring. We can typically clear this quickly and safely reset the unit.' } },
      { '@type': 'Question', name: 'How much does garbage disposal repair cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Standard repairs typically cost $100–$250. New installation, including the disposal unit, generally runs $250–$500.' } },
      { '@type': 'Question', name: 'How long do garbage disposals typically last?', acceptedAnswer: { '@type': 'Answer', text: 'Most disposals have an expected lifespan of 8–12 years. Units jamming frequently near or past this age are often more cost-effective to replace.' } },
    ],
  },
  backflowTesting: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does backflow testing cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Standard testing runs $75–$150 per device, depending on device type and site accessibility.' } },
      { '@type': 'Question', name: 'How often is backflow testing required?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential, commercial, and irrigation backflow devices require annual testing and certification to remain compliant.' } },
      { '@type': 'Question', name: 'Do I need backflow testing if I have a sprinkler system?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, nearly all irrigation systems include a required backflow prevention device that needs annual testing under most Missouri requirements.' } },
    ],
  },
  frozenPipe: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What should I do first if I think I have a frozen pipe?', acceptedAnswer: { '@type': 'Answer', text: 'Check for signs of bursting. If you see any, shut off your main water supply immediately and call us. If not burst, opening the faucet slightly can help relieve pressure.' } },
      { '@type': 'Question', name: 'How much does frozen pipe repair cost in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Repair for a single burst pipe section typically costs $150–$600 depending on pipe material, location, and accessibility.' } },
      { '@type': 'Question', name: 'Do you offer emergency frozen pipe repair at night or on weekends?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we respond to frozen and burst pipe emergencies 24/7, including nights, weekends, and holidays.' } },
    ],
  },
  remodelPlumbing: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does remodel plumbing cost for a bathroom in Springfield, MO?', acceptedAnswer: { '@type': 'Answer', text: 'Typically $1,500–$4,000 for fixture relocation and standard rough-in work, with new bathroom additions costing more.' } },
      { '@type': 'Question', name: 'When does plumbing work happen during a remodel?', acceptedAnswer: { '@type': 'Answer', text: 'Rough-in plumbing work happens after demolition but before drywall, flooring, or cabinetry installation.' } },
      { '@type': 'Question', name: 'Do you work directly with my general contractor?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we regularly coordinate directly with general contractors and designers to ensure plumbing work happens at the correct point in your timeline.' } },
    ],
  },
  commercial: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do you offer emergency commercial plumbing service in Springfield?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, commercial emergencies are treated as a priority call given the direct impact on business operations.' } },
      { '@type': 'Question', name: 'Can you clean and maintain grease traps for my restaurant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide grease trap cleaning and maintenance service, helping restaurants avoid costly backups and health code violations.' } },
      { '@type': 'Question', name: 'Do you offer standing service agreements for property managers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we work with property managers and multi-location businesses to establish ongoing service relationships.' } },
    ],
  },
  newConstruction: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do you work directly with home builders and general contractors in Springfield?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we regularly partner with builders and general contractors on new construction projects, coordinating around their build schedule.' } },
      { '@type': 'Question', name: 'Can you consult on plumbing layout during the design phase of a custom home?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are happy to review plans and consult before rough-in begins, since layout decisions are far easier to plan upfront.' } },
      { '@type': 'Question', name: 'Do you handle plumbing permits and inspections for new construction?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we schedule and coordinate all required rough-in and final plumbing inspections with the appropriate authorities.' } },
    ],
  },
}

// ── SERVICE SCHEMA BUILDER ────────────────────────────────────
// NOTE: Pass a service object with a `description` key (or rename `intro` below to match your data shape)
export function buildServiceSchema(service, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description || service.intro || '',
    provider: {
      '@type': 'Plumber',
      name: 'Springfield MO Plumber',
      telephone: '+14173734862',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '220 S Campbell Avenue',
        addressLocality: 'Springfield',
        addressRegion: 'MO',
        postalCode: '65806',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Springfield',
      containedIn: { '@type': 'State', name: 'Missouri' },
    },
    url,
  }
}

// ── BREADCRUMB SCHEMA BUILDER ─────────────────────────────────
// NOTE: Per Google guidelines, the last item (current page) omits the `item` URL property
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1
      const listItem = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      }
      // Current page (last item) should not include the `item` URL per Google spec
      if (!isLast) {
        listItem.item = `${SITE_URL}${item.path}`
      }
      return listItem
    }),
  }
}

// ── WEBSITE SCHEMA ────────────────────────────────────────────
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Springfield MO Plumber',
  description: 'Emergency plumber in Springfield MO — 24/7 fast response',
  inLanguage: 'en-US',
  // ✅ SearchAction enables Google Sitelinks Searchbox in search results
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── SERVICES PAGE SCHEMA ──────────────────────────────────────
export const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services#service`,
  name: 'Plumbing Services',
  description:
    'Professional plumbing services including emergency plumbing, drain cleaning, leak detection, water heater repair, sewer line repair, and pipe installation throughout Springfield and surrounding Missouri communities.',
  provider: {
    '@id': `${SITE_URL}/#business`,
  },
  areaServed: [
    { '@type': 'City', name: 'Springfield' },
    { '@type': 'City', name: 'Nixa' },
    { '@type': 'City', name: 'Ozark' },
    { '@type': 'City', name: 'Republic' },
    { '@type': 'City', name: 'Battlefield' },
    { '@type': 'City', name: 'Willard' },
    { '@type': 'City', name: 'Rogersville' },
    { '@type': 'City', name: 'Strafford' },
  ],
  url: `${SITE_URL}/services`,
}