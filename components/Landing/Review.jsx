import Image from "next/image";
import React from "react";
import review1 from "@/public/assets/LandingSwiper/Review/review1.webp";
import review2 from "@/public/assets/LandingSwiper/Review/review2.webp";
import review3 from "@/public/assets/LandingSwiper/Review/review3.webp";

const Review = () => {
  return (
    <section className="flex w-full">
      <div className="hidden h-[100px] w-[100vw] items-center justify-around bg-accent-hover xl:flex [&>img]:px-[3rem] [&>img]:py-[.6rem] xl:[&>img]:px-[6.5rem]">
        <Image
          src={review1}
          className="xl:h-[80px] xl:w-[30%]"
          responsive
        ></Image>
        <Image
          src={review2}
          className="xl:h-[80px] xl:w-[30%]"
          responsive
        ></Image>
        <Image
          src={review3}
          className="xl:h-[80px] xl:w-[30%]"
          responsive
        ></Image>
      </div>
    </section>
  );
};

export default Review;
