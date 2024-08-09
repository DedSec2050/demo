import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-banner px-10 text-[0.7rem] md:flex-row md:px-0 md:text-[1.2rem]">
      <div className="py-1 text-center">
        UP TO <span className="text-accent">50%</span> OFF on Combo Courses!
        <Link
          href="/"
          className="font-semibold text-accent hover:text-accent-hover"
        >
          {" "}
          CLAIM NOW
        </Link>
      </div>
      <div className="pb-1 text-center md:ml-6">
        Whatsapp Us: +91 85953 38705
      </div>
      <div className="ml-6 hidden items-center justify-center gap-4 rounded-[10px] px-2 text-[1.2rem] lg:flex">
        <div className="flex w-full translate-y-[-2px]">Get CISSP Updates</div>
        <Input className="h-8" type="email" placeholder="Email" />
        <Button className="h-8 transition-all duration-500" type="submit">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default Banner;
