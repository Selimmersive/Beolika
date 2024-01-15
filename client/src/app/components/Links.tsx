"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links({ links, classActive }: { links: { href: string; title: string; className: string }[]; classActive: string }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link key={index} href={link.href} className={`${pathname === link.href ? classActive : link.className}`}>
          {link.title}
        </Link>
      ))}
    </>
  );
}
