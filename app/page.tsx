import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";

const highlights = [
  {
    title: "Interactive Paths",
    description:
      "Short themed pathways help students connect interests, skills, and academic choices."
  },
  {
    title: "Mentor Feedback",
    description:
      "Practical support from tutors and advisors keeps progress visible and decisions grounded."
  },
  {
    title: "Showcase Moments",
    description:
      "Students present plans, projects, and goals with more clarity and confidence."
  }
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiceCards />

      <section className="section-card mt-7 bg-white/45">
        <div className="grid gap-7 lg:grid-cols-2 lg:items-start">
          <div className="max-w-2xl">
            <p className="eyebrow">Discover</p>
            <h2 className="headline text-[clamp(2.2rem,5vw,4rem)] leading-[0.98]">
              A platform that keeps learners moving.
            </h2>
            <p className="body-copy mt-4">
              The CuriousMinds experience alternates between exploration,
              practice, and guidance so students can learn actively instead of
              feeling stuck in passive study routines.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="glass-panel rounded-[24px] border px-6 py-5"
              >
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="body-copy mt-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card mt-7 bg-[linear-gradient(135deg,rgba(28,124,125,0.1),rgba(255,255,255,0.72))]">
        <div className="grid gap-[18px] lg:grid-cols-3">
          <article className="glass-panel rounded-[24px] border p-6">
            <p className="text-lg leading-7 text-ink">
              "Career planning finally felt understandable. I could see what to
              study and why it mattered."
            </p>
            <span className="mt-4 block text-sm text-muted">Secondary student</span>
          </article>
          <article className="glass-panel rounded-[24px] border p-6">
            <p className="text-lg leading-7 text-ink">
              "The study abroad guidance was structured, realistic, and much
              easier to follow than scattered online advice."
            </p>
            <span className="mt-4 block text-sm text-muted">Parent</span>
          </article>
          <article className="rounded-[24px] border border-transparent bg-gradient-to-br from-coral to-coralDeep p-6 text-white shadow-glow">
            <p className="text-lg leading-7">
              "My son kept playing the math challenges and didn&apos;t realize
              how much practice he was getting."
            </p>
            <span className="mt-4 block text-sm text-white/80">CuriousMinds family</span>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link href="/contact" className="cta-primary">
            Book a Consultation
          </Link>
          <Link href="/find-a-tutor" className="cta-secondary">
            Meet Our Tutors
          </Link>
        </div>
      </section>
    </main>
  );
}
