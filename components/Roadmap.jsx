import Image from "next/image";
import React from "react";
import timeline from "../public/assets/Timeline/timeline.gif";

const Page6 = () => {
  return (
    <section className="py-8">
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
        <div className="w-full px-6">
          <Image layout="responsive" src={timeline}></Image>
        </div>
      </div>
    </section>
  );
};

export default Page6;
