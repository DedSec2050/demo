import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Timer from "./Timer";
const countdownDate = new Date("2024-05-19T23:18:07");
const Banner = () => {
  return (
    <section className="flex-grow-1 w-full flex-col items-center justify-center bg-matteblue text-[0.7rem] font-semibold text-black sm:flex md:flex-row md:px-0 md:text-[1.2rem]">
      <div className="py-1 text-center font-bold text-white">
        Enrolments open for Batch-37
        <Button
          variant=""
          className="mx-2 h-[20px] bg-accent px-2 py-0 text-black transition-all duration-500 hover:text-white sm:mt-0 sm:px-4 sm:py-4 md:h-[44px]"
        >
          {" "}
          <Link
            href="https://courses.cybernous.com/courses/cissp-success-toolkit/buy"
            className="font-bold sm:text-[1.2rem]"
          >
            Enroll Now!
          </Link>
        </Button>{" "}
      </div>

      <div className="hidden items-center justify-center gap-4 rounded-[10px] xl:flex">
        <div className="ml-4 flex w-full min-w-[250px] translate-y-[0px] flex-row items-center justify-between">
          <Link
            href="https://chat.whatsapp.com/GUnUOJtxzD7DrGu1YlUDCd"
            className=""
          >
            <Button
              className="mt-[2px] translate-y-[3px] gap-x-4 rounded-[30px] border-[2px] border-accent font-bold transition-all duration-500 hover:text-black"
              variant="outline"
            >
              <FaWhatsappSquare className="z-[40] h-[2vw] w-[2vw] text-green-500" />
              <span>Join CISSP study Group</span>
            </Button>
          </Link>
          <div className="flex items-center gap-[0]">
            <IoCall className="z-[40] ml-[1vw] h-[2vw] w-[2vw] rotate-[25deg] text-blue-600" />
            <span className="text-white">+91 8595338705</span>
          </div>
          <div className="flex">
            <Timer deadline={countdownDate} title={"discount ends"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
