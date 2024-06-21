import React from "react";

import Slider from "../Slider";
import HeroSlider from "../HeroSlider";

const Hero = () => {
  return (
    <>
      <div className="relative flex w-[100%] flex-col justify-center bg-herosection bg-cover bg-center bg-no-repeat xl:bg-cover">
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
          <hr className="mb-35 mx-auto h-[1px] w-[15rem] translate-y-[-15px] rounded border-0 bg-accent xl:w-[40rem]"></hr>
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

        <Slider />
        <HeroSlider />
      </div>
    </>
  );
};

export default Hero;
