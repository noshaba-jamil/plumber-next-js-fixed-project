import { PAGE_META, buildOpenGraph, buildTwitterCard, FAQ_SCHEMAS, LOCAL_BUSINESS_SCHEMA } from '@/lib/seo'
import HomeClient from '@/components/HomeClient'

const meta = PAGE_META.home

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMAS.home) }}
      />
      <HomeClient h1={meta.h1} />
    </>
  )
}
