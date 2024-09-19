import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import Slider from "../Slider";
import HeroSlider from "../HeroSlider";
import Image from "next/image";
import logo from "../../public/assets/HeroSection/herologo.webp";
import logold from "../../public/assets/HeroSection/cyberlogold.webp";

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
      <div className="flex flex-col px-[30px] pt-4 sm:px-[50px] xl:px-[9vw] xxl:px-[15vw]">
        <VideoPlayer />
        <div className="flex w-full flex-col items-center justify-center pb-[10px]">
          <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row">
            <div className="relative z-[1] my-6 flex w-full flex-col items-center justify-center gap-y-6 md:mx-2 md:h-[640px] md:py-0 xl:w-[65%] xlls:pt-[100px]">
              {/* Text  */}
              <div className="my-0 hidden h-[12vh] max-h-[180px] w-[44vw] max-w-[180px] items-center justify-center md:flex md:h-[12vh] md:w-[17vw]">
                <Image
                  priority
                  width={180}
                  height={180}
                  src={logold}
                  alt="hero-logo"
                />
              </div>

              <div className="hidden flex-col items-center justify-center md:flex">
                <div className="relative flex flex-col text-center">
                  <h2 className="text-clamptitle font-bold">
                    CISSP 10x Simplified!
                  </h2>
                  <h1 className="flex flex-col text-clampheader font-[700]">
                    <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero xl:text-[2.8rem] xlg:text-[2.5rem]">
                      Give me 100 Days &
                    </span>
                    <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent drop-shadow-hero xl:text-[2.8rem] xlg:text-[2.5rem]">
                      I will get you CISSP Certified
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col rounded-[10px] border-2 border-accent border-opacity-[50%] bg-opacity-[50%] bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] px-2 py-2 xlls:h-[120px] xlls:px-4 xlls:text-[1.3rem] [&>span]:font-semibold">
                4.8 Rating by 4.5K+ Students
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2 text-accent xlls:grid-cols-4 xlls:pt-2">
                <div className="flex min-h-[100px] flex-col rounded-[10px] border-2 border-accent border-opacity-[50%] bg-opacity-[50%] bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] px-2 py-2 xlls:h-[120px] xlls:text-[1.3rem] [&>span]:font-semibold">
                  <span>80+H</span>
                  <span>On Demand Videos</span>
                </div>

                <div className="flex min-h-[100px] flex-col rounded-[10px] border-2 border-accent border-opacity-[50%] bg-opacity-[50%] bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] px-2 py-2 xlls:h-[120px] xlls:text-[1.3rem] [&>span]:font-semibold">
                  <span>60+H</span>
                  <span>Live Exam Practice</span>
                </div>

                <div className="flex min-h-[100px] flex-col rounded-[10px] border-2 border-accent border-opacity-[50%] bg-opacity-[50%] bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] px-2 py-2 xlls:h-[120px] xlls:text-[1.3rem] [&>span]:font-semibold">
                  <span>In BUILT</span>
                  <span>Mock Test Series</span>
                </div>

                <div className="flex min-h-[100px] flex-col rounded-[10px] border-2 border-accent border-opacity-[50%] bg-opacity-[50%] bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] px-2 py-2 xlls:h-[120px] xlls:text-[1.3rem] [&>span]:font-semibold">
                  <span>In BUILT NOTES</span>
                  <span>No Heavyweight Books</span>
                </div>
              </div>
            </div>
            <div className="z-1 h-full w-full flex-col items-center justify-around md:w-[40%] xlls:w-[30%]">
              <div className="relative z-[1] my-6 flex w-full flex-col items-center justify-center gap-y-6 md:mx-2 md:hidden md:h-[640px] md:py-0 xl:w-[65%] xlls:pt-[100px]">
                {/* Text  */}
                <div className="my-0 flex h-[12vh] max-h-[180px] w-[44vw] max-w-[180px] items-center justify-center md:h-[12vh] md:w-[17vw]">
                  <Image
                    width={180}
                    height={180}
                    src={logold}
                    alt="hero-logo"
                  />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative flex flex-col text-center">
                    <h2 className="text-clamptitle font-bold">
                      CISSP 10x Simplified!
                    </h2>
                    <h1 className="flex flex-col text-clampheader font-[700]">
                      <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text leading-normal text-transparent drop-shadow-hero xl:text-[2.8rem] xlg:text-[2.5rem]">
                        Give me 100 Days &
                      </span>
                      <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text leading-normal text-transparent drop-shadow-hero xl:text-[2.8rem] xlg:text-[2.5rem]">
                        I will get you CISSP Certified
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full items-center justify-center">
                {/* Video Player */}
              </div>
              <div className="x flex w-full flex-col items-center justify-center gap-6 rounded-[30px] border-accent-hover border-opacity-[50%] bg-opacity-[10%] from-[#739DED66] to-[#A8AEE000] pt-6 text-center md:border-2 md:bg-gradient-to-l md:px-[60px]">
                <span className="flex w-full min-w-[240px] items-center justify-center text-[1.6rem] font-bold">
                  CISSP Certification Training{" "}
                </span>
                <span className="flex w-full min-w-[240px] items-center justify-center text-[1.4rem] font-bold leading-tight">
                  Join our FREE Masterclass Now{" "}
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
