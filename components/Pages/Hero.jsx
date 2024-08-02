import React from "react";

import Slider from "../Slider";
import HeroSlider from "../HeroSlider";
import Image from "next/image";
import logo from "../../public/assets/HeroSection/herologo.webp";
import trainer from "../../public/assets/HeroSection/herotrainer.webp";
import back from "../../public/assets/bgmotion.gif";
import Marquee from "react-fast-marquee";
const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};
const Hero = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"];
  const pic = ["/assets/SliderAssets/slider1.webp"];
  return (
    <section className="">
      <div className="flex flex-col px-[30px] sm:px-[50px] xl:px-[15vw]">
        <div className="flex flex-col items-center justify-center pb-[30px]">
          <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row">
            <div className="relative z-[1] mb-[60px] mt-[40px] hidden h-full w-[40%] items-center justify-center drop-shadow-xl sm:mt-0 md:mb-0 xl:flex">
              <Image
                width={1008}
                height={1318}
                src={trainer}
                alt="hero-trainer"
              />
            </div>

            <div className="relative z-[1] flex w-full flex-col items-center justify-center xl:w-[65%]">
              {/* Text  */}
              <div className="my-8 flex h-[12vh] max-h-[230px] w-[44vw] max-w-[230px] items-center justify-center md:h-[12vh] md:w-[17vw]">
                <Image
                  layout="responsive"
                  width={1200}
                  height={1200}
                  src={logo}
                  alt="hero-logo"
                />
              </div>
              <hr class="mx-auto my-2 h-1 w-48 rounded border-0 bg-accent dark:bg-gray-700 md:my-4" />

              <div className="relative mt-4 flex flex-col text-center">
                <h1 className="text-clampheader font-[700] leading-8 xxl:text-[2.5vw]">
                  <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero">
                    Give me 100 Days &
                  </span>
                </h1>
                <h1 className="my-2 text-clampheader font-[700] leading-[4rem] xl:my-8 xxl:text-[2.5vw]">
                  <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text leading-10 text-transparent drop-shadow-hero">
                    {" "}
                    I will get you CISSP Certified
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <HeroSlider />
        </div>
        <div className="relative mb-10 flex w-full sm:hidden">
          <Marquee direction="right">
            {demos.map((url, index) => {
              return (
                <div
                  className="mr-[6.5rem] flex h-[22vh] w-[21vh] md:h-[32vh] md:w-[32vh]"
                  key={index}
                >
                  <Image
                    layout="responsive"
                    src="/assets/SliderAssets/slider1.webp"
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
        <div className="hidden w-full flex-col items-center justify-center overflow-hidden py-[100px] sm:flex md:flex-row">
          <div className="flex items-center justify-center overflow-hidden py-6 md:py-0">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
