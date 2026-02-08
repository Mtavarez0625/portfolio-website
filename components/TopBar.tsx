"use client";

import Link from "next/link";
import Image from "next/image";

type ActiveSection = "projects" | "about" | "contact" | "";
type Props = { active: ActiveSection };

export default function TopBar({ active }: Props) {
  const linkClass = (key: ActiveSection) =>
    key === active
      ? "text-white"
      : "text-white/70 hover:text-white transition-colors";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/15">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-3 flex items-center justify-between">
        {/* LOGO — keep as-is */}
        <Link
          href="/"
          aria-label="Home"
          className="group relative"
          style={{ perspective: "1600px" }}
        >
          <div className="relative h-28 w-28 md:h-32 md:w-32 select-none">
            <div
              className="
                absolute inset-0 -z-10
                blur-3xl opacity-70
                bg-[radial-gradient(circle_at_35%_35%,rgba(34,197,94,0.40),transparent_70%)]
              "
            />
            <div
              className="
                absolute inset-0
                [transform-style:preserve-3d]
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(.16,1,.3,1)]
                group-hover:[transform:rotateY(340deg)_rotateX(12deg)]
                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            >
              <Image
                src="/logo/mt-icon-transparent.png"
                alt="MT logo"
                fill
                priority
                sizes="128px"
                className="
                  object-contain
                  drop-shadow-[0_26px_52px_rgba(0,0,0,0.70)]
                  drop-shadow-[0_0_34px_rgba(34,197,94,0.35)]
                "
              />
            </div>
          </div>
        </Link>

        {/* NAV — thinner + still premium */}
        <nav
          className="
            rounded-full
            border border-white/10
            bg-black/15
            px-4 sm:px-5
            py-1.5
            flex items-center
            gap-4 sm:gap-6
            text-[11px] sm:text-[12px]
            tracking-[0.18em]
            uppercase
            text-white/70
          "
        >
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