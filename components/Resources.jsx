"use client";
import { Button } from "./ui/button";

import Image from "next/legacy/image";
import image from "../public/assets/Resources/resource.webp";
import { BsPatchExclamationFill } from "react-icons/bs";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ImHourGlass } from "react-icons/im";

import Link from "next/link";

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
      <div className="mt-10 flex w-full flex-col items-center justify-center px-[30px] text-center sm:px-[50px] xl:px-[10vw]">
        <h2 className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
          Free CISSP resources
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-x-[170px] md:flex-row">
          {/* imagediv  */}
          <div className="order-2 flex w-[25%] flex-col md:order-none xl:translate-y-[-3%]">
            <div className="mt-[40px] flex flex-col">
              <Image
                layout="responsive"
                src={image}
                width={674}
                height={1018}
                alt="image"
              />
            </div>
            <div className="flex items-center justify-center pb-[10px]">
              <Link href="/resources">
                <Button
                  size="lg"
                  className="rounded-full py-4 capitalize transition-all duration-500 xl:ml-[10%] xl:mt-4 xxl:h-[5vh] xxl:w-[20vw] xxl:rounded-full xxl:text-[1.3vw]"
                >
                  Get Much More...
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgFirst bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-resourceshov hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-resourceshov [&:hover>div>span]:text-resourceshov"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px] md:h-[35px] md:w-[35px]">
                <BsPatchExclamationFill className="txt text-[15px] text-resources sm:text-[2vw] xl:text-[2.0rem]" />
              </div>
              <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:w-[75%] md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-resources xl:text-[1.4rem]">
                  FREE CISSP Flash Cards
                </span>
              </div>

              <Link href="https://cyb-lms.web.app/#/dashboard">
                <Button className="h-[17px] w-[60%] rounded-full border-resources py-2 text-[7.5px] transition-all duration-500 sm:w-[55%] sm:translate-y-[15px] sm:px-[65px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]">
                  Explore More
                </Button>
              </Link>
            </div>
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgSecond bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-resourceshov hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-resourceshov [&:hover>div>span]:text-resourceshov"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px] md:h-[35px] md:w-[35px]">
                <FaHeart className="txt text-[15px] text-resources sm:text-[2vw] xl:text-[2.0rem]" />
              </div>
              <div className="flex w-[85%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-resources xl:text-[1.4rem]">
                  Join FREE CISSP<br className="sm:hidden"></br> Masterclass
                </span>
              </div>
              <Link href="https://cyb-lms.web.app/#/dashboard">
                <Button className="h-[17px] w-[60%] rounded-full border-resources py-2 text-[7.5px] transition-all duration-500 sm:w-[55%] sm:translate-y-[15px] sm:px-[65px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]">
                  Explore More
                </Button>
              </Link>
            </div>
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgThird bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-resourceshov hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-resourceshov [&:hover>div>span]:text-resourceshov"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px] md:h-[35px] md:w-[35px]">
                <FaWindowMaximize className="txt text-[15px] text-resources sm:text-[2vw] xl:text-[2.0rem]" />
              </div>
              <div className="flex w-[75%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-resources xl:text-[1.4rem]">
                  Study FREE <br className="sm:hidden"></br>CISSP Domain Summary
                </span>
              </div>
              <Link href="/resources">
                <Button className="h-[17px] w-[60%] rounded-full border-resources py-2 text-[7.5px] transition-all duration-500 sm:w-[55%] sm:translate-y-[15px] sm:px-[65px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]">
                  Explore More
                </Button>
              </Link>
            </div>
            <div
              className={
                "mx-4 my-4 flex h-[35vw] w-[35vw] flex-col items-center justify-between overflow-hidden rounded-[13%] bg-opacity-25 bg-bgFourth bg-cover bg-no-repeat py-[20%] hover:border-2 hover:border-resourceshov hover:bg-hv md:h-[20vw] md:w-[20vw] xl:h-[16vw] xl:w-[16vw] xxl:h-[20vw] xxl:w-[20vw] xxl:rounded-[45px] " +
                "transition-all duration-500 hover:scale-105 [&:hover>div>.txt]:text-resourceshov [&:hover>div>span]:text-resourceshov"
              }
            >
              <div className="flex translate-y-[-20px] items-center justify-center rounded-md bg-white bg-opacity-[8%] sm:h-[25px] sm:w-[25px] md:h-[35px] md:w-[35px]">
                <ImHourGlass className="txt text-[15px] text-resources sm:text-[2vw] xl:text-[2.0rem]" />
              </div>
              <div className="flex w-[55%] translate-y-[-10px] items-center justify-center text-center text-[2vw] font-bold leading-[25px] xs:text-[3vw] sm:text-[1.2rem] sm:leading-normal md:w-[85%] md:text-[1rem] xl:text-[1.1rem] xxl:text-[3rem] xxl:leading-[50px]">
                <span className="flex text-resources xl:text-[1.4rem]">
                  FREE CISSP Mock Test
                </span>
              </div>
              <Link href="https://cyb-lms.web.app/#/dashboard">
                <Button className="h-[17px] w-[60%] rounded-full border-resources py-2 text-[7.5px] transition-all duration-500 sm:w-[55%] sm:translate-y-[15px] sm:px-[65px] sm:text-[1.4vw] md:h-[25px] md:translate-y-[2vh] md:py-4 xl:w-[60%] xl:text-[1.1rem] xxl:h-[15%] xxl:w-[60%] xxl:py-[30px] xxl:text-[1.2rem]">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
