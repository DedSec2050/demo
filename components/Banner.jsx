import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-banner px-10 text-[0.7rem] md:flex-row md:px-0 md:text-[1.2rem]">
      <div className="py-1 text-center">
        UP TO <span className="text-accent">50%</span> OFF on Combo Courses!
        <Link
          href="/"
          className="font-semibold text-accent hover:text-accent-hover"
        >
          {" "}
          CLAIM NOW
        </Link>
      </div>
      <div className="pb-1 text-center md:ml-6">
        Contact Us: +91 85953 38705
      </div>
    </section>
  );
};

export default Banner;
