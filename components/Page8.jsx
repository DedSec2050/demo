import Marquee from "react-fast-marquee";
import { urls, desc } from "./data/Page8";
import Image from "next/image";
const Page8 = () => {
  return (
    // Slideshow Testimonials section
    <section className="flex flex-col">
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
                  alt=""
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
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              See what Participants say
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
              about us:
            </span>
            <br />
            Slider goes here
          </strong>
        </h1>
      </div>
      <div className="flex w-screen flex-col items-center justify-center">
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
        <div className="relative h-[12rem] min-h-[12em] w-[15em] overflow-hidden rounded-lg border-4 border-accent md:h-[22rem] md:w-[30rem]">
          <Image
            src="/assets/trainerConnect.webp"
            priority
            quality={50}
            layout="fill"
            alt=""
            objectFit="cover"
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
