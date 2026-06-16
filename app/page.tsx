"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import ContactSection from "@/components/ContactSection";
import { motion, type Variants } from "framer-motion";
import Footer from "@/components/Footer";
import JobTrackerScreenshots from "@/components/JobTrackerScreenshots";

type ActiveSection = "projects" | "about" | "contact" | "";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [active, setActive] = useState<ActiveSection>("projects");

  useEffect(() => {
    const sections: ActiveSection[] = ["projects", "about", "contact"];

    const onScroll = () => {
      let current: ActiveSection = "projects";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <TopBar active={active} />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_12%,rgba(0,255,180,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_85%_20%,rgba(0,180,255,0.14),transparent_60%)]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light [background-image:url('/images/noise.png')]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.78)_100%)]" />
      </div>

      {/* ─── HERO ─── */}
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-16">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for remote &amp; hybrid opportunities
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight">
              Marcos Tavarez
            </h1>

            <p className="mt-3 text-white/60 text-2xl">Full-Stack Developer</p>
            <p className="mt-1.5 text-emerald-400/80 text-base font-medium tracking-wide">
              Building Production-Ready Web Applications
            </p>

            <p className="mt-5 max-w-xl text-white/65 leading-relaxed text-[15px]">
              I build full-stack applications with Next.js, TypeScript, React, and
              Node.js — backed by PostgreSQL, REST APIs, and authentication. Clean
              architecture, maintainable code, and UIs that are fast to use and
              ready to ship.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
              >
                Contact
              </a>
              <a
                href="/resume/Marcos_Tavarez_FullStack_Developer_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
              >
                Resume ↗
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 text-xs text-white/60">
              {["Next.js", "TypeScript", "React", "Node.js", "Prisma", "PostgreSQL", "MongoDB", "REST APIs", "Authentication", "Vercel"].map(
                (tech) => (
                  <span key={tech} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT: PHOTO */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] md:max-w-[440px] z-20"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-white/10"
              style={{
                WebkitMaskImage: "radial-gradient(70% 70% at 55% 45%, black 55%, transparent 100%)",
                maskImage: "radial-gradient(70% 70% at 55% 45%, black 55%, transparent 100%)",
              }}
            />
            <div className="relative">
              <Image
                src="/images/headshot.png"
                alt="Marcos Tavarez"
                width={1600}
                height={2400}
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 400px"
                className="h-auto w-full object-contain drop-shadow-[0_55px_90px_rgba(0,0,0,0.70)]"
              />
            </div>
          </motion.div>
        </div>

        {/* PROOF STRIP */}
        <div className="mt-12">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-5 backdrop-blur-md">
              <div className="text-2xl font-semibold text-white">3</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/50">Full-Stack Apps</div>
              <p className="mt-2 text-xs text-white/55 leading-relaxed">Auth, databases, CRUD workflows, and deployed UIs.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-2xl font-semibold text-white">15+</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/50">API Endpoints</div>
              <p className="mt-2 text-xs text-white/55 leading-relaxed">REST APIs with validation and consistent contracts.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Core Stack</div>
              <div className="mt-2 text-sm font-semibold text-white">Next.js · Prisma · PostgreSQL</div>
              <p className="mt-2 text-xs text-white/55 leading-relaxed">Clean architecture and typed data modeling.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Production-Ready</div>
              <div className="mt-2 text-sm font-semibold text-white">Auth · CRUD · Deployed</div>
              <p className="mt-2 text-xs text-white/55 leading-relaxed">Session auth, database persistence, live on Vercel.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── TECHNICAL HIGHLIGHTS ─── */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Tech Stack
          </div>
          <h2 className="mt-3 text-2xl font-semibold">Technical Highlights</h2>
          <p className="mt-1.5 text-white/60 text-sm">
            Technologies I&apos;ve used across production-style full-stack applications.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-2.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {[
            { name: "Next.js",        desc: "App Router, server components, API routes" },
            { name: "React",          desc: "Component architecture, hooks, state" },
            { name: "TypeScript",     desc: "Type-safe code across the full stack" },
            { name: "Node.js",        desc: "Server-side runtime for APIs and services" },
            { name: "Express",        desc: "REST routing, middleware, controllers" },
            { name: "Prisma",         desc: "Type-safe ORM with schema-driven modeling" },
            { name: "PostgreSQL",     desc: "Relational DB, queries, and migrations" },
            { name: "MongoDB",        desc: "Document-based data modeling" },
            { name: "REST APIs",      desc: "CRUD endpoints with validation + error handling" },
            { name: "Authentication", desc: "NextAuth sessions, protected routes" },
            { name: "Vercel",         desc: "Deployment, env config, edge CDN" },
            { name: "Git / GitHub",   desc: "Version control, branching, pull requests" },
          ].map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur hover:bg-white/8 transition"
            >
              <div className="text-sm font-medium text-white">{tech.name}</div>
              <div className="mt-0.5 text-[11px] text-white/45 leading-relaxed">{tech.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── PROJECTS ─── */}
      <section
        id="projects"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-1.5 text-white/60 text-sm">
            Full-stack applications with authentication, databases, REST APIs, and live deployments.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* ── JOB TRACKER ── */}
          <motion.div variants={fadeUp}>
            <div
              id="job-tracker"
              className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-7 backdrop-blur transition hover:bg-white/[0.06] hover:-translate-y-[2px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.10),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.08),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/12" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">Job Tracker SaaS</h3>
                    <p className="mt-1.5 text-white/60 text-sm max-w-[60ch]">
                      Multi-user SaaS platform for managing job applications from applied to offer — with authentication, protected routes, full CRUD, and a responsive modern UI.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-400/90">
                    Live
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                  {["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Neon", "Vercel"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                <JobTrackerScreenshots />

                <ul className="mt-5 space-y-2">
                  {[
                    "Session auth with NextAuth — protected routes and per-user data isolation",
                    "Full CRUD: create, update, and delete applications with server-side validation",
                    "Status workflow — Applied → Interviewing → Offer → Rejected",
                    "Optimistic UI updates with instant feedback and toast notifications",
                    "Deployed on Vercel with Neon PostgreSQL and environment-secured credentials",
                  ].map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://job-tracker-sigma-six.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Mtavarez0625/job-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/12 hover:border-white/20"
                  >
                    GitHub Repo <span className="text-white/40">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── EXPENSE TRACKER ── */}
          <motion.div variants={fadeUp}>
            <div
              id="expense-tracker"
              className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-7 backdrop-blur transition hover:bg-white/[0.06] hover:-translate-y-[2px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.10),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.08),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/12" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">AI Expense Tracker</h3>
                    <p className="mt-1.5 text-white/60 text-sm max-w-[60ch]">
                      Full-stack expense management app with authentication, category analytics, spending trend dashboards, and AI-generated financial insights via OpenAI.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Live
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                  {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "OpenAI", "Neon", "Vercel"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-[0_4px_28px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/screenshots/expense-dashboard.png"
                    alt="AI Expense Tracker dashboard"
                    width={1280}
                    height={720}
                    className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-contain"
                  />
                </div>

                <ul className="mt-5 space-y-2">
                  {[
                    "Secure auth with NextAuth and user-scoped expense data",
                    "Transaction CRUD with category tagging and date filtering",
                    "Analytics dashboard — spending breakdown and month-over-month trends",
                    "AI-generated financial insights powered by OpenAI API",
                    "Separate transactional and analytical data layers for clean architecture",
                  ].map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://expense-tracker-wine-theta-32.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Mtavarez0625/expense-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/12 hover:border-white/20"
                  >
                    GitHub Repo <span className="text-white/40">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── BAGGAGE TRACKER ── */}
          <motion.div variants={fadeUp}>
            <div
              id="baggage-tracker"
              className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-7 backdrop-blur transition hover:bg-white/[0.06] hover:-translate-y-[2px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.10),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.08),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/12" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">Baggage Tracker</h3>
                    <p className="mt-1.5 text-white/60 text-sm max-w-[60ch]">
                      Internal-style baggage tracking tool with a production-ready REST API, auditable status lifecycle, full CRUD, and clean UI states designed for fast operational workflows.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Case Study
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                  {["React", "Node.js", "Express", "MongoDB", "REST API"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-[0_4px_28px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/screenshots/baggage-dashboard.png"
                    alt="Baggage Tracker dashboard"
                    width={1280}
                    height={720}
                    className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-contain"
                  />
                </div>

                <ul className="mt-5 space-y-2">
                  {[
                    "RESTful API with full CRUD and consistent JSON response contracts",
                    "Status lifecycle with enforced, auditable state transitions",
                    "MongoDB schemas with model-level validation and constraints",
                    "Defensive error handling and input sanitization on all routes",
                    "Clean UI states — loading, empty, error, and success handled explicitly",
                  ].map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://baggage-tracker.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Mtavarez0625/baggage-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/12 hover:border-white/20"
                  >
                    GitHub Repo <span className="text-white/40">↗</span>
                  </a>
                  <a
                    href="#baggage-tracker-case-study"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white/65 transition hover:text-white hover:border-white/20"
                  >
                    Case Study <span className="text-white/40">→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── CASE STUDY: BAGGAGE TRACKER ─── */}
      <section
        id="baggage-tracker-case-study"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Case Study
          </div>
          <h2 className="mt-3 text-2xl font-semibold">Baggage Tracker — Deep Dive</h2>
          <p className="mt-1.5 text-white/55 text-sm max-w-[72ch]">
            A production-style REST API and tracking UI built around an auditable status lifecycle and consistent data contracts.
          </p>
        </motion.div>

        <motion.div
          className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Problem</div>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Ops workflows need fast record lookup and consistent status history. Without structure, tracking becomes inconsistent and hard to audit under time pressure.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Solution</div>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Built a status lifecycle with enforced transitions and explicit empty/loading/error states — paired with a REST API that returns safe, consistent responses across all routes.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Key Features</div>
            <ul className="mt-2 space-y-1.5 text-sm text-white/65">
              <li>• Full CRUD with input validation and UI feedback</li>
              <li>• Auditable status lifecycle per record</li>
              <li>• MongoDB schemas with model-level constraints</li>
              <li>• Consistent REST API response contracts</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Technical Challenges</div>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Enforcing status transitions at the API layer — not just UI guards — required validation logic on every mutation route. Making all UI states explicit and consistent was as important as the happy path.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur sm:col-span-1 lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">What I Learned</div>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              API-level validation is non-negotiable — UI-only guards break under real conditions. Consistent response shapes make the frontend significantly more reliable. This project taught me to treat every UI state as a first-class design concern, not an afterthought.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              About
            </div>
            <h2 className="mt-3 text-2xl font-semibold">How I work</h2>
            <p className="mt-2 text-white/60 text-sm max-w-[60ch]">
              Clean code, clear architecture, and a genuine interest in building things that work.
            </p>
          </div>
          <div className="hidden md:block text-right text-xs text-white/40">
            Quality-focused · Product-minded · Ownership
          </div>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur"
          >
            <h3 className="font-semibold text-sm">How I build</h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">
              I focus on clean architecture and readable code. I build end-to-end — from database schema to deployed UI — and aim for interfaces that are fast, reliable, and easy to maintain.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur"
          >
            <h3 className="font-semibold text-sm">What I&apos;m looking for</h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">
              A full-stack role where I can ship features end-to-end, solve real problems, and grow alongside a quality-focused team. Ready to contribute from day one and learn fast.
            </p>
          </motion.div>
        </motion.div>

      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mb-8"
        >
          <h2 className="text-3xl font-semibold">Let&apos;s connect</h2>
          <p className="mt-2 text-white/60 text-sm max-w-[60ch]">
            Hiring or want to collaborate? Send a message — I reply fast.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <ContactSection />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
