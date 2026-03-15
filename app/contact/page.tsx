export default function ContactPage() {
  return (
    <main className="space-y-7">
      <section className="section-card bg-white/55">
        <p className="eyebrow">Contact</p>
        <h1 className="headline max-w-[11ch] text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.98]">
          Let&apos;s plan the next step.
        </h1>
        <p className="body-copy mt-5 max-w-3xl text-lg">
          Reach out for career guidance, study abroad planning, tutor matching,
          or math learning support for children.
        </p>
      </section>

      <section className="section-card bg-[linear-gradient(135deg,rgba(28,124,125,0.1),rgba(255,255,255,0.72))]">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-panel rounded-[24px] border p-6">
            <h2 className="text-2xl font-bold text-ink">Get in touch</h2>
            <div className="body-copy mt-4 space-y-2">
              <p>Email: hello@curiousminds.edu</p>
              <p>Phone: +91 90000 00000</p>
              <p>Hours: Monday to Saturday, 9:00 AM to 6:00 PM</p>
            </div>
          </div>

          <form className="glass-panel grid gap-4 rounded-[24px] border p-6">
            <label className="grid gap-2 text-sm font-medium text-muted">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="min-h-[50px] rounded-2xl border bg-white/70 px-4 text-ink outline-none ring-0 transition focus:border-teal"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-muted">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="min-h-[50px] rounded-2xl border bg-white/70 px-4 text-ink outline-none ring-0 transition focus:border-teal"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-muted">
              Message
              <textarea
                placeholder="Tell us what support you need"
                rows={5}
                className="rounded-2xl border bg-white/70 px-4 py-3 text-ink outline-none ring-0 transition focus:border-teal"
              />
            </label>
            <button type="submit" className="cta-primary">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
