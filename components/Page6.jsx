import Image from "next/image";
import React from "react";

const Page6 = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-clamptitle">
          <strong>Experience the CISSP Success Toolkit - Roadmap</strong>
        </h1>
        {/* Insert Timeline here */}
        <div className="relative hidden h-[90vh] w-[90%] bg-transparent md:flex">
          <Image
            src="/assets/timeline-wt-bg.webp"
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

export default Page6;
