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
      className={`testimonial-card flex-grow-2 m-4 flex min-h-[20rem] w-[18rem] max-w-[40rem] transform flex-col items-center justify-center rounded-[10%] bg-elevated p-6 text-accent shadow-lg drop-shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-[#E5CF5F] hover:text-black hover:shadow-lg hover:drop-shadow-xl sm:w-[20rem] md:h-[24vw] md:w-[24vw] xxl:h-[26vw] xxl:w-[26vw] xxl:rounded-[8%] [&:hover>div>div>span]:text-black [&:hover>div>div]:text-black [&:hover>div]:text-black`}
    >
      <div className="item flex w-[100%] flex-row justify-around gap-[10%]">
        <div className="flex items-center">
          <FaRegCalendarAlt className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] xxl:h-[4vw] xxl:w-[4vw]" />
        </div>
        <div className="text-center">
          <span className="text-center text-clamptextsm font-bold text-white md:text-clamptextsmm md:leading-4 xxl:text-[2vw] xxl:leading-[70px]">
            Individual Mentorship
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex w-[70%] text-center font-medium text-white md:py-[40px] md:text-[1.3vw] xxl:text-[1.4vw]">
          Get personal mentorship from our CISSP Certified trainer
        </div>
      </div>
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
      <div className="testimonial-section relative mx-[8vw] flex items-center justify-center py-12 md:mx-[2vw]">
        <button
          onClick={() => scroll(-320)}
          className="bottom-100 absolute left-1 z-10 hidden rounded-full bg-gray-600 p-2 text-white hover:bg-blue-700 focus:outline-none xl:flex"
        >
          <MdKeyboardArrowLeft className="text-[50px] xxl:text-[100px]" />
        </button>
        <button
          onClick={() => scroll(320)}
          className="bottom-100 absolute right-1 z-10 hidden rounded-full bg-gray-600 p-2 text-white hover:bg-blue-700 focus:outline-none xl:flex"
        >
          <MdKeyboardArrowRight className="text-[50px] xxl:text-[100px]" />
        </button>

        <div
          ref={scrollRef}
          className="z-2 no-scrollbar flex snap-x snap-mandatory items-center overflow-x-auto scroll-smooth md:mx-[1vw] xl:mx-[2vw] xxl:mx-[2vw]"
        >
          <div className="flex snap-center items-center justify-center">
            <div className="flex flex-col gap-[2vw] p-[2vh] xxl:p-[4vh]">
              <Card />
              <Card />
            </div>
            <div className="flex flex-col gap-[2vw] p-[2vh] xxl:p-[4vh]">
              <Card />
              <Card />
            </div>
            <div className="flex flex-col gap-[2vw] p-[2vh] xxl:p-[4vh]">
              <Card />
              <Card />
            </div>
          </div>
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
