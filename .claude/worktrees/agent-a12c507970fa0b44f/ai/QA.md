# Tools & Equipment Insurance — Build QA

**Domain:** toolandequipmentinsurance.com
**Niche:** Insurance for contractors' tools, equipment, and gear (CCA division) — scheduled tools floaters, mobile equipment, installation floaters, inland marine, equipment breakdown.
**Identity:** "Precision" — industrial graphite/steel (primary) / safety amber (secondary) / signal yellow (accent); Space Grotesk + Inter; gear-tooth + caliper-mark + hazard-stripe motif.

## Build checklist
- [x] Next.js 15 (app router) + React 19 + Tailwind + TS + motion + lenis
- [x] 6–10 section homepage (Hero, TrustBar, ServicesGrid, WhyChooseUs, Process, CoverageMap, Stats, Testimonials, FAQ, FinalCTA)
- [x] 8 service pages (tools-and-equipment [featured], scheduled-equipment, installation-floater, inland-marine, equipment-breakdown, commercial-auto, general-liability, umbrella-excess-liability)
- [x] 8 location pages (regions)
- [x] Blog with 5 niche posts
- [x] Quote + contact forms → Netlify webhook (tenant=josh&site=toolandequipmentinsurance.com)
- [x] 20 FAQs on homepage + each service + each location page (FAQPage JSON-LD)
- [x] Full SEO: sitemap.ts, robots.ts, llms.txt, per-page OG/Twitter, JSON-LD (InsuranceAgency, InsuranceService, FAQPage, BreadcrumbList, BlogPosting)
- [x] ≥10 generated images (12 via HF FLUX.1-schnell)
- [x] `pnpm run build` GREEN
- [x] All files committed (incl. package.json, netlify.toml)

## Key niche facts (accuracy anchors)
- The GL-to-tools gap: **general liability does NOT cover your tools** — the single most common contractor misconception. Tools are an inland marine (tools & equipment) coverage.
- Coverage classes: tools & equipment floater (gear), installation floater (materials in transit + until installed), inland marine (broader, property that moves), equipment breakdown (internal mechanical/electrical failure).
- Scheduled vs. blanket: scheduled lists each item at replacement cost and pays reliably; blanket uses a single limit with per-item caps and ACV depreciation.
- Replacement cost vs. actual cash value: we always write RC — ACV can pay $150 for a $600 nailer.
- Typical cost: $500–$2,500/yr for a scheduled tools floater, ~1-3% of scheduled gear value.
- Mobile equipment (lifts, compressors, welders) scheduled at **agreed value** — not generic book value.
- Equipment breakdown (boiler & machinery) covers internal failures property excludes.
- Theft-from-unattended-vehicle deductibles can be higher — review and structure carefully.
- Agency: Contractors Choice Agency, Chandler AZ, founded 2005, NPN 8608479, licensed all 50 states.
