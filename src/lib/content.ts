// Rich, niche-accurate content blocks for Tools & Equipment Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Wrench, Truck, HardHat, Cog,
} from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

/* ============================================================
   PROCESS — how getting insured with us works
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Tell us about your gear and operation",
    description:
      "15-min call or form. Tool inventory, mobile equipment, how gear moves between truck and jobsite, materials in transit, and the coverage lines your old carrier missed.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop specialty inland marine markets",
    description:
      "Markets that actually write scheduled tools, mobile equipment, and installation floaters at replacement cost — not generic property carriers that exclude off-premises gear.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Bind a program built for your gear",
    description:
      "Tools & equipment floater + scheduled equipment + installation floater + equipment breakdown + commercial auto, coordinated so there are no gaps when gear is stolen or breaks.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Claims that move fast when gear is gone",
    description:
      "When a truck gets broken into or a compressor dies, you reach a person with context — not a queue. 2-hour response, fast claim handling so you can replace gear and keep working.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: Wrench,
    title: "Tools scheduled at replacement cost",
    description:
      "Many policies pay actual cash value — depreciating a $600 nailer to $150. We schedule your gear at replacement cost so a theft replaces your tools new, not at pennies on the dollar.",
  },
  {
    icon: ShieldCheck,
    title: "We close the GL-to-tools gap",
    description:
      "General liability does not cover your tools — and most contractors don't find out until after a theft. We build the tools floater that fills the gap your GL leaves wide open.",
  },
  {
    icon: Cog,
    title: "Equipment breakdown that replaces dead gear",
    description:
      "When a compressor blows internally or a generator's windings fry, standard property won't pay. We add equipment breakdown so mechanical and electrical failures are covered.",
  },
  {
    icon: Truck,
    title: "Theft from truck, trailer, and jobsite",
    description:
      "Tools live on trucks and jobsites — and that's exactly where they get stolen. A scheduled floater follows your gear wherever it goes, with theft coverage built in.",
  },
  {
    icon: HardHat,
    title: "Mobile equipment on agreed value",
    description:
      "Lifts, compressors, welders, and specialty gear get undervalued on generic policies. We schedule each high-value unit at agreed value so a total loss pays what it's really worth.",
  },
  {
    icon: ShieldCheck,
    title: "Run by a former contractor",
    description:
      "Josh Cotner knows what a tool inventory costs and exactly what happens when coverage fails at claim time. You'll never have to explain a jobsite theft to us.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS: FAQItem[] = [
  {
    q: "Does general liability insurance cover stolen tools?",
    a: "No. General liability (GL) covers third-party bodily injury and property damage — it does not cover your own tools, equipment, or gear. Stolen and damaged tools are covered under a tools & equipment (inland marine) floater. We build that floater specifically because most contractors don't discover the GL gap until after a theft.",
  },
  {
    q: "What is tools and equipment insurance?",
    a: "Tools and equipment insurance is a scheduled inland marine policy that covers your contractor gear — nail guns, saws, lasers, generators, compressors, and mobile equipment — against theft, damage, and loss on the jobsite, in transit, and on your truck. It follows your gear wherever the work takes it, unlike a fixed-location property policy.",
  },
  {
    q: "How much does tools and equipment insurance cost?",
    a: "Most contractors pay between $500 and $2,500 a year for a scheduled tools floater, depending on the total value of gear scheduled, the deductible chosen, and your theft-loss history. Premium is typically 1-3% of scheduled value. We quote the full program in about 15 minutes and show you every market's price side by side.",
  },
  {
    q: "Is tools coverage replacement cost or actual cash value?",
    a: "We write tools & equipment at replacement cost so a stolen or destroyed tool is replaced new — not depreciated to a fraction of its value. Actual cash value (ACV) policies can pay $150 for a $600 nailer. Replacement cost is the difference between staying on schedule and buying gear out of pocket.",
  },
  {
    q: "What is a scheduled tools floater?",
    a: "A scheduled floater lists each major piece of gear individually — make, model, serial number, and value — so coverage and claims are unambiguous. Scheduled coverage pays the listed value at claim time with no depreciation argument. We help you build and maintain the schedule as you add gear.",
  },
  {
    q: "Are tools stolen from my truck or trailer covered?",
    a: "Yes — a tools & equipment floater covers theft from your truck, trailer, and jobsite, subject to the policy terms and deductible. Some policies carry a separate, higher deductible for theft from an unattended vehicle, so we review those terms carefully and structure the policy to minimize out-of-pocket exposure.",
  },
  {
    q: "What is the difference between scheduled and blanket tool coverage?",
    a: "Scheduled coverage lists each item with its value; blanket coverage covers the total inventory up to a limit without itemizing. Scheduled pays more reliably at claim time (no depreciation or proof-of-ownership fights) and is better for high-value gear. Blanket is simpler but often pays less and caps per-item limits. We recommend scheduled for gear-heavy contractors.",
  },
  {
    q: "Does my commercial auto policy cover the tools in my truck?",
    a: "No. Commercial auto covers liability for at-fault crashes and physical damage to the vehicle itself — not the cargo, tools, or equipment inside or on the truck. Tools are covered by a tools & equipment (inland marine) floater. We pair the two so both the truck and its contents are protected.",
  },
  {
    q: "What is an installation floater and do I need one?",
    a: "An installation floater covers materials and supplies while in transit to the jobsite and until they're installed and accepted by the owner. It closes the gap between the supplier's truck and the structure. If you haul material packages that could be lost, damaged, or stolen before installation, you need one.",
  },
  {
    q: "What is inland marine insurance for contractors?",
    a: "Inland marine is the coverage class for property that moves — tools, equipment, materials in transit, and gear on jobsites. It's the flexible foundation that scheduled tools floaters, installation floaters, and mobile equipment coverage are built on. For contractors whose gear rarely sits still, it's the right coverage.",
  },
  {
    q: "Does tools and equipment insurance cover mobile equipment like lifts and welders?",
    a: "Yes — high-value mobile equipment (boom lifts, towable compressors, welder generators) should be scheduled separately at agreed value. Generic policies undervalue this equipment, but scheduled mobile-equipment coverage pays the agreed amount on a total loss. We list each unit individually.",
  },
  {
    q: "What is equipment breakdown coverage and how is it different from tools insurance?",
    a: "Tools insurance covers theft and external damage. Equipment breakdown (boiler and machinery) covers internal mechanical and electrical failures — a blown compressor, fried generator windings, burned-out motor, or shorted electronics — that standard property excludes. Most gear-heavy contractors need both.",
  },
  {
    q: "Do you insure contractors' tools in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes tools & equipment programs for contractors anywhere in the country — from the highest-theft markets like Texas and the Northeast to the storm-rebuild surge zones of the Southeast and Gulf Coast.",
  },
  {
    q: "How fast can I get a quote and bind coverage?",
    a: "Typically 15 minutes on a call for a standard scheduled-tools program. Larger schedules with mobile equipment and installation floaters may take a day to place with the right markets, but we move fast and tell you the timeline up front. Once bound, certificates and schedules are issued quickly.",
  },
  {
    q: "How do I value my tools for a floater?",
    a: "We build a schedule listing each major tool with its replacement value — make, model, serial number, and what it would cost to buy new today. You can update the schedule as you add gear. Accurate scheduling keeps premiums fair and claims fast. Keep receipts and photos to support it.",
  },
  {
    q: "What deductible should I choose for tools coverage?",
    a: "Most contractors choose a $250 to $1,000 deductible. A higher deductible lowers premium but increases out-of-pocket at claim time. Watch for theft-from-unattended-vehicle deductibles, which can be higher ($1,000-$2,500). We help you balance premium against realistic out-of-pocket exposure.",
  },
  {
    q: "What happens if I have a prior theft claim or cancellation?",
    a: "Often we can still place coverage. We have excess-and-surplus (E&S) inland marine markets for contractors with loss runs, prior thefts, or cancellations that standard markets decline. Bring your loss runs and gear schedule and we'll find a path.",
  },
  {
    q: "Does the policy cover borrowed or rented tools and equipment?",
    a: "It can. We can extend coverage to borrowed and rented equipment, which matters if you rent lifts, compressors, or specialty tools for specific jobs. Rental companies often require proof of insurance — we issue certificates naming them as required.",
  },
  {
    q: "How are tools insurance premiums calculated?",
    a: "Premium is based primarily on the total scheduled value of your gear (typically 1-3% of value annually), modified by deductible, theft class of your region, and loss history. Mobile equipment and installation floaters are rated separately. We document your inventory accurately so you're rated on real exposure.",
  },
  {
    q: "Why use a specialty tools and equipment insurance broker?",
    a: "Tools, mobile equipment, and installation floaters live in the inland marine market — a specialty class most generic agents don't understand. A specialty broker knows which carriers write scheduled gear at replacement cost, how to structure theft deductibles, and how to manage a tools-theft claim so it pays. That means better coverage at a fairer price.",
  },
];

/* ============================================================
   GENERAL FAQs — reused as the tail on service & location pages
   so every page carries 20 FAQs (composed via buildPageFaqs)
   ============================================================ */
