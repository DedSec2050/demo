import Image from "next/image";
import Marquee from "react-fast-marquee";
import { urls, desc } from "./data/Page8";

const Positions = () => {
  return (
    <div className="px-[2.5vw]">
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
      <div className="xxl:border-tb-[10px] mt-8 flex w-[100%] flex-row">
        <Marquee>
          {urls.map((url, index) => {
            return (
              <div key={index} className="mr-[5rem] mt-4 w-[100%]">
                <Image
                  responsive
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
    </div>
  );
};

export default Positions;
