import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema, FAQ_SCHEMAS, buildServiceSchema } from '@/lib/seo'
import { SERVICES } from '@/data/services'
import ServiceDetailClient from '@/components/ServiceDetailClient'

const meta    = PAGE_META.commercial
const service = SERVICES.find(s => s.id === 'commercial')

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

export default function CommercialPlumberSpringfieldMoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Commercial Plumbing', path: '/commercial-plumber-springfield-mo' },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMAS.commercial) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(service, meta.canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServiceDetailClient serviceId="commercial" h1={meta.h1} />
    </>
  )
}