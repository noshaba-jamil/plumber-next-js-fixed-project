import { Inter } from 'next/font/google'
import { BASE_METADATA, LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA } from '@/lib/seo'
import SiteShell from '@/components/SiteShell'
import '@/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// ── ROOT METADATA ─────────────────────────────────────────────
export const metadata = {
  ...BASE_METADATA,
  title: {
    default: 'Emergency Plumber Springfield MO | 24/7',
    template: '%s | Springfield Emergency Plumbing',
  },
  description: 'Licensed emergency plumber in Springfield MO. 24/7 fast response for burst pipes, leaks & drain issues. No hidden fees. Call now: +1 (417) 373-4862.',
}

export default function RootLayout({ children }) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://springfieldmoplumber.com'
  const GA_ID    = process.env.NEXT_PUBLIC_GA_ID    || ''
  const GTM_ID   = process.env.NEXT_PUBLIC_GTM_ID   || ''

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ── PRECONNECTS (performance) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* ── FONTS ── */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Syne:wght@600;700;800;900&display=swap" rel="stylesheet" />

        {/* ── ICONS ── */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />

        {/* ── THREE.JS (3D hero) ── */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />

        {/* ── FAVICON ── */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E8321C" />

        {/* ── JSON-LD SCHEMAS ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />

        {/* ── GOOGLE TAG MANAGER ── */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}

        {/* ── GOOGLE ANALYTICS 4 ── */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true});
// Track phone clicks
document.addEventListener('click',function(e){
  const a=e.target.closest('a[href^="tel:"]');
  if(a)gtag('event','phone_click',{event_category:'engagement',event_label:a.href});
});`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {/* GTM noscript */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0" width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
