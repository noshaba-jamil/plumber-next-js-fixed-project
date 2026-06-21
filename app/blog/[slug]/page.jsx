 import { BLOG_POSTS } from '../page'
import { buildBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'

export async function generateStaticParams() { return BLOG_POSTS.map(post => ({ slug: post.slug })) }

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title, description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, url: `${SITE_URL}/blog/${post.slug}`, type: 'article', images: [{ url: post.image, width: 800, height: 500, alt: post.title }] },
    keywords: post.keywords?.join(', '),
  }
}

// ── HOWTO SCHEMA ──────────────────────────────────────────────
const HOWTO_SCHEMA = {
  'why-is-my-water-bill-so-high-springfield-mo': {
    name: 'How to Check for a Hidden Leak Causing a High Water Bill in Springfield, MO',
    description: 'Use your water meter to confirm a hidden leak and identify the most likely source.',
    totalTime: 'PT15M',
    supply: ['Water meter access', 'Food dye for toilet test', 'Phone for documentation'],
    steps: [
      { name: 'Turn Off All Water Sources', text: 'Turn off every water source in the home — faucets, dishwasher, washing machine, ice maker, and outdoor irrigation. Nothing should be running.' },
      { name: 'Watch the Water Meter Flow Indicator', text: 'Go to your water meter and watch the flow indicator — a small triangular wheel or digital counter. If it moves with everything off, you have a leak.' },
      { name: 'Test Each Toilet with Food Dye', text: 'Add a few drops of food dye to each toilet tank. If color appears in the bowl without flushing, the flapper valve is leaking — wasting up to 200 gallons per day.' },
      { name: 'Inspect Faucets and Supply Lines', text: 'Check every faucet and the supply lines under sinks. A faucet dripping once per second wastes 3,000+ gallons per year.' },
      { name: 'Check the Water Softener', text: 'If your home has a water softener, check the brine tank for low salt and listen for continuous cycling. A stuck regeneration valve can waste thousands of gallons.' },
      { name: 'Call a Plumber for Hidden Leaks', text: 'If the meter still moves and no visible source is found, call a licensed Springfield MO plumber for thermal imaging and acoustic leak detection.' },
    ],
  },
  'how-to-shut-off-water-springfield-mo': {
    name: 'How to Shut Off Water in Your Springfield MO Home',
    description: 'Step-by-step emergency water shutoff for Springfield MO homeowners — main valve and individual fixture valves.',
    totalTime: 'PT5M',
    supply: ['Main water shutoff valve access'],
    steps: [
      { name: 'Locate Your Main Water Shutoff Valve', text: 'In Springfield MO homes, the main shutoff is typically in the basement near the front foundation wall, in the crawlspace near the water line entry, in a utility room, or near the street meter. Know this before an emergency.' },
      { name: 'Turn the Valve Clockwise to Close', text: 'Turn clockwise (righty-tighty) until it stops. Gate valves require multiple full turns. Ball valves turn 90 degrees — handle perpendicular to pipe means water is off.' },
      { name: 'Open a Faucet to Release Pressure', text: 'Open the lowest faucet in the house to release remaining water pressure in the pipes. This prevents damage and confirms the water is fully shut off.' },
      { name: 'Shut Off the Water Heater', text: 'Turn off your water heater after shutting off the main supply. Gas: set to pilot mode. Electric: flip the breaker. Running a water heater empty damages the heating elements.' },
      { name: 'Call a Licensed Springfield MO Plumber', text: 'Call (417) 373-4862 immediately. The sooner a licensed plumber arrives, the less secondary water damage occurs.' },
    ],
  },
  'water-heater-making-noise-springfield-mo': {
    name: 'How to Flush Your Water Heater in Springfield, MO',
    description: 'Step-by-step process to flush sediment from your water heater and reduce noise.',
    totalTime: 'PT30M',
    supply: ['Garden hose', 'Bucket', 'Work gloves'],
    steps: [
      { name: 'Turn the Thermostat to Pilot or Off', text: 'Gas: set to Pilot. Electric: turn off the breaker. Never flush a water heater with the heat on.' },
      { name: 'Connect a Garden Hose to the Drain Valve', text: 'Attach a garden hose to the drain valve at the bottom of the tank. Run the other end to a floor drain, utility sink, or outside.' },
      { name: 'Open a Hot Water Faucet Nearby', text: 'Open a nearby hot water faucet to prevent a vacuum from forming in the tank, which would stop draining.' },
      { name: 'Open the Drain Valve and Flush', text: 'Open the drain valve and let the tank drain completely. Once clear, briefly turn the cold supply on to flush remaining sediment.' },
      { name: 'Close Valve, Refill, and Restore Power', text: 'Close the drain valve, remove the hose, let the tank refill completely before restoring power or relighting the pilot. Heating an empty tank burns out the elements.' },
    ],
  },
  'low-water-pressure-springfield-mo': {
    name: 'How to Check Your Water Pressure in Springfield, MO',
    description: 'Simple steps to measure your home water pressure and identify whether the problem is municipal or internal.',
    totalTime: 'PT10M',
    supply: ['Water pressure gauge (attaches to hose bib, ~$10–$20 at hardware stores)'],
    steps: [
      { name: 'Attach a Pressure Gauge to an Outdoor Hose Bib', text: 'Screw a water pressure gauge onto an outdoor spigot. Make sure all water inside the house is off before reading.' },
      { name: 'Read the Pressure', text: 'Normal residential water pressure is 40–80 PSI. Below 40 PSI is low. Above 80 PSI can damage pipes and appliances.' },
      { name: "Check a Neighbor's Pressure", text: 'If a neighbor also has low pressure, the issue is with the municipal supply. Contact City Utilities of Springfield to report the problem.' },
      { name: 'Check Your Main Shutoff Valve Position', text: 'Locate your main shutoff valve and confirm it is fully open. A partially closed valve is the simplest cause of whole-house low pressure.' },
      { name: 'Locate and Test the Pressure Regulator', text: 'Most Springfield MO homes have a bell-shaped pressure regulator on the main line near where it enters the house. A failing regulator drops pressure below 40 PSI. Call a plumber to test or replace it.' },
    ],
  },
  'how-to-fix-burst-pipe-springfield-mo': {
    name: 'How to Respond to a Burst Pipe in Springfield, MO',
    description: 'Immediate step-by-step emergency response when a pipe bursts in your Springfield MO home.',
    totalTime: 'PT10M',
    supply: ['Main water shutoff valve access', 'Camera for documentation'],
    steps: [
      { name: 'Shut Off the Main Water Immediately', text: 'Find your main water shutoff valve — in the basement near the foundation wall, crawlspace, or near the street meter. Turn clockwise until fully closed.' },
      { name: 'Turn Off the Water Heater', text: 'Set gas heaters to pilot mode and electric heaters to off at the breaker to prevent heating an empty tank.' },
      { name: 'Open All Faucets to Drain Remaining Water', text: 'Open every faucet and flush all toilets to drain remaining water in the pipes and reduce further leaking.' },
      { name: 'Document All Damage Before Cleanup', text: 'Photograph and video all water damage from multiple angles before touching anything. Required for your insurance claim.' },
      { name: 'Call an Emergency Plumber Immediately', text: 'Call (417) 373-4862 right away. Our emergency plumbers can repair most burst pipes on the first visit.' },
    ],
  },
  'how-to-prevent-frozen-pipes-springfield-mo': {
    name: 'How to Prevent Frozen Pipes in Springfield, MO',
    description: 'Seven practical winterization steps to protect exposed pipes from freezing and bursting.',
    totalTime: 'PT45M',
    supply: ['Pipe insulation foam', 'Heating tape (optional)'],
    steps: [
      { name: 'Insulate Exposed Pipes', text: 'Wrap all pipes in unheated areas — crawlspaces, garages, attics, exterior walls — with foam pipe insulation.' },
      { name: 'Disconnect Garden Hoses Before First Freeze', text: 'A hose left connected traps water in the bib, which freezes and cracks the fitting.' },
      { name: 'Shut Off and Drain Outdoor Hose Bibs', text: 'Turn off the interior shutoff valve for outdoor spigots, then open the outdoor bib to drain remaining water.' },
      { name: 'Keep Thermostat at 55°F Minimum', text: 'Never let your home drop below 55°F — even when away or on vacation.' },
      { name: 'Open Cabinet Doors Under Sinks on Exterior Walls', text: 'Allows heated room air to reach the pipes underneath.' },
      { name: 'Let Faucets Drip During Extreme Cold', text: 'A slow drip keeps water moving, which significantly reduces freeze risk.' },
      { name: 'Know Your Main Shutoff Location', text: 'If a pipe bursts when it thaws, you need to act in seconds. Know where your main shutoff is before winter.' },
    ],
  },
  'how-much-does-a-plumber-cost-springfield-mo': {
    name: 'How to Get a Fair Plumbing Estimate in Springfield, MO',
    description: 'Steps to get an accurate, honest plumbing quote and avoid being overcharged.',
    totalTime: 'PT15M',
    supply: ['Phone', 'List of symptoms observed'],
    steps: [
      { name: 'Describe the Problem Clearly Before Calling', text: 'Note exact symptoms — slow drain, no hot water, visible leak — before calling. More specific = more accurate estimate.' },
      { name: 'Verify the Plumber is Missouri-Licensed', text: 'Ask for the license number and verify at pr.mo.gov. Licensed plumbers are insured and accountable.' },
      { name: 'Request a Written Estimate Before Approval', text: 'Never approve work based on a verbal quote. A written estimate protects you.' },
      { name: 'Compare to Springfield MO Market Rates', text: 'Drain cleaning: $150–$300. Leak detection: $200–$500. Water heater replacement: $800–$2,000. Unusually low quotes are red flags.' },
      { name: 'Confirm Payment Terms Before Work Starts', text: 'A deposit of 25–50% is normal for large jobs. Never pay 100% before completion.' },
    ],
  },
  'leak-detection-springfield-mo-guide': {
    name: 'How Professional Leak Detection Works in Springfield, MO',
    description: 'Non-invasive methods licensed plumbers use to find hidden leaks without opening walls.',
    totalTime: 'PT60M',
    supply: ['Acoustic equipment', 'Thermal imaging camera', 'Pressure testing tools', 'Video camera'],
    steps: [
      { name: 'Acoustic Leak Detection', text: 'Specialized listening equipment picks up the sound of water escaping behind walls and under slabs.' },
      { name: 'Thermal Imaging', text: 'Infrared cameras detect temperature differences that reveal moisture from hidden leaks.' },
      { name: 'Pressure Testing', text: 'Pipe sections are isolated and pressure-tested to identify exactly where water escapes.' },
      { name: 'Video Pipe Inspection', text: 'A camera is run through the pipe to visually confirm the crack or failure — precise to within inches.' },
    ],
  },
  'plumber-open-24-hours-springfield-missouri': {
    name: 'Emergency Plumbing Steps in Springfield, MO',
    description: 'What to do immediately when a plumbing emergency strikes at any hour.',
    totalTime: 'PT10M',
    supply: ['Main shutoff valve access', 'Phone'],
    steps: [
      { name: 'Shut Off the Main Water Supply', text: 'Locate your main shutoff valve in the basement, crawlspace, or utility room. Turn clockwise to stop flow to the entire house.' },
      { name: 'Turn Off the Water Heater', text: 'Set gas heaters to pilot; flip the breaker for electric heaters to avoid heating an empty tank.' },
      { name: 'Document All Damage', text: 'Photograph and video all damage before cleanup begins — essential for your insurance claim.' },
      { name: 'Call a 24-Hour Emergency Plumber', text: 'Call (417) 373-4862 immediately. Do not wait until morning. Every minute causes more secondary damage.' },
    ],
  },
  'signs-you-need-drain-cleaning-springfield-mo': {
    name: 'How to Diagnose Drain Problems in Springfield, MO',
    description: 'Step-by-step process to identify whether you need professional drain cleaning.',
    totalTime: 'PT10M',
    supply: ['Flashlight'],
    steps: [
      { name: 'Test All Drains for Slow Drainage', text: 'Run water in every sink, tub, and shower. If water pools 30+ seconds, buildup restricts flow. Multiple slow drains = main line issue.' },
      { name: 'Listen for Gurgling After Flushing', text: 'Gurgling at nearby drains when flushing signals partial blockage trapping air — a plunger cannot reach this.' },
      { name: 'Smell for Sewage or Sulfur Odors', text: 'Foul drain smells indicate organic buildup deep in the pipes or a venting problem.' },
      { name: 'Watch for Cross-Fixture Backups', text: 'Water appearing in the shower when you flush a toilet signals a main sewer line blockage — call a plumber immediately.' },
      { name: 'Decide: DIY or Professional', text: 'Use a plunger for a single surface clog. Multiple slow drains, recurring clogs, or sewage smells require professional hydro-jetting.' },
    ],
  },
  'water-heater-not-working-springfield-mo': {
    name: 'How to Diagnose a Water Heater Problem in Springfield, MO',
    description: 'Step-by-step diagnostic process to identify why your water heater stopped working.',
    totalTime: 'PT20M',
    supply: ['Flashlight', 'Multimeter (optional)'],
    steps: [
      { name: 'Identify the Symptom', text: 'No hot water, lukewarm water, discolored water, or popping noises each point to different causes.' },
      { name: 'Check the Pilot Light or Breaker', text: 'Gas: check if pilot is out and relight per label. Electric: check the breaker — reset and wait one hour.' },
      { name: 'Check the Thermostat Setting', text: 'Confirm thermostat is set 120–140°F. Too low is the simplest cause of lukewarm water.' },
      { name: 'Inspect for Rust, Corrosion, or Leaks', text: 'Rust-colored water, corrosion on the tank, or moisture at the base mean the tank needs replacement.' },
      { name: 'Apply the Repair vs Replace Decision', text: 'Repair if under 8 years old with one failed component. Replace if 10+ years old, corroded, leaking, or repair cost exceeds 50% of replacement.' },
      { name: 'Call a Licensed Plumber', text: 'If basic checks do not resolve the issue, call (417) 373-4862 for a written estimate before any repair begins.' },
    ],
  },
  'sewer-line-repair-vs-replacement-springfield-mo': {
    name: 'How to Decide on Sewer Line Repair vs Replacement in Springfield, MO',
    description: 'A systematic process to evaluate sewer damage and choose the right fix.',
    totalTime: 'PT30M',
    supply: ['Licensed plumber with camera equipment'],
    steps: [
      { name: 'Identify Sewer Warning Signs', text: 'Multiple slow drains, sewage smell, gurgling toilets, basement backup, green yard patches, or foundation cracks.' },
      { name: 'Schedule a Camera Inspection', text: 'Never agree to sewer work without a camera inspection. Cost: $200–$400. Reveals exact type, location, and extent of damage.' },
      { name: 'Review Camera Findings with the Plumber', text: 'Ask what was found: root intrusion, offset joint, belly, crack, or full collapse. Each requires a different approach.' },
      { name: 'Apply the Repair vs Replace Framework', text: 'Repair for isolated damage on pipe under 20 years old. Replace if entire line is deteriorated, bellied, made of clay/Orangeburg, or repeatedly failed.' },
      { name: 'Compare Trenchless vs Traditional', text: 'Trenchless lining ($3,000–$8,000) or bursting ($3,500–$9,000) vs traditional dig ($4,000–$12,000+). Trenchless preserves landscaping.' },
      { name: 'Get a Written Estimate and Approve', text: 'Confirm method, materials, labor, and warranty in writing before any work begins.' },
    ],
  },
  'emergency-plumbing-cost-springfield-mo': {
    name: 'How to Avoid Being Overcharged for Emergency Plumbing in Springfield, MO',
    description: 'Steps to get fair emergency plumbing pricing and avoid scams.',
    totalTime: 'PT10M',
    supply: ['Phone'],
    steps: [
      { name: 'Request a Written Estimate Before Work Starts', text: 'Never approve emergency work based on a verbal quote. A written estimate is your protection.' },
      { name: 'Verify Missouri License', text: 'Ask for the license number and verify through the Missouri Division of Professional Registration at pr.mo.gov.' },
      { name: 'Ask About All Fees Upfront', text: 'Ask: Are there trip fees, disposal fees, or after-hours surcharges? All fees must be in the written estimate.' },
      { name: 'Never Pay 100% Upfront', text: 'A 25–50% deposit is normal. Paying in full before completion removes all your leverage.' },
      { name: 'Compare to Market Rates', text: 'Burst pipe: $300–$800. Sewer clearing: $300–$600. Emergency drain: $200–$400. Dramatically lower quotes are bait-and-switch.' },
    ],
  },
  'best-plumber-near-me-springfield-mo': {
    name: 'How to Find and Hire a Trusted Plumber in Springfield, MO',
    description: 'Step-by-step vetting process to hire a licensed, reliable Springfield MO plumber.',
    totalTime: 'PT15M',
    supply: ['Phone or computer'],
    steps: [
      { name: 'Search and Filter by Local Reviews', text: 'Search Google for plumbers in Springfield MO. Look for 4.5+ stars with 50+ reviews. Prioritize businesses in the local map pack.' },
      { name: 'Verify Missouri State License', text: 'Ask for the license number and verify at the Missouri Division of Professional Registration (pr.mo.gov).' },
      { name: 'Confirm Liability Insurance', text: 'Ask if they carry liability insurance. If a plumber damages your home, their insurance covers it.' },
      { name: 'Ask the Vetting Questions', text: 'Do you charge a call-out fee? Can you give a written estimate before starting? Do you offer a workmanship warranty? Hesitation on these is a red flag.' },
      { name: 'Get Written Estimate and Approve', text: 'Never approve work without a written price. A reputable plumber will not pressure you to decide immediately.' },
    ],
  },
}

