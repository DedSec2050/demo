"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resources",
    path: "/resources",
  },
  {
    name: "blog",
    path: "/blog",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="z-40 flex gap-[6rem]">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "border-b-2 border-accent text-accent"} text-clamptextsm uppercase transition-all hover:text-accent xxl:text-clamptextnav`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
