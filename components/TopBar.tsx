"use client";

import Link from "next/link";

type ActiveSection = "projects" | "about" | "contact" | "";

type Props = {
  active: ActiveSection;
};

export default function TopBar({ active }: Props) {
  const linkClass = (key: ActiveSection) =>
    "relative px-1 py-2 text-sm transition-colors " +
    (key === active ? "text-white" : "text-white/65 hover:text-white");

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-black/35 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          {/* ICON ONLY (no name) */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/logo/mt-icon.png"
                alt="MT logo"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 ring-1 ring-emerald-400/10 pointer-events-none" />
            </div>
          </Link>

          {/* NAV */}
          <nav className="flex items-center gap-6">
            <a href="#projects" className={linkClass("projects")}>
              Projects
              {active === "projects" && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-white/80" />
              )}
            </a>
            <a href="#about" className={linkClass("about")}>
              About
              {active === "about" && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-white/80" />
              )}
            </a>
            <a href="#contact" className={linkClass("contact")}>
              Contact
              {active === "contact" && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-white/80" />
              )}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}