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
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = id;
        }
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
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-[1px]"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for remote & hybrid opportunities
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight">
          Marcos Tavarez
          <span className="block mt-3 text-white/65 text-3xl sm:text-4xl">
            Full-Stack Developer
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
          I build production-style web applications with clean architecture,
          reliable APIs, and polished UX — the kind of work teams can ship and
          maintain with confidence.
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
            href="/resume"
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
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-white/70">
          Work that demonstrates real-world workflows and production-ready UI.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Project Card */}
          <div className="group rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur transition hover:bg-white/8 hover:-translate-y-[2px]">
            <h3 className="text-xl font-semibold">Baggage Tracker</h3>
            <p className="mt-2 text-white/70 text-sm">
              Full-stack baggage tracking system with real backend workflows,
              clean UI states, and audited status transitions.
            </p>

            <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc pl-5">
              <li>CRUD operations with validation and UI states</li>
              <li>Status workflow (Checked In → Loaded → Arrived)</li>
              <li>REST API with MongoDB persistence</li>
            </ul>

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

            <div className="mt-5 flex gap-3">
              <a className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition">
                Live ↗
              </a>
              <a className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15 transition">
                Code ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">About</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
            <h3 className="font-semibold">How I build</h3>
            <p className="mt-2 text-white/70 text-sm">
              I focus on clean architecture, readable code, and UI polish. I aim
              to build products that feel like internal enterprise tools — fast,
              reliable, and intuitive.
            </p>
          </div>

          <div className="rounded-2xl bg-white/7 border border-white/10 p-6 backdrop-blur">
            <h3 className="font-semibold">What I’m looking for</h3>
            <p className="mt-2 text-white/70 text-sm">
              A full-stack role where I can ship features end-to-end, solve
              meaningful problems, and grow with a quality-focused team.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 pb-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-white/70">
          Want to collaborate or talk about an opportunity? Let’s connect.
        </p>
      </section>
    </main>
  );
}