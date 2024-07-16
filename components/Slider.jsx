"use client";
import React from "react";

import Swiper from "./Swiper";

const imageStyle = {
  borderRadius: "10%",
  border: "3px solid yellow",
};
const Slider = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"];
  const pic = ["/assets/SliderAssets/slider1.webp"];

  return (
    <section className="container hidden items-center justify-center sm:flex">
      <Swiper />
    </section>
  );
};

export default Slider;
