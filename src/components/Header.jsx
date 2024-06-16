"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header class="flex flex-row items-center h-full w-full mx-auto py-1 text-lg justify-between px-6 bg-slate-800 text-gray-200">
        <div class="flex gap-3">
          <Image src="/logo.svg" alt="logo" width={160} height={160} />
        </div>
        <nav>
          <ul class="flex flex-row gap-6 text-[#D1A103]">
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/crews"
                className={pathname === "/crews" ? "active" : ""}
              >
                Crews
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
