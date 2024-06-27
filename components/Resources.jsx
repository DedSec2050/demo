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
    <section className="flex w-full flex-col items-center justify-center text-center">
      <h1 className="flex bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-center text-clamptitle font-bold text-transparent xxl:text-[2.5vw]">
        Free CISSP resources
      </h1>
      <div className="flex w-full flex-col items-center justify-around md:flex-row">
        {/* imagediv  */}
        <div className="order-2 mt-[40px] flex h-[100%] w-[22%] flex-col md:order-none md:mt-0">
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
              className="rounded-full py-4 capitalize xxl:h-[5vh] xxl:w-[20vw] xxl:rounded-full xxl:text-[1.3vw]"
            >
              Get Much More...
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <div
            className={
              "bg-bgFirst hover:bg-hv mx-4 my-4 flex h-[40vw] w-[40vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-accent md:h-[20vw] md:w-[20vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
              "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
            }
          >
            <div className="flex h-[3.5vw] w-[3.5vw] translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%]">
              <BsPatchExclamationFill className="txt text-cyn text-[5vw] sm:text-[3vw]" />
            </div>
            <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-clamptextsm font-bold leading-[25px] sm:leading-normal xxl:text-[1.5vw] xxl:leading-[50px]">
              <span className="text-cyn flex sm:text-[1.5vw]">
                Is CISSP BEST for Me?
              </span>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-white text-[7.5px] text-white sm:translate-y-[15px] sm:text-[1.3vw] md:translate-y-[2vh] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[0.9vw]"
            >
              Explore More
            </Button>
          </div>
          <div
            className={
              "bg-bgSecond hover:bg-hv mx-4 my-4 flex h-[40vw] w-[40vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-cover bg-no-repeat py-[20%] text-[.6em] hover:border-2 hover:border-accent md:h-[20vw] md:w-[20vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
              "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
            }
          >
            <div className="flex h-[3.5vw] w-[3.5vw] translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%]">
              <FaHeart className="txt text-cyn text-[5vw] sm:text-[3vw]" />
            </div>
            <div className="flex w-[65%] translate-y-[-10px] items-center justify-center text-center text-clamptextsm font-bold leading-[25px] sm:text-clamptextsmm sm:leading-normal xxl:text-[1.5vw] xxl:leading-[50px]">
              <span className="text-cyn flex sm:text-[1.5vw]">
                Join FREE CISSP Masterclass
              </span>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-white text-[7.5px] text-white sm:translate-y-[15px] sm:text-[1.3vw] md:translate-y-[2vh] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[0.9vw]"
            >
              Explore More
            </Button>
          </div>
          <div
            className={
              "bg-bgThird hover:bg-hv mx-4 my-4 flex h-[40vw] w-[40vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-cover bg-no-repeat py-[20%] text-[.6em] hover:border-2 hover:border-accent md:h-[20vw] md:w-[20vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
              "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
            }
          >
            <div className="flex h-[3.5vw] w-[3.5vw] translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%]">
              <FaWindowMaximize className="txt text-cyn text-[5vw] sm:text-[3vw]" />
            </div>
            <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-clamptextsm font-bold leading-[25px] sm:text-clamptextsmm sm:leading-normal xxl:text-[1.5vw] xxl:leading-[50px]">
              <span className="text-cyn flex sm:text-[1.5vw]">
                Study FREE CISSP Notes
              </span>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-white text-[7.5px] text-white sm:translate-y-[15px] sm:text-[1.3vw] md:translate-y-[2vh] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[0.9vw]"
            >
              Explore More
            </Button>
          </div>
          <div
            className={
              "bg-bgFourth hover:bg-hv mx-4 my-4 flex h-[40vw] w-[40vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-cover bg-no-repeat py-[20%] text-[.6em] hover:border-2 hover:border-accent md:h-[20vw] md:w-[20vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
              "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-accent [&:hover>div>span]:text-accent"
            }
          >
            <div className="flex h-[3.5vw] w-[3.5vw] translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%]">
              <MdHourglassFull className="txt text-cyn text-[5vw] sm:text-[3vw]" />
            </div>
            <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-clamptextsm font-bold leading-[25px] sm:text-clamptextsmm sm:leading-normal xxl:text-[1.5vw] xxl:leading-[50px]">
              <span className="text-cyn flex sm:text-[1.5vw]">
                Study FREE CISSP Notes
              </span>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-white text-[7.5px] text-white sm:translate-y-[15px] sm:text-[1.3vw] md:translate-y-[2vh] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[0.9vw]"
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
