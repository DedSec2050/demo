import React from "react";
import Positions from "../Positions";
import eco from "@/public/assets/Ecosystem/ecosystem.webp";
import Image from "next/image";
import { Button } from "../ui/button";
const PartnerEco = () => {
  return (
    <section className="[&>section>div>div]:bg-gradient-to-r [&>section>div>div]:from-[#ffeb89e7] [&>section>div>div]:via-[#ffeb89e7] [&>section>div>div]:to-[#ffeb89f3]">
      <div className="mt-6 px-[30px] sm:px-[50px] xl:mb-4 xl:px-[10vw]">
        <h2 className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-center text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
          Our Partner Ecosystem
        </h2>
      </div>
      <Positions />
      <div className="mt-6 flex flex-col items-center justify-around px-[30px] sm:px-[50px] xl:mb-4 xl:flex-row xl:px-[10vw]">
        <div className="md:h-[561px] md:w-[631px]">
          <Image src={eco} alt="Ecosystem"></Image>
        </div>
        <div className="flex max-w-[400px] flex-col justify-center xl:py-8">
          <div className="flex flex-col text-[2rem] font-bold leading-normal text-accent xl:text-[2.4rem]">
            <span>10+ Years Of</span>
            <span>Experience</span>
          </div>
          <div className="py-4">
            Cybernous is known for its state of the art CISSP trainings. Achieve
            your CISSP certification with 99% guarantee through our CISSP
            success toolkit.
          </div>
          <Button className="mt-6 max-w-[280px] bg-accent-hover xl:mt-10">
            Book your Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerEco;
