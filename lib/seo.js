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