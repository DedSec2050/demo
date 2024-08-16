import Image from "next/image";
import React from "react";
import photo from "../public/assets/Comparision/comparisionfinal.webp";
import { Button } from "./ui/button";
import Link from "next/link";
import HeroContact from "./HeroContact";
const Page7 = () => {
  return (
    <section className="flex translate-x-2 sm:translate-x-0">
      <div className="mt-[30px] flex flex-col items-center justify-center px-[30px] sm:px-[50px] xl:my-[60px]">
        <div className="flex flex-col items-center justify-center [&>div]:text-justify">
          <div className="rounded-[30px] border-2 bg-gradient-to-t from-[#739DED66] to-[#A8AEE000] p-6">
            <h2 className="text-center text-clamptitle">
              <strong className="flex-row items-center justify-center gap-x-2">
                <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] leading-8 text-transparent xxl:text-[2.5vw]">
                  CISSP Certification Bootcamps <br className="" />
                  VS <br className="" />
                  CISSP Success Toolkit (CST)
                </span>{" "}
              </strong>
            </h2>
            <div className="mt-10 text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
              CISSP Exam not only test your knowledge but also test your ability
              to take security decisions based on cognitive thinking as a
              leader. To Establish yourself as a Subject Matter Expert (SME) and
              a thought leader, you need to relate the CISSP Concepts with real
              world scenarios. This transformation requires time and a 5 day
              CISSP Certification bootcamp providing CISSP Training Online is
              barely effective. These CISSP Courses are very high level.
            </div>
            <div className="mt-[40px] text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
              CISSP Success Toolkit has been curated with the same intent in
              mind and has been programmed for busy working professionals to
              successfully make this transformation and pass the exam with 10x
              ease.
            </div>
            <div className="mb-[3rem] mt-[40px] w-full text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
              Let me show you why I call this program as a complete Eco-system.
            </div>
          </div>
          <div className="relative mt-[45px] flex w-full flex-col items-center justify-center gap-y-2 rounded-[30px] bg-transparent from-[#739DED66] to-[#A8AEE000] sm:p-10 md:border-2 md:bg-gradient-to-l">
            <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
              Contact Us
            </span>
            <HeroContact />
          </div>
          <div className="relative mt-[45px] flex w-full rounded-[30px] border-2 bg-transparent bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] p-10">
            <Image
              src={photo}
              priority
              height={1281}
              width={2056}
              alt="comparision"
            />
          </div>
        </div>

        <div className="mt-6 flex w-full items-center justify-center">
          <Link href="https://calendly.com/cisspsuccess">
            <Button className="scale-105 rounded-[30px] transition-all duration-500 xl:mt-10">
              Book a FREE Demo Class
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page7;
