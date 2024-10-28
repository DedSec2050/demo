"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
// Importing the navigation and pagination modules
import { Pagination, Autoplay } from "swiper/modules";
// Import css for Navigation and Pagination modules
import "swiper/css/pagination";
import CISSPcontact from "./CISSPcontact";

const Slider = () => {
  return (
    <section className="hidden bg-white md:flex [&>div]:h-[70dvh]">
      <div
        style={{ right: 0 }}
        className="t-0 r-0 absolute z-[10] hidden h-[500px] w-[500px] items-center xl:flex [&>div]:max-h-[600px] [&>div]:rounded-[30px] [&>div]:bg-[#8889947a]"
      >
        <CISSPcontact />
      </div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="flex h-[70dvh] w-[100dvw] flex-col justify-center bg-slidebgOne bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 px-10 py-10 font-bold leading-normal [&>.accent]:text-accent [&>h2]:text-[2.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Give us 100 Days </h2>
                <br /> 
              <h2 className="accent">We will get you CISSP Certified</h2>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex h-[70dvh] w-[100dvw] flex-col justify-center bg-slidebgTwo bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 px-10 py-10 font-bold leading-normal [&>.accent]:text-accent [&>h2]:text-[2.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Our Courses <br />
              </h2>
              <h2 className="accent">"Scale New Heights With</h2>
              <h2 className="accent">CyberSecurity Certifications"</h2>
            </div>
            <div className="relative flex max-w-[290px] flex-col gap-y-6 py-4">
              <Button>Explore More</Button>
              <Button>Buy 1 Get 1 Free. Hurry!</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex h-[70dvh] w-[100dvw] flex-col justify-center bg-slidebgFour bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 px-10 py-10 font-bold leading-normal [&>.accent]:text-accent [&>h2]:text-[2.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Corporate Trainings
                <br />
              </h2>
              <h2 className="accent">"Skill up your workforce with our</h2>
              <h2 className="accent">personalized cybersecurity training"</h2>
            </div>
            <div className="relative flex max-w-[200px] flex-col gap-y-6 py-4">
              <Button>Learn More</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex h-[70dvh] w-[100dvw] flex-col justify-center bg-slidebgThree bg-cover [&>div]:px-10 [&>div]:py-10">
            <div className="top-0 font-bold leading-normal [&>.accent]:text-accent [&>h2]:text-[2.6rem] xl:[&>h2]:text-[3.4rem]">
              <h2>
                Cybersecurity Consulting
                <br />
              </h2>
              <h2 className="accent">"Control Cybersecurity risks with our</h2>
              <h2 className="accent">personalized cybersecurity training"</h2>
            </div>
            <div className="relative flex max-w-[200px] flex-col gap-y-6 py-4">
              <Button>Learn More</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
