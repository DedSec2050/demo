"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
// Importing the navigation and pagination modules
import { Pagination } from "swiper/modules";
// Import css for Navigation and Pagination modules
import "swiper/css/pagination";

const MovSlider = () => {
  return (
    <section className="flex md:hidden">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="text-center">
          <div className="flex h-[35dvh] w-[100dvw] flex-col justify-center bg-companyGold bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 font-bold leading-normal [&>.accent]:text-companyBlue [&>h2]:text-[1.6rem] [&>h2]:text-black">
              <h2>Give me 100 Days,</h2>
              <h2 className="accent">I will Get You</h2>
              {/* <h2 className="accent"></h2> */}
              <h2 className="accent">CISSP Certified</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="flex h-[35dvh] w-[100dvw] flex-col justify-center bg-companyBlue bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 font-bold leading-normal [&>.accent]:text-accent [&>h2]:text-[1.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Our Courses <br />
              </h2>
              <h2 className="accent">"Scale New Heights With</h2>
              <h2 className="accent">CyberSecurity Certifications"</h2>
            </div>
            <div className="relative flex w-full justify-center gap-x-2">
              <Button>Explore More</Button>
              <Button>Buy 1 Get 1 Free. Hurry!</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="flex h-[35dvh] w-[100dvw] flex-col justify-center bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 font-bold leading-normal text-black [&>.accent]:text-black [&>h2]:text-[1.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Corporate Trainings
                <br />
              </h2>
              <h2 className="accent">"Skill up your workforce"</h2>
              {/* <h2 className="accent">personalized cybersecurity training"</h2> */}
            </div>
            <div className="relative flex w-full justify-center gap-x-2">
              <Button className="bg-companyGrn">Learn More</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="flex h-[35dvh] w-[100dvw] flex-col justify-center bg-black bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 font-bold leading-normal [&>.accent]:text-accent [&>h2]:text-[1.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Cybersecurity Consulting
                <br />
              </h2>
              <h2 className="accent">"Control Cybersecurity risks</h2>
              {/* <h2 className="accent">personalized cybersecurity training"</h2> */}
            </div>
            <div className="relative flex w-full justify-center gap-x-2">
              <Button>Learn More</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MovSlider;
