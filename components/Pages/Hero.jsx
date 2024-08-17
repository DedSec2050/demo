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
import { Input } from "../ui/input";
import LeadGen from "./LeadGen";

const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};
const Hero = () => {
  const demos = [];
  for (let i = 1; i <= 26; i++) {
    demos.push(`${i}.webp`);
  }
  // const pic = ["/assets/SliderAssets/slider1.webp"];

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
              <div className="my-0 flex h-[12vh] max-h-[230px] w-[44vw] max-w-[260px] items-center justify-center md:h-[12vh] md:w-[17vw]">
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
              <div className="xl:translate-y-[-100px]">
                <span className="text-clamptitle font-bold">
                  <h2>CISSP 10X Simplified!</h2>
                </span>
              </div>
              <div className="relative mt-4 flex flex-col text-center xl:translate-y-[-100px] xlg:translate-y-[-140px]">
                <h1 className="text-clampheader font-[700] xl:mt-[-80px] xlg:mt-0 xxl:text-[2.5vw]">
                  <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero xl:text-[2.9rem] xlg:text-clampheader">
                    Give me 100 Days &<br className="hidden xl:flex"></br> I
                    will get you CISSP Certified
                  </span>
                  {/* <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero">
                    {" "}
                    
                  </span> */}
                </h1>
                <div className="flex flex-col justify-center gap-4 md:flex-row xl:gap-10">
                  <Link href="https://calendly.com/cisspsuccess">
                    <Button
                      variant="outline"
                      className="rounded-[30px] transition-all duration-500 xl:text-[17px]"
                    >
                      Book a FREE Consultation
                    </Button>
                  </Link>
                  <Link href="https://www.cybernous.com/courses/mission-cissp-bundle/buy">
                    <Button
                      variant="outline"
                      className="rounded-[30px] transition-all duration-500 xl:text-[17px]"
                    >
                      Enroll Now !
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 rounded-[30px] border-opacity-[50%] bg-opacity-[10%] from-[#739DED66] to-[#A8AEE000] py-6 md:bg-gradient-to-l md:px-[60px] xl:translate-y-[-70px] xlg:translate-y-[-150px]">
                <span className="flex w-full min-w-[240px] items-center justify-center text-[1.4rem] font-semibold">
                  Join our FREE Master Class{" "}
                </span>
                <LeadGen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
