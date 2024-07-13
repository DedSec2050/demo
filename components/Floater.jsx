import React from "react";
import float from "../public/assets/floating.webp";
import Image from "next/image";
const Floater = () => {
  return (
    <div className="floating fixed bottom-[12vh] right-[2vw] z-10 h-[3rem] w-[3rem] rounded-full border-2 border-white p-2 hover:cursor-pointer md:h-[3.5rem] md:w-[3.5rem] xxl:h-[5vw] xxl:w-[5vw]">
      <Image
        layout="responsive"
        height={100}
        width={100}
        src={float}
        alt="hero-trainer"
      />
    </div>
  );
};

export default Floater;
