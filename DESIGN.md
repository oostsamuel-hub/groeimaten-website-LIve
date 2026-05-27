---
name: Groeimaten
description: Premium marketing agency voor keuken- en badkamerbedrijven in Nederland
colors:
  deep-black: "oklch(9% 0.006 60)"
  warm-white: "oklch(96% 0.008 85)"
  gold: "oklch(67% 0.09 75)"
  gold-dark: "oklch(58% 0.085 75)"
  stone: "oklch(55% 0.01 70)"
  surface: "oklch(14% 0.006 60)"
  surface-light: "oklch(93% 0.006 80)"
typography:
  display:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0"
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep-black}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.gold-dark}"
    textColor: "{colors.deep-black}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.none}"
    padding: "9px 22px"
---

# Design System: Groeimaten

## 1. Overview

**Creative North Star: "The Showroom Director's Brief"**

Groeimaten's visuele systeem is ontworpen voor één lezer: een eigenaar van een premium keuken- of badkamershowroom die zaterdagochtend op zijn iPad door agencyvoorstellen bladert. Hij verwacht precisie en warmte in gelijke mate. Het systeem antwoordt met diep warm zwart, gebroken wit en goud als enig accent. Geen glow-effecten, geen glassmorphism, geen SaaS-template energie. Vertrouwen door stilte en vakmanschap.

De referenties zijn Minotti en Flexform (warm materiaalgevoel, editoriaal, rust) gecombineerd met Basecamp en Linear (directheid, helderheid, trust door eenvoud). Het systeem verwerpt expliciet de training-data reflex voor marketing-agencies: geen electric blue, geen Webflow hero-metrics, geen identieke icon-card grids.

**Key Characteristics:**
- Diep warm zwart als dominant vlak, nooit puur #000
- Goud op ≤15% van elk scherm: als lijn, als accent, als detail
- Rechthoekige hoeken op alle interactieve elementen (buttons, badges, cards)
- Één lettertype, DM Sans, dramatisch gewichtscontrast (300 italic t/m 800)
- Secties wisselen af: donker op licht, licht op donker — ritme door contrast

## 2. Colors: The Showroom Palette

Een Committed strategie: diep warm zwart draagt 60-70% van elk scherm; gebroken warm wit biedt ademruimte; goud verschijnt spaarzaam als het enige accent.

