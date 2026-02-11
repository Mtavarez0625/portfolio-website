"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import ContactSection from "@/components/ContactSection";
import { motion, type Variants } from "framer-motion";

type ActiveSection = "projects" | "about" | "contact" | "";

// Animations (typed to avoid TS/VSCode errors)
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

        {/* soft glows */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_12%,rgba(0,255,180,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_85%_20%,rgba(0,180,255,0.14),transparent_60%)]" />

        {/* hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]" />

        {/* noise (premium depth) - requires /public/images/noise.png */}
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light [background-image:url('/images/noise.png')]" />

        {/* vignette */}
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
              Available for remote & hybrid opportunities
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight">
              Marcos Tavarez
            </h1>

            <p className="mt-3 text-white/65 text-2xl">Full-Stack Developer</p>

            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              I build production-style web applications with clean architecture,
              reliable APIs, and polished UX — the kind of work teams can ship
              and maintain with confidence.
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
                href="/resume/Marcos_Tavarez_Resume.pdf"
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
                "Express",
                "MongoDB",
                "REST APIs",
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

         {/* RIGHT: PHOTO — blend edges (works with non-transparent images) */}
         <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           variants={fadeUp}
           className="relative mx-auto w-[320px] sm:w-[380px] md:w-[460px] z-20"
         >
          {/* subtle rim light so it seperates from background */}
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

        {/* PROOF STRIP (kept INSIDE hero section) */}
        <div className="mt-14">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-5 backdrop-blur-md">
              <div className="text-2xl font-semibold text-white">3+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                Projects Built
              </div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Full-stack applications with real APIs, CRUD workflows, and
                production-style UI.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                Core stack
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                Next.js • Node • MongoDB
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Clean architecture, REST APIs, and reliable data modeling.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                What you get
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                Ship-ready UI
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Polished interfaces, responsive layouts, and maintainable
                components.
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
            Production-style projects focused on clean architecture, reliable APIs, and polished UX.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div
              id="baggage-tracker"
              className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition will-change-transform hover:bg-white/8 hover:-translate-y-[3px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(0,255,180,0.12),transparent_55%),radial-gradient(500px_circle_at_80%_0%,rgba(0,180,255,0.10),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-white/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">Baggage Tracker</h3>
                    <p className="mt-2 text-white/70 text-sm max-w-[56ch]">
                      Internal-style baggage tracking tool designed for fast lookup and clear, auditable status transitions-built with a production-ready REST API and consistent UI states.
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    Case Study
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {["React", "Node/Express", "MongoDB", "REST API"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 border border-white/10 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">
                      Impact
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Fast baggage search and record retrieval</li>
                      <li>• Clear status lifecycle to reduce workflow ambiguity</li>
                      <li>• UI patterns optimized for speed under operational pressure</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">
                      Architecture
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• REST controllers with validation and consistent responses</li>
                      <li>• MongoDB schemas + model-level constraints</li>
                      <li>• Frontend state management for loading / empty / error paths</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-400/80">
                      Production notes
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-white/75">
                      <li>• Defensive error handling + predictable API contracts</li>
                      <li>• Input validation / sanitization</li>
                      <li>• Deployment-ready structure (seperated concerns, reusable components)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://baggage-tracker.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    <span>Live Demo</span>
                  </a>

                  <a
                    href="https://github.com/Mtavarez0625/baggage-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-white/8 border border-white/12 px-4 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/12 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <span>Github Repo</span>
                    <span className="text-white/45">↗</span>
                  </a>

                  <a
                    href="#baggage-tracker-case-study"
                    className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:text-white hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Case Study <span className="text-white/45">→</span>
                  </a>
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

      {/* CASE STUDY */}
      <section
        id="baggage-tracker-case-study"
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
            Case Study
          </div>

          <h2 className="mt-3 text-2xl font-semibold">
            Baggage Tracker — Deep Dive
          </h2>
          <p className="mt-2 text-white/70 max-w-[80ch]">
            A production-style baggage tracking tool built around an auditable status lifecycle, consistent UI states, and a REST API designed for operational workflows.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
              Problem
            </div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Ramp/ops workflows need fast lookup, consistent status history,
              and clean UI states that reduce errors under time pressure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
              Solution
            </div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Built a structured lifecycle with predictable transitions, clear
              empty/loading states, and API responses that are safe and
              consistent.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
              Highlights
            </div>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>• CRUD with validation + clean UI feedback</li>
              <li>• Status tracking with audit-friendly flow</li>
              <li>• Production-style component structure</li>
            </ul>
          </motion.div>
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
                fast, reliable, and intuitive.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="group relative rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition hover:bg-white/8 hover:-translate-y-[2px]"
          >
            <div className="relative">
              <h3 className="font-semibold">What I’m looking for</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                A full-stack role where I can ship features end-to-end, solve
                meaningful problems, and grow with a quality-focused team.
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
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Contact
          </div>

          <h2 className="mt-3 text-3xl font-semibold">Let’s connect</h2>
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
    </main>
  );
}