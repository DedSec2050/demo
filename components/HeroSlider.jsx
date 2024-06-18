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
      <div key={index} className="mr-[5rem] mt-4 w-[100%] text-sky-500">
        {
          <Image
            src={`${demo}`}
            width={300}
            height={400}
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

export default HeroSlider;