### Primary
- **Showroom Goud** (`oklch(67% 0.09 75)` ≈ #b89a5a): Uitsluitend gebruikt voor CTAs, actieve border-states, sectie-labels, het logo-punt, en selectieve cijfer-highlights. Nooit als achtergrondvlak op meer dan 15% van het scherm.
- **Goud Donker** (`oklch(58% 0.085 75)` ≈ #9a7d42): Hover-state van goud; actieve button-fill.

### Neutral
- **Diep Warm Zwart** (`oklch(9% 0.006 60)` ≈ #0f0e0c): Hoofdachtergrond. Licht getint richting amber, nooit puur zwart.
- **Gebroken Warm Wit** (`oklch(96% 0.008 85)` ≈ #f5f2ec): Primaire tekstkleur op donkere achtergrond; achtergrond van lichte secties.
- **Steengrijs** (`oklch(55% 0.01 70)` ≈ #8a8074): Secundaire tekst, bijschriften, metainfo.
- **Verhoogd Oppervlak** (`oklch(14% 0.006 60)` ≈ #1e1c19): Kaartachtergronden, verhoogde componenten op donkere secties.
- **Licht Oppervlak** (`oklch(93% 0.006 80)` ≈ #ece9e3): Achtergrond van lichte secties, logo-strip.

### Named Rules
**De Ene Stem Regel.** Goud is het enige accent. Voeg geen tweede accentkleur toe, ook niet voor "afwisseling." Zijn zeldzaamheid is zijn waarde — elke goudkleurige pixel trekt de aandacht.

**De Geen-Puur-Zwart Regel.** Gebruik nooit #000 of #fff. Elke neutraal is licht getint richting amber (chroma 0.006-0.010). Dit onderscheidt het systeem van een generic dark-mode.

## 3. Typography

**Display/Body Font:** DM Sans (met system-ui, sans-serif als fallback)
**Label Font:** DM Sans, caps, sterk letter-spacing

**Character:** Eén lettertype door het gehele systeem, maar met dramatisch gewichtscontrast van 300 italic tot 800 upright. De combinatie van 800 upright in display-formaat met 300 italic als goud accent levert een editoriaal gevoel zonder een tweede lettertype te laden. Zuiver, strak, en schaalbaar.

### Hierarchy
- **Display** (800, clamp 2.4rem→4.75rem, lh 1.1, ls -0.03em): Hero-koppen. Domineren het scherm. Altijd in warm wit of aangevuld met goud-italic accent.
- **Headline** (700, clamp 1.9rem→3.2rem, lh 1.1, ls -0.025em): Sectiekoppen. Zelfde gewichtsklasse, kleiner formaat.
- **Title** (600, clamp 1.1rem→1.35rem, lh 1.2): Kaartkoppen, sub-secties.
- **Body** (400, 1rem, lh 1.8): Alineatekst, max 65ch breedte. Kleur: steengrijs voor secundair, warm wit voor primair.
- **Label** (700, 0.68rem, ls 0.14em, uppercase): Sectie-labels, badges, knoppen. Altijd in goud of warm wit.

### Named Rules
**De Italic Reserve Regel.** Italic wordt uitsluitend gebruikt op het accent-woord in hero-koppen (em element), in gewicht 300. Nooit italic in body-tekst, nooit italic op koppen zonder gold-kleur.

## 4. Elevation

Groeimaten gebruikt minimale schaduwlagen. Diepte wordt primair gecommuniceerd via kleurcontrast (donker vs. licht oppervlak) en border-helderheid, niet via kaart-schaduwen.

### Shadow Vocabulary
- **Kaart-hover** (`0 24px 64px oklch(9% 0.006 60 / 0.5)`): Alleen bij hover op kaarten. Geeft lift zonder glow-effect.
- **Button-hover** (`0 6px 20px oklch(67% 0.09 75 / 0.22)`): Subtiele goud-tint schaduw onder primary button bij hover.
- **Ambient none**: Kaarten in rust hebben geen schaduw. Rust = vlak.

### Named Rules
**De Vlak-in-Rust Regel.** Componenten zijn vlak in hun standaard staat. Schaduwen verschijnen uitsluitend als respons op hover. Dit voorkomt het "zwevende kaarten"-uitstraling die de SaaS-template look definieert.

## 5. Components

### Buttons
Strak rechthoekig (border-radius: 0) op alle varianten. Uppercase, 0.10em letter-spacing, 0.78-0.85rem. Knoppen zijn klein en precies — geen oversized CTA.
- **Primary:** Goud fill, zwarte tekst, hover: donker goud fill
- **Outline (btn--blue):** Transparant + goud border, warm wit tekst; hover: goud fill van links naar rechts (scaleX transform), tekst wordt zwart
- **Ghost:** Transparant + warm wit border (18% opacity), hover: border helderder
- **Nav CTA:** Identiek aan btn--blue, maar kleiner (9px 22px) en in de navigatie

### Badges / Section Labels
Border-radius: 0. Geen achtergrond-fill. Alleen goud border + goud uppercase tekst. Geen pill-vorm, geen achtergrondkleur.

### Cards
- **Corner Style:** 0 (volledig recht)
- **Background:** `oklch(14% 0.006 60)` (var(--surface)) op donkere secties
- **Shadow Strategy:** Vlak in rust; lichte hover-schaduw
- **Border:** 1px `oklch(96% 0.008 85 / 0.08)`, wordt `oklch(67% 0.09 75 / 0.30)` bij hover
- **Internal Padding:** 40px 32px

### Process Step Numbers
48×48px vierkant (border-radius: 0), goud border, goud tekst. Geen cirkel, geen glow.

### Navigation
- Transparant op hero; donkere blur-achtergrond bij scroll
- Links: 0.88rem, 500, warm wit 75% opacity; goud underline slide-in op hover
- CTA: goud-border button met slide-in fill
- Mobile menu: fullscreen, grote links

### Pricing Cards
- Achtergrond: `var(--surface)`, border 1px zachtgrijs
- Popular card: licht opgeschaald (1.03) + goud border
- Badge: goud fill, zwart tekst, linksboven (niet rechtsboven)
- Prijs: DM Sans 800 gewicht, ls -0.04em
- Buttons: conform globaal button-systeem

## 6. Do's and Don'ts

### Do:
- **Do** gebruik `oklch()` voor alle kleuren. Chroma lager dan 0.01 voor neutrale tinten.
- **Do** gebruik goud uitsluitend als accent: borders, labels, cijfer-highlights, CTA-fill. Nooit als sectie-achtergrond.
- **Do** maak alle buttons en interactieve elementen rechthoekig (border-radius: 0 of max 2px).
- **Do** gebruik DM Sans 800 voor display-koppen en 300 italic voor goud accent-woorden.
- **Do** laat secties afwisselen in ritme: donker → licht → donker voor ademruimte.
- **Do** citeer echte klanten, echte namen, echte teamleden. Vertrouwen door transparantie.
- **Do** cap body-tekst op 65ch voor leesbaarheid.

### Don't:
- **Don't** gebruik glassmorphism (backdrop-filter: blur) op cards of buttons — dit is de gaming/tech-reflex.
- **Don't** gebruik electric blue of neon kleuren. Deze zijn expliciet weggegooide stijl.
- **Don't** maak cards met grote rounded corners (≥16px). Dit ziet er uit als een SaaS Webflow-template.
- **Don't** gebruik text-shadow op koppen of nummers. Niet nodig, en het ziet er "AI-gegenereerd" uit.
- **Don't** gebruik identieke icon-card grids. Varieer in compositie: 50/50 splits, citaten, cijfer-blokken.
- **Don't** gebruik gradient tekst (background-clip: text). Gebruik één solide kleur, met gewicht voor nadruk.
- **Don't** zet een side-stripe border (border-left > 1px als kleur-accent). Gebruik tint-achtergrond of goud top-line.
- **Don't** voeg een tweede accent toe "voor afwisseling." Goud is de enige stem.
- **Don't** verberg informatie achter hover-only states — alle essentiële content moet zichtbaar zijn zonder interactie.