export const GENERAL_FAQS: FAQItem[] = [
  {
    q: "How much does tools and equipment insurance cost?",
    a: "Most contractors pay $500-$2,500 a year for a scheduled tools floater, typically 1-3% of the total scheduled gear value, modified by deductible and theft-loss history. We quote the full program in about 15 minutes and show every market's price.",
  },
  {
    q: "Do you insure contractor tools in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes tools & equipment programs for contractors from the highest-theft markets to the storm-rebuild surge zones.",
  },
  {
    q: "How fast can I get a quote and bind coverage?",
    a: "About 15 minutes for a standard scheduled-tools program. Once bound, we turn around certificates, schedules, and additional-insured endorsements usually within minutes.",
  },
  {
    q: "Does general liability cover my stolen tools?",
    a: "No. GL covers third-party injury and damage, not your own gear. Tools are covered under a tools & equipment (inland marine) floater — which is what we build to close the gap GL leaves open.",
  },
  {
    q: "Is coverage replacement cost or actual cash value?",
    a: "We write tools & equipment at replacement cost so stolen or destroyed gear is replaced new, not depreciated. ACV policies can pay pennies on the dollar for a $600 nailer — replacement cost keeps you working.",
  },
  {
    q: "Are tools stolen from my truck or jobsite covered?",
    a: "Yes — a scheduled tools floater covers theft from your truck, trailer, and jobsite, subject to the policy terms and deductible. Some policies carry a higher theft-from-unattended-vehicle deductible, which we review carefully.",
  },
  {
    q: "What tools and equipment should be scheduled?",
    a: "Schedule anything of meaningful value — nail guns, miter and circular saws, lasers, generators, compressors, mobile equipment, and specialty gear. We help you build the schedule with make, model, serial number, and replacement value, and update it as you add gear.",
  },
  {
    q: "Can you cover mobile equipment like lifts, compressors, and welders?",
    a: "Yes. High-value mobile equipment should be scheduled separately at agreed value so a total loss pays what it's really worth. Generic policies undervalue this gear — we list each unit individually.",
  },
  {
    q: "Can you cover contractors with prior theft claims or cancellations?",
    a: "Often, yes. We have excess-and-surplus (E&S) inland marine markets for contractors with loss runs, prior thefts, or cancellations that standard markets decline. Bring your loss runs and gear schedule.",
  },
  {
    q: "Do I need an installation floater too?",
    a: "If you haul material packages that could be lost, damaged, or stolen in transit or before installation, yes. An installation floater covers materials from the supplier's truck until they're installed and accepted — closing a real gap.",
  },
  {
    q: "What happens if there's a claim?",
    a: "You reach a person with context, not a queue. We respond within 2 hours, help you document the loss (police report for theft, photos, schedule), and manage the claim with the carrier so it's paid correctly and you can replace gear fast.",
  },
  {
    q: "Why use a specialty tools and equipment insurance broker?",
    a: "Tools and equipment coverage lives in the inland marine market — a specialty class most generic agents don't understand. A specialty broker knows which carriers write scheduled gear at replacement cost and how to manage a tools-theft claim so it pays.",
  },
];

