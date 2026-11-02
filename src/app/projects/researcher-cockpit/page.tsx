import React from 'react';
import Link from 'next/link';
import { ArrowLeft, GitPullRequest, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ResearcherCockpitCaseStudy() {
  return (
    <main className="blueprint-grid min-h-screen text-[var(--ink)] p-3 sm:p-6 md:p-8 lg:p-12 selection:bg-[var(--cobalt)] selection:text-[var(--paper)]">
      <div className="max-w-4xl mx-auto border-2 border-[var(--ink)] bg-[var(--paper)]/95 shadow-sm">
        
        {/* TOP TECHNICAL NAVIGATION RAIL */}
        <div className="flex items-center justify-between p-4 border-b-2 border-[var(--ink)] bg-[var(--paper-elevated)] font-mono text-xs">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>← [A1] RETURN TO BLUEPRINT INDEX</span>
          </Link>
          <span className="text-[var(--cobalt)] font-semibold hidden sm:inline">
            SPEC-DIN-02 // CROSS-ENVIRONMENT IPC BRIDGE
          </span>
        </div>

        {/* DIN TITLE BLOCK HEADER */}
        <header className="p-6 md:p-8 border-b-2 border-[var(--ink)] bg-[var(--paper)] space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--ink)] leading-tight">
                Researcher Cockpit (JabRef Integration)
              </h1>
              <div className="font-mono text-xs md:text-sm text-[var(--cobalt)] font-semibold">
                WebExtension Client Sandbox · Local Java Desktop Bridge · Upstream PR #14963
              </div>
            </div>

            <a
              href="https://github.com/JabRef/jabref/pull/14963"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800 font-mono text-xs font-bold transition-colors shrink-0 border border-emerald-900"
            >
              <GitPullRequest size={14} />
              <span>Public PR #14963 ↗</span>
            </a>
          </div>

          {/* Stack Specification Badges */}
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
            <span className="px-2.5 py-1 bg-white border border-[var(--rule-strong)] font-semibold">JavaScript (ESNext)</span>
            <span className="px-2.5 py-1 bg-white border border-[var(--rule-strong)] font-semibold">Java (JDK 25)</span>
            <span className="px-2.5 py-1 bg-white border border-[var(--rule-strong)] font-semibold">WebExtensions API</span>
            <span className="px-2.5 py-1 bg-white border border-[var(--rule-strong)] font-semibold">JabRef Core</span>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold">PR #14963 Upstream</span>
          </div>
        </header>

        {/* MAIN BODY SECTIONS */}
        <div className="p-6 md:p-10 space-y-10 bg-[var(--paper)]">
          
          {/* SECTION 1: THE PROBLEM */}
          <section className="space-y-4">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                1. The Academic Workflow Bottleneck
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 1.0]</span>
            </div>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              Academic researchers spend hours manually curating bibliographies, copying metadata fields (DOI, authors, abstracts, publication venues), and downloading PDF preprints across disparate research repositories like IEEE Xplore, arXiv, and Google Scholar.
            </p>
            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The project objective was to construct a real-time, browser-native research assistant that extracts verified metadata directly from web pages and seamlessly ingests it into local reference management software (JabRef) without context switching.
            </p>
          </section>

          {/* SECTION 2: ARCHITECTURE & IPC */}
          <section className="space-y-4">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                2. Client-Server Cross-Boundary Architecture
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 2.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              The system bridges two fundamentally different execution environments: the isolated browser extension sandbox and the local desktop JVM:
            </p>

            {/* Responsive Bounded Architecture Diagram (bounded dimensions for ui_audit) */}
            <div className="border border-[var(--ink)] bg-white p-4 md:p-6 shadow-xs flex flex-col items-center justify-center overflow-x-auto">
              <div className="w-full max-w-2xl">
                <img
                  src="/researcher-cockpit-architecture.svg"
                  alt="Researcher Cockpit Architecture Diagram"
                  width={766}
                  height={894}
                  className="w-full h-auto border border-[var(--rule)]"
                />
              </div>
              <div className="font-mono text-xs text-[var(--ink-muted)] mt-3">
                FIG 2.0 // BROWSER WEBEXTENSION EXTRACTOR &amp; LOCAL JAVA BACKEND IPC
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1">
                <div className="font-bold text-[var(--cobalt)]">CLIENT (BROWSER WEBEXTENSION)</div>
                <div className="text-[var(--ink-muted)]">
                  Injected into academic research portals, dynamically parsing publisher-specific DOM elements and formatting payload structures.
                </div>
              </div>
              <div className="p-4 bg-white border border-[var(--ink)] space-y-1">
                <div className="font-bold text-[var(--cobalt)]">LOCAL BACKEND (JABREF DESKTOP)</div>
                <div className="text-[var(--ink-muted)]">
                  An embedded Java HTTP daemon built inside JabRef listening on loopback ports for incoming JSON-RPC payloads.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: THE SOLUTION & UPSTREAM MERGE */}
          <section className="space-y-4">
            <div className="border-b border-[var(--rule-strong)] pb-2 flex justify-between items-baseline">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">
                3. The Solution &amp; Upstream Open-Source Contribution
              </h2>
              <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">[SPEC 3.0]</span>
            </div>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
              Developed specialized DOM-manipulation scrapers resilient against frequent layout shifts across academic portals. Extracted data is serialized into standard BibTeX records and dispatched via authenticated loopback calls to JabRef.
            </p>

            {/* Callout Box */}
            <div className="hatch-zone p-5 border-2 border-[var(--ink)] space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck size={18} />
                <span>UPSTREAM OPEN SOURCE CONTRIBUTION (PR #14963)</span>
              </div>
              <p className="text-[var(--ink)] leading-relaxed">
                Authored and contributed production enhancements to the official open-source JabRef repository under JDK 25. The pull request modernized the browser integration layer, resolving cross-origin security issues and streamlining reference synchronization.
              </p>
              <div className="pt-1">
                <a
                  href="https://github.com/JabRef/jabref/pull/14963"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors"
                >
                  <GitPullRequest size={13} />
                  <span>Inspect Pull Request #14963 on GitHub ↗</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM TITLE BLOCK LEDGER */}
        <footer className="p-6 border-t-2 border-[var(--ink)] bg-[var(--paper-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <Link
            href="/"
            className="font-bold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors"
          >
            ← Return to Blueprint Index [A1]
          </Link>
          <a
            href="https://github.com/JabRef/jabref/pull/14963"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--cobalt)] font-bold hover:underline"
          >
            View Upstream PR #14963 on GitHub ↗
          </a>
        </footer>

      </div>
    </main>
  );
}
