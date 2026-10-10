import React from 'react';
import Link from 'next/link';
import { Code2, Mail, MapPin, Download, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* Header / Hero Section */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
              Son Thien Nguyen
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-medium">
              Software Engineer
            </p>
            <div className="flex items-center gap-2 text-zinc-500 pt-2 text-sm font-medium">
              <MapPin size={16} />
              <span>Hildesheim, Germany</span>
            </div>
          </div>

          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
            Proactive Master's student in Software Engineering with hands-on experience in full-stack development, modern microservices infrastructure, and open-source contributions. 
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="https://github.com/sonthien22501" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium">
              <Code2 size={18} />
              GitHub
            </a>
            <a href="mailto:sonthien225@gmail.com" className="flex items-center gap-2 bg-white border border-zinc-200 text-zinc-900 px-5 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <Mail size={18} />
              Contact
            </a>
            {/* You can upload your PDF to the public folder to enable this download link */}
            <a href="#" className="flex items-center gap-2 bg-white border border-zinc-200 text-zinc-900 px-5 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <Download size={18} />
              Resume
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
            Experience
          </h2>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-zinc-200">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fafafa]"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg font-bold text-zinc-900">IT Consultant</h3>
                <span className="text-sm text-zinc-500 font-medium">Dec 2024 – Jan 2025</span>
              </div>
              <p className="text-zinc-700 font-medium mb-3">Netcompany • Vietnam</p>
              <ul className="list-disc list-outside ml-4 text-zinc-600 space-y-2 text-sm leading-relaxed">
                <li>Architected and implemented enterprise-grade robust solutions utilizing Java Spring Boot, Kafka for event-driven messaging, and Liquibase for database schema migrations.</li>
                <li>Gained practical experience deploying containerized applications utilizing Docker and orchestrating them via Kubernetes.</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-zinc-200">
              <div className="absolute w-3 h-3 bg-zinc-300 rounded-full -left-[7px] top-1.5 ring-4 ring-[#fafafa]"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg font-bold text-zinc-900">Software Developer Intern</h3>
                <span className="text-sm text-zinc-500 font-medium">Oct 2023 – Jan 2024</span>
              </div>
              <p className="text-zinc-700 font-medium mb-3">TMA Solutions • Vietnam</p>
              <ul className="list-disc list-outside ml-4 text-zinc-600 space-y-2 text-sm leading-relaxed">
                <li>Engineered backend services by defining and building scalable CRUD and custom RESTful APIs utilizing Java Spring Boot and PHP.</li>
                <li>Collaborated within an Agile (Scrum) team to design and implement software solutions for enterprise clients.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Featured Projects</h2>
          
          <div className="grid grid-cols-1 gap-6">
            
            {/* Ticket Booking System */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-900">Event Ticket Booking System</h3>
                <a href="https://github.com/sonthien22501/ticket_booking_system" target="_blank" rel="noreferrer" className="hidden md:inline-block text-xs font-semibold text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">GitHub ↗</a>
              </div>
              <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                A highly concurrent microservices architecture built with Go, PostgreSQL row-level locks, and an NGINX API Gateway to guarantee zero overselling during massive traffic spikes.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-500 font-medium mb-6">
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">Go</span>
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">React</span>
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">PostgreSQL</span>
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">Docker</span>
              </div>
              <Link href="/projects/ticket-booking" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                Read Case Study <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Researcher Cockpit */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-900">Researcher Cockpit (JabRef)</h3>
                <a href="https://github.com/JabRef/jabref/pull/14963" target="_blank" rel="noreferrer" className="hidden md:inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors">Open Source PR #14963 ↗</a>
              </div>
              <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                A WebExtension client-server architecture communicating with a local Java backend. Features custom DOM-manipulation web scrapers for IEEE, Arxiv, and Google Scholar to automate literature discovery.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-500 font-medium mb-6">
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">JavaScript</span>
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">Java (JDK 25)</span>
              </div>
              <Link href="/projects/researcher-cockpit" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                Read Case Study <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Advanced Web Development */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-900">Advanced Web Development</h3>
                <a href="https://github.com/Avnish-Raut/AWD_Project" target="_blank" rel="noreferrer" className="hidden md:inline-block text-xs font-semibold text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">GitHub ↗</a>
              </div>
              <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                A full-stack web application co-developed in a 3-member agile team, utilizing strict architectural separation between the client interface and backend services.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-500 font-medium mb-6">
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">TypeScript</span>
                <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">Node.js</span>
              </div>
              <Link href="/projects/awd-project" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                Read Case Study <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Education</h2>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-lg font-bold text-zinc-900">M.Sc. Software Engineering</h3>
              <span className="text-sm text-zinc-500 font-medium">Expected 2027</span>
            </div>
            <p className="text-zinc-700 font-medium mb-3">University of Hildesheim • Germany</p>
            <p className="text-sm text-zinc-600 leading-relaxed">Focus Areas: Advanced Web Development, Software Product Lines, and Open-Source Contributions.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
