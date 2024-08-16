import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
const Sliding = () => {
  const demos = [];
  for (let i = 1; i <= 26; i++) {
    demos.push(`${i}.webp`);
  }
  const imageStyle = {
    borderRadius: "10%",
    border: "3px solid yellow",
  };
  return (
    <Swiper
      effect={"coverflow"}
      loop={true}
      breakpoints={{
        500: { slidesPerView: 3, spaceBetween: 30 },
        600: {
          slidesPerView: 3,
          spacebetween: 50,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: -30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
    >
      {demos.map((url, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="flex h-[100px] w-[100px] sm:mx-5 sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:h-[250px] lg:w-[250px] xlls:h-[380px] xlls:w-[380px]"
              key={index}
            >
              <Image
                layout="responsive"
                src={"/assets/SliderAssets/" + url}
                alt="slider"
                style={({ width: "auto", height: "auto" }, imageStyle)}
                height={290}
                width={300}
              ></Image>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Sliding;
