"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const MY_EMAIL = "Mtavarez0625@gmail.com";

const BAGGAGE_TRACKER = {
  liveUrl: "https://baggage-tracker.vercel.app",
  repoUrl: "https://github.com/Mtavarez0625/baggage-tracker",
};

export default function Home() {
  // Tracks which section is currently "active" so the navbar can highlight it
  const [active, setActive] = useState<"projects" | "about" | "contact" | "">("");

  // Controls which project case-study modal is open
  const [openProject, setOpenProject] = useState<null | "baggage-tracker">(null);

  return (
    <main className="min-h-screen text-white">
      {/* Background Layer */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Soft color glows */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(0,255,180,0.14),transparent_55%),radial-gradient(800px_circle_at_85%_20%,rgba(80,120,255,0.12),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(255,0,140,0.10),transparent_55%)]" />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 blur-[1px]"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.85))]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Sticky nav + progress bar */}
        <TopBar active={active} />
        <ScrollProgress />

        {/* HERO */}
        <section className="pt-14 sm:pt-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for remote opportunities
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Marcos Tavarez
              <span className="block text-white/70">Full-Stack Developer</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              I build clean, production-style web apps with modern UI and real backend logic. Here’s my first
              featured project: a baggage tracking system inspired by airline workflows.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px]"
              >
                View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Contact <Mail className="h-4 w-4" />
              </a>

              <a
                href="/resume/Marcos-Tavarez-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Resume <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Pill text="Next.js" />
              <Pill text="TypeScript" />
              <Pill text="React" />
              <Pill text="Node.js" />
              <Pill text="Express" />
              <Pill text="MongoDB" />
              <Pill text="REST APIs" />
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative mt-16 sm:mt-20">
          <SectionSpy id="projects" onActive={setActive} />

          <SectionTitle title="Featured Project" subtitle="Production-style app with real workflows." />

          <div className="mt-6 grid gap-6">
            <ProjectCard
              title="Baggage Tracker"
              description="A full-stack baggage tracking system with a clean UI, status updates, and a real backend API. Built to mirror real airline ops workflows."
              tags={["React", "Node/Express", "MongoDB", "REST API"]}
              highlights={[
                "CRUD bag records with validation and clean UI states (loading, error, empty).",
                "Status workflow updates (e.g., Checked In → Loaded → Arrived) with auditable changes.",
                "REST API with MongoDB persistence and predictable response shapes for the frontend.",
              ]}
              liveUrl={BAGGAGE_TRACKER.liveUrl}
              repoUrl={BAGGAGE_TRACKER.repoUrl}
              onDetails={() => setOpenProject("baggage-tracker")}
            />
          </div>

          <p className="mt-4 text-sm text-white/55">
            (We’ll keep improving this case study as you add more projects.)
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative mt-16 sm:mt-20">
          <SectionSpy id="about" onActive={setActive} />

          <SectionTitle title="About" subtitle="Who I am and how I work." />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <GlassCard>
              <h3 className="text-lg font-semibold">How I build</h3>
              <p className="mt-3 text-white/70">
                I focus on clean architecture, readable code, and UI polish. I build apps to feel like internal
                enterprise tools: fast, reliable, and easy to use.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold">What I’m looking for</h3>
              <p className="mt-3 text-white/70">
                A full-stack role where I can ship features end-to-end, solve business problems, and grow with a
                team that cares about quality.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative mt-16 pb-14 sm:mt-20">
          <SectionSpy id="contact" onActive={setActive} />

          <SectionTitle title="Contact" subtitle="Let’s connect." />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <GlassCard>
              <h3 className="text-lg font-semibold">Send me a message</h3>
              <p className="mt-3 text-white/70">
                This form is connected to your API route. It validates and shows a success state.
              </p>
              <ContactForm />
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold">Find me online</h3>
              <p className="mt-3 text-white/70">
                Quick links to reach me. (We’ll plug in your final LinkedIn once you’re ready.)
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <IconButton label="Email" href={`mailto:${MY_EMAIL}`} icon={<Mail className="h-4 w-4" />} />
                <CopyEmailButton email={MY_EMAIL} />

                <IconButton
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                  icon={<Linkedin className="h-4 w-4" />}
                />

                <IconButton label="GitHub" href="https://github.com/Mtavarez0625" icon={<Github className="h-4 w-4" />} />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Modal (renders only when openProject is set) */}
        <ProjectModal open={openProject === "baggage-tracker"} onClose={() => setOpenProject(null)} />

        <Footer />
      </div>
    </main>
  );
}

/**
 * SECTION SPY
 * Invisible sensor: sets active section when it enters viewport.
 */
function SectionSpy({
  id,
  onActive,
}: {
  id: "projects" | "about" | "contact";
  onActive: (id: "projects" | "about" | "contact") => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.45 });

  useEffect(() => {
    if (inView) onActive(id);
  }, [inView, id, onActive]);

  return <div ref={ref} className="absolute -top-24 h-1 w-1" />;
}

