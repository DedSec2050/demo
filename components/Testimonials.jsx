import Marquee from "react-fast-marquee";

import Image from "next/image";
import { Button } from "./ui/button";
import vidplay from "../public/assets/vidplay.webp";

const list = [
  {
    name: "Gautham Bangari",
    time: "Sep 22",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra egestas cursus placerat in sagittis consectetur elit sed. Arcu a consectetur aenean semper lobortis in eget bibendum ipsum.",
  },
  {
    name: "Gautham Bangari",
    time: "Sep 22",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra egestas cursus placerat in sagittis consectetur elit sed. Arcu a consectetur aenean semper lobortis in eget bibendum ipsum.",
  },
  {
    name: "Gautham Bangari",
    time: "Sep 22",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra egestas cursus placerat in sagittis consectetur elit sed. Arcu a consectetur aenean semper lobortis in eget bibendum ipsum.",
  },
  {
    name: "Gautham Bangari",
    time: "Sep 22",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra egestas cursus placerat in sagittis consectetur elit sed. Arcu a consectetur aenean semper lobortis in eget bibendum ipsum.",
  },
  {
    name: "Gautham Bangari",
    time: "Sep 22",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra egestas cursus placerat in sagittis consectetur elit sed. Arcu a consectetur aenean semper lobortis in eget bibendum ipsum.",
  },
];
const Page8 = () => {
  return (
    // Slideshow Testimonials section
    <section className="mt-8 flex flex-col">
      {/* Add Testimonial Section here  */}
      <div className="mt-8">
        <h1 className="mt-8 text-center text-clamptitle leading-9">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent xxl:text-[2.5vw]">
              See what Participants say
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent xxl:text-[2.5vw]">
              about us:
            </span>
            <br />
          </strong>
        </h1>
      </div>
      <div className="flex px-4 py-8">
        <Marquee>
          {" "}
          {list.map((data, index) => {
            return (
              <div
                className="mt-[150px] w-[100%] px-10 xxl:px-[7vw]"
                key={index}
              >
                <div className="flex h-[300px] w-[20rem] flex-col items-center justify-center rounded-[3%] border-4 border-accent xxl:h-[43rem] xxl:w-[40rem]">
                  <div className="image flex translate-y-[-45px] py-2 xxl:translate-y-[-120px]">
                    <div className="bg-blue h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-blue-500 drop-shadow-blue xxl:h-[200px] xxl:w-[200px]">
                      <Image src="/assets/Testimonials/demo.webp" alt="" fill />
                    </div>
                  </div>
                  <div className="justify-centers flex translate-y-[-40px] flex-col items-center px-4 text-center">
                    <div className="name mt-6 translate-y-[-30px] text-[1rem] xxl:translate-y-[-100px] xxl:text-[1.3vw]">
                      {data.name}
                    </div>
                    <div className="sep translate-y-[-28px] text-[0.75rem] xxl:translate-y-[-110px] xxl:text-[1.3vw]">
                      Nailed CISSP in {data.time}
                    </div>
                    <div className="px-5 text-[0.85rem] xxl:translate-y-[-80px] xxl:text-[1.1vw]">
                      {data.text}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 h-[75px] w-[75px] translate-x-[43rem] translate-y-[-2.5rem] md:h-[100px] md:w-[100px] md:translate-x-[42rem] xxl:h-[250px] xxl:w-[250px] xxl:translate-x-[34rem] xxl:translate-y-[-8.5rem]">
                  <Image
                    src={vidplay}
                    height={368}
                    width={368}
                    alt="video play"
                  />
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Page8;
