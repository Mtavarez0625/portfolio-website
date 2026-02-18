export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
            <div className="text-sm font-semibold text-white/85">
              Marcos Tavarez
            </div>
            <div className="mt-1 text-xs text-white/50">
              © {year} • Built with Next.js + TypeScript • Deployed on Vercel
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href="https://www.linkedin.com/in/marcos-tavarez"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 hover:text-white hover:border-white/20 transition"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Mtavarez0625"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 hover:text-white hover:border-white/20 transition"
            >
              GitHub ↗
            </a>

            <a
              href="/resume/Marcos_Tavarez_FullStack_Developer_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 hover:text-white hover:border-white/20 transition"
            >
              Resume ↗
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-white/80 hover:bg-white/15 hover:border-white/25 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
