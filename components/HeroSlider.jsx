import React from "react";
import Image from "next/image";
import "../components/css/tooltip.css";
import img from "../public/assets/MarqueeAssets/tags-one.webp";
const HeroSlider = () => {
  const demos = [
    {
      urlxl: "/assets/MarqueeAssets/tags-one.webp ",
      url: "/assets/MarqueeAssets/udemylogo.webp",
      rating: "4.5/5.0",
    },
    {
      urlxl: "/assets/MarqueeAssets/tags-two.webp ",
      url: "/assets/MarqueeAssets/googlelogo.webp",
      rating: "4.1/5.0",
    },
    {
      urlxl: "/assets/MarqueeAssets/tags3.webp ",
      url: "/assets/MarqueeAssets/trustpilot.webp",
      rating: "4.9/5.0",
    },
    {
      urlxl: "/assets/MarqueeAssets/tags4.webp ",
      url: "/assets/MarqueeAssets/googlelogo.webp",
      rating: "4.2/5.0",
    },
  ];

  let demolist = [];
  demos.forEach((demo, index) => {
    demolist.push(
      <div key={index} className="py-4 sm:py-0">
        <div className="flex lg:hidden">
          <div className="wrapper flex flex-col items-center justify-center">
            <div className="icon cursor-pointer overflow-hidden rounded-full">
              <div className="tooltip bg-red-600 text-clamptextsm text-white">
                <strong>{`${demo.rating}`}</strong>
              </div>
              <Image src={`${demo.url}`} height={30} width={30} alt="slider" />
            </div>
          </div>
        </div>

        <div
          key={index}
          className={`xxl:mt-2" hidden w-[100%] items-stretch justify-center lg:flex`}
        >
          {
            <Image
              unoptimized
              layout="responsive"
              src={demo.urlxl}
              width={649}
              height={122}
              className={`${index != 3 && "pr-5"}`}
              alt="slider"
            />
          }
        </div>
      </div>,
    );
  });

  return (
    <div className="flex w-[100%] items-center justify-around text-center xl:mt-2">
      {demolist}
    </div>
  );
};

export default HeroSlider;
