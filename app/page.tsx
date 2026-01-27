"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";

type ActiveSection = "projects" | "about" | "contact" | "";

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

      {/* Background (premium) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* deep base */}
        <div className="absolute inset-0 bg-black" />

        {/* soft glows */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_12%,rgba(0,255,180,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_85%_18%,rgba(0,180,255,0.14),transparent_60%)]" />

        {/* your hero image (keep it subtle) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-[1px]"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />

        {/* film grain (cheap trick that looks expensive) */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for remote opportunities
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight">
          Marcos Tavarez
          <span className="block mt-3 text-white/65 text-3xl sm:text-4xl">
            Full-Stack Developer
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
          I build clean, production-style web apps with modern UI and real backend
          logic — focused on readable code, reliable APIs, and polished UX.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-2.5 text-sm font-medium transition hover:bg-white/90"
          >
            View Projects <span className="transition-transform group-hover:translate-x-0.5">→</span>
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

        {/* Tech chips */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/70">
          {["Next.js", "TypeScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"].map((t) => (
            <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Featured Project</h2>
        <p className="mt-2 text-white/70">Production-style app with real workflows.</p>

        <div className="mt-6 rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Baggage Tracker</h3>
              <p className="mt-2 text-white/70 max-w-2xl">
                A full-stack baggage tracking system with a clean UI, status updates, and a real backend API.
                Built to mirror real airline ops workflows.
              </p>

              <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc pl-5">
                <li>CRUD bag records with validation and clean UI states (loading, error, empty).</li>
                <li>Status workflow updates (Checked In → Loaded → Arrived) with auditable changes.</li>
                <li>REST API with MongoDB persistence and predictable response shapes for the frontend.</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {["React", "Node/Express", "MongoDB", "REST API"].map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition" href="#">
                View details →
              </a>
              <a className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition" href="#">
                Live ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-white/70">Who I am and how I work.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
            <h3 className="font-semibold">How I build</h3>
            <p className="mt-2 text-white/70 text-sm">
              I focus on clean architecture, readable code, and UI polish. I build apps to feel like internal enterprise tools:
              fast, reliable, and easy to use.
            </p>
          </div>

          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
            <h3 className="font-semibold">What I’m looking for</h3>
            <p className="mt-2 text-white/70 text-sm">
              A full-stack role where I can ship features end-to-end, solve business problems, and grow with a team that cares about quality.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 pb-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-white/70">Let’s connect.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
            <h3 className="font-semibold">Send me a message</h3>
            <p className="mt-2 text-white/70 text-sm">
              Add your real form here (wired to your API route).
            </p>
          </div>

          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur hover:bg-white/8 transition">
            <h3 className="font-semibold">Find me online</h3>
            <p className="mt-2 text-white/70 text-sm">
              Add LinkedIn + GitHub buttons here for recruiters.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}