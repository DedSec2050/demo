import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const HeroSlider = () => {
  const demos = [
    "/assets/MarqueeAssets/tags1.webp ",
    "/assets/MarqueeAssets/tags2.webp ",
    "/assets/MarqueeAssets/tags3.webp ",
    "/assets/MarqueeAssets/tags4.webp ",
  ];

  let demolist = [];
  demos.forEach((demo, index) => {
    demolist.push(
      <div
        key={index}
        className="mt-4 flex w-[100%] items-start justify-center"
      >
        {
          <Image
            src={`${demo}`}
            width={265}
            height={49}
            className={`${index}` + ""}
            alt=""
          />
        }
      </div>,
    );
  });

  return (
    <div className="mt-7 flex w-[100%] items-center justify-center px-6 text-center">
      {demolist}
    </div>
  );
};

export default HeroSlider;
