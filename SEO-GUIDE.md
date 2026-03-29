# Springfield Emergency Plumbing — Complete SEO & Ranking Action Plan

## ✅ What This Build Already Does (Technical SEO Fixed)

All Screaming Frog issues are resolved:

| Issue | Status | Fix Applied |
|-------|--------|-------------|
| H1 Missing | ✅ Fixed | Every page has exactly 1 keyword-optimized H1 |
| Canonicals Missing | ✅ Fixed | Every page exports `alternates.canonical` |
| Page Title Over 60 chars | ✅ Fixed | All titles under 60 characters |
| H2 Missing | ✅ Fixed | Every page has multiple keyword-rich H2s |
| No Internal Outlinks | ✅ Fixed | Full internal link mesh on all pages |
| Low Content Pages | ✅ Fixed | Every page has 600+ words minimum |
| Missing X-Frame-Options | ✅ Fixed | `next.config.js` security headers |
| Missing Content-Security-Policy | ✅ Fixed | CSP header added |
| Missing X-Content-Type-Options | ✅ Fixed | Header added |
| Missing Referrer-Policy | ✅ Fixed | Header added |

---

## 🗺️ Step 1 — Get a Custom Domain (URGENT)

**Why:** `.netlify.app` subdomains cannot rank well. Google gives authority to root domains.

**Recommended domain options:**
- `emergencyplumberspringfieldmo.com`
- `plumberspringfieldmo.com`
- `springfieldmoplumber.com`

**Buy from:** Namecheap ($10/year) or Google Domains

**After buying:**
1. Go to Vercel Dashboard → your project → Settings → Domains
2. Add your custom domain
3. Update DNS at your registrar to point to Vercel
4. Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables

---

## 📊 Step 2 — Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain property
3. Verify ownership (Vercel makes this easy — DNS verification)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for your homepage

**Check back in 2 weeks** to see which pages are indexed.

---

## 📈 Step 3 — Google Analytics 4 Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)
4. In Vercel → Environment Variables, add:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Redeploy

**Goals to track (already wired in):**
- Phone number clicks
- Contact form submissions
- Scroll depth

---

## 🏢 Step 4 — Google Business Profile (MOST IMPORTANT for Local SEO)

This is the #1 ranking factor for local search. Without it, you cannot appear in the Google Map Pack.

