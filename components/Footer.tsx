import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 px-2 pb-3 pt-7 text-sm text-muted md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-bold text-ink">CuriousMinds</p>
        <span>Learn deeply. Build boldly. Stay curious.</span>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/career-guidance" className="hover:text-ink">
          Career Guidance
        </Link>
        <Link href="/study-abroad" className="hover:text-ink">
          Study Abroad
        </Link>
        <Link href="/find-a-tutor" className="hover:text-ink">
          Tutors
        </Link>
        <Link href="/contact" className="hover:text-ink">
          Contact
        </Link>
      </div>
    </footer>
  );
}
