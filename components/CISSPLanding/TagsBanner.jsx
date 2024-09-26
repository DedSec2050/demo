import gl from "@/public/assets/MarqueeAssets/googlelogo.webp";
import tl from "@/public/assets/MarqueeAssets/trustpilot.webp";
import ul from "@/public/assets/MarqueeAssets/udemylogo.webp";
import el from "@/public/assets/Icons/elearning.webp";
import wl from "@/public/assets/Icons/whatsapp.webp";
import Image from "next/image";
import c1 from "@/public/assets/cissp/client/client1.webp";
const TagsBanner = () => {
  return (
    <section className="flex min-h-[70px] w-full items-center justify-center bg-black xl:[&>div]:px-10">
      <div className="flex items-center font-semibold text-white">
        Ratings :{" "}
        <div className="flex items-center gap-x-4 bg-green-500 px-2 [&>img]:h-[26px] [&>img]:w-[26px]">
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
      {/* Learnings Section  */}
      <div className="flex items-center justify-center">
        <div className="flex items-center px-2 [&>div]:h-[26px] [&>div]:w-[26px] [&>div]:overflow-hidden [&>div]:rounded-[50%] [&>div]:bg-red-500">
          <div>
            <Image src={c1} alt="client 1"></Image>
          </div>
          <div className="translate-x-[-10px]">
            <Image src={c1} alt="client 2"></Image>
          </div>
          <div className="translate-x-[-20px]">
            <Image src={c1} alt="client 2"></Image>
          </div>
        </div>
        <div className="flex h-[28px] translate-x-[-35px] items-center gap-x-2 rounded-xl bg-white px-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g clip-path="url(#clip0_12985_1953)">
              <path
                d="M11.0982 12.5676C12.3249 13.2289 13.2882 14.3209 13.7069 15.6689C13.7379 15.7687 13.7451 15.8744 13.7278 15.9775C13.7104 16.0805 13.6691 16.1781 13.6072 16.2622C13.5452 16.3464 13.4643 16.4148 13.371 16.4619C13.2778 16.5091 13.1747 16.5336 13.0702 16.5336H3.73757C3.63297 16.5339 3.52977 16.5095 3.43635 16.4625C3.34293 16.4154 3.26193 16.347 3.19991 16.2628C3.13789 16.1785 3.0966 16.0809 3.0794 15.9777C3.06219 15.8745 3.06956 15.7687 3.1009 15.6689C3.5209 14.3183 4.4869 13.2249 5.7169 12.5636C5.86946 12.4806 6.04603 12.4528 6.21673 12.485C6.38742 12.5172 6.54174 12.6074 6.65357 12.7403L7.9529 14.2989C8.00858 14.3658 8.0783 14.4196 8.1571 14.4566C8.23591 14.4935 8.32187 14.5127 8.4089 14.5127C8.49593 14.5127 8.5819 14.4935 8.6607 14.4566C8.7395 14.4196 8.80922 14.3658 8.8649 14.2989L10.1609 12.7436C10.2728 12.6106 10.4273 12.5205 10.5982 12.4884C10.769 12.4563 10.9457 12.4843 11.0982 12.5676ZM14.1796 2.26694L9.87023 0.746271C8.9422 0.419287 7.93051 0.417877 7.00157 0.742271L2.63957 2.26894C2.37609 2.35851 2.14755 2.52888 1.98645 2.7558C1.82536 2.98272 1.7399 3.25466 1.74223 3.53294C1.74223 4.11094 2.0949 4.60694 2.64023 4.79694L6.97823 6.31027C7.90113 6.63119 8.90534 6.63119 9.82823 6.31027L13.7376 4.94694V7.86627C13.7376 8.04308 13.8078 8.21265 13.9328 8.33768C14.0579 8.4627 14.2274 8.53294 14.4042 8.53294C14.581 8.53294 14.7506 8.4627 14.8756 8.33768C15.0007 8.21265 15.0709 8.04308 15.0709 7.86627L15.0736 3.5316C15.0762 3.25366 14.9913 2.98193 14.831 2.75485C14.6707 2.52778 14.443 2.35686 14.1802 2.26627L14.1796 2.26694ZM12.4036 6.82427L10.2669 7.56961C9.05939 7.98762 7.74641 7.98762 6.5389 7.56961L4.40357 6.82427V7.19961C4.40357 9.40561 6.19757 11.1996 8.40357 11.1996C10.6096 11.1996 12.4036 9.40561 12.4036 7.19961V6.82361V6.82427Z"
                fill="#E50914"
              />
            </g>
            <defs>
              <clipPath id="clip0_12985_1953">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.40625 0.5)"
                />
              </clipPath>
            </defs>
          </svg>{" "}
          <span>70,000+ Learners</span>
        </div>
        <div className="flex items-center [&>img]:h-[26px]">
          <Image
            src={el}
            height={26}
            width={26}
            alt="number of courses offered"
          ></Image>
          <span className="px-2 font-semibold">250+ Courses</span>
        </div>
      </div>
      <div className="px-4">
        <Image
          src={wl}
          height={26}
          width={26}
          alt="whatsapp icon for contact"
        ></Image>
      </div>
    </section>
  );
};

export default TagsBanner;
