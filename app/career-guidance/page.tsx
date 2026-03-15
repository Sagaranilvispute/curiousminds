import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const pathways = [
  "Career interest mapping for secondary and college students",
  "Skill-gap analysis with subject and activity recommendations",
  "Portfolio, resume, and interview preparation for early applicants"
];

export default function CareerGuidancePage() {
  return (
    <main className="space-y-7">
      <PageIntro
        eyebrow="Career Guidance"
        title="Clarity for the path ahead."
        description="We help students identify strengths, explore future roles, and build a practical roadmap toward careers that match their interests and abilities."
      />

      <section className="section-card bg-white/45">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="headline text-4xl leading-tight">What students get</h2>
            <ul className="body-copy mt-5 ml-5 list-disc space-y-3">
              {pathways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-[24px] border p-6">
            <p className="eyebrow">Outcome</p>
            <h3 className="text-2xl font-bold text-ink">
              Stronger decisions with less guesswork
            </h3>
            <p className="body-copy mt-3">
              Students leave with clear next actions, target career clusters,
              and an academic plan that feels achievable.
            </p>
            <Link href="/contact" className="cta-primary mt-6">
              Request Guidance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
