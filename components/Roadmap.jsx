import Image from "next/legacy/image";
import React from "react";
import timeline from "../public/assets/Timeline/timeline.gif";

const Page6 = () => {
  return (
    <section>
      <div className="px-[30px] py-8 sm:px-[50px] xl:px-[15vw]">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-clamptitle">
            <strong>
              <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent xxl:text-[2.5vw]">
                Experience the CISSP Success
              </span>{" "}
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent xxl:text-[2.5vw]">
                Toolkit - Roadmap
              </span>
            </strong>
          </h1>
          <div className="w-full">
            <Image
              alt="timeline"
              unoptimized
              layout="responsive"
              src={timeline}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page6;
