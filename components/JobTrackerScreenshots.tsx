"use client";

import { useState } from "react";
import Image from "next/image";

const SCREENS = [
  {
    key: "dashboard",
    label: "Dashboard",
    src: "/screenshots/job-tracker/dashboard.png",
    alt: "Job Tracker main dashboard",
  },
  {
    key: "add-application",
    label: "Add Application",
    src: "/screenshots/job-tracker/add-application.png",
    alt: "Add new job application form",
  },
  {
    key: "login",
    label: "Login",
    src: "/screenshots/job-tracker/login.png",
    alt: "Secure authentication screen",
  },
  {
    key: "edit-application",
    label: "Edit Application",
    src: "/screenshots/job-tracker/edit-application.png",
    alt: "Edit job application details",
  },
] as const;

export default function JobTrackerScreenshots() {
  const [active, setActive] = useState(0);
  const current = SCREENS[active];

  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-2 mb-3">
        {SCREENS.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setActive(i)}
            className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition-colors ${
              active === i
                ? "bg-white/15 border border-white/25 text-white"
                : "bg-white/5 border border-white/10 text-white/50 hover:text-white/70"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-[560px] overflow-hidden rounded-xl border border-white/10 shadow-[0_4px_28px_rgba(0,0,0,0.45)]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={1280}
          height={720}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
