# Implementation Plan: Add Usagi-Buddy, AWD Team Role, Fix Button Overflow & Improve Font Legibility

- **Base Commit SHA (`BASE_SHA`):** `c6fd0e0`
- **Targets:**
  - `src/app/globals.css`
  - `src/app/page.tsx`
  - `src/app/projects/usagi-buddy/page.tsx` (NEW)
  - `src/app/projects/awd-project/page.tsx`
  - `PRODUCT.md`, `docs/ARCHITECTURE.md`

---

## 1. Root Cause Analysis (`systematic-debugging`)

1. **Button Text Overflow ("LinkedIn" outside the box):**
   - In `src/app/page.tsx` lines 264–290, the left coordinate rail (`250px` wide with `p-5 md:p-6` = `202px` inner width) uses `<div className="grid grid-cols-3 gap-1 pt-1 font-mono text-xs text-center">` for `GitHub`, `LinkedIn`, and `Email`. Each cell is only `~64px` wide, and with `p-2` (`16px` horizontal padding), the available content width is `48px`—causing the 8-character monospace string `"LinkedIn"` (`~60px`) to overflow outside the button border box!
   - **Fix:** Replace the cramped `grid-cols-3` container with a clean stacked or 2+1 full-width/flex-wrap button layout (`grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2` or a `grid-cols-2` top row + full-width bottom button with icons and `px-3 py-2 text-sm font-sans font-semibold`) where every button has plenty of horizontal breathing room and never clips or overflows at any viewport width. Also inspect all other buttons across `src/app/page.tsx` and case studies, replacing cramped `font-mono text-xs` buttons with clear `font-sans text-sm font-semibold` buttons and ensuring proper flex wrapping.
2. **Font Hard to Read (`font-mono text-xs` Overuse):**
   - `Fira Code` (`font-mono`) at `text-xs` (`12px`) with uppercase tracking was applied to almost every card body, button, table cell, and architecture box in `src/app/page.tsx`. Monospace at `12px` has wide character advance and low x-height contrast for prose/labels, making scanning tiring.
   - **Fix:**
     - Use **`Public Sans` (`font-sans`)** at `text-sm` (`14px`) and `text-base` (`16px`) with comfortable line-height (`leading-relaxed`) and dark ink (`#111317` / `#262B33`) for all buttons, navigation labels, descriptions, architecture explanations, and specification values.
     - Reserve `font-mono` (`Fira Code`) **strictly** for short coordinate tags (`[A1]`, `[B2]`), SQL/code snippets (`SELECT ... FOR UPDATE`), and numeric counters (`1 / 50`, `#14963`).
     - Soften the background `.blueprint-grid` hairline opacity in `src/app/globals.css` (`--rule: rgba(17, 19, 23, 0.09)` for the background grid, keeping `--rule-strong: #111317` for structural borders) so grid lines never compete with text legibility.

---

## 2. Content Additions (`usagi-buddy` + `AWD_Project`)

1. **Add `usagi-buddy` ("Usagi Float — Multi-Window Desktop Companion"):**
   - **GitHub URL:** `https://github.com/sonthien22501/usagi-buddy`
   - **Case Study Route:** `/projects/usagi-buddy` (`src/app/projects/usagi-buddy/page.tsx`)
   - **Interactive Stage & Spec Sheet (`SHEETS['usagi-buddy']` in `src/app/page.tsx`):**
     - Add `[03] USAGI BUDDY (ELECTRON)` and `[04] AWD FULL-STACK (TEAM)` (alongside `[01] TICKET BOOKING`, `[02] JABREF JDK 25 PR`, `[05] SLICER4J APR`) to the interactive stage switcher and `SHEETS` map so visitors can preview and open the slide-over Spec Sheet for every project!
     - Update the `[A1] SYSTEMS` count in the left rail from `03` to `04` (`04 ACTIVE PRODUCTION & R&D SYSTEMS`).
     - **Technical Highlights for `usagi-buddy`:**
       - Cross-platform (`macOS` & `Windows`) frameless, transparent desktop companion built with **Electron**, **TypeScript**, and **HTML5 2D Canvas**.
       - Multi-window IPC architecture synchronizing 4 independent windows: 60 FPS transparent full-screen overlay (`physicsEngine.ts` kick-and-glide swimming & cursor-hug physics), per-pixel click-through hit-testing (`setIgnoreMouseEvents(true, { forward: true })` in `ghostModeController.ts`), Dashboard GUI, Desktop-Pinned Sticky Quests & Holiday Calendar (`calendarStore.ts`), and custom Tray Popover (`trayPositioner.ts`).
       - Verified by **14 Vitest test suites** (`alphaCropper`, `physicsEngine`, `ghostModeController`, `pomodoroTimer`, `reminderStore`, `calendarStore`, etc.) bundled via `esbuild`.
2. **Enhance `AWD_Project` ("Advanced Web Development — Team Member & Full-Stack Co-Architect"):**
   - **GitHub URL:** `https://github.com/Avnish-Raut/AWD_Project`
   - Explicitly highlight **Role: Core Team Member (3-Person Agile Engineering Team)** in both the `[A1] SYSTEMS` section on `src/app/page.tsx`, the interactive `SHEETS['awd-project']` drawer, and `/projects/awd-project` (`src/app/projects/awd-project/page.tsx`).
   - Add an "Inspect Spec Sheet ↗" button to the AWD project block in `[A1] SYSTEMS` (matching the other projects) in addition to "Full Case Study ↗" and "GitHub Repo (`Avnish-Raut/AWD_Project`) ↗".

---

## 3. Verification & Review Focus
1. **Zero Button Text Overflow:** Verify `GitHub`, `LinkedIn`, `Email`, `Download CV.pdf`, and all sheet/case-study buttons have generous padding, `font-sans text-sm font-semibold`, and zero text overflowing outside borders at `390px`, `768px`, `1024px`, and `1440px`.
2. **High Readability Typography:** Verify prose, buttons, and table descriptions use `font-sans` (`Public Sans`) at `14px–16px` (`text-sm` / `text-base`), keeping `font-mono` only on coordinate stamps and code/metrics.
3. **All 4 Systems Present & Linked:**
   - `Event Ticket Booking System` (`https://github.com/sonthien22501/ticket_booking_system`, `/projects/ticket-booking`)
   - `Researcher Cockpit (JabRef)` (`https://github.com/JabRef/jabref/pull/14963`, `/projects/researcher-cockpit`)
   - `Usagi Buddy (Usagi Float)` (`https://github.com/sonthien22501/usagi-buddy`, `/projects/usagi-buddy`)
   - `Advanced Web Development (AWD)` (`https://github.com/Avnish-Raut/AWD_Project`, `/projects/awd-project` — explicitly badged as **Team Member · 3-Person Agile Team**)
4. **Automated Checks:** `tsc --noEmit`, `impeccable detect --json src`, `ui_audit.py src`, and `next build` all pass with 0 errors.
