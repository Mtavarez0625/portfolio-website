"use client";

import { useEffect, useMemo, useState } from "react";
import TopBar from "@/components/TopBar";

type ActiveSection = "projects" | "about" | "contact" | "";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudy?: {
    overview: string;
    role: string;
    highlights: string[];
    decisions: string[];
  };
};

function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Home() {
  const [active, setActive] = useState<ActiveSection>("projects");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Baggage Tracker",
        subtitle: "Production-style workflow app with a real backend API",
        description:
          "A full-stack baggage tracking system with clean UI, status updates, and an audited workflow. Built to mirror real airline ops patterns.",
        bullets: [
          "CRUD bag records with validation + clean UI states (loading/error/empty).",
          "Workflow updates (Checked In → Loaded → Arrived) with clear history.",
          "REST API backed by MongoDB with predictable response shapes.",
        ],
        stack: ["Next.js", "TypeScript", "Node/Express", "MongoDB", "REST API"],
        liveUrl: "https://baggage-tracker.vercel.app",
        repoUrl: "https://github.com/Mtavarez0625/baggage-tracker",
        caseStudy: {
          overview:
            "Designed to feel like an internal airline tool: simple, fast, and reliable. Focused on readable code and a UI that scales as more workflows are added.",
          role:
            "Full-stack: designed the data model, built the API routes, implemented UI states, and shipped to production.",
          highlights: [
            "Predictable API responses and error handling for a smooth UI experience.",
            "Workflow-driven updates instead of random status toggles.",
            "Polished UI patterns: loading states, empty states, and action affordances.",
          ],
          decisions: [
            "Chose a simple, normalized bag record model to keep the system extensible.",
            "Used consistent API shapes to reduce UI complexity and prevent edge-case bugs.",
            "Built UI actions to match real-world operational steps.",
          ],
        },
      },
      {
        title: "Portfolio Website",
        subtitle: "Interactive, recruiter-focused personal site",
        description:
          "A modern portfolio engineered to be fast, clear, and professional — with a clean layout, strong copy, and a product-like feel.",
        bullets: [
          "Sticky glass navbar with brand icon and section tracking.",
          "Premium background system (glow + grid + vignette + grain).",
          "Reusable sections that scale as you add more projects.",
        ],
        stack: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
        liveUrl: "https://marcostavarez.com",
        repoUrl: "https://github.com/Mtavarez0625/portfolio-website",
      },
    ],
    []
  );

  // Track active section on scroll
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

      {/* Background (premium system) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_12%,rgba(0,255,180,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_85%_18%,rgba(0,180,255,0.14),transparent_60%)]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-[1px]"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for remote & hybrid opportunities
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
              Marcos Tavarez
              <span className="block mt-3 text-white/65 text-3xl sm:text-4xl">
                Full-Stack Developer
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
              I build production-style web applications with clean architecture,
              reliable APIs, and polished UX — the kind of work teams can ship and maintain.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-2.5 text-sm font-medium transition hover:bg-white/90"
              >
                View Projects{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
              >
                Contact
              </a>

              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
              >
                Resume <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/70">
              {["Next.js", "TypeScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Headshot card */}
          <div className="rounded-2xl bg-white/7 border border-white/10 backdrop-blur p-5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src="/images/headshot.jpg"
                  alt="Marcos Tavarez headshot"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Recruiter-friendly</div>
                <div className="text-sm text-white/70">
                  Clean story • Real projects • Strong UX
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-white/70 leading-relaxed">
              I focus on building software that feels “enterprise-ready”:
              predictable behavior, readable code, and UI polish that signals quality.
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a
                href="https://github.com/Mtavarez0625"
                className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition text-center"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition text-center"
              >
                Email me →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Work that demonstrates real-world workflows, API design, and production-ready UI patterns.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition hover:bg-white/8 hover:-translate-y-[2px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
                </div>

                <button
                  onClick={() => setOpenProject(p)}
                  className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm hover:bg-white/15 transition"
                >
                  View details →
                </button>
              </div>

              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc pl-5">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition"
                  >
                    Live ↗
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          The way I build: clean architecture, readable code, and UI polish.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
            <h3 className="font-semibold">How I build</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              I design systems to be maintainable. I keep APIs consistent, implement strong UI states,
              and focus on UX details that signal quality to users and teams.
            </p>
          </div>

          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
            <h3 className="font-semibold">What I’m looking for</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              A full-stack role where I can ship features end-to-end, collaborate closely with product,
              and grow with a team that cares about quality.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 pb-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Want to collaborate or talk about an opportunity? Send a message and I’ll reply quickly.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
            <h3 className="font-semibold">Send me a message</h3>
            <p className="mt-2 text-white/70 text-sm">
              (Wire this to your /api/contact route — you already have it.)
            </p>

            <form className="mt-4 grid gap-3">
              <input
                className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                placeholder="Your name"
              />
              <input
                className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                placeholder="Your email"
              />
              <textarea
                rows={4}
                className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                placeholder="Your message"
              />
              <button
                type="button"
                className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                Send message →
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
            <h3 className="font-semibold">Find me online</h3>
            <p className="mt-2 text-white/70 text-sm">
              Quick links for recruiters.
            </p>

            <div className="mt-4 grid gap-3">
              <a
                className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm hover:bg-white/15 transition"
                href="mailto:mtavarez0625@gmail.com"
              >
                Email → mtavarez0625@gmail.com
              </a>

              <a
                className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm hover:bg-white/15 transition"
                href="https://github.com/Mtavarez0625"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              {/* Replace with your real LinkedIn */}
              <a
                className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm hover:bg-white/15 transition"
                href="#"
              >
                LinkedIn ↗ (add link)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <button
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpenProject(null)}
            aria-label="Close modal"
          />

          <div className="relative w-full max-w-3xl rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xl font-semibold">{openProject.title}</div>
                <div className="mt-1 text-sm text-white/70">{openProject.subtitle}</div>
              </div>

              <button
                onClick={() => setOpenProject(null)}
                className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm hover:bg-white/15 transition"
              >
                Close ✕
              </button>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-semibold">Overview</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {openProject.caseStudy?.overview ?? openProject.description}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-semibold">My role</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {openProject.caseStudy?.role ?? "Full-stack development and deployment."}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 md:col-span-2">
                <div className="font-semibold">Highlights</div>
                <ul className="mt-2 space-y-2 text-sm text-white/70 list-disc pl-5">
                  {(openProject.caseStudy?.highlights ?? openProject.bullets).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 md:col-span-2">
                <div className="font-semibold">Key decisions</div>
                <ul className="mt-2 space-y-2 text-sm text-white/70 list-disc pl-5">
                  {(openProject.caseStudy?.decisions ?? []).length
                    ? openProject.caseStudy!.decisions.map((x) => <li key={x}>{x}</li>)
                    : openProject.bullets.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {openProject.liveUrl && (
                <a
                  href={openProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
                >
                  Live ↗
                </a>
              )}
              {openProject.repoUrl && (
                <a
                  href={openProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition"
                >
                  Code ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}