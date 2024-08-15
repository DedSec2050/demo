import React from "react";
import logo from "@/public/assets/og-image/image.webp";
import Image from "next/image";
import herotrainer from "@/public/assets/HeroSection/herotrainer.webp";

const page = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="rounded-30px flex h-[630px] w-[1200px] justify-between rounded-[30px] p-6">
        <Image src={logo} alt="og image"></Image>
      </div>
    </section>
  );
};

export default page;
