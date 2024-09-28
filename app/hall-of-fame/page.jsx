import Banner from "@/components/Banner";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const listData = [
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
  {
    picPath: "/assets/SliderAssets/",
    altText: "demo",
    date: "17 Nov 2024",
    testimonials: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
        velit numquam perferendis. Tempore obcaecati deleniti incidunt sapiente
        ipsum sequi quis laborum, earum odit sunt quasi dolores consequatur
        facere temporibus!
      </p>
    ),
    socials: "Socials",
  },
];
const page = () => {
  return (
    <div>
      <Banner />
      <Floater />
      <Header />
      <section className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-20">
        <h1 className="font-700 mb-[30px] text-[40px] font-bold text-accent">
          Hall of Fame
        </h1>
        {/* Content Container  */}
        <div className="flex min-w-[300px] flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-4 xlg:grid-cols-3">
          {listData.map((item, index) => {
            return (
              <div
                className="overflow-hidden rounded-[15px] border-[0.25px] border-accent"
                key={index}
              >
                <div className="flex bg-companyGrn">
                  {/* Image here  */}
                  <div className="hidden h-[250px] min-w-[250px] bg-green-500 md:flex">
                    <Image
                      height={250}
                      width={250}
                      src={item.picPath + (index + 1) + ".webp"}
                      alt={item.altText}
                    ></Image>
                  </div>
                  {/* Content Here  */}
                  <div className="flex min-w-[280px] flex-col bg-gradient-to-tr from-[#060f38] via-[#060f38c4] to-[#060f38] px-4 py-4">
                    {/* Pass date  */}
                    <div className="self-end font-semibold">17 Nov 2024</div>
                    {/* Testimonials data here  */}
                    <div className="py-4 text-[0.8rem] leading-normal">
                      {item.testimonials}
                    </div>
                    {/* Socials here  */}
                    <div className="flex justify-end gap-x-2 self-end">
                      <Link rel="nofollow" href="#">
                        <AiFillYoutube className="text-[2.3rem] text-red-500" />
                      </Link>
                      <Link href="#" rel="nofollow">
                        <FaLinkedin className="text-[2.3rem] text-blue-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
