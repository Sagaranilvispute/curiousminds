import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/career-guidance", label: "Career Guidance" },
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/find-a-tutor", label: "Find a Tutor" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="pb-10 pt-3">
      <nav className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="inline-flex">
          <Logo />
        </Link>

        <div className="flex flex-wrap gap-4 text-sm font-medium text-muted md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
