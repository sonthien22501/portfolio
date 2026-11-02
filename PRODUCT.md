# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary Audience:** Engineering Hiring Managers, Backend/Systems Tech Leads, and Technical Recruiters in Germany and the EU evaluating candidates for Software Engineer, Backend Developer, and Systems Engineer roles.
- **Secondary Audience:** Open-source maintainers and empirical Software Engineering researchers reviewing technical depth, architectural rigor, and R&D contributions.
- **Situation & Job:** Scanning the portfolio in 60–90 seconds to verify production-grade backend/systems engineering fundamentals (concurrency, microservices, event-driven architecture, Java/Go/PostgreSQL/Docker) before clicking into deep-dive architecture case studies, GitHub repositories, or downloading the CV.

## Product Purpose

Personal engineering portfolio and case-study showcase for **Son Thien Nguyen** (Software Engineer based in Hildesheim, Germany). Its purpose is to convert technical visitors into interview invitations by proving systems-level engineering competence through concrete architectural artifacts, concurrency benchmarks, open-source PR evidence, and empirical SE research.

## Positioning

A **Backend & Distributed Systems Engineer** who combines enterprise-grade backend fundamentals (Java Spring Boot, Go, Kafka, PostgreSQL row-level locking, Docker/Kubernetes) with disciplined **AI-Orchestrated Engineering & Empirical SE Research** (Lead-Worker TDD pipelines, Program Slicing for Automated Program Repair, and upstream open-source contributions to JabRef). AI orchestration is positioned as an engineering force-multiplier built on top of rock-solid systems architecture—never a substitute for it.

## Operating Context

- **Framework & Runtime:** Next.js 16.4 (App Router), React 19.3, TypeScript 5, Tailwind CSS v4 (`@tailwindcss/turbopack`), Lucide icons.
- **Evaluation Flow:** Visitors land on `/` (Hero, Experience, Featured Projects, Academic Research, Education) and drill into project case studies (`/projects/ticket-booking`, `/projects/researcher-cockpit`, `/projects/usagi-buddy`, `/projects/awd-project`), inspect architecture diagrams, and check GitHub/PR links.

## Capabilities and Constraints

- **Confirmed Routes:**
  - `/` — Main portfolio index and showcase
  - `/projects/ticket-booking` — Concurrent Go/PostgreSQL/NGINX Ticket Booking System case study
  - `/projects/researcher-cockpit` — JabRef WebExtension + Java JDK 25 client-server integration case study (PR #14963)
  - `/projects/usagi-buddy` — Multi-Window Desktop Companion (Electron, Canvas 2D 60 FPS physics, per-pixel alpha hit-testing, 14 Vitest suites)
  - `/projects/awd-project` — Full-stack TypeScript/Node.js agile architecture case study (Core Team Member · 3-Person Agile Team)
- **Technical Constraints:** Fast static/SSR rendering via Next.js App Router, zero broken links, responsive across mobile and desktop viewports.

## Brand Commitments

- **Identity:** Son Thien Nguyen — Software Engineer (Backend & Systems Engineering focus), M.Sc. Software Engineering at University of Hildesheim (Expected 2027).
- **Links & Contact:**
  - GitHub: `https://github.com/sonthien22501`
  - LinkedIn: `https://www.linkedin.com/in/sonthien225/`
  - Email: `mailto:thien.rodannguyen@gmail.com`

## Evidence on Hand

- **Industry Experience:**
  - **IT Consultant @ Netcompany (Vietnam)** (Dec 2024 – Jan 2025): Enterprise solutions with Java Spring Boot, Kafka event-driven messaging, Liquibase schema migrations, Docker, and Kubernetes.
  - **Software Developer Intern @ TMA Solutions (Vietnam)** (Oct 2023 – Jan 2024): Scalable CRUD and custom RESTful APIs with Java Spring Boot and PHP in an Agile Scrum team.
- **Systems & Open-Source Case Studies:**
  - **Event Ticket Booking System:** Go microservices (Event Catalog, Seat Inventory, Booking Service), NGINX API Gateway, PostgreSQL `SELECT ... FOR UPDATE` row-level locking validated under 50 concurrent requests for the same seat (1 booking, 49 conflicts, zero overselling). Diagram: `public/ticket-architecture.svg`.
  - **Researcher Cockpit (JabRef):** WebExtensions API client + local Java (JDK 25) desktop server, DOM scrapers for IEEE/arXiv/Google Scholar, upstream contribution [JabRef PR #14963](https://github.com/JabRef/jabref/pull/14963). Diagram: `public/researcher-cockpit-architecture.svg`.
  - **Usagi Buddy (Usagi Float v0.5):** Cross-platform desktop companion built with Electron 33, TypeScript, and HTML5 2D Canvas. 60 FPS physics engine (`physicsEngine.ts`), zero-latency per-pixel click-through hit-testing (`setIgnoreMouseEvents` forward mode via `ghostModeController.ts`), 4-window IPC synchronization (Overlay, Dashboard GUI, Sticky Quests & Calendar, Tray Popover), verified by 14 Vitest test suites. GitHub: `https://github.com/sonthien22501/usagi-buddy`.
  - **Advanced Web Development (AWD):** End-to-end TypeScript & Node.js decoupled frontend/backend architecture built in a 3-person agile team (Core Team Member alongside Avnish Raut and peers). GitHub: `https://github.com/Avnish-Raut/AWD_Project`.
- **Academic Research:**
  - **Program Slicing in Automated Program Repair (R&D Group Project):** Empirical evaluation pipeline integrating Slicer4J, Soot, and JUnit to extract minimal fault-relevant execution traces from legacy Java codebases for LLM token-context optimization.
  - **LLMs in Requirements Elicitation (Seminar Paper):** Critical assessment of LLM capabilities and limitations in software requirements elicitation and systems analysis.
- **Absences Not to Fabricate:** Do not invent unverified company metrics, fake testimonials, or commercial SaaS pricing.

## Product Principles

1. **Systems Proof Over Buzzwords:** Lead every claim with concrete engineering mechanisms (`SELECT ... FOR UPDATE`, Kafka event streams, JDK 25 local server, Slicer4J/Soot static-dynamic traces, PR `#14963`) rather than generic adjectives.
2. **Architectural Clarity at First Glance:** A hiring manager or tech lead must immediately see backend/systems rigor in how information, diagrams, and technical telemetry are structured on the page.
3. **AI as Disciplined Engineering Leverage:** Present AI orchestration (Lead-Worker TDD, architecture caching, anti-cheat verification) as rigorous software engineering methodology that amplifies systems architecture.
4. **Effortless Deep-Dive Navigation:** Transitioning from the overview index into architectural case studies, source code, and the CV must feel seamless, fast, and deliberate.
