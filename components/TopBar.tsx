"use client";

import Link from "next/link";

type ActiveSection = "projects" | "about" | "contact" | "";

type Props = {
  active: ActiveSection;
};

export default function TopBar({ active }: Props) {
  const linkClass = (key: ActiveSection) =>
    key === active
      ? "text-white"
      : "text-white/60 hover:text-white transition-colors";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 overflow-hidden">
            <img
              src="/logo/mt-icon.png"
              alt="Marcos Tavarez logo"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="leading-tight">
            <div className="font-semibold tracking-wide text-white">
              Marcos Tavarez
            </div>
            <div className="text-xs text-white/60">
              Full-Stack Developer
            </div>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex gap-6 text-sm">
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}