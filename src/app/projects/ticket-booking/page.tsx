import React from 'react';
import Link from 'next/link';

export default function TicketBookingCaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="text-zinc-500 hover:text-zinc-900 flex items-center gap-2">
          ← Back to Portfolio
        </Link>
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Event Ticket Booking System
          </h1>
          <div className="flex gap-2 text-sm text-zinc-600">
            <span className="bg-zinc-200 px-3 py-1 rounded-full">Go</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">React</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">PostgreSQL</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">Docker</span>
          </div>
          <a href="https://github.com/sonthien22501/ticket_booking_system" target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-600 hover:underline">
            View Source Code on GitHub ↗
          </a>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">1. The Problem</h2>
          <p className="text-zinc-700 leading-relaxed">
            In modern ticketing systems, high traffic events often lead to race conditions where hundreds of users attempt to purchase the same seat simultaneously. Without proper concurrency controls, this results in overselling and data inconsistencies. The challenge was to build a highly scalable, concurrent backend that strictly guarantees zero oversold seats under massive traffic spikes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">2. The Architecture</h2>
          <div className="bg-white border border-zinc-200 rounded-xl p-4 my-6 shadow-sm overflow-x-auto flex justify-center">
            <img src="/ticket-architecture.svg" alt="Ticket Booking Architecture Diagram" className="min-w-max h-auto" />
          </div>
          <p className="text-zinc-700 leading-relaxed">
            I designed a microservices architecture to decouple the domains and ensure independent scalability. The system consists of:
          </p>
          <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
            <li><strong>Event Catalog Service:</strong> Manages event metadata.</li>
            <li><strong>Seat Inventory Service:</strong> Handles concurrent seat reservations.</li>
            <li><strong>Booking Service:</strong> Coordinates the overall booking transaction workflow.</li>
            <li><strong>API Gateway:</strong> An NGINX reverse proxy acting as a single entry point for the frontend.</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mt-4">
            The entire backend is containerized using Docker, allowing it to be spun up easily via <code>docker-compose</code>. The frontend is built using React and TypeScript for a type-safe, responsive user interface.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">3. The Solution</h2>
          <p className="text-zinc-700 leading-relaxed">
            To prevent race conditions during seat reservations, I implemented database-level concurrency control using PostgreSQL's <code>SELECT ... FOR UPDATE</code>. This row-level locking mechanism ensures that when one transaction is verifying a seat's availability, no other transaction can modify that row until the lock is released.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Rigorous load testing was conducted to simulate 50 concurrent requests for the exact same seat. The system successfully resolved exactly 1 booking and 49 conflicts, strictly enforcing the zero-overselling guarantee without degrading overall performance.
          </p>
        </section>
      </div>
    </main>
  );
}
