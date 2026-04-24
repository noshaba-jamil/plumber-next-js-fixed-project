 /**
 * SEO Configuration — Centralized metadata for all pages
 * ✅ WWW consistent across all URLs
 * ✅ Professional email in schema
 * ✅ @type array — LocalBusiness + Plumber
 * ✅ aggregateRating removed (add later with real review data)
 * ✅ All canonical URLs correct
 * ✅ og-image.png consistent everywhere
 * ✅ BASE_METADATA has no self-references or duplicate keys
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

// ── PAGE METADATA ─────────────────────────────────────────────
export const PAGE_META = {
  home: {
    title: 'Emergency Plumber Springfield MO | 24/7',
    description: 'Licensed emergency plumber in Springfield MO. 24/7 fast response for burst pipes, leaks & drain issues. No hidden fees. Call now: (417) 373-4862.',
    canonical: `${SITE_URL}`,
    h1: 'Emergency Plumber in Springfield MO — 24/7 Fast Plumbing Repair',
  },
  services: {
    title: 'Plumbing Services Springfield MO | Licensed',
    description: 'Complete plumbing services in Springfield MO — emergency repairs, drain cleaning, leak detection, water heater & sewer repair. Fast response. Call now.',
    canonical: `${SITE_URL}/services`,
    h1: 'Professional Plumbing Services in Springfield MO',
  },
  about: {
    title: 'About Springfield MO Plumbers | Licensed Team',
    description: 'Licensed & insured Springfield MO plumbers with 10+ years experience. Trusted by thousands of homeowners. Upfront pricing, 24/7 availability.',
    canonical: `${SITE_URL}/about`,
    h1: 'About Our Plumbing Company in Springfield MO',
  },
  contact: {
    title: 'Contact Emergency Plumber Springfield MO',
    description: "Contact Springfield MO's trusted emergency plumber. 24/7 availability. Fast response. Call (417) 373-4862 or submit our quick form for immediate help.",
    canonical: `${SITE_URL}/contact`,
    h1: 'Contact Our Emergency Plumber in Springfield MO',
  },
  faq: {
    title: 'Plumbing FAQ Springfield MO | Common Questions',
    description: 'Answers to common plumbing questions in Springfield MO. Costs, response times, emergency services & more. Licensed plumbers available 24/7.',
    canonical: `${SITE_URL}/faq`,
    h1: 'Frequently Asked Questions — Emergency Plumber Springfield MO',
  },
  areas: {
    title: 'Service Areas | Springfield MO Plumber',
    description: 'Emergency plumbing services in Springfield, Nixa, Ozark, Republic & Battlefield MO. Fast local response. Licensed & insured. Available 24/7.',
    canonical: `${SITE_URL}/service-areas`,
    h1: 'Plumbing Service Areas — Springfield MO & Surrounding Cities',
  },
  emergency: {
    title: 'Emergency Plumber Springfield MO | 24hr',
    description: 'Burst pipe? Sewer backup? Our emergency plumber in Springfield MO responds fast — 24/7/365. Licensed, insured. No hidden fees. Call now.',
    canonical: `${SITE_URL}/emergency-plumber-springfield-mo`,
    h1: 'Emergency Plumber Springfield MO — 24 Hour Plumbing Services',
  },
  drain: {
    title: 'Drain Cleaning Springfield MO | Same Day',
    description: 'Professional drain cleaning in Springfield MO. Blocked drains cleared same day. Hydro-jetting & snaking. Upfront pricing. Call (417) 373-4862.',
    canonical: `${SITE_URL}/drain-cleaning-springfield-mo`,
    h1: 'Drain Cleaning Springfield MO — Professional Drain Unclogging',
  },
  leak: {
    title: 'Leak Detection Springfield MO | Thermal',
    description: 'Advanced leak detection in Springfield MO using thermal imaging. Find hidden water leaks fast without wall damage. Licensed plumbers. Call now.',
    canonical: `${SITE_URL}/leak-detection-springfield-mo`,
    h1: 'Leak Detection Springfield MO — Accurate Water Leak Detection',
  },
  heater: {
    title: 'Water Heater Repair Springfield MO | Fast',
    description: 'Water heater repair in Springfield MO — tank & tankless. Same day service in most cases. Licensed plumbers. Upfront pricing. Call (417) 373-4862.',
    canonical: `${SITE_URL}/water-heater-repair-springfield-mo`,
    h1: 'Water Heater Repair Springfield MO — Hot Water System Experts',
  },
  sewer: {
    title: 'Sewer Line Repair Springfield MO | Camera',
    description: 'Sewer line repair in Springfield MO with HD camera inspection. Trenchless options available. Fast response. Licensed & insured. Call now.',
    canonical: `${SITE_URL}/sewer-line-repair-springfield-mo`,
    h1: 'Sewer Line Repair Springfield MO — Professional Sewer Plumbing',
  },
  pipe: {
    title: 'Pipe Repair Springfield MO | All Types',
    description: 'Expert pipe repair & installation in Springfield MO. Copper, PVC & PEX. From single leaks to full re-piping. Licensed plumbers. Call now.',
    canonical: `${SITE_URL}/pipe-repair-installation-springfield-mo`,
    h1: 'Pipe Repair & Installation Springfield MO',
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
        'Monday','Tuesday','Wednesday',
        'Thursday','Friday','Saturday','Sunday',
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
  sameAs: [
    'https://www.facebook.com/springfieldmoplumber',
    'https://www.yelp.com/biz/springfield-mo-plumber',
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
}

// ── SERVICE SCHEMA BUILDER ────────────────────────────────────
export function buildServiceSchema(service, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.intro,
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
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

// ── WEBSITE SCHEMA ────────────────────────────────────────────
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: 'Springfield MO Plumber',
  description: 'Emergency plumber in Springfield MO — 24/7 fast response',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}