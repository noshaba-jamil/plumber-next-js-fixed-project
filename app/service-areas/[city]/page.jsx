 import { notFound } from 'next/navigation'
import CityPageClient from './CityPageClient'

// ─── City Data ────────────────────────────────────────────────────────────────
export const CITY_DATA = {
  'springfield-mo': {
    name: 'Springfield',
    state: 'MO',
    zip: '65801, 65802, 65803, 65804, 65806, 65807',
    population: '~170,000',
    distance: 'Primary Service Area',
    county: 'Greene County',
    image: '/springfield.webp',
    imgAlt: 'Licensed emergency plumber serving Springfield MO',
    desc: 'Our primary service area. We serve all of Springfield MO — Downtown, Midtown, Galloway, Southern Hills, and all 34 city neighborhoods. 24/7 emergency plumbing, drain cleaning, leak detection, water heater repair, sewer line repair, and pipe installation.',
    neighborhoods: ['Downtown', 'Midtown', 'Galloway', 'Southern Hills', 'SW Springfield', 'Republic Road corridor'],
    longDesc: 'Springfield, Missouri is our home base and primary service area. Our licensed plumbers cover every zip code and neighborhood in Springfield — from Downtown to Southern Hills, from Galloway Village to the Republic Road corridor. Whether you face a burst pipe at 2am, a backed-up sewer on a Sunday, or a water heater failure before work, we answer every call and dispatch immediately. No voicemail, no hold music, no delays.',
  },
  'nixa-mo': {
    name: 'Nixa',
    state: 'MO',
    zip: '65714',
    population: '~25,000',
    distance: '~12 miles south of Springfield',
    county: 'Christian County',
    image: '/nixa.webp',
    imgAlt: 'Licensed plumber serving Nixa MO residents',
    desc: 'Professional plumbing in Nixa, MO — emergency repairs, drain cleaning, leak detection, and water heater repair. Typically on-site within 60 minutes from our Springfield base.',
    neighborhoods: ['Nixa City Center', 'Christian County', 'New Nixa subdivisions', 'Nicholas Road corridor'],
    longDesc: 'Nixa, Missouri is one of our most active service areas — just 12 miles south of our Springfield headquarters. Our licensed plumbers regularly serve Nixa homeowners and businesses with emergency plumbing, drain cleaning, water heater repair, leak detection, and sewer line services. For most Nixa locations we are on-site within 60 minutes of your call.',
  },
  'ozark-mo': {
    name: 'Ozark',
    state: 'MO',
    zip: '65721',
    population: '~20,000',
    distance: '~14 miles south of Springfield',
    county: 'Christian County',
    image: '/ozark.webp',
    imgAlt: 'Professional plumber fixing drain in Ozark MO home',
    desc: 'Reliable plumbing for Ozark, MO residents — fast emergency response, sewer line inspection, pipe repair, and full residential plumbing throughout Ozark and Christian County.',
    neighborhoods: ['Ozark City Center', 'Christian County', 'James River corridor', 'Finley River area'],
    longDesc: 'Ozark, Missouri sits 14 miles south of Springfield along the James River corridor. We serve Ozark homeowners and businesses with the same 24/7 availability as our Springfield clients. Emergency plumbing, sewer camera inspections, drain cleaning, pipe repair, and water heater services — all with upfront pricing and no surprise fees.',
  },
  'republic-battlefield-mo': {
    name: 'Republic & Battlefield',
    state: 'MO',
    zip: '65738, 65619',
    population: '~18,000+',
    distance: '~12 miles SW of Springfield',
    county: 'Greene County',
    image: '/Battlefield.webp',
    imgAlt: 'Plumber repairing sewer line in Republic and Battlefield MO',
    desc: 'Full plumbing services in Republic and Battlefield — emergency plumbing, sewer line repair, pipe installation, and new construction plumbing for all property types.',
    neighborhoods: ['Republic City', 'Battlefield', 'SW corridor', 'James River Road area'],
    longDesc: 'Republic and Battlefield, Missouri are located just 12 miles southwest of Springfield along the James River Road corridor. We provide full residential and commercial plumbing services to both communities — emergency response, sewer line repair, water heater installation, drain cleaning, and pipe repair. Most emergency calls in Republic and Battlefield are reached within 45–60 minutes.',
  },
  'willard-mo': {
    name: 'Willard',
    state: 'MO',
    zip: '65781',
    population: '~6,000',
    distance: '~13 miles NW of Springfield',
    county: 'Greene County',
    image: '/Willard Missouri home.webp',
    imgAlt: 'Leak detection and plumbing services in Willard MO',
    desc: 'Expert plumbing for Willard, MO — leak detection, pipe repair, drain cleaning, and emergency plumbing for homes and businesses in Willard and rural Greene County.',
    neighborhoods: ['Willard city', 'Rural Greene County', 'North Springfield corridor'],
    longDesc: 'Willard, Missouri is a growing community 13 miles northwest of Springfield in Greene County. We serve Willard homeowners with the same high standards as our Springfield clients — 24/7 emergency response, drain cleaning, leak detection, water heater repair, and pipe installation. Rural properties in Greene County northwest of Willard are also within our service area.',
  },
  'rogersville-mo': {
    name: 'Rogersville',
    state: 'MO',
    zip: '65742',
    population: '~4,500',
    distance: '~18 miles east of Springfield',
    county: 'Webster County',
    image: '/Rogersville.webp',
    imgAlt: 'Water heater installation and plumbing repair in Rogersville MO',
    desc: 'Trusted plumbing in Rogersville, MO — water heater installation, drain cleaning, and emergency leak repairs for Webster County homeowners and businesses.',
    neighborhoods: ['Rogersville city', 'Webster County', 'James River area', 'US-60 corridor'],
    longDesc: 'Rogersville, Missouri sits 18 miles east of Springfield in Webster County along the US-60 corridor. Our licensed plumbers make regular service runs to Rogersville for water heater installation, drain cleaning, emergency leak repairs, and sewer line service. We treat every Rogersville call with the same urgency and upfront pricing as our Springfield clients.',
  },
  'strafford-mo': {
    name: 'Strafford',
    state: 'MO',
    zip: '65757',
    population: '~2,500',
    distance: '~15 miles NE of Springfield',
    county: 'Greene County',
    image: '/Strafford Missouri.webp',
    imgAlt: 'Pipe installation and plumbing services in Strafford MO',
    desc: 'Quality plumbing for Strafford, MO — emergency repairs, pipe installation, water heater service, and drain cleaning along the I-44 corridor northeast of Springfield.',
    neighborhoods: ['Strafford city', 'I-44 corridor', 'Greene County east', 'Rural east Greene County'],
    longDesc: 'Strafford, Missouri is located 15 miles northeast of Springfield along the I-44 corridor in eastern Greene County. We serve Strafford homeowners and small businesses with emergency plumbing, pipe repair and installation, water heater service, and drain cleaning. Properties along the I-44 corridor east of Springfield are well within our standard service radius.',
  },
  'clever-billings-mo': {
    name: 'Clever & Billings',
    state: 'MO',
    zip: '65631, 65610',
    population: '~2,000+',
    distance: '~20 miles SW of Springfield',
    county: 'Christian County',
    image: '/Billings Missouri.webp',
    imgAlt: 'Emergency plumbing and drain cleaning in Clever and Billings MO',
    desc: 'Plumbing in Clever and Billings — emergency plumbing, drain cleaning, and water heater repair for rural Christian County homeowners and small businesses.',
    neighborhoods: ['Clever city', 'Billings', 'Christian County SW', 'Rural southwest corridor'],
    longDesc: 'Clever and Billings, Missouri are rural communities in southwestern Christian County, approximately 20 miles from our Springfield base. We serve homeowners and small businesses in both towns with emergency plumbing, drain cleaning, water heater repair, and pipe installation. For properties in this area we always confirm dispatch availability and pricing before sending a technician.',
  },
}

