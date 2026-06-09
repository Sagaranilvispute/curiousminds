import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Logo.png"
        alt="Adaptive Minds Logo"
        width={180}
        height={180}
        className="cursor-pointer object-contain"
      />
    </Link>
  );
}