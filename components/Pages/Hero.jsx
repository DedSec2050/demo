import React from "react";

import Slider from "../Slider";
import HeroSlider from "../HeroSlider";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <div className="relative flex h-[92vh] w-[100%] flex-col justify-around">
        {/* Text  */}
        <div className="text-center">
          <div className="inline-block">
            <h1 className="mb-1 text-clampheader font-bold">
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                CISSP
              </span>
              <span className="bg-gradient-to-l from-white via-accent to-white bg-clip-text text-transparent">
                {" "}
                Success
              </span>
              <span className="bg-gradient-to-l from-accent to-white bg-clip-text text-transparent">
                {" "}
                Toolkit
              </span>{" "}
            </h1>
          </div>
          <hr className="mb-35 mx-auto h-[1px] w-[15rem] translate-y-[-15px] rounded border-0 bg-accent xl:w-[50rem]"></hr>
          <h1 className="mb-2 text-clamptitle font-[700]">
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              Pass the CISSP Exam
              <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
                {" "}
                with 10x confidence
              </span>
            </span>
          </h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center md:h-[47.9vh] md:flex-row">
          <div className="flex items-center justify-center md:h-[45vh] md:w-[30.3%]">
            <Image
              layout="responsive"
              style={{ width: "100%", height: "auto" }}
              width={833}
              height={851}
              src="/assets/HeroSection/hero-trainer.webp"
              alt="hero-trainer"
            />
          </div>
          <div className="flex w-[68%] items-center justify-center overflow-hidden py-6 md:py-0">
            <Slider />
          </div>
        </div>
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
