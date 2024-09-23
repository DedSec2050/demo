"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
// Importing the navigation and pagination modules
import { Pagination, Autoplay } from "swiper/modules";
// Import css for Navigation and Pagination modules
import "swiper/css/pagination";

import Link from "next/link";

// Data from Programs and Courses
const data = [
  [
    [
      {
        title: "CISSP Success Toolkit",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgOne bg-cover",
      },
      {
        title: "Certified in Cybersecurity",
        type: "Courses",
        url: "",
        bg: "bg-sldbgTwo bg-cover",
      },
    ],
    [
      {
        title: "pCIDSS v4.0",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgThree bg-cover",
      },
      {
        title: "CISM Success Toolkit",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgFour bg-cover",
      },
    ],
  ],
  [
    [
      {
        title: "CISSP Success Toolkit 2.0",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgOne bg-cover",
      },
      {
        title: "Certified in Cybersecurity 2.0",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgTwo bg-cover",
      },
    ],
    [
      {
        title: "pCIDSS v4.0 2.0",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgThree bg-cover",
      },
      {
        title: "CISM Success Toolkit 2.0",
        type: "Courses",
        url: "#",
        bg: "bg-sldbgFour bg-cover",
      },
    ],
  ],
];

const ProgramFeatures = () => {
  return (
    <section className="py-8 lg:px-8">
      <div>
        <div className="py-4 text-[1.4rem] font-bold text-accent">
          <h2>Programs and Courses</h2>
        </div>
        <div className="flex flex-col justify-around md:flex-row xl:h-[80dvh] xl:max-h-[800px]">
          <div className="[&>h3:hover]:border-l-2 [&>h3:hover]:border-accent-hover [&>h3:hover]:text-accent-hover [&>h3:hover]:transition-all [&>h3:hover]:ease-linear [&>h3]:px-6 [&>h3]:font-bold">
            <h3>All</h3>
            <h3>Courses</h3>
            <h3>Webinars</h3>
            <ul className="[&>li]:text list-disc px-14 [&>li:hover]:text-accent-hover">
              <li> Old Webinars</li>
              <li> Upcoming Webinars</li>
            </ul>
            <h3>Free Resources</h3>
            <h3>Others</h3>
          </div>
          <div className="max-w-[100%] py-6 md:my-0 md:block md:max-w-[600px] xl:max-w-[1000px]">
            <Swiper
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              grabCursor={true}
              className="[&>div>span]:bg-accent [&>div]:translate-y-[50px]"
            >
              {data.map((slide, index) => (
                <SwiperSlide key={index} className="">
                  <div className="flex flex-col items-center justify-center xs:flex-row">
                    {slide.map((item, index) => (
                      <div
                        key={index}
                        className={
                          "m-1 flex h-[250px] w-[200px] items-end md:h-[180px] md:w-[250px] lg:m-4 lg:h-[280px] lg:w-[380px] " +
                          `${item[0].bg}`
                        }
                      >
                        <div className="w-full bg-accent px-2 py-4 leading-normal text-black">
                          <h3 className="font-bold xl:text-[1.3rem]">
                            <Link href={item[0].url}>{item[0].title}</Link>
                          </h3>
                          <p className="font-semibold">{item[0].type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center xs:flex-row">
                    {slide.map((item, index) => (
                      <div
                        key={index}
                        className={
                          "m-1 flex h-[250px] w-[200px] items-end md:h-[180px] md:w-[250px] lg:m-4 lg:h-[280px] lg:w-[380px] " +
                          ` ${item[1].bg}`
                        }
                      >
                        <div className="w-full bg-accent px-2 py-4 leading-normal text-black">
                          <h3 className="font-bold xl:text-[1.3rem]">
                            {item[1].title}
                          </h3>
                          <p className="font-semibold">{item[1].type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

// <div className="flex items-center justify-center">
// <div className="m-1 flex h-[100px] w-[150px] items-end bg-gray-500 md:h-[180px] md:w-[250px] lg:m-4 lg:h-[280px] lg:w-[380px]">
//   <div className="w-full bg-accent px-2 py-4 leading-normal text-black">
//     {" "}
//     <h3 className="font-bold xl:text-[1.3rem]">
//       CISSP Success Toolkit
//     </h3>
//     <p className="font-semibold">Courses</p>
//   </div>
// </div>
// <div className="m-1 flex h-[100px] w-[150px] items-end bg-gray-500 md:h-[180px] md:w-[250px] lg:m-4 lg:h-[280px] lg:w-[380px]">
//   <div className="w-full bg-accent px-2 py-4 leading-normal text-black">
//     <h3 className="font-bold xl:text-[1.3rem]">
//       CISSP Success Toolkit
//     </h3>
//     <p className="font-semibold">Courses</p>
//   </div>
// </div>
// </div>
// <div className="flex items-center justify-center">
// <div className="m-1 flex h-[100px] w-[150px] items-end bg-gray-500 md:h-[180px] md:w-[250px] lg:m-4 lg:h-[280px] lg:w-[380px]">
//   <div className="w-full bg-accent px-2 py-4 leading-normal text-black">
//     <h3 className="font-bold xl:text-[1.3rem]">
//       CISSP Success Toolkit
//     </h3>
//     <p className="font-semibold">Courses</p>
//   </div>
// </div>
// <div className="m-1 flex h-[100px] w-[150px] items-end bg-gray-500 md:h-[180px] md:w-[250px] lg:m-4 lg:h-[280px] lg:w-[380px]">
//   <div className="w-full bg-accent px-2 py-4 leading-normal text-black">
//     <h3 className="font-bold xl:text-[1.3rem]">
//       CISSP Success Toolkit
//     </h3>
//     <p className="font-semibold">Courses</p>
//   </div>
// </div>
// </div>

export default ProgramFeatures;
