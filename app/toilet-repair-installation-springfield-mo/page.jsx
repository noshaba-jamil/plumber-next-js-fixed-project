import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema, FAQ_SCHEMAS, buildServiceSchema } from '@/lib/seo'
import { SERVICES } from '@/data/services'
import ServiceDetailClient from '@/components/ServiceDetailClient'

const meta    = PAGE_META.toiletRepair
const service = SERVICES.find(s => s.id === 'toilet-repair')

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

export default function ToiletRepairInstallationSpringfieldMoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Toilet Repair & Installation', path: '/toilet-repair-installation-springfield-mo' },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMAS.toiletRepair) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(service, meta.canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServiceDetailClient serviceId="toilet-repair" h1={meta.h1} />
    </>
  )
}