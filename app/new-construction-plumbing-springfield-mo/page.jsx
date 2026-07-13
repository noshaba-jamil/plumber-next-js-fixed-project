import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema, FAQ_SCHEMAS, buildServiceSchema } from '@/lib/seo'
import { SERVICES } from '@/data/services'
import ServiceDetailClient from '@/components/ServiceDetailClient'

const meta    = PAGE_META.newConstruction
const service = SERVICES.find(s => s.id === 'new-construction')

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

export default function NewConstructionPlumbingSpringfieldMoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'New Construction Plumbing', path: '/new-construction-plumbing-springfield-mo' },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMAS.newConstruction) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(service, meta.canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServiceDetailClient serviceId="new-construction" h1={meta.h1} />
    </>
  )
}