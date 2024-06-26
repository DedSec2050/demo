import React from "react";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Photo from "./Photo";

const text = [
  {
    title: "New to CISSP? Find out if CISSP is good for you",
  },
  {
    title: "Attend our FREE Masterclass",
  },
  {
    title: "Test your CISSP Preparation through our Mock Test ",
  },
  {
    title: "Book a FREE Consultation Call",
  },
];

const Page2 = () => {
  return (
    <section className="bg-red-800 px-[3vw] md:px-8">
      <div className="bg-white">
        {/* Title  */}
        <h1 className="text-clamptitle font-bold">
          <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
            Give me 100 Days & I
          </span>{" "}
          <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
            will get you CISSP Certified
          </span>
        </h1>
      </div>
      {/* video and text  */}
      <div className="grid grid-rows-2 md:grid-cols-2">
        <div className="order-2 flex items-center justify-center md:col-end-7 md:w-[34vw]">
          <div className="bg-gray-600 md:h-[30vh] md:w-[32vw]"></div>
        </div>
        {/* text  */}
        <div className="py-6 text-clamptextsm italic text-white md:w-[56vw] xl:text-[2vw]">
          Hey there, I'm Manoj, your CISSP buddy! After helping over 3000+
          professionals in their CISSP Success, I have now come up with a
          game-changing Framework for busy professionals to ace the CISSP exam
          in just 100 Days <br />
          Exciting, right? You are just a step away from achieving your CISSP
          Dream!
          <br />
          Be part of the ecosystem and follow the roadmap to Nail CISSP in 100
          Days!
        </div>
      </div>
    </section>
  );
};

export default Page2;
