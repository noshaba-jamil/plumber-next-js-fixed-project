 import { Inter, DM_Serif_Display, Syne } from 'next/font/google'
import Script from 'next/script'
import { BASE_METADATA, LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA } from '@/lib/seo'
import SiteShell from '@/components/SiteShell'
import '@/styles/global.css'

// ── ALL FONTS via next/font (zero render-blocking) ──
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-serif',
})

 // AFTER
const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],  // ✅ removed 900
  display: 'swap',
  variable: '--font-syne',
})

export const metadata = {
  ...BASE_METADATA,
  title: {
    default: 'Emergency Plumber Springfield MO | 24/7',
    template: '%s | Springfield Emergency Plumbing',
  },
  description: 'Licensed emergency plumber in Springfield MO. 24/7 fast response for burst pipes, leaks & drain issues. No hidden fees. Call now: +1 (417) 373-4862.',
  metadataBase: new URL('https://www.springfieldmoplumber.com'),
}

export default function RootLayout({ children }) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'
  const GA_ID    = process.env.NEXT_PUBLIC_GA_ID    || ''
  const GTM_ID   = process.env.NEXT_PUBLIC_GTM_ID   || ''

  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${syne.variable}`}>
      <head>
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
      </head>
      <body>
        {/* ── GTM noscript ── */}
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

        {/* ── REMIXICON — loads after page renders ── */}
        <Script
          src="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          strategy="lazyOnload"
        />

        {/* ── THREE.JS — loads after page is interactive ── */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="afterInteractive"
        />

        {/* ── GTM ── */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}

        {/* ── GA4 ── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true});
document.addEventListener('click',function(e){
  const a=e.target.closest('a[href^="tel:"]');
  if(a)gtag('event','phone_click',{event_category:'engagement',event_label:a.href});
});`,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}