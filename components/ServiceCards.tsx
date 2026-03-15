import Link from "next/link";

type Service = {
  index: string;
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    index: "01",
    title: "Career Guidance",
    description:
      "Career maps, skill assessments, and real-world planning for students choosing their next step.",
    href: "/career-guidance"
  },
  {
    index: "02",
    title: "Study Abroad",
    description:
      "Support for country selection, universities, applications, statements, and visa preparation.",
    href: "/study-abroad"
  },
  {
    index: "03",
    title: "Find a Tutor",
    description:
      "Connect with language tutors and subject mentors who teach clearly and adapt to each learner.",
    href: "/find-a-tutor"
  },
  {
    index: "04",
    title: "Math Learning Games",
    description:
      "Playful activities for children that build number sense, speed, and confidence without pressure.",
    href: "/contact"
  }
];

export function ServiceCards() {
  return (
    <section id="services" className="section-card mt-7 bg-[linear-gradient(135deg,rgba(255,250,244,0.95),rgba(255,244,230,0.92))]">
      <div className="max-w-3xl">
        <p className="eyebrow">Services</p>
        <h2 className="headline text-[clamp(2.2rem,5vw,4rem)] leading-[0.98]">
          Designed for broad, joyful learning.
        </h2>
        <p className="body-copy mt-4">
          CuriousMinds combines guidance, tutoring, and interactive learning so
          students can move from uncertainty to clarity with steady support.
        </p>
      </div>

      <div className="mt-7 grid gap-[18px] lg:grid-cols-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass-panel rounded-[24px] border p-6"
          >
            <span className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-coralDeep">
              {service.index}
            </span>
            <h3 className="mt-3 text-xl font-bold text-ink">{service.title}</h3>
            <p className="body-copy mt-3">{service.description}</p>
            <Link
              href={service.href}
              className="mt-5 inline-flex text-sm font-bold text-teal hover:text-coralDeep"
            >
              Explore service
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
