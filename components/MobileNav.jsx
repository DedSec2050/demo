"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci';


const links = [
    {
        name: 'home',
        path: '/'
    },    
    {
        name: 'courses',
        path: '/courses'
    },    
    {
        name: 'blog',
        path: '/blog'
    },    
    {
        name: 'resources',
        path: '/resources'
    },    
]
const MobileNav = () => {
    const pathname = usePathname();

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mb-20 text-left text-2xl text-accent-hover">logo</div>
            <nav className="flex flex-col justify-center items-center gap-6">
                {links.map((link, index)=>{
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-md capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
