import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">
            Hi, I'm Son Thien Nguyen
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            A Master's student in Software Engineering based in Germany. 
            I specialize in full-stack development, modern microservices architecture, and open-source contributions.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/sonthien22501" target="_blank" rel="noreferrer" className="bg-zinc-900 text-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors">
              GitHub Profile
            </a>
            <a href="#projects" className="bg-zinc-200 text-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-300 transition-colors">
              View My Work
            </a>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-semibold text-zinc-900">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ticket Booking System */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-zinc-900">Event Ticket Booking System</h3>
                <a href="https://github.com/sonthien22501/ticket_booking_system" target="_blank" rel="noreferrer" className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full hover:bg-blue-200">GitHub Repo</a>
              </div>
              <p className="text-zinc-600 mb-4">
                A highly concurrent microservices architecture built with Go, PostgreSQL row-level locks, and an NGINX API Gateway to guarantee zero overselling during massive traffic spikes.
              </p>
              <div className="flex gap-2 text-sm text-zinc-500 mb-6">
                <span className="bg-zinc-100 px-3 py-1 rounded-full">Go</span>
                <span className="bg-zinc-100 px-3 py-1 rounded-full">React</span>
                <span className="bg-zinc-100 px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
              <Link href="/projects/ticket-booking" className="text-zinc-900 font-medium hover:underline inline-flex items-center gap-1">Read Case Study <span aria-hidden="true">→</span></Link>
            </div>

            {/* JabRef Researcher Cockpit */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-zinc-900">Researcher Cockpit (JabRef)</h3>
                <a href="https://github.com/JabRef/jabref/pull/14963" target="_blank" rel="noreferrer" className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full hover:bg-green-200">Open Source PR #14963</a>
              </div>
              <p className="text-zinc-600 mb-4">
                A WebExtension client-server architecture communicating with a local Java backend. Features custom DOM-manipulation web scrapers for IEEE, Arxiv, and Google Scholar to automate literature discovery.
              </p>
              <div className="flex gap-2 text-sm text-zinc-500 mb-6">
                <span className="bg-zinc-100 px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-zinc-100 px-3 py-1 rounded-full">Java (JDK 25)</span>
              </div>
              <Link href="/projects/researcher-cockpit" className="text-zinc-900 font-medium hover:underline inline-flex items-center gap-1">Read Case Study <span aria-hidden="true">→</span></Link>
            </div>

            {/* Advanced Web Development */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-zinc-900">Advanced Web Development</h3>
                <a href="https://github.com/Avnish-Raut/AWD_Project" target="_blank" rel="noreferrer" className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full hover:bg-blue-200">GitHub Repo</a>
              </div>
              <p className="text-zinc-600 mb-4">
                A full-stack web application co-developed in a 3-member agile team, utilizing strict architectural separation between the client interface and backend services.
              </p>
              <div className="flex gap-2 text-sm text-zinc-500 mb-6">
                <span className="bg-zinc-100 px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-zinc-100 px-3 py-1 rounded-full">Node.js</span>
              </div>
              <Link href="/projects/awd-project" className="text-zinc-900 font-medium hover:underline inline-flex items-center gap-1">Read Case Study <span aria-hidden="true">→</span></Link>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
