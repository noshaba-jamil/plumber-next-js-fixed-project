import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema, FAQ_SCHEMAS } from '@/lib/seo'
import FAQClient from '@/components/FAQClient'

const meta = PAGE_META.faq

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

// Dedicated FAQ schema for the /faq page — combines home + emergency FAQs
const FAQ_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ...FAQ_SCHEMAS.home.mainEntity,
    ...FAQ_SCHEMAS.emergency.mainEntity,
  ],
}

export default function FAQPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ])
  return (
    <>
      {/* Correct: uses dedicated FAQ page schema, not homepage schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <FAQClient h1={meta.h1} />
    </>
  )
}
