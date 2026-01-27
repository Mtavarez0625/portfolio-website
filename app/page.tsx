"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";

export default function Home() {
  const [active, setActive] = useState<"projects" | "about" | "contact" | "">(
    "projects"
  );

  useEffect(() => {
    const sections: Array<"projects" | "about" | "contact"> = [
      "projects",
      "about",
      "contact",
    ];

    const onScroll = () => {
      let current: "" | "projects" | "about" | "contact" = "";

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
      <TopBar active={active} />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_15%_10%,rgba(0,255,180,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_85%_20%,rgba(0,180,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* HERO */}
      <section className="pt-28 pb-20 max-w-6xl mx-auto px-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for remote opportunities
        </p>

        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">
          Marcos Tavarez
          <span className="block mt-2 text-white/70 text-xl">
            Full-Stack Developer
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
          I build clean, production-style web apps with modern UI and real
          backend logic. I focus on readable code, reliable APIs, and polished UX.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-4 text-white/70 max-w-xl">
          Featured work that demonstrates real-world workflows, API design, and
          production-ready UI patterns.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-white/70 max-w-xl">
          I’m a full-stack developer focused on building scalable, maintainable
          products. I care about UI polish, clean architecture, and shipping.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-white/70 max-w-xl">
          Want to collaborate or talk about an opportunity? Send a message and
          I’ll reply quickly.
        </p>
      </section>
    </main>
  );
}