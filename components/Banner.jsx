import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-banner w-full">
      <div className="w-full py-2 text-center">
        UP TO <span className="text-accent">50%</span> OFF on Combo Courses!
        <Link href="/" className="font-semibold text-accent">
          {" "}
          CLAIM NOW
        </Link>
      </div>
    </section>
  );
};

export default Banner;
