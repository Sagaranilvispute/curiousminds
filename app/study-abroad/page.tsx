import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const steps = [
  {
    title: "University Fit",
    description:
      "Compare countries, courses, tuition, and scholarship opportunities with a structured shortlist."
  },
  {
    title: "Application Support",
    description:
      "Get help with statements of purpose, timelines, document readiness, and submission planning."
  },
  {
    title: "Visa Readiness",
    description:
      "Understand financial documents, interview preparation, and pre-departure checklists."
  }
];

export default function StudyAbroadPage() {
  return (
    <main className="space-y-7">
      <PageIntro
        eyebrow="Study Abroad"
        title="Global education, planned with care."
        description="CuriousMinds supports families and students through the full study abroad process, from university research to application strategy and visa preparation."
      />

      <section className="section-card bg-[linear-gradient(135deg,rgba(255,250,244,0.95),rgba(255,244,230,0.92))]">
        <div className="grid gap-[18px] md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="glass-panel rounded-[24px] border p-6"
            >
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-coralDeep">
                0{index + 1}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-ink">{step.title}</h2>
              <p className="body-copy mt-3">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/contact" className="cta-primary">
            Plan Your Application
          </Link>
        </div>
      </section>
    </main>
  );
}
