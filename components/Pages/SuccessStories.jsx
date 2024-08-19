import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Slider from "../Slider";
import Link from "next/link";
import { Button } from "../ui/button";

const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};

const SuccessStories = () => {
  const demos = [];
  for (let i = 1; i <= 26; i++) {
    demos.push(`${i}.webp`);
  }
  return (
    <div className="mt-[30px] flex flex-col px-[30px] sm:px-[50px] xl:px-[9vw] xxl:px-[15vw]">
      <div className="text-center xl:mt-10">
        <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] leading-8 text-transparent xxl:text-[2.5vw]">
          Our Success Stories
        </span>
      </div>
      <div className="relative my-10 flex w-full sm:hidden">
        <Marquee direction="right">
          {demos.map((url, index) => {
            // console.log("/assets/SliderAssets/" + url);
            return (
              <div
                className="mr-[6.5rem] flex h-[22vh] w-[21vh] md:h-[32vh] md:w-[32vh]"
                key={index}
              >
                <Image
                  src={"/assets/SliderAssets/" + url}
                  alt="slider"
                  style={({ width: "auto", height: "auto" }, imageStyle)}
                  height={290}
                  width={300}
                ></Image>
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="hidden w-full flex-col items-center justify-center overflow-hidden py-[60px] sm:flex md:flex-row xl:translate-x-[2rem] xxl:translate-x-[5rem]">
        <div className="flex items-center justify-center overflow-hidden py-2 md:py-0">
          <Slider />
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-6">
        <Link href="https://www.youtube.com/watch?v=_d8Jxaq_WSI&list=PLJ1GEK2Q0WrS5FNz6s2pLWlf0z_E_v0qM">
          <Button className="rounded-[30px] transition-all duration-500">
            See more Success Stories
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessStories;
