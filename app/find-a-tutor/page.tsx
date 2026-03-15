import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const tutorTypes = [
  {
    title: "Language Tutors",
    description:
      "Build fluency in English and other languages with conversation, grammar, and confidence practice."
  },
  {
    title: "Subject Mentors",
    description:
      "Receive focused help in school subjects from tutors who adapt to each learner's pace."
  },
  {
    title: "Children's Math Support",
    description:
      "Combine foundational instruction with games and short challenges that make practice stick."
  }
];

export default function FindATutorPage() {
  return (
    <main className="space-y-7">
      <PageIntro
        eyebrow="Find a Tutor"
        title="Support that meets students where they are."
        description="Our tutoring programs are designed for clarity, consistency, and encouragement so learners can improve without feeling overwhelmed."
      />

      <section className="section-card bg-white/45">
        <div className="grid gap-[18px] md:grid-cols-3">
          {tutorTypes.map((tutor) => (
            <article
              key={tutor.title}
              className="glass-panel rounded-[24px] border p-6"
            >
              <h2 className="text-2xl font-bold text-ink">{tutor.title}</h2>
              <p className="body-copy mt-3">{tutor.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link href="/contact" className="cta-primary">
            Match Me With a Tutor
          </Link>
          <Link href="/" className="cta-secondary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
