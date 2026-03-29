import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema, buildServiceSchema } from '@/lib/seo'
import { SERVICES } from '@/data/services'
import ServiceDetailClient from '@/components/ServiceDetailClient'

const meta    = PAGE_META.pipe
const service = SERVICES.find(s => s.id === 'pipe')

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

// Dedicated FAQ schema for pipe repair page
const PIPE_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if I need pipe repair or full pipe replacement in Springfield MO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If only one section is leaking and the pipe is less than 20 years old, repair is usually sufficient. Older galvanized or lead pipes, or multiple leaks throughout the home, typically require full re-piping. Our plumbers diagnose and recommend the most cost-effective solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of pipes do you repair and install in Springfield MO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We repair and install all pipe types used in Springfield MO homes — copper, PVC, CPVC, and PEX tubing. We also handle full whole-home re-piping for older properties with failing galvanized or cast iron pipes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does pipe repair cost in Springfield MO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single pipe repair in Springfield MO typically costs $200–$600 depending on the pipe type, location, and complexity. Full re-piping costs more. We always provide a written upfront estimate before any work begins — no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fix a leaking pipe the same day in Springfield MO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most pipe repairs in Springfield MO are completed on the same visit. Our plumbers carry common pipe materials and fittings on every service vehicle to fix most leaks on the spot.',
      },
    },
  ],
}

export default function PipeRepairInstallationSpringfieldMoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pipe Repair', path: '/pipe-repair-installation-springfield-mo' },
  ])
  return (
    <>
      {/* FIX: FAQ schema was missing from this page — now added */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PIPE_FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(service, meta.canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServiceDetailClient serviceId="pipe" h1={meta.h1} />
    </>
  )
}
