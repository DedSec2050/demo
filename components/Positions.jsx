import Image from "next/image";
import Marquee from "react-fast-marquee";
import { urls, desc } from "./data/Page8";

const Positions = () => {
  return (
    <section>
      <div className="px-[30px] sm:px-[50px] xl:px-[10vw]">
        <div className="rounded-[30px] border-4 bg-gradient-to-r from-[#FFFFFF66] via-[#F9F9F9] to-[#F9F9F9]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-clamptitle leading-normal">
              <strong>
                <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
                  Our Partners and Clients
                </span>{" "}
              </strong>
            </h1>
          </div>
          <div className="xxl:border-tb-[10px] flex h-[150px] w-[100%] flex-row md:h-[250px]">
            <Marquee>
              {urls.map((url, index) => {
                return (
                  <div key={index} className="mr-[5rem] mt-4 w-[100%]">
                    <Image
                      src={url}
                      width={170}
                      height={73}
                      className={`${index} ` + ""}
                      alt="positions"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positions;
