import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

const Guidelines = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-[30px] py-0 sm:px-[50px] xl:px-[10vw]">
        <section className="relative flex w-full flex-col items-center text-justify">
          <div className="flex">
            <h2 className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
              Others teach you CISSP
            </h2>
          </div>
          <div className="mb-6 flex xl:mb-0 xl:translate-y-[-35px]">
            <h2 className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
              We coach you how to pass CISSP
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-clamptextmd font-semibold text-accent xxl:mb-[4vh] xxl:mt-[6vh] xxl:text-[1.5vw]">
              Updated as per new guidelines from April 2024
            </h2>
          </div>
          <div className="flex py-2 text-justify text-[1.3rem] font-medium leading-10 sm:text-clamptextsmm xxl:w-[65vw] xxl:text-[1.3vw] xxl:leading-normal">
            (ISC)2 CISSP Exam is tricky and only studying the course content is
            not enough to pass the exam. Believe me, many Aspirants do in-depth
            CISSP Preparation but they still fail the CISSP Certification Exam.
            The reason is - you need special skills and mindset to pass the
            challenging exam. Unfortunately, most of the training focus on the
            content but not on the Exam taking skills.{" "}
          </div>
          <div className="flex py-4 text-[1.3rem] font-medium leading-10 sm:text-clamptextsmm xxl:w-[65vw] xxl:text-[1.3vw] xxl:leading-normal">
            CISSP Success Toolkit is the one and only program which trains you
            for the challenging CISSP exam through our 60+hours of Live Exam
            practice. This is just one feature, let me tell you more.
          </div>

          <div className="mb-7 mt-8 flex w-[70vw] overflow-hidden rounded-[25px] border-2 border-accent bg-gray-600 sm:min-h-[320px] md:w-[62vw] xl:max-w-[860px] xxl:w-[55vw] xxl:max-w-[1080px] [&>div>div>button]:bg-red-600 [&>div>div>button]:bg-opacity-100">
            <MediaPlayer
              title="Sprite Fight"
              src="https://www.youtube.com/watch?v=FbDVfEE81cY&t=738s"
              playsInline
            >
              <MediaProvider />
              <PlyrLayout
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={plyrLayoutIcons}
              />
            </MediaPlayer>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Guidelines;
