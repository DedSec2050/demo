"use client";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "courses",
    path: "/coming-soon",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "resources",
    path: "/coming-soon",
  },
];
const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <IoMenuSharp className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-20 text-left text-2xl text-accent-hover">
          Cybernous
        </div>
        <nav className="flex flex-col items-center justify-center gap-6">
          {links.map((link, index) => {
            // console.log(index);
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  key={index}
                  className={`${link.path === pathname && "border-b-2 border-accent text-accent"} text-md capitalize transition-all hover:text-accent`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
