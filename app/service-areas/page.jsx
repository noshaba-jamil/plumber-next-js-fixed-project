 import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema } from '@/lib/seo'
import ServiceAreasClient from '@/components/ServiceAreasClient'

const meta = PAGE_META.areas

// ── Keywords covering all service area cities for Google ──────────────────────
// Title: 53 chars ✅  Description: 143 chars ✅ — within Google's display limits
export const metadata = {
  title: 'Plumber Springfield MO | Nixa, Ozark, Republic & More',
  description: 'Licensed plumber in Springfield, Nixa, Ozark, Republic & Willard MO. Emergency 24/7, drain cleaning & water heater repair. Call (417) 373-4862.',
  keywords: [
    'plumber Springfield MO',
    'plumbing Springfield Missouri',
    'emergency plumber Springfield MO',
    'plumber Nixa MO',
    'plumbing Nixa Missouri',
    'plumber Ozark MO',
    'plumbing Ozark Missouri',
    'plumber Republic MO',
    'plumber Battlefield MO',
    'plumber Willard MO',
    'plumber Rogersville MO',
    'plumber Strafford MO',
    'drain cleaning Springfield MO',
    'water heater repair Springfield MO',
    'sewer line repair Springfield MO',
    '24/7 emergency plumbing Springfield',
  ].join(', '),
  alternates: {
    canonical: meta.canonical || 'https://springfieldmoplumber.com/service-areas',
  },
  openGraph: buildOpenGraph({
    ...meta,
    title: 'Plumber Springfield MO | Nixa, Ozark, Republic & Nearby',
    description: 'Licensed plumber in Springfield MO and nearby cities. Emergency plumbing 24/7, drain cleaning & water heater repair. Serving Nixa, Ozark, Republic, Battlefield & Willard.',
    image: '/emergencyplumber.webp',
  }),
  twitter: buildTwitterCard({
    ...meta,
    title: 'Plumber Springfield MO & Nearby Cities',
    description: 'Licensed plumber in Springfield MO — serving Nixa, Ozark, Republic, Battlefield & Willard MO. Emergency 24/7, drain cleaning & water heater repair.',
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

export default function ServiceAreasPage() {
  // ── Breadcrumb Schema ──────────────────────────────────────────────────────
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ])

  // ── SiteLinks SearchBox / WebPage schema ──────────────────────────────────
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Plumbing Service Areas — Springfield MO & Surrounding Cities",
    "description": "Licensed plumbers serving Springfield, Nixa, Ozark, Republic, Battlefield, Willard, Rogersville, Strafford, Clever and Billings Missouri.",
    "url": "https://www.springfieldmoplumber.com//service-areas",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Springfield Plumbing",
      "url": "https://www.springfieldmoplumber.com/"
    },
    "breadcrumb": breadcrumb,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "#service-areas-heading"]
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/*
        h1 prop passes the SEO-targeted H1 through to the client component.
        Keep H1 unique, keyword-rich, and matching search intent.
      */}
      <ServiceAreasClient
        h1="Plumbing Services in Springfield MO & Surrounding Cities — Nixa, Ozark, Republic & More"
      />
    </>
  )
}