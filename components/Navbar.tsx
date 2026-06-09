import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/Logo.png"
          alt="Adaptive Minds Logo"
          width={120}
          height={120}
          className="object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-ink">
          Adaptive Minds
        </span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/career-guidance">Career Guidance</Link>
        <Link href="/study-abroad">Study Abroad</Link>
        <Link href="/find-a-tutor">Tutors</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  );
}