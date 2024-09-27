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
    <nav className="z-40 flex gap-[2rem]">
      {links.map((link, index) => {
        return (
          <Link
            prefetch={false}
            href={link.path}
            key={index}
            className={`${link.path === pathname && "border-b-2 border-accent text-accent"} text-clamptextsm font-bold capitalize transition-all hover:text-accent xl:px-4 xl:text-[1.3rem] xxl:text-clamptextnav`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
