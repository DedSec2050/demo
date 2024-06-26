"use client";
import React from "react";

import Marquee from "react-fast-marquee";

import Image from "next/image";
import { border } from "@cloudinary/url-gen/qualifiers/background";

const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};
const Slider = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"];
  const pic = ["/assets/SliderAssets/slider1.webp"];

  return (
    <div className="relative flex w-[90%]">
      <Marquee>
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
  );
};

export default Slider;