/** Compose a 20-item FAQ list for any page: specific FAQs first, then general fill. */
export function buildPageFaqs(specific: FAQItem[], count = 20): FAQItem[] {
  const seen = new Set<string>();
  const out: FAQItem[] = [];
  for (const f of [...specific, ...GENERAL_FAQS]) {
    const key = f.q.toLowerCase().slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= count) break;
  }
  return out;
}

/* ============================================================
   LOCATION FAQ EXTRAS — composed with GENERAL_FAQS on location pages
   ============================================================ */
export const LOCATION_FAQ_BASE: FAQItem[] = [
  {
    q: "Are you licensed to insure contractor tools and equipment in this region?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can bind and service tools & equipment coverage in this region and coordinate coverage for crews whose gear crosses state lines.",
  },
  {
    q: "Does regional tool-theft exposure affect my premium here?",
    a: "It can. Some regions — Texas, the Northeast, and storm-rebuild surge zones — carry higher theft class rates that influence premium and deductibles. We shop markets that write your region and structure theft deductibles so you're protected without overpaying.",
  },
  {
    q: "Can you meet local GC and rental-yard insurance requirements here?",
    a: "Yes. We routinely issue the additional-insured status and certificates that local general contractors, developers, and equipment-rental yards require before you bring gear onto a job or rent equipment.",
  },
  {
    q: "Do you handle seasonal tool-inventory scaling in this market?",
    a: "We do. We right-size scheduled coverage and can adjust the schedule as your tool inventory grows in the build season or shrinks in the off-season, so you're not over-insured in slow months.",
  },
  {
    q: "How do storm and weather exposure affect my equipment coverage here?",
    a: "Wind, named-storm, and hail exposures vary by region and can affect mobile equipment and installation floater pricing. We shop markets that write your region and structure deductibles so you're protected without overpaying for weather exposure.",
  },
  {
    q: "Can you add coverage for a specific high-value piece of equipment locally?",
    a: "Yes. For a newly acquired lift, compressor, welder, or specialty unit we can schedule it at agreed value quickly — often the same day — so the gear is covered from the moment you take possession.",
  },
  {
    q: "Do you provide certificates to local rental yards and building departments?",
    a: "Yes. We supply the certificates of insurance and additional-insured endorsements that local equipment-rental yards, building departments, and GCs require — turned around fast so your schedule isn't held up.",
  },
  {
    q: "Who services my policy if my crew works across multiple regions?",
    a: "We do — coast to coast. Because we're licensed everywhere, a single tools & equipment program can follow your gear across regional lines, with one point of contact for schedules, certificates, and claims.",
  },
];

