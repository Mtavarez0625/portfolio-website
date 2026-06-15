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
      {/* NAVBAR */}
      <TopBar active={active} />

      {/* BACKGROUND SYSTEM */}
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

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT: TEXT */}
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

            <p className="mt-3 text-white/65 text-2xl">Full-Stack Developer</p>
            <p className="mt-1.5 text-emerald-400/80 text-base font-medium tracking-wide">
              Building Production-Ready Web Applications
            </p>

            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              I build full-stack web applications with Next.js, TypeScript, React,
              and Node.js — backed by PostgreSQL databases, REST APIs, and
              authentication systems. I focus on clean architecture, maintainable
              code, and UIs that are fast to use and easy to ship.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
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

            {/* TECH STACK */}
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/70">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "Prisma",
                "PostgreSQL",
                "MongoDB",
                "REST APIs",
                "Authentication",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: PHOTO */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative mx-auto w-[320px] sm:w-[380px] md:w-[460px] z-20"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-white/10"
              style={{
                WebkitMaskImage:
                  "radial-gradient(70% 70% at 55% 45%, black 55%, transparent 100%)",
                maskImage:
                  "radial-gradient(70% 70% at 55% 45%, black 55%, transparent 100%)",
              }}
            />
            <div className="relative">
              <Image
                src="/images/headshot.png"
                alt="Marcos Tavarez"
                width={1600}
                height={2400}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                className="h-auto w-full object-contain drop-shadow-[0_55px_90px_rgba(0,0,0,0.70)]"
              />
            </div>
          </motion.div>
        </div>

        {/* PROOF STRIP */}
        <div className="mt-14">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-5 backdrop-blur-md">
              <div className="text-2xl font-semibold text-white">3</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                Production-Style Apps
              </div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Full-stack applications with real APIs, auth, databases, and deployed UIs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-2xl font-semibold text-white">15+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                API Endpoints Built
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                REST APIs with validation, error handling, and consistent response contracts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                Core Stack
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                Next.js · Prisma · PostgreSQL
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Clean architecture, typed ORM, and reliable data modeling.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                Production-Ready
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                Auth · CRUD · Deployed
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Session auth, database persistence, and live deployments on Vercel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-white/70">
            Full-stack applications built with authentication, databases, REST APIs, and deployed UIs.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* JOB TRACKER SAAS */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div
              id="job-tracker"
              className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition will-change-transform hover:bg-white/8 hover:-translate-y-[3px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.12),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.10),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">Job Tracker SaaS</h3>
                    <p className="mt-2 text-white/70 text-sm max-w-[56ch]">
                      Production-ready SaaS platform for tracking job applications, interviews, and offers — with NextAuth authentication, protected routes, PostgreSQL persistence via Prisma, optimistic UI updates, and a fully responsive modern interface.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-400/90">
                    Production Ready
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS", "Neon", "Vercel"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                <JobTrackerScreenshots />

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Impact</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Centralizes the job search pipeline in one secure workspace</li>
                      <li>• Reduces tracking overhead with optimistic UI and instant feedback</li>
                      <li>• Delivers real-time status visibility across all active opportunities</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Architecture</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Next.js 16 App Router with server + client components</li>
                      <li>• Prisma ORM with Neon PostgreSQL for persistent storage</li>
                      <li>• NextAuth session management with protected API routes</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Production Notes</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Full CRUD with server-side validation and toast notifications</li>
                      <li>• Search + filtering with debounced query handling</li>
                      <li>• Deployed on Vercel with environment-secured credentials</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://job-tracker-sigma-six.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/Mtavarez0625/job-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/12 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <span>GitHub Repo</span>
                    <span className="text-white/45">↗</span>
                  </a>
                  <a
                    href="#job-tracker-case-study"
                    className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:text-white hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Case Study <span className="text-white/45">→</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 text-[11px] text-white/60">
                    {["Deployed on Vercel", "Prisma + Neon", "NextAuth secured", "Full CRUD SaaS"].map((item) => (
                      <span key={item} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI EXPENSE TRACKER */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div
              id="expense-tracker"
              className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition will-change-transform hover:bg-white/8 hover:-translate-y-[3px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.12),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.10),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">AI Expense Tracker</h3>
                    <p className="mt-2 text-white/70 text-sm max-w-[56ch]">
                      AI-powered full-stack expense tracking application built to help users manage transactions, analyze spending behavior, visualize trends, and generate actionable financial insights.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    Featured Project
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "OpenAI"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/screenshots/expense-dashboard.png"
                    alt="AI Expense Tracker dashboard"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Impact</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Turns raw expense data into clear financial insights</li>
                      <li>• Helps users spot category trends and month-over-month changes</li>
                      <li>• Improves decision-making with AI-generated recommendations</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Architecture</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Next.js App Router + API routes</li>
                      <li>• Prisma ORM with Neon PostgreSQL</li>
                      <li>• Separate analytics and transactional data layers</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Production Notes</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Secure authentication with user-scoped data access</li>
                      <li>• Reusable utilities for formatting and consistency</li>
                      <li>• Deployment-ready full-stack architecture</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://expense-tracker-wine-theta-32.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/Mtavarez0625/expense-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/12 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <span>GitHub Repo</span>
                    <span className="text-white/45">↗</span>
                  </a>
                  <a
                    href="#expense-tracker-case-study"
                    className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:text-white hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Case Study <span className="text-white/45">→</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 text-[11px] text-white/60">
                    {["Deployed on Vercel", "Prisma + Neon", "AI Insights", "Authentication secured"].map((item) => (
                      <span key={item} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BAGGAGE TRACKER */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div
              id="baggage-tracker"
              className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition will-change-transform hover:bg-white/8 hover:-translate-y-[3px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.12),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.10),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">Baggage Tracker</h3>
                    <p className="mt-2 text-white/70 text-sm max-w-[56ch]">
                      Internal-style baggage tracking tool designed for fast lookup and clear, auditable status transitions — built with a production-ready REST API, MongoDB, and consistent UI states.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    Case Study
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {["React", "Node.js", "Express", "MongoDB", "REST API"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/screenshots/baggage-dashboard.png"
                    alt="Baggage Tracker dashboard"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Impact</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Fast baggage search and record retrieval</li>
                      <li>• Clear status lifecycle to reduce workflow ambiguity</li>
                      <li>• UI patterns optimized for speed under operational pressure</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Architecture</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• REST controllers with validation and consistent responses</li>
                      <li>• MongoDB schemas + model-level constraints</li>
                      <li>• Frontend state management for loading / empty / error paths</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Production Notes</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Defensive error handling + predictable API contracts</li>
                      <li>• Input validation and sanitization on all routes</li>
                      <li>• Separated concerns and reusable component structure</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://baggage-tracker.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/Mtavarez0625/baggage-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/12 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <span>GitHub Repo</span>
                    <span className="text-white/45">↗</span>
                  </a>
                  <a
                    href="#baggage-tracker-case-study"
                    className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:text-white hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Case Study <span className="text-white/45">→</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 text-[11px] text-white/60">
                    {["REST API", "MongoDB", "Full CRUD", "Input validation"].map((item) => (
                      <span key={item} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MISSION CONTROL PRO */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div
              id="mission-control-pro"
              className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition will-change-transform hover:bg-white/8 hover:-translate-y-[3px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.12),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.10),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">Mission Control Pro</h3>
                    <p className="mt-2 text-white/70 text-sm max-w-[56ch]">
                      AI-powered operations dashboard for managing business workflows, agent task queues, and automation pipelines — built with an automation-first architecture and a Next.js command-center UI.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    In Development
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {["Next.js", "TypeScript", "Node.js", "REST APIs", "AI / Automation"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
                  ))}
                </div>

                {/* Dashboard concept preview */}
                <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Active Workflows", val: "12" },
                      { label: "Tasks Queued", val: "47" },
                      { label: "Automations Run", val: "284" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                        <div className="text-lg font-semibold text-white">{stat.val}</div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Onboarding Flow", status: "Running", color: "text-emerald-400" },
                      { label: "Email Campaign", status: "Queued", color: "text-blue-400" },
                      { label: "Data Sync Agent", status: "Running", color: "text-emerald-400" },
                      { label: "Report Builder", status: "Idle", color: "text-white/40" },
                    ].map((task) => (
                      <div key={task.label} className="rounded-lg border border-white/8 bg-white/3 px-3 py-2 flex items-center justify-between">
                        <span className="text-[11px] text-white/70">{task.label}</span>
                        <span className={`text-[10px] uppercase tracking-wider ${task.color}`}>{task.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Use Case</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Centralized ops dashboard for business teams</li>
                      <li>• Workflow orchestration with live status visibility</li>
                      <li>• Automation pipelines for repetitive business tasks</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Architecture</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Next.js App Router with server-driven UI</li>
                      <li>• Automation-first API layer for task orchestration</li>
                      <li>• Modular agent system for extensible workflows</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">Key Features</div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Real-time workflow dashboard with task queues</li>
                      <li>• AI-assisted task routing and prioritization</li>
                      <li>• Business operations monitoring and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* CASE STUDIES */}
      <section
        id="case-studies"
        className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Case Studies
          </div>
          <h2 className="mt-3 text-2xl font-semibold">How I Build</h2>
          <p className="mt-2 text-white/70 max-w-[80ch]">
            Deep dives into the problems, decisions, and lessons behind each project.
          </p>
        </motion.div>

        {/* BAGGAGE TRACKER CASE STUDY */}
        <div id="baggage-tracker-case-study" className="mt-10 scroll-mt-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold">Baggage Tracker — Deep Dive</h3>
            <p className="mt-1 text-white/55 text-sm max-w-[80ch]">
              A production-style tracking tool built around an auditable status lifecycle, consistent UI states, and a REST API designed for operational workflows.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Problem</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Ramp and ops workflows need fast lookup, consistent status history, and clean UI states that reduce errors under time pressure. Without structure, tracking becomes inconsistent and auditability breaks down.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Solution</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Built a structured status lifecycle with predictable transitions, clear empty/loading/error states, and REST API responses designed to be safe, consistent, and easy to debug from both sides of the stack.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Key Features</div>
              <ul className="mt-2 space-y-1.5 text-sm text-white/70">
                <li>• Full CRUD with input validation and clean UI feedback</li>
                <li>• Status lifecycle with auditable transitions</li>
                <li>• MongoDB schemas with model-level constraints</li>
                <li>• Consistent REST API response contracts</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Technical Challenges</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Enforcing status transitions at the API level — not just the UI — required careful validation logic on every mutation route. Handling all UI states (loading, empty, error, data) cleanly without inconsistency was an early design discipline win.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur sm:col-span-1 lg:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">What I Learned</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                API-level validation is non-negotiable — UI-only guards break under real conditions. Building the REST layer with consistent response shapes made the frontend significantly more reliable and predictable. This project solidified my understanding of backend data modeling with MongoDB and the value of treating every UI state — not just the happy path — as a first-class design concern.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* JOB TRACKER CASE STUDY */}
        <div id="job-tracker-case-study" className="scroll-mt-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold">Job Tracker SaaS — Deep Dive</h3>
            <p className="mt-1 text-white/55 text-sm max-w-[80ch]">
              A multi-user SaaS application with session-based authentication, per-user data isolation, and the UI polish that makes a tool worth using daily.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Problem</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Job seekers tracking dozens of applications across spreadsheets and sticky notes lose context, miss follow-ups, and cannot visualize pipeline status at a glance. There was no simple, structured tool designed specifically for this workflow.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Solution</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Built a secure SaaS platform where each user gets a private workspace with full CRUD for tracking applications, status stages, notes, and company info — all scoped strictly to their authenticated session.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Key Features</div>
              <ul className="mt-2 space-y-1.5 text-sm text-white/70">
                <li>• NextAuth credential auth with protected routes</li>
                <li>• Full CRUD with status stages (Applied → Offer)</li>
                <li>• Search and filter with debounced query handling</li>
                <li>• Optimistic UI updates with toast notifications</li>
                <li>• Deployed on Vercel with Neon PostgreSQL</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Technical Challenges</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Per-user data isolation required attaching session user IDs to every Prisma query — not just middleware-level route protection. Building optimistic UI that gracefully rolls back on failure, and keeping debounced search in sync with server state, were the most demanding UX engineering decisions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur sm:col-span-1 lg:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">What I Learned</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                End-to-end ownership of a full SaaS auth flow — from registration through session management to protected API routes — gave me a clear mental model of how multi-tenant security works in production. Optimistic UI is a UX contract: you are promising the user an action succeeded before it has, which means rollback logic has to be bulletproof. This project most closely mirrors what I would build on a real product team, and it gave me the most confidence about shipping full-stack features independently.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* EXPENSE TRACKER CASE STUDY */}
        <div id="expense-tracker-case-study" className="scroll-mt-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold">AI Expense Tracker — Deep Dive</h3>
            <p className="mt-1 text-white/55 text-sm max-w-[80ch]">
              A full-stack financial management app combining transactional data, analytics dashboards, and AI-powered insights into one cohesive product.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Problem</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Most people track expenses in spreadsheets with no visibility into category trends, month-over-month changes, or personalized guidance — leaving financial decisions based on gut feeling rather than data.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Solution</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Built a full-stack app where users log transactions by category, view analytics dashboards breaking down spending patterns, and generate AI-powered financial insights via OpenAI to surface actionable recommendations.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Key Features</div>
              <ul className="mt-2 space-y-1.5 text-sm text-white/70">
                <li>• Full auth with user-scoped expense data</li>
                <li>• Transaction CRUD with category tagging</li>
                <li>• Analytics dashboard with spending breakdown</li>
                <li>• Month-over-month trend comparisons</li>
                <li>• AI-generated financial insights via OpenAI</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Technical Challenges</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Designing two separate data access layers — one for transactional CRUD, one for aggregated analytics — without duplicating logic was the core architectural challenge. Category-based aggregation queries in Prisma required careful groupBy usage. Integrating OpenAI in a way that felt native (not bolted on) required thoughtful prompt engineering and response formatting.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur sm:col-span-1 lg:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">What I Learned</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                How to think about data differently depending on how it will be read: transactional writes need validation and atomicity, while analytical reads need grouping, aggregation, and date-range filtering. This distinction — transactional vs. analytical data layers — is something I now apply to every data-heavy project. I also got hands-on experience with OpenAI API integration patterns and presenting AI output in a way that users find genuinely useful rather than generic.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14">
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
          <p className="mt-2 text-white/70 max-w-[70ch]">
            Technologies I&apos;ve built with across production-style full-stack applications.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {[
            { name: "Next.js", desc: "App Router, server components, API routes" },
            { name: "React", desc: "Component architecture, hooks, state management" },
            { name: "TypeScript", desc: "Type-safe code across the full stack" },
            { name: "Node.js", desc: "Server-side runtime for APIs and services" },
            { name: "Express", desc: "REST API routing and middleware" },
            { name: "Prisma", desc: "Type-safe ORM with schema-driven modeling" },
            { name: "PostgreSQL", desc: "Relational DB, queries, and migrations" },
            { name: "MongoDB", desc: "Document-based data modeling" },
            { name: "REST APIs", desc: "CRUD endpoints with validation + error handling" },
            { name: "Authentication", desc: "NextAuth sessions, protected routes, JWT" },
            { name: "Vercel", desc: "Deployment, environment config, edge CDN" },
            { name: "Git / GitHub", desc: "Version control, branching, pull requests" },
          ].map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              className="rounded-2xl bg-white/7 border border-white/10 p-4 backdrop-blur hover:bg-white/8 transition"
            >
              <div className="text-sm font-semibold text-white">{tech.name}</div>
              <div className="mt-1 text-xs text-white/55 leading-relaxed">{tech.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14"
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
            <p className="mt-2 text-white/70 max-w-[70ch]">
              I build clean, maintainable systems with a strong UX bar — fast to
              use, easy to understand, and safe to ship.
            </p>
          </div>
          <div className="hidden md:block text-right text-xs text-white/50">
            Quality-focused • Product-minded • Ownership
          </div>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition hover:bg-white/8 hover:-translate-y-[2px]"
          >
            <div className="relative">
              <h3 className="font-semibold">How I build</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                I focus on clean architecture, readable code, and UI polish. I
                aim to build products that feel like internal enterprise tools —
                fast, reliable, and intuitive. I take full ownership of features
                end-to-end, from database schema to deployed UI.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition hover:bg-white/8 hover:-translate-y-[2px]"
          >
            <div className="relative">
              <h3 className="font-semibold">What I&apos;m looking for</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                A full-stack role where I can ship features end-to-end, solve
                meaningful problems, and grow with a quality-focused team. I&apos;m
                ready to contribute from day one and learn fast in a professional
                software engineering environment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mb-8"
        >
          <h2 className="text-3xl font-semibold">Let&apos;s connect</h2>
          <p className="mt-2 text-white/70 max-w-[70ch]">
            Want to collaborate or talk about an opportunity? Send a message — I
            usually reply fast.
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
