import React from "react";

import Slider from "../Slider";
import HeroSlider from "../HeroSlider";
import Image from "next/image";
import logo from "../../public/assets/HeroSection/herologo.webp";
import trainer from "../../public/assets/HeroSection/herotrainer.webp";
import float from "../../public/assets/floating.webp";

const Hero = () => {
  return (
    <div className="pb-[30px] xl:px-[7vw]">
      <div className="flex w-full flex-col-reverse items-center justify-center md:h-[75vh] md:flex-row">
        <div className="relative z-[-1] mb-[60px] mt-[40px] flex h-[30vh] max-h-[800px] w-[25vh] max-w-[650px] items-center justify-center sm:mb-0 sm:mt-0 md:h-[65vh] md:w-[30.3%]">
          <Image
            layout="responsive"
            style={{ width: "100%", height: "auto" }}
            width={1008}
            height={1318}
            src={trainer}
            alt="hero-trainer"
          />
        </div>

        <div className="relative z-[-1] flex w-[65%] flex-col items-center justify-center md:h-[92vh]">
          {/* Text  */}
          <div className="mb-4 flex h-[12vh] max-h-[350px] w-[44vw] max-w-[350px] items-center justify-center md:h-[12vh] md:w-[17vw]">
            <Image
              layout="responsive"
              style={{ width: "100%", height: "auto" }}
              width={1200}
              height={1200}
              src={logo}
              alt="hero-trainer"
            />
          </div>

          <div className="flex flex-col text-center">
            <h1 className="text-clamptitle font-[700] leading-8 xxl:text-[2.5vw]">
              <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent">
                Give me 100 Days &
              </span>
            </h1>
            <h1 className="mb-2 text-clamptitle font-[700] xxl:text-[2.5vw]">
              <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent">
                {" "}
                I will get you CISSP Certified
              </span>
            </h1>
            <hr className="mb-35 mx-auto h-[0.25vh] w-[15rem] rounded border-0 bg-accent xl:w-[43vw]"></hr>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:h-[47.9vh] md:flex-row">
            <div className="hidden w-[88%] items-center justify-center overflow-hidden py-6 md:flex md:py-0">
              <Slider />
            </div>
          </div>
        </div>
        <div className="floating fixed bottom-[12vh] right-[2vw] z-10 h-[8vh] w-[8vh] rounded-full border-2 border-white p-2 hover:cursor-pointer md:h-[3vw] md:w-[3vw] xxl:h-[5vw] xxl:w-[5vw]">
          <Image
            layout="responsive"
            height={100}
            width={100}
            src={float}
            alt="hero-trainer"
          />
        </div>
      </div>
      <HeroSlider />
    </div>
  );
};

export default Hero;
