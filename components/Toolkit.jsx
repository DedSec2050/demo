import { toolkitData, toolkitTitle } from "./data/Page4";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";
const Page4 = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex h-[10rem] w-[100%] flex-col items-center justify-evenly bg-title bg-cover bg-center bg-no-repeat text-center leading-8">
        <h1 className="text-clamptextmd">
          <strong>
            <span className="text-accent">
              "FAQs: Uncover Answers Instantly!"
            </span>
          </strong>
        </h1>
        <h1 className="text-clamptextsm text-black">
          <strong>Your Queries, Our Quick Solutions.</strong>
        </h1>
        <Button
          className="w-[14rem] justify-around rounded-full border-2 text-black"
          variant="outline"
        >
          Explore More <FaArrowRightLong />
        </Button>
      </div>
      <div className="flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="w-full md:w-[70vw]">
          <h1 className="text-clampheader md:text-clamptitle">
            <strong>
              <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
                Why CISSP Success{" "}
              </span>{" "}
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                toolkit
              </span>
            </strong>{" "}
          </h1>
          <h1 className="leading-2 mb-4 text-clamptextmd">{toolkitTitle}</h1>
          {toolkitData.map((data, index) => {
            return (
              <li className="px-6 text-clamptextsm" key={index}>
                {data}
              </li>
            );
          })}
        </div>
        <div className="md:[20rem] md:[20rem] mx-auto flex h-[13rem] w-[13rem] bg-faq bg-contain bg-no-repeat"></div>
      </div>
      <Button
        variant="outline"
        className="mt-4 w-[13rem] justify-around rounded-full border-2 text-white"
      >
        Explore more
        <FaArrowRightLong />
      </Button>
    </section>
  );
};

export default Page4;
