import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="relative flex h-[100vh] flex-col justify-center bg-herosection bg-cover bg-center bg-no-repeat xl:bg-cover">
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

        <h1 className="mb-2 text-clamptitle font-extralight">
          10X enabler for your{" "}
          <span className="font-semibold text-accent">CISSP</span> Success!{" "}
        </h1>
        <hr className="mx-auto mb-5 h-1 w-[15rem] rounded border-0 bg-accent xl:w-[40rem]"></hr>

        <p className="text-grey mt-2 text-clamptextsm">
          Your information will remain 100% private!
        </p>
      </div>

      <Slider />
    </div>
  );
};

export default Hero;