/* ============================================================
   SERVICE DETAIL — per-service editorial content
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: FAQItem[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "tools-and-equipment": {
    heroBlurb:
      "Scheduled tools-and-equipment coverage for the nail guns, miter saws, lasers, generators, and compressors that walk off jobsites — written at replacement cost so a theft doesn't come out of your pocket. The core policy every gear-heavy contractor needs.",
    whatsCovered: [
      "Pneumatic and cordless nail guns, miter saws, and circular saws",
      "Generators, air compressors, and laser levels",
      "Theft from jobsites, trucks, trailers, and storage",
      "Damage, fire, vandalism, and accidental loss",
      "Replacement cost — not depreciated actual cash value",
      "Gear that travels between jobs and lives off-premises",
    ],
    whoItsFor: [
      "Contractors with meaningful investment in power tools",
      "Crews whose gear lives on trucks and jobsites",
      "Any contractor who's had tools stolen or damaged",
      "Trades with high per-tool value — framers, electricians, plumbers, HVAC",
      "Crews working in high-theft regions or on shared jobsites",
    ],
    whyCca: [
      "Tools scheduled at replacement cost — not depreciated to pennies",
      "Theft coverage that follows your gear wherever it goes",
      "Fast claims handling so you can replace gear and keep working",
    ],
    faqs: [
      {
        q: "What does a tools and equipment floater cover?",
        a: "A tools & equipment floater covers your contractor gear — nail guns, saws, lasers, generators, compressors, and hand tools — against theft, damage, fire, vandalism, and accidental loss, on the jobsite, in transit, and on your truck. It follows the gear wherever it goes, which is exactly where tools live and get stolen.",
      },
      {
        q: "Does general liability cover my stolen nail guns and saws?",
        a: "No. GL and commercial property do not cover tools off-premises. Tools are an inland marine (tools & equipment) coverage. We schedule your nail guns, saws, generators, and compressors so theft and damage are covered — closing the gap GL leaves wide open.",
      },
      {
        q: "How is a tools floater different from commercial property?",
        a: "Commercial property covers gear at a fixed location like your shop. A tools & equipment (inland marine) floater follows your tools wherever they go — jobsite, truck, trailer — which is where contractor tools actually live and get stolen. If your gear moves, you need a floater, not property.",
      },
      {
        q: "Is tools coverage replacement cost or actual cash value?",
        a: "We write tools & equipment at replacement cost so a stolen nailer or saw is replaced new, not depreciated to pennies. ACV policies can pay $150 for a $600 nailer. Replacement cost is the difference between staying on schedule and buying gear out of pocket.",
      },
      {
        q: "What is scheduled tools coverage?",
        a: "Scheduled coverage lists each major piece of gear individually — make, model, serial number, and replacement value. At claim time the schedule removes depreciation and proof-of-ownership disputes. We help you build the schedule and keep it current as you add gear.",
      },
      {
        q: "Are tools stolen from my truck covered?",
        a: "Yes — a tools & equipment floater covers theft from your truck, trailer, and jobsite, subject to the policy terms and deductible. Some policies carry a higher theft-from-unattended-vehicle deductible, which we review and structure to minimize your out-of-pocket exposure.",
      },
      {
        q: "How do I value my tools for a floater?",
        a: "We build a schedule listing each major tool with its replacement value — what it would cost to buy new today. You can update the schedule as you add gear. Keep receipts, photos, and serial numbers; accurate scheduling keeps premiums fair and claims fast.",
      },
      {
        q: "Does the floater cover borrowed or rented tools?",
        a: "It can. We can extend coverage to borrowed and rented tools, which matters if you rent specialty gear for specific jobs. Rental yards often require proof of insurance — we issue certificates naming them as required.",
      },
    ],
  },
  "scheduled-equipment": {
    heroBlurb:
      "Scheduled coverage for high-value and mobile equipment — boom lifts, towable compressors, welder generators, and specialty gear — listed individually with agreed value so a total loss pays what the equipment is really worth.",
    whatsCovered: [
      "Boom lifts, scissor lifts, and towable aerial equipment",
      "Towable and skid-mount air compressors",
      "Welder generators and plasma cutters",
      "Specialty and high-value contractor equipment",
      "Agreed value — no depreciation dispute at claim time",
      "Theft, damage, transport loss, and breakdown pairing",
    ],
    whoItsFor: [
      "Contractors owning high-value mobile equipment",
      "Crews with lifts, compressors, or welder generators",
      "Operations renting or leasing expensive specialty gear",
      "Any contractor whose generic policy undervalues equipment",
    ],
    whyCca: [
      "Each unit scheduled at agreed value — not generic book value",
      "Mobile-equipment specialists who know lift and compressor markets",
      "Paired with equipment breakdown for internal failures",
    ],
    faqs: [
      {
        q: "What is scheduled equipment coverage?",
        a: "Scheduled equipment coverage lists each high-value or mobile unit individually — boom lifts, towable compressors, welder generators — with an agreed value. At claim time, the policy pays the agreed amount with no depreciation fight. It's the right structure for gear that generic policies undervalue.",
      },
      {
        q: "Why do I need scheduled coverage for a lift or compressor?",
        a: "Generic property and blanket policies often cap per-item payouts or pay book value, which can be far below what a boom lift or towable compressor is worth. Scheduled coverage at agreed value pays the real value on a total loss — the difference between replacing the unit and taking a large loss.",
      },
      {
        q: "What is agreed value and how is it different from actual cash value?",
        a: "Agreed value means you and the insurer agree on the equipment's value up front (documented on the schedule), and that's what pays on a total loss. Actual cash value (ACV) pays depreciated value at claim time — often dramatically less for older equipment. Agreed value removes the depreciation fight.",
      },
      {
        q: "Does scheduled equipment coverage include theft?",
        a: "Yes. Scheduled equipment covers theft, transport damage, and many accidental losses, subject to the policy terms and deductible. Because mobile equipment is frequently towed between sites and parked at yards, theft coverage is one of its most-used features.",
      },
      {
        q: "How do I value a boom lift or compressor for scheduling?",
        a: "We document each unit — make, model, year, serial number, and current market value (often supported by a dealer quote or recent appraisal). That value goes on the schedule as the agreed amount. We update it as you add, sell, or replace equipment.",
      },
      {
        q: "Does scheduled equipment cover breakdowns too?",
        a: "Scheduled equipment covers external loss (theft, damage). Internal mechanical and electrical failures need equipment breakdown coverage, which we pair with scheduled equipment so both the 'stolen or crashed' exposure and the 'blew up internally' exposure are covered.",
      },
      {
        q: "Is rented or leased mobile equipment covered?",
        a: "It can be. We can extend scheduled coverage to rented and leased equipment, which matters if you rent lifts or compressors for specific jobs. Rental companies require proof of insurance — we issue certificates naming them as required.",
      },
      {
        q: "How fast are scheduled-equipment claims paid?",
        a: "Because the value is agreed up front on the schedule, total-loss claims pay quickly once the loss is documented (police report for theft, photos and damage assessment for damage). No depreciation dispute means faster payment — so you can replace the unit and keep the job moving.",
      },
    ],
  },
  "installation-floater": {
    heroBlurb:
      "Coverage for materials and supplies while in transit to the jobsite and until they're installed and accepted — closing the gap between the supplier's truck and the structure so a lost, damaged, or stolen material package is covered.",
    whatsCovered: [
      "Materials and supplies in transit to the jobsite",
      "Materials at staging areas and on site before installation",
      "Installed materials until accepted by the owner",
      "Theft, fire, damage, and weather loss during transit and install",
      "Coverage that follows the materials, not a fixed location",
      "Coordinated with builder's risk to avoid gaps",
    ],
    whoItsFor: [
      "Contractors responsible for materials they install",
      "Crews hauling material packages between supplier and site",
      "Operations whose GC's master policy leaves transit gaps",
      "Contractors working in high-theft or remote staging areas",
    ],
    whyCca: [
      "Closes the gap between delivered materials and installed work",
      "Written to follow materials through transit and installation",
      "Coordinated with builder's risk so no gap goes uncovered",
    ],
    faqs: [
      {
        q: "What is an installation floater?",
        a: "An installation floater covers materials and supplies while in transit to the jobsite and until they're installed and accepted by the owner. It closes the gap between the supplier's truck and the structure — covering theft, damage, and loss during the most exposed window in a material's journey.",
      },
      {
        q: "Why do contractors need an installation floater?",
        a: "Materials in transit and sitting on a jobsite are vulnerable — theft, fire, weather, and damage can wipe out a material package before it's installed. Builder's risk often only covers materials once on site and installed; an installation floater covers the transit and pre-install window that builder's risk misses.",
      },
      {
        q: "Is an installation floater different from builder's risk?",
        a: "They overlap but cover different windows. Builder's risk (course of construction) covers the structure during the build. An installation floater covers the contractor's materials in transit to the site and during installation — windows the GC's master builder's risk may not extend to. We coordinate both.",
      },
      {
        q: "Does an installation floater cover materials stolen from my truck?",
        a: "Yes. An installation floater covers materials in transit — including theft from your truck or trailer while hauling materials to the jobsite — and on the site before installation, subject to the policy terms. Without it, stolen materials often fall into a coverage gap.",
      },
      {
        q: "Who buys the installation floater — contractor, GC, or owner?",
        a: "It depends on the contract. Often the owner or GC carries a master builder's risk, but gaps around transit and the contractor's responsibility for delivered materials are common. When you're responsible for materials you've ordered or hauled, your own installation floater makes sure you're protected.",
      },
      {
        q: "How is an installation floater rated?",
        a: "Premium is typically based on the value of materials in transit and installed over the policy period, sometimes as a rate per $1,000 of installation value. Accurate reporting of material flow keeps the premium fair and the coverage adequate. We help you report it correctly.",
      },
      {
        q: "Does an installation floater cover installed materials after they're in?",
        a: "Coverage typically continues until the materials are installed and accepted by the owner or until builder's risk takes over — at which point the structure's coverage transitions. We coordinate the two so there's no gap and no double-coverage confusion.",
      },
      {
        q: "Can I add an installation floater for a single project?",
        a: "Yes. For a single large or unusual project, we can write a project-specific installation floater alongside your ongoing program — sized to that project's material value and timeline. Tell us about the project and we'll structure it.",
      },
    ],
  },
  "inland-marine": {
    heroBlurb:
      "Broader inland marine coverage for equipment and goods in transit, at off-site storage, and on jobsites — the flexible coverage class that follows your gear wherever the work takes it, beyond what a fixed property policy will cover.",
    whatsCovered: [
      "Equipment and goods in transit between jobsites",
      "Gear at off-site storage and staging yards",
      "Tools and equipment on multiple jobsites",
      "Scheduled tools, mobile equipment, and installation floaters",
      "Coverage that follows the property, not a fixed location",
      "Flexible limits and structures for mobile operations",
    ],
    whoItsFor: [
      "Contractors whose gear and materials move constantly",
      "Crews working multiple jobsites simultaneously",
      "Operations with off-site storage or staging",
      "Any contractor whose property exposure isn't fixed",
    ],
    whyCca: [
      "Inland marine specialists — not generic property agents",
      "Coverage structured to follow your gear wherever it goes",
      "Coordinated tools, equipment, and transit coverage under one program",
    ],
    faqs: [
      {
        q: "What is inland marine insurance for contractors?",
        a: "Inland marine is the coverage class for property that moves — tools, equipment, materials in transit, and gear on jobsites. It's the flexible foundation that scheduled tools floaters, installation floaters, and mobile-equipment coverage are built on. For contractors whose gear rarely sits still, it's the right coverage class.",
      },
      {
        q: "Why is it called inland marine if I'm not on the water?",
        a: "The name is historical — it originated with ocean marine cargo insurance and expanded to cover goods moving over land (inland). Today inland marine covers all kinds of mobile, transit, and jobsite property, including contractor tools and equipment. The 'marine' label is a legacy classification, not a coverage limit.",
      },
      {
        q: "How is inland marine different from commercial property?",
        a: "Commercial property covers fixed locations — your shop, office, or yard. Inland marine covers property that moves — tools on trucks, equipment on jobsites, materials in transit. If your gear leaves a fixed location (and contractor gear always does), you need inland marine, not just property.",
      },
      {
        q: "Does inland marine include tools and equipment coverage?",
        a: "Yes — scheduled tools & equipment floaters are a type of inland marine coverage. Inland marine is the broader class that also includes installation floaters, mobile equipment, transit coverage, and other property-that-moves forms. We structure the right mix under the inland marine umbrella.",
      },
      {
        q: "What does inland marine cover that other policies don't?",
        a: "Inland marine covers property off-premises, in transit, and at temporary locations — exposures that fixed property policies exclude or sharply limit. For contractors, that means tools stolen from a truck, equipment damaged on a jobsite, and materials lost in transit. It's the coverage that follows the work.",
      },
      {
        q: "How is inland marine premium calculated?",
        a: "Premium depends on the type and value of property covered, how and where it moves, the regions and theft class it operates in, and your loss history. Scheduled tools are rated on gear value; installation floaters on material flow; mobile equipment on agreed value. We document your operation accurately.",
      },
      {
        q: "Do I need inland marine if I already have general liability?",
        a: "Yes. GL covers third-party injury and damage — not your own gear. Tools, equipment, and materials in transit are inland marine exposures that GL does not address. Most gear-heavy contractors need both: GL for liability, inland marine for the gear itself.",
      },
      {
        q: "Can inland marine cover gear stored off-site or at a yard?",
        a: "Yes. Inland marine can extend to gear at off-site storage, staging yards, and supplier locations — not just on the active jobsite. If you keep inventory or equipment at multiple locations, we structure coverage so every location where gear sits is protected.",
      },
    ],
  },
  "equipment-breakdown": {
    heroBlurb:
      "Coverage for the internal mechanical and electrical failures that standard property excludes — blown compressors, fried generator windings, burned-up motors, and shorted electronics — so a breakdown doesn't sideline your gear for weeks.",
    whatsCovered: [
      "Internal mechanical failures (motors, pumps, compressors)",
      "Electrical failures and short circuits",
      "Generator winding and alternator burnouts",
      "Pressure-vessel and boiler explosions",
      "Computer and electronic control board failures",
      "Cost to repair or replace, plus expediting and business income",
    ],
    whoItsFor: [
      "Contractors relying on compressors, generators, and powered equipment",
      "Operations with motors, pumps, and pressure vessels",
      "Crews whose downtime costs money when gear breaks",
      "Any contractor whose property policy excludes internal failure",
    ],
    whyCca: [
      "Covers the failures standard property excludes",
      "Paired with scheduled equipment for full gear protection",
      "Includes business income for the downtime a breakdown causes",
    ],
    faqs: [
      {
        q: "What does equipment breakdown insurance cover?",
        a: "Equipment breakdown (formerly boiler and machinery) covers internal mechanical and electrical failures — blown compressor motors, fried generator windings, burned-out pumps, shorted control boards, and pressure-vessel failures — that standard property policies exclude. It pays to repair or replace the equipment, plus related business income loss.",
      },
      {
        q: "How is equipment breakdown different from tools & equipment coverage?",
        a: "Tools & equipment (inland marine) covers theft and external damage. Equipment breakdown covers internal mechanical and electrical failures. A compressor stolen off your truck is a tools claim; the same compressor blowing a motor internally is an equipment-breakdown claim. Gear-heavy contractors need both.",
      },
      {
        q: "Doesn't my property policy cover equipment that breaks down?",
        a: "Generally no. Standard commercial property specifically excludes internal mechanical and electrical breakdown — it covers external perils like fire, wind, and theft. Equipment breakdown fills that gap. Without it, a $4,000 compressor motor failure comes out of your pocket.",
      },
      {
        q: "What kinds of contractor equipment does breakdown cover?",
        a: "It covers motors, pumps, compressors, generators, welders, plasma cutters, pressure vessels, computerized control boards, and other internal-mechanical or electrical equipment. If it has a motor, a winding, a board, or a pressure vessel, equipment breakdown generally applies.",
      },
      {
        q: "Does equipment breakdown cover business interruption?",
        a: "Yes — most equipment-breakdown forms include business income coverage for the income you lose when covered equipment is down. If a blown compressor sidelines a job for a week, the lost income and extra expense (renting a replacement) can be covered. We size the period to your real recovery time.",
      },
      {
        q: "How much does equipment breakdown coverage cost?",
        a: "Equipment breakdown is typically inexpensive — a small fraction of your overall equipment program — because internal failures are less frequent than theft. The coverage-to-cost ratio is excellent for contractors who depend on powered gear. We quote it alongside your tools and scheduled-equipment coverage.",
      },
      {
        q: "Can I add equipment breakdown to a single critical piece of gear?",
        a: "Equipment breakdown is usually written to cover a scheduled list or a class of equipment rather than a single item. We help you structure it to cover the gear whose failure would actually cost you — the compressors, generators, and powered equipment you can't work without.",
      },
      {
        q: "How fast are equipment breakdown claims paid?",
        a: "Once a licensed technician confirms the internal failure (a repair quote or diagnostic report), equipment breakdown claims typically pay quickly to repair or replace the gear. We help you document the failure and expedite the claim so your downtime is as short as possible.",
      },
    ],
  },
  "commercial-auto": {
    heroBlurb:
      "Coverage for the work trucks and tool trailers that haul your gear between jobsites — including theft from vehicle, trailer physical damage, and hired/non-owned auto for employees running materials in their own trucks.",
    whatsCovered: [
      "Liability for at-fault accidents in work trucks and tool trailers",
      "Physical damage (comprehensive & collision) to owned vehicles",
      "Tool and equipment trailers",
      "Theft-from-vehicle exposure coordinated with tools floater",
      "Hired and non-owned auto for employees on company business",
      "Uninsured and underinsured motorist coverage",
    ],
    whoItsFor: [
      "Contractors with owned work trucks, vans, or tool trailers",
      "Crews that haul gear and materials between jobsites",
      "Operations whose employees drive personal trucks for work",
      "Any contractor whose personal auto would deny a work claim",
    ],
    whyCca: [
      "Business-use rating that won't deny your jobsite driving",
      "Trailer and tool-hauling exposure factored in",
      "Coordinated with your tools floater for theft from vehicle",
    ],
    faqs: [
      {
        q: "Does commercial auto cover the tools in my truck?",
        a: "No. Commercial auto covers liability for at-fault crashes and physical damage to the vehicle itself — not the cargo, tools, or equipment inside or on the truck. Tools are covered by a tools & equipment (inland marine) floater. We pair the two so both the truck and its contents are protected.",
      },
      {
        q: "Why can't I use my personal auto policy for my work truck?",
        a: "Personal auto policies typically exclude business use and will deny a claim when you're hauling tools, equipment, or materials to a jobsite. Commercial auto is rated for business use and covers the real way contractors drive — including the trailer and cargo exposure.",
      },
      {
        q: "What is hired and non-owned auto, and do contractors need it?",
        a: "Hired auto covers rental vehicles; non-owned auto covers employees driving their own personal vehicles for your business. If any crew member runs materials or drives between jobs in their own truck, you want non-owned coverage — it protects your business when their personal policy falls short.",
      },
      {
        q: "Do I need commercial auto for a tool trailer?",
        a: "Yes. Trailers need their own physical damage coverage and the truck towing them needs adequate liability. We schedule trailers and make sure the combined rig — truck plus loaded tool trailer — is properly insured, including the theft-from-trailer exposure.",
      },
      {
        q: "Does commercial auto cover theft from my truck?",
        a: "Liability and physical damage to the truck itself can be covered, but the stolen tools inside are not — that's a tools & equipment (inland marine) claim. We coordinate commercial auto with a tools floater so a truck break-in is fully covered: the truck repair under auto, the gear under the floater.",
      },
      {
        q: "How is commercial auto rated for contractors?",
        a: "Premium is based on the vehicles (type, value, use), drivers (records and experience), radius of operation, and cargo/trailer exposure. Clean driving records and accurate vehicle scheduling keep the cost down. We document how you actually use the trucks to rate fairly.",
      },
      {
        q: "Do you insure contractor fleets or just single trucks?",
        a: "Both. Whether you run a single work truck or a fleet of haulers, vans, and tool trailers, we structure a commercial auto program that covers every vehicle and driver — and pair it with tools floaters so the contents are covered too.",
      },
      {
        q: "What if an employee gets in an accident in a company truck?",
        a: "Commercial auto covers at-fault liability and physical damage for company vehicles. We respond fast, coordinate the claim, and get the truck repaired or replaced — and we make sure the tools inside are covered under the floater so the crew keeps moving.",
      },
    ],
  },
  "general-liability": {
    heroBlurb:
      "Third-party bodily injury and property damage protection for your operations — and the important clarification that GL does NOT cover your tools. We coordinate your GL with a tools floater so the gap between them is closed.",
    whatsCovered: [
      "Bodily injury to visitors, other trades, and the public",
      "Property damage caused by your operations",
      "Products-completed operations for finished work",
      "Defense costs and legal fees when you're named in a lawsuit",
      "Additional-insured status for GCs and project owners",
      "Personal and advertising injury coverage",
    ],
    whoItsFor: [
      "Any contractor with third-party exposure",
      "Crews whose GCs require additional-insured certificates",
      "Operations bidding commercial or multifamily work",
      "Contractors who need to understand what GL does NOT cover",
    ],
    whyCca: [
      "GL placed clearly with the tools gap explained up front",
      "Additional-insured and waiver-of-subrogation endorsements fast",
      "Coordinated with your tools floater so liability and gear are both covered",
    ],
    faqs: [
      {
        q: "Does general liability cover my stolen tools?",
        a: "No — and this is the most common and costly misconception in contractor insurance. GL covers third-party bodily injury and property damage, not your own tools or equipment. Stolen and damaged tools are covered under a tools & equipment (inland marine) floater. We build both so the gap is closed.",
      },
      {
        q: "What does general liability actually cover for a contractor?",
        a: "GL covers third-party claims — a visitor hurt on your jobsite, damage you cause to someone else's property, a completed-operations claim after your work is done, and the legal defense costs when you're sued. It does not cover your own injuries (workers' comp) or your own gear (tools floater).",
      },
      {
        q: "Why do GCs require me to add them as additional insured?",
        a: "Additional-insured status extends your GL to the GC for your operations, so if a third-party claim arises from your work your policy responds first. It's a standard contract requirement, along with a waiver of subrogation and primary/non-contributory language. We issue these routinely and fast.",
      },
      {
        q: "What GL limits do contractors typically carry?",
        a: "Most contractors carry $1M per occurrence / $2M general aggregate for GL. Commercial and multifamily GCs often require $2M or $5M limits — we add an umbrella to reach them. We size limits to what your contracts actually demand.",
      },
      {
        q: "How is contractor GL premium calculated?",
        a: "GL is usually rated on payroll, subcontractor cost, or revenue, depending on the class. Accurate classification and documented loss control keep the premium fair. We document your real operation so you're not rated on a worst-case guess.",
      },
      {
        q: "Are subcontractors covered under my GL?",
        a: "No. Independent subcontractors need their own GL and should name you additional insured. If an uninsured sub causes a loss, you can be pulled in. We help set up certificate tracking and additional-insured requirements so subcontracted work doesn't become your liability.",
      },
      {
        q: "If GL doesn't cover my tools, what does?",
        a: "A tools & equipment (inland marine) floater covers your tools, scheduled at replacement cost, on the jobsite, in transit, and on your truck. We coordinate GL (for liability) with a tools floater (for your gear) so you have the right coverage in the right place — and no gaps.",
      },
      {
        q: "Can you issue certificates of insurance fast?",
        a: "Yes. Once your program is bound we turn around additional-insured certificates, waivers of subrogation, and primary/non-contributory endorsements — usually within minutes. GCs and project owners often won't let you start work without proof of coverage.",
      },
    ],
  },
  "umbrella-excess-liability": {
    heroBlurb:
      "Layered limits above your general liability, auto, and employers' liability — essential when a stolen-equipment loss, a jobsite injury, or a multi-party claim could otherwise exhaust your primary coverage and your gear investment.",
    whatsCovered: [
      "Additional limits above GL, commercial auto, and employers' liability",
      "Limits from $2M up to $10M+ for catastrophic claims",
      "Protection for multi-party jobsite losses",
      "Coverage that follows the underlying policy form",
      "Defense contributions on large complex claims",
    ],
    whoItsFor: [
      "Contractors whose GC contracts require higher limits",
      "Crews on commercial, multifamily, or public projects",
      "Operations with significant assets or gear investment to protect",
      "Any contractor whose primary limits no longer match exposure",
    ],
    whyCca: [
      "Limits layered cleanly above your underlying program",
      "Up to $10M+ available for high-exposure operations",
      "Priced for contractors, not generic small business",
    ],
    faqs: [
      {
        q: "What does an umbrella policy cover for a contractor?",
        a: "An umbrella adds liability limits above your general liability, commercial auto, and employers' liability. If a serious jobsite injury, a multi-party loss, or a large property claim exhausts your primary policy, the umbrella pays the layers above — protecting your assets and your contracts.",
      },
      {
        q: "How much umbrella coverage does a contractor need?",
        a: "It's driven by your largest realistic loss and your contract requirements. Many commercial and multifamily GCs require $2M-$5M total limits. We model your worst-case scenarios and size the umbrella to what your work actually demands.",
      },
      {
        q: "Does the umbrella sit over my tools and equipment coverage?",
        a: "No — an umbrella sits over liability policies (GL, auto, employers' liability), not over property/inland marine coverages like a tools floater. It protects you from large liability claims, while your tools floater protects your gear itself. They address different exposures.",
      },
      {
        q: "Why would a GC require an umbrella?",
        a: "Large projects and commercial contracts shift risk down to subcontractors and require proof of high limits — often $2M-$5M. Carrying an umbrella lets you bid that work and protects you from a catastrophic liability claim that would otherwise threaten your business.",
      },
      {
        q: "How is umbrella premium calculated?",
        a: "Umbrella premium is a fraction of your underlying liability cost and reflects your operations, underlying limits, and the umbrella layer chosen. It's one of the most cost-effective ways to add protection — often hundreds of dollars per million of additional limit.",
      },
      {
        q: "Can I add umbrella limits mid-policy if a contract requires it?",
        a: "Often yes. If a new project requires higher limits, we can frequently increase the umbrella (subject to underwriting) so you can take the work. Tell us the requirement and we'll move fast.",
      },
      {
        q: "What's the difference between umbrella and excess liability?",
        a: "A true umbrella can drop down to cover some claims not covered by underlying policies; a straight excess policy simply adds limits on top of the same coverage. We place the form that fits your exposure and budget.",
      },
      {
        q: "Does the umbrella cover jobsite theft and equipment losses?",
        a: "No. An umbrella covers liability claims, not the theft of your own gear. Stolen tools and equipment are covered by your tools & equipment floater. The umbrella protects you from large third-party liability claims that could otherwise exhaust your primary coverage.",
      },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — for coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Texas & the Southwest", note: "TX, NM, AZ — the busiest tool-theft market in the country" },
  { name: "Southeast", note: "FL, GA, NC, SC — hurricane-rebuild surge and high tool inventories" },
  { name: "California & West Coast", note: "CA, OR, WA — dense urban jobs and high tool investment" },
  { name: "Northeast & Mid-Atlantic", note: "NY, NJ, PA, New England — among the highest theft exposure nationwide" },
  { name: "Pacific Northwest", note: "OR, WA — wet-climate, year-round gear-heavy work" },
  { name: "Rocky Mountain", note: "CO, ID, UT, MT — mobile-equipment investment and remote jobsites" },
  { name: "Great Lakes & Midwest", note: "MI, OH, IL, IN, WI — seasonal tool-inventory scaling" },
  { name: "Florida & Gulf Coast", note: "FL, AL, MS, LA — storm-repair tool and equipment surge" },
];

/* ============================================================
   US STATES — for quote form select
   ============================================================ */
export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

/* ============================================================
   Quote form select options (tools & equipment-specific)
   ============================================================ */
export const QUOTE_SERVICE_TYPES = [
  "Tools & Equipment Floater",
  "Scheduled Equipment & Mobile Gear",
  "Installation Floater",
  "Inland Marine Insurance",
  "Equipment Breakdown",
  "Commercial Auto (work trucks & tool trailers)",
  "General Liability Insurance",
  "Umbrella / Excess Liability",
  "Full gear & equipment program (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
