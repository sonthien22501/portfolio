# Implementation Plan: DIN 6771 / ISO 5457 Technical Blueprint Portfolio Upgrade

- **Base Commit SHA (`BASE_SHA`):** `218c512`
- **Primary Targets:** `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/projects/ticket-booking/page.tsx`, `src/app/projects/researcher-cockpit/page.tsx`, `src/app/projects/awd-project/page.tsx`
- **Reference Sketch:** `.impeccable/mocks/decision/assigned.html`
- **Surface Brief:** `.impeccable/surfaces/src-app-page-tsx.md`

---

## 1. Architectural & Craft Requirements (Strict Compliance)

1. **Typography (Fix `overused-font` & Avoid Banned Default Faces):**
   - Load `Archivo` (weights 600, 700, 800 — DIN-norm grotesque display/headers), `Public_Sans` (weights 400, 500, 600 — technical engineering prose), and `Fira_Code` (weights 400, 500, 600 — tabular numerals, SQL locks, and coordinates) from `next/font/google` in `src/app/layout.tsx`.
   - In `src/app/globals.css`, bind `--font-display`, `--font-sans`, and `--font-mono` properly and remove `font-family: Arial, Helvetica, sans-serif;` so `impeccable detect` reports `0` anti-patterns.
2. **Blueprint Token Spine & Browser Surfaces (`src/app/globals.css`):**
   - Tokens:
     - `--cell: clamp(44px, 4.2vw, 60px)`
     - `--paper: #F4F2EC` (drafting vellum ground)
     - `--paper-elevated: #FAF8F3` (specification sheet surface)
     - `--ink: #111317` (carbon drafting ink, contrast > 14:1 on `--paper`)
     - `--ink-muted: #3F4652` (secondary technical ink, contrast > 7:1 on `--paper`)
     - `--cobalt: #0F4C81` (structural blueprint cobalt)
     - `--vermilion: #D9381E` (high-contention signal vermilion)
     - `--rule: rgba(17, 19, 23, 0.16)` and `--rule-strong: #111317`
   - Browser surfaces (per `craft-floor.md`):
     - Custom `::selection` (`background: #0F4C81; color: #F4F2EC;`)
     - Custom `:focus-visible` (`outline: 2px solid #0F4C81; outline-offset: 3px;`)
     - Custom scrollbar (`::-webkit-scrollbar` styled in `--paper` and `--ink`)
     - Tabular numerals (`font-variant-numeric: tabular-nums`) on all metrics, dates, and coordinates
     - Cross-hatch CSS utility (`.hatch-zone`) for contention load visualization without hard offset neobrutalist `4px 4px 0` shadows (use soft offset elevation `0 16px 40px -8px rgba(17, 19, 23, 0.18)` on translucent slide-over sheets).
3. **First Viewport & Responsive Blueprint Layout (`src/app/page.tsx`):**
   - **No Kicker/Eyebrow Ban Violation:** Do NOT place small uppercase eyebrow kickers directly above `<h1>` or `<h2>` headings (`craft-floor.md` ban). Let headings lead at full weight, and place DIN coordinate stamps (`[A1]`, `[B2]`, `[C3]`, `[D4]`) in structural table cells, rail tabs, or footer title-blocks rather than as eyebrows above headings.
   - **Desktop First Viewport (Matching `.impeccable/mocks/decision/assigned.html`):**
     - Left Coordinate Rail (`240px` on desktop, sticky top bar on mobile): Identity stamp (`ST. NGUYEN`, `Hildesheim, DE`), interactive coordinate navigation (`[A1] SYSTEMS`, `[B2] EXPERIENCE`, `[C3] SE RESEARCH`, `[D4] ARCHITECTURE`) with an active SVG circuit indicator line, and a prominent vermilion `<a href="/cv.pdf" download>` button (`Download CV.pdf ↗`) plus GitHub, LinkedIn, and Email links.
     - Top DIN Header Block: Bold `SON THIEN NGUYEN` (`<h1>`) paired with right-aligned stack specification (`Backend & Distributed Systems Engineer` · `Java Spring Boot · Go · Kafka · PostgreSQL`).
     - Center Interactive Architecture Stage: Live switchable system diagram stage (tabs for **Sheet 01: Event Ticket Booking Concurrency**, **Sheet 02: JabRef JDK 25 Researcher Cockpit**, **Sheet 03: Slicer4J Program Slicing Pipeline**) with **curving SVG request trajectories** (`scientific-notation-particle-detector-event-display` raise) animating 50 concurrent requests curving through `NGINX Gateway` -> `Go Booking Svc` -> `PostgreSQL FOR UPDATE Lock` (with an interactive "Simulate 50x Contention Spike" button that updates the live lock counter: `1 COMMITTED · 49 CONFLICT REJECTED · 0 OVERSOLD`).
     - Right Telemetry & Batch Proof Column: Monospaced batch-recipe threshold cards (`1 / 50` Row-level lock resolution, `#14963` JabRef upstream PR, `Slicer4J` dynamic slice reduction) with buttons to slide open the **Translucent Specification Sheet Drawer** (`operate-b-exposure-record-zone-sheets` raise) or navigate to the full route.
     - Bottom DIN Title-Block Ledger: 3-column summary row for `Netcompany (IT Consultant)`, `TMA Solutions (Software Dev Intern)`, and `M.Sc. Software Engineering (Univ. Hildesheim · 2027)`.
