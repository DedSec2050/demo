import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="w-[100%] py-2 text-white xl:py-4">
      <div className="mx-auto flex items-center justify-between px-[1.5em]">
        <div className="flex max-h-[150px] max-w-[256px]">
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
        </div>
        <Link href="/signin">
          <Button
            className="hidden w-[12rem] justify-around rounded-[2rem] xl:flex"
            size="lg"
            variant="outline"
          >
            Sign-In
            <FaArrowRightLong />
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
