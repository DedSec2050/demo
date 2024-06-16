import Marquee from "react-fast-marquee";
import { urls, desc } from "./data/Page8";
import Image from "next/image";
const Page8 = () => {
  return (
    // Slideshow Testimonials section
    <section className="flex flex-col p-[13px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-clamptitle leading-normal">
          <strong>Our students are serving on top positions here</strong>
        </h1>
      </div>
      <div className="flex w-[100%] flex-row">
        <Marquee>
          {urls.map((url, index) => {
            return (
              <div key={index} className="mr-[5rem] mt-4 w-[100%]">
                <Image
                  src={url}
                  width={170}
                  height={73}
                  className={`${index} ` + ""}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
      {/* Add Testimonial Section here  */}
      <div>
        <h1 className="text-center text-clamptitle leading-9">
          <strong>
            See what Participants say about us:
            <br />
            Slider goes here
          </strong>
        </h1>
      </div>
      <div className="flex w-screen flex-col items-center justify-center">
        <h1 className="mt-7 text-center text-clamptitle">
          <strong>Connect with you coach</strong>
        </h1>
        <div className="relative h-[12rem] min-h-[12em] w-[15em] overflow-hidden rounded-lg md:h-[22rem] md:w-[30rem]">
          <Image
            src="/assets/trainerConnect.webp"
            priority
            quality={50}
            layout="fill"
            alt=""
            objectFit="contain"
          />
        </div>
        <div className="flex max-w-[700px] px-4">
          <p className="text-center text-clamptextsm">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Page8;
