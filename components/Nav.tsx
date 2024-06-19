"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Work",
    href: "/work",
  },
];

const Nav = ({ direction }: { direction: "row" | "column" }) => {
  const pathname = usePathname();

  return (
    <nav className={`flex gap-8 ${direction === "column" ? "flex-col" : "*:"}`}>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`border-b-2 font-medium hover:text-accent transition-all ${
            pathname === link.href
              ? "text-accent border-accent"
              : "border-transparent"
          }`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