// ── FAQ SCHEMA ────────────────────────────────────────────────
const FAQ_SCHEMA = {
  'why-is-my-water-bill-so-high-springfield-mo': [
    { q: 'How much of a water bill increase should concern me?', a: 'Any increase of 20% or more above your normal monthly usage is worth investigating. In Springfield MO, average household water usage runs 80–100 gallons per person per day. A sudden unexplained jump almost always means a leak.' },
    { q: 'Can I find a hidden leak myself?', a: 'You can confirm a leak exists using the water meter test — turn off all water and watch if the flow indicator moves. Finding the exact location inside walls, under a slab, or underground requires professional thermal imaging, acoustic detectors, or pressure testing.' },
    { q: 'How much does leak detection cost in Springfield MO?', a: 'Professional leak detection in Springfield MO typically costs $200–$400. This is almost always recovered through reduced water bills after repair. Call (417) 373-4862 for a free estimate.' },
  ],
  'how-to-shut-off-water-springfield-mo': [
    { q: 'Where is the main water shutoff valve in a Springfield MO home?', a: 'In most Springfield MO homes, the main shutoff valve is in the basement near the front foundation wall, in the crawlspace near where the water line enters, or in a utility or mechanical room. Older homes may have it near the water meter outside near the street.' },
    { q: 'How do I shut off water to just one toilet or sink without turning off the whole house?', a: 'Every toilet has a supply stop valve on the wall or floor behind it — turn it clockwise to close. Sinks have stop valves under the cabinet on the supply lines. Water heaters have a dedicated cold supply shutoff valve above or near the unit.' },
    { q: 'What should I do after shutting off the main water in an emergency?', a: 'After shutting off the main valve: turn off the water heater, open faucets to drain remaining pipe pressure, photograph all damage for insurance, and call a licensed emergency plumber at (417) 373-4862 immediately.' },
  ],
  'sewer-backup-warning-signs-springfield-mo': [
    { q: 'What is the first sign of a sewer backup in Springfield MO?', a: 'The earliest sign is usually multiple slow drains throughout the house occurring at the same time — especially in lower-level fixtures. A single slow drain is typically a local clog; multiple simultaneous slow drains indicate a main sewer line problem.' },
    { q: 'Can a sewer backup clear itself?', a: 'No. Sewer backups caused by root intrusion, pipe damage, or deep grease buildup will not clear on their own. Chemical drain cleaners rarely reach the actual blockage and can damage pipes. A plumber with professional equipment is required.' },
    { q: 'How much does sewer backup repair cost in Springfield MO?', a: 'Sewer backup clearing typically costs $300–$600 for professional hydro-jetting. Camera inspection costs $200–$400. If a damaged pipe is found, spot repair runs $500–$1,500 and full sewer line replacement $4,000–$12,000+.' },
    { q: "Is sewer backup covered by homeowner's insurance in Missouri?", a: "Standard homeowner's insurance in Missouri does not cover sewer backup damage unless you have a specific sewer backup rider. Check your policy — adding this rider is typically $50–$100 per year." },
  ],
  'tankless-vs-tank-water-heater-springfield-mo': [
    { q: 'How much does a tankless water heater cost to install in Springfield MO?', a: 'Tankless water heater installation in Springfield MO typically costs $1,500–$3,500 fully installed, depending on unit type and whether gas line upgrades are needed. Tank water heaters run $700–$1,400 installed.' },
    { q: 'Is a tankless water heater worth it in Springfield MO?', a: 'For most Springfield MO households planning to stay 5+ years, yes. Tankless units last 20+ years vs 10–12 for tanks, save 20–30% on water heating costs, and never run out of hot water. The higher upfront cost is typically recovered within 5–8 years.' },
    { q: 'Can my Springfield MO home support a tankless water heater?', a: 'Most Springfield MO homes can support a tankless unit, but gas models may require upgrading the gas line and electric models require adequate amperage. A licensed plumber can assess your home in a free consultation.' },
    { q: 'What is the lifespan difference between tankless and tank water heaters?', a: 'Tank water heaters in Springfield MO typically last 8–12 years. Tankless water heaters last 20+ years with annual descaling maintenance.' },
  ],
  'plumbing-cost-springfield-mo-2026': [
    { q: 'What is the average plumber cost per hour in Springfield MO?', a: 'Licensed plumbers in Springfield MO typically charge $85–$150 per hour for standard work, and $125–$225 per hour for emergency after-hours service. Most jobs are quoted as flat-rate project pricing.' },
    { q: 'Does it cost more to call a plumber at night in Springfield MO?', a: 'Yes. Emergency after-hours service typically carries a 25–50% premium. A reputable plumber always discloses this upfront in a written estimate before starting any work.' },
    { q: 'How do I get an accurate plumbing quote in Springfield MO?', a: 'Always request a written estimate before approving any work. The plumber should inspect the problem in person before quoting. Compare estimates to typical Springfield MO ranges and verify the plumber holds a valid Missouri license.' },
    { q: 'What does drain cleaning cost in Springfield MO?', a: 'Basic drain snaking: $150–$300. Hydro-jetting for severe or recurring clogs: $300–$600. Camera inspection: $200–$400.' },
  ],
  'trenchless-sewer-repair-springfield-mo': [
    { q: 'How much does trenchless sewer repair cost in Springfield MO?', a: 'Trenchless pipe lining (CIPP) costs $3,000–$8,000 for a full sewer line. Pipe bursting costs $3,500–$9,000. Traditional open-trench replacement costs $4,000–$12,000+. Trenchless eliminates landscape restoration costs.' },
    { q: 'How long does trenchless pipe lining last?', a: 'CIPP lining carries a 50-year manufacturer warranty in most cases. The epoxy liner is more corrosion-resistant than the original pipe and eliminates root intrusion at the former joints.' },
    { q: 'Can every Springfield MO sewer line be repaired with trenchless?', a: 'No. Fully collapsed or crushed pipes cannot be lined. Pipe bursting requires sufficient soil clearance. A camera inspection confirms which method applies.' },
    { q: 'How long does trenchless sewer repair take in Springfield MO?', a: 'Pipe lining: 4–8 hours. Pipe bursting: 1–2 days. Traditional replacement: 2–5 days. Trenchless is significantly faster because no excavation or landscaping restoration is needed.' },
  ],
  'water-heater-making-noise-springfield-mo': [
    { q: 'Why is my water heater making a popping noise in Springfield MO?', a: 'Popping or rumbling noises are caused by sediment buildup at the bottom of the tank. Hard water minerals accumulate and cause water to boil through the sediment layer when the heating element activates. Flushing the tank resolves it in early stages.' },
    { q: 'Is a noisy water heater dangerous?', a: 'Most noises — popping, rumbling, ticking — are not immediately dangerous but indicate reduced efficiency and accelerated tank wear. Hissing or sizzling sounds with visible moisture are an exception — call a plumber immediately.' },
    { q: 'How often should a water heater be flushed in Springfield MO?', a: 'Once per year for most Springfield MO homes. Homes with very hard well water may need flushing every 6 months. Annual flushing extends tank life, reduces energy use, and eliminates noise.' },
  ],
  'how-to-choose-emergency-plumber-springfield-mo': [
    { q: 'How do I verify a plumber is licensed in Missouri?', a: "Go to the Missouri Division of Professional Registration website (pr.mo.gov) and search for the plumber's name or license number. A valid Missouri Master or Journeyman Plumber license confirms they have passed state exams and carry required insurance." },
    { q: 'What should a Springfield MO emergency plumber tell me before starting?', a: 'A reputable emergency plumber should tell you: the diagnostic finding, exactly what repair is needed, the total price including labor and parts, and whether after-hours charges apply — all before touching anything.' },
    { q: 'How fast should an emergency plumber arrive in Springfield MO?', a: 'A true 24/7 emergency plumber in Springfield MO should arrive within 60 minutes for most metro area locations. Ask about ETA when you call — if they cannot confirm a response time, keep calling.' },
  ],
  'signs-you-need-a-plumber-springfield-mo': [
    { q: 'How do I know if I have a plumbing emergency in Springfield MO?', a: 'Call a plumber immediately if: water is flowing from something that should be dry, multiple drains are backing up simultaneously, you smell sewage inside your home, you have no hot water and the reset did not fix it, or your water bill spiked with no explanation.' },
    { q: 'Can I wait until morning to call a plumber in Springfield MO?', a: 'You can wait for a dripping faucet, single slow drain, or running toilet. Do NOT wait for: active leaks, burst pipes, sewage backup, no hot water in winter, or water near electrical panels. Waiting turns a $300 fix into a $3,000 repair.' },
    { q: 'What happens if I ignore a plumbing problem in Springfield MO?', a: 'Ignored problems escalate predictably. A slow leak becomes a burst pipe. A slow drain becomes a sewage backup. A noisy water heater becomes a flooded utility room. Most plumbing disasters we respond to started as minor ignored symptoms weeks or months earlier.' },
  ],
  'low-water-pressure-springfield-mo': [
    { q: 'What is normal water pressure in Springfield MO?', a: 'Normal residential water pressure in Springfield MO is 40–80 PSI. City Utilities of Springfield maintains distribution pressure in this range. Below 40 PSI is considered low and affects shower performance, appliance fill times, and irrigation.' },
    { q: 'Can low water pressure be fixed without a plumber?', a: 'Sometimes. A partially closed main shutoff valve is a DIY fix in seconds. A failing pressure regulator, corroded pipes, or a hidden leak require a licensed plumber.' },
    { q: 'How much does it cost to fix low water pressure in Springfield MO?', a: 'Pressure regulator replacement: $200–$500. Corroded pipe section: $300–$800 per section. Hidden leak detection: $200–$400 plus repair. Call (417) 373-4862 for a diagnosis before committing to any repair.' },
  ],
  'how-much-does-a-plumber-cost-springfield-mo': [
    { q: 'Do you charge extra for emergency calls at night?', a: 'We provide upfront pricing before starting any work. We do not inflate emergency pricing — you always know the cost before we begin.' },
    { q: 'Is there a call-out fee?', a: 'We charge $0 call-out fees. You only pay for the work performed.' },
    { q: 'Can I get a price estimate over the phone?', a: 'We can give ranges, but accurate pricing requires seeing the problem in person. Call us and we will give you the most honest estimate possible.' },
  ],
  'best-plumber-near-me-springfield-mo': [
    { q: 'How do I verify a Missouri plumbing license?', a: 'Visit pr.mo.gov (Missouri Division of Professional Registration) and search by name or license number. Always verify before approving any work.' },
    { q: 'What should a plumber include in a written estimate?', a: 'A proper written estimate should list: the specific repair or service, parts to be used, total labor cost, any potential additional charges, and the warranty on the work.' },
    { q: 'Should I get multiple quotes for plumbing work in Springfield MO?', a: 'For any job over $1,000, getting 2–3 quotes is smart. For emergencies, prioritize a licensed plumber who can respond fastest and provides written pricing before starting.' },
  ],
  'plumber-open-24-hours-springfield-missouri': [
    { q: 'What counts as a plumbing emergency in Springfield MO?', a: 'Active water leaks, burst pipes, sewage backup, no hot water in winter, gas line issues, and flooding all require same-day service.' },
    { q: 'How fast can an emergency plumber arrive in Springfield MO?', a: 'Our emergency plumbers aim to arrive within 60 minutes anywhere in the Springfield metro area. Call (417) 373-4862 immediately — the sooner you call, the less damage occurs.' },
  ],
  'emergency-plumbing-cost-springfield-mo': [
    { q: 'Why is emergency plumbing more expensive at night in Springfield MO?', a: 'After-hours labor carries a premium because plumbers are on-call 24/7. A reputable plumber discloses any after-hours surcharge in the written estimate before starting work — not on the final bill.' },
    { q: 'What is the most common emergency plumbing cost in Springfield MO?', a: 'Burst pipe repair: $300–$800. Sewer backup clearing: $300–$600. Toilet overflow: $150–$350. Water heater emergency repair: $200–$500. Always get a written estimate before work starts.' },
  ],
  'signs-you-need-drain-cleaning-springfield-mo': [
    { q: 'Can I use chemical drain cleaners instead of calling a plumber in Springfield MO?', a: 'Chemical drain cleaners can clear minor surface clogs but damage pipes over time and are ineffective against grease buildup, root intrusion, or deep blockages. For recurring clogs, professional hydro-jetting is the only permanent fix.' },
    { q: 'How much does professional drain cleaning cost in Springfield MO?', a: 'Standard drain snaking: $150–$300. Hydro-jetting for severe or recurring clogs: $300–$600. Main sewer line cleaning: $300–$600.' },
  ],
  'water-heater-not-working-springfield-mo': [
    { q: 'How long should a water heater last in Springfield MO?', a: 'Most tank water heaters in Springfield MO last 8–12 years. Tankless units last 20+ years. Annual flushing extends tank lifespan significantly.' },
    { q: 'Is it worth repairing a 10-year-old water heater in Springfield MO?', a: 'Generally no. A unit 10+ years old with a major failed component is better replaced. If only a thermocouple or heating element has failed on a 10-year-old unit, repair may still be cost-effective.' },
  ],
  'sewer-line-repair-vs-replacement-springfield-mo': [
    { q: 'How do I know if I need sewer line repair or replacement in Springfield MO?', a: 'A camera inspection is the only accurate way to determine this. Spot repair works for isolated cracks on structurally sound pipe. Full replacement is needed if the entire line is deteriorated, bellied, or made of clay or Orangeburg material.' },
    { q: 'How long does sewer line replacement take in Springfield MO?', a: 'Traditional open-trench replacement: 2–5 days. Trenchless pipe lining: 4–8 hours. Pipe bursting: 1–2 days. Trenchless is significantly faster.' },
  ],
  'leak-detection-springfield-mo-guide': [
    { q: 'How do I know if I have a hidden water leak in Springfield MO?', a: 'Signs of a hidden leak: water bill increase of 20%+ with no usage change, sound of running water when nothing is on, damp walls or soft drywall, mold smell, warm spots on the floor (slab leak), or low water pressure throughout the house.' },
    { q: 'How much does leak detection cost in Springfield MO?', a: 'Professional leak detection costs $200–$500 for standard inspection, $300–$600 for slab leak detection, and $400–$700 for full home inspection. This is far less than the cost of damage from an undetected leak over weeks or months.' },
  ],
  'how-to-fix-burst-pipe-springfield-mo': [
    { q: 'What should I do first when a pipe bursts in my Springfield MO home?', a: 'Shut off the main water supply immediately — find the valve in your basement, crawlspace, or utility room and turn it clockwise until fully closed. Then turn off the water heater, open faucets to drain remaining pressure, document all damage with photos, and call (417) 373-4862.' },
    { q: 'Can I repair a burst pipe myself in Springfield MO?', a: 'Temporary patches (pipe repair clamps, epoxy) can slow a leak, but they are not permanent fixes. An improper repair can fail again and cause more damage. A licensed plumber can make a permanent repair on the first visit — often faster than a DIY attempt.' },
    { q: 'How much does burst pipe repair cost in Springfield MO?', a: 'Burst pipe repair in Springfield MO typically costs $300–$800 depending on the pipe type, location, and complexity. Pipes inside walls or under slabs cost more to access. Always get a written estimate before approving any work.' },
  ],
  'how-to-prevent-frozen-pipes-springfield-mo': [
    { q: 'At what temperature do pipes freeze in Springfield MO?', a: 'Pipes can begin to freeze when outdoor temperatures drop below 20°F (-6°C), especially if they run through unheated spaces like crawlspaces, garages, or exterior walls. Springfield MO regularly sees temperatures this low from December through February.' },
    { q: 'How do I know if my pipes are frozen in Springfield MO?', a: 'Signs of frozen pipes: turning on a faucet produces little or no water during freezing weather, frost visible on an exposed pipe, or a bulge in a pipe. If you suspect frozen pipes, do not use an open flame to thaw them — call (417) 373-4862 for safe professional thawing.' },
    { q: 'Will frozen pipes always burst in Springfield MO?', a: 'Not always, but the risk is high. Ice expands and pressurizes the pipe on both sides of the blockage. The most common burst point is actually where there is no ice — in the water between the ice and a closed faucet. Thaw pipes slowly and carefully to avoid bursting.' },
  ],
}

