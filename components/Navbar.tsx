import Image from "next/image";

export function Navbar() {
return ( <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">

  {/* Logo */}
  <div className="flex flex-col items-center md:items-start">
    <a href="/">
      <Image
        src="/Logo.png"
        alt="Adaptive Minds Logo"
        width={120}
        height={120}
      />
    </a>

    <p className="font-bold text-lg mt-2">
      Adaptive Minds
    </p>
  </div>

  {/* Menu */}
  <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
    <a href="/">Home</a>
    <a href="/career-guidance">Career Guidance</a>
    <a href="/study-abroad">Study Abroad</a>
    <a href="/find-a-tutor">Tutors</a>
    <a href="/contact">Contact</a>
  </div>

</div>
);
}
