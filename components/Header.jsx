import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import More from "./More";
const Header = () => {
  return (
    <header className="w-[100%] py-3 text-white sm:px-[50px] xl:px-[8vw]">
      <div className="mx-auto flex items-center justify-between px-[1.5em] xxl:h-[10vh]">
        <div className="flex h-[40px] w-[150px] max-w-[250px] xl:h-[60px] xl:w-[240px]">
          <Link href="/">
            <Image
              src="/assets/cyberlg.webp"
              alt="cybernous logo"
              width={250}
              height={130}
              className="h-[50px] w-[150px] xl:h-[60px] xl:w-[200px]"
            />
          </Link>
        </div>

        {/* Desktop Nav  */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <More />

          <Link href="https://courses.cybernous.com/login" prefetch={false}>
            <Button className="z-40 hidden w-[7rem] justify-around rounded-[1.3rem] hover:border-2 hover:border-accent hover:bg-transparent hover:text-white xl:flex xl:text-[17px] xxl:h-[4vh] xxl:w-[11vw] xxl:py-4 xxl:text-[1vw]">
              Sign-In
            </Button>
          </Link>
        </div>

        {/* mobile navigation  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
