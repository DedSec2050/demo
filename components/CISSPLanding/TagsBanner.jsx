import gl from "@/public/assets/MarqueeAssets/googlelogo.webp";
import tl from "@/public/assets/MarqueeAssets/trustpilot.webp";
import ul from "@/public/assets/MarqueeAssets/udemylogo.webp";

import Image from "next/image";
const TagsBanner = () => {
  return (
    <section className="flex min-h-[140px] w-full items-center justify-center bg-black">
      <div className="flex items-center font-semibold text-white">
        Ratings :{" "}
        <div className="flex items-center gap-x-4 px-2 [&>img]:h-[26px] [&>img]:w-[26px]">
          <Image
            src={gl}
            height={26}
            width={26}
            alt="google rating for cybernous"
          ></Image>
          <span>4.1/5</span>

          <Image
            src={tl}
            height={26}
            width={26}
            alt="trustpilot rating for cybernous"
          ></Image>
          <span>4.9/5</span>

          <Image
            src={ul}
            height={26}
            width={26}
            alt="udemy rating for cybernous"
          ></Image>
          <span>4.5/5</span>
        </div>
      </div>
    </section>
  );
};

export default TagsBanner;
