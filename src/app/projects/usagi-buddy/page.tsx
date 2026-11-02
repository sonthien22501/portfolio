import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code2, Monitor, Cpu, Sparkles, CheckCircle2, ShieldCheck, Layers, Play } from 'lucide-react';

export default function UsagiBuddyCaseStudy() {
  return (
    <main className="blueprint-grid min-h-screen text-[var(--ink)] p-3 sm:p-6 md:p-8 lg:p-12 selection:bg-[var(--cobalt)] selection:text-[var(--paper)]">
      <div className="max-w-4xl mx-auto border-2 border-[var(--ink)] bg-[var(--paper)]/95 shadow-sm">
        
        {/* TOP TECHNICAL NAVIGATION RAIL */}
        <div className="flex items-center justify-between p-4 border-b-2 border-[var(--ink)] bg-[var(--paper-elevated)] font-sans text-xs sm:text-sm">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>← Back to Portfolio</span>
          </Link>
          <span className="font-mono text-xs text-[var(--cobalt)] font-semibold hidden sm:inline">
            PROJECT 3 // MULTI-WINDOW IPC &amp; 60 FPS CANVAS PHYSICS
          </span>
        </div>

        {/* HEADER */}
        <header className="p-6 md:p-8 border-b-2 border-[var(--ink)] bg-[var(--paper)] space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-[var(--vermilion)] tracking-wider">
                DESKTOP SYSTEMS ARCHITECTURE // ELECTRON &amp; TYPESCRIPT
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--ink)] leading-tight">
                Usagi Buddy (Usagi Float v0.5)
              </h1>
              <div className="font-sans text-sm md:text-base text-[var(--cobalt)] font-semibold">
                Multi-Window Desktop Companion · 60 FPS HTML5 Canvas Physics · Alpha Hit-Testing
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="https://github.com/sonthien22501/usagi-buddy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--ink)] text-white hover:bg-[var(--cobalt)] font-sans text-sm font-semibold transition-colors border border-[var(--ink)]"
              >
                <Code2 size={16} />
                <span>GitHub Repository ↗</span>
              </a>
            </div>
          </div>

          {/* Stack Specification Badges */}
          <div className="flex flex-wrap gap-2 pt-2 font-sans text-xs sm:text-sm font-medium">
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">Electron 33</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">TypeScript 5</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">HTML5 Canvas 2D</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">Node.js</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">esbuild</span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold font-mono">14 Vitest Suites Passed</span>
          </div>
        </header>

        {/* TELEMETRY METRIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b-2 border-[var(--ink)] bg-[var(--paper-elevated)] font-sans">
          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-[var(--ink)] space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider">
              RENDER LOOP BUDGET
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-[var(--cobalt)] tabular-nums">
              60 FPS
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              &lt; 16.6ms per-frame budget for physics integration and multi-sprite canvas blitting.
            </div>
          </div>

          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-[var(--ink)] space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
              IPC TOPOLOGY
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-[var(--ink)] tabular-nums">
              4 WINDOWS
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Overlay, Dashboard GUI, Sticky Quests &amp; Calendar, and System Tray Popover.
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-1">
            <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider">
              UNIT TEST SUITES
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-700 tabular-nums">
              14 SUITES
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Deterministic Vitest suites covering physics equations, store persistence, and alpha hit-testing.
            </div>
          </div>
        </div>

        {/* MAIN BODY SECTIONS */}
        <div className="p-6 md:p-10 space-y-12 bg-[var(--paper)]">
          
          {/* SECTION 1: THE ARCHITECTURAL CHALLENGE */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                1. The Desktop Companion Concurrency &amp; Event Problem
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 1.0]</span>
            </div>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              Virtual desktop pets and screen companions traditionally suffer from critical usability flaws that make them unsuitable for productive engineering workstations:
            </p>
            <ul className="space-y-2 text-sm md:text-base text-[var(--ink-muted)] leading-relaxed list-disc list-inside">
              <li>
                <strong className="text-[var(--ink)]">Full-Screen Mouse Interception:</strong> Transparent frameless windows that span multiple displays capture all click events, blocking developers from clicking code editors, browser tabs, or terminal windows behind the companion.
              </li>
              <li>
                <strong className="text-[var(--ink)]">Multi-Window State Desynchronization:</strong> Modifying settings, changing character skins, or updating Pomodoro timer states across independent renderer processes leads to race conditions and stale UI states without a centralized IPC mediator.
              </li>
              <li>
                <strong className="text-[var(--ink)]">Frame Jitter &amp; High Idle CPU:</strong> Naive animation loops using unthrottled DOM mutations consume excessive battery and CPU cycles on macOS and Windows, causing stuttering during heavy compile tasks.
              </li>
            </ul>
          </section>

          {/* SECTION 2: ARCHITECTURE & IPC TOPOLOGY */}
          <section className="space-y-6 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                2. Multi-Window IPC Topology &amp; Per-Pixel Hit-Testing
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 2.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              To solve the click-interception dilemma while maintaining seamless desktop interaction, Usagi Buddy implements a decoupled multi-process architecture orchestrated by the Electron Main Process:
            </p>

            {/* Architecture Diagram */}
            <div className="border border-[var(--ink)] bg-white p-4 md:p-6 flex flex-col items-center justify-center overflow-x-auto">
              <div className="w-full max-w-3xl">
                <svg
                  viewBox="0 0 760 300"
                  className="w-full h-auto text-[var(--ink)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="760" height="300" fill="#FAF8F3" stroke="var(--rule-strong)" strokeWidth="1" />
                  
                  {/* Central Node: Electron Main Process */}
                  <g transform="translate(290, 110)">
                    <rect width="180" height="80" fill="white" stroke="var(--cobalt)" strokeWidth="2" />
                    <text x="90" y="32" textAnchor="middle" fontSize="13" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--cobalt)">
                      MAIN PROCESS
                    </text>
                    <text x="90" y="52" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">
                      IPC Event Hub &amp; Window Manager
                    </text>
                    <text x="90" y="68" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--vermilion)">
                      ghostModeController.ts
                    </text>
                  </g>

                  {/* Window 1: Overlay Window (Top Left) */}
                  <g transform="translate(30, 25)">
                    <rect width="190" height="90" fill="white" stroke="var(--ink)" strokeWidth="1.5" />
                    <text x="95" y="28" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">
                      OVERLAY RENDERER
                    </text>
                    <text x="95" y="48" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">
                      60 FPS HTML5 Canvas 2D
                    </text>
                    <text x="95" y="64" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">
                      physicsEngine.ts (Swimming)
                    </text>
                    <text x="95" y="78" textAnchor="middle" fontSize="8" fontFamily="var(--font-fira-code)" fill="#059669">
                      Per-Pixel Alpha Hit-Testing
                    </text>
                  </g>

                  {/* Window 2: Dashboard Window (Top Right) */}
                  <g transform="translate(540, 25)">
                    <rect width="190" height="90" fill="white" stroke="var(--ink)" strokeWidth="1.5" />
                    <text x="95" y="28" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">
                      DASHBOARD GUI
                    </text>
                    <text x="95" y="48" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">
                      Settings &amp; Character Picker
                    </text>
                    <text x="95" y="64" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">
                      pomodoroTimer.ts
                    </text>
                    <text x="95" y="78" textAnchor="middle" fontSize="8" fontFamily="var(--font-fira-code)" fill="var(--ink-muted)">
                      Local JSON Store Persistence
                    </text>
                  </g>

                  {/* Window 3: Sticky Notes & Calendar (Bottom Left) */}
                  <g transform="translate(30, 185)">
                    <rect width="190" height="90" fill="white" stroke="var(--ink)" strokeWidth="1.5" />
                    <text x="95" y="28" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">
                      STICKY &amp; CALENDAR
                    </text>
                    <text x="95" y="48" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">
                      Desktop-Pinned Widget
                    </text>
                    <text x="95" y="64" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">
                      calendarStore.ts
                    </text>
                    <text x="95" y="78" textAnchor="middle" fontSize="8" fontFamily="var(--font-fira-code)" fill="var(--ink-muted)">
                      reminderStore.ts
                    </text>
                  </g>

                  {/* Window 4: System Tray Popover (Bottom Right) */}
                  <g transform="translate(540, 185)">
                    <rect width="190" height="90" fill="white" stroke="var(--ink)" strokeWidth="1.5" />
                    <text x="95" y="28" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">
                      TRAY POPOVER
                    </text>
                    <text x="95" y="48" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">
                      Status Bar &amp; Quick Controls
                    </text>
                    <text x="95" y="64" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">
                      trayPositioner.ts
                    </text>
                    <text x="95" y="78" textAnchor="middle" fontSize="8" fontFamily="var(--font-fira-code)" fill="var(--ink-muted)">
                      Multi-Monitor Anchor Math
                    </text>
                  </g>

                  {/* Connecting Arrows */}
                  <path d="M 220 70 L 290 130" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M 540 70 L 470 130" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M 220 230 L 290 170" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M 540 230 L 470 170" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* IPC Labels */}
                  <text x="235" y="95" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">IPC sync</text>
                  <text x="495" y="95" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">IPC sync</text>
                  <text x="235" y="205" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">IPC sync</text>
                  <text x="495" y="205" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">IPC sync</text>
                </svg>
              </div>
              <div className="font-mono text-xs text-[var(--ink-muted)] mt-3">
                FIG 3.1 // 4-WINDOW ELECTRON IPC COORDINATION ARCHITECTURE
              </div>
            </div>

            {/* Ghost Mode Technical Callout */}
            <div className="border border-[var(--ink)] bg-white p-5 space-y-3">
              <h3 className="font-display font-bold text-lg text-[var(--ink)] flex items-center gap-2">
                <ShieldCheck size={18} className="text-[var(--cobalt)]" />
                <span>Zero-Latency Per-Pixel Alpha Hit-Testing (Ghost Mode Controller)</span>
              </h3>
              <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
                Rather than locking mouse events globally, the Overlay window operates a high-frequency coordinate listener. When the cursor hovers over transparent Canvas pixels (alpha channel = 0), the controller signals the main process to execute <code className="font-mono font-bold text-[var(--ink)] bg-[var(--paper)] px-1.5 py-0.5 border border-[var(--rule-strong)]">setIgnoreMouseEvents(true, &#123; forward: true &#125;)</code>, letting operating system clicks pass cleanly through to whatever IDE or browser is beneath. The instant the cursor enters the opaque sprite boundary (alpha &gt; 20), mouse events re-engage with zero frame latency for dragging, petting, and interactive physics interactions.
              </p>
            </div>
          </section>

          {/* SECTION 3: 60 FPS CANVAS PHYSICS ENGINE */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                3. HTML5 2D Canvas 60 FPS Physics Engine
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 3.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The companion character is driven by a bespoke 2D physics simulation implemented in <code className="font-mono font-bold text-[var(--ink)] bg-[var(--paper)] px-1.5 py-0.5 border border-[var(--rule-strong)]">physicsEngine.ts</code>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white border border-[var(--ink)] space-y-2">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">[3.1] KICK-AND-GLIDE</div>
                <div className="font-bold text-sm text-[var(--ink)]">Zero-Gravity Swimming</div>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                  Implements directional impulse vectors with realistic fluid drag deceleration, simulating weightless floating across desktop coordinates.
                </p>
              </div>

              <div className="p-4 bg-white border border-[var(--cobalt)] space-y-2">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">[3.2] CURSOR ATTRACTION</div>
                <div className="font-bold text-sm text-[var(--cobalt)]">Proximity Gravitational Pull</div>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                  Computes inverse-square gravitational acceleration toward the user&apos;s mouse cursor when idle, smoothly dampening to avoid orbital oscillations.
                </p>
              </div>

              <div className="p-4 bg-white border border-[var(--ink)] space-y-2">
                <div className="font-mono text-xs font-bold text-[var(--vermilion)]">[3.3] BOUNDARY RESOLUTION</div>
                <div className="font-bold text-sm text-[var(--ink)]">Multi-Monitor Clamping</div>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                  Calculates display boundaries dynamically, reflecting velocity vectors off screen borders with elastic restitution coefficients.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: TEST SUITES & VERIFICATION */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                4. Vitest Test Suites &amp; Deterministic Quality Gates
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 4.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              Every critical subsystem is verified by automated Vitest unit test suites, preventing regressions across esbuild bundling cycles:
            </p>

            <div className="border border-[var(--rule-strong)] bg-white overflow-hidden">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[var(--rule-strong)] bg-[var(--paper-elevated)] font-mono text-xs">
                    <th className="p-3 font-bold text-[var(--ink)]">MODULE UNDER TEST</th>
                    <th className="p-3 font-bold text-[var(--ink)]">TARGET INVARIANT</th>
                    <th className="p-3 font-bold text-right text-[var(--ink)]">VERIFICATION STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--rule)]">
                  <tr>
                    <td className="p-3 font-mono font-bold text-[var(--cobalt)]">physicsEngine.test.ts</td>
                    <td className="p-3 text-[var(--ink-muted)]">Velocity damping, boundary bouncing, and cursor attraction vector math</td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">100% PASS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[var(--cobalt)]">ghostModeController.test.ts</td>
                    <td className="p-3 text-[var(--ink-muted)]">Per-pixel alpha hit-testing transition triggers and mouse ignore toggles</td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">100% PASS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[var(--cobalt)]">alphaCropper.test.ts</td>
                    <td className="p-3 text-[var(--ink-muted)]">Bounding box detection and zero-alpha transparent pixel pruning</td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">100% PASS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[var(--cobalt)]">pomodoroTimer.test.ts</td>
                    <td className="p-3 text-[var(--ink-muted)]">Focus/break phase transitions and notification IPC event dispatches</td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">100% PASS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[var(--cobalt)]">calendarStore.test.ts</td>
                    <td className="p-3 text-[var(--ink-muted)]">Desktop quest persistence, recurring reminder calculation, and schema validation</td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">100% PASS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="hatch-zone p-4 border border-[var(--rule-strong)] flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
              <div className="text-xs sm:text-sm text-[var(--ink)] font-sans">
                <strong className="text-[var(--ink)]">Factual Proof:</strong> Full open-source repository published at <a href="https://github.com/sonthien22501/usagi-buddy" target="_blank" rel="noreferrer" className="text-[var(--cobalt)] font-semibold hover:underline">github.com/sonthien22501/usagi-buddy</a> with complete TypeScript source code, Vitest suites, and GitHub Actions CI.
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM TITLE BLOCK LEDGER */}
        <footer className="p-6 border-t-2 border-[var(--ink)] bg-[var(--paper-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm">
          <Link
            href="/"
            className="font-semibold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={16} />
            <span>← Back to Portfolio</span>
          </Link>
          <a
            href="https://github.com/sonthien22501/usagi-buddy"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--cobalt)] font-semibold hover:underline flex items-center gap-1.5"
          >
            <span>View Source Code on GitHub ↗</span>
          </a>
        </footer>

      </div>
    </main>
  );
}