1. Go to [business.google.com](https://business.google.com)
2. Click "Add your business"
3. Category: **Plumber** (primary), Emergency Plumbing Service (secondary)
4. Fill in:
   - Business name: Springfield Emergency Plumbing
   - Phone: (417) 000-0000
   - Website: your domain
   - Address: Your Springfield MO address
   - Hours: 24/7
5. Verify by postcard (Google mails a PIN to your address)
6. Add 10+ photos of your work, team, and vehicle

**NAP Consistency** — Your Name, Address, Phone must be IDENTICAL everywhere:
- Website
- GBP
- All directories (see below)

---

## 📋 Step 5 — Local Directory Citations (NAP Citations)

Submit your business to these directories. Use the EXACT same NAP every time:

### Tier 1 (Do These First — Most Important)
| Directory | URL | Free? |
|-----------|-----|-------|
| Google Business Profile | business.google.com | ✅ Free |
| Bing Places | bingplaces.com | ✅ Free |
| Apple Maps | mapsconnect.apple.com | ✅ Free |
| Yelp | biz.yelp.com | ✅ Free |
| BBB (Better Business Bureau) | bbb.org | ✅ Free |
| Angi (formerly Angie's List) | angi.com | ✅ Free |
| HomeAdvisor | homeadvisor.com | ✅ Free |
| Thumbtack | thumbtack.com | ✅ Free |
| Houzz | houzz.com | ✅ Free |

### Tier 2 (Do After Tier 1)
| Directory | URL |
|-----------|-----|
| YellowPages | yellowpages.com |
| Manta | manta.com |
| Foursquare | foursquare.com |
| Facebook Business | facebook.com/business |
| Nextdoor | nextdoor.com/business |
| Porch | porch.com |
| Expertise.com | expertise.com |

### Springfield-Specific Citations
- Springfield-Greene County Chamber of Commerce
- Ozarks Business Journal
- Springfield News-Leader business directory

---

## ⭐ Step 6 — Review Generation Strategy

Reviews are critical for both Google Maps ranking and conversion.

**Goal: 50+ Google reviews in 90 days**

### How to Get Reviews:

**After every completed job:**
1. Text the customer: *"Hi [Name], thanks for choosing Springfield Emergency Plumbing! If you're happy with our service, a quick Google review would mean the world to us: [link]"*

**Get your review link:**
1. Search your business on Google
2. Click "Get more reviews"
3. Copy the short link Google gives you

**Review request email template:**
```
Subject: How did we do, [Name]?

Hi [Name],

Thank you for trusting Springfield Emergency Plumbing 
with your [service] in Springfield MO.

If our plumber did a great job, we'd love if you could 
leave us a quick Google review — it helps us serve more 
Springfield homeowners like you.

[LEAVE A REVIEW] → [your Google review link]

Takes 60 seconds and means a lot to our team.

Thanks,
Springfield Emergency Plumbing
(417) 000-0000
```

**Never:** Buy reviews, ask for only 5-star reviews, or incentivize reviews (violates Google policy)

---

## 🔗 Step 7 — Backlink Building Strategy

### Quick Wins (Do in Month 1)
1. **Local business associations** — Join Springfield area Chamber of Commerce for a .org backlink
2. **Supplier pages** — Ask your plumbing supply companies to list you on their "Find a Plumber" pages
3. **Nextdoor** — Create a business profile; neighbors frequently recommend plumbers here

### Content-Based Backlinks (Month 2-3)
1. **Guest posts** on local Springfield blogs and news sites (Springfield News-Leader, KY3, OzarksFirst)
   - Pitch topic: "What Springfield MO Homeowners Should Know About Winter Pipe Bursts"
2. **HARO (Help A Reporter Out)** — helpareporter.com — Answer journalist queries about home improvement, plumbing costs, etc.
3. **Sponsorships** — Sponsor a Springfield community event or sports team for a backlink from their website

### Long-Term Authority Building
- Create a "Springfield Plumbing Cost Guide" PDF that local real estate agents link to
- Partner with local HVAC companies for mutual referral links
- Get listed on Missouri contractor association websites

---

## 🤖 Step 8 — AI Search Optimization (AEO)

To rank in ChatGPT, Gemini, and Claude answers:

**Already implemented in this build:**
- FAQ schemas on every service page
- Direct Q&A format content
- Local business schema with structured data

**Additional actions:**
1. Create a Wikipedia-style "About" section on your homepage with clear factual statements
2. Answer questions in the exact format AI tools expect:
   - "The cost of emergency plumbing in Springfield MO is typically $150-$500..."
   - "Springfield Emergency Plumbing is located in Springfield, Missouri..."
3. Get mentioned in local news articles (AI tools crawl news)

---

## 📅 90-Day SEO Execution Timeline

### Week 1-2
- [ ] Buy custom domain
- [ ] Deploy to Vercel with domain
- [ ] Add GA4 + Search Console
- [ ] Submit sitemap
- [ ] Create Google Business Profile
- [ ] Submit to Tier 1 directories

### Week 3-4
- [ ] Start review collection after every job
- [ ] Submit to Tier 2 directories
- [ ] Post first 2 blog articles

### Month 2
- [ ] Target 20 Google reviews
- [ ] Submit to Springfield-specific directories
- [ ] Begin guest post outreach
- [ ] Post 2 more blog articles

### Month 3
- [ ] Target 50 Google reviews
- [ ] First backlink from local news/blog
- [ ] Analyze Search Console — which keywords are gaining impressions
- [ ] Optimize pages getting impressions but low CTR (improve titles/descriptions)

---

## 🎯 Target Keywords Priority

### Homepage (most important)
1. `emergency plumber Springfield MO` — Primary target
2. `24/7 plumber Springfield MO`
3. `plumber Springfield Missouri`

### Service Pages
4. `drain cleaning Springfield MO`
5. `water heater repair Springfield MO`
6. `leak detection Springfield MO`
7. `sewer line repair Springfield MO`
8. `burst pipe repair Springfield MO`

### Long-tail (Blog targets)
9. `how much does a plumber cost in Springfield MO`
10. `emergency plumbing cost Springfield MO`
11. `best plumber near me Springfield`
12. `plumber open 24 hours Springfield Missouri`

---

## 📞 E-E-A-T Improvement Checklist

Google ranks trusted, experienced, authoritative sources higher. Improve E-E-A-T by:

- [ ] Add real plumber photos to the About page
- [ ] Display Missouri plumbing license number prominently
- [ ] Show insurance certificate/badge
- [ ] Add real customer photos in reviews section
- [ ] Create a "Our Team" page with individual plumber bios
- [ ] Display years in business prominently
- [ ] Get BBB accreditation and display badge

---

## 🚨 Critical: Don't Skip These

1. **Custom domain** — You cannot rank well on `.netlify.app`
2. **Google Business Profile** — Without this, you're invisible in Maps
3. **Review collection** — Start after every single job, immediately
4. **NAP consistency** — Same name/address/phone everywhere, always

The technical SEO in this Next.js build gives you a strong foundation. The off-page actions above will compound into #1 rankings over 3-6 months.
