import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code2, Users, CheckCircle2, ShieldCheck, GitBranch } from 'lucide-react';

export default function AWDProjectCaseStudy() {
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
            PROJECT 4 // DECOUPLED FULL-STACK ARCHITECTURE
          </span>
        </div>

        {/* HEADER */}
        <header className="p-6 md:p-8 border-b-2 border-[var(--ink)] bg-[var(--paper)] space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--vermilion)] tracking-wider">
                  FULL-STACK ENGINEERING // AGILE SCRUM
                </span>
                <span className="px-2 py-0.5 bg-[var(--cobalt)] text-white text-xs font-sans font-bold">
                  Core Team Member · 3-Person Team
                </span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--ink)] leading-tight">
                Advanced Web Development (AWD)
              </h1>
              <div className="font-sans text-sm md:text-base text-[var(--cobalt)] font-semibold">
                Decoupled Full-Stack Architecture · TypeScript · Node.js · 3-Person Agile Team
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="https://github.com/Avnish-Raut/AWD_Project"
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
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">TypeScript</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">Node.js</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">Express</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">React</span>
            <span className="px-3 py-1 bg-white border border-[var(--rule-strong)] text-[var(--ink)]">RESTful APIs</span>
            <span className="px-3 py-1 bg-[var(--paper-elevated)] border border-[var(--cobalt)] text-[var(--cobalt)] font-semibold">
              3-Person Agile Team
            </span>
          </div>
        </header>

        {/* TELEMETRY METRIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b-2 border-[var(--ink)] bg-[var(--paper-elevated)] font-sans">
          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-[var(--ink)] space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--cobalt)] tracking-wider">
              ENGINEERING ROLE
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-black text-[var(--cobalt)]">
              CORE MEMBER
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Co-architected backend services, API interfaces, and data models in a 3-person agile team.
            </div>
          </div>

          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-[var(--ink)] space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
              CONTRACT DRIFT
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-black text-[var(--ink)]">
              ZERO DRIFT
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              End-to-end TypeScript interfaces synchronizing frontend DTOs and backend validators.
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-1">
            <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider">
              AGILE METHODOLOGY
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-black text-emerald-700">
              SCRUM SPRINTS
            </div>
            <div className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Bi-weekly sprint planning, branch reviews, and continuous peer code audits.
            </div>
          </div>
        </div>

        {/* MAIN BODY SECTIONS */}
        <div className="p-6 md:p-10 space-y-12 bg-[var(--paper)]">
          
          {/* SECTION 1: THE PROBLEM */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                1. Project Objectives &amp; 3-Person Team Collaboration
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 1.0]</span>
            </div>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The objective was to collaboratively engineer a scalable, full-stack web application from the ground up within a 3-member agile team at the University of Hildesheim. As a core team member alongside Avnish Raut and peer colleagues, Son Thien Nguyen co-architected the system design, implemented backend REST services, and defined end-to-end type contracts.
            </p>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The project demanded strict adherence to modern software design patterns, end-to-end type safety, and disciplined version-control hygiene to prevent merge conflicts during concurrent feature development.
            </p>
          </section>

          {/* SECTION 2: ARCHITECTURE */}
          <section className="space-y-6 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                2. Decoupled Client-Server Architecture
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 2.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              To eliminate cross-layer bottlenecks, we enforced a strict separation of concerns between the presentation tier and backend logic:
            </p>

            {/* Architecture Diagram */}
            <div className="border border-[var(--ink)] bg-white p-4 md:p-6 shadow-xs flex flex-col items-center justify-center overflow-x-auto">
              <div className="w-full max-w-2xl">
                <svg
                  viewBox="0 0 700 240"
                  className="w-full h-auto text-[var(--ink)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="700" height="240" fill="#FAF8F3" stroke="var(--rule-strong)" strokeWidth="1" />
                  
                  {/* Connection Lines */}
                  <line x1="180" y1="120" x2="260" y2="120" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="440" y1="120" x2="520" y2="120" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Block 1: Client Layer */}
                  <g transform="translate(30, 70)">
                    <rect width="150" height="100" fill="white" stroke="var(--ink)" strokeWidth="1.5" />
                    <text x="75" y="35" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">CLIENT TIER</text>
                    <text x="75" y="55" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">React &amp; TypeScript</text>
                    <text x="75" y="75" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">Component UI</text>
                  </g>

                  {/* Block 2: Backend REST Services */}
                  <g transform="translate(260, 60)">
                    <rect width="180" height="120" fill="white" stroke="var(--cobalt)" strokeWidth="2" />
                    <text x="90" y="35" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--cobalt)">REST API BACKEND</text>
                    <text x="90" y="55" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">Node.js &amp; Express</text>
                    <text x="90" y="75" textAnchor="middle" fontSize="9" fontFamily="var(--font-public-sans)" fill="var(--ink)">Strict Schema Validation</text>
                    <text x="90" y="95" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--vermilion)">Auth &amp; Business Logic</text>
                  </g>

                  {/* Block 3: Persistence Layer */}
                  <g transform="translate(520, 70)">
                    <rect width="150" height="100" fill="white" stroke="var(--ink)" strokeWidth="1.5" />
                    <text x="75" y="35" textAnchor="middle" fontSize="12" fontFamily="var(--font-fira-code)" fontWeight="bold" fill="var(--ink)">DATA LAYER</text>
                    <text x="75" y="55" textAnchor="middle" fontSize="10" fontFamily="var(--font-public-sans)" fill="var(--ink-muted)">Relational Storage</text>
                    <text x="75" y="75" textAnchor="middle" fontSize="9" fontFamily="var(--font-fira-code)" fill="var(--cobalt)">ACID Integrity</text>
                  </g>
                </svg>
              </div>
              <div className="font-mono text-xs text-[var(--ink-muted)] mt-3">
                FIG 4.0 // END-TO-END TYPESCRIPT FULL-STACK SYSTEM DECOUPLING
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1.5">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">END-TO-END TYPESAFE CONTRACTS</div>
                <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  Shared TypeScript interface definitions guaranteed synchronized serialization formats across frontend and backend layers, eliminating API schema mismatches during feature merges.
                </div>
              </div>
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1.5">
                <div className="font-mono text-xs font-bold text-[var(--cobalt)]">PARALLEL SPRINT DELIVERY</div>
                <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                  Clear boundary contracts enabled frontend and backend developers to iterate independently against mock schemas without blocking agile sprint velocity.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: SOLUTION & TEAMWORK */}
          <section className="space-y-4 font-sans">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                3. Team Workflow &amp; Agile Engineering
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 3.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              Operating within a 3-member agile team, we maintained a strict Git branching strategy, conducting peer code reviews on every pull request to ensure high code maintainability and test coverage.
            </p>

            <div className="hatch-zone p-5 border-2 border-[var(--ink)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--cobalt)] font-bold text-sm">
                <Users size={18} />
                <span>AGILE COLLABORATION &amp; PEER REVIEW DISCIPLINE</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                Integrated continuous peer review cycles, automated linting gates, and feature-branch isolation across GitHub, achieving zero regressions across multi-week sprint milestones in the team repository (<a href="https://github.com/Avnish-Raut/AWD_Project" target="_blank" rel="noreferrer" className="text-[var(--cobalt)] font-semibold underline">Avnish-Raut/AWD_Project</a>).
              </p>
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
            href="https://github.com/Avnish-Raut/AWD_Project"
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
