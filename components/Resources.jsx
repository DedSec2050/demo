"use client";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Photo from "./Photo";
import Image from "next/legacy/image";
import image from "../public/assets/Resources/resource.webp";
import { BsPatchExclamationFill } from "react-icons/bs";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdHourglassFull } from "react-icons/md";

const text = [
  {
    title: "Is CISSP BEST for Me?",
    bg: "[url('../public/assets/Resources/Bg/bg-1.webp')]",
  },
  {
    title: "Join FREE CISSP Masterclass",
    bg: "[url('../public/assets/Resources/Bg/bg-1.webp')]",
  },
  {
    title: "Study FREE CISSP Notes",
    bg: "[url('../public/assets/Resources/Bg/bg-1.webp')]",
  },
  {
    title: "FREE CISSP Mock Test",
    bg: "[url('../public/assets/Resources/Bg/bg-1.webp')]",
  },
];

const Page2 = () => {
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center px-[30px] text-center sm:px-[50px] xl:px-[15vw]">
        <h1 className="flex bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-center text-clamptitle font-bold text-transparent xxl:text-[2.5vw]">
          Free CISSP resources
        </h1>
        <div className="flex w-full flex-col items-center justify-around md:flex-row">
          {/* imagediv  */}
          <div className="order-2 mt-[40px] flex h-[100%] w-[25%] flex-col md:order-none">
            <div className="flex flex-col">
              <Image
                layout="responsive"
                src={image}
                width={825}
                height={1200}
                alt="image"
              />
            </div>
            <div className="flex items-center justify-center py-[60px]">
              <Button
                variant="outline"
                size="lg"
                className="mt-4 rounded-full py-4 capitalize xxl:h-[5vh] xxl:w-[20vw] xxl:rounded-full xxl:text-[1.3vw]"
              >
                Get Much More...
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgFirst bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-accent hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px]">
                <BsPatchExclamationFill className="txt text-[15px] text-cyn sm:text-[2vw]" />
              </div>
              <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:w-[75%] md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-cyn">Is CISSP BEST for Me?</span>
              </div>
              <Button
                variant="outline"
                className="h-[17px] w-[60%] rounded-full border-accent py-2 text-[7.5px] text-white sm:w-[55%] sm:translate-y-[15px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]"
              >
                Explore More
              </Button>
            </div>
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgSecond bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-accent hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px]">
                <FaHeart className="txt text-[15px] text-cyn sm:text-[2vw]" />
              </div>
              <div className="flex w-[75%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-cyn">
                  Join FREE CISSP Masterclass
                </span>
              </div>
              <Button
                variant="outline"
                className="h-[17px] w-[60%] rounded-full border-accent py-2 text-[7.5px] text-white sm:w-[55%] sm:translate-y-[15px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]"
              >
                Explore More
              </Button>
            </div>
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgThird bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-accent hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px]">
                <FaWindowMaximize className="txt text-[15px] text-cyn sm:text-[2vw]" />
              </div>
              <div className="flex w-[75%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-cyn">Study FREE CISSP Notes</span>
              </div>
              <Button
                variant="outline"
                className="h-[17px] w-[60%] rounded-full border-accent py-2 text-[7.5px] text-white sm:w-[55%] sm:translate-y-[15px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]"
              >
                Explore More
              </Button>
            </div>
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgFourth bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-accent hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px]">
                <BsPatchExclamationFill className="txt text-[15px] text-cyn sm:text-[2vw]" />
              </div>
              <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-cyn">FREE CISSP Mock Test</span>
              </div>
              <Button
                variant="outline"
                className="h-[17px] w-[60%] rounded-full border-accent py-2 text-[7.5px] text-white sm:w-[55%] sm:translate-y-[15px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]"
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
