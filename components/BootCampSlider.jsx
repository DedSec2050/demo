"use client";

import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { FaRegCalendarAlt } from "react-icons/fa";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Button } from "./ui/button";

const Card = () => {
  return (
    <div
      className={`testimonial-card flex-grow-2 flex min-h-[270px] w-[18rem] min-w-[270px] transform flex-col items-center justify-center rounded-[10%] bg-elevated p-6 text-accent shadow-[0px_0px_20px_15px_#FFD600] transition-transform duration-200 hover:scale-105 hover:bg-[#E5CF5F] hover:text-black hover:shadow-[0px_0px_13px_11px_#FFD600] hover:drop-shadow-xl md:h-[18rem] md:w-[18rem] xxl:h-[26vw] xxl:w-[26vw] xxl:rounded-[8%] xxl:shadow-[0px_0px_35px_20px_#FFD600] hover:xxl:shadow-[0px_0px_15px_9px_#FFD600] [&:hover>div>div>span]:text-black [&:hover>div>div]:text-black [&:hover>div]:text-black`}
    >
      <div className="flex w-full justify-evenly">
        <div className="flex items-center">
          <FaRegCalendarAlt className="h-[2rem] w-[2rem]" />
        </div>
        <div>
          <span className="text-center text-[15px] font-bold text-white">
            Individual Mentorship
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex w-[70%] text-center font-medium text-white">
          Get personal mentorship from our CISSP Certified trainer
        </div>
      </div>
      {/* <div className="item flex w-[100%] flex-row justify-around gap-[10%]">
        <div className="flex items-center">
          <FaRegCalendarAlt className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem] xxl:h-[4vw] xxl:w-[4vw]" />
        </div>
        <div className="text-center">
          <span className="text-center text-clamptextsm font-bold text-white md:leading-4 lg:text-clamptextsmm xxl:text-[2vw] xxl:leading-[70px]">
            Individual Mentorship
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex w-[70%] text-center font-medium text-white md:py-[40px] md:text-[1.3vw] xxl:text-[1.4vw]">
          Get personal mentorship from our CISSP Certified trainer
        </div>
      </div> */}
    </div>
  );
};
const Page3 = () => {
  // Here starts custom slider
  const scrollRef = useRef(null);
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behaviour: "smooth" });
  };

  return (
    <div div className="mt-8 flex flex-col">
      <div className="text-center text-clamptitle font-bold xxl:text-[2vw]">
        <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
          Key Features of CISSP
        </span>{" "}
        <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
          Success Toolkit ?
        </span>
      </div>
      <div className="testimonial-section relative flex items-center justify-center py-12">
        <div className="grid grid-cols-1 content-center items-center justify-center gap-y-[70px] md:grid-cols-2 md:gap-x-[70px] xl:grid-cols-3 xl:gap-x-[70px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Button
        variant="outline"
        className="mx-auto mb-8 mt-8 w-[12rem] justify-around rounded-full p-4 sm:w-[19rem] xxl:h-[3.5vw] xxl:w-[18vw] xxl:text-[1.2vw]"
      >
        Get Much More...
        <FaArrowRightLong />
      </Button>
    </div>
  );
};

export default Page3;
