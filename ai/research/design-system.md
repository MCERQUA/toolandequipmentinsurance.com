# Design System — Tools & Equipment Insurance ("Precision")

Light, corporate, industrial-precision. Distinct from sibling CCA sites (graphite/amber vs. green/copper).

## Palette (Tailwind token NAMES are shared across the component architecture; VALUES remapped here)
- **Primary — industrial graphite/steel** (`clay`): `#2B2D42`, dark `#1E2032`, light `#3D4060`
- **Secondary — safety amber/yellow** (`sage`): `#F2A900`, dark `#C48700`, light `#F8C240`
- **Accent — signal yellow** (`gold`): `#FFD23F`, dark `#E0B800`, light `#FFE487`
- Backgrounds: `cream #FBF8F3`, `sand #F4F2EC`, white
- Text: `espresso #161826` (headings), `cocoa #3A3D52` (body), `mocha #6B6E80` (muted)
- Border: `adobe #DEDCD4`

## Typography
- Headings: **Space Grotesk** (geometric, technical, precision feel) via next/font
- Body: **Inter**

## Motifs
- **Hazard-stripe band** (`horizon-band`): repeating diagonal graphite→amber→signal-yellow safety stripe (gear-tooth rhythm)
- **Caliper tick-mark grid** (`grain`): faint engineering grid + measurement tick texture for hero/CTA bands
- Precision top-edge accent on cards (`card-arch::before`): graphite→amber→signal gradient
- Gear-tooth divider (`arch-divider`): short caliper bar in graphite/amber/signal

## Components & motion
- motion (Framer) staggered hero entrances, scroll-reveal (`FadeIn`), count-up stats (`Counter`)
- lenis smooth scroll (`SmoothScroll`)
- All animations honor `prefers-reduced-motion`

## Generated imagery (12, HF FLUX.1-schnell)
hero, truck-tools, jobsite-tools, nail-guns, compressor-genset, locked-box, lift-equipment,
crew-portrait, stolen-tools, saws-lasers, caliper-marks, og-image.
Industrial graphite/steel with safety amber accents; organized tools, truck beds, jobsite gear,
mobile equipment; photorealistic, no text.
