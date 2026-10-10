import React from 'react';
import Link from 'next/link';

export default function ResearcherCockpitCaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="text-zinc-500 hover:text-zinc-900 flex items-center gap-2">
          ← Back to Portfolio
        </Link>
        
        <header className="space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
              Researcher Cockpit (JabRef Integration)
            </h1>
          </div>
          <div className="flex gap-2 text-sm text-zinc-600 mb-4">
            <span className="bg-zinc-200 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">Java (JDK 25)</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">WebExtensions API</span>
          </div>
          <div className="space-x-4">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">Private R&D Project</span>
            <a href="https://github.com/JabRef/jabref/pull/14963" target="_blank" rel="noreferrer" className="inline-block text-blue-600 hover:underline">
              View Public Pull Request #14963 ↗
            </a>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">1. The Problem</h2>
          <p className="text-zinc-700 leading-relaxed">
            Academic researchers spend a significant portion of their time manually curating metadata, downloading PDFs, and organizing literature across disparate databases like IEEE Xplore, arXiv, and Google Scholar. The goal of this R&D project was to bridge the gap between web-based discovery and local reference management software (JabRef) to streamline this workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">2. The Architecture</h2>
          <div className="bg-white border border-zinc-200 rounded-xl p-4 my-6 shadow-sm overflow-x-auto flex justify-center">
            <img src="/researcher-cockpit-architecture.svg" alt="Researcher Cockpit Architecture Diagram" className="min-w-max h-auto" />
          </div>
          <p className="text-zinc-700 leading-relaxed">
            This project employed a Client-Server architecture bridging two entirely different environments:
          </p>
          <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
            <li><strong>Client (Browser Extension):</strong> Built using JavaScript and the WebExtensions API, injected into academic sites.</li>
            <li><strong>Server (Local Desktop App):</strong> A Java backend embedded within JabRef listening for incoming metadata payloads.</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mt-4">
            This required establishing robust cross-origin communication between the browser sandbox and the local Java application, ensuring secure and reliable data transmission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">3. The Solution</h2>
          <p className="text-zinc-700 leading-relaxed">
            I developed sophisticated DOM-manipulation scrapers tailored to the unique DOM structures of various academic publishers. These scrapers dynamically extract metadata (Title, Authors, DOI, Abstract) in real-time as the researcher browses. 
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Once extracted, the extension formats the data and securely transmits it to the local JabRef instance via a RESTful API. I successfully integrated a portion of this work into the main JabRef open-source repository (PR #14963), demonstrating my ability to navigate and contribute to large, established codebases used by thousands of researchers globally.
          </p>
        </section>
      </div>
    </main>
  );
}
