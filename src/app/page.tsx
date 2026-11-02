'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Code2, 
  MapPin, 
  Download, 
  X, 
  Play, 
  GitPullRequest,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface SheetData {
  id: string;
  sheetCode: string;
  title: string;
  headline: string;
  subtitle: string;
  primaryMetric: { value: string; label: string; desc: string };
  secondaryMetric: { value: string; label: string; desc: string };
  route: string;
  githubUrl: string;
  githubLabel: string;
  badge: string;
  stack: string[];
  concurrencySpecs: {
    protocol: string;
    lockModel: string;
    isolation: string;
    latency: string;
  };
  summary: string;
  solution: string;
}

const SHEETS: Record<string, SheetData> = {
  'ticket-booking': {
    id: 'ticket-booking',
    sheetCode: 'SHEET 01 // ACID TRANSACTION BOUNDARY',
    title: 'Event Ticket Booking System',
    headline: 'Zero-Overselling Microservices under 50x Row-Lock Contention',
    subtitle: 'High-Concurrency Microservices · Go · PostgreSQL Row Locks · NGINX Gateway',
    primaryMetric: {
      value: '1 / 50',
      label: 'CONCURRENCY INVARIANT',
      desc: 'Row-level lock resolution under simultaneous seat contention. 0 oversold tickets.',
    },
    secondaryMetric: {
      value: '0 OVERSOLD',
      label: 'TRANSACTION GUARANTEE',
      desc: 'Strict ACID boundary via PostgreSQL SELECT FOR UPDATE row-level locks.',
    },
    route: '/projects/ticket-booking',
    githubUrl: 'https://github.com/sonthien22501/ticket_booking_system',
    githubLabel: 'GitHub Repo ↗',
    badge: 'Microservices · Go',
    stack: ['Go 1.22', 'PostgreSQL 16', 'NGINX', 'Docker Compose', 'React', 'TypeScript'],
    concurrencySpecs: {
      protocol: 'REST / Reverse Proxy HTTP/1.1',
      lockModel: 'PostgreSQL SELECT ... FOR UPDATE',
      isolation: 'Read Committed with Row Exclusive',
      latency: '24ms p99 at 50 concurrent requests',
    },
    summary:
      'High-traffic ticket booking platforms experience catastrophic race conditions when thousands of users attempt to reserve the same seat simultaneously. Without database-level isolation, standard ORMs produce phantom reservations and double bookings.',
    solution:
      'Engineered a decoupled microservices architecture with an NGINX API Gateway, Go Booking Service, and PostgreSQL row-level locks. Load tested under 50 concurrent requests for the exact same seat: strictly 1 transaction commits, 49 are safely rejected with conflict status, maintaining complete data integrity.',
  },
  'researcher-cockpit': {
    id: 'researcher-cockpit',
    sheetCode: 'SHEET 02 // CROSS-ENVIRONMENT IPC BRIDGE',
    title: 'Researcher Cockpit (JabRef Integration)',
    headline: 'WebExtension to Local JDK 25 Reference Management Bridge',
    subtitle: 'Browser Extension Sandbox · Local Java Backend · Real-Time DOM Scrapers',
    primaryMetric: {
      value: '#14963',
      label: 'OPEN SOURCE PR',
      desc: 'Upstream contribution merged into official JabRef repository codebase.',
    },
    secondaryMetric: {
      value: 'JDK 25',
      label: 'RUNTIME COMPATIBILITY',
      desc: 'Local desktop REST listener communicating across browser security boundaries.',
    },
    route: '/projects/researcher-cockpit',
    githubUrl: 'https://github.com/JabRef/jabref/pull/14963',
    githubLabel: 'PR #14963 on GitHub ↗',
    badge: 'Open Source · Java',
    stack: ['JavaScript (ESNext)', 'Java (JDK 25)', 'WebExtensions API', 'JabRef Core', 'DOM Scraping'],
    concurrencySpecs: {
      protocol: 'Local Loopback REST IPC',
      lockModel: 'Synchronized Reference Ingestion Queue',
      isolation: 'Browser Sandbox Origin Isolation',
      latency: '< 15ms payload serialization & transfer',
    },
    summary:
      'Academic researchers waste hundreds of hours manually copying metadata and organizing bibliographies across disparate portals like IEEE Xplore, arXiv, and Google Scholar.',
    solution:
      'Constructed a client-server bridge injecting WebExtension DOM scrapers into academic publishers, communicating via local IPC with JabRef desktop. Successfully contributed to upstream JabRef codebase via PR #14963.',
  },
  'slicer4j-research': {
    id: 'slicer4j-research',
    sheetCode: 'SHEET 03 // EMPIRICAL SE PIPELINE',
    title: 'Program Slicing in Automated Program Repair',
    headline: 'Dynamic Bytecode Slicing for LLM Token Context Optimization',
    subtitle: 'Slicer4J · Soot Intermediate Representation · JUnit · Token Pruning',
    primaryMetric: {
      value: '-68.4%',
      label: 'TOKEN REDUCTION',
      desc: 'Context window reduction feeding dynamic slices to repair LLMs without signal loss.',
    },
    secondaryMetric: {
      value: 'Slicer4J',
      label: 'BYTECODE INSTRUMENTATION',
      desc: 'Dynamic backward slicing isolating minimal fault-relevant execution traces.',
    },
    route: '#research',
    githubUrl: 'https://github.com/sonthien22501',
    githubLabel: 'GitHub Research Profile ↗',
    badge: 'Empirical SE · Java',
    stack: ['Java', 'Slicer4J', 'Soot IR', 'JUnit 5', 'LLM Prompt Engineering'],
    concurrencySpecs: {
      protocol: 'JVM Dynamic Execution Tracer',
      lockModel: 'Thread-Local Trace Collection',
      isolation: 'Sandboxed Fault Reproduction Harness',
      latency: 'Deterministic backward traversal in O(E)',
    },
    summary:
      'Feeding entire multi-thousand line enterprise codebases to LLMs for automated program repair exhausts prompt context limits and induces hallucinated modifications.',
    solution:
      'Engineered an empirical evaluation pipeline combining Slicer4J, Soot, and JUnit to isolate exact dynamic backward slices for failing tests, pruning 68.4% of irrelevant tokens while retaining 100% of causal defect statements.',
  },
};

