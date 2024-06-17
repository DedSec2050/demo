"use client";
import React from "react";

import Marquee from "react-fast-marquee";

import Image from "next/image";

const imageStyle = {
  borderRadius: "10%",
};
const Slider = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"];
  const pic = ["/assets/SliderAssets/slider1.webp"];
  let demolist = [];
  demos.forEach((demo, index) => {
    demolist.push(
      <div key={index} className="mr-[5rem] mt-4 w-[100%] text-sky-500">
        {
          <Image
            src="/assets/SliderAssets/slider1.webp"
            width={300}
            height={400}
            style={imageStyle}
            className={`${index}` + ""}
            alt=""
          />
        }
      </div>,
    );
  });

  return (
    <div className="mt-7 px-6 text-center">
      <Marquee>{demolist}</Marquee>
    </div>
  );
};

export default Slider;
