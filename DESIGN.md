---
name: Son Thien Nguyen — Systems Engineering Portfolio
description: DIN 6771 / ISO 5457 Technical Blueprint Design System for Concurrent Backend Engineering & Empirical SE Research
colors:
  vellum: "#f4f2ec"
  paper-elevated: "#faf8f3"
  carbon-ink: "#111317"
  carbon-muted: "#3f4652"
  blueprint-cobalt: "#0f4c81"
  contention-vermilion: "#c82810"
  rule: "rgba(17, 19, 23, 0.16)"
  rule-strong: "#111317"
  emerald-committed: "#007956"
  conflict-bg: "#fef2f2"
  committed-bg: "#ecfdf5"
typography:
  display:
    fontFamily: "var(--font-archivo), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-archivo), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "var(--font-public-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "var(--font-fira-code), monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  cell: "clamp(44px, 4.2vw, 60px)"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.contention-vermilion}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  button-primary-hover:
    backgroundColor: "#b82e18"
  button-secondary:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  button-outline:
    backgroundColor: "#ffffff"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  tab-active:
    backgroundColor: "{colors.blueprint-cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  tab-inactive:
    backgroundColor: "#ffffff"
    textColor: "{colors.carbon-muted}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
---

# Design System: Son Thien Nguyen — Systems Engineering Portfolio

## Overview

**Creative North Star: "The DIN 6771 / ISO 5457 Engineering Drawing Sheet"**

Every backend system, concurrency invariant, and empirical research pipeline built by Son Thien Nguyen is presented as an authentic, stamped mechanical/systems engineering specification sheet. Instead of conforming to generic modern portfolio conventions—floating rounded glass cards, soft diffuse gradients, and decorative stats—this visual system draws from the discipline of industrial blueprints and technical drawings.

The aesthetic philosophy is grounded in physical drafting materiality: warm drafting vellum paper, carbon drafting ink, structural blueprint cobalt for structural routing, and signal vermilion for high-contention failure boundaries. Technical rules define structural boundaries, corner coordinate markers (`[A1]`..`[D4]`) anchor scanning, and cross-hatch load patterns visualize concurrency pressure.

**Key Characteristics:**
- **Authentic Drafting Materiality:** Physical vellum ground with ink coordinate rules and exposed drafting dimensions (`--cell`).
- **Telemetry as Structure:** Live concurrency traces, ACID row-lock state machines, and empirical benchmark reductions replace decorative fluff.
- **Strict Visual Restraint:** Zero arbitrary gradients, zero soft floating box shadows, zero decorative pulse animations, and zero kickers or eyebrows.
- **High-Density Technical Scannability:** Monospaced tabular data aligned to technical drawing ledgers for instant inspection by engineering hiring managers.

## Colors

The palette is derived directly from industrial drafting tools and technical blueprint standards, calibrated for WCAG AA compliance ($\ge 4.5:1$ contrast) across all surfaces.

### Primary
- **Drafting Vellum Ground** (`#F4F2EC`): The foundational canvas mimicking physical technical drafting paper.
- **Elevated Paper Surface** (`#FAF8F3`): Clean, elevated vellum for interactive panels, drawer sheets, and sidebar rails.
- **Carbon Drafting Ink** (`#111317`): Deep carbon black utilized for primary headings, structural borders, and technical rules.

### Secondary
- **Structural Blueprint Cobalt** (`#0F4C81`): Industrial blueprint blue used for system nodes, successful trace routings, active coordinates, and verified invariants.
- **High-Contention Signal Vermilion** (`#C82810`): High-visibility technical warning red used for primary action triggers (Download CV), conflict rejections (HTTP 409), and contention load limits.

### Neutral
- **Muted Technical Ink** (`#3F4652`): Medium-contrast carbon ink for secondary labels, body explanations, and architectural descriptions.
- **Technical Drawing Rule** (`rgba(17, 19, 23, 0.16)`): Subtle 1px structural grid and divider lines.
- **Strong Technical Rule** (`#111317`): Dominant 1.5px and 2px border ink lines framing primary sheets and cells.

### Named Rules
**The Verification Invariant Rule.** Signal vermilion (`#C82810`) is reserved strictly for high-contention signals, conflict indicators, and the singular primary conversion action. It never appears as a decorative accent or ambient glow.

## Typography

**Display Font:** Archivo (`var(--font-archivo)`, sans-serif)
**Body Font:** Public Sans (`var(--font-public-sans)`, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)
**Label/Mono Font:** Fira Code (`var(--font-fira-code)`, monospace)

**Character:** The pairing of Archivo's bold, condensed geometric structure with Public Sans' neutral Swiss legibility and Fira Code's monospaced precision evokes the technical authority of DIN engineering blueprints and software terminal outputs.

### Hierarchy
- **Display** (Extrabold 800, `clamp(2rem, 5vw, 3.75rem)`, line-height 1, letter-spacing `-0.025em`): Title block engineer identity and prominent sheet headers.
- **Headline** (Bold 700, `1.5rem` / `24px`, line-height 1.25, `text-balance`): Section titles and case study titles.
- **Title** (Bold 700, `1.125rem` / `18px`, line-height 1.4): System architecture module headers and drawer titles.
- **Body** (Regular 400, `1rem` / `16px`, line-height 1.625, `text-pretty`, `max-w-prose`): Narrative problem descriptions, engineering methodology, and technical implementations.
- **Label** (Semibold 600, `0.75rem` / `12px`, letter-spacing `0.05em`, uppercase, `tabular-nums`): DIN coordinate stamps (`[A1]`), telemetry readings, status indicators, and specification tags.

### Named Rules
**The Tabular Telemetry Rule.** All numerical readouts, coordinate identifiers, and concurrency ratios must use monospaced fonts (`Fira Code`) with `font-variant-numeric: tabular-nums` to ensure exact column alignment across variable data states.

## Layout

The spatial model is strictly anchored by a 2D engineering grid (`--cell: clamp(44px, 4.2vw, 60px)`) evoking the blueprint layout sheets of ISO 5457:
- **First Viewport Architecture:** A 2-column framed layout consisting of a fixed `250px` left coordinate rail (`[A1]`..`[D4]`) and a primary technical drawing canvas. The primary canvas divides into a top DIN header block, an interactive central architecture stage (`1fr`), a right-hand stress telemetry column (`360px`), and a 3-cell bottom title block ledger.
- **Below-the-Fold Grid:** Structured sections (`[A1]` Systems, `[B2]` Experience Ledger, `[C3]` Empirical SE Research, `[D4]` AI Pipeline) framed by continuous 2px ink rules.
- **Measure Budget:** Narrative text blocks are strictly constrained to `max-w-prose` (65ch) with `text-pretty` to prevent visual fatigue and eliminate trailing stragglers.

## Elevation & Depth

Surfaces in this system are flat by default, honoring traditional engineering drawings. Depth is expressed through **tonal paper layering** (`#F4F2EC` ground beneath `#FAF8F3` elevated panels) and **1px / 2px ink rules** rather than soft ambient blur shadows.

### Shadow Vocabulary
- **Drawer Elevation** (`box-shadow: 0 16px 40px -8px rgba(17, 19, 23, 0.18)`): Used exclusively for the slide-over translucent specification sheet drawer to create modal separation over the base blueprint.
- **Card Flat Default** (`box-shadow: none`): Content cards and system modules use crisp `1px solid #111317` borders without drop shadows, preventing the costume of faked neobrutalism.

### Named Rules
**The Flat-By-Default Rule.** Elevation is communicated through ink weight, border contrast, and cross-hatch texture. Drop shadows are strictly prohibited on in-page content containers.

## Shapes

- **Corner Strategy:** Zero border radius (`rounded-none`, `0px`) across all structural containers, buttons, coordinate rails, and table cells. A technical blueprint is ruled with straight drafting edges; rounded corners are antithetical to DIN 6771 specifications.
- **Rule Hierarchy:**
  - `2px solid #111317`: Perimeter drawing frame and major quadrant boundaries.
  - `1px solid #111317`: System module boxes, coordinate stamps, and data table rows.
  - `1px solid rgba(17, 19, 23, 0.16)`: Internal subdivision guides and background blueprint grid lines.
- **Texture Patterns:**
  - `.blueprint-grid`: Subtle 1px grid guides repeating at `var(--cell)` intervals.
  - `.hatch-zone`: 45-degree repeating cross-hatch lines indicating contention stress zones.

## Components

### Buttons
- **Shape:** Square corners (`rounded-none`, `0px`), `1px solid #111317` border.
- **Primary CTA (Download CV):** Background `#C82810`, text `#ffffff`, uppercase monospaced `12px` font, bold weight. Hover background `#B82E18`.
- **Secondary Action (Case Study Link):** Background `#0F4C81`, text `#ffffff`, hover background `#0C3C66`.
- **Outline Action (Inspect Spec Sheet):** Background `#ffffff`, text `#111317`, hover background `#F4F2EC`, hover border `#0F4C81`, hover text `#0F4C81`.

### Navigation Tabs
- **Style:** Compact monospaced rectangular pills with exposed coordinate indices (`[01]`, `[02]`, `[03]`).
- **Active State:** Background `#0F4C81`, text `#ffffff`, border `#111317`.
- **Inactive State:** Background `#ffffff`, text `#3F4652`, border `#11131729`, hover border `#111317`, hover text `#111317`.

### Telemetry Metric Cards
- **Style:** Crisp transparent panel framed by `1px solid #111317`.
- **Top Label:** Monospaced `12px` bold uppercase tracking label.
- **Value:** Monospaced `36px`–`40px` extrabold tabular numbers (`tabular-nums`) in `#0F4C81` or `#111317`.
- **Description:** `12px` muted text explaining the invariant or benchmark result.

### Specification Drawer
- **Style:** Slide-over panel (`max-w-2xl`) with backdrop blur (`backdrop-blur-xs`), `#FAF8F3` paper ground, framed by a `2px solid #111317` left boundary.
- **Dismissal:** Accessible ESC key listener, close button with keyboard indicator, and backdrop click handler.

## Do's and Don'ts

### Do:
- **Do** maintain strict square geometry (`rounded-none`, `0px`) on all interactive and structural elements.
- **Do** format all telemetry readouts, ratios, and benchmark numbers in `font-mono` with `tabular-nums`.
- **Do** ensure all text color combinations maintain WCAG AA contrast ratios ($\ge 4.5:1$).
- **Do** constrain long paragraphs to `max-w-prose` with `text-pretty` to prevent reading fatigue.
- **Do** use authentic cross-hatch shading (`.hatch-zone`) to indicate concurrency load and contention zones.

### Don't:
- **Don't** add rounded corners (`rounded-lg`, `rounded-full`) to containers or buttons.
- **Don't** use soft diffuse drop shadows or glassmorphism gradients on page content cards.
- **Don't** add decorative pulsing animations (`animate-pulse`) to static status badges.
- **Don't** place eyebrow labels or decorative kickers above major section headings.
- **Don't** nest bordered cards inside other bordered cards with drop shadows.
