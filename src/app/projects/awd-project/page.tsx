import React from 'react';
import Link from 'next/link';

export default function AWDProjectCaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="text-zinc-500 hover:text-zinc-900 flex items-center gap-2">
          ← Back to Portfolio
        </Link>
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Advanced Web Development (AWD)
          </h1>
          <div className="flex gap-2 text-sm text-zinc-600">
            <span className="bg-zinc-200 px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-zinc-200 px-3 py-1 rounded-full">Full-Stack</span>
          </div>
          <a href="https://github.com/Avnish-Raut/AWD_Project" target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-600 hover:underline">
            View Source Code on GitHub ↗
          </a>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">1. The Problem</h2>
          <p className="text-zinc-700 leading-relaxed">
            The objective of this project was to collaboratively design and implement a complex, full-stack web application from scratch, strictly adhering to modern web development best practices and agile team workflows.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">2. The Architecture</h2>
          <p className="text-zinc-700 leading-relaxed">
            We implemented a clean separation of concerns by completely decoupling the frontend presentation layer from the backend business logic. 
          </p>
          <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
            <li><strong>Frontend:</strong> A responsive, component-based user interface designed for a seamless user experience.</li>
            <li><strong>Backend:</strong> A robust Node.js server handling API requests, business logic, and database interactions.</li>
            <li><strong>Language:</strong> End-to-end TypeScript usage for strict type safety across the entire stack.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">3. The Solution & Teamwork</h2>
          <p className="text-zinc-700 leading-relaxed">
            Working within a 3-member agile team, we utilized Git for version control, conducting regular code reviews and adhering to a feature-branching strategy to prevent integration conflicts.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            By enforcing strict architectural boundaries and typing interfaces via TypeScript, we ensured that frontend and backend developers could work in parallel without blocking each other, resulting in a highly maintainable and scalable codebase.
          </p>
        </section>
      </div>
    </main>
  );
}
