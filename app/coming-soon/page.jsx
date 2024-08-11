import React from "react";
import gify from "@/public/assets/ComingSoon/to-the-moon.gif";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
const page = () => {
  return (
    <section>
      <Header />
      <Floater />
      <BackWrapper />
      <div className="flex w-full flex-col px-[30px] sm:px-[50px] xl:px-[13vw]">
        <div className="flex w-full flex-col items-center justify-center">
          {/* Text  */}
          <div className="w-full justify-center bg-gradient-to-r from-grn via-accent to-grn bg-clip-text p-6 text-center text-clampheader font-[700] leading-8 text-transparent drop-shadow-hero xxl:text-[2.5vw]">
            Coming Soon!
          </div>
          <div>
            <Image
              alt="coming soon"
              height={350}
              width={350}
              src={gify}
            ></Image>
          </div>
          <div className="my-6">
            <Link href="/">
              <Button
                variant="outline"
                className="rounded-[30px] transition-all duration-500"
              >
                Go Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
