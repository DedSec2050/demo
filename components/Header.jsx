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
const Header = () => {
  return (
    <header className="w-[100%] py-3 text-white sm:px-[50px] xl:px-[8vw]">
      <div className="mx-auto flex items-center justify-between px-[1.5em] xxl:h-[10vh]">
        <div className="flex max-h-[150px] w-[18vw] max-w-[200px]">
          <Link href="/">
            <Image
              layout="responsive"
              src="/assets/cyberlg.webp"
              alt=""
              width={150}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Nav  */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="https://wa.me/+918595338705">
            <FaWhatsappSquare className="z-[40] ml-[3vw] h-[2vw] w-[2vw] text-green-500" />
          </Link>
          <Link href="https://www.youtube.com/@cybernous">
            <FaYoutube className="z-[40] ml-[3vw] h-[2vw] w-[2vw] text-red-500" />
          </Link>
          <Link href="https://www.linkedin.com/company/cybenrousinfosecconsulting">
            <BsLinkedin className="z-[40] ml-[3vw] h-[2vw] w-[2vw] overflow-hidden rounded-[3px] bg-white text-blue-500" />
          </Link>
        </div>
        <Link href="https://www.cybernous.com/login">
          <Button className="z-40 hidden w-[7rem] justify-around rounded-[1.3rem] hover:border-2 hover:border-accent hover:bg-transparent hover:text-white xl:flex xl:text-[17px] xxl:h-[4vh] xxl:w-[11vw] xxl:py-4 xxl:text-[1vw]">
            Sign-In
          </Button>
        </Link>
        {/* mobile navigation  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
