import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-banner px-10 text-[0.9rem] md:px-0 md:text-[1.2rem]">
      <div className="w-full py-1 text-center">
        UP TO <span className="text-accent">50%</span> OFF on Combo Courses!
        <Link
          href="/"
          className="font-semibold text-accent hover:text-accent-hover"
        >
          {" "}
          CLAIM NOW
        </Link>
      </div>
      <div className="pb-1 text-center">Contact Us: +91 85953 38705</div>
    </section>
  );
};

export default Banner;
