import Marquee from "react-fast-marquee";
import { urls, desc } from "./data/Page8";
import Image from "next/image";
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-clamptitle leading-normal">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              Our students are serving on top
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
              positions here
            </span>
          </strong>
        </h1>
      </div>
      <div className="mt-8 flex w-[100%] flex-row">
        <Marquee>
          {urls.map((url, index) => {
            return (
              <div key={index} className="mr-[5rem] mt-4 w-[100%]">
                <Image
                  src={url}
                  width={170}
                  height={73}
                  className={`${index} ` + ""}
                  alt=""
                />
              </div>
            );
          })}
        </Marquee>
      </div>
      {/* Add Testimonial Section here  */}
      <div className="mt-8">
        <h1 className="mt-8 text-center text-clamptitle leading-9">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              See what Participants say
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
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
              <div className="mt-[150px] w-[100%] px-10" key={index}>
                <div className="flex w-[20rem] flex-col rounded-[10%] border-4 border-accent">
                  <div className="image flex translate-y-[-75px] flex-col items-center justify-center overflow-hidden py-2">
                    <div className="bg-blue overflow-hidden rounded-full border-4 border-blue-500 drop-shadow-blue">
                      <Image
                        src="/assets/Testimonials/demo.webp"
                        alt=""
                        width={130}
                        height={80}
                      />
                    </div>
                    <div className="name mt-6 text-[1rem]">{data.name}</div>
                    <div className="sep text-[0.75rem]">
                      Nailed CISSP in {data.time}
                    </div>
                  </div>
                  <div className="justify-centers flex translate-y-[-40px] flex-col items-center px-4 text-center">
                    <div className="text-[0.85rem]">{data.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      <div className="flex w-screen flex-col items-center justify-center py-8">
        <h1 className="mt-7 text-center text-clamptitle">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              Connect with your
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
              coach
            </span>
          </strong>
        </h1>
        <div className="relative mt-8 h-[12rem] min-h-[12rem] w-[15rem] overflow-hidden rounded-lg border-4 border-accent md:h-[21rem] md:w-[30rem]">
          <Image
            src="/assets/trainerConnect.webp"
            priority
            fill
            quality={50}
            alt=""
          />
        </div>
        <div className="mt-4 flex max-w-[700px] px-4">
          <p className="text-center text-clamptextsm">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Page8;
