# Architecture Cache — Portfolio (`portfolio`)

## 1. Tech Stack & Runtime
- **Framework:** Next.js 16.4.0 (App Router, React 19.3.0, TypeScript 5)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/turbopack`, CSS custom properties in `src/app/globals.css`)
- **Icons:** `lucide-react` (`^1.55.0`)
- **Product & Design Contracts:** `PRODUCT.md`, `.impeccable/surfaces/src-app-page-tsx.md`, `DESIGN.md`

## 2. Exact Commands (Silent-On-Success Compatible)
- **Typecheck:** `npx --no-install -p typescript tsc --noEmit --pretty false`
- **Build:** `npx --no-install next build`
- **Lint:** `npx --no-install eslint`
- **UI Detector:** `/Users/thiennguyen/.gemini/antigravity-cli/skills/impeccable/scripts/impeccable detect --json src`
- **UI Audit:** `python3 ~/.gemini/antigravity-cli/skills/ui-ux-pro-max/scripts/ui_audit.py src`

## 3. Directory & Route Map
- `src/app/layout.tsx` — Root layout loading display (`Archivo` / `Chivo`), humanist sans (`Public Sans`), and technical monospace (`Commit Mono` / `Fira Code` / `JetBrains Mono`) fonts + metadata.
- `src/app/globals.css` — DIN 6771 / ISO 5457 Blueprint token system (`--cell`, `--paper`, `--ink`, `--cobalt`, `--vermilion`, `--rule`, custom `::selection`, focus ring, scrollbar, cross-hatch utilities).
- `src/app/page.tsx` — Main DIN Technical Blueprint Sheet portfolio surface with interactive system stage, curving SVG request trajectories, translucent slide-over specification sheet drawer, and full below-the-fold blueprint sheets (`[A1] SYSTEMS`, `[B2] EXPERIENCE`, `[C3] SE RESEARCH`, `[D4] ARCHITECTURE`).
- `src/app/projects/ticket-booking/page.tsx` — Standalone DIN specification sheet for Event Ticket Booking System (`SELECT ... FOR UPDATE` concurrency proof).
- `src/app/projects/researcher-cockpit/page.tsx` — Standalone DIN specification sheet for Researcher Cockpit (JabRef JDK 25 + WebExtension, PR `#14963`).
- `src/app/projects/usagi-buddy/page.tsx` — Standalone DIN specification sheet for Usagi Buddy Desktop Companion (Electron, 60 FPS Canvas Physics, Alpha Hit-Testing, 14 Vitest suites).
- `src/app/projects/awd-project/page.tsx` — Standalone DIN specification sheet for Advanced Web Development (TypeScript/Node.js decoupled architecture · Core Team Member 3-Person Team).

## 4. Milestone Progress Checklist
- [x] Initial Next.js portfolio & case study pages
- [x] `PRODUCT.md` and `.impeccable/surfaces/src-app-page-tsx.md` initialized
- [x] DIN 6771 / ISO 5457 Technical Blueprint Sheet design (`src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, case study routes)
- [x] Usagi-Buddy desktop companion & AWD agile team case studies added
- [x] Button overflow and font readability fixes implemented
- [x] Finish review & `DESIGN.md` documentation
