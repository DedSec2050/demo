import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <section className="px-[13px]">
      <div className="flex w-[100%]">
        <div>
          <h1 className="text-clamptextmd">
            <strong>
              <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
                {" "}
                Don't Get Limited Through Bootcamp
              </span>{" "}
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Training
              </span>{" "}
              <span className="bg-gradient-to-r from-grn to-green-200 bg-clip-text text-clamptextsm text-transparent">
                (Updated 2024)
              </span>
            </strong>
          </h1>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </section>
  );
};

export default Page3;
