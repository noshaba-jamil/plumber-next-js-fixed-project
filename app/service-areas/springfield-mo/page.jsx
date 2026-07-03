import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema } from '@/lib/seo'
 import CityPageClient from '../[city]/CityPageClient'

const meta = PAGE_META.areas

export const metadata = {
  title: 'Plumber in Springfield, MO | 24/7 Emergency Service',
  description: 'Licensed emergency plumber in Springfield, MO. 24/7 response, upfront pricing, no hidden fees. Drain cleaning, leak detection & more. Call (417) 373-4862.',
  keywords: [
    'plumber Springfield MO',
    'emergency plumber Springfield MO',
    'plumbing Springfield Missouri',
    'drain cleaning Springfield MO',
    'leak detection Springfield MO',
    'water heater repair Springfield MO',
    'sewer line repair Springfield MO',
    'pipe repair installation Springfield MO',
    '24/7 emergency plumbing Springfield',
  ].join(', '),
  alternates: {
    canonical: 'https://www.springfieldmoplumber.com/service-areas/springfield-mo',
  },
  openGraph: buildOpenGraph({
    ...meta,
    title: 'Plumber in Springfield, MO | 24/7 Emergency Service',
    description: 'Licensed emergency plumber serving Springfield, MO. 24/7 response, upfront pricing, no hidden fees.',
    image: '/emergencyplumber.webp',
  }),
  twitter: buildTwitterCard({
    ...meta,
    title: 'Plumber in Springfield, MO — 24/7 Emergency Service',
    description: 'Licensed emergency plumber serving Springfield, MO. Call (417) 373-4862.',
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

// ── City data — passed straight into the reusable CityPageClient ───────────
const city = {
  name: 'Springfield',
  state: 'MO',
  zip: '65801–65810',
  zipCodes: ['65802', '65803', '65804', '65806', '65807', '65809', '65810'],
  county: 'Greene County',
  population: '169,000+',
  distance: 'Home Base',
  image: '/images/springfield-mo.webp',
  imgAlt: 'Springfield, Missouri skyline',

  longDesc:
    "Springfield, MO is our home base — and it's where we started answering emergency calls more than 10 years ago. Whether you're in a century-old bungalow near Rountree, a mid-century ranch off South Campbell, or a new build near Republic Road, our licensed plumbers know the specific plumbing challenges that come with Springfield's mix of old and new housing stock. We answer every call personally, 24 hours a day, 7 days a week, and we're usually the fastest plumber to reach you because we're already based here.",

  secondaryDesc:
    "Springfield is the largest city in southwest Missouri, and its plumbing systems reflect decades of growth. Neighborhoods like Rountree, Delaware, and the Historic Walnut Street district have homes built in the 1920s–1950s, many still running on original galvanized steel supply lines or clay sewer laterals. Newer developments around South Creek, Sunshine, and the Republic Road corridor use modern PEX and PVC systems, but even these can develop issues from settling soil, tree root intrusion, or builder-grade fixtures that wear out faster than expected.",

  neighborhoods: [
    'Downtown Springfield', 'Rountree', 'Delaware', 'Historic Walnut Street', 'Phelps Grove',
    'Sunshine', 'Galloway Village', 'Southern Hills', 'Fassnight', 'South Creek',
    'Ward Branch', 'Republic Road corridor',
  ],

  responseTime:
    'Because our team is based directly in Springfield, we typically reach most addresses within the city within 30–60 minutes of your call — faster than plumbers dispatching from surrounding towns. Emergency calls are prioritized immediately, day or night.',

  problems: [
    {
      icon: 'ri-drop-fill',
      title: 'Aging Pipe Corrosion',
      desc: 'Homes built before 1970 often still have galvanized steel supply lines, which corrode from the inside out over decades. This causes low water pressure, rust-colored water, and eventual pinhole leaks. We evaluate whether a targeted repair or a full re-pipe makes more financial sense.',
    },
    {
      icon: 'ri-plant-fill',
      title: 'Tree Root Intrusion',
      desc: "Springfield's mature tree canopy — especially in older neighborhoods — means roots frequently find their way into clay or older PVC sewer laterals through joints and cracks. This shows up as slow drains throughout the house, gurgling toilets, or sewage odors in the yard.",
    },
    {
      icon: 'ri-flask-fill',
      title: 'Hard Water Buildup',
      desc: "Springfield's municipal water carries moderate mineral hardness, which accelerates scale buildup inside water heaters, faucets, and fixtures — shortening their lifespan and reducing efficiency. Homes without a softener or filtration system typically see water heater problems sooner.",
    },
    {
      icon: 'ri-temp-hot-fill',
      title: 'Aging Water Heaters',
      desc: 'Many Springfield homes still have tank water heaters installed 10+ years ago. Sediment buildup from hard water is the most common cause of failure, showing up as popping noises, inconsistent temperatures, or a complete loss of hot water.',
    },
    {
      icon: 'ri-cloud-windy-fill',
      title: 'Storm-Related Drainage Issues',
      desc: 'Heavy spring storms common to southwest Missouri can overwhelm older storm and sanitary sewer connections in parts of the city, leading to backups during periods of heavy rain.',
    },
  ],

  faqs: [
    {
      q: 'How fast can a plumber get to my home in Springfield, MO?',
      a: "Because we're based in Springfield, most calls within city limits are reached in 30–60 minutes. Emergency calls (burst pipes, sewage backups, major leaks) are dispatched immediately and prioritized ahead of routine appointments.",
    },
    {
      q: 'Do you serve all Springfield ZIP codes, including 65802, 65803, 65804, 65806, 65807, 65809, and 65810?',
      a: 'Yes. We serve every neighborhood within Springfield city limits, from downtown and Rountree to the Republic Road corridor and South Creek area.',
    },
    {
      q: 'How much does an emergency plumber cost in Springfield, MO?',
      a: 'Most emergency repairs in Springfield range from $150–$500 depending on the issue. We always provide a written estimate after diagnosis and before any work begins — no surprise charges.',
    },
    {
      q: 'My Springfield home was built before 1970 — should I be worried about my pipes?',
      a: "Homes from this era often have galvanized steel supply lines that corrode internally over time, causing low pressure and eventual leaks. We recommend a plumbing inspection if you notice rust-colored water, declining pressure, or you've never had the system evaluated.",
    },
    {
      q: 'Why do I have tree roots in my sewer line?',
      a: "Springfield's mature trees send roots toward the moisture and nutrients inside sewer pipes, entering through small cracks or joint gaps in older clay or PVC lines. Left untreated, this causes blockages or pipe collapse. We clear roots mechanically and can install a protective liner to prevent recurrence.",
    },
    {
      q: "Is Springfield's water hard on my plumbing?",
      a: 'Yes, moderately. Mineral buildup from Springfield\'s water supply accelerates wear on water heaters and fixtures. A water softener or filtration system can extend the life of your plumbing system significantly.',
    },
    {
      q: 'Do you offer same-day service in Springfield, MO?',
      a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments. Emergency issues are handled immediately, any time of day or night.',
    },
    {
      q: 'Are you licensed to work in Springfield and the state of Missouri?',
      a: 'Yes. All of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.',
    },
    {
      q: 'What should I do if my sewer backs up in my Springfield home?',
      a: 'Stop using water immediately (toilets, sinks, showers) to avoid worsening the backup, and call us right away. We dispatch emergency crews for sewage backups as a top priority due to the health risk involved.',
    },
    {
      q: 'Do you work on both older homes and new construction in Springfield?',
      a: 'Yes. Our technicians are equipped to work on original galvanized and cast-iron systems in historic Springfield homes as well as modern PEX and PVC systems in newer developments.',
    },
  ],
}

const citySlug = 'springfield-mo'

export default function SpringfieldMoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Springfield, MO', path: '/service-areas/springfield-mo' },
  ])

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Springfield Plumbing',
    telephone: '+14173734862',
    areaServed: {
      '@type': 'City',
      name: 'Springfield, MO',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Springfield',
      addressRegion: 'MO',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    url: 'https://www.springfieldmoplumber.com/service-areas/springfield-mo',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CityPageClient city={city} citySlug={citySlug} />
    </>
  )
}