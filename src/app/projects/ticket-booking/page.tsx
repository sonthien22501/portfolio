import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TicketBookingCaseStudy() {
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
            <span>← <span className="font-mono font-bold">[A1]</span> Return to Blueprint Index</span>
          </Link>
          <span className="font-mono text-xs text-[var(--cobalt)] font-semibold hidden sm:inline">
            SPEC-DIN-01 // ACID TRANSACTION BOUNDARY
          </span>
        </div>

        {/* DIN TITLE BLOCK HEADER */}
        <header className="p-6 md:p-8 border-b-2 border-[var(--ink)] bg-[var(--paper)] space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-[var(--vermilion)] tracking-wider">
                DISTRIBUTED CONCURRENCY // MICROSERVICES
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--ink)] leading-tight">
                Event Ticket Booking System
              </h1>
              <div className="font-sans text-sm md:text-base text-[var(--cobalt)] font-semibold">
                High-Concurrency Microservices · Go · PostgreSQL Row Locks · NGINX Gateway
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="https://github.com/sonthien22501/ticket_booking_system"
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
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">Go 1.22 (Gin)</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">PostgreSQL 16</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">NGINX Reverse Proxy</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">Docker Compose</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">React + TypeScript</span>
            <span className="px-3 py-1 bg-[var(--cobalt)] text-white border border-[var(--cobalt)] font-semibold">AI-Orchestrated</span>
          </div>
        </header>

        {/* TELEMETRY METRIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b-2 border-[var(--ink)] bg-[var(--paper-elevated)] font-sans">
          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-[var(--ink)] space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider">
              CONCURRENCY INVARIANT
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-[var(--cobalt)] tabular-nums">
              1 / 50
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Exactly 1 ticket committed under 50 simultaneous competing requests for Seat #A1.
            </div>
          </div>

          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-[var(--ink)] space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
              CONFLICT REJECTIONS
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-[var(--ink)] tabular-nums">
              49 (409)
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Deterministic HTTP 409 Conflict status returned. Zero race-condition oversells.
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-1">
            <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider">
              ACID GUARANTEE
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-700 tabular-nums">
              0 OVERSOLD
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              PostgreSQL SELECT ... FOR UPDATE row-level lock resolution invariant.
            </div>
          </div>
        </div>

        {/* MAIN BODY SECTIONS */}
        <div className="p-6 md:p-10 space-y-12 bg-[var(--paper)]">
          
          {/* SECTION 1: THE PROBLEM */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                1. Architectural Problem &amp; Concurrency Challenge
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 1.0]</span>
            </div>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              In high-traffic ticketing scenarios (such as major stadium concerts or flash sales), hundreds or thousands of simultaneous incoming HTTP requests target the exact same high-demand seat within milliseconds. Without strict concurrency controls at the storage engine level, standard database transactions experience race conditions: multiple requests read the seat as available before any one commits, causing catastrophic overselling and inconsistent inventory records.
            </p>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The architectural requirement was to design a decoupled, resilient microservices system capable of absorbing concurrent traffic spikes while mathematically guaranteeing that <strong className="text-[var(--ink)]">zero seats are oversold</strong>.
            </p>
          </section>

          {/* SECTION 2: ARCHITECTURE & MICROSERVICES */}
          <section className="space-y-6 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                2. Decoupled Microservices Architecture
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 2.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The platform employs an event-driven and domain-driven design, splitting concerns across dedicated microservices behind a unified API gateway:
            </p>

            {/* Architecture Diagram */}
            <div className="border border-[var(--ink)] bg-white p-4 md:p-6 shadow-xs flex flex-col items-center justify-center overflow-x-auto">
              <div className="w-full max-w-2xl">
                <img
                  src="/ticket-architecture.svg"
                  alt="Ticket Booking Microservices Architecture Diagram"
                  width={766}
                  height={894}
                  className="w-full h-auto border border-[var(--rule)]"
                />
              </div>
              <div className="font-mono text-xs text-[var(--ink-muted)] mt-3">
                FIG 1.0 // MICROSERVICES TOPOLOGY &amp; POSTGRESQL ROW LOCK ISOLATION
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1.5">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">NGINX API GATEWAY</div>
                <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  Acts as the unified reverse proxy, terminating external client HTTP traffic, routing route prefixes, and shielding internal Go services.
                </div>
              </div>
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1.5">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">SEAT INVENTORY SERVICE</div>
                <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  Maintains exclusive authority over seat reservations, applying row-level lock primitives directly onto the PostgreSQL storage layer.
                </div>
              </div>
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1.5">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">BOOKING SERVICE (SAGA)</div>
                <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  Coordinates transactional workflows across multiple services, rolling back reservations if payment or validation steps fail.
                </div>
              </div>
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1.5">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">EVENT CATALOG SERVICE</div>
                <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  Manages event metadata, venue layouts, and pricing tiers independently without impacting transactional throughput.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: THE SOLUTION & LOAD TEST PROOF */}
          <section className="space-y-6 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                3. Concurrency Control Solution &amp; Empirical Load Proof
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 3.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              To resolve race conditions with zero room for ambiguity, the Seat Inventory Service executes an explicit row lock via PostgreSQL:
            </p>

            <div className="p-4 bg-[var(--ink)] text-[var(--paper)] font-mono text-xs sm:text-sm overflow-x-auto border border-[var(--ink)]">
              <code>
                {`BEGIN;
SELECT id, seat_number, status 
FROM seats 
WHERE id = $1 AND status = 'AVAILABLE' 
FOR UPDATE;

-- If seat is available:
UPDATE seats SET status = 'RESERVED', reserved_by = $2 WHERE id = $1;
COMMIT;`}
              </code>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The <code className="font-mono font-bold text-[var(--ink)] bg-[var(--paper)] px-1.5 py-0.5 border border-[var(--rule-strong)]">FOR UPDATE</code> clause locks the specific row against competing reads and writes until the transaction completes. Subsequent transactions attempting to lock the same row either wait for lock release or fail with conflict status.
            </p>

            {/* Cross-Hatch Contention Proof Banner */}
            <div className="hatch-zone p-5 border-2 border-[var(--ink)] space-y-3">
              <div className="flex items-center gap-2 text-[var(--vermilion)] font-bold text-sm font-sans">
                <ShieldCheck size={18} />
                <span>LOAD TEST VERIFICATION: 50 SIMULTANEOUS CONFLICT REQUESTS</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                Executed automated load testing sending 50 concurrent HTTP POST reservation requests targeting Seat #A1 simultaneously within a single 5ms window.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white border border-[var(--rule-strong)]">
                  <div className="text-[var(--ink-muted)] text-xs font-mono">COMMITTED</div>
                  <div className="font-mono text-2xl font-bold text-emerald-700">1 (200 OK)</div>
                </div>
                <div className="p-3 bg-white border border-[var(--rule-strong)]">
                  <div className="text-[var(--ink-muted)] text-xs font-mono">CONFLICT REJECTIONS</div>
                  <div className="font-mono text-2xl font-bold text-[var(--vermilion)]">49 (HTTP 409)</div>
                </div>
                <div className="p-3 bg-white border border-[var(--rule-strong)]">
                  <div className="text-[var(--ink-muted)] text-xs font-mono">OVERSOLD SEATS</div>
                  <div className="font-mono text-2xl font-bold text-[var(--cobalt)]">0 (ACID INVARIANT)</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: AI-ORCHESTRATED METHODOLOGY */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                4. Development Methodology: AI-Orchestrated Architecture
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 4.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              This system was built utilizing an advanced AI-orchestrated engineering methodology. Acting as the Lead Architect, Son Thien Nguyen defined the domain models, boundary contracts, and concurrency test suites before delegating code generation to specialized autonomous subagents:
            </p>

            <ul className="space-y-2.5 text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[var(--cobalt)] shrink-0 mt-1" />
                <span><strong className="text-[var(--ink)]">Architectural Contract Definition:</strong> Authored formal specification contracts governing API endpoints, SQL transaction boundaries, and Docker networking before writing code.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[var(--cobalt)] shrink-0 mt-1" />
                <span><strong className="text-[var(--ink)]">Multi-Tier Subagent Delegation:</strong> Dispatched independent worker subagents to scaffold specific microservices in Go, strictly verifying generated code against PostgreSQL best practices.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[var(--cobalt)] shrink-0 mt-1" />
                <span><strong className="text-[var(--ink)]">Adversarial Testing &amp; Verification:</strong> Executed concurrency stress tests and verified zero lock deadlocks across high-load execution loops.</span>
              </li>
            </ul>
          </section>

        </div>

        {/* BOTTOM TITLE BLOCK LEDGER */}
        <footer className="p-6 border-t-2 border-[var(--ink)] bg-[var(--paper-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm">
          <Link
            href="/"
            className="font-semibold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={16} />
            <span>Return to Blueprint Index [A1]</span>
          </Link>
          <a
            href="https://github.com/sonthien22501/ticket_booking_system"
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
