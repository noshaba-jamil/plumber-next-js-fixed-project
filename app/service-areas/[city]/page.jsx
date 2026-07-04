 import { notFound } from 'next/navigation'
import CityPageClient from './CityPageClient'

// ─── City Data ────────────────────────────────────────────────────────────────
export const CITY_DATA = {
  'springfield-mo': {
    name: 'Springfield',
    state: 'MO',
    zip: '65801, 65802, 65803, 65804, 65806, 65807',
    population: '~170,000',
    distance: 'Primary Service Area',
    county: 'Greene County',
    image: '/Springfield.webp',
    imgAlt: 'Licensed emergency plumber serving Springfield MO',
    desc: 'Our primary service area. We serve all of Springfield MO — Downtown, Midtown, Galloway, Southern Hills, and all 34 city neighborhoods. 24/7 emergency plumbing, drain cleaning, leak detection, water heater repair, sewer line repair, and pipe installation.',
    neighborhoods: ['Downtown Springfield', 'Rountree', 'Delaware', 'Historic Walnut Street', 'Phelps Grove', 'Sunshine', 'Galloway Village', 'Southern Hills', 'Fassnight', 'South Creek', 'Ward Branch', 'Republic Road corridor'],
    longDesc: "Springfield, MO is our home base — and it's where we started answering emergency calls more than 10 years ago. Whether you're in a century-old bungalow near Rountree, a mid-century ranch off South Campbell, or a new build near Republic Road, our licensed plumbers know the specific plumbing challenges that come with Springfield's mix of old and new housing stock. We answer every call personally, 24 hours a day, 7 days a week, and we're usually the fastest plumber to reach you because we're already based here.",
    secondaryDesc: "Springfield is the largest city in southwest Missouri, and its plumbing systems reflect decades of growth. Neighborhoods like Rountree, Delaware, and the Historic Walnut Street district have homes built in the 1920s–1950s, many still running on original galvanized steel supply lines or clay sewer laterals. Newer developments around South Creek, Sunshine, and the Republic Road corridor use modern PEX and PVC systems, but even these can develop issues from settling soil, tree root intrusion, or builder-grade fixtures that wear out faster than expected.",
    responseTime: 'Because our team is based directly in Springfield, we typically reach most addresses within the city within 30–60 minutes of your call — faster than plumbers dispatching from surrounding towns. Emergency calls are prioritized immediately, day or night.',
    problems: [
      { icon: 'ri-drop-fill', title: 'Aging Pipe Corrosion', desc: 'Homes built before 1970 often still have galvanized steel supply lines, which corrode from the inside out over decades. This causes low water pressure, rust-colored water, and eventual pinhole leaks. We evaluate whether a targeted repair or a full re-pipe makes more financial sense.' },
      { icon: 'ri-plant-fill', title: 'Tree Root Intrusion', desc: "Springfield's mature tree canopy — especially in older neighborhoods — means roots frequently find their way into clay or older PVC sewer laterals through joints and cracks. This shows up as slow drains throughout the house, gurgling toilets, or sewage odors in the yard." },
      { icon: 'ri-flask-fill', title: 'Hard Water Buildup', desc: "Springfield's municipal water carries moderate mineral hardness, which accelerates scale buildup inside water heaters, faucets, and fixtures — shortening their lifespan and reducing efficiency. Homes without a softener or filtration system typically see water heater problems sooner." },
      { icon: 'ri-temp-hot-fill', title: 'Aging Water Heaters', desc: 'Many Springfield homes still have tank water heaters installed 10+ years ago. Sediment buildup from hard water is the most common cause of failure, showing up as popping noises, inconsistent temperatures, or a complete loss of hot water.' },
      { icon: 'ri-cloud-windy-fill', title: 'Storm-Related Drainage Issues', desc: 'Heavy spring storms common to southwest Missouri can overwhelm older storm and sanitary sewer connections in parts of the city, leading to backups during periods of heavy rain.' },
    ],
    faqs: [
      { q: 'How fast can a plumber get to my home in Springfield, MO?', a: "Because we're based in Springfield, most calls within city limits are reached in 30–60 minutes. Emergency calls (burst pipes, sewage backups, major leaks) are dispatched immediately and prioritized ahead of routine appointments." },
      { q: 'Do you serve all Springfield ZIP codes, including 65802, 65803, 65804, 65806, 65807, 65809, and 65810?', a: 'Yes. We serve every neighborhood within Springfield city limits, from downtown and Rountree to the Republic Road corridor and South Creek area.' },
      { q: 'How much does an emergency plumber cost in Springfield, MO?', a: 'Most emergency repairs in Springfield range from $150–$500 depending on the issue. We always provide a written estimate after diagnosis and before any work begins — no surprise charges.' },
      { q: 'My Springfield home was built before 1970 — should I be worried about my pipes?', a: "Homes from this era often have galvanized steel supply lines that corrode internally over time, causing low pressure and eventual leaks. We recommend a plumbing inspection if you notice rust-colored water, declining pressure, or you've never had the system evaluated." },
      { q: 'Why do I have tree roots in my sewer line?', a: "Springfield's mature trees send roots toward the moisture and nutrients inside sewer pipes, entering through small cracks or joint gaps in older clay or PVC lines. Left untreated, this causes blockages or pipe collapse. We clear roots mechanically and can install a protective liner to prevent recurrence." },
      { q: "Is Springfield's water hard on my plumbing?", a: "Yes, moderately. Mineral buildup from Springfield's water supply accelerates wear on water heaters and fixtures. A water softener or filtration system can extend the life of your plumbing system significantly." },
      { q: 'Do you offer same-day service in Springfield, MO?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments. Emergency issues are handled immediately, any time of day or night.' },
      { q: 'Are you licensed to work in Springfield and the state of Missouri?', a: 'Yes. All of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.' },
      { q: 'What should I do if my sewer backs up in my Springfield home?', a: 'Stop using water immediately (toilets, sinks, showers) to avoid worsening the backup, and call us right away. We dispatch emergency crews for sewage backups as a top priority due to the health risk involved.' },
      { q: 'Do you work on both older homes and new construction in Springfield?', a: 'Yes. Our technicians are equipped to work on original galvanized and cast-iron systems in historic Springfield homes as well as modern PEX and PVC systems in newer developments.' },
    ],
  },
  'nixa-mo': {
    name: 'Nixa',
    state: 'MO',
    zip: '65714',
    population: '~25,000',
    distance: '~12 miles south of Springfield',
    county: 'Christian County',
    image: '/nixa.webp',
    imgAlt: 'Licensed plumber serving Nixa MO residents',
    desc: 'Professional plumbing in Nixa, MO — emergency repairs, drain cleaning, leak detection, and water heater repair. Typically on-site within 60 minutes from our Springfield base.',
    neighborhoods: ['Downtown Nixa', 'McCauley Park area', 'Highway CC corridor', 'Mount Vernon Street area'],
    longDesc: 'Nixa is one of the fastest-growing communities in southwest Missouri, and its plumbing needs reflect that growth. From new subdivisions off Highway CC to established neighborhoods near downtown Nixa, our licensed plumbers are on the road to Nixa every week — typically arriving within 30–45 minutes of your call, day or night.',
    secondaryDesc: "Nixa's population has more than doubled over the past two decades, and most of that growth has come in the form of new residential construction. That means a lot of Nixa homes are on modern PEX plumbing systems — but \"new\" doesn't mean \"problem-free.\" Builder-grade fixtures, rushed rough-ins, and settling foundations in newer subdivisions can all create issues within the first several years of a home's life. At the same time, older pockets of Nixa near the historic downtown square still have homes on original plumbing that needs the same careful attention we give Springfield's older housing stock.",
    responseTime: 'Nixa is roughly 12 miles south of our Springfield base, and we typically arrive within 30–45 minutes of your call. Emergency calls are dispatched immediately and prioritized ahead of routine appointments.',
    problems: [
      { icon: 'ri-tools-fill', title: 'New-Construction Plumbing Defects', desc: 'In fast-growing subdivisions, we regularly find loose fittings, improperly pitched drain lines, and undersized water lines that were rushed during the building boom. These often surface as slow drains or inconsistent water pressure within the first few years of ownership.' },
      { icon: 'ri-temp-hot-fill', title: 'Water Heater Strain From Larger Households', desc: "Nixa attracts young families, and larger households put more daily demand on water heaters than the units were sized for. This shows up as running out of hot water mid-shower or a water heater that's working harder — and failing sooner — than it should." },
      { icon: 'ri-flask-fill', title: 'Hard Water Scale Buildup', desc: "Like the rest of the Springfield metro, Nixa's water supply carries enough mineral content to accelerate scale buildup in tankless units, dishwashers, and fixtures. Homes without a softener often see reduced water heater lifespan." },
      { icon: 'ri-cloud-windy-fill', title: 'Sump Pump Demand in Newer Basements', desc: "Many newer Nixa homes include finished or partially finished basements, and Ozark-region clay soil combined with spring rains puts real demand on sump pumps. A failed sump pump during a storm is one of the most common emergency calls we get from Nixa homeowners." },
      { icon: 'ri-water-flash-fill', title: 'Irrigation & Outdoor Plumbing Issues', desc: "Nixa's newer subdivisions often include sprinkler systems and outdoor fixtures that require backflow prevention devices — a common source of leaks and code-compliance questions we help homeowners resolve." },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Nixa, MO?', a: 'Most Nixa addresses are reached within 30–45 minutes of your call. Emergency situations are dispatched immediately.' },
      { q: 'Do you serve all of Nixa, including newer subdivisions?', a: 'Yes, we serve all of Nixa, MO (ZIP 65714), including new-construction neighborhoods off Highway CC and established areas near downtown.' },
      { q: 'Why does my newer Nixa home already have plumbing problems?', a: 'New-construction plumbing can have rushed rough-ins, loose fittings, or improperly pitched drain lines from the building process. These issues typically surface within the first few years and are usually straightforward to correct.' },
      { q: 'Do you work on homes still under builder warranty in Nixa?', a: "Yes, we can diagnose and document plumbing issues for warranty claims, and we also perform the repair directly if you'd prefer not to wait on a builder's schedule." },
      { q: 'My sump pump failed during a storm — can you help same day?', a: "Yes, sump pump failures are treated as a priority call, especially during active storms. Call us immediately and we'll dispatch the nearest available plumber." },
      { q: 'Is Nixa\'s water hard on tankless water heaters?', a: "Yes. Like the broader Springfield area, Nixa's water carries moderate hardness that accelerates scale buildup in tankless units. We recommend annual flushing and, for many households, a whole-home softener." },
      { q: 'How much does emergency plumbing service cost in Nixa, MO?', a: 'Typical emergency repairs range from $150–$500, with a full written estimate provided before work begins. Larger jobs like re-piping or sewer replacement are quoted individually after diagnosis.' },
      { q: 'Do you install backflow prevention devices for sprinkler systems in Nixa?', a: "Yes, we install and service backflow prevention devices commonly required for irrigation systems in Nixa's newer subdivisions." },
      { q: 'Are your plumbers licensed to work in Nixa, MO?', a: "Yes. Every technician is licensed by the State of Missouri, fully insured, and background-checked before ever visiting a customer's home." },
      { q: 'Can you handle both emergency repairs and larger installation projects in Nixa?', a: 'Yes — from a same-night burst pipe repair to a full water heater replacement or re-piping project, our Nixa-area team handles both emergency and planned plumbing work.' },
    ],
  },
  'ozark-mo': {
    name: 'Ozark',
    state: 'MO',
    zip: '65721',
    population: '~20,000',
    distance: '~14 miles south of Springfield',
    county: 'Christian County',
    image: '/ozark.webp',
    imgAlt: 'Professional plumber fixing drain in Ozark MO home',
    desc: 'Reliable plumbing for Ozark, MO residents — fast emergency response, sewer line inspection, pipe repair, and full residential plumbing throughout Ozark and Christian County.',
    neighborhoods: ['Historic Ozark Square', 'Finley River area', 'Highway 65 corridor', 'Riverside subdivisions'],
    longDesc: 'Ozark sits along the Finley River, just south of Springfield, and combines a historic downtown square with rapidly expanding new subdivisions. That mix means our plumbers regularly work on everything from decades-old cast-iron drain systems near downtown to brand-new PEX installations in growing neighborhoods east of Highway 65. We typically reach Ozark addresses within 30–45 minutes of your call.',
    secondaryDesc: "Ozark's location along the Finley River shapes a lot of the plumbing issues we see here — from higher water tables affecting sewer lines near the river to seasonal flooding concerns that put extra strain on sump pumps and outdoor drainage. At the same time, Ozark's historic square area has some of the oldest housing stock in Christian County, meaning original clay sewer laterals and aging supply lines are still common just a few blocks from newly built homes on the city's outskirts.",
    responseTime: 'Ozark is approximately 14 miles south of our Springfield base. Most calls are reached within 30–45 minutes, with emergency dispatches prioritized immediately.',
    problems: [
      { icon: 'ri-water-flash-fill', title: 'Higher Water Table Pressure on Sewer Lines', desc: 'Homes closer to the Finley River can experience additional hydrostatic pressure on aging sewer laterals, which accelerates cracking and joint separation — especially in older clay pipe.' },
      { icon: 'ri-cloud-windy-fill', title: 'Seasonal Flooding & Sump Pump Failures', desc: "Ozark's proximity to the river means basements and crawlspaces in low-lying areas are more prone to water intrusion during heavy spring rains. A working, properly sized sump pump with battery backup is essential for many Ozark homes." },
      { icon: 'ri-plant-fill', title: 'Tree Root Intrusion', desc: "Ozark's established tree-lined streets near downtown create the same root-intrusion risk we see in older Springfield neighborhoods — roots seeking moisture inside cracked or jointed sewer pipe." },
      { icon: 'ri-tools-fill', title: 'New-Development Plumbing Issues', desc: "Rapid residential growth on Ozark's east side has brought the same rushed-construction issues we see in Nixa: loose fittings, improperly sloped drain lines, and undersized water lines in some newer builds." },
      { icon: 'ri-drop-fill', title: 'Well & Septic Transition Properties', desc: 'Some properties on Ozark\'s outer edges were historically on well and septic systems before annexation into city utilities, and transitioning these systems correctly requires plumbers familiar with both private and municipal systems.' },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Ozark, MO?', a: 'Most Ozark addresses are reached within 30–45 minutes of your call, with emergency situations dispatched immediately.' },
      { q: 'Does living near the Finley River affect my plumbing?', a: 'Yes. Homes closer to the river can experience higher water table pressure on sewer lines, and low-lying properties face greater flood risk, making a properly functioning sump pump especially important.' },
      { q: 'Do you install sump pumps with battery backup in Ozark?', a: "Yes. Given Ozark's flood-prone areas, we recommend and install sump pumps with battery backup so they continue running even during a power outage caused by a storm." },
      { q: 'My Ozark home was on well and septic before annexation — can you help transition it?', a: 'Yes, our plumbers are experienced with both private well/septic systems and municipal connections, and can guide you through a proper transition.' },
      { q: 'Do you serve the historic Ozark square area?', a: 'Yes, we serve all of Ozark, MO, including the historic downtown square and its older housing stock, as well as newer developments on the east side of town.' },
      { q: 'How much does emergency plumbing cost in Ozark, MO?', a: 'Most emergency repairs range from $150–$500. We provide a full written estimate after diagnosis, before any work begins.' },
      { q: 'Why do multiple drains in my Ozark home back up at once?', a: 'This usually indicates a problem in the main sewer line rather than an individual fixture — common causes in Ozark include tree root intrusion and aging clay pipe joints.' },
      { q: 'Are you licensed to work in Ozark, MO?', a: 'Yes, all of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.' },
      { q: 'Do you offer same-day service in Ozark?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments, with emergencies handled immediately.' },
      { q: 'Can you fix plumbing issues in newer Ozark subdivisions as well as older homes near downtown?', a: "Yes — we regularly work on both, from rushed-construction issues in newer builds to legacy clay and cast-iron systems in Ozark's historic areas." },
    ],
  },
  'republic-battlefield-mo': {
    name: 'Republic & Battlefield',
    state: 'MO',
    zip: '65738, 65619',
    population: '~18,000+',
    distance: '~12 miles SW of Springfield',
    county: 'Greene County',
    image: '/Battlefield.webp',
    imgAlt: 'Plumber repairing sewer line in Republic and Battlefield MO',
    desc: 'Full plumbing services in Republic and Battlefield — emergency plumbing, sewer line repair, pipe installation, and new construction plumbing for all property types.',
    neighborhoods: ['Downtown Republic', 'Highway 60 corridor', 'Republic school district area', 'Highway FF corridor (Battlefield)', "Wilson's Creek Battlefield residential area"],
    longDesc: "Republic and Battlefield sit just southwest of Springfield along Highway 60 and are among the fastest-growing communities in Greene County. Republic's manufacturing and agricultural base combines with rapid residential expansion, while Battlefield — named for its proximity to Wilson's Creek National Battlefield — has grown into a busy residential corridor of its own. Our plumbers serve both communities as a single service area and typically arrive within 30–45 minutes of your call.",
    secondaryDesc: "Republic has grown significantly as families move outside Springfield for more space and newer housing, and much of that growth means modern PEX plumbing systems installed over the past 10–15 years. But Republic is also a working town with commercial and light-industrial properties that need plumbers comfortable with both residential and commercial-scale systems — grease traps, backflow devices, and larger water heater installations included. Battlefield's residential growth has followed a similar pattern along the Highway FF corridor, with newer subdivisions sitting alongside older farmhouses that predate the area's suburban expansion.",
    responseTime: 'Both communities sit roughly 12 miles southwest of our Springfield base. Most calls are reached within 30–45 minutes, with emergency calls dispatched immediately.',
    problems: [
      { icon: 'ri-tools-fill', title: 'New-Subdivision Plumbing Defects', desc: 'As in Nixa and Ozark, rapid residential construction in Republic and Battlefield sometimes means rushed rough-ins, undersized water lines, or improperly sloped drains that surface as problems within the first several years.' },
      { icon: 'ri-drop-fill', title: 'Well Water & Older Farmhouse Plumbing', desc: 'Parts of Battlefield and the Republic outskirts include older properties that were originally on well water and septic before municipal expansion reached them — these systems require plumbers experienced with both private and city-connected setups.' },
      { icon: 'ri-building-2-fill', title: 'Commercial & Light-Industrial Plumbing Demand', desc: "Republic's manufacturing and agricultural businesses create recurring demand for commercial-grade repairs, backflow testing, and grease trap service that residential-only plumbers often aren't equipped to handle." },
      { icon: 'ri-flask-fill', title: 'Hard Water Scale Buildup', desc: 'As with the rest of the Springfield metro, moderate water hardness accelerates wear on water heaters and fixtures throughout both Republic and Battlefield.' },
      { icon: 'ri-route-fill', title: 'Highway-Corridor Commercial Plumbing', desc: 'Businesses along the Highway 60 and Highway FF corridors need fast-response commercial plumbing to avoid costly downtime — a service gap we specifically built our commercial response times around.' },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Republic or Battlefield, MO?', a: 'Most addresses in both communities are reached within 30–45 minutes of your call, with emergencies dispatched immediately.' },
      { q: 'Do you serve commercial properties in Republic, MO?', a: 'Yes, we handle commercial and light-industrial plumbing throughout Republic, including backflow testing, grease trap service, and larger-capacity water heater work.' },
      { q: "Is my Battlefield home's well and septic system something you can service?", a: 'Yes, our plumbers are experienced with both private well/septic systems common in older Battlefield properties and municipal-connected plumbing.' },
      { q: 'How much does emergency plumbing service cost in Republic or Battlefield?', a: 'Most emergency repairs range from $150–$500, with a full written estimate provided before any work begins.' },
      { q: 'Why do newer homes in Republic already have plumbing issues?', a: 'Rapid residential construction sometimes results in rushed rough-ins or undersized lines that surface as slow drains or pressure issues within the first few years — a common and usually straightforward fix.' },
      { q: 'Do you offer backflow testing for businesses in Republic, MO?', a: 'Yes, we test and certify backflow prevention devices required for many commercial and irrigation systems in the Republic area.' },
      { q: 'Are you licensed to work in both Republic and Battlefield, MO?', a: 'Yes, all of our plumbers are licensed by the State of Missouri, fully insured, and background-checked, and we serve both communities under the same service area.' },
      { q: 'Do you offer same-day service in Republic and Battlefield?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments, with emergencies handled immediately, any time of day.' },
      { q: "What plumbing issues are most common in Battlefield's older farmhouses?", a: 'Aging supply lines, well-to-municipal transition issues, and outdated fixtures are the most common issues we find in Battlefield\'s older rural-adjacent properties.' },
      { q: 'Can you handle both a home emergency and a commercial job in the same day in this area?', a: 'Yes — our Republic & Battlefield coverage includes both residential emergency response and scheduled commercial plumbing work, often on the same day.' },
    ],
  },
  'willard-mo': {
    name: 'Willard',
    state: 'MO',
    zip: '65781',
    population: '~6,000',
    distance: '~13 miles NW of Springfield',
    county: 'Greene County',
    image: '/WillardMissourihome.webp',
    imgAlt: 'Leak detection and plumbing services in Willard MO',
    desc: 'Expert plumbing for Willard, MO — leak detection, pipe repair, drain cleaning, and emergency plumbing for homes and businesses in Willard and rural Greene County.',
    neighborhoods: ['Downtown Willard', 'Highway 160 corridor', 'Surrounding rural-residential properties'],
    longDesc: "Willard sits about 13 miles northwest of Springfield and has grown steadily as a bedroom community for families who want small-town character with an easy commute into the city. Our plumbers serve Willard regularly, from long-established homes near the town's original core to newer subdivisions that have sprung up over the past decade, typically arriving within 30–45 minutes of your call.",
    secondaryDesc: "Willard's growth has been more gradual than Nixa or Ozark, which means a wider mix of home ages and plumbing systems packed into a smaller town. Some Willard properties, particularly on the outskirts, are still on private well and septic systems, while homes closer to town are connected to municipal water and sewer. That mix requires a plumber who's genuinely comfortable working across both types of systems — not just the one that's easiest.",
    responseTime: 'Willard is approximately 13 miles northwest of our Springfield base. Most calls are reached within 30–45 minutes, with emergency dispatches prioritized immediately.',
    problems: [
      { icon: 'ri-water-flash-fill', title: 'Well Pump & Pressure Tank Issues', desc: 'Properties on private well systems in and around Willard commonly experience pressure tank failures, pump cycling issues, or declining water pressure — problems that require a plumber experienced with well systems, not just municipal lines.' },
      { icon: 'ri-drop-fill', title: 'Septic System Backups', desc: 'Homes on septic systems can experience slow drains or backups when the tank needs pumping or the drain field is struggling, which presents differently than a municipal sewer line backup and requires different diagnostic steps.' },
      { icon: 'ri-tools-fill', title: 'Aging Plumbing in Older Willard Homes', desc: "Established homes near Willard's town center sometimes still run on original plumbing installed decades ago, leading to the same corrosion and pressure issues we see in older Springfield neighborhoods." },
      { icon: 'ri-snowy-fill', title: 'Frozen Pipes in Exposed Areas', desc: "Willard's more rural layout means some homes have longer exposed pipe runs in crawlspaces or exterior walls that are more vulnerable to freezing during Missouri winters." },
      { icon: 'ri-home-4-fill', title: 'New-Subdivision Plumbing Issues', desc: 'Newer Willard developments face the same rushed-construction risks as other growing communities in the metro — worth a proactive inspection in the first few years of ownership.' },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Willard, MO?', a: 'Most Willard addresses are reached within 30–45 minutes of your call, with emergency situations dispatched immediately.' },
      { q: 'Do you work on well and septic systems in Willard?', a: 'Yes, our plumbers are experienced with private well pumps, pressure tanks, and septic systems, in addition to municipal-connected plumbing.' },
      { q: 'Why does my well water pressure keep dropping in Willard?', a: 'This is often caused by a failing pressure tank, a struggling well pump, or sediment buildup in supply lines. We diagnose the actual cause rather than just replacing parts.' },
      { q: 'My septic system is backing up — is this different from a municipal sewer problem?', a: 'Yes. Septic backups usually relate to tank capacity, pumping schedule, or drain field issues rather than a blocked pipe, and require different diagnostic steps than a municipal sewer backup.' },
      { q: 'How much does emergency plumbing cost in Willard, MO?', a: 'Most emergency repairs range from $150–$500, with a full written estimate provided before work begins.' },
      { q: 'Do you serve both older homes and new subdivisions in Willard?', a: "Yes, we work on original plumbing in Willard's older, established homes as well as newer construction in recently developed subdivisions." },
      { q: 'Are frozen pipes a common issue in Willard?', a: 'Yes, more rural properties with longer exposed pipe runs in crawlspaces or exterior walls are more vulnerable to freezing during Missouri winters. We repair burst pipes and can advise on insulation to prevent recurrence.' },
      { q: 'Are you licensed to work in Willard, MO?', a: 'Yes, all of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.' },
      { q: 'Do you offer same-day service in Willard?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments, with emergencies handled immediately, any time of day.' },
      { q: 'Can you tell if my Willard home is on well/septic or municipal service before you arrive?', a: 'We can often determine this from your address and a few quick questions on the phone, but our technicians always confirm on-site before recommending any repair approach.' },
    ],
  },
  'rogersville-mo': {
    name: 'Rogersville',
    state: 'MO',
    zip: '65742',
    population: '~4,500',
    distance: '~18 miles east of Springfield',
    county: 'Webster County',
    image: '/Rogersville.webp',
    imgAlt: 'Water heater installation and plumbing repair in Rogersville MO',
    desc: 'Trusted plumbing in Rogersville, MO — water heater installation, drain cleaning, and emergency leak repairs for Webster County homeowners and businesses.',
    neighborhoods: ['Downtown Rogersville', 'Highway 60 corridor', 'Surrounding rural and acreage properties'],
    longDesc: "Rogersville sits about 18 miles east of Springfield, straddling Greene and Webster counties along Highway 60. It's one of the more rural communities in our service area, with farmland and acreage properties mixed among a growing residential core. Our plumbers make the trip to Rogersville regularly and typically arrive within 45–60 minutes of your call.",
    secondaryDesc: "Rogersville's rural character means a large share of homes here rely on private well water and septic systems rather than municipal utilities — a very different plumbing environment than the subdivisions closer to Springfield. Well pump failures, pressure tank issues, and septic drain field problems are common calls we handle here that a plumber unfamiliar with rural systems might misdiagnose. At the same time, Rogersville has seen new residential growth along the Highway 60 corridor, bringing municipal-connected homes into the mix.",
    responseTime: 'Rogersville is approximately 18 miles east of our Springfield base. Most calls are reached within 45–60 minutes, with emergency dispatches prioritized immediately.',
    problems: [
      { icon: 'ri-water-flash-fill', title: 'Well Pump & Pressure Tank Failures', desc: 'The majority of Rogersville-area properties draw water from private wells, and pressure tank waterlogging or pump motor failure is one of the most common emergency calls we receive here.' },
      { icon: 'ri-drop-fill', title: 'Septic System Issues', desc: "Septic tanks that haven't been pumped on schedule, or drain fields under stress from heavy rain, can cause slow drains and backups that require a different diagnostic approach than municipal sewer problems." },
      { icon: 'ri-snowy-fill', title: 'Long Exposed Pipe Runs & Freeze Risk', desc: 'Rural properties with outbuildings, detached garages, or long driveway-adjacent pipe runs face higher freeze risk during Missouri winters than tightly clustered subdivision homes.' },
      { icon: 'ri-home-4-fill', title: 'Aging Farmhouse Plumbing', desc: 'Many established Rogersville properties have older galvanized supply lines and original fixtures that were never upgraded, leading to corrosion, low pressure, and eventual leaks.' },
      { icon: 'ri-flask-fill', title: 'Iron & Sediment in Well Water', desc: 'Groundwater in parts of the Rogersville area can carry higher iron or sediment content, which clogs aerators, reduces fixture life, and can affect water heater performance over time.' },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Rogersville, MO?', a: 'Most Rogersville addresses are reached within 45–60 minutes of your call, with emergency situations dispatched immediately.' },
      { q: 'Do you service well pumps in Rogersville?', a: 'Yes, well pump diagnosis and repair is one of our most common calls in the Rogersville area, given how many properties rely on private wells.' },
      { q: 'My water pressure surges and drops in cycles — what\'s wrong?', a: 'This is a classic symptom of a waterlogged or failing pressure tank. We diagnose and replace pressure tanks as needed to restore consistent pressure.' },
      { q: 'Do you work on septic systems in Rogersville?', a: 'We diagnose and repair plumbing issues connected to septic systems, including drain field-related backups, and can advise when a septic pumping service is needed.' },
      { q: 'How much does emergency plumbing cost in Rogersville, MO?', a: 'Most emergency repairs range from $150–$500, with rural well or septic-related repairs quoted individually after diagnosis. We always provide a written estimate before work begins.' },
      { q: 'Why does my well water leave rust stains on fixtures?', a: 'This typically indicates higher iron content in your groundwater. We can recommend filtration solutions to reduce staining and protect your fixtures and water heater.' },
      { q: 'Are frozen pipes a bigger risk on rural Rogersville properties?', a: 'Yes, longer exposed pipe runs to outbuildings and detached structures face higher freeze risk than tightly clustered subdivision plumbing. We repair freeze damage and can advise on insulation.' },
      { q: 'Are you licensed to work in Rogersville, MO?', a: 'Yes, all of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.' },
      { q: 'Do you offer same-day service to Rogersville?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments, and emergencies are handled immediately, any time of day.' },
      { q: 'Can you work on plumbing for outbuildings and detached garages in Rogersville?', a: "Yes, we service plumbing in outbuildings, detached garages, and other structures common on Rogersville's larger rural properties." },
    ],
  },
  'strafford-mo': {
    name: 'Strafford',
    state: 'MO',
    zip: '65757',
    population: '~2,500',
    distance: '~15 miles NE of Springfield',
    county: 'Greene County',
    image: '/StraffordMissouri.webp',
    imgAlt: 'Pipe installation and plumbing services in Strafford MO',
    desc: 'Quality plumbing for Strafford, MO — emergency repairs, pipe installation, water heater service, and drain cleaning along the I-44 corridor northeast of Springfield.',
    neighborhoods: ['Downtown Strafford', 'I-44 corridor', 'Surrounding rural and acreage properties'],
    longDesc: "Strafford sits along the I-44 corridor about 15 miles northeast of Springfield, in Greene County near the Webster County line. It's a small, historically agricultural community that's seen gradual residential growth thanks to easy interstate access into Springfield. Our plumbers regularly serve Strafford and typically arrive within 40–55 minutes of your call.",
    secondaryDesc: "Strafford's mix of older farmhouses, established in-town homes, and newer residential construction along the I-44 corridor means our plumbers need to be equally comfortable with legacy rural plumbing and modern municipal-connected systems. A significant number of Strafford-area properties, particularly outside the town core, still rely on private wells and septic systems — and diagnosing issues correctly on these systems takes real experience, not guesswork.",
    responseTime: 'Strafford is approximately 15 miles northeast of our Springfield base. Most calls are reached within 40–55 minutes, with emergency dispatches prioritized immediately.',
    problems: [
      { icon: 'ri-water-flash-fill', title: 'Well & Septic System Issues', desc: 'Many Strafford-area properties outside the town core rely on private wells and septic systems, and pump failures, pressure tank problems, and drain field backups are common calls.' },
      { icon: 'ri-home-4-fill', title: 'Aging Galvanized Plumbing', desc: 'Established Strafford homes frequently still have original galvanized supply lines, which corrode internally over decades and cause declining pressure and eventual pinhole leaks.' },
      { icon: 'ri-snowy-fill', title: 'Freeze Damage in Exposed Rural Plumbing', desc: "Strafford's more spread-out rural layout means longer exposed pipe runs to outbuildings and detached structures, which face elevated freeze risk during Missouri winters." },
      { icon: 'ri-tools-fill', title: 'I-44 Corridor New Construction', desc: 'Newer homes built along the interstate corridor face the same rushed-construction risks common to growing communities throughout the metro — worth a proactive check in the first several years.' },
      { icon: 'ri-flask-fill', title: 'Iron & Hardness in Well Water', desc: 'Groundwater in the Strafford area can carry elevated iron and mineral content, contributing to fixture staining and faster wear on water heaters without filtration in place.' },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Strafford, MO?', a: 'Most Strafford addresses are reached within 40–55 minutes of your call, with emergency situations dispatched immediately.' },
      { q: 'Do you service well and septic systems in Strafford?', a: 'Yes, our plumbers are experienced with private well pumps, pressure tanks, and septic systems common throughout the Strafford area, in addition to municipal-connected plumbing.' },
      { q: 'Why does my older Strafford home have low water pressure?', a: 'This is often caused by internal corrosion in original galvanized supply lines, which is common in established farmhouses and older in-town homes. We can evaluate whether a targeted repair or full re-pipe makes more sense.' },
      { q: 'How much does emergency plumbing cost in Strafford, MO?', a: 'Most emergency repairs range from $150–$500, with rural well or septic-related repairs quoted individually after diagnosis.' },
      { q: 'Are frozen pipes a common issue in Strafford?', a: 'Yes, rural properties with longer exposed pipe runs to outbuildings and detached structures face elevated freeze risk during Missouri winters. We repair freeze damage and advise on prevention.' },
      { q: 'Do you work on newer homes built along the I-44 corridor in Strafford?', a: 'Yes, we service both newer construction along the interstate corridor and older, established homes throughout Strafford.' },
      { q: 'Why does my well water stain my fixtures in Strafford?', a: 'Elevated iron content in local groundwater is a common cause, and we can recommend filtration options to reduce staining and protect your plumbing system.' },
      { q: 'Are you licensed to work in Strafford, MO?', a: 'Yes, all of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.' },
      { q: 'Do you offer same-day service in Strafford?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments, and emergencies are handled immediately, any time of day.' },
      { q: 'Can you service plumbing in outbuildings on Strafford acreage properties?', a: "Yes, we service plumbing in outbuildings, detached garages, and other structures common on Strafford's larger rural properties." },
    ],
  },
  'clever-billings-mo': {
    name: 'Clever & Billings',
    state: 'MO',
    zip: '65631, 65610',
    population: '~2,000+',
    distance: '~20 miles SW of Springfield',
    county: 'Christian County',
    image: '/BillingsMissouri.webp',
    imgAlt: 'Emergency plumbing and drain cleaning in Clever and Billings MO',
    desc: 'Plumbing in Clever and Billings — emergency plumbing, drain cleaning, and water heater repair for rural Christian County homeowners and small businesses.',
    neighborhoods: ['Downtown Clever', 'Downtown Billings', 'Highway 14 corridor', 'Surrounding subdivisions and rural properties'],
    longDesc: 'Clever and Billings sit along the Christian and Stone county line, about 20 miles southwest of Springfield, and have grown steadily as spillover communities from Nixa and Ozark\'s rapid expansion. Both towns combine established rural properties with a growing number of newer subdivisions. Our plumbers serve both communities as a single coverage area and typically arrive within 45–60 minutes of your call.',
    secondaryDesc: 'As families priced out of closer-in suburbs like Nixa and Ozark look further south, Clever and Billings have both seen a wave of new residential construction over the past several years — alongside long-established farms and rural homes that have been in the area for generations. That combination means our plumbers need to handle everything from brand-new PEX systems in recent subdivisions to private well and septic setups on older acreage properties.',
    responseTime: 'Both communities sit roughly 20 miles southwest of our Springfield base. Most calls are reached within 45–60 minutes, with emergency dispatches prioritized immediately.',
    problems: [
      { icon: 'ri-water-flash-fill', title: 'Well & Septic Systems on Rural Properties', desc: 'A significant share of Clever and Billings properties, particularly outside the newer subdivisions, rely on private wells and septic systems, requiring plumbers experienced with both.' },
      { icon: 'ri-tools-fill', title: 'New-Subdivision Construction Issues', desc: 'As newer developments continue to fill in around both towns, we regularly find the same rushed-construction issues — loose fittings, undersized lines, improperly sloped drains — that show up in other fast-growing parts of the metro.' },
      { icon: 'ri-snowy-fill', title: 'Freeze Damage on Spread-Out Rural Properties', desc: 'Longer exposed pipe runs on acreage properties around Clever and Billings face higher freeze risk during Missouri winters than tightly clustered subdivisions.' },
      { icon: 'ri-home-4-fill', title: 'Aging Plumbing in Established Farmhouses', desc: 'Long-standing properties in both towns often still have original galvanized supply lines, leading to corrosion, declining pressure, and eventual leaks.' },
      { icon: 'ri-flask-fill', title: 'Hard Water & Iron Content', desc: 'Groundwater and municipal supply in the Clever/Billings area can carry enough mineral and iron content to accelerate wear on fixtures and water heaters without filtration in place.' },
    ],
    faqs: [
      { q: 'How fast can you get to my home in Clever or Billings, MO?', a: 'Most addresses in both communities are reached within 45–60 minutes of your call, with emergency situations dispatched immediately.' },
      { q: 'Do you service well and septic systems in Clever and Billings?', a: 'Yes, our plumbers are experienced with private well pumps, pressure tanks, and septic systems common in both areas, alongside municipal-connected plumbing in newer subdivisions.' },
      { q: 'Why does my newer home in Clever or Billings already have plumbing problems?', a: 'Rapid new-construction growth in both towns sometimes results in rushed rough-ins or undersized lines, which typically surface as slow drains or pressure issues within the first few years.' },
      { q: 'How much does emergency plumbing cost in Clever or Billings, MO?', a: 'Most emergency repairs range from $150–$500, with rural well or septic-related repairs quoted individually after diagnosis.' },
      { q: 'Are frozen pipes a common concern on Clever/Billings acreage properties?', a: 'Yes, longer exposed pipe runs on larger rural properties face higher freeze risk during Missouri winters. We repair freeze damage and advise on prevention.' },
      { q: 'Do you serve both established farms and new subdivisions in this area?', a: 'Yes, we regularly work on both long-established rural properties and newly built homes throughout Clever and Billings.' },
      { q: 'Why does my well water leave stains on fixtures in this area?', a: 'Elevated iron or mineral content in local groundwater is a common cause. We can recommend filtration options to reduce staining and extend fixture life.' },
      { q: 'Are you licensed to work in Clever and Billings, MO?', a: 'Yes, all of our plumbers are licensed by the State of Missouri, fully insured, and background-checked.' },
      { q: 'Do you offer same-day service to Clever and Billings?', a: 'Yes, for most non-emergency repairs we offer same-day or next-morning appointments, and emergencies are handled immediately, any time of day.' },
      { q: 'Can you handle plumbing in outbuildings on rural Clever/Billings properties?', a: "Yes, we service plumbing in outbuildings, detached garages, and other structures common on the area's larger rural and acreage properties." },
    ],
  },
}

