import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <Image
          src="/Logo.png"
          alt="Adaptive Minds Logo"
          width={180}
          height={180}
          className="object-contain"
        />
        <span className="text-2xl font-semibold text-ink">
          Adaptive Minds
        </span>
      </div>

    </nav>
  );
}