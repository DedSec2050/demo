import React from "react";
import Image from "next/image";
import "../components/css/tooltip.css";
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
      <div key={index} className="pt-10">
        <div className="flex lg:hidden">
          <div className="wrapper flex flex-col items-center justify-center">
            <div className="icon cursor-pointer overflow-hidden rounded-full">
              <div className="tooltip bg-red-600 text-clamptextsm text-white">
                <strong>{`${demo.rating}`}</strong>
              </div>
              <Image
                layout="responsive"
                src={`${demo.url}`}
                height={30}
                width={30}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          key={index}
          className="mt-4 hidden w-[100%] items-start justify-center px-5 lg:flex"
        >
          {
            <Image
              layout="responsive"
              src={demo.urlxl}
              width={649}
              height={122}
              className={`${index}` + ""}
              alt="slider"
            />
          }
        </div>
      </div>,
    );
  });

  return (
    <div className="mt-7 flex w-[100%] items-center justify-around px-6 py-4 text-center">
      {demolist}
    </div>
  );
};

export default HeroSlider;