/**
 * TOP BAR
 * Highlights active section.
 */
function TopBar({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-50 -mx-6 flex items-center justify-between border-b border-white/10 bg-black/25 px-6 py-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15" />
        <div>
          <p className="text-sm font-semibold">Marcos Tavarez</p>
          <p className="text-xs text-white/60">Full-Stack Developer</p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-sm sm:flex">
        <a className={`transition hover:text-white ${active === "projects" ? "text-white" : "text-white/70"}`} href="#projects">
          Projects
        </a>
        <a className={`transition hover:text-white ${active === "about" ? "text-white" : "text-white/70"}`} href="#about">
          About
        </a>
        <a className={`transition hover:text-white ${active === "contact" ? "text-white" : "text-white/70"}`} href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

/**
 * SCROLL PROGRESS
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-white/70" />;
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-white/70">{subtitle}</p>
    </div>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
      {children}
    </div>
  );
}

/**
 * PROJECT CARD
 * Includes "View details" to open the modal.
 */
function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  repoUrl,
  highlights,
  onDetails,
}: {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  highlights: string[];
  onDetails: () => void;
}) {
  const hasLive = liveUrl && liveUrl !== "#";
  const hasRepo = repoUrl && repoUrl !== "#";

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-white/70">{description}</p>

          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Pill key={t} text={t} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onDetails}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            View details <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href={hasLive ? liveUrl : undefined}
            aria-disabled={!hasLive}
            target={hasLive ? "_blank" : undefined}
            rel={hasLive ? "noreferrer" : undefined}
            className={`inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm transition ${
              hasLive ? "bg-white/5 text-white/90 hover:bg-white/10" : "cursor-not-allowed bg-white/5 text-white/35"
            }`}
          >
            Live <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={hasRepo ? repoUrl : undefined}
            aria-disabled={!hasRepo}
            target={hasRepo ? "_blank" : undefined}
            rel={hasRepo ? "noreferrer" : undefined}
            className={`inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm transition ${
              hasRepo ? "bg-white/5 text-white/90 hover:bg-white/10" : "cursor-not-allowed bg-white/5 text-white/35"
            }`}
          >
            Code <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{text}</span>;
}

function IconButton({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
    >
      {icon} {label}
    </a>
  );
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : "Copy Email"}
    </button>
  );
}

/**
 * PROJECT MODAL (MUST be outside Home)
 */
function ProjectModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button aria-label="Close modal" onClick={onClose} className="absolute inset-0 bg-black/70" type="button" />

      <div className="relative z-[81] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10]/95 shadow-2xl backdrop-blur">
        <div className="flex items-start justify-between border-b border-white/10 p-6">
          <div>
            <h3 className="text-xl font-semibold">Baggage Tracker — Case Study</h3>
            <p className="mt-1 text-sm text-white/65">Full-stack CRUD app with workflow status updates and REST API.</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-6">
          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white/90">What it does</h4>
              <p className="mt-2 text-sm text-white/70">
                Tracks baggage records end-to-end with searchable entries, status transitions, and a backend API backed
                by MongoDB.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white/90">Core Features</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Create / update / delete bag records with validation</li>
                <li>• Workflow status changes (Checked In → Loaded → Arrived)</li>
                <li>• API-driven UI states: loading, error, empty, success</li>
                <li>• Consistent REST responses + predictable frontend integration</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white/90">Architecture</h4>
              <p className="mt-2 text-sm text-white/70">
                React/Next UI → Fetch → API routes/Express-style handlers → MongoDB (Mongoose). Clear separation of UI,
                API, and data model concerns.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white/90">API Surface (example)</h4>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <p>
                  <span className="text-white/90">GET</span> /api/bags
                </p>
                <p>
                  <span className="text-white/90">POST</span> /api/bags
                </p>
                <p>
                  <span className="text-white/90">PUT</span> /api/bags/:id
                </p>
                <p>
                  <span className="text-white/90">DELETE</span> /api/bags/:id
                </p>
              </div>
              <p className="mt-3 text-xs text-white/50">(We can update these to match your exact backend routes.)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-6">
          <p className="text-xs text-white/50">Next upgrade: add screenshots + metrics + “tech decisions” section.</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 pt-8 text-sm text-white/60">
      <p>© {new Date().getFullYear()} Marcos Tavarez. Built with Next.js.</p>
    </footer>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const company = String(form.get("company") || "").trim(); // honeypot

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill out all fields.");
      return;
    }
    if (!email.includes("@")) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs text-white/70">Name</label>
          <input
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-xs text-white/70">Email</label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-white/70">Message</label>
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
          placeholder="Tell me what you're looking to build or the role you're hiring for..."
        />
      </div>

      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      {error ? (
        <p className="text-sm text-red-300">{error}</p>
      ) : status === "sent" ? (
        <p className="text-sm text-emerald-300">Message sent successfully.</p>
      ) : (
        <p className="text-xs text-white/50">This form is connected to your API route.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}