"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "courses",
    path: "/courses",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "resources",
    path: "/resources",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-[6rem]">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "border-b-2 border-accent text-accent"} capitalize transition-all hover:text-accent xl:text-clamptextmd`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
