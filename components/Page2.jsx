import React from "react";
import { Button } from "./ui/button";
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
    <section>
      <div className="mt-[60px] w-[100%] justify-between md:inline-flex">
        {/* Text  */}
        <div className="order-2 flex flex-col gap-[30px] px-[13px] text-center md:order-none md:text-left xl:px-[40px]">
          {/* Text wrap  */}
          <div className="text-wrap1 flex flex-col items-center md:items-start">
            <span className="text-[20px] font-bold md:text-[22px] xl:text-[24px]">
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Free{" "}
              </span>
              <span className="bg-gradient-to-l from-accent to-grn bg-clip-text text-transparent">
                CISSP{" "}
              </span>
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                resources
              </span>
            </span>
            {text.map((title, index) => {
              return (
                <h2
                  key={index}
                  className="mt-[18px] text-[16px] font-bold md:text-[19px] xl:text-[22px]"
                >
                  {title.title}
                </h2>
              );
            })}
            <Button className="mt-[29px] w-[200px] rounded-full bg-gradient-to-r from-gray-400 to-accent hover:bg-gradient-to-r hover:from-accent hover:to-gray-400 xl:w-[362px]">
              Talk to your Experts
            </Button>
          </div>

          <div className="text-wrap2 flex flex-col items-center md:items-start">
            <span className="mb-[18px] text-clamptextmd font-bold md:text-[22px] xl:text-[24px]">
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Give me 100{" "}
              </span>
              <span className="bg-gradient-to-l from-accent to-grn bg-clip-text text-transparent">
                Days & I will{" "}
              </span>{" "}
              <span className="bg-gradient-to-l from-accent to-grn bg-clip-text text-transparent">
                get you CISSP{" "}
              </span>
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Certified
              </span>{" "}
            </span>
            <p className="mb-5 min-w-[100px] text-[20px] xl:w-[762px]">
              Hey there, I'm Manoj, your CISSP buddy! After helping over 3000+
              professionals in their CISSP Success, I have now come up with a
              game-changing Framework for busy professionals to ace the CISSP
              exam in just 100 Days.
            </p>
            <p className="mb-5 min-w-[100px] text-[20px] xl:w-[762px]">
              Exciting, right? You are just a step away from achieving your
              CISSP Dream!
            </p>
            <p className="mb-5 min-w-[100px] text-[20px] xl:w-[762px]">
              Be part of the ecosystem and follow the roadmap to Nail CISSP in
              100 Days!
            </p>
            <Button
              variant="outline"
              className="mb-6 mt-[29px] w-[180px] rounded-full xl:w-[362px]"
            >
              Know more
            </Button>
          </div>
        </div>
        <div className="trainer">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Page2;
