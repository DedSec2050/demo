import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="w-[100%] py-3 text-white sm:px-[50px] xl:px-[12vw]">
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
          <Link href="/">
            <FaWhatsappSquare className="z-[40] ml-[3vw] h-[2vw] w-[2vw] text-green-500" />
          </Link>
        </div>
        <Link href="/signin">
          <Button
            className="z-40 hidden w-[8rem] justify-around rounded-[2rem] text-white hover:bg-accent xl:flex xxl:h-[4vh] xxl:w-[11vw] xxl:py-4 xxl:text-[1vw]"
            size="lg"
            variant="outline"
          >
            Sign-In <FaArrowRightLong />
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
