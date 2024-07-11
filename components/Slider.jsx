"use client";
import React from "react";

import Marquee from "react-fast-marquee";

import Image from "next/image";
import { border } from "@cloudinary/url-gen/qualifiers/background";
import Swiper from "./Swiper";

const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};
const Slider = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"];
  const pic = ["/assets/SliderAssets/slider1.webp"];

  return (
    <section className="container z-40 hidden items-center justify-center sm:flex">
      <Swiper />
    </section>
  );
};

export default Slider;