export default function Home() {
  const [activeSheetKey, setActiveSheetKey] = useState<string>('ticket-booking');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [committedCount, setCommittedCount] = useState<number>(1);
  const [rejectedCount, setRejectedCount] = useState<number>(49);
  const [drawerSheet, setDrawerSheet] = useState<SheetData | null>(null);

  const activeSheet = SHEETS[activeSheetKey] || SHEETS['ticket-booking'];

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerSheet(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerSpikeSimulation = () => {
    setIsSimulating(true);
    setCommittedCount(0);
    setRejectedCount(0);

    setTimeout(() => {
      setCommittedCount(1);
      setRejectedCount(49);
      setIsSimulating(false);
    }, 900);
  };

  return (
    <div className="blueprint-grid min-h-screen text-[var(--ink)] p-2 sm:p-4 md:p-6 lg:p-8 selection:bg-[var(--cobalt)] selection:text-[var(--paper)]">
      {/* Outer Technical Frame (DIN 6771 / ISO 5457 Layout) */}
      <div className="max-w-[1480px] mx-auto border-2 border-[var(--ink)] bg-[var(--paper)]/95">
        
        {/* ========================================================================= */}
        {/* FIRST VIEWPORT COMPOSITION: RAIL + HEADER + STAGE + PROOF + TITLE BLOCK */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] border-b-2 border-[var(--ink)]">
          
          {/* LEFT COORDINATE RAIL */}
          <aside className="border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--ink)] p-5 md:p-6 flex flex-col justify-between bg-[var(--paper-elevated)]">
            <div className="space-y-6">
              {/* Identity & Sheet Identification */}
              <div className="pb-5 border-b border-[var(--rule-strong)]">
                <div className="font-mono text-xs font-bold text-[var(--vermilion)] tracking-wider">
                  DIN 6771 // SYS-ENG
                </div>
                <div className="font-display text-2xl font-black tracking-tight text-[var(--ink)] mt-1">
                  ST. NGUYEN
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--ink-muted)] mt-1">
                  <MapPin size={13} className="text-[var(--cobalt)]" />
                  <span>Hildesheim, Germany</span>
                </div>
              </div>

              {/* Coordinate Navigation Links */}
              <nav className="space-y-1.5" aria-label="Blueprint Coordinates">
                <a
                  href="#systems"
                  className="flex items-center justify-between p-2.5 rounded-none font-mono text-xs font-semibold hover:bg-[var(--paper)] hover:text-[var(--cobalt)] border border-transparent hover:border-[var(--ink)] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[var(--cobalt)] font-bold">[A1]</span>
                    <span>SYSTEMS</span>
                  </span>
                  <span className="tabular-nums text-[var(--ink-muted)] group-hover:text-[var(--ink)]">03</span>
                </a>
                <a
                  href="#experience"
                  className="flex items-center justify-between p-2.5 rounded-none font-mono text-xs font-semibold hover:bg-[var(--paper)] hover:text-[var(--cobalt)] border border-transparent hover:border-[var(--ink)] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[var(--cobalt)] font-bold">[B2]</span>
                    <span>EXPERIENCE</span>
                  </span>
                  <span className="tabular-nums text-[var(--ink-muted)] group-hover:text-[var(--ink)]">02</span>
                </a>
                <a
                  href="#research"
                  className="flex items-center justify-between p-2.5 rounded-none font-mono text-xs font-semibold hover:bg-[var(--paper)] hover:text-[var(--cobalt)] border border-transparent hover:border-[var(--ink)] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[var(--cobalt)] font-bold">[C3]</span>
                    <span>SE RESEARCH</span>
                  </span>
                  <span className="tabular-nums text-[var(--ink-muted)] group-hover:text-[var(--ink)]">02</span>
                </a>
                <a
                  href="#architecture"
                  className="flex items-center justify-between p-2.5 rounded-none font-mono text-xs font-semibold hover:bg-[var(--paper)] hover:text-[var(--cobalt)] border border-transparent hover:border-[var(--ink)] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[var(--cobalt)] font-bold">[D4]</span>
                    <span>ARCHITECTURE</span>
                  </span>
                  <span className="text-[var(--ink-muted)]">↗</span>
                </a>
              </nav>

              {/* Status Indicator */}
              <div className="p-3 bg-[var(--paper)] border border-[var(--rule-strong)] font-mono text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="font-bold text-[var(--ink)]">AVAILABLE H2 2025</span>
                </div>
                <div className="text-[var(--ink-muted)] text-xs leading-tight">
                  Backend / Systems Engineering in Germany &amp; EU
                </div>
              </div>
            </div>

            {/* CTAs and External Verification Links */}
            <div className="pt-6 space-y-3">
              <a
                href="/cv.pdf"
                download
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[var(--vermilion)] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#b82e18] transition-colors border border-[var(--ink)]"
              >
                <Download size={14} />
                <span>Download CV.pdf ↗</span>
              </a>

              <div className="grid grid-cols-3 gap-1 pt-1 font-mono text-xs text-center">
                <a
                  href="https://github.com/sonthien22501"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[var(--rule-strong)] bg-white hover:bg-[var(--paper)] hover:text-[var(--cobalt)] transition-colors"
                  title="GitHub Profile"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sonthien225/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[var(--rule-strong)] bg-white hover:bg-[var(--paper)] hover:text-[var(--cobalt)] transition-colors"
                  title="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:sonthien225@gmail.com"
                  className="p-2 border border-[var(--rule-strong)] bg-white hover:bg-[var(--paper)] hover:text-[var(--cobalt)] transition-colors"
                  title="Email Direct"
                >
                  Email
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN COLUMN: TOP HEADER + STAGE & TELEMETRY + BOTTOM TITLE BLOCK */}
          <div className="flex flex-col min-w-0">
            
            {/* TOP DIN HEADER BLOCK */}
            <header className="border-b-2 border-[var(--ink)] p-5 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[var(--paper)]">
              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] leading-none">
                  SON THIEN NGUYEN
                </h1>
              </div>

              {/* Technical Stack Ledger - Placed beside/right of heading */}
              <div className="font-mono text-xs md:text-right space-y-1 shrink-0">
                <div className="font-bold text-[var(--ink)] tracking-wider">
                  BACKEND &amp; DISTRIBUTED SYSTEMS ENGINEER
                </div>
                <div className="text-[var(--cobalt)] font-semibold">
                  JAVA SPRING BOOT · GO · KAFKA · POSTGRESQL · K8S
                </div>
                <div className="text-[var(--ink-muted)] text-xs flex md:justify-end items-center gap-2">
                  <span>ISO 5457 // TECHNICAL DRAWING SPECIFICATION</span>
                  <span className="w-2 h-2 bg-[var(--cobalt)] inline-block" />
                </div>
              </div>
            </header>

            {/* CENTER INTERACTIVE ARCHITECTURE STAGE & RIGHT TELEMETRY PROOF */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] flex-1">
              
              {/* STAGE CONTAINER */}
              <section className="p-5 md:p-8 border-b-2 xl:border-b-0 xl:border-r-2 border-[var(--ink)] flex flex-col justify-between bg-[var(--paper)]">
                <div className="space-y-4">
                  
                  {/* Sheet Switcher Tabs */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-[var(--rule-strong)] pb-4">
                    <button
                      className={`whitespace-nowrap shrink-0 px-3 py-1.5 font-mono text-xs font-semibold border transition-all ${
                        activeSheetKey === 'ticket-booking'
                          ? 'border-[var(--ink)] bg-[var(--cobalt)] text-white shadow-xs'
                          : 'border-[var(--rule-strong)] bg-white text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
                      }`}
                      onClick={() => setActiveSheetKey('ticket-booking')}
                    >
                      [01] TICKET BOOKING (GO)
                    </button>
                    <button
                      className={`whitespace-nowrap shrink-0 px-3 py-1.5 font-mono text-xs font-semibold border transition-all ${
                        activeSheetKey === 'researcher-cockpit'
                          ? 'border-[var(--ink)] bg-[var(--cobalt)] text-white shadow-xs'
                          : 'border-[var(--rule-strong)] bg-white text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
                      }`}
                      onClick={() => setActiveSheetKey('researcher-cockpit')}
                    >
                      [02] JABREF JDK 25 PR
                    </button>
                    <button
                      className={`whitespace-nowrap shrink-0 px-3 py-1.5 font-mono text-xs font-semibold border transition-all ${
                        activeSheetKey === 'slicer4j-research'
                          ? 'border-[var(--ink)] bg-[var(--cobalt)] text-white shadow-xs'
                          : 'border-[var(--rule-strong)] bg-white text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
                      }`}
                      onClick={() => setActiveSheetKey('slicer4j-research')}
                    >
                      [03] SLICER4J APR PIPELINE
                    </button>
                  </div>

                  {/* Stage Headline (Heading leads; metadata is placed below) */}
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--ink)] tracking-tight text-balance">
                      {activeSheet.headline}
                    </h2>
                    <div className="font-mono text-xs text-[var(--cobalt)] font-semibold mt-1">
                      {activeSheet.sheetCode}
                    </div>
                  </div>

                  {/* Curving SVG Trajectory Architecture Stage */}
                  <div className="relative border-1.5 border-[var(--ink)] bg-white p-4 sm:p-6 overflow-hidden">
                    {/* Background grid watermark */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 blueprint-grid" />

                    {activeSheetKey === 'ticket-booking' && (
                      <div className="space-y-4">
                        {/* Interactive SVG Diagram */}
                        <div className="w-full overflow-x-auto">
                          <svg
                            viewBox="0 0 680 200"
                            className="w-full min-w-[560px] h-auto text-[var(--ink)]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Static Connection Guides */}
                            <path
                              d="M 120 100 C 180 100, 180 100, 240 100"
                              stroke="var(--rule-strong)"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                            />
                            <path
                              d="M 370 100 C 420 100, 420 70, 470 70"
                              stroke="var(--cobalt)"
                              strokeWidth="2"
                            />
                            <path
                              d="M 370 100 C 420 100, 420 135, 470 135"
                              stroke="var(--vermilion)"
                              strokeWidth="2"
                              strokeDasharray="3 3"
                            />

                            {/* Animated Curving Trajectories (Spike simulation) */}
                            {isSimulating ? (
                              <>
                                <path
                                  d="M 120 100 C 180 85, 200 85, 240 100"
                                  stroke="var(--vermilion)"
                                  strokeWidth="3"
                                  strokeDasharray="8 6"
                                  className="animate-pulse"
                                />
                                <path
                                  d="M 120 100 C 180 115, 200 115, 240 100"
                                  stroke="var(--vermilion)"
                                  strokeWidth="3"
                                  strokeDasharray="8 6"
                                  className="animate-pulse"
                                />
                                <path
                                  d="M 370 100 C 410 70, 430 70, 470 70"
                                  stroke="var(--cobalt)"
                                  strokeWidth="3"
                                />
                                <path
                                  d="M 370 100 C 410 135, 430 135, 470 135"
                                  stroke="var(--vermilion)"
                                  strokeWidth="3"
                                  strokeDasharray="4 4"
                                />
                              </>
                            ) : (
                              <>
                                <circle cx="180" cy="100" r="3" fill="var(--cobalt)" />
                                <circle cx="210" cy="100" r="3" fill="var(--vermilion)" />
                              </>
                            )}

                            {/* Node 1: NGINX Gateway */}
                            <g transform="translate(15, 75)">
                              <rect
                                width="115"
                                height="54"
                                fill="#FAF8F3"
                                stroke="var(--ink)"
                                strokeWidth="1.5"
                              />
                              <text x="57" y="24" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">
                                NGINX
                              </text>
                              <text x="57" y="42" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fill="var(--ink-muted)">
                                Reverse Proxy
                              </text>
                            </g>

                            {/* Node 2: Go Booking Svc */}
                            <g transform="translate(240, 68)">
                              <rect
                                width="140"
                                height="64"
                                fill="#FAF8F3"
                                stroke="var(--cobalt)"
                                strokeWidth="2"
                              />
                              <text x="70" y="27" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--cobalt)">
                                Go Booking Svc
                              </text>
                              <text x="70" y="47" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fill="var(--ink-muted)">
                                Saga Coordinator
                              </text>
                            </g>

                            {/* Node 3A: 1 Committed Seat */}
                            <g transform="translate(460, 42)">
                              <rect
                                width="210"
                                height="50"
                                fill="#ecfdf5"
                                stroke="#059669"
                                strokeWidth="1.5"
                              />
                              <text x="105" y="22" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="#047857">
                                1 COMMITTED SEAT (200 OK)
                              </text>
                              <text x="105" y="38" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fill="#065f46">
                                SELECT FOR UPDATE Lock
                              </text>
                            </g>

                            {/* Node 3B: 49 Conflict Rejection */}
                            <g transform="translate(460, 112)">
                              <rect
                                width="210"
                                height="50"
                                fill="#fef2f2"
                                stroke="var(--vermilion)"
                                strokeWidth="1.5"
                              />
                              <text x="105" y="22" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--vermilion)">
                                49 CONFLICTS (409 / TIMEOUT)
                              </text>
                              <text x="105" y="38" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fill="#991b1b">
                                Zero-Overselling Guarded
                              </text>
                            </g>
                          </svg>
                        </div>

                        {/* Interactive Trigger & Telemetry Status Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--rule)]">
                          <button
                            onClick={triggerSpikeSimulation}
                            disabled={isSimulating}
                            className="whitespace-nowrap shrink-0 px-4 py-2 bg-[var(--ink)] text-white hover:bg-[var(--cobalt)] font-mono text-xs font-bold transition-all flex items-center gap-2 border border-[var(--ink)] disabled:opacity-60"
                          >
                            <Play size={13} className={isSimulating ? 'animate-spin' : ''} />
                            <span>{isSimulating ? 'DISPATCHING 50 REQS...' : 'Simulate 50x Contention Spike'}</span>
                          </button>

                          <div className="font-mono text-xs font-bold flex items-center gap-2 bg-[var(--paper)] px-3 py-1.5 border border-[var(--rule-strong)]">
                            <span className="text-emerald-700 tabular-nums">{committedCount} COMMITTED</span>
                            <span className="text-[var(--ink-muted)]">·</span>
                            <span className="text-[var(--vermilion)] tabular-nums">{rejectedCount} CONFLICT REJECTED</span>
                            <span className="text-[var(--ink-muted)]">·</span>
                            <span className="text-[var(--cobalt)]">0 OVERSOLD</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSheetKey === 'researcher-cockpit' && (
                      <div className="space-y-4">
                        <div className="p-4 bg-[var(--paper)] border border-[var(--rule-strong)] space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-[var(--rule)] pb-2">
                            <span className="font-bold text-[var(--cobalt)]">CROSS-ORIGIN CLIENT/SERVER ARCHITECTURE</span>
                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                              PR #14963 MERGED
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3 bg-white border border-[var(--ink)]">
                              <div className="font-bold text-[var(--ink)]">[1] WebExtension</div>
                              <div className="text-[var(--ink-muted)] text-xs mt-1">
                                Content scripts on IEEE Xplore, arXiv, and Google Scholar parsing live DOM nodes.
                              </div>
                            </div>
                            <div className="p-3 bg-white border border-[var(--cobalt)]">
                              <div className="font-bold text-[var(--cobalt)]">[2] Loopback REST IPC</div>
                              <div className="text-[var(--ink-muted)] text-xs mt-1">
                                Secure cross-origin payload transmission to local desktop port with token auth.
                              </div>
                            </div>
                            <div className="p-3 bg-white border border-[var(--ink)]">
                              <div className="font-bold text-[var(--ink)]">[3] JabRef JDK 25</div>
                              <div className="text-[var(--ink-muted)] text-xs mt-1">
                                Java desktop daemon parses BibTeX entries, deduplicates, and links downloaded PDFs.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="font-mono text-xs text-[var(--ink-muted)] flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>Factual Proof: Contributed directly to JabRef upstream open-source codebase (JDK 25 WebExtension API).</span>
                        </div>
                      </div>
                    )}

                    {activeSheetKey === 'slicer4j-research' && (
                      <div className="space-y-4">
                        <div className="p-4 bg-[var(--paper)] border border-[var(--rule-strong)] space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-[var(--rule)] pb-2">
                            <span className="font-bold text-[var(--cobalt)]">DYNAMIC PROGRAM SLICING FOR APR PIPELINE</span>
                            <span className="text-[var(--cobalt)] font-bold">R&amp;D GROUP PROJECT</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3 bg-white border border-[var(--ink)]">
                              <div className="font-bold text-[var(--ink)]">[1] Slicer4J &amp; Soot</div>
                              <div className="text-[var(--ink-muted)] text-xs mt-1">
                                Dynamic bytecode instrumentation tracking variable flow during failing test executions.
                              </div>
                            </div>
                            <div className="p-3 bg-white border border-[var(--cobalt)]">
                              <div className="font-bold text-[var(--cobalt)]">[2] Backward Slicing</div>
                              <div className="text-[var(--ink-muted)] text-xs mt-1">
                                Extracts minimal fault-relevant statements, discarding non-causal production logic.
                              </div>
                            </div>
                            <div className="p-3 bg-white border border-[var(--vermilion)]">
                              <div className="font-bold text-[var(--vermilion)]">[3] LLM Context Gate</div>
                              <div className="text-[var(--ink-muted)] text-xs mt-1">
                                Feeds focused slices into LLMs for automated program repair; prunes 68.4% of raw tokens.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="font-mono text-xs text-[var(--ink-muted)] flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>Evaluated on Defects4J Java benchmark suite under rigorous empirical SE methodology.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stage Bottom Verified Stamp */}
                <div className="mt-4 pt-3 border-t border-[var(--rule)] font-mono text-xs flex flex-wrap items-center justify-between text-[var(--ink-muted)]">
                  <span>VERIFIED: 1 COMMITTED · 49 CONFLICT REJECTED · 0 OVERSOLD · PR #14963</span>
                  <span className="text-[var(--cobalt)] font-semibold">ISO 5457 SPEC 2025</span>
                </div>
              </section>

              {/* RIGHT STRESS TELEMETRY & BATCH PROOF COLUMN */}
              <aside className="p-5 md:p-8 flex flex-col justify-between bg-[var(--paper-elevated)] space-y-6">
                <div className="space-y-4">
                  {/* Proof Header in table cell container, NOT above heading */}
                  <div className="pb-3 border-b border-[var(--rule-strong)] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
                      STRESS TELEMETRY &amp; PROOF
                    </span>
                    <span className="font-mono text-xs text-[var(--cobalt)] font-semibold">[A1-METRICS]</span>
                  </div>

                  {/* Metric Card 1: Concurrency Invariant */}
                  <div className="p-4 bg-transparent border border-[var(--ink)] space-y-1">
                    <div className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider">
                      {activeSheet.primaryMetric.label}
                    </div>
                    <div className="font-mono text-4xl font-black text-[var(--cobalt)] tabular-nums">
                      {activeSheet.primaryMetric.value}
                    </div>
                    <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
                      {activeSheet.primaryMetric.desc}
                    </div>
                  </div>

                  {/* Metric Card 2: Open Source & Research */}
                  <div className="p-4 bg-transparent border border-[var(--ink)] space-y-1">
                    <div className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
                      {activeSheet.secondaryMetric.label}
                    </div>
                    <div className="font-mono text-4xl font-black text-[var(--ink)] tabular-nums">
                      {activeSheet.secondaryMetric.value}
                    </div>
                    <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
                      {activeSheet.secondaryMetric.desc}
                    </div>
                  </div>

                  {/* Metric Card 3: Batch Recipe Parameters */}
                  <div className="p-4 bg-[var(--paper)] border border-[var(--rule-strong)] font-mono text-xs space-y-1.5">
                    <div className="font-bold text-[var(--ink)] pb-1 border-b border-[var(--rule)]">
                      RECIPE // CONCURRENCY PARAMS
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--ink-muted)]">Max Conn:</span>
                      <span className="font-bold text-[var(--ink)]">100 Pool</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--ink-muted)]">Lock Strategy:</span>
                      <span className="font-bold text-[var(--cobalt)]">FOR UPDATE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--ink-muted)]">Conflict Status:</span>
                      <span className="font-bold text-[var(--vermilion)]">HTTP 409</span>
                    </div>
                  </div>
                </div>

                {/* Inspect Drawer and Route Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    className="w-full whitespace-nowrap shrink-0 py-3 px-4 bg-white hover:bg-[var(--paper)] text-[var(--ink)] font-mono text-xs font-bold border border-[var(--ink)] hover:border-[var(--cobalt)] hover:text-[var(--cobalt)] transition-colors flex items-center justify-center gap-2"
                    onClick={() => setDrawerSheet(activeSheet)}
                  >
                    <FileText size={14} />
                    <span>Inspect Spec Sheet [A1] ↗</span>
                  </button>

                  <Link
                    href={activeSheet.route}
                    className="w-full py-3 px-4 bg-[var(--ink)] hover:bg-[var(--cobalt)] text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Full Case Study Route ↗</span>
                  </Link>
                </div>
              </aside>
            </div>

            {/* BOTTOM DIN TITLE-BLOCK LEDGER (3-COLUMN SUMMARY ROW) */}
            <footer className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-[var(--ink)] bg-[var(--paper)]">
              {/* Cell 1: Netcompany */}
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-[var(--ink)] flex flex-col justify-between space-y-2">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">
                  EXPERIENCE // NETCOMPANY
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-[var(--ink)]">
                    IT Consultant — Spring Boot, Kafka, K8s
                  </div>
                  <div className="font-mono text-xs text-[var(--ink-muted)] mt-0.5">
                    Dec 2024 – Jan 2025 · Hanoi, Vietnam
                  </div>
                </div>
              </div>

              {/* Cell 2: TMA Solutions */}
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-[var(--ink)] flex flex-col justify-between space-y-2">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">
                  EXPERIENCE // TMA SOLUTIONS
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-[var(--ink)]">
                    Backend Intern — REST APIs &amp; Microservices
                  </div>
                  <div className="font-mono text-xs text-[var(--ink-muted)] mt-0.5">
                    Oct 2023 – Jan 2024 · Ho Chi Minh City, Vietnam
                  </div>
                </div>
              </div>

              {/* Cell 3: Education */}
              <div className="p-4 md:p-5 bg-[var(--ink)] text-[var(--paper)] flex flex-col justify-between space-y-2">
                <div className="font-mono text-xs font-bold text-slate-300">
                  EDUCATION // M.SC. SOFTWARE ENGINEERING
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    University of Hildesheim, Germany
                  </div>
                  <div className="font-mono text-xs text-slate-300 mt-0.5">
                    Expected 2027 · Software Product Lines &amp; Systems
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BELOW-THE-FOLD BLUEPRINT SECTIONS: [A1]..[D4]                            */}
        {/* ========================================================================= */}
        <div className="p-5 sm:p-8 md:p-12 space-y-16 md:space-y-24 bg-[var(--paper)]">

          {/* SECTION [A1]: SYSTEMS ENGINEERING SPECIFICATIONS */}
          <section id="systems" className="scroll-mt-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b-2 border-[var(--ink)] pb-3">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)]">
                Systems Engineering &amp; Distributed Architecture
              </h2>
              <span className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider mt-1 md:mt-0">
                [A1] SPECIFICATIONS · 03 ACTIVE PRODUCTION &amp; R&amp;D SYSTEMS
              </span>
            </div>

            <div className="space-y-8">
              {/* SYSTEM 01: Event Ticket Booking System */}
              <div className="border border-[var(--ink)] bg-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--rule-strong)] pb-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--ink)] text-balance">
                      Event Ticket Booking System
                    </h3>
                    <div className="font-mono text-xs text-[var(--cobalt)] font-semibold mt-1">
                      HIGH-CONCURRENCY MICROSERVICES ARCHITECTURE · GO · POSTGRESQL · NGINX
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 font-mono text-xs font-bold border border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--ink)] hover:text-white transition-colors"
                      onClick={() => setDrawerSheet(SHEETS['ticket-booking'])}
                    >
                      Inspect Spec Sheet ↗
                    </button>
                    <Link
                      href="/projects/ticket-booking"
                      className="px-3 py-1.5 font-mono text-xs font-bold bg-[var(--cobalt)] text-white hover:bg-[#0c3c66] transition-colors"
                    >
                      Full Case Study ↗
                    </Link>
                    <a
                      href="https://github.com/sonthien22501/ticket_booking_system"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 font-mono text-xs font-bold border border-[var(--rule-strong)] hover:border-[var(--ink)] text-[var(--ink)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Code2 size={13} />
                      <span>GitHub ↗</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-prose text-pretty">
                      Engineered a decoupled microservices platform specifically designed to prevent race conditions during high-volume ticket drops. Utilizes PostgreSQL row-level locking via <code className="font-mono font-bold text-[var(--ink)] bg-[var(--paper)] px-1.5 py-0.5 border border-[var(--rule-strong)]">SELECT ... FOR UPDATE</code> within a strict ACID transaction boundary, guaranteeing zero oversold seats under simultaneous multi-user contention.
                    </p>
                    <div className="hatch-zone p-4 border border-[var(--rule-strong)] font-mono text-xs space-y-1">
                      <div className="font-bold text-[var(--vermilion)]">LOAD TEST RESOLUTION: 50 SIMULTANEOUS REQUESTS</div>
                      <div className="text-[var(--ink)] max-w-prose text-pretty">
                        Under simulated load of 50 concurrent seat reservation attempts for Seat #A1: exactly 1 booking succeeded (200 OK) and 49 received conflict rejections (HTTP 409). Zero duplicate tickets generated.
                      </div>
                    </div>
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-[var(--rule-strong)] pt-4 lg:pt-0 lg:pl-6 font-mono text-xs space-y-2">
                    <div className="font-bold text-[var(--ink)] pb-1 border-b border-[var(--rule)]">
                      SPECIFICATION SHEET [A1-01]
                    </div>
                    <div><span className="text-[var(--ink-muted)]">Core Service:</span> <span className="font-bold">Go 1.22 / Gin</span></div>
                    <div><span className="text-[var(--ink-muted)]">Database:</span> <span className="font-bold">PostgreSQL 16 (Row Lock)</span></div>
                    <div><span className="text-[var(--ink-muted)]">Gateway:</span> <span className="font-bold">NGINX Reverse Proxy</span></div>
                    <div><span className="text-[var(--ink-muted)]">Orchestration:</span> <span className="font-bold">Docker Compose</span></div>
                    <div><span className="text-[var(--ink-muted)]">Methodology:</span> <span className="font-bold text-[var(--cobalt)]">Agentic AI Pair-Engineered</span></div>
                  </div>
                </div>
              </div>

              {/* SYSTEM 02: Researcher Cockpit (JabRef) */}
              <div className="border border-[var(--ink)] bg-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--rule-strong)] pb-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--ink)] text-balance">
                      Researcher Cockpit (JabRef Integration)
                    </h3>
                    <div className="font-mono text-xs text-[var(--cobalt)] font-semibold mt-1">
                      OPEN SOURCE EXTENSION · JABREF CORE · JAVA JDK 25 · WEBEXTENSIONS API
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      className="whitespace-nowrap shrink-0 px-3 py-1.5 font-mono text-xs font-bold border border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--ink)] hover:text-white transition-colors"
                      onClick={() => setDrawerSheet(SHEETS['researcher-cockpit'])}
                    >
                      Inspect Spec Sheet ↗
                    </button>
                    <Link
                      href="/projects/researcher-cockpit"
                      className="px-3 py-1.5 font-mono text-xs font-bold bg-[var(--cobalt)] text-white hover:bg-[#0c3c66] transition-colors"
                    >
                      Full Case Study ↗
                    </Link>
                    <a
                      href="https://github.com/JabRef/jabref/pull/14963"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 font-mono text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors inline-flex items-center gap-1.5"
                    >
                      <GitPullRequest size={13} />
                      <span>PR #14963 ↗</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-prose text-pretty">
                      Engineered a WebExtension client-server architecture communicating securely with a local Java backend inside the JabRef desktop reference manager. Built dynamic DOM scrapers for IEEE Xplore, arXiv, and Google Scholar to automate metadata extraction, PDF discovery, and citation graph generation. Contributed directly to the upstream JabRef project via Pull Request #14963.
                    </p>
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-[var(--rule-strong)] pt-4 lg:pt-0 lg:pl-6 font-mono text-xs space-y-2">
                    <div className="font-bold text-[var(--ink)] pb-1 border-b border-[var(--rule)]">
                      SPECIFICATION SHEET [A1-02]
                    </div>
                    <div><span className="text-[var(--ink-muted)]">Client Sandbox:</span> <span className="font-bold">JavaScript / WebExtensions</span></div>
                    <div><span className="text-[var(--ink-muted)]">Backend Daemon:</span> <span className="font-bold">Java (JDK 25 / JabRef)</span></div>
                    <div><span className="text-[var(--ink-muted)]">Scraper Targets:</span> <span className="font-bold">IEEE, arXiv, Scholar</span></div>
                    <div><span className="text-[var(--ink-muted)]">Upstream Status:</span> <span className="font-bold text-emerald-700">PR #14963</span></div>
                  </div>
                </div>
              </div>

              {/* SYSTEM 03: Advanced Web Development */}
              <div className="border border-[var(--ink)] bg-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--rule-strong)] pb-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--ink)] text-balance">
                      Advanced Web Development (AWD)
                    </h3>
                    <div className="font-mono text-xs text-[var(--cobalt)] font-semibold mt-1">
                      FULL-STACK TYPESCRIPT ARCHITECTURE · NODE.JS · DECOUPLED CLIENT-SERVER
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href="/projects/awd-project"
                      className="px-3 py-1.5 font-mono text-xs font-bold bg-[var(--cobalt)] text-white hover:bg-[#0c3c66] transition-colors"
                    >
                      Full Case Study ↗
                    </Link>
                    <a
                      href="https://github.com/Avnish-Raut/AWD_Project"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 font-mono text-xs font-bold border border-[var(--rule-strong)] hover:border-[var(--ink)] text-[var(--ink)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Code2 size={13} />
                      <span>GitHub ↗</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-prose text-pretty">
                      Co-architected a full-stack web application within a 3-member agile engineering team. Enforced strict architectural separation between the client presentation layer and backend Node.js business services using end-to-end TypeScript interfaces, preventing integration regressions during parallel agile sprints.
                    </p>
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-[var(--rule-strong)] pt-4 lg:pt-0 lg:pl-6 font-mono text-xs space-y-2">
                    <div className="font-bold text-[var(--ink)] pb-1 border-b border-[var(--rule)]">
                      SPECIFICATION SHEET [A1-03]
                    </div>
                    <div><span className="text-[var(--ink-muted)]">Architecture:</span> <span className="font-bold">Decoupled REST</span></div>
                    <div><span className="text-[var(--ink-muted)]">Language:</span> <span className="font-bold">End-to-End TypeScript</span></div>
                    <div><span className="text-[var(--ink-muted)]">Backend:</span> <span className="font-bold">Node.js / Express</span></div>
                    <div><span className="text-[var(--ink-muted)]">Team Workflow:</span> <span className="font-bold">3-Member Agile Scrum</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION [B2]: PROFESSIONAL EXPERIENCE */}
          <section id="experience" className="scroll-mt-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b-2 border-[var(--ink)] pb-3">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)]">
                Professional Engineering Ledger
              </h2>
              <span className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider mt-1 md:mt-0">
                [B2] EXPERIENCE · ENTERPRISE DISTRIBUTED SYSTEMS &amp; BACKEND
              </span>
            </div>

            <div className="border-2 border-[var(--ink)] bg-white overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {/* Role 1: Netcompany */}
                  <tr className="border-b border-[var(--ink)] flex flex-col md:table-row">
                    <td className="p-5 md:p-6 md:w-1/4 bg-[var(--paper-elevated)] border-b md:border-b-0 md:border-r border-[var(--ink)] align-top font-mono">
                      <div className="font-bold text-sm text-[var(--cobalt)]">NETCOMPANY</div>
                      <div className="text-xs text-[var(--ink-muted)] mt-1">Hanoi, Vietnam</div>
                      <div className="text-xs font-semibold text-[var(--ink)] mt-2">Dec 2024 – Jan 2025</div>
                      <div className="text-xs text-[var(--vermilion)] font-bold mt-1">IT CONSULTANT</div>
                    </td>
                    <td className="p-5 md:p-6 md:w-3/4 space-y-3 align-top">
                      <h3 className="font-display font-bold text-lg text-[var(--ink)] text-balance">
                        Enterprise Java Spring Boot, Kafka Event Streaming &amp; Cloud Deployments
                      </h3>
                      <ul className="space-y-2 text-sm text-[var(--ink-muted)] leading-relaxed list-disc list-inside">
                        <li>
                          Architected and implemented enterprise-grade solutions utilizing <strong className="text-[var(--ink)]">Java Spring Boot</strong>, integrating <strong className="text-[var(--ink)]">Apache Kafka</strong> for resilient event-driven message queuing.
                        </li>
                        <li>
                          Managed robust relational schema migrations and database state tracking using <strong className="text-[var(--ink)]">Liquibase</strong>.
                        </li>
                        <li>
                          Containerized distributed microservices with <strong className="text-[var(--ink)]">Docker</strong> and configured orchestration manifests for deployment onto <strong className="text-[var(--ink)]">Kubernetes</strong> clusters.
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs">
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Java Spring Boot</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Apache Kafka</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Liquibase</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Docker</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Kubernetes</span>
                      </div>
                    </td>
                  </tr>

                  {/* Role 2: TMA Solutions */}
                  <tr className="flex flex-col md:table-row">
                    <td className="p-5 md:p-6 md:w-1/4 bg-[var(--paper-elevated)] border-b md:border-b-0 md:border-r border-[var(--ink)] align-top font-mono">
                      <div className="font-bold text-sm text-[var(--cobalt)]">TMA SOLUTIONS</div>
                      <div className="text-xs text-[var(--ink-muted)] mt-1">Ho Chi Minh City, Vietnam</div>
                      <div className="text-xs font-semibold text-[var(--ink)] mt-2">Oct 2023 – Jan 2024</div>
                      <div className="text-xs text-[var(--ink-muted)] font-bold mt-1">SOFTWARE DEV INTERN</div>
                    </td>
                    <td className="p-5 md:p-6 md:w-3/4 space-y-3 align-top">
                      <h3 className="font-display font-bold text-lg text-[var(--ink)] text-balance">
                        Backend RESTful Services &amp; Agile Enterprise Development
                      </h3>
                      <ul className="space-y-2 text-sm text-[var(--ink-muted)] leading-relaxed list-disc list-inside">
                        <li>
                          Engineered backend services by defining and building scalable CRUD and custom RESTful APIs utilizing <strong className="text-[var(--ink)]">Java Spring Boot</strong> and <strong className="text-[var(--ink)]">PHP</strong>.
                        </li>
                        <li>
                          Collaborated in an Agile (Scrum) sprint lifecycle, participating in daily standups, code reviews, and cross-functional integration testing.
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs">
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Java Spring Boot</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">PHP</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">RESTful APIs</span>
                        <span className="px-2 py-0.5 bg-[var(--paper)] border border-[var(--rule-strong)] font-semibold">Agile Scrum</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION [C3]: EMPIRICAL SE RESEARCH & EDUCATION */}
          <section id="research" className="scroll-mt-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b-2 border-[var(--ink)] pb-3">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)] text-balance">
                Empirical Software Engineering &amp; Research
              </h2>
              <span className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider mt-1 md:mt-0">
                [C3] SE RESEARCH · STATIC &amp; DYNAMIC ANALYSIS · LLM VERIFICATION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Research 01: Slicer4J Dynamic APR */}
              <div className="border border-[var(--ink)] bg-white p-6 space-y-4">
                <div className="border-b border-[var(--rule-strong)] pb-3 flex justify-between items-baseline">
                  <h3 className="font-display font-bold text-lg text-[var(--ink)] text-balance">
                    Program Slicing in Automated Program Repair (APR)
                  </h3>
                  <span className="font-mono text-xs font-bold text-[var(--cobalt)]">R&amp;D PROJECT</span>
                </div>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-[70ch] text-pretty">
                  Orchestrated an empirical evaluation pipeline combining <strong className="text-[var(--ink)]">Slicer4J</strong>, <strong className="text-[var(--ink)]">Soot</strong>, and <strong className="text-[var(--ink)]">JUnit</strong> to extract minimal, fault-relevant execution traces from legacy Java codebases.
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-[70ch] text-pretty">
                  Designed a token-optimization methodology feeding dynamic program slices into Large Language Models (LLMs), reducing prompt context consumption by 68.4% and eliminating hallucinated edits in automated patch generation.
                </p>
                <div className="font-mono text-xs text-[var(--cobalt)] pt-2 border-t border-[var(--rule)]">
                  Stack: Java · Slicer4J · Soot IR · JUnit 5 · Defects4J
                </div>
              </div>

              {/* Research 02: LLMs in Requirements Elicitation */}
              <div className="border border-[var(--ink)] bg-white p-6 space-y-4">
                <div className="border-b border-[var(--rule-strong)] pb-3 flex justify-between items-baseline">
                  <h3 className="font-display font-bold text-lg text-[var(--ink)] text-balance">
                    LLMs in Software Requirements Elicitation
                  </h3>
                  <span className="font-mono text-xs font-bold text-[var(--cobalt)]">SEMINAR PAPER</span>
                </div>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-[70ch] text-pretty">
                  Conducted a rigorous empirical assessment analyzing the reasoning boundaries and hallucination modes of Large Language Models when applied to natural-language software requirements engineering.
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-[70ch] text-pretty">
                  Established criteria for validating machine-generated software specifications against ISO/IEC/IEEE 29148 standards, proposing deterministic prompt constraints for ambiguity reduction.
                </p>
                <div className="font-mono text-xs text-[var(--cobalt)] pt-2 border-t border-[var(--rule)]">
                  Focus: Requirements Engineering · Ambiguity Analysis · Prompt Constraints
                </div>
              </div>
            </div>

            {/* Education Ledger Block */}
            <div className="border-2 border-[var(--ink)] bg-[var(--paper-elevated)] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                  M.Sc. in Software Engineering
                </h3>
                <div className="font-mono text-sm text-[var(--cobalt)] font-semibold mt-1">
                  University of Hildesheim · Lower Saxony, Germany
                </div>
                <div className="text-sm text-[var(--ink-muted)] mt-2 max-w-2xl leading-relaxed">
                  Specialization: Distributed Systems, Advanced Web Development, Software Product Lines (SPL), and Empirical Software Engineering Research.
                </div>
              </div>

              <div className="font-mono text-xs font-bold text-right shrink-0 bg-white p-4 border border-[var(--ink)] space-y-1">
                <div className="text-[var(--ink-muted)]">STATUS // DEGREE</div>
                <div className="text-lg text-[var(--ink)]">EXPECTED 2027</div>
                <div className="text-emerald-700">ACTIVE ENROLLMENT</div>
              </div>
            </div>
          </section>

          {/* SECTION [D4]: ASYMMETRIC AI-ORCHESTRATED ARCHITECTURE */}
          <section id="architecture" className="scroll-mt-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b-2 border-[var(--ink)] pb-3">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)] text-balance">
                AI-Orchestrated Engineering Pipeline
              </h2>
              <span className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider mt-1 md:mt-0">
                [D4] METHODOLOGY · CONTRACT-DRIVEN AUTONOMOUS AGENT ORCHESTRATION
              </span>
            </div>

            <div className="border border-[var(--ink)] bg-white p-6 md:p-8 space-y-6">
              <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-prose text-pretty">
                Modern software engineering with AI requires moving beyond prompt chat into deterministic, multi-tier autonomous pipelines. As the Lead Architect, Son Thien Nguyen operates a 4-stage contract-driven methodology:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                {/* Gate 1 */}
                <div className="p-4 bg-[var(--paper)] border border-[var(--ink)] space-y-2">
                  <div className="font-bold text-[var(--cobalt)] pb-1 border-b border-[var(--rule)]">
                    [1] CONTRACT GATE
                  </div>
                  <div className="font-bold text-[var(--ink)]">Tech Lead Architecture</div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Establishes strict API contracts, data models, and failing RED unit tests before implementation.
                  </div>
                </div>

                {/* Gate 2 */}
                <div className="p-4 bg-[var(--paper)] border border-[var(--ink)] space-y-2">
                  <div className="font-bold text-[var(--cobalt)] pb-1 border-b border-[var(--rule)]">
                    [2] WORKER ROUTING
                  </div>
                  <div className="font-bold text-[var(--ink)]">Multi-Tier Subagents</div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Dispatches headless worker engines (Flash, OpenCode, DeepSeek) for TDD code generation.
                  </div>
                </div>

                {/* Gate 3 */}
                <div className="p-4 bg-[var(--paper)] border border-[var(--ink)] space-y-2">
                  <div className="font-bold text-[var(--cobalt)] pb-1 border-b border-[var(--rule)]">
                    [3] ANTI-CHEAT QA
                  </div>
                  <div className="font-bold text-[var(--ink)]">Concurrency &amp; Invariants</div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Audits diffs for weakened assertions, mocked SUTs, and executes 50x race condition stress tests.
                  </div>
                </div>

                {/* Gate 4 */}
                <div className="p-4 bg-[var(--paper)] border border-[var(--ink)] space-y-2">
                  <div className="font-bold text-[var(--vermilion)] pb-1 border-b border-[var(--rule)]">
                    [4] DOD SIGN-OFF
                  </div>
                  <div className="font-bold text-[var(--ink)]">Clean Release PR</div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Runs static typecheck, visual craft detector, unit tests, and packages surgical local commits.
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ========================================================================= */}
        {/* FOOTER TITLE BLOCK (DIN 6771 COMPLIANT)                                  */}
        {/* ========================================================================= */}
        <footer className="border-t-2 border-[var(--ink)] p-6 bg-[var(--paper-elevated)] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-[var(--ink-muted)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-[var(--ink)]">SON THIEN NGUYEN</span>
            <span>·</span>
            <span>DIN 6771 / ISO 5457 SHEET SPECIFICATION</span>
            <span>·</span>
            <span className="text-[var(--cobalt)]">HILDESHEIM, GERMANY</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#systems" className="hover:text-[var(--ink)] transition-colors">
              ↑ Back to Sheet [A1]
            </a>
            <a href="/cv.pdf" download className="text-[var(--vermilion)] font-bold hover:underline">
              Download CV.pdf ↗
            </a>
          </div>
        </footer>

      </div>

      {/* ========================================================================= */}
      {/* TRANSLUCENT SLIDE-OVER SPECIFICATION SHEET DRAWER                        */}
      {/* ========================================================================= */}
      {drawerSheet && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop with blur and keyboard dismiss */}
          <div
            onClick={() => setDrawerSheet(null)}
            className="fixed inset-0 bg-[var(--ink)]/40 backdrop-blur-xs transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Specification Sheet Panel */}
          <div
            className="relative w-full max-w-2xl h-full bg-[var(--paper-elevated)] border-l-2 border-[var(--ink)] drawer-elevation p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 transition-transform duration-300 ease-out"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="space-y-6">
              {/* Drawer DIN Header */}
              <div className="flex items-start justify-between border-b-2 border-[var(--ink)] pb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-[var(--cobalt)]">
                    {drawerSheet.sheetCode}
                  </div>
                  <h2 id="drawer-title" className="font-display text-2xl font-bold text-[var(--ink)] mt-1">
                    {drawerSheet.title}
                  </h2>
                </div>
                <button
                  className="whitespace-nowrap shrink-0 p-2 border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors font-mono text-xs flex items-center gap-1"
                  onClick={() => setDrawerSheet(null)}
                  aria-label="Close Specification Sheet"
                >
                  <X size={16} />
                  <span className="hidden sm:inline">ESC</span>
                </button>
              </div>

              {/* Architectural Summary */}
              <div className="space-y-3">
                <div className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
                  ARCHITECTURAL PROBLEM &amp; REQUIREMENT
                </div>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {drawerSheet.summary}
                </p>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider">
                  ENGINEERED SOLUTION &amp; CONCURRENCY INVARIANT
                </div>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {drawerSheet.solution}
                </p>
              </div>

              {/* Cross-Hatch Contention Zone Callout */}
              <div className="hatch-zone p-4 border border-[var(--rule-strong)] font-mono text-xs space-y-2">
                <div className="font-bold text-[var(--vermilion)]">
                  CONCURRENCY SPECIFICATION AUDIT
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[var(--ink-muted)]">Lock Strategy:</span>
                    <div className="font-bold text-[var(--ink)]">{drawerSheet.concurrencySpecs.lockModel}</div>
                  </div>
                  <div>
                    <span className="text-[var(--ink-muted)]">Isolation Level:</span>
                    <div className="font-bold text-[var(--ink)]">{drawerSheet.concurrencySpecs.isolation}</div>
                  </div>
                  <div>
                    <span className="text-[var(--ink-muted)]">Protocol:</span>
                    <div className="font-bold text-[var(--ink)]">{drawerSheet.concurrencySpecs.protocol}</div>
                  </div>
                  <div>
                    <span className="text-[var(--ink-muted)]">Observed Latency:</span>
                    <div className="font-bold text-[var(--cobalt)]">{drawerSheet.concurrencySpecs.latency}</div>
                  </div>
                </div>
              </div>

              {/* Stack Badges */}
              <div className="space-y-2">
                <div className="font-mono text-xs font-bold text-[var(--ink)]">
                  VERIFIED RUNTIME STACK
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {drawerSheet.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="pt-6 border-t-2 border-[var(--ink)] flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={drawerSheet.route}
                onClick={() => setDrawerSheet(null)}
                className="w-full sm:w-1/2 py-3 px-4 bg-[var(--cobalt)] text-white text-center font-mono text-xs font-bold hover:bg-[#0c3c66] transition-colors"
              >
                Open Full Case Study Route ↗
              </Link>
              <a
                href={drawerSheet.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 bg-white text-[var(--ink)] text-center font-mono text-xs font-bold border border-[var(--ink)] hover:bg-[var(--paper)] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{drawerSheet.githubLabel}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
