import Image from "next/image";
import React from "react";

const Page7 = () => {
  return (
    <section className="mt-7 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-clamptitle">
          <strong>Bootcamp Training- Why are we special?</strong>
        </h1>
        <div className="relative mt-6 flex h-[50vh] w-[90%] bg-transparent md:h-[90vh]">
          <Image
            src="/assets/comparisionScale.webp"
            priority
            quality={50}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Page7;
