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
      className={`testimonial-card flex-grow-2 [&:hover>] m-4 flex min-h-[20rem] w-[18rem] max-w-[40rem] transform flex-col items-center justify-center rounded-lg bg-elevated p-6 text-accent shadow-lg drop-shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-blue-600 sm:w-[20rem] [&:hover>Button]:bg-blue-700 [&:hover>Button]:text-black [&:hover>div>div>span]:text-black [&:hover>div>ul>li>span]:text-blue-600 [&:hover>div>ul]:text-black`}
    >
      <div className="item flex w-[100%] flex-row justify-around gap-[10%]">
        <div className="flex items-center">
          <FaRegCalendarAlt className="h-[2rem] w-[2rem]" />
        </div>
        <div className="text-center">
          <span className="text-center text-clamptextsm font-bold text-white">
            100 Days Success Plan($250)
          </span>
        </div>
      </div>
      <div className="flex flex-col py-4">
        <ul className="flex-grow-2 flex flex-col gap-4 text-center font-medium text-white hover:text-black">
          <li className="text-clamptextsm">
            <span className="italic text-accent">Adaptive plan</span> to meet
            your learning pace.
          </li>
          <li className="text-clamptextsm">
            <span className="italic text-accent">2 Hours</span> per day at your
            own ease.
          </li>
          <li className="text-clamptextsm">
            Learn <span className="italic text-accent">without</span> getting
            overwhelmed.
          </li>
          <li className="text-clamptextsm">
            Includes <span className="italic text-accent">Revision</span> Days
          </li>
        </ul>
      </div>
      <Button
        variant="outline"
        className="mx-auto mb-2 mt-8 w-[11rem] justify-around rounded-full"
      >
        Explore More
        <FaArrowRightLong />
      </Button>
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
    <div div className="flex flex-col">
      <div className="text-center text-clamptitle font-bold">
        <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
          Why CISSP Success
        </span>{" "}
        <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
          Toolkit ?
        </span>
      </div>
      <div className="testimonial-section relative py-12">
        <button
          onClick={() => scroll(-320)}
          className="absolute bottom-60 left-1 z-10 rounded-full bg-gray-600 p-2 text-white hover:bg-blue-700 focus:outline-none"
        >
          <MdKeyboardArrowLeft className="text-[50px]" />
        </button>
        <button
          onClick={() => scroll(320)}
          className="absolute bottom-60 right-1 z-10 rounded-full bg-gray-600 p-2 text-white hover:bg-blue-700 focus:outline-none"
        >
          <MdKeyboardArrowRight className="text-[50px]" />
        </button>

        <div
          ref={scrollRef}
          className="z-2 no-scrollbar flex snap-x snap-mandatory items-center overflow-x-auto scroll-smooth px-8"
        >
          <div className="flex snap-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="mx-auto mb-8 mt-8 w-[12rem] justify-around rounded-full p-4 sm:w-[19rem]"
      >
        Get Much More...
        <FaArrowRightLong />
      </Button>
    </div>
  );
};

export default Page3;
