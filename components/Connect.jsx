"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/legacy/image";
import udemy from "../public/assets/Icons/udemy.webp";
import youtube from "../public/assets/Icons/youtube.webp";
import linkedin from "../public/assets/Icons/linkedin.webp";
import { urls, desc } from "./data/Page8";
import { useCollapse } from "react-collapsed";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

const btnlist = [
  {
    data: "LinkedIn",
    icon: linkedin,
  },
  {
    data: "Udemy",
    icon: udemy,
  },
  {
    data: "YouTube",
    icon: youtube,
  },
];

const Connect = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div className="flex w-screen flex-col items-center justify-center py-8">
      <h1 className="mt-7 text-center text-clamptitle xxl:text-[2.5vw]">
        <strong>
          <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
            Connect with your
          </span>{" "}
          <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
            coach
          </span>
        </strong>
      </h1>
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-[8vw]">
        <div className="relative mt-8 aspect-video min-h-[120px] w-[15rem] min-w-[252px] overflow-hidden rounded-[30px] border-4 border-accent md:max-w-[750px] lg:max-h-[560px] lg:min-h-[219px] lg:w-[39vw] lg:min-w-[418px]">
          <Image
            src="/assets/trainerConnect.webp"
            priority
            objectFit="cover"
            layout="responsive"
            width={519}
            height={319}
            quality={50}
            alt=""
          />
        </div>
        <div className="relative mt-8 aspect-video w-[15rem] min-w-[252px] overflow-hidden rounded-[30px] border-4 border-accent bg-gray-600 md:max-w-[750px] lg:max-h-[560px] lg:min-h-[219px] lg:w-[39vw] lg:min-w-[418px]">
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
      </div>
      <div className="mt-[15px] flex w-full flex-col items-center justify-around gap-[15px] px-[5vw] md:mt-[35px] md:flex-row md:px-[3vw]">
        {btnlist.map((data, index) => {
          return (
            <div key={index}>
              <div className="">
                <Button
                  variant="outline"
                  className="h-[5vh] w-[44vw] rounded-full text-white hover:bg-accent hover:text-black md:w-[24vw] xxl:text-[1vw]"
                >
                  Follow me on {data.data}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex max-w-[90vw] px-4 md:mt-[35px]">
        <div className="text-center text-clamptextsmm italic xxl:text-[2.5vw] xxl:leading-[6vh]">
          {desc}
          <div {...getCollapseProps()} className="flex flex-col">
            <span>
              Back in 2015, I embarked on my own CISSP journey. It was a
              challenging and often lonely path. There was no support or
              guidance available, and the resources were limited. It took me 11
              long months to pass the CISSP exam, relying solely on my strong
              will and determination.
            </span>
            <span>
              I remember the sleepless nights, the endless hours of studying,
              and the overwhelming feeling of uncertainty. I felt the
              frustration of navigating complex material without a clear
              roadmap. But I persevered, and that experience instilled in me a
              deep understanding of the pain points CISSP aspirants face.
            </span>
            <span>
              Determined to make a difference, I committed myself to mastering
              the CISSP exam. Over the years, I’ve helped thousands of
              professionals achieve their CISSP certification. I’ve taken my
              hard-earned lessons and created the CISSP Success Toolkit, a
              comprehensive, structured process designed to help you pass the
              CISSP exam on your first attempt.
            </span>
            <span>
              In my CISSP Success Toolkit, you’ll find a well-structured 100-day
              plan tailored for busy professionals, interactive resources,
              mindset sessions, and live classes with CISSP specialists. This
              ecosystem is built to support you every step of the way,
              addressing the very challenges I faced during my journey. As the
              CISSP Exam Cost is very high, I have devised my toolkit in a way
              to be much more affordable for every CISSP Aspirant who intend to
              obtain the CISSP Tuitions.
            </span>
            <span>
              I understand the struggles you're going through because I’ve been
              there myself. I know the dedication it takes, the sacrifices you
              make, and the determination required to succeed. My mission is to
              provide you with the guidance and support I wish I had, so you can
              achieve your CISSP dream with confidence.
            </span>
            <span>
              Join the CISSP Succes toolkit program and let’s start the journey
              together. I am sure, with my experience and your dedication, we
              will transform your CISSP aspirations into reality.
            </span>
            <span>Your success story starts here</span>
          </div>
          <button
            className="ml-[2vw] rounded-[5%] bg-slate-500 px-[5px] text-clamptextsm text-accent"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
