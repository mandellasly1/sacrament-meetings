"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/meetings", label: "Meetings" },
  ];

  return (
    <nav className="flex gap-4">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "font-bold text-brand" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
