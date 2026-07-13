import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema, FAQ_SCHEMAS, buildServiceSchema } from '@/lib/seo'
import { SERVICES } from '@/data/services'
import ServiceDetailClient from '@/components/ServiceDetailClient'

const meta    = PAGE_META.frozenPipe
const service = SERVICES.find(s => s.id === 'frozen-pipe')

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

export default function FrozenPipeRepairSpringfieldMoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Frozen Pipe Repair', path: '/frozen-pipe-repair-springfield-mo' },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMAS.frozenPipe) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(service, meta.canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServiceDetailClient serviceId="frozen-pipe" h1={meta.h1} />
    </>
  )
}