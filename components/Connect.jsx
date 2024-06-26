import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import udemy from "../public/assets/Icons/udemy.webp";
import youtube from "../public/assets/Icons/youtube.webp";
import linkedin from "../public/assets/Icons/linkedin.webp";
import { urls, desc } from "./data/Page8";

const btnlist = [
  {
    data: "LinkedIn",
    icon: linkedin,
  },
  {
    data: "Udemy",
    icon: udemy,
  },
  {
    data: "YouTube",
    icon: youtube,
  },
];

const Connect = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center py-8">
      <h1 className="mt-7 text-center text-clamptitle xxl:text-[2.5vw]">
        <strong>
          <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
            Connect with your
          </span>{" "}
          <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
            coach
          </span>
        </strong>
      </h1>
      <div className="flex w-full flex-col items-center justify-around lg:flex-row">
        <div className="relative mt-8 aspect-video h-[12rem] min-h-[12rem] w-[15rem] min-w-[252px] overflow-hidden rounded-[30px] border-4 border-accent bg-gray-600 md:max-w-[750px] lg:h-[39vh] lg:max-h-[560px] lg:min-h-[219px] lg:w-[39vw] lg:min-w-[418px]">
          <Image
            src="/assets/trainerConnect.webp"
            priority
            fill
            objectFit="cover"
            quality={50}
            alt=""
          />
        </div>
        <div className="relative mt-8 aspect-video h-[12rem] min-h-[12rem] w-[15rem] min-w-[252px] overflow-hidden rounded-[30px] border-4 border-accent bg-gray-600 md:max-w-[750px] lg:h-[39vh] lg:max-h-[560px] lg:min-h-[219px] lg:w-[39vw] lg:min-w-[418px]"></div>
      </div>
      <div className="mt-[15px] flex w-full flex-col items-center justify-around gap-[15px] px-[5vw] md:mt-[35px] md:flex-row md:px-[3vw]">
        {btnlist.map((data, index) => {
          return (
            <div key={index}>
              <div className="">
                <Button
                  variant="outline"
                  className="h-[5vh] w-[44vw] rounded-full text-white hover:bg-accent hover:text-black md:w-[24vw] xxl:text-[1vw]"
                >
                  Follow me on {data.data}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex max-w-[90vw] px-4 md:mt-[35px]">
        <p className="text-center text-clamptextsmm italic xxl:text-[2.5vw] xxl:leading-[6vh]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Connect;
