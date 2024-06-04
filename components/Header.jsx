import Link from "next/link";
import { Button } from "./ui/button"

// components 
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-accent">
            Logo
          </h1>
        </Link>


        {/* Desktop Nav  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          
        </div>
        <Link href="/signin">
            <Button 
              className="hidden xl:flex rounded-[2rem]"
              size="lg"
              variant="outline"
            >
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
}

export default Header;
