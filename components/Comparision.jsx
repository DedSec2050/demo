import Image from "next/image";
import React from "react";
import photo from "../public/assets/Comparision/comparisionfinal.webp";
const Page7 = () => {
  return (
    <section className="mt-7 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center px-[2vw]">
        <h1 className="text-center text-clamptitle">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent xxl:text-[2vw]">
              CISSP Certification Bootcamp VS CISSP
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent xxl:text-[2.5vw]">
              Success Toolkit
            </span>
          </strong>
        </h1>
        <div className="mt-10 text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
          CISSP Exam not only test your knowledge but also test your ability to
          take security decisions based on cognitive thinking as a leader. To
          Establish yourself as a Subject Matter Expert (SME) and a thought
          leader, you need to relate the CISSP Concepts with real world
          scenarios. This transformation requires time and a 5 day CISSP
          Certification bootcamp providing CISSP Training Online is barely
          effective. These CISSP Courses are very high level.
        </div>
        <div className="mt-[40px] text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
          CISSP Success Toolkit has been curated with the same intent in mind
          and has been programmed for busy working professionals to successfully
          make this transformation and pass the exam with 10x ease.
        </div>
        <div className="mb-[3rem] mt-[40px] w-full text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
          Let me show you why I call this program as a complete Eco-system.
        </div>
        <div className="relative mt-[45px] flex h-[50vh] w-[90%] bg-transparent md:h-[90vh]">
          <Image
            src={photo}
            priority
            quality={80}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Page7;