// ─── Static Params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(CITY_DATA).map(city => ({ city }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export function generateMetadata({ params }) {
  const city = CITY_DATA[params.city]
  if (!city) return {}
  return {
    title: `Plumber in ${city.name}, MO | 24/7 Emergency Plumbing | Springfield MO Plumber`,
    description: `Licensed plumber serving ${city.name}, MO (${city.zip}). 24/7 emergency plumbing, drain cleaning, water heater repair & sewer line service. Fast response. Call +1 (417) 373-4862.`,
    keywords: `plumber ${city.name} MO, emergency plumber ${city.name} Missouri, drain cleaning ${city.name}, water heater repair ${city.name} MO, plumbing ${city.name} Missouri`,
    alternates: {
      canonical: `https://www.springfieldmoplumber.com/service-areas/${params.city}`,
    },
    openGraph: {
      title: `Plumber in ${city.name}, MO | 24/7 Emergency Plumbing`,
      description: `Licensed plumber serving ${city.name}, MO. 24/7 emergency plumbing, drain cleaning, water heater repair. Fast response — call +1 (417) 373-4862.`,
      url: `https://www.springfieldmoplumber.com/service-areas/${params.city}`,
      siteName: 'Springfield MO Plumber',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default function CityServiceAreaPage({ params }) {
  const city = CITY_DATA[params.city]
  if (!city) notFound()

  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingBusiness",
    "name": "Springfield MO Plumber",
    "url": "https://www.springfieldmoplumber.com",
    "telephone": "+14173734862",
    "email": "nosmal1083@gmail.com",
    "description": `Licensed plumber serving ${city.name}, MO — 24/7 emergency plumbing, drain cleaning, water heater repair, and sewer line service.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "220 S Campbell Avenue",
      "addressLocality": "Springfield",
      "addressRegion": "MO",
      "postalCode": "65806",
      "addressCountry": "US"
    },
    "areaServed": { "@type": "City", "name": city.name, "addressRegion": "MO" },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",          "item": "https://www.springfieldmoplumber.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.springfieldmoplumber.com/service-areas" },
      { "@type": "ListItem", "position": 3, "name": `Plumber in ${city.name}, MO`, "item": `https://www.springfieldmoplumber.com/service-areas/${params.city}` },
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient city={city} citySlug={params.city} />
    </>
  )
}