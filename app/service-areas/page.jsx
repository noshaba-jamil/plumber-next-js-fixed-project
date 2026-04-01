 import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema } from '@/lib/seo'
import ServiceAreasClient from '@/components/ServiceAreasClient'

const meta = PAGE_META.areas

// ── Keywords covering all service area cities for Google ──────────────────────
// Title: ~60 chars, Description: ~155 chars — within Google's display limits
export const metadata = {
  title: meta.title || 'Plumber Springfield MO | Nixa, Ozark, Republic & Nearby Cities',
  description: meta.description || 'Licensed plumbers serving Springfield MO, Nixa, Ozark, Republic, Battlefield, Willard, Rogersville & Strafford. 24/7 emergency plumbing, drain cleaning & water heater repair. Fast response.',
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
    canonical: meta.canonical || 'https://yoursite.com/service-areas',
  },
  openGraph: buildOpenGraph({
    ...meta,
    title: 'Plumber Springfield MO & Nearby Cities | Nixa, Ozark, Republic',
    description: 'Professional plumbing in Springfield MO and surrounding cities. Emergency plumbing, drain cleaning, water heater repair. Serving Nixa, Ozark, Republic, Battlefield, Willard, Rogersville & Strafford.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  }),
  twitter: buildTwitterCard({
    ...meta,
    title: 'Plumber Springfield MO & Nearby Cities',
    description: 'Professional plumbing in Springfield MO and all surrounding communities — Nixa, Ozark, Republic, Battlefield, Willard, Rogersville & Strafford.',
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
    "url": "https://yoursite.com/service-areas",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Springfield Plumbing",
      "url": "https://yoursite.com"
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