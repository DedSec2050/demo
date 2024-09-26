import BackWrapper from "@/components/BackWrapper";
import Banner from "@/components/Banner";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

import React from "react";

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
  { index: <p>950+ Concept Assessments</p> },
  { index: <p>World class Exam Engine</p> },
  { index: <p>Community Support</p> },
  { index: <p>Mobile app</p> },
];
const premiumBundle = [
  { index: <p>Customizable Preparation Plan</p> },
  { index: <p>Structured Daily Videos</p> },
  { index: <p>Smart Study Guide</p> },
  { index: <p>950+ Concept Assessments</p> },
  { index: <p>World class Exam Engine</p> },
  { index: <p>Community Support</p> },
  { index: <p>Mobile app</p> },
  { index: <p>60+ hours of Live Exam Practice</p> },
  { index: <p>1:1 Mentoring</p> },
  { index: <p>Exam Booking Assistance</p> },
  { index: <p>Last 15 Days Exam Prep</p> },
];
const corporateTraining = [
  { index: <p>Customizable Preparation Plan</p> },
  { index: <p>Structured Daily Videos</p> },
  { index: <p>Smart Study Guide</p> },
  { index: <p>950+ Concept Assessments</p> },
  { index: <p>World class Exam Engine</p> },
  { index: <p>Community Support</p> },
  { index: <p>Mobile app</p> },
  { index: <p>48 Hour of BootCamp Training</p> },
];

export default function courselist() {
  return (
    <section>
      <Header />
      <div className="sm: w-full text-center text-[1.3rem] font-bold sm:text-[2.3rem] md:text-[3.3rem]">
        Our CISSP MasterClasses
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-x-2 gap-y-4 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 [&>div]:flex [&>div]:min-w-[280px] [&>div]:flex-col [&>div]:justify-center [&>div]:justify-self-center [&>div]:rounded-[20px] [&>div]:bg-red-500 [&>div]:px-4 [&>div]:py-4 md:[&>div]:min-w-[330px]">
        <div className="">
          {selfPaced.map((item, index) => (
            <div key={index}>{item.index}</div>
          ))}
        </div>
        <div className="">
          {premiumBundle.map((item, index) => (
            <div key={index}>{item.index}</div>
          ))}
        </div>
        <div className="">
          {corporateTraining.map((item, index) => (
            <div key={index}>{item.index}</div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