// ─── Static Params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(CITY_DATA).map(city => ({ city }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.springfieldmoplumber.com'

export function generateMetadata({ params }) {
  const city = CITY_DATA[params.city]
  if (!city) return {}

  return {
    title: `Plumber in ${city.name} MO | 24/7 Emergency Service`,
    description: `Licensed plumber in ${city.name} MO — emergency 24/7, drain cleaning, water heater & sewer repair. Fast response. Call (417) 373-4862.`,
    alternates: {
      canonical: `${SITE_URL}/service-areas/${params.city}`,
    },
    openGraph: {
      title: `Plumber in ${city.name} MO | 24/7 Emergency Plumbing`,
      description: `Licensed plumber in ${city.name} MO. Emergency 24/7, drain cleaning, water heater & sewer repair. Fast response. Call (417) 373-4862.`,
      url: `${SITE_URL}/service-areas/${params.city}`,
      siteName: 'Springfield MO Plumber',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `Emergency Plumber serving ${city.name}, MO — 24/7 Fast Response`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Plumber in ${city.name} MO | 24/7 Emergency`,
      description: `Licensed plumber in ${city.name} MO. Emergency 24/7, drain cleaning, water heater & sewer repair. Fast response. Call (417) 373-4862.`,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: { index: true, follow: true },
  }
}

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default function CityServiceAreaPage({ params }) {
  const city = CITY_DATA[params.city]
  if (!city) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Plumber'],
    '@id': `${SITE_URL}/#business`,
    name: 'Springfield MO Plumber',
    url: SITE_URL,
    telephone: '+14173734862',
    email: 'springfieldmoplumber@gmail.com',
    image: `${SITE_URL}/og-image.png`,
    description: `Licensed plumber serving ${city.name}, MO — 24/7 emergency plumbing, drain cleaning, water heater repair, and sewer line service.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '220 S Campbell Avenue',
      addressLocality: 'Springfield',
      addressRegion: 'MO',
      postalCode: '65806',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.2090,
      longitude: -93.2923,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: 'MO',
    },
    priceRange: '$$',
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/service-areas/${params.city}#service`,
    name: `Plumbing Services in ${city.name}, MO`,
    description: `Emergency plumbing, drain cleaning, water heater repair, sewer line repair, leak detection, and pipe installation in ${city.name}, Missouri.`,
    serviceType: 'Plumbing',
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: 'MO',
    },
    url: `${SITE_URL}/service-areas/${params.city}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
      { '@type': 'ListItem', position: 3, name: `Plumber in ${city.name}, MO` },
    ],
  }

  // ✅ NEW — FAQ schema, built from each city's faqs array
  const faqSchema = city.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <CityPageClient city={city} citySlug={params.city} />
    </>
  )
}