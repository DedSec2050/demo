import Image from "next/image";
import React from "react";

const Page6 = () => {
  return (
    <section>
      <div className="flex flex-col items-center px-[13px]">
        <h1 className="text-center text-clamptitle">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              Experience the CISSP Success
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
              Toolkit - Roadmap
            </span>
          </strong>
        </h1>
        {/* Insert Timeline here */}
        <div className="relative hidden h-[90vh] w-[90%] bg-transparent md:flex">
          <Image
            src="/assets/timeline-bg3.png"
            alt=""
            priority
            quality={50}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Page6;
