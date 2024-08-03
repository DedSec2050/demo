import Image from "next/legacy/image";
import React from "react";
import timeline from "../public/assets/Timeline/timeline.webp";
import Link from "next/link";
import { Button } from "./ui/button";

const Page6 = () => {
  return (
    <section>
      <div className="px-[30px] py-8 sm:px-[50px] xl:px-[15vw]">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-clamptitle">
            <strong>
              <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent xxl:text-[2.5vw]">
                Experience the CISSP Success
              </span>{" "}
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent xxl:text-[2.5vw]">
                Toolkit - Roadmap
              </span>
            </strong>
          </h1>
          <div className="my-6 w-full overflow-hidden rounded-[30px] border-2 border-accent">
            <Image
              alt="timeline"
              unoptimized
              layout="responsive"
              src={timeline}
            ></Image>
          </div>
        </div>
        <div className="my-6 flex w-full flex-col items-center justify-around md:flex-row">
          <Link href="https://calendly.com/cisspsuccess">
            <Button
              variant="outline"
              className="rounded-[30px] transition-all duration-500"
            >
              Book An appointment
            </Button>
          </Link>
          <Link href="https://chat.whatsapp.com/GUnUOJtxzD7DrGu1YlUDCd ">
            <Button
              variant="outline"
              className="rounded-[30px] transition-all duration-500"
            >
              Join our FREE Study Group
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page6;
