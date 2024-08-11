import React from "react";

import Slider from "../Slider";
import HeroSlider from "../HeroSlider";
import Image from "next/image";
import logo from "../../public/assets/HeroSection/herologo.webp";
import logold from "../../public/assets/HeroSection/cyberlogold.webp";

import trainer from "../../public/assets/HeroSection/herotrainer.webp";
import back from "../../public/assets/bgmotion.gif";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";
import Link from "next/link";
import VideoPlayer from "../VidPlayr";

const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};
const Hero = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"];
  const pic = ["/assets/SliderAssets/slider1.webp"];

  return (
    <section className="h-full">
      <div className="flex flex-col px-[30px] sm:px-[50px] xl:px-[9vw] xxl:px-[15vw]">
        <VideoPlayer />
        <div className="flex flex-col items-center justify-center pb-[30px]">
          <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row">
            <div className="relative z-[1] mb-[60px] mt-[40px] hidden h-full w-[40%] items-center justify-start drop-shadow-xl sm:mt-0 md:mb-0 xl:flex">
              <Image
                width={424}
                height={692}
                src={trainer}
                alt="hero-trainer"
              />
            </div>

            <div className="relative z-[1] my-6 flex w-full flex-col items-center justify-start gap-y-6 md:h-[640px] md:py-0 xl:w-[65%]">
              {/* Text  */}
              <div className="my-0 flex h-[12vh] max-h-[230px] w-[44vw] max-w-[230px] items-center justify-center md:h-[12vh] md:w-[17vw]">
                <Image width={442} height={196} src={logold} alt="hero-logo" />
              </div>
              {/* <div className="relative z-[1] my-6 flex w-full flex-col items-center justify-start gap-y-6 md:h-[640px] md:py-0 xl:w-[65%]">
               
              <div className="my-8 flex h-[12vh] max-h-[230px] w-[44vw] max-w-[230px] items-center justify-center md:h-[12vh] md:w-[17vw]">
                <Image
                  layout="responsive"
                  width={1200}
                  height={1200}
                  src={logo}
                  alt="hero-logo"
                />
              </div> */}
              <hr className="mx-auto my-2 h-1 w-48 rounded border-0 bg-accent dark:bg-gray-700 md:my-4" />

              <div className="relative mt-4 flex flex-col text-center">
                <h1 className="text-clampheader font-[700] xl:mt-[-80px] xlg:mt-0 xxl:text-[2.5vw]">
                  <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero">
                    Give me 100 Days &<br className="hidden xl:flex"></br>
                  </span>
                  <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero">
                    {" "}
                    I will get you CISSP Certified
                  </span>
                </h1>
              </div>
              <div className="flex flex-col gap-4 xl:gap-10">
                <Link href="https://calendly.com/cisspsuccess">
                  <Button className="rounded-[30px] transition-all duration-500 xl:text-[17px]">
                    Book a FREE Consultation
                  </Button>
                </Link>
                <Link href="https://calendly.com/cisspsuccess">
                  <Button className="rounded-[30px] transition-all duration-500 xl:text-[17px]">
                    Get more Information Here
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <HeroSlider />
        </div>
        <div className="text-center xl:mt-10">
          <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] leading-8 text-transparent xxl:text-[2.5vw]">
            Our Success Stories
          </span>
        </div>
        <div className="relative my-10 flex w-full sm:hidden">
          <Marquee direction="right">
            {demos.map((url, index) => {
              return (
                <div
                  className="mr-[6.5rem] flex h-[22vh] w-[21vh] md:h-[32vh] md:w-[32vh]"
                  key={index}
                >
                  <Image
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
        <div className="hidden w-full flex-col items-center justify-center overflow-hidden py-[60px] sm:flex md:flex-row">
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
    </section>
  );
};

export default Hero;
