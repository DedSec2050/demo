"use client";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative min-h-[800px] min-w-[250px] lg:min-w-[390px]">
      <Image
        src="/assets/trainer.webp"
        priority
        quality={50}
        fill
        alt=""
        className="object-contain xl:object-cover"
      />
    </div>
  );
};

export default Photo;
