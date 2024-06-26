import Image from "next/image";
import React from "react";
import photo from "../public/assets/Comparision/comparisionfinal.webp";
const Page7 = () => {
  return (
    <section className="mt-7 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-clamptitle">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              CISSP Certification Bootcamp VS CISSP
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
              Success Toolkit
            </span>
          </strong>
        </h1>
        <div className="text-clamptextsmm mt-10 w-[84vw] font-medium leading-9">
          CISSP Exam not only test your knowledge but also test your ability to
          take security decisions based on cognitive thinking as a leader. To
          Establish yourself as a Subject Matter Expert (SME) and a thought
          leader, you need to relate the CISSP Concepts with real world
          scenarios. This transformation requires time and a 5 day CISSP
          Certification bootcamp providing CISSP Training Online is barely
          effective. These CISSP Courses are very high level.
        </div>
        <div className="text-clamptextsmm mt-[40px] w-[84vw] font-medium leading-9">
          CISSP Success Toolkit has been curated with the same intent in mind
          and has been programmed for busy working professionals to successfully
          make this transformation and pass the exam with 10x ease.
        </div>
        <div className="text-clamptextsmm mt-[40px] w-[84vw] font-medium leading-9">
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
