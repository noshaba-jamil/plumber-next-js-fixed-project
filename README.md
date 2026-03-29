# Springfield Emergency Plumbing — Next.js Website

Full-stack Next.js 14 website with App Router, SEO optimization, admin dashboard, and built-in API routes.

---

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in .env.local values
npm run dev
# → http://localhost:3000
# → http://localhost:3000/admin
```

---

## Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel

# Add environment variables in Vercel dashboard
# Settings → Environment Variables
```

Or connect your GitHub repo at vercel.com for auto-deploy on push.

---

## Environment Variables (.env.local)

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Long random string for JWT signing |
| `ADMIN_USERNAME` | Admin dashboard username |
| `ADMIN_PASSWORD` | Admin dashboard password |
| `EMAIL_USER` | Gmail address for lead notifications |
| `EMAIL_PASS` | Gmail App Password |
| `NEXT_PUBLIC_SITE_URL` | Your production domain (no trailing slash) |
| `NEXT_PUBLIC_PHONE` | Business phone number |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID (G-XXXXXXXXXX) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID (GTM-XXXXXXX) |

---

## Project Structure

```
springfield-nextjs/
├── app/                    ← Next.js App Router pages
│   ├── layout.jsx          ← Root layout (Navbar + Footer + schemas + GA)
│   ├── page.jsx            ← Home (/)
│   ├── about/page.jsx
│   ├── services/page.jsx
│   ├── contact/page.jsx
│   ├── faq/page.jsx
│   ├── service-areas/page.jsx
│   ├── emergency-plumber-springfield-mo/page.jsx
│   ├── drain-cleaning-springfield-mo/page.jsx
│   ├── leak-detection-springfield-mo/page.jsx
│   ├── water-heater-repair-springfield-mo/page.jsx
│   ├── sewer-line-repair-springfield-mo/page.jsx
│   ├── pipe-repair-installation-springfield-mo/page.jsx
│   ├── blog/
│   │   ├── page.jsx        ← Blog hub (6 SEO articles)
│   │   └── [slug]/page.jsx ← Individual blog posts
│   ├── admin/
│   │   ├── layout.jsx      ← Admin layout (hides Navbar/Footer)
│   │   └── page.jsx        ← Admin dashboard
│   ├── api/
│   │   ├── contact/route.js
│   │   ├── admin/login/route.js
│   │   ├── leads/route.js
│   │   └── leads/[id]/contacted/route.js
│   ├── sitemap.js          ← Auto-generates /sitemap.xml
│   └── robots.js           ← Auto-generates /robots.txt
├── components/             ← All UI components
├── admin/                  ← Admin dashboard components & hooks
├── data/services.js        ← All website content (edit here)
├── lib/
│   ├── seo.js              ← All metadata, schemas, OG tags
│   ├── mongodb.js          ← DB connection singleton
│   └── auth.js             ← JWT helpers
├── models/Lead.js          ← MongoDB schema
├── styles/global.css       ← Global CSS variables & styles
├── next.config.js          ← Security headers, redirects, image domains
├── vercel.json             ← Vercel deployment config
└── SEO-GUIDE.md            ← Complete off-page SEO action plan
```

---

## SEO Features

- ✅ Unique meta title + description on every page (all under 60/160 chars)
- ✅ Canonical tags on every page
- ✅ H1 on every page (keyword optimized)
- ✅ H2/H3 with keyword variations
- ✅ Open Graph + Twitter Card tags
- ✅ JSON-LD schemas: LocalBusiness, FAQPage, Service, BreadcrumbList, Article
- ✅ sitemap.xml auto-generated
- ✅ robots.txt auto-generated
- ✅ 4 security headers (fixes all Screaming Frog warnings)
- ✅ Internal linking on every page
- ✅ Blog with 6 long-form SEO articles
- ✅ GA4 + GTM placeholders (fill in IDs)

---

## After Deploying — Do These Immediately

1. **Get a custom domain** — Cannot rank on `.netlify.app`/`.vercel.app`
2. **Update NEXT_PUBLIC_SITE_URL** — Must match your real domain
3. **Set up Google Business Profile** — Critical for local ranking
4. **Submit sitemap** to Google Search Console
5. **Add real GA4 ID** to environment variables

See `SEO-GUIDE.md` for the complete 90-day ranking action plan.
