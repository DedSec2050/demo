import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="flex-grow-1 flex w-full flex-col items-center justify-center bg-gradient-to-r from-[#FF9933] via-[#FFF] to-[#128807] text-[0.7rem] font-semibold text-black md:flex-row md:px-0 md:text-[1.2rem]">
      <div className="py-1 text-center font-bold text-red-600">
        INDEPENDENCE DAY OFFER{" "}
        <Button
          variant=""
          className="pointer-events-none mx-2 px-4 py-4 transition-all duration-500 hover:text-black"
        >
          {" "}
          <Link href="\" className="font-bold md:text-[1.2rem]">
            Use Coupon Code 'INDEPENDENCE'
          </Link>
        </Button>{" "}
        <Button
          variant=""
          className="mx-2 mt-2 rounded-[30px] bg-[#f54943] px-4 py-4 text-white transition-all duration-500 hover:text-black sm:mt-0"
        >
          {" "}
          <Link
            href="https://www.cybernous.com/courses/mission-cissp-bundle/buy"
            className="text-[1.2rem] font-bold"
          >
            Claim Now!
          </Link>
        </Button>{" "}
      </div>

      <div className="hidden items-center justify-center gap-4 rounded-[10px] lg:flex">
        <div className="ml-4 flex w-full min-w-[250px] translate-y-[0px] flex-row items-center justify-between">
          <Link
            href="https://chat.whatsapp.com/GUnUOJtxzD7DrGu1YlUDCd"
            className=""
          >
            <Button
              className="mt-[2px] translate-y-[3px] gap-x-4 rounded-[30px] border-[2px] border-[#f54943] font-bold text-black transition-all duration-500 hover:text-black"
              variant="outline"
            >
              <FaWhatsappSquare className="z-[40] h-[2vw] w-[2vw] text-green-500" />
              <span>Join CISSP study Group</span>
            </Button>
          </Link>
          <div className="flex items-center gap-[0]">
            <IoCall className="z-[40] ml-[1vw] h-[2vw] w-[2vw] rotate-[25deg] text-blue-600" />
            <span>+91 8595338705</span>
          </div>
          <Link href="https://www.youtube.com/@cybernous">
            <FaYoutube className="z-[40] ml-[2vw] h-[3vw] w-[3vw] text-red-600" />
          </Link>
          <Link href="https://www.linkedin.com/company/cybenrousinfosecconsulting">
            <BsLinkedin className="z-[40] ml-[3vw] h-[2.3vw] w-[2.3vw] overflow-hidden rounded-[3px] bg-white text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
