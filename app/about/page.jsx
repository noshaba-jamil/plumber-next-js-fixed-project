import { PAGE_META, buildOpenGraph, buildTwitterCard, buildBreadcrumbSchema } from '@/lib/seo'
import AboutClient from '@/components/AboutClient'

const meta = PAGE_META.about

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: buildOpenGraph(meta),
  twitter: buildTwitterCard(meta),
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
])

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AboutClient h1={meta.h1} />
    </>
  )
}