function buildHowToSchema(slug, post) {
  const data = HOWTO_SCHEMA[slug]
  if (!data) return null
  return {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: data.name, description: data.description, image: post.image, totalTime: data.totalTime,
    supply: data.supply?.map(item => ({ '@type': 'HowToSupply', name: item })),
    step: data.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}

function buildFaqSchema(slug) {
  const faqs = FAQ_SCHEMA[slug]
  if (!faqs) return null
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
}

// ── BLOG CONTENT ──────────────────────────────────────────────
const POST_CONTENT = {
  'why-is-my-water-bill-so-high-springfield-mo': {
    intro: `A water bill that suddenly jumps $50, $100, or even $200 above your normal is almost always caused by one thing: a leak somewhere in your plumbing system. In Springfield MO, we see this every week — homeowners who have been losing water (and money) for months without knowing why. This guide walks you through every possible cause, how to check for each one, and what to do next.`,
    sections: [
      { h2: 'How to Tell If a Leak Is Causing Your High Water Bill in Springfield MO', content: `The fastest way to check for a hidden leak is your water meter. Turn off every water source in your home — faucets, dishwasher, washing machine, ice maker, and outdoor irrigation. Go to your water meter and watch the flow indicator (a small triangular wheel or digital counter). If it is moving with everything off, water is leaking somewhere in your system.` },
      { h2: 'Top 7 Causes of High Water Bills in Springfield MO Homes', content: `**1. Running Toilet (Most Common Cause)**\nA toilet with a faulty flapper valve can silently waste 200 gallons per day — adding $30–$70 per month to your bill. Test by putting food dye in the tank. If color appears in the bowl without flushing, your flapper is leaking.\n\n**2. Dripping Faucets**\nA faucet dripping once per second wastes over 3,000 gallons per year. Most Springfield MO dripping faucets are caused by worn washers or O-rings — a $5 part, 20-minute fix.\n\n**3. Hidden Pipe Leak Inside Walls or Under Floor**\nPipes inside walls or under your slab can leak for months before visible damage appears. Signs: warm spots on floor, damp drywall, mold smell, or water sounds when everything is off.\n\n**4. Slab Leak Under Foundation**\nSpringfield MO's clay-heavy soil stresses pipes under the concrete foundation until they crack. A slab leak can waste 50,000+ gallons per month.\n\n**5. Outdoor Irrigation System Leak**\nUnderground irrigation lines crack from Missouri freeze-thaw cycles. If your bill spikes every spring, check the irrigation system first.\n\n**6. Water Softener Malfunction**\nA stuck softener regeneration valve wastes thousands of gallons over days. Check the brine tank for unusually low salt levels.\n\n**7. Old or Failing Toilet Fill Valve**\nEven normally-functioning toilets can have slow fill valve leaks. Annual toilet inspections catch these early.` },
      { h2: 'What to Do If You Think You Have a Hidden Leak in Springfield MO', content: `Call (417) 373-4862 for professional leak detection. We use thermal imaging cameras and acoustic sensors to find leaks inside walls, under floors, and underground without tearing anything apart. Most leak locations are identified in a single visit.` },
      { h2: 'Frequently Asked Questions — High Water Bill Springfield MO', content: `**Q: How much of a water bill increase should concern me?**\nA: Any increase of 20% or more above your normal monthly usage is worth investigating.\n\n**Q: Can I find a hidden leak myself?**\nA: You can confirm a leak exists with the meter test, but pinpointing the location requires professional equipment.\n\n**Q: How much does leak detection cost in Springfield MO?**\nA: Typically $200–$400. Almost always recovered through lower water bills after repair. Call (417) 373-4862 for a free estimate.` },
    ],
  },
  'how-to-shut-off-water-springfield-mo': {
    intro: `When a pipe bursts or a fitting fails — the single most important thing you can do in the first 60 seconds is shut off the water. Every Springfield MO homeowner should know exactly where their main shutoff valve is and how to use it before an emergency ever happens. This guide covers every shutoff valve in your home, step by step.`,
    sections: [
      { h2: 'Where Is the Main Water Shut-Off Valve in a Springfield MO Home?', content: `In Springfield MO homes, the main shutoff valve is most commonly located:\n\n• **Basement** — near the front foundation wall, where the water line enters the house\n• **Crawlspace** — near the water line entry point\n• **Utility or mechanical room** — near the water heater or pressure tank\n• **Outside** — near the water meter at the street\n\nGate valves (round handle) require multiple clockwise turns to close. Ball valves (lever handle) close with a 90-degree turn — handle perpendicular to the pipe means water is off.` },
      { h2: 'How to Shut Off Water Step by Step', content: `**Step 1 — Locate Your Main Water Shutoff Valve**\nCheck the basement near the front wall first. If not found, look in the crawlspace or utility room.\n\n**Step 2 — Turn the Valve Clockwise (Righty-Tighty)**\nGate valves: turn clockwise until it stops. Ball valves: turn lever 90 degrees so it is perpendicular to the pipe.\n\n**Step 3 — Open a Faucet to Release Pressure**\nOpen the lowest faucet in the house to drain remaining water pressure from the pipes.\n\n**Step 4 — Call a Licensed Springfield MO Plumber**\nCall (417) 373-4862 immediately. The faster we arrive, the less secondary water damage you will have.` },
      { h2: 'How to Shut Off Water to Individual Fixtures', content: `**Shutting Off Water to a Toilet**\nLook behind and below the toilet for a small oval handle on the wall or floor. Turn it clockwise until it stops.\n\n**Shutting Off Water to a Sink**\nUnder every sink are two supply lines (hot and cold) with stop valves where they meet the wall. Turn both clockwise.\n\n**Shutting Off Water to a Water Heater**\nThe cold water supply line entering the top of the water heater has a shutoff valve. Turn it clockwise to stop cold water without shutting off the whole house.` },
      { h2: 'What to Do After Shutting Off Water', content: `1. Turn off the water heater (pilot mode for gas, breaker for electric)\n2. Open all faucets to drain remaining pipe pressure\n3. Photograph and video all water damage before cleanup\n4. Call your insurance company if damage is significant\n5. Call a licensed Springfield MO plumber at (417) 373-4862\n\nDo not turn the water back on until the plumber has diagnosed and repaired the cause.` },
      { h2: 'Frequently Asked Questions — Water Shutoff Springfield MO', content: `**Q: Where is the main water shutoff valve in a Springfield MO home?**\nA: Most commonly in the basement near the front foundation wall, crawlspace, or utility room.\n\n**Q: How do I shut off water to just one toilet?**\nA: Use the stop valve behind and below the toilet — turn it clockwise to close.\n\n**Q: What should I do after shutting off the main water?**\nA: Turn off the water heater, open faucets to release pressure, document damage, and call (417) 373-4862 immediately.` },
    ],
  },
  'sewer-backup-warning-signs-springfield-mo': {
    intro: `A sewer backup is one of the most damaging and expensive plumbing problems a Springfield MO homeowner can face. The good news: sewer backups almost always give warning signs days or weeks before a full backup occurs. Here are 8 signs you should never ignore.`,
    sections: [
      { h2: '8 Sewer Backup Warning Signs Springfield MO Homeowners Should Know', content: `**Warning Sign 1 — Multiple Slow Drains at the Same Time**\nA single slow drain is a local clog. Multiple slow drains simultaneously — toilet, sink, shower all slow at once — indicate a main sewer line blockage.\n\n**Warning Sign 2 — Sewage or Rotten Egg Smell Inside the Home**\nSewer gas odors inside the home indicate a partial blockage allowing sewer gases to push back through drain traps. A health concern as well as a warning sign.\n\n**Warning Sign 3 — Gurgling Sounds When Running Fixtures**\nA toilet that gurgles when you run the bathroom sink indicates trapped air being pushed through a partial blockage.\n\n**Warning Sign 4 — Water Backing Up Into Tub or Shower**\nIf flushing a toilet causes water to appear in the shower drain, your main sewer line is blocked. Water is finding the path of least resistance.\n\n**Warning Sign 5 — Soggy or Unusually Green Grass Above Sewer Line**\nA leaking sewer line fertilizes grass above it. A strip of unusually lush, green grass across your yard often follows the sewer line path.\n\n**Warning Sign 6 — Basement Floor Drain Backing Up**\nThe basement floor drain is the lowest point in most Springfield MO homes. When the main line is partially blocked, it is the first place sewage appears.\n\n**Warning Sign 7 — Sewage in the Basement**\nActual sewage appearing in the basement is a full backup in progress. Leave the home, avoid contact with sewage, and call an emergency plumber immediately.\n\n**Warning Sign 8 — Rodent or Insect Infestation Near Drains**\nRats and cockroaches enter homes through cracked sewer lines. A new infestation with no other explanation often indicates an underground sewer break.` },
      { h2: 'What Causes Sewer Backups in Springfield MO?', content: `**Tree Root Intrusion (Most Common)**\nTree roots seek moisture and grow into sewer line joints. Springfield MO's established trees and clay-heavy soil make root intrusion the most common cause.\n\n**Grease and FOG Buildup**\nFats, oils, and grease poured down kitchen drains cool, solidify, and accumulate inside sewer lines over years.\n\n**Collapsed or Cracked Sewer Line**\nOlder Springfield MO homes with clay or Orangeburg sewer pipes face deterioration, collapse, and bellying (sagging sections that hold debris).` },
      { h2: 'How Much Does Sewer Backup Repair Cost in Springfield MO?', content: `• **Hydro-jetting to clear a backup:** $300–$600\n• **Camera inspection to diagnose cause:** $200–$400\n• **Spot pipe repair (single section):** $500–$1,500\n• **Full sewer line replacement:** $4,000–$12,000+\n• **Trenchless pipe lining:** $3,000–$8,000\n\nCall at the first sign — a $400 hydro-jet at Sign 1 prevents a $10,000 sewage cleanup at Sign 7.` },
      { h2: 'Frequently Asked Questions — Sewer Backup Springfield MO', content: `**Q: What is the first sign of a sewer backup?**\nA: Multiple slow drains happening simultaneously throughout the house.\n\n**Q: Can a sewer backup clear itself?**\nA: No. Root intrusion, pipe damage, and grease buildup require professional hydro-jetting or repair.\n\n**Q: How much does sewer backup repair cost in Springfield MO?**\nA: Hydro-jetting: $300–$600. Camera inspection: $200–$400. Spot repair: $500–$1,500. Full replacement: $4,000–$12,000+.\n\n**Q: Is sewer backup covered by homeowner's insurance in Missouri?**\nA: Not by standard policies. A sewer backup rider costs $50–$100 per year. Check your policy now.` },
    ],
  },
  'tankless-vs-tank-water-heater-springfield-mo': {
    intro: `When Springfield MO homeowners need a new water heater, the most important decision is tankless vs tank. Both work well, but the right choice depends on your household size, budget, and how long you plan to stay in the home. Here is an honest comparison from a licensed Springfield MO plumber.`,
    sections: [
      { h2: 'How Tank Water Heaters Work (and Their Limitations)', content: `Tank water heaters store 30–80 gallons of water, heating it continuously so hot water is always ready. When you run out of stored hot water, you wait 20–40 minutes for recovery.\n\n**Advantages:** Lower upfront cost ($700–$1,400 installed), simpler installation, compatible with any home.\n\n**Limitations:** Standby heat loss (energy consumed keeping stored water hot 24/7), limited hot water supply, 8–12 year lifespan.` },
      { h2: 'How Tankless Water Heaters Work (On-Demand Hot Water)', content: `Tankless units heat water instantly as it flows through — no stored tank. Hot water is unlimited as long as the unit flow rate is not exceeded.\n\n**Advantages:** Unlimited hot water, 20–30% lower energy costs, 20+ year lifespan, compact wall-mount, no standby heat loss.\n\n**Limitations:** Higher upfront cost ($1,500–$3,500 installed), may require gas line upgrade, higher repair cost per incident.` },
      { h2: 'Upfront Cost Comparison — Springfield MO 2026', content: `**Tank Water Heater Cost in Springfield MO:**\n• 40-gallon gas unit installed: $800–$1,200\n• 50-gallon gas unit installed: $900–$1,400\n• 40-gallon electric unit installed: $700–$1,100\n\n**Tankless Water Heater Cost in Springfield MO:**\n• Gas tankless installed: $1,800–$3,000\n• Electric tankless installed: $1,500–$2,500\n• Condensing gas tankless (highest efficiency): $2,500–$3,500` },
      { h2: 'Monthly Operating Cost Comparison', content: `Based on Springfield MO utility rates and average household usage:\n\n• **Tank gas heater:** ~$35–$50/month\n• **Tankless gas heater:** ~$25–$38/month (20–30% savings)\n• **Tank electric heater:** ~$45–$65/month\n• **Tankless electric heater:** ~$35–$50/month\n\nOver 10 years, energy savings typically offset $1,500–$2,500 of the higher upfront cost.` },
      { h2: 'Which Is Right for Your Springfield MO Home?', content: `**Choose Tank Water Heater If:**\n• You need the lowest upfront cost\n• You plan to sell within 3 years\n• Household water use is low (1–2 people)\n\n**Choose Tankless If:**\n• You plan to stay in the home 5+ years\n• You have a larger household (3+ people)\n• Energy savings and unit longevity matter more than upfront cost\n• You want to eliminate running out of hot water` },
      { h2: 'Frequently Asked Questions — Tankless Water Heater Springfield MO', content: `**Q: How much does a tankless water heater cost to install in Springfield MO?**\nA: $1,500–$3,500 fully installed depending on the unit and whether gas line upgrades are needed.\n\n**Q: Is a tankless water heater worth it in Springfield MO?**\nA: For most homeowners staying 5+ years, yes. 20+ year lifespan, 20–30% energy savings, and unlimited hot water typically offset the higher upfront cost.\n\n**Q: What is the lifespan difference?**\nA: Tank units last 8–12 years. Tankless units last 20+ years with annual descaling.` },
    ],
  },
  'plumbing-cost-springfield-mo-2026': {
    intro: `Before you call a plumber in Springfield MO, knowing what fair pricing looks like protects you from overpaying. This is a complete 2026 pricing guide for every common plumbing service in Springfield MO — sourced from real local market rates.`,
    sections: [
      { h2: 'Emergency Plumber Cost Springfield MO', content: `• **Diagnostic/call-out fee:** $0 (reputable plumbers charge no call-out fee)\n• **After-hours emergency diagnostic:** $100–$200\n• **Emergency service premium:** 25–50% above standard rates for nights, weekends, and holidays\n\nA plumber who cannot tell you the after-hours premium upfront is a red flag.` },
      { h2: 'Drain Cleaning Cost Springfield MO', content: `• **Basic drain snake (single drain):** $150–$300\n• **Hydro-jetting (severe/recurring clogs):** $300–$600\n• **Main sewer line cleaning:** $300–$600\n• **Camera inspection:** $200–$400\n• **Drain cleaning + camera combo:** $400–$700` },
      { h2: 'Water Heater Repair Cost Springfield MO', content: `• **Thermocouple replacement (gas):** $150–$250\n• **Heating element replacement (electric):** $150–$300\n• **Thermostat replacement:** $150–$300\n• **Pressure relief valve replacement:** $100–$200\n• **Anode rod replacement:** $150–$250` },
      { h2: 'Water Heater Replacement Cost Springfield MO', content: `• **40-gal gas tank (installed):** $800–$1,200\n• **50-gal gas tank (installed):** $900–$1,400\n• **40-gal electric tank (installed):** $700–$1,100\n• **Gas tankless (installed):** $1,800–$3,000\n• **Electric tankless (installed):** $1,500–$2,500` },
      { h2: 'Sewer Line Repair Cost Springfield MO', content: `• **Camera inspection:** $200–$400\n• **Hydro-jetting:** $300–$600\n• **Spot repair (single section):** $500–$1,500\n• **Trenchless pipe lining (full line):** $3,000–$8,000\n• **Trenchless pipe bursting:** $3,500–$9,000\n• **Traditional open-trench replacement:** $4,000–$12,000+` },
      { h2: 'Leak Detection Cost Springfield MO', content: `• **Basic leak detection:** $200–$500\n• **Slab leak detection:** $300–$600\n• **Full home leak inspection:** $400–$700` },
      { h2: 'Pipe Repair and Repiping Cost Springfield MO', content: `• **Single pipe section repair:** $200–$600\n• **Partial repipe (section of home):** $1,500–$4,000\n• **Full home repipe:** $5,000–$15,000+\n• **Water line from meter to home:** $1,500–$4,000` },
      { h2: 'How to Get an Honest Plumbing Quote in Springfield MO', content: `• Always get a **written estimate** before approving any work\n• Verify the plumber is **Missouri-licensed** at pr.mo.gov\n• Never pay **100% upfront** — 25–50% deposit is standard\n• Get a second opinion on any job over **$1,000**\n• Ask if the price includes parts, labor, and any permits required` },
      { h2: 'Frequently Asked Questions — Plumbing Prices Springfield MO', content: `**Q: What is the average plumber cost per hour in Springfield MO?**\nA: $85–$150/hour standard. $125–$225/hour emergency after-hours. Most jobs are flat-rate.\n\n**Q: Does it cost more to call a plumber at night?**\nA: Yes — typically 25–50% premium. Always disclosed upfront in our written estimates.\n\n**Q: What does drain cleaning cost in Springfield MO?**\nA: Basic snaking: $150–$300. Hydro-jetting: $300–$600.` },
    ],
  },
  'trenchless-sewer-repair-springfield-mo': {
    intro: `Traditional sewer line replacement meant tearing up your yard, driveway, or landscaping for days. Trenchless sewer repair changed that for most Springfield MO homeowners — but it is not the right solution for every situation. Here is an honest breakdown of how it works, what it costs, and when to choose it.`,
    sections: [
      { h2: 'What Is Trenchless Sewer Repair?', content: `Trenchless sewer repair is an umbrella term for methods that repair or replace damaged sewer lines with minimal excavation. Instead of digging a trench along the entire pipe route, trenchless methods access the pipe at one or two points and work from the inside or along the pipe path underground.` },
      { h2: 'Two Types of Trenchless Sewer Repair Available in Springfield MO', content: `**Pipe Lining (Cured-in-Place Pipe / CIPP)**\nA flexible epoxy-saturated liner is pulled into the damaged pipe and cured with heat or UV light, creating a smooth jointless pipe-within-a-pipe. Effective for cracks, root intrusion, and corrosion. The finished pipe has a 50-year manufacturer warranty.\n\n**Pipe Bursting**\nA bursting head is pulled through the old pipe, fracturing it outward while simultaneously pulling a new pipe into place behind it. Used when the existing pipe is too deteriorated to line.` },
      { h2: 'Trenchless vs Traditional Sewer Repair — Cost Comparison Springfield MO', content: `• **Trenchless pipe lining:** $3,000–$8,000\n• **Trenchless pipe bursting:** $3,500–$9,000\n• **Traditional open-trench replacement:** $4,000–$12,000+\n\nTraditional replacement costs appear lower on paper but exclude:\n• Landscape restoration: $500–$3,000+\n• Driveway or concrete repair: $1,000–$5,000+\n• Extended job time (2–5 days vs 4–8 hours)\n\nFor most Springfield MO homeowners with established yards, trenchless is more cost-effective overall.` },
      { h2: 'When Is Trenchless Sewer Repair the Right Choice?', content: `Trenchless is the right choice when:\n• The pipe has cracks, root intrusion, or corrosion but retains its basic shape\n• The pipe passes under landscaping, driveways, or structures you want to preserve\n• Speed matters (4–8 hours vs 2–5 days)\n• The pipe material is viable for lining (PVC, cast iron, clay)` },
      { h2: 'When You CANNOT Use Trenchless Methods', content: `Trenchless does NOT work when:\n• The pipe has fully collapsed and has no remaining shape for a liner\n• There is severe bellying (sagging sections holding standing water)\n• The pipe is lead (requires full removal)\n\nA camera inspection is non-negotiable — it tells us which method applies.` },
      { h2: 'Frequently Asked Questions — Trenchless Sewer Repair Springfield MO', content: `**Q: How much does trenchless sewer repair cost in Springfield MO?**\nA: Pipe lining: $3,000–$8,000. Pipe bursting: $3,500–$9,000.\n\n**Q: How long does trenchless pipe lining last?**\nA: CIPP lining carries a 50-year manufacturer warranty.\n\n**Q: Can every Springfield MO sewer line use trenchless methods?**\nA: No. A camera inspection determines which method applies.\n\n**Q: How long does trenchless sewer repair take?**\nA: Pipe lining: 4–8 hours. Pipe bursting: 1–2 days.` },
    ],
  },
  'water-heater-making-noise-springfield-mo': {
    intro: `A water heater that starts making unusual sounds is trying to tell you something. In Springfield MO, the most common water heater noises — popping, rumbling, hissing, banging — each have a specific cause with a specific fix. Here is what every noise means and what to do about it.`,
    sections: [
      { h2: 'Popping or Rumbling Noise (Most Common)', content: `**Cause: Sediment Buildup at the Bottom of the Tank**\nHard water minerals settle at the bottom of the tank. When the heating element activates, water trapped under the sediment layer boils and pops through it.\n\n**Fix: Flush the Water Heater**\nFlushing the tank removes the sediment. Do this annually. If popping continues after flushing, the sediment may be calcified — a sign the tank needs replacement.` },
      { h2: 'Hissing or Sizzling Sounds', content: `**Cause:** Water contacting a hot surface — either condensation dripping on a burner (normal on new tanks) or, more seriously, a slow leak dripping onto the burner assembly.\n\n**What to do:** If hissing is accompanied by any moisture near the unit, call a plumber immediately. A leaking water heater tank cannot be repaired — it must be replaced.` },
      { h2: 'Banging or Knocking (Thermal Expansion)', content: `**Cause:** Water hammer — pressure surges when hot water valves close quickly cause pipes to knock against framing. Also caused by thermal expansion of pipes as they heat and cool.\n\n**Fix:** A licensed plumber can install a thermal expansion tank or water hammer arrestors on supply lines. Do not ignore persistent banging — it stresses pipe joints.` },
      { h2: 'Ticking Sounds from the Tank', content: `**Cause:** Normal thermal expansion and contraction as the tank heats and cools. Usually heard during heating cycles. Not a sign of damage.\n\n**What to do:** If ticking is mild and intermittent, it is normal. If it intensifies or combines with other noises, have a plumber inspect the unit.` },
      { h2: 'Screeching or Whining Noises', content: `**Cause:** Water being forced through a partially closed valve — usually a supply valve not reopened fully after maintenance, or a failing inlet valve.\n\n**Fix:** Check that all supply and outlet valves are fully open. If the sound persists, the valve is failing. Call a plumber.` },
      { h2: 'How to Flush Your Water Heater in Springfield MO', content: `**Step 1:** Set thermostat to Pilot (gas) or turn off breaker (electric).\n**Step 2:** Connect a garden hose to the drain valve at the tank bottom. Run to a drain or outside.\n**Step 3:** Open a nearby hot water faucet to prevent a vacuum.\n**Step 4:** Open the drain valve and let the tank empty. Flush with cold supply briefly once clear.\n**Step 5:** Close the valve, refill the tank completely, then restore power or relight the pilot.` },
      { h2: 'When Noise Means You Need a Plumber', content: `Call (417) 373-4862 if you have:\n• Popping that continues after flushing (calcified sediment — replace unit)\n• Any hissing with visible moisture or leaking\n• Banging that has not responded to a hammer arrestor\n• A unit that is 10+ years old with any of the above\n• Screeching that persists after checking all valves` },
      { h2: 'Frequently Asked Questions — Water Heater Noises Springfield MO', content: `**Q: Why is my water heater making a popping noise?**\nA: Sediment buildup at the bottom of the tank. Flush it annually. If it continues after flushing, the tank may need replacement.\n\n**Q: Is a noisy water heater dangerous?**\nA: Most noises are not immediately dangerous but indicate wear. Hissing with moisture is an exception — call immediately.\n\n**Q: How often should a water heater be flushed in Springfield MO?**\nA: Once per year. Homes with hard well water: every 6 months.` },
    ],
  },
  'how-to-choose-emergency-plumber-springfield-mo': {
    intro: `When a pipe bursts or sewage backs up at midnight, you do not have time to thoroughly research your options. But the plumber you call in an emergency can either solve your problem quickly and fairly — or make it significantly worse. This guide gives you a fast checklist to choose right, even under pressure.`,
    sections: [
      { h2: '1. Verify They Are Licensed in Missouri', content: `Missouri requires all plumbers to hold a state-issued license. A licensed plumber has passed exams, carries required insurance, and is accountable to the Missouri Division of Professional Registration.\n\n**How to verify:** Ask for the license number and check at pr.mo.gov. Any plumber who refuses to give you their license number is unlicensed — hang up and call someone else.` },
      { h2: '2. Check That They Are Actually Available 24/7', content: `Many companies advertise 24/7 service but route after-hours calls to an answering service that schedules next-morning appointments. A true emergency plumber answers the phone, gives you a response time, and dispatches immediately.\n\n**Test:** Call the number. If you reach voicemail or a service that cannot confirm dispatch time, keep calling.` },
      { h2: '3. Ask About Upfront Pricing Before They Start', content: `Emergency pricing can be 25–50% higher than standard rates. This is legitimate — but must be disclosed upfront, not on the final bill.\n\n**What to ask:** "Can you give me a written price before you start any work?" Any plumber who says no is a red flag.` },
      { h2: '4. Check Google Reviews — Look for Recent Local Reviews', content: `Check Google Maps reviews filtered to most recent. Look for:\n• 4.5+ star average with 50+ reviews\n• Recent reviews mentioning emergency response\n• How the company responds to negative reviews\n\nBe cautious of companies with many 5-star reviews posted in a short window — this pattern suggests fabricated reviews.` },
      { h2: '5. Confirm Fast Response Time to Your Area', content: `Ask directly: "How fast can you get to [your address]?" A reputable Springfield MO emergency plumber should commit to within 60 minutes for most metro locations. "As soon as possible" without a time estimate means keep calling.` },
      { h2: 'Red Flags — Plumbers to Avoid in Springfield MO', content: `**Refusing to Give a Written Quote**\nAny plumber who will not put the price in writing before starting plans to charge whatever they want when finished.\n\n**No MO License Number Available**\nUnlicensed plumbers have no accountability and often no insurance.\n\n**Extremely Low Prices (Bait and Switch)**\n"$49 drain clearing" becomes $600 once they are inside your home.` },
      { h2: 'Questions to Ask Before Hiring an Emergency Plumber', content: `• Are you licensed in Missouri? What is your license number?\n• Do you charge a call-out or diagnostic fee?\n• Can you give me a written price before starting?\n• What is your ETA to my address?\n• Do you carry liability insurance?\n• Do you offer a warranty on emergency repairs?` },
      { h2: 'Frequently Asked Questions — Emergency Plumber Springfield MO', content: `**Q: How do I verify a plumber is licensed in Missouri?**\nA: Go to pr.mo.gov and search by name or license number. Takes 60 seconds.\n\n**Q: What should a plumber tell me before starting emergency work?**\nA: The diagnosis, specific repair, total price including parts and labor, and any after-hours fees — in writing.\n\n**Q: How fast should an emergency plumber arrive in Springfield MO?**\nA: Within 60 minutes for most Springfield metro locations.` },
    ],
  },
  'signs-you-need-a-plumber-springfield-mo': {
    intro: `Not every plumbing problem requires an emergency call. But some do — and calling too late turns a $300 fix into a $3,000 repair. Here are the 5 signs that mean you need to call a Springfield MO plumber right now, not tomorrow.`,
    sections: [
      { h2: 'Sign 1 — Water Is Coming Out of Something That Should Be Dry', content: `Active water escaping from a pipe, fitting, valve, or appliance connection is a plumbing emergency. Water damage spreads fast — into walls, subfloor, and insulation in minutes. Shut off the main water supply immediately and call (417) 373-4862.` },
      { h2: 'Sign 2 — Multiple Drains Backing Up at Once', content: `One slow drain is a clog. Multiple drains slow or backing up simultaneously — toilet, shower, and sinks all at once — means your main sewer line is blocked. This progresses to sewage backup inside your home if not addressed immediately.` },
      { h2: 'Sign 3 — No Hot Water and Reset Did Not Fix It', content: `No hot water in a Springfield MO winter is more than an inconvenience. If resetting the breaker (electric) or relighting the pilot (gas) does not restore hot water within an hour, you have a failed component or a dead unit. A plumber can diagnose and repair same day.` },
      { h2: 'Sign 4 — Your Water Bill Spiked Without Explanation', content: `A water bill that jumps 20%+ without any change in usage almost always means a hidden leak — inside a wall, under the slab, or underground. Hidden leaks cause mold, structural damage, and continue wasting water every day until found.` },
      { h2: 'Sign 5 — Sewage Smell Inside Your Home', content: `A sewage or sulfur smell inside your home — not just near a drain — indicates sewer gas entering your living space. Sewer gas contains methane and hydrogen sulfide, which are both toxic and flammable. Call immediately.` },
      { h2: 'Signs That Can Wait vs Signs That Need Immediate Action', content: `**Call immediately:**\n• Active water leak or burst pipe\n• Multiple drains backing up at once\n• Sewage smell inside the home\n• No hot water in winter\n• Water near electrical panels or outlets\n\n**Can wait for next business day:**\n• Single dripping faucet\n• One slow drain\n• Running toilet (if not flooding)\n• Low water pressure without other symptoms` },
      { h2: 'What Happens If You Wait Too Long to Call a Plumber?', content: `Most plumbing disasters we respond to in Springfield MO started as minor ignored symptoms:\n• A slow leak became a burst pipe after months of hidden water damage\n• A single slow drain became a sewage backup\n• A noisy water heater became a flooded utility room\n\nThe repair cost for an ignored problem is almost always 3–10x what it would have been if caught early.` },
      { h2: 'Frequently Asked Questions — When to Call a Plumber in Springfield MO', content: `**Q: How do I know if I have a plumbing emergency?**\nA: Active leaks, multiple simultaneous drain backups, sewage smell inside, no hot water in winter, and water near electrical panels all require same-day service.\n\n**Q: Can I wait until morning to call a plumber?**\nA: For a dripping faucet or one slow drain — yes. For any of the 5 signs above — no. Waiting overnight often causes thousands in additional damage.\n\n**Q: What happens if I ignore a plumbing problem?**\nA: A $300 fix becomes $3,000+. Hidden leaks cause mold within 24–48 hours. Act early.` },
    ],
  },
  'low-water-pressure-springfield-mo': {
    intro: `Low water pressure in your Springfield MO home is one of the most frustrating plumbing problems — a weak shower, slow-filling appliances, and a trickle from the kitchen faucet. But low pressure is always caused by something specific, and most causes have a clear fix. Here is how to diagnose and resolve low water pressure in your Springfield MO home.`,
    sections: [
      { h2: 'Is It Just Your Home or the Whole Street? (How to Check)', content: `Before assuming the problem is inside your home, check with a neighbor on the same water main. If they also have low pressure, contact City Utilities of Springfield — the issue is with municipal supply, not your plumbing.\n\nIf only your home has low pressure, the cause is inside your property.` },
      { h2: 'Cause 1 — Partially Closed Main Shutoff Valve', content: `The simplest and most overlooked cause. If your main shutoff valve was partially closed during maintenance and not fully reopened, it restricts flow to the entire house.\n\n**Fix:** Locate your main shutoff valve and make sure it is fully open. Gate valves: turn counterclockwise until it stops. Ball valves: lever should be parallel to the pipe. This takes 30 seconds.` },
      { h2: 'Cause 2 — Corroded or Mineral-Clogged Pipes', content: `Older Springfield MO homes with galvanized steel pipes face internal corrosion and mineral buildup that progressively reduces pipe diameter over decades.\n\n**Signs:** Low pressure at all fixtures, gradually worsening over years, rusty or discolored water.\n\n**Fix:** Partial or full repipe. A licensed plumber can assess which sections are affected.` },
      { h2: 'Cause 3 — Failing Pressure Regulator', content: `Most Springfield MO homes have a pressure regulator (a bell-shaped device) where the main water line enters the house. When it fails, pressure drops throughout the house.\n\n**Signs:** Sudden whole-house pressure drop, often with pressure that fluctuates.\n\n**Fix:** Pressure regulator replacement by a licensed plumber. Cost: $200–$500.` },
      { h2: 'Cause 4 — Hidden Leak Reducing Pressure', content: `A significant hidden leak can reduce flow to fixtures by diverting water out of the system before it reaches your faucets.\n\n**Signs:** Low pressure throughout the house combined with a higher water bill or sounds of running water when nothing is on.\n\n**Fix:** Professional leak detection. Call (417) 373-4862.` },
      { h2: 'Cause 5 — Water Heater Supply Valve Issue', content: `If low pressure is isolated to hot water only, the shutoff valve on the cold supply line to your water heater may be partially closed.\n\n**Check:** Find the cold supply shutoff valve on top of the water heater and confirm it is fully open.` },
      { h2: 'Cause 6 — Municipal Supply Pressure Drop', content: `City Utilities of Springfield maintains distribution pressure between 40–80 PSI. During peak demand, pressure can drop temporarily. If your pressure problems are intermittent and neighborhood-wide, contact City Utilities.` },
      { h2: 'How to Check Your Water Pressure Yourself', content: `A water pressure gauge ($10–$20 at any hardware store) screws onto an outdoor hose bib.\n\n1. Turn off all water inside the house\n2. Attach the gauge to an outdoor spigot\n3. Read the static pressure\n\n**Normal:** 40–80 PSI\n**Low:** Below 40 PSI — investigate causes above\n**High:** Above 80 PSI — pressure regulator may need adjustment` },
      { h2: 'Frequently Asked Questions — Low Water Pressure Springfield MO', content: `**Q: What is normal water pressure in Springfield MO?**\nA: 40–80 PSI. City Utilities maintains distribution in this range.\n\n**Q: Can low water pressure be fixed without a plumber?**\nA: Sometimes — a partially closed valve is a DIY fix in seconds. Failing pressure regulators, corroded pipes, and hidden leaks require a licensed plumber.\n\n**Q: How much does it cost to fix low water pressure in Springfield MO?**\nA: Pressure regulator: $200–$500. Corroded pipe section: $300–$800. Hidden leak detection: $200–$400 plus repair.` },
    ],
  },
  'how-much-does-a-plumber-cost-springfield-mo': {
    intro: `One of the most common questions homeowners in Springfield MO ask before calling a plumber is: "How much is this going to cost me?" It's a fair question — and the answer depends on what type of plumbing service you need, when you call, and the complexity of the job.`,
    sections: [
      { h2: 'Average Plumbing Costs in Springfield MO', content: `• **Emergency call-out (nights & weekends):** $150–$300 diagnostic fee\n• **Drain cleaning (basic):** $150–$300\n• **Drain cleaning (hydro-jetting):** $300–$600\n• **Leak detection:** $200–$500\n• **Water heater repair:** $150–$400\n• **Water heater replacement:** $800–$2,000+\n• **Sewer line repair:** $1,500–$5,000+\n• **Pipe repair (single break):** $200–$600` },
      { h2: 'What Makes Emergency Plumbing More Expensive?', content: `1. **After-hours labor rates** — Plumbers working at 2am on a Sunday deserve compensation for that availability\n2. **Urgency premium** — Parts may need to be sourced immediately\n3. **Complexity** — Emergencies are often harder problems than routine maintenance` },
      { h2: 'How to Avoid Plumbing Scams in Springfield MO', content: `• Always ask for a **written estimate** before work begins\n• Verify the plumber is **licensed in Missouri**\n• Don't pay 100% upfront\n• Get a second opinion on any job over $1,000\n• Check Google reviews and the BBB listing` },
      { h2: 'Frequently Asked Questions About Plumbing Costs in Springfield MO', content: `**Q: Do you charge extra for emergency calls at night?**\nA: We provide upfront pricing before starting any work. No surprise fees.\n\n**Q: Is there a call-out fee?**\nA: We charge $0 call-out fees. You only pay for work performed.\n\n**Q: Can I get a price estimate over the phone?**\nA: We can give ranges, but accurate pricing requires seeing the problem in person.` },
    ],
  },
  'best-plumber-near-me-springfield-mo': {
    intro: `Searching "plumber near me" in Springfield MO returns dozens of results — but how do you know which one to trust? Especially when you're stressed about a flooding basement or a burst pipe, choosing the wrong plumber can make your day much worse.`,
    sections: [
      { h2: 'What to Look For in a Springfield MO Plumber', content: `**1. Missouri State License** — Always verify the plumber holds a valid Missouri plumbing license.\n\n**2. Liability Insurance** — If a plumber damages your home during work, their insurance covers it.\n\n**3. Google Reviews** — Look for 4.5+ stars with 50+ reviews.\n\n**4. Upfront Pricing** — Any plumber who won't give you a price before starting is a red flag.\n\n**5. 24/7 Availability** — Plumbing emergencies don't happen on schedule.` },
      { h2: 'Questions to Ask Before Hiring a Plumber in Springfield MO', content: `• Are you licensed and insured in Missouri?\n• Do you charge a call-out or diagnostic fee?\n• Can you give me a written estimate before starting?\n• How long have you been serving Springfield MO?\n• Do you offer a warranty on your work?` },
      { h2: 'Red Flags to Watch Out For', content: `Avoid any plumber who:\n• Demands full payment upfront\n• Can't provide a license number\n• Gives a suspiciously low estimate\n• Has no reviews or only a few new reviews\n• Pressures you to decide immediately` },
    ],
  },
  'plumber-open-24-hours-springfield-missouri': {
    intro: `Plumbing emergencies are cruel — they almost always happen at the worst possible time. A pipe bursts at midnight. The toilet overflows the morning of a big event. The water heater dies on Christmas Eve. When it happens, you need a 24-hour plumber in Springfield Missouri who actually picks up.`,
    sections: [
      { h2: 'What to Do First in a Plumbing Emergency', content: `**Step 1:** Shut off the main water valve — clockwise until stopped.\n**Step 2:** Turn off the water heater.\n**Step 3:** Document damage with photos and video.\n**Step 4:** Call (417) 373-4862 immediately.` },
      { h2: 'What to Expect from a 24/7 Plumber in Springfield MO', content: `• Answer the phone immediately — not voicemail\n• Dispatch within minutes of your call\n• Arrive with tools and common parts for emergency repairs\n• Diagnose the problem and give you a price before starting\n• Fix the root cause, not just a temporary patch` },
      { h2: 'How Long Will You Wait for a 24-Hour Plumber?', content: `Our emergency plumbers in Springfield MO aim to arrive within 60 minutes. Call immediately — the sooner you call, the sooner we arrive.` },
    ],
  },
  'how-to-fix-burst-pipe-springfield-mo': {
    intro: `A burst pipe in your Springfield MO home is one of the most stressful plumbing emergencies you can face. Water can spread in minutes, damaging floors, walls, furniture, and personal belongings. Here's exactly what to do in the first 10 minutes.`,
    sections: [
      { h2: 'Step 1: Shut Off Your Water Immediately', content: `Find your main water shutoff valve:\n• Basements: often near the front foundation wall\n• Crawlspaces: near where the water line enters\n• Outside: near the water meter at the street\n\nTurn clockwise until it stops.` },
      { h2: 'Step 2: Turn Off Your Water Heater', content: `After shutting off the main water, turn off your water heater. For gas heaters, set to "pilot" mode. For electric heaters, turn off the breaker.` },
      { h2: 'Step 3: Drain Remaining Water', content: `Open all faucets in the house to drain remaining water. Flush toilets to empty tanks. This reduces pressure and limits further leaking.` },
      { h2: 'Step 4: Document Everything', content: `Before cleanup, photograph and video all water damage. This is critical for your homeowner's insurance claim.` },
      { h2: 'Step 5: Call an Emergency Plumber in Springfield MO', content: `Call (417) 373-4862 immediately. Do not attempt a permanent pipe repair yourself unless you have plumbing experience. Our emergency plumbers can repair most burst pipes on the first visit.` },
    ],
  },
  'emergency-plumbing-cost-springfield-mo': {
    intro: `When a plumbing emergency strikes, the last thing you want is a surprise bill. Here's a completely transparent breakdown of emergency plumbing costs in Springfield MO — what you'll typically pay, what drives costs up, and how to make sure you're never overcharged.`,
    sections: [
      { h2: 'Typical Emergency Plumbing Costs in Springfield MO', content: `• **Burst pipe repair:** $300–$800\n• **Sewer backup clearing:** $300–$600\n• **Emergency drain cleaning:** $200–$400\n• **Toilet overflow (emergency):** $150–$350\n• **Water heater emergency repair:** $200–$500\n• **Gas line emergency:** $400–$1,500+` },
      { h2: 'What Affects Emergency Plumbing Pricing?', content: `**Time of day/week:** Nights, weekends, and holidays carry higher rates.\n**Problem complexity:** A simple clog costs less than a collapsed sewer line.\n**Parts required:** Emergency parts may cost more to source immediately.\n**Access difficulty:** Pipes inside walls or under slabs cost more to access.` },
      { h2: 'How to Avoid Emergency Plumbing Scams', content: `**Always demand a written estimate** before any work begins.\n**Never pay 100% before work is complete.**\n**Verify the license** at pr.mo.gov.\n\nOur company never charges hidden fees. The price we quote is the price you pay.` },
    ],
  },
  'signs-you-need-drain-cleaning-springfield-mo': {
    intro: `Most Springfield MO homeowners ignore early drain warning signs until they have a complete blockage or sewage backup. By then, the problem is more expensive to fix. Here are 7 signs that your drains need professional cleaning now.`,
    sections: [
      { h2: '7 Signs You Need Drain Cleaning in Springfield MO', content: `**1. Slow-draining sinks or tubs** — Water pooling 30+ seconds after stopper is pulled.\n\n**2. Recurring clogs** — Plunged the same drain 3+ times this month.\n\n**3. Bad odors from drains** — Sulfur or sewage smells indicate organic buildup.\n\n**4. Gurgling sounds** — After flushing or running the dishwasher.\n\n**5. Multiple slow drains at once** — Main sewer line issue, not individual clogs.\n\n**6. Water backing up in unexpected places** — Shower fills when toilet is flushed.\n\n**7. Fruit flies near drains** — They breed in organic buildup inside clogged pipes.` },
      { h2: 'DIY vs Professional Drain Cleaning', content: `Use a plunger for a single surface-level clog in one drain.\n\nCall a professional for:\n• Recurring clogs\n• Multiple slow drains\n• Gurgling or sewage smells\n• Any main line symptoms\n\nHydro-jetting removes not just the blockage but all buildup on pipe walls.` },
    ],
  },
  'water-heater-not-working-springfield-mo': {
    intro: `A water heater that stops working is more than an inconvenience — especially in a Springfield MO winter. Whether you're getting cold water, discolored water, or no water at all, here's how to diagnose the problem and decide whether to repair or replace your unit.`,
    sections: [
      { h2: 'Common Reasons Your Water Heater Stopped Working', content: `**No hot water at all:**\nGas: pilot may be out — relight per label instructions. Won't stay lit: thermocouple failure.\nElectric: check the breaker — reset and wait an hour.\n\n**Lukewarm water:** Thermostat too low (set 120–140°F) or heating element failing.\n\n**Rusty or discolored water:** Tank corroding inside — replace unit.\n\n**Popping or rumbling:** Sediment buildup — flush the tank.` },
      { h2: 'Repair vs Replace: How to Decide', content: `**Repair if:** Under 8 years old, single component failed, no corrosion, no leaks.\n\n**Replace if:** 10+ years old, rust or corrosion visible, tank leaking, repeated repairs, or repair cost exceeds 50% of replacement.` },
      { h2: 'Water Heater Costs in Springfield MO', content: `• **Thermocouple replacement:** $150–$250\n• **Heating element:** $150–$300\n• **New gas unit (40 gal, installed):** $800–$1,400\n• **New electric unit (40 gal, installed):** $700–$1,200\n• **Tankless (installed):** $1,500–$3,500` },
    ],
  },
  'how-to-prevent-frozen-pipes-springfield-mo': {
    intro: `Springfield MO winters can drop well below freezing — and frozen pipes are one of the most damaging and preventable plumbing emergencies homeowners face. A single burst pipe can release hundreds of gallons of water into your home. Here's how to protect your pipes before temperatures drop.`,
    sections: [
      { h2: 'Which Pipes Are Most at Risk in Springfield MO Homes?', content: `• **Exterior walls** — uninsulated\n• **Crawlspaces** — poorly insulated\n• **Garages** — especially with utility connections\n• **Attics** — unheated spaces\n• **Outdoor hose bibs** — must be winterized annually` },
      { h2: '7 Ways to Prevent Frozen Pipes in Springfield MO', content: `**1.** Insulate exposed pipes with foam insulation\n**2.** Disconnect garden hoses before first freeze\n**3.** Shut off and drain outdoor hose bibs\n**4.** Keep thermostat at 55°F minimum\n**5.** Open cabinet doors under sinks on exterior walls\n**6.** Let faucets drip during extreme cold\n**7.** Know where your main shutoff is` },
      { h2: 'What to Do If Your Pipes Are Already Frozen', content: `**Do:** Leave faucet open, apply gentle heat with a hair dryer, use heating tape.\n\n**Do NOT:** Use open flame or propane torch, use a heat gun at high settings, ignore it.\n\nIf the pipe has burst, call (417) 373-4862 immediately.` },
    ],
  },
  'sewer-line-repair-vs-replacement-springfield-mo': {
    intro: `When a Springfield MO homeowner hears they need sewer line work, the immediate question is: repair or replace? The answer depends on the type of damage, the age of your sewer line, and the long-term cost.`,
    sections: [
      { h2: 'Signs You Have a Sewer Line Problem', content: `• Multiple drains slow or clogged simultaneously\n• Raw sewage smell inside or outside\n• Gurgling toilets and drains\n• Water backing up in lowest drains\n• Green, lush patches in the yard above sewer line\n• Foundation cracks or sinkholes\n• Rodent or insect infestations` },
      { h2: 'Sewer Line Repair vs Replacement: Key Differences', content: `**Repair when:** Damage is isolated, pipe material is sound, line is under 20 years old.\n\n**Replace when:** Entire line is deteriorated, pipe is bellied, material is clay or Orangeburg, repeated repairs have failed.` },
      { h2: 'Sewer Line Costs in Springfield MO', content: `• **Camera inspection:** $200–$400\n• **Spot repair:** $500–$1,500\n• **Trenchless pipe lining:** $3,000–$8,000\n• **Full replacement (traditional):** $4,000–$12,000+\n• **Pipe bursting:** $3,500–$9,000` },
    ],
  },
  'leak-detection-springfield-mo-guide': {
    intro: `A hidden water leak in your Springfield MO home can go undetected for months — silently causing mold growth, structural damage, and skyrocketing water bills. Professional leak detection finds the problem before it becomes a catastrophe.`,
    sections: [
      { h2: 'Signs You Have a Hidden Water Leak', content: `**Higher than normal water bills** — A 20%+ spike with no change in usage.\n**Sound of running water when nothing is on** — Water is leaking somewhere.\n**Damp or discolored walls, floors, or ceilings** — Water pooling behind drywall.\n**Mold or mildew smell** — Hidden moisture creates mold within 24–48 hours.\n**Warm spots on the floor** — Slab leak indicator.\n**Low water pressure throughout the house** — Serious leak diverting supply.` },
      { h2: 'How Professional Leak Detection Works', content: `**Acoustic detection** — Listening equipment picks up water escaping behind walls and under slabs.\n**Thermal imaging** — Infrared cameras reveal moisture through temperature differences.\n**Pressure testing** — Isolated pipe sections tested for pressure drop.\n**Video inspection** — Camera confirms the exact crack or failure point.` },
      { h2: 'Leak Detection Costs in Springfield MO', content: `• **Basic leak detection:** $200–$500\n• **Slab leak detection:** $300–$600\n• **Full home inspection:** $400–$700\n\nThe cost of detection is almost always less than one month of damage from an undetected leak.` },
    ],
  },
}

// ── RESPONSIVE STYLES ─────────────────────────────────────────
const RESPONSIVE_CSS = `
  /* ── Outer wrapper ── */
  @media (max-width: 768px) { .bp-outer { padding-top: 70px !important; } }
  @media (max-width: 480px) { .bp-outer { padding-top: 60px !important; } }

  /* ── Hero ── */
  @media (max-width: 900px) { .bp-hero { padding: 48px 5% 36px !important; } }
  @media (max-width: 768px) {
    .bp-hero { padding: 36px 5% 28px !important; }
    .bp-hero h1 { font-size: clamp(22px, 5.5vw, 32px) !important; line-height: 1.2 !important; }
    .bp-hero p  { font-size: 15px !important; line-height: 1.65 !important; }
    .bp-meta    { gap: 8px !important; flex-wrap: wrap !important; }
    .bp-breadcrumb a, .bp-breadcrumb span { font-size: 12px !important; }
  }
  @media (max-width: 480px) {
    .bp-hero { padding: 26px 4% 22px !important; }
    .bp-hero h1 { font-size: clamp(20px, 6vw, 26px) !important; }
  }

  /* ── Featured image ── */
  .bp-featured-img { height: 400px; width: 100%; object-fit: cover; display: block; }
  @media (max-width: 900px) { .bp-featured-img { height: 280px !important; } }
  @media (max-width: 768px) { .bp-featured-img { height: 210px !important; } }
  @media (max-width: 480px) { .bp-featured-img { height: 170px !important; } }

  /* ── Article body ── */
  @media (max-width: 900px) { .bp-article { padding: 40px 5% 64px !important; } }
  @media (max-width: 768px) {
    .bp-article { padding: 28px 5% 52px !important; }
    .bp-intro   { font-size: 15px !important; line-height: 1.75 !important; padding-left: 14px !important; margin-bottom: 28px !important; }
    .bp-section h2 { font-size: clamp(18px, 4vw, 24px) !important; margin-bottom: 12px !important; }
    .bp-section p  { font-size: 15px !important; }
  }
  @media (max-width: 480px) {
    .bp-article { padding: 20px 4% 44px !important; }
    .bp-intro   { font-size: 14px !important; padding-left: 12px !important; margin-bottom: 20px !important; }
    .bp-section { margin-bottom: 28px !important; }
    .bp-section h2 { font-size: 17px !important; }
    .bp-section p  { font-size: 14px !important; margin-bottom: 10px !important; }
  }

  /* ── Emergency CTA box ── */
  @media (max-width: 768px) { .bp-cta-box { padding: 22px 20px !important; margin-bottom: 32px !important; } }
  @media (max-width: 600px) {
    .bp-cta-box         { flex-direction: column !important; gap: 14px !important; padding: 18px !important; }
    .bp-cta-box a       { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
    .bp-cta-title       { font-size: 15px !important; }
    .bp-cta-sub         { font-size: 13px !important; }
  }

  /* ── Author box ── */
  @media (max-width: 600px) { .bp-author { padding: 20px !important; gap: 14px !important; } }
  @media (max-width: 480px) {
    .bp-author           { flex-direction: column !important; }
    .bp-author-avatar    { width: 42px !important; height: 42px !important; }
    .bp-author-name      { font-size: 14px !important; }
    .bp-author-bio       { font-size: 13px !important; }
  }

  /* ── Related posts grid ── */
  .bp-related-grid { grid-template-columns: repeat(2, 1fr) !important; }
  @media (max-width: 600px) {
    .bp-related-grid { grid-template-columns: 1fr !important; }
    .bp-related-card { flex-direction: row !important; align-items: center !important; }
    .bp-related-card img { width: 72px !important; height: 72px !important; }
  }
  @media (max-width: 380px) {
    .bp-related-card     { flex-direction: column !important; }
    .bp-related-card img { width: 100% !important; height: 120px !important; }
  }

  /* ── Related section ── */
  @media (max-width: 768px) {
    .bp-related-wrap { margin-top: 44px !important; }
    .bp-related-head { font-size: 22px !important; margin-bottom: 18px !important; }
  }
`;


export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()
  const content = POST_CONTENT[params.slug]
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` },
  ])
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: post.title, description: post.description, image: post.image,
    datePublished: post.date, dateModified: post.date,
    author: { '@type': 'Organization', name: 'Springfield Emergency Plumbing' },
    publisher: { '@type': 'Organization', name: 'Springfield Emergency Plumbing', logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } },
  }
  const howToSchema = buildHowToSchema(params.slug, post)
  const faqSchema = buildFaqSchema(params.slug)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="bp-outer" style={{ paddingTop: 90, background: 'var(--navy)', minHeight: '100vh' }}>
        <section className="bp-hero" style={{ background: 'var(--navy2)', padding: '64px 5% 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <nav style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'var(--text-dim)', fontSize: 13 }}>Home</Link>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 13 }}>/</span>
              <Link href="/blog" style={{ color: 'var(--text-dim)', fontSize: 13 }}>Blog</Link>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 13 }}>/</span>
              <span style={{ color: 'var(--amber)', fontSize: 13 }}>{post.category}</span>
            </nav>
            <div className="bp-meta" style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(232,50,28,0.15)', color: 'var(--red)', padding: '4px 14px', borderRadius: 99, fontSize: 11, fontFamily: "'Syne',sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>{post.category}</span>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}><i className="ri-time-line" />{post.readTime}</span>
              <span style={{ color: 'var(--text-dimmer)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}><i className="ri-calendar-line" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 'clamp(24px,3.5vw,46px)', color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>{post.title}</h1>
            <p style={{ color: 'var(--text-dim)', fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.7 }}>{post.description}</p>
          </div>
        </section>

        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5%' }}>
          <img className="bp-featured-img" src={post.image} alt={post.title} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block', borderRadius: '0 0 var(--rlg) var(--rlg)' }} />
        </div>

        <article className="bp-article" style={{ maxWidth: 860, margin: '0 auto', padding: '52px 5% 80px' }}>
          <p className="bp-intro" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.85, marginBottom: 36, borderLeft: '4px solid var(--amber)', paddingLeft: 20 }}>{content?.intro}</p>

          <div className="bp-cta-box" style={{ background: 'var(--red)', borderRadius: 'var(--rlg)', padding: '28px 32px', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div className="bp-cta-title" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 16, color: '#fff', marginBottom: 4 }}>Need a Plumber in Springfield MO Right Now?</div>
              <div className="bp-cta-sub" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>24/7 emergency service — licensed, insured, upfront pricing.</div>
            </div>
            <a href="tel:+14173734862" style={{ background: '#fff', color: 'var(--navy)', padding: '12px 24px', borderRadius: 'var(--r)', fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
              <i className="ri-phone-fill" /> Call Now
            </a>
          </div>

          {content?.sections.map((section, i) => (
            <section className="bp-section" key={i} style={{ marginBottom: 44 }}>
              <h2 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,32px)', color: '#fff', marginBottom: 18, borderBottom: '2px solid rgba(255,255,255,0.08)', paddingBottom: 12 }}>{section.h2}</h2>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 16, lineHeight: 1.85 }}>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff">$1</strong>')
                      .replace(/^• /gm, '<span style="display:flex;gap:10px;marginBottom:8px"><span style="color:var(--amber);flexShrink:0">•</span><span>')
                      .replace(/\n/g, '<br />')
                  }} />
                ))}
              </div>
            </section>
          ))}

          <div className="bp-author" style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--rlg)', padding: '28px 32px', marginTop: 48, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div className="bp-author-avatar" style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className="ri-tools-fill" style={{ fontSize: 22, color: '#fff' }} />
            </div>
            <div>
              <div className="bp-author-name" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, color: '#fff', marginBottom: 4 }}>Springfield Emergency Plumbing Team</div>
              <div className="bp-author-bio" style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.6 }}>Licensed plumbers serving Springfield, Nixa, Ozark, Republic &amp; Battlefield, MO. 24/7 emergency service with upfront, transparent pricing.</div>
            </div>
          </div>

          <div className="bp-related-wrap" style={{ marginTop: 64 }}>
            <div className="stag">More Articles</div>
            <h2 className="sh bp-related-head" style={{ marginBottom: 32, fontSize: 'clamp(22px,2.5vw,28px)' }}>Related Plumbing <em>Guides</em></h2>
            <div className="bp-related-grid" style={{ display: 'grid', gap: '3px' }}>
              {BLOG_POSTS.filter(p => p.slug !== params.slug).slice(0, 2).map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }} className="blog-related-link">
                  <div className="bp-related-card" style={{ background: 'var(--card)', display: 'flex', gap: 16, padding: 20, borderLeft: '3px solid transparent', transition: 'var(--t)', height: '100%' }}>
                    <img src={p.image} alt={p.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 'var(--r)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 800, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{p.category}</div>
                      <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 16, color: '#fff', lineHeight: 1.4 }}>{p.title}</div>
                    </div>
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