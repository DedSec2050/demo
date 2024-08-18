import Image from "next/legacy/image";
import React from "react";
import timeline from "../public/assets/Timeline/timeline.webp";
import Link from "next/link";
import { Button } from "./ui/button";

const Page6 = () => {
  return (
    <section>
      <div className="px-[30px] py-8 sm:px-[50px] xl:px-[10vw]">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-clamptitle">
            <strong>
              <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
                Experience the CISSP Success
              </span>{" "}
              <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
                Toolkit - Roadmap
              </span>
            </strong>
          </h2>
          <div className="my-6 w-full overflow-hidden rounded-[30px] border-2 border-accent">
            <Image
              unoptimized
              layout="responsive"
              src={timeline}
              alt="timeline"
            ></Image>
          </div>
        </div>
        <div className="my-6 flex w-full flex-col items-center justify-around gap-y-8 md:flex-row">
          <Link href="https://calendly.com/cisspsuccess">
            <Button className="rounded-[30px] transition-all duration-500">
              Book An appointment
            </Button>
          </Link>
          <Link href="https://chat.whatsapp.com/GUnUOJtxzD7DrGu1YlUDCd ">
            <Button className="rounded-[30px] transition-all duration-500">
              Join our FREE Study Group
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page6;
