import BackWrapper from "@/components/BackWrapper";
import Banner from "@/components/Banner";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { TiTickOutline } from "react-icons/ti";

import React from "react";
import { Button } from "@/components/ui/button";

// const courseData = {
//   selfPaced: {
//     {"0": <p>Customizable Preparation Plan</p>},
//     {"1": <p>Structured Daily Videos</p>},
//     {2: <p>Smart Study Guide</p>},
// {3: <p>950+ Concept Assessments</p>},
// {4: <p>World class Exam Engine</p>},
//     {5: <p>Community Support</p>},
//     {6: <p>Mobile app</p>},
//   },
//   premiumBundle: {
//     0: <p>Customizable Preparation Plan</p>,
//     1: <p>Structured Daily Videos</p>,
//     2: <p>Smart Study Guide</p>,
//     3: <p>950+ Concept Assessments</p>,
//     4: <p>World class Exam Engine</p>,
//     5: <p>Community Support</p>,
//     6: <p>Mobile app</p>,
//     7: <p>60+ hours of Live Exam Practice</p>,
//     8: <p>1:1 Mentoring</p>,
//     9: <p>Exam Booking Assistance</p>,
//     10: <p>Last 15 Days Exam Prep</p>,
//   },
//   corporateTraining: {
//     0: <p>Customizable Preparation Plan</p>,
//     1: <p>Structured Daily Videos</p>,
//     2: <p>Smart Study Guide</p>,
//     3: <p>950+ Concept Assessments</p>,
//     4: <p>World class Exam Engine</p>,
//     5: <p>Community Support</p>,
//     6: <p>Mobile app</p>,
//     7: <p>48 Hour of BootCamp Training</p>,
//   },
// };

const selfPaced = [
  { index: <p>Customizable Preparation Plan</p> },
  { index: <p>Structured Daily Videos</p> },
  { index: <p>Smart Study Guide</p> },
  {
    index: (
      <p>
        <span className="text-[1.5rem] text-[#8E59FC] sm:text-[1.9rem]">
          950+
        </span>{" "}
        Concept Assessments
      </p>
    ),
  },
  {
    index: (
      <p>
        World class{" "}
        <span className="text-[1.5rem] text-[#8E59FC] sm:text-[1.9rem]">
          Exam Engine
        </span>
      </p>
    ),
  },
  { index: <p>Community Support</p> },
  {
    index: (
      <p className="text-[1.5rem] text-[#8E59FC] sm:text-[1.9rem]">
        Mobile App
      </p>
    ),
  },
];
const premiumBundle = [
  { index: <p>Customizable Preparation Plan</p> },
  { index: <p>Structured Daily Videos</p> },
  { index: <p>Smart Study Guide</p> },
  { index: <p>950+ Concept Assessments</p> },
  { index: <p>World class Exam Engine</p> },
  { index: <p>Community Support</p> },
  { index: <p>Mobile app</p> },
  {
    index: (
      <p className="leading-tight">
        60+ hours of <br></br>
        <span className="text-[1.5rem] text-[#FD875B] sm:text-[1.9rem]">
          Live Exam Practice
        </span>
      </p>
    ),
  },
  {
    index: (
      <p>
        <span className="text-[1.5rem] text-[#FD875B] sm:text-[1.9rem]">
          1:1
        </span>{" "}
        Mentoring
      </p>
    ),
  },
  {
    index: (
      <p>
        Exam{" "}
        <span className="text-[1.5rem] text-[#FD875B] sm:text-[1.9rem]">
          Booking Assistance
        </span>
      </p>
    ),
  },
  {
    index: (
      <p>
        Last 15 Days{" "}
        <span className="text-[1.5rem] text-[#FD875B] sm:text-[1.9rem]">
          Exam Prep
        </span>
      </p>
    ),
  },
];
const corporateTraining = [
  { index: <p>Customizable Preparation Plan</p> },
  { index: <p>Structured Daily Videos</p> },
  { index: <p>Smart Study Guide</p> },
  { index: <p>950+ Concept Assessments</p> },
  { index: <p>World class Exam Engine</p> },
  { index: <p>Community Support</p> },
  { index: <p>Mobile app</p> },
  {
    index: (
      <p className="text-[#F04FB2]">
        48 Hour of{" "}
        <span className="text-[1.3rem] text-[#f759fc] sm:text-[1.8rem]">
          BootCamp Training
        </span>
      </p>
    ),
  },
];

export default function courselist() {
  return (
    <section>
      <Header />
      <Floater />
      <div className="sm: w-full text-center text-[1.3rem] font-bold sm:text-[2.3rem] md:text-[3.3rem]">
        Our CISSP MasterClasses
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-y-4 sm:grid-cols-2 md:text-[1.5rem] xl:grid-cols-3 [&>div>.itemlist>p]:font-semibold [&>div>.itemlist>p]:leading-tight [&>div>.itemlist]:px-4 [&>div>.itemlist]:py-4 [&>div>.itemlist]:font-semibold [&>div]:flex [&>div]:min-w-[280px] [&>div]:max-w-[310px] [&>div]:flex-col [&>div]:justify-center [&>div]:justify-self-center [&>div]:rounded-[20px] [&>div]:bg-gradient-to-r [&>div]:from-[#947fbd18] [&>div]:to-[#ffffff2f] sm:[&>div]:max-w-[450px] md:[&>div]:min-w-[330px]">
        <div className="overflow-hidden">
          <div className="flex h-[70px] w-full items-center justify-center bg-gradient-to-r from-[#8E59FC] to-[#8f59fc6e] text-center text-[1.4rem] font-bold xl:text-[1.9rem]">
            Self Study
          </div>
          <div className="itemlist">
            {selfPaced.map((item, index) => (
              <div key={index} className="flex items-center">
                <TiTickOutline className="text-[1.5rem] md:text-[1.7rem]" />
                <p>{item.index}</p>
              </div>
            ))}
          </div>
          <div className="self-center py-4">
            <Button className="bg-gradient-to-r from-[#9259fc] via-[#9259fc] to-[#8f59fc6e] font-semibold text-white">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex h-[70px] w-full items-center justify-center bg-gradient-to-r from-[#FD875B] to-[#FD875B6e] text-center text-[1.4rem] font-bold xl:text-[1.9rem] xlg:min-w-[450px]">
            <span className="px-4">
              Self Study +{" "}
              <span className="xl:text-[2.1rem]">Live Classes</span>
            </span>
          </div>
          <div className="itemlist">
            {premiumBundle.map((item, index) => (
              <div key={index} className="flex items-center">
                <TiTickOutline className="text-[1.5rem] md:text-[1.7rem]" />
                <p className="">{item.index}</p>
              </div>
            ))}
          </div>
          <div className="self-center py-4">
            <Button className="bg-gradient-to-r from-[#FD875B] via-[#FD875B] to-[#FD875B6e] font-semibold text-white">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex min-h-[70px] w-full items-center justify-center bg-gradient-to-r from-[#F04FB2] to-[#F04FB26e] text-center text-[1.4rem] font-bold leading-normal xl:text-[1.9rem]">
            <span className="px-4">Live Classes + Personalised Mentoring</span>
          </div>
          <div className="itemlist">
            {corporateTraining.map((item, index) => (
              <div key={index} className="flex items-center">
                <TiTickOutline className="text-[1.5rem] md:text-[1.7rem]" />
                <p>{item.index}</p>
              </div>
            ))}
          </div>
          <div className="self-center py-4">
            <Button className="bg-gradient-to-r from-[#F04FB2] via-[#F04FB2] to-[#F04FB26e] font-semibold text-white">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </section>
  );
}
