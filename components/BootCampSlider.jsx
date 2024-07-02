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
          {/* <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5355 32.302C21.2307 32.302 21.8183 32.062 22.2983 31.582C22.7783 31.102 23.0183 30.5144 23.0183 29.8192C23.0183 29.124 22.7783 28.5364 22.2983 28.0563C21.8183 27.5763 21.2307 27.3363 20.5355 27.3363C19.8403 27.3363 19.2527 27.5763 18.7727 28.0563C18.2926 28.5364 18.0526 29.124 18.0526 29.8192C18.0526 30.5144 18.2926 31.102 18.7727 31.582C19.2527 32.062 19.8403 32.302 20.5355 32.302ZM18.7478 24.6548H22.4225C22.4225 23.5624 22.5466 22.7017 22.7949 22.0727C23.0432 21.4437 23.7467 20.5829 24.9053 19.4905C25.766 18.6298 26.4447 17.8104 26.9413 17.0325C27.4378 16.2545 27.6861 15.3193 27.6861 14.2268C27.6861 12.373 27.0075 10.9495 25.6502 9.95633C24.2929 8.96319 22.6873 8.46662 20.8334 8.46662C18.9465 8.46662 17.4154 8.96319 16.2402 9.95633C15.0649 10.9495 14.2456 12.1412 13.7821 13.5316L17.0595 14.8227C17.225 14.2268 17.5975 13.5813 18.1768 12.8861C18.7561 12.1909 19.6417 11.8433 20.8334 11.8433C21.8928 11.8433 22.6873 12.133 23.217 12.7123C23.7467 13.2916 24.0115 13.9289 24.0115 14.6241C24.0115 15.2862 23.8129 15.9069 23.4156 16.4862C23.0184 17.0656 22.5218 17.6035 21.9259 18.1001C20.4693 19.3912 19.5755 20.3678 19.2444 21.0299C18.9134 21.692 18.7478 22.9003 18.7478 24.6548ZM20.6348 40.2472C17.8871 40.2472 15.3049 39.7258 12.8883 38.683C10.4717 37.6402 8.36951 36.2249 6.58185 34.4373C4.7942 32.6496 3.37897 30.5475 2.33617 28.1308C1.29337 25.7142 0.771973 23.132 0.771973 20.3843C0.771973 17.6366 1.29337 15.0545 2.33617 12.6378C3.37897 10.2212 4.7942 8.11902 6.58185 6.33136C8.36951 4.54371 10.4717 3.12848 12.8883 2.08568C15.3049 1.04288 17.8871 0.521484 20.6348 0.521484C23.3825 0.521484 25.9647 1.04288 28.3813 2.08568C30.798 3.12848 32.9001 4.54371 34.6878 6.33136C36.4754 8.11902 37.8906 10.2212 38.9334 12.6378C39.9762 15.0545 40.4976 17.6366 40.4976 20.3843C40.4976 23.132 39.9762 25.7142 38.9334 28.1308C37.8906 30.5475 36.4754 32.6496 34.6878 34.4373C32.9001 36.2249 30.798 37.6402 28.3813 38.683C25.9647 39.7258 23.3825 40.2472 20.6348 40.2472ZM20.6348 36.2746C25.0708 36.2746 28.8282 34.7352 31.907 31.6565C34.9857 28.5777 36.5251 24.8204 36.5251 20.3843C36.5251 15.9483 34.9857 12.1909 31.907 9.11216C28.8282 6.03342 25.0708 4.49405 20.6348 4.49405C16.1988 4.49405 12.4414 6.03342 9.36265 9.11216C6.28391 12.1909 4.74454 15.9483 4.74454 20.3843C4.74454 24.8204 6.28391 28.5777 9.36265 31.6565C12.4414 34.7352 16.1988 36.2746 20.6348 36.2746Z"
              fill="#FFD600"
              fill-opacity="0.933333"
            />
          </svg> */}

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
