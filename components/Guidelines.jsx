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
    <section className="relative flex w-full flex-col items-center text-center xl:px-[7vw]">
      <div className="flex">
        <h1 className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clamptitle font-bold text-transparent xxl:text-[2.5vw]">
          Others teach you CISSP
        </h1>
      </div>
      <div className="flex translate-y-[-15px]">
        <h1 className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clamptitle font-bold text-transparent xxl:text-[2.5vw]">
          We coach you how to pass CISSP
        </h1>
      </div>
      <div className="flex">
        <h1 className="text-clamptextmd font-semibold text-accent xxl:mb-[4vh] xxl:mt-[6vh] xxl:text-[1.5vw]">
          Updated as per new guidelines from April 2024
        </h1>
      </div>
      <div className="flex w-[80vw] py-2 text-clamptextsmm font-medium leading-10 xxl:w-[65vw] xxl:text-[1.3vw] xxl:leading-normal">
        (ISC)2 CISSP Exam is tricky and only studying the course content is not
        enough to pass the exam. Believe me, many Aspirants do in-depth CISSP
        Preparation but they still fail the CISSP Certification Exam. The reason
        is - you need special skills and mindset to pass the challenging exam.
        Unfortunately, most of the training focus on the content but not on the
        Exam taking skills.{" "}
      </div>
      <div className="flex w-[80vw] py-4 text-clamptextsmm font-medium leading-10 xxl:w-[65vw] xxl:text-[1.3vw] xxl:leading-normal">
        CISSP Success Toolkit is the one and only program which trains you for
        the challenging CISSP exam through our 60+hours of Live Exam practice.
      </div>
      <div className="flex justify-center py-4 text-center text-clamptextsmm font-medium leading-10 xxl:mb-[4vh] xxl:w-[65vw] xxl:text-[1.3vw] xxl:leading-normal">
        This is just one feature, let me tell you more.
      </div>
      <div className="mb-7 mt-8 flex w-[70vw] overflow-hidden rounded-[25px] border-2 border-accent bg-gray-600 sm:min-h-[320px] md:w-[62vw] xl:max-w-[860px] xxl:w-[55vw] xxl:max-w-[1080px]">
        <MediaPlayer
          title="Sprite Fight"
          src="https://www.youtube.com/watch?v=wo4p8eotDW4"
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
  );
};

export default Guidelines;
