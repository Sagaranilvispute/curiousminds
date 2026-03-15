import Link from "next/link";

const stats = [
  { value: "42+", label: "hands-on learning journeys" },
  { value: "18+", label: "mentor-led guidance tracks" },
  { value: "96%", label: "student satisfaction" }
];

export function Hero() {
  return (
    <section className="relative pb-12">
      <div className="grid gap-7 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">A modern space for active learning</p>
          <h1 className="headline max-w-[10ch] text-[clamp(3.4rem,8vw,6.6rem)] leading-[0.96]">
            Education built for curiosity, not just completion.
          </h1>
          <p className="body-copy mt-5 max-w-2xl text-[1.05rem]">
            CuriousMinds helps students navigate careers, study abroad plans,
            trusted tutors, and playful math learning through guided discovery
            and clear next steps.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Link href="/contact" className="cta-primary">
              Start Learning
            </Link>
            <Link href="#services" className="cta-secondary">
              View Services
            </Link>
          </div>
          <div className="mt-8 grid gap-3.5 md:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="glass-panel rounded-[22px] border p-[18px]"
              >
                <strong className="block text-3xl font-bold text-teal">
                  {stat.value}
                </strong>
                <span className="text-sm leading-7 text-muted">{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="glass-panel relative overflow-hidden rounded-[32px] border p-8">
          <div className="orb -right-8 -top-6 h-[180px] w-[180px] bg-[radial-gradient(circle,rgba(246,194,97,0.9),rgba(246,194,97,0.1))]" />
          <div className="orb -bottom-24 -left-24 h-[220px] w-[220px] bg-[radial-gradient(circle,rgba(28,124,125,0.45),rgba(28,124,125,0.04))]" />
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-coralDeep">
            Learning Journey
          </p>
          <h2 className="headline mt-3 max-w-[9ch] text-[clamp(2.1rem,4vw,3rem)] leading-[0.98]">
            From questions to real projects
          </h2>
          <ul className="body-copy relative z-10 ml-5 mt-5 list-disc space-y-3">
            <li>Map future careers with practical roadmaps and mentor support.</li>
            <li>Plan study abroad goals with country, course, and visa guidance.</li>
            <li>Build confidence with tutors and math games that keep children engaged.</li>
          </ul>
          <div className="relative z-10 mt-7 inline-flex flex-col gap-1 rounded-[18px] bg-white/70 px-[18px] py-4">
            <span className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-muted">
              Featured this week
            </span>
            <strong className="text-ink">Global Futures Pathway</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
