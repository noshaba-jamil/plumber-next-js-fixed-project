  import { PAGE_META, buildOpenGraph, buildTwitterCard, 
  buildBreadcrumbSchema, FAQ_SCHEMAS, buildServiceSchema } from '@/lib/seo'
import { SERVICES } from '@/data/services'
import ServiceDetailClient from '@/components/ServiceDetailClient'

const meta    = PAGE_META.emergency
const service = SERVICES.find(s => s.id === 'emergency')

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home',     path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Emergency Plumber Springfield MO', 
    path: '/emergency-plumber-springfield-mo' },
])

const faqSchema     = FAQ_SCHEMAS.emergency
const serviceSchema = buildServiceSchema(service, meta.canonical)

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

export default function EmergencyPlumberSpringfieldMoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServiceDetailClient serviceId="emergency" h1={meta.h1} />
    </>
  )
}