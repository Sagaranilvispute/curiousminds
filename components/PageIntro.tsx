type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-card bg-white/55">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="headline max-w-[12ch] text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.98]">
        {title}
      </h1>
      <p className="body-copy mt-5 max-w-3xl text-lg">{description}</p>
    </section>
  );
}
