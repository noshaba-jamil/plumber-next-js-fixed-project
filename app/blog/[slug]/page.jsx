 import { BLOG_POSTS } from '../page'
import { buildBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'

// Static generation — pre-render all blog posts at build time
export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image, width: 800, height: 500, alt: post.title }],
    },
    keywords: post.keywords?.join(', '),
  }
}

// ── BLOG CONTENT ─────────────────────────────────────────────
const POST_CONTENT = {
  'how-much-does-a-plumber-cost-springfield-mo': {
    intro: `One of the most common questions homeowners in Springfield MO ask before calling a plumber is: "How much is this going to cost me?" It's a fair question — and the answer depends on what type of plumbing service you need, when you call, and the complexity of the job.`,
    sections: [
      {
        h2: 'Average Plumbing Costs in Springfield MO',
        content: `Here's a realistic breakdown of what most Springfield MO homeowners pay for common plumbing services:\n\n• **Emergency call-out (nights & weekends):** $150–$300 diagnostic fee\n• **Drain cleaning (basic):** $150–$300\n• **Drain cleaning (hydro-jetting):** $300–$600\n• **Leak detection:** $200–$500\n• **Water heater repair:** $150–$400\n• **Water heater replacement:** $800–$2,000+\n• **Sewer line repair:** $1,500–$5,000+\n• **Pipe repair (single break):** $200–$600\n\nThese are ranges — not guarantees. Every job is different, and a licensed plumber should always provide a written estimate before starting work.`,
      },
      {
        h2: 'What Makes Emergency Plumbing More Expensive?',
        content: `Emergency plumbing in Springfield MO typically costs more than scheduled work for several reasons:\n\n1. **After-hours labor rates** — Plumbers working at 2am on a Sunday deserve compensation for that availability\n2. **Urgency premium** — Parts may need to be sourced immediately\n3. **Complexity** — Emergencies are often harder problems than routine maintenance\n\nThat said, a reputable plumber will never inflate emergency pricing without telling you upfront. Always ask for the total price before approving any work.`,
      },
      {
        h2: 'How to Avoid Plumbing Scams in Springfield MO',
        content: `Unfortunately, plumbing scams do happen. Here's how to protect yourself:\n\n• Always ask for a **written estimate** before work begins\n• Verify the plumber is **licensed in Missouri**\n• Don't pay 100% upfront — a deposit is normal, full payment before completion is a red flag\n• Get a second opinion on any job over $1,000\n• Check Google reviews and the BBB listing\n\nOur company provides transparent upfront pricing on every job. You approve the price before we start — no exceptions.`,
      },
      {
        h2: 'Frequently Asked Questions About Plumbing Costs in Springfield MO',
        content: `**Q: Do you charge extra for emergency calls at night?**\nA: We provide upfront pricing before starting any work. We do not inflate emergency pricing — you always know the cost before we begin.\n\n**Q: Is there a call-out fee?**\nA: We charge $0 call-out fees. You only pay for the work performed.\n\n**Q: Can I get a price estimate over the phone?**\nA: We can give ranges, but accurate pricing requires seeing the problem in person. Call us and we'll give you the most honest estimate possible.`,
      },
    ],
  },
  'best-plumber-near-me-springfield-mo': {
    intro: `Searching "plumber near me" in Springfield MO returns dozens of results — but how do you know which one to trust? Especially when you're stressed about a flooding basement or a burst pipe, choosing the wrong plumber can make your day much worse.`,
    sections: [
      { h2: 'What to Look For in a Springfield MO Plumber', content: `**1. Missouri State License** — Always verify the plumber holds a valid Missouri plumbing license. Licensed plumbers have passed exams, carry insurance, and are held to professional standards.\n\n**2. Liability Insurance** — If a plumber damages your home during work, their insurance covers it. An uninsured plumber leaves you holding the bill.\n\n**3. Google Reviews** — Look for 4.5+ stars with 50+ reviews. Read the negative ones too — how they respond to complaints tells you a lot.\n\n**4. Upfront Pricing** — Any plumber who won't give you a price before starting work is a red flag. Reputable plumbers always provide written estimates.\n\n**5. 24/7 Availability** — Plumbing emergencies don't happen on schedule. Your plumber should be reachable at any hour.` },
      { h2: 'Questions to Ask Before Hiring a Plumber in Springfield MO', content: `Before you commit, ask these questions:\n\n• Are you licensed and insured in Missouri?\n• Do you charge a call-out or diagnostic fee?\n• Can you give me a written estimate before starting?\n• How long have you been serving Springfield MO?\n• Do you offer a warranty on your work?\n\nAny hesitation on licensing or written pricing should be a deal-breaker.` },
      { h2: 'Red Flags to Watch Out For', content: `Avoid any plumber who:\n\n• Demands full payment upfront\n• Can't provide a license number\n• Gives a suspiciously low estimate (bait and switch)\n• Has no reviews or only a few new reviews\n• Pressures you to decide immediately` },
    ],
  },
  'plumber-open-24-hours-springfield-missouri': {
    intro: `Plumbing emergencies are cruel — they almost always happen at the worst possible time. A pipe bursts at midnight. The toilet overflows the morning of a big event. The water heater dies on Christmas Eve. When it happens, you need a 24-hour plumber in Springfield Missouri who actually picks up.`,
    sections: [
      { h2: 'What to Do First in a Plumbing Emergency', content: `Before you do anything else, follow these steps:\n\n**Step 1: Shut off the water**\nEvery homeowner should know where their main water shutoff valve is located. In Springfield MO homes, it's typically near the water meter — often in the basement, crawlspace, or utility room. Turn it clockwise to shut off.\n\n**Step 2: Turn off the water heater**\nIf the emergency involves a water heater or major pipe failure, turn off your water heater too to prevent damage.\n\n**Step 3: Document the damage**\nTake photos and video for insurance purposes.\n\n**Step 4: Call a 24-hour plumber**\nCall a licensed emergency plumber in Springfield MO immediately — don't wait until morning.` },
      { h2: 'What to Expect from a 24/7 Plumber in Springfield MO', content: `A professional 24-hour plumber should:\n\n• Answer the phone immediately — not voicemail\n• Dispatch within minutes of your call\n• Arrive with tools and common parts for emergency repairs\n• Diagnose the problem and give you a price before starting\n• Fix the root cause, not just a temporary patch` },
      { h2: 'How Long Will You Wait for a 24-Hour Plumber?', content: `Response times vary. Our emergency plumbers in Springfield MO aim to arrive within 60 minutes in most locations. Factors that affect response time include your location within Springfield, time of day, and current call volume. Call us immediately — the sooner you call, the sooner we arrive.` },
    ],
  },
  'how-to-fix-burst-pipe-springfield-mo': {
    intro: `A burst pipe in your Springfield MO home is one of the most stressful plumbing emergencies you can face. Water can spread in minutes, damaging floors, walls, furniture, and personal belongings. Here's exactly what to do in the first 10 minutes.`,
    sections: [
      { h2: 'Step 1: Shut Off Your Water Immediately', content: `This is the single most important step. Every minute water flows through a burst pipe costs you more in damage.\n\n**Find your main water shutoff valve:**\n• Basements: often near the front foundation wall\n• Crawlspaces: near where the water line enters\n• Outside: near the water meter at the street\n\nTurn it clockwise until it stops. This cuts water to the entire house.` },
      { h2: 'Step 2: Turn Off Your Water Heater', content: `After shutting off the main water, turn off your water heater. Continuing to heat water in an empty tank can damage the unit. For gas heaters, set to "pilot" mode. For electric heaters, turn off the breaker.` },
      { h2: 'Step 3: Drain Remaining Water', content: `Open all faucets in the house to drain remaining water in the pipes. Flush toilets to empty tanks. This reduces water pressure in the system and limits further leaking.` },
      { h2: 'Step 4: Document Everything', content: `Before cleanup, photograph and video all water damage. This is critical for your homeowner's insurance claim. Get multiple angles and document affected areas clearly.` },
      { h2: 'Step 5: Call an Emergency Plumber in Springfield MO', content: `Call a licensed emergency plumber immediately. Do not attempt a permanent pipe repair yourself unless you have plumbing experience — an improper repair can fail again and cause more damage.\n\nOur emergency plumbers in Springfield MO respond immediately and can repair most burst pipes on the first visit.` },
    ],
  },
  'emergency-plumbing-cost-springfield-mo': {
    intro: `When a plumbing emergency strikes, the last thing you want is a surprise bill. Here's a completely transparent breakdown of emergency plumbing costs in Springfield MO — what you'll typically pay, what drives costs up, and how to make sure you're never overcharged.`,
    sections: [
      { h2: 'Typical Emergency Plumbing Costs in Springfield MO', content: `• **Burst pipe repair:** $300–$800 depending on pipe type, location, and repair complexity\n• **Sewer backup clearing:** $300–$600 for standard clearing; more for camera inspection\n• **Emergency drain cleaning:** $200–$400\n• **Toilet overflow (emergency):** $150–$350\n• **Water heater emergency repair:** $200–$500\n• **Gas line emergency:** $400–$1,500+ (always treat as urgent)\n\nThese are realistic ranges based on Springfield MO market rates. Always get a written estimate before approving work.` },
      { h2: 'What Affects Emergency Plumbing Pricing?', content: `**Time of day/week:** Nights, weekends, and holidays may carry higher rates due to overtime labor.\n\n**Problem complexity:** A simple clog costs less than a collapsed sewer line.\n\n**Parts required:** Some emergency repairs require parts that must be sourced immediately.\n\n**Access difficulty:** Pipes inside finished walls or under slabs cost more to access than exposed pipes.` },
      { h2: 'How to Avoid Emergency Plumbing Scams', content: `**Always demand a written estimate** before any work begins. In Missouri, licensed plumbers are expected to disclose pricing upfront.\n\n**Never pay 100% before work is complete.** A reasonable deposit (25-50%) is normal for larger jobs.\n\n**Verify the license.** Missouri plumbing licenses can be verified online through the Missouri Division of Professional Registration.\n\nOur company never charges hidden fees. The price we quote is the price you pay.` },
    ],
  },
  'signs-you-need-drain-cleaning-springfield-mo': {
    intro: `Most Springfield MO homeowners ignore early drain warning signs until they have a complete blockage or sewage backup. By then, the problem is more expensive to fix. Here are 7 signs that your drains need professional cleaning now.`,
    sections: [
      { h2: '7 Signs You Need Drain Cleaning in Springfield MO', content: `**1. Slow-draining sinks or tubs**\nIf water pools in your sink for 30+ seconds after you pull the stopper, buildup is restricting flow.\n\n**2. Recurring clogs**\nIf you've plunged the same drain three times this month, the problem is deeper than the plunger can reach.\n\n**3. Bad odors from drains**\nFoul smells — especially sulfur or sewage — indicate organic buildup or a venting problem.\n\n**4. Gurgling sounds**\nGurgling after flushing the toilet or running the dishwasher indicates partial blockages affecting multiple drain lines.\n\n**5. Multiple slow drains at once**\nIf your toilet, shower, and sink all drain slowly, you likely have a main sewer line issue — not individual clogs.\n\n**6. Water backing up in unexpected places**\nWater appearing in your shower when you flush the toilet is a serious warning sign of main line blockage.\n\n**7. Fruit flies near drains**\nFruit flies breed in the organic buildup inside clogged pipes. If they keep appearing, professional cleaning removes their food source.` },
      { h2: 'DIY vs Professional Drain Cleaning', content: `For minor surface clogs, a plunger or drain snake can work. But for:\n\n• Recurring clogs\n• Multiple slow drains\n• Gurgling or sewage smells\n• Any main line issues\n\n...professional drain cleaning is the only reliable solution. Hydro-jetting removes not just the blockage but all buildup on pipe walls, preventing recurrence.` },
    ],
  },
  'water-heater-not-working-springfield-mo': {
    intro: `A water heater that stops working is more than an inconvenience — especially in a Springfield MO winter. Whether you're getting cold water, discolored water, or no water at all, here's how to diagnose the problem and decide whether to repair or replace your unit.`,
    sections: [
      { h2: 'Common Reasons Your Water Heater Stopped Working', content: `**No hot water at all:**\nFor gas heaters — the pilot light may have gone out. Relight it following the label instructions on the unit. If it won't stay lit, the thermocouple likely needs replacing.\n\nFor electric heaters — check your breaker box. A tripped breaker is the most common cause. Reset it and wait an hour.\n\n**Water is lukewarm, not hot:**\nYour thermostat may be set too low (should be 120–140°F) or a heating element may be failing.\n\n**Water is rusty or discolored:**\nThis usually means your tank is corroding from the inside — a sign the unit needs replacement, not repair.\n\n**Popping or rumbling noises:**\nSediment buildup on the tank floor causes these sounds. Flushing the tank may resolve it, but heavy buildup can permanently damage the unit.` },
      { h2: 'Repair vs Replace: How to Decide', content: `**Repair if:**\n• The unit is less than 8 years old\n• The problem is a single component (thermostat, element, thermocouple)\n• There's no corrosion or rust\n• The tank isn't leaking\n\n**Replace if:**\n• The unit is 10+ years old\n• You see rust or corrosion\n• The tank is leaking\n• You've already repaired it multiple times\n• Repair cost exceeds 50% of replacement cost\n\nMost water heaters in Springfield MO last 8–12 years. If yours is approaching that age, replacement is usually the smarter investment.` },
      { h2: 'Water Heater Costs in Springfield MO', content: `• **Thermocouple replacement:** $150–$250\n• **Heating element replacement:** $150–$300\n• **Thermostat replacement:** $150–$300\n• **New gas water heater (40 gal, installed):** $800–$1,400\n• **New electric water heater (40 gal, installed):** $700–$1,200\n• **Tankless water heater (installed):** $1,500–$3,500\n\nOur plumbers provide written estimates before any water heater work begins.` },
    ],
  },
  'how-to-prevent-frozen-pipes-springfield-mo': {
    intro: `Springfield MO winters can drop well below freezing — and frozen pipes are one of the most damaging and preventable plumbing emergencies homeowners face. A single burst pipe can release hundreds of gallons of water into your home. Here's how to protect your pipes before temperatures drop.`,
    sections: [
      { h2: 'Which Pipes Are Most at Risk in Springfield MO Homes?', content: `The pipes most likely to freeze are those exposed to cold air:\n\n• **Exterior walls** — pipes running through uninsulated exterior walls\n• **Crawlspaces** — pipes under homes with poor insulation\n• **Garages** — especially if you have a laundry connection or utility sink\n• **Attics** — pipes in unheated attic spaces\n• **Outdoor hose bibs** — these must be winterized every year\n\nPipes in heated interior spaces rarely freeze unless heat is lost (power outage, thermostat failure).` },
      { h2: '7 Ways to Prevent Frozen Pipes in Springfield MO', content: `**1. Insulate exposed pipes**\nPipe insulation foam is inexpensive and available at any hardware store. Wrap all pipes in unheated areas.\n\n**2. Disconnect garden hoses before first freeze**\nLeaving a hose connected traps water in the bib and causes it to freeze and crack.\n\n**3. Shut off and drain outdoor hose bibs**\nTurn off the interior shutoff valve for outdoor spigots, then open the outdoor bib to drain remaining water.\n\n**4. Keep your thermostat at 55°F minimum**\nEven when away or on vacation — never let your home drop below 55°F.\n\n**5. Open cabinet doors under sinks on exterior walls**\nThis lets heated air reach pipes under kitchen and bathroom sinks.\n\n**6. Let faucets drip during extreme cold**\nA slow drip keeps water moving, which significantly reduces freeze risk.\n\n**7. Know where your main shutoff is**\nIf a pipe does freeze and burst, you need to shut off water immediately. Find your shutoff valve before an emergency happens.` },
      { h2: 'What to Do If Your Pipes Are Already Frozen', content: `If you turn on a faucet and get little or no water in freezing weather, you likely have a frozen pipe.\n\n**Do:**\n• Leave the faucet open (as the pipe thaws, flowing water helps)\n• Apply gentle heat with a hair dryer, working from the faucet toward the frozen section\n• Use heating tape on pipes prone to freezing\n\n**Do NOT:**\n• Use an open flame or propane torch (extreme fire risk)\n• Use a heat gun at high settings\n• Ignore it — frozen pipes frequently burst when they thaw\n\nIf you can't locate the frozen section or the pipe has already burst, call an emergency plumber in Springfield MO immediately.` },
    ],
  },
  'sewer-line-repair-vs-replacement-springfield-mo': {
    intro: `When a Springfield MO homeowner hears they need sewer line work, the immediate question is: repair or replace? The answer depends on the type of damage, the age of your sewer line, and the long-term cost. Here's everything you need to know to make the right decision.`,
    sections: [
      { h2: 'Signs You Have a Sewer Line Problem', content: `• Multiple drains slow or clogged at the same time\n• Raw sewage smell inside or outside your home\n• Gurgling sounds from toilets and drains\n• Water backing up in the lowest drains (basement floor drain, ground floor toilet)\n• Unusually lush, green patches in your yard above the sewer line\n• Foundation cracks or sinkholes near your home\n• Rodent or insect infestations (they enter through broken sewer lines)\n\nIf you notice multiple symptoms at once, you likely have a significant sewer line issue that needs immediate camera inspection.` },
      { h2: 'Sewer Line Repair vs Replacement: Key Differences', content: `**Repair is appropriate when:**\n• Damage is limited to one section of the line\n• The pipe material is still structurally sound\n• A simple crack, offset joint, or root intrusion is the issue\n• The line is relatively new (under 20 years)\n\n**Replacement is appropriate when:**\n• The entire line is deteriorated or corroded\n• You have bellied pipe (sections that have sunk and hold water)\n• Repeated repairs haven't resolved recurring problems\n• The pipe material is clay or Orangeburg (both have limited lifespans)\n• Root intrusion is severe throughout the entire line` },
      { h2: 'Sewer Line Costs in Springfield MO', content: `• **Camera inspection:** $200–$400\n• **Spot repair (single section):** $500–$1,500\n• **Trenchless pipe lining:** $3,000–$8,000\n• **Full sewer line replacement (traditional):** $4,000–$12,000+\n• **Trenchless pipe bursting:** $3,500–$9,000\n\nTrenchless methods cost more upfront but preserve your landscaping, driveway, and yard — making them more cost-effective for many homeowners.\n\nAlways get a camera inspection before agreeing to any sewer line work. This tells you exactly what you're dealing with.` },
    ],
  },
  'leak-detection-springfield-mo-guide': {
    intro: `A hidden water leak in your Springfield MO home can go undetected for months — silently causing mold growth, structural damage, and skyrocketing water bills. Professional leak detection finds the problem before it becomes a catastrophe. Here's what you need to know.`,
    sections: [
      { h2: 'Signs You Have a Hidden Water Leak', content: `**Higher than normal water bills**\nIf your bill spiked without a change in usage, you almost certainly have a leak somewhere.\n\n**Sound of running water when nothing is on**\nHear water moving when all faucets are off? That's a leak.\n\n**Damp or discolored walls, floors, or ceilings**\nWater stains or soft spots in drywall indicate water is pooling somewhere it shouldn't be.\n\n**Mold or mildew smell**\nHidden moisture creates mold within 24–48 hours. A musty smell often precedes visible mold.\n\n**Warm spots on the floor**\nFor slab homes, a warm spot on a tile or concrete floor can indicate a hot water line leaking beneath the slab.\n\n**Low water pressure throughout the house**\nA serious leak can reduce pressure across all fixtures simultaneously.` },
      { h2: 'How Professional Leak Detection Works', content: `Modern leak detection uses non-invasive technology to pinpoint leaks without tearing up your home:\n\n**Acoustic leak detection** — Specialized listening equipment picks up the sound of water escaping pipes behind walls and under slabs.\n\n**Thermal imaging** — Infrared cameras detect temperature differences that indicate moisture behind walls or under floors.\n\n**Pressure testing** — Isolating pipe sections and testing pressure drop to identify where water is escaping.\n\n**Video pipe inspection** — A camera is run through pipes to visually identify cracks, corrosion, and failures.\n\nThese methods allow our plumbers to pinpoint leaks to within inches — minimizing how much wall or floor needs to be opened.` },
      { h2: 'Leak Detection Costs in Springfield MO', content: `• **Basic leak detection:** $200–$500\n• **Slab leak detection:** $300–$600\n• **Full home inspection:** $400–$700\n\nThe cost of detection is almost always far less than the cost of the damage a hidden leak causes over weeks or months. Most homeowners who call us for leak detection wish they had called sooner.\n\nIf a leak is found, repair costs vary based on location and severity. Our plumbers provide written estimates before any repair work begins.` },
    ],
  },
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()

  const content = POST_CONTENT[params.slug]
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ])

  // Article schema for Google
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Springfield Emergency Plumbing' },
    publisher: {
      '@type': 'Organization',
      name: 'Springfield Emergency Plumbing',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div style={{ paddingTop: 90, background: 'var(--navy)', minHeight: '100vh' }}>
        {/* Article Hero */}
        <section style={{ background: 'var(--navy2)', padding: '64px 5% 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            {/* Breadcrumb */}
            <nav style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'var(--text-dim)', fontSize: 13 }}>Home</Link>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 13 }}>/</span>
              <Link href="/blog" style={{ color: 'var(--text-dim)', fontSize: 13 }}>Blog</Link>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 13 }}>/</span>
              <span style={{ color: 'var(--amber)', fontSize: 13 }}>{post.category}</span>
            </nav>

            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span style={{ background: 'rgba(232,50,28,0.15)', color: 'var(--red)', padding: '4px 14px', borderRadius: 99, fontSize: 11, fontFamily: "'Syne',sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                {post.category}
              </span>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                <i className="ri-time-line" />{post.readTime}
              </span>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                <i className="ri-calendar-line" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              {post.title}
            </h1>
            <p style={{ color: 'var(--text-dim)', fontSize: 18, lineHeight: 1.7 }}>{post.description}</p>
          </div>
        </section>

        {/* Featured Image */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5%' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block', borderRadius: '0 0 var(--rlg) var(--rlg)' }} />
        </div>

        {/* Article Content */}
        <article style={{ maxWidth: 860, margin: '0 auto', padding: '52px 5% 80px' }}>
          {/* Intro */}
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.85, marginBottom: 36, borderLeft: '4px solid var(--amber)', paddingLeft: 20 }}>
            {content?.intro}
          </p>

          {/* Emergency CTA Box */}
          <div style={{ background: 'var(--red)', borderRadius: 'var(--rlg)', padding: '28px 32px', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need a Plumber in Springfield MO Right Now?</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>24/7 emergency service — licensed, insured, upfront pricing.</div>
            </div>
            <a href="tel:+14173734862" style={{ background: '#fff', color: 'var(--navy)', padding: '12px 24px', borderRadius: 'var(--r)', fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
              <i className="ri-phone-fill" /> Call Now
            </a>
          </div>

          {/* Sections */}
          {content?.sections.map((section, i) => (
            <section key={i} style={{ marginBottom: 44 }}>
              <h2 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 'clamp(22px,2.5vw,32px)', color: '#fff', marginBottom: 18, borderBottom: '2px solid rgba(255,255,255,0.08)', paddingBottom: 12 }}>
                {section.h2}
              </h2>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 16, lineHeight: 1.85 }}>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ marginBottom: 16 }}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff">$1</strong>')
                        .replace(/^• /gm, '<span style="display:flex;gap:10px;marginBottom:8px"><span style="color:var(--amber);flexShrink:0">•</span><span>')
                        .replace(/\n/g, '<br />')
                    }}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Author box */}
          <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--rlg)', padding: '28px 32px', marginTop: 48, display: 'flex', gap: 20 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className="ri-tools-fill" style={{ fontSize: 22, color: '#fff' }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, color: '#fff', marginBottom: 4 }}>Springfield Emergency Plumbing Team</div>
              <div style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.6 }}>Licensed plumbers serving Springfield, Nixa, Ozark, Republic &amp; Battlefield, MO. 24/7 emergency service with upfront, transparent pricing.</div>
            </div>
          </div>

          {/* Related posts */}
          <div style={{ marginTop: 64 }}>
            <div className="stag">More Articles</div>
            <h2 className="sh" style={{ marginBottom: 32, fontSize: 28 }}>Related Plumbing <em>Guides</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 3 }}>
              {BLOG_POSTS.filter(p => p.slug !== params.slug).slice(0, 2).map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ background: "var(--card)", textDecoration: "none", display: "flex", gap: 16, padding: 20, borderLeft: "3px solid transparent", transition: "var(--t)" }} className="blog-related-link">
                  <img src={p.image} alt={p.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 'var(--r)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 800, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{p.category}</div>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 16, color: '#fff', lineHeight: 1.4 }}>{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
