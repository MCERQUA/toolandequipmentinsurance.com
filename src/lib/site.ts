// Centralized site data — used across nav, footer, schema, CTAs
// Tools & Equipment Insurance — scheduled tools & equipment floaters, mobile
// equipment, installation floaters, inland marine, and equipment breakdown
// for contractors' gear that lives on trucks and jobsites.

export const SITE = {
  name: "Tools & Equipment Insurance",
  legalName: "Tools & Equipment Insurance (by Contractors Choice Agency)",
  domain: "toolandequipmentinsurance.com",
  url: "https://toolandequipmentinsurance.com",
  tagline: "Insurance for Contractors' Tools, Equipment & Gear",
  description:
    "Specialized tools and equipment insurance for contractors — scheduled tools & equipment floaters for nail guns, saws, lasers, generators, and compressors; mobile equipment; installation floaters; equipment breakdown; and commercial auto for work trucks and tool trailers. Stolen-tool and jobsite-theft coverage underwritten right. A division of Contractors Choice Agency. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "tools-and-equipment",
    title: "Tools & Equipment Floater",
    short: "Scheduled gear at replacement cost",
    description:
      "Scheduled tools-and-equipment coverage for the nail guns, miter saws, lasers, generators, and compressors that walk off jobsites — written at replacement cost so a theft doesn't come out of your pocket. The core policy every gear-heavy contractor needs.",
    icon: "Wrench",
    keywords: ["tools and equipment insurance", "contractor tools floater", "scheduled tools coverage", "stolen tools insurance", "nail gun insurance"],
  },
  {
    slug: "scheduled-equipment",
    title: "Scheduled Equipment & Mobile Gear",
    short: "Lifts, compressors, welders & high-value gear",
    description:
      "Scheduled coverage for high-value and mobile equipment — boom lifts, towable compressors, welder generators, and specialty gear — listed individually with agreed value so a total loss pays what the equipment is really worth.",
    icon: "Forklift",
    keywords: ["scheduled equipment insurance", "mobile equipment floater", "boom lift insurance", "welder insurance", "high value contractor equipment coverage"],
  },
  {
    slug: "installation-floater",
    title: "Installation Floater",
    short: "Materials in transit + until installed",
    description:
      "Coverage for materials and supplies while in transit to the jobsite and until they're installed and accepted — closing the gap between the supplier's truck and the structure so a lost, damaged, or stolen material package is covered.",
    icon: "PackageCheck",
    keywords: ["installation floater", "materials in transit insurance", "contractor installation floater", "builders installation coverage", "in transit materials insurance"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine Insurance",
    short: "Goods & equipment in transit and off-site",
    description:
      "Broader inland marine coverage for equipment and goods in transit, at off-site storage, and on jobsites — the flexible coverage class that follows your gear wherever the work takes it, beyond what a fixed property policy will cover.",
    icon: "Truck",
    keywords: ["inland marine insurance", "contractor inland marine", "equipment in transit coverage", "off site equipment insurance", "inland marine floater"],
  },
  {
    slug: "equipment-breakdown",
    title: "Equipment Breakdown",
    short: "Internal mechanical & electrical failure",
    description:
      "Coverage for the internal mechanical and electrical failures that standard property excludes — blown compressors, fried generator windings, burned-up motors, and shorted electronics — so a breakdown doesn't sideline your gear for weeks.",
    icon: "Cog",
    keywords: ["equipment breakdown insurance", "boiler and machinery coverage", "compressor breakdown insurance", "generator breakdown coverage", "mechanical breakdown contractor"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Work trucks & tool trailers",
    description:
      "Coverage for the work trucks and tool trailers that haul your gear between jobsites — including theft from vehicle, trailer physical damage, and hired/non-owned auto for employees running materials in their own trucks.",
    icon: "Truck",
    keywords: ["commercial auto contractor", "work truck insurance", "tool trailer insurance", "theft from vehicle coverage", "contractor commercial auto"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Third-party injury & damage (not your tools)",
    description:
      "Third-party bodily injury and property damage protection for your operations — and the important clarification that GL does NOT cover your tools. We coordinate your GL with a tools floater so the gap between them is closed.",
    icon: "ShieldCheck",
    keywords: ["contractor general liability", "GL does not cover tools", "contractor liability insurance", "third party coverage contractor", "additional insured contractor"],
  },
  {
    slug: "umbrella-excess-liability",
    title: "Umbrella / Excess Liability",
    short: "Limits to $10M+",
    description:
      "Layered limits above your general liability, auto, and employers' liability — essential when a stolen-equipment loss, a jobsite injury, or a multi-party claim could otherwise exhaust your primary coverage and your gear investment.",
    icon: "Umbrella",
    keywords: ["umbrella insurance contractor", "excess liability coverage", "high limit liability insurance", "contractor umbrella policy", "jobsite liability umbrella"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas-southwest",
    name: "Texas & the Southwest",
    region: "TX · NM · AZ",
    blurb:
      "The busiest tool-theft market in the country. We insure Texas and Southwest contractors running high-volume residential and commercial work where gear lives on trucks and jobsites and gets targeted by thieves.",
  },
  {
    slug: "southeast",
    name: "Southeast",
    region: "FL · GA · NC · SC",
    blurb:
      "Hurricane-zone and high-volume Southeast markets where storm-recovery crews mobilize fast and tool inventories spike. We schedule gear for the crews doing the rebuild work after every named storm.",
  },
  {
    slug: "california-west",
    name: "California & West Coast",
    region: "CA · OR · WA",
    blurb:
      "West Coast contractors running dense urban jobs and remote build work alike. Coverage for high tool investment, jobsite-box security requirements, and the transit exposure of moving gear between tight city jobs.",
  },
  {
    slug: "northeast-mid-atlantic",
    name: "Northeast & Mid-Atlantic",
    region: "NY · NJ · PA · New England",
    blurb:
      "Northeast contractors doing remodel, restoration, and dense residential work — where tools get locked in trucks overnight on city streets and theft exposure is among the highest in the country.",
  },
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "OR · WA",
    blurb:
      "PNW contractors running wet-climate, year-round work with significant investments in compressors, generators, and laser-guided layout tools. Coverage that follows the gear across jobs and seasons.",
  },
  {
    slug: "rocky-mountain",
    name: "Rocky Mountain",
    region: "CO · ID · UT · MT",
    blurb:
      "Front-Range and Intermountain contractors serving the region's booming construction market. Programs sized for crews with high mobile-equipment investment and long drive times between remote jobsites.",
  },
  {
    slug: "great-lakes-midwest",
    name: "Great Lakes & Midwest",
    region: "MI · OH · IL · IN · WI",
    blurb:
      "Midwest contractors serving suburban and rural markets with seasonal build cycles. Coverage right-sized for tool inventories that scale up in the build season and get secured through the freeze.",
  },
  {
    slug: "florida-gulf",
    name: "Florida & Gulf Coast",
    region: "FL · AL · MS · LA",
    blurb:
      "Gulf Coast and Florida contractors running storm-repair, roofing, and rebuild work with enormous tool and equipment investment. Coverage built for the theft, transit, and surge exposures of the region.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Former contractor on staff", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 800, suffix: "+", label: "Gear-heavy crews insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring contractor equipment", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