4. **Below-the-Fold Blueprint Sections (`src/app/page.tsx`) & Translucent Slide-Over Spec Sheet:**
   - **Translucent Slide-Over Specification Sheet Drawer:** Clicking any system's "Inspect Spec Sheet" button slides a translucent vellum overlay sheet (`backdrop-filter: blur(8px)`, `cubic-bezier(0.22, 1, 0.36, 1)` exponential ease-out, `Esc` key and backdrop click to close) from the right with the full architecture diagram, problem/solution breakdown, cross-hatch contention zone, and link to the standalone route (`/projects/ticket-booking`, `/projects/researcher-cockpit`, `/projects/awd-project`).
   - **Section `[A1] SYSTEMS`:** Full architectural specification rows (NOT generic 3-equal cards) for all 3 projects (*Event Ticket Booking System*, *Researcher Cockpit — JabRef PR #14963*, *Advanced Web Development*) with visible mobile & desktop GitHub/PR links, batch-recipe threshold tables, and "Open Spec Sheet" + "Full Case Study Route ↗" controls.
   - **Section `[B2] EXPERIENCE`:** Engineering ledger table for **Netcompany** (Dec 2024 – Jan 2025, Java Spring Boot, Kafka, Liquibase, Docker, Kubernetes) and **TMA Solutions** (Oct 2023 – Jan 2024, Java Spring Boot, PHP, REST APIs, Scrum).
   - **Section `[C3] SE RESEARCH`:** Empirical SE research sheets for **Program Slicing in Automated Program Repair** (`Slicer4J`, `Soot`, `JUnit`, LLM token-context optimization) and **LLMs in Requirements Elicitation** (Seminar Paper), plus **Education** (`M.Sc. Software Engineering`, University of Hildesheim, Expected 2027).
   - **Section `[D4] ARCHITECTURE`:** Dedicated blueprint schematic showcasing Thien's **Asymmetric AI-Orchestrated Engineering Pipeline** (Lead Architect -> TDD Contract -> Multi-Tier Worker Execution -> Anti-Reward-Hacking QA & Concurrency Verification).
5. **Standalone Case Study Routes (`src/app/projects/*/page.tsx`):**
   - Upgrade `/projects/ticket-booking`, `/projects/researcher-cockpit`, and `/projects/awd-project` to use the exact same DIN 6771 / ISO 5457 Blueprint Sheet grammar (top DIN title-block header, back-to-index coordinate link, responsive inline SVG architecture diagrams that never clip on mobile, cross-hatch contention callouts, and tabular engineering specifications).

---

## 2. Verification & Review Focus (Top 5 Failure Modes)

1. **No Eyebrow Kickers Above Headings:** Verify no `<p>` or `<span>` uppercase label sits directly above `<h1>`, `<h2>`, or `<h3>` inside the same heading group (`impeccable detect` must exit `0`).
2. **Font Binding & Zero Overused Fonts:** Verify `Arial` and `Geist` are removed from `src/app/globals.css` and `src/app/layout.tsx`, replaced by `Archivo`, `Public_Sans`, and `Fira_Code`.
3. **Working `/cv.pdf` & Mobile External Links:** Verify `/cv.pdf` link is present and clickable, and GitHub / PR `#14963` links are visible at `390px` mobile width (no `hidden md:inline-block`).
4. **Interactive Contention Simulation & Slide-Over Sheet:** Verify clicking "Simulate 50x Spike" and "Inspect Spec Sheet" works smoothly with keyboard `Escape` support.
5. **Typecheck & Production Build:** `npx --no-install -p typescript tsc --noEmit --pretty false` and `npx --no-install next build` both pass with 0 errors.
