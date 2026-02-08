"use client";

import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          ok: false,
          message: data?.error || "Something went wrong. Please try again.",
        });
      } else {
        setStatus({ ok: true, message: data?.message || "Message sent!" });
        e.currentTarget.reset();
      }
    } catch {
      setStatus({ ok: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Contact
          </h2>
          <p className="mt-3 text-white/70">
            Want to collaborate or talk about an opportunity? Let’s connect.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl bg-black/35 border border-white/10 px-4 py-3 text-white outline-none transition
                             focus:border-white/25 focus:ring-2 focus:ring-white/10"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl bg-black/35 border border-white/10 px-4 py-3 text-white outline-none transition
                             focus:border-white/25 focus:ring-2 focus:ring-white/10"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-xl bg-black/35 border border-white/10 px-4 py-3 text-white outline-none transition resize-none
                             focus:border-white/25 focus:ring-2 focus:ring-white/10"
                  placeholder="Tell me what you’re building…"
                />
              </div>

              <button
                disabled={loading}
                className="w-full rounded-xl bg-white text-black font-semibold py-3.5 tracking-wide transition
                           hover:bg-white/90 disabled:opacity-50 disabled:hover:bg-white
                           focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {loading ? "Sending..." : "Send message"}
              </button>

              {status && (
                <div
                  className={[
                    "rounded-xl border px-4 py-3 text-sm",
                    status.ok
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                      : "border-red-400/25 bg-red-400/10 text-red-200",
                  ].join(" ")}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact “bar” card */}
          <aside className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-white/70">
                Quick info
              </h3>
              <span className="text-xs text-white/45">Usually replies fast</span>
            </div>

            <p className="mt-4 text-white/70">
              I’m open to full-time roles and freelance projects. If you’re
              hiring, I’ll reply fast.
            </p>

            <div className="mt-8 space-y-5">
              <InfoRow label="Email" value="Mtavarez0625@gmail.com" />
              <InfoRow label="Location" value="Charlotte, NC • Remote-friendly" />
              <InfoRow
                label="Availability"
                value="Open to full-time opportunities"
              />
            </div>
          </aside>
        </div>

        {/* Extra breathing room */}
        <div className="h-10" />
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:bg-black/25">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
        {label}
      </div>
      <div className="mt-1 text-white/85">{value}</div>
    </div>
  );
}