import React from "react";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Photo from "./Photo";

const text = [
  {
    title: "New to CISSP? Find out if CISSP is good for you",
  },
  {
    title: "Attend our FREE Masterclass",
  },
  {
    title: "Test your CISSP Preparation through our Mock Test ",
  },
  {
    title: "Book a FREE Consultation Call",
  },
];

const Page2 = () => {
  return (
    <section>
      <div className="mt-[60px] w-[100%] justify-between md:inline-flex">
        {/* Text  */}
        <div className="order-2 flex flex-col gap-[30px] px-[13px] text-center md:order-none md:text-left xl:px-[40px]">
          {/* Text wrap  */}
          <div className="text-wrap1 flex flex-col items-center md:items-start">
            <span className="text-clamptitle font-bold">
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Free{" "}
              </span>
              <span className="bg-gradient-to-l from-accent to-grn bg-clip-text text-transparent">
                CISSP{" "}
              </span>
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                resources
              </span>
            </span>
            {text.map((title, index) => {
              return (
                <h2
                  key={index}
                  className="mt-[18px] flex text-[16px] font-bold md:text-[19px] xl:text-[22px]"
                >
                  <svg
                    className="relative top-2 mx-2"
                    width="25"
                    height="20"
                    viewBox="0 0 30 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3954 7.57191L14.7207 0.537109L9.04597 7.57191L0.374023 10.6173L5.53883 18.0103L5.85399 26.9272L14.7207 24.4616L23.5874 26.9272L23.9026 18.0103L29.0674 10.6173L20.3954 7.57191Z"
                      fill="#FEE95D"
                    />
                    <path
                      d="M23.5874 26.9272L23.633 25.638L14.7207 23.1597L7.09034 25.2815L6.8191 17.608L2.37457 11.2458L9.83731 8.62511L15.5411 1.55423L14.7207 0.537109L9.04597 7.57191L0.374023 10.6173L5.53883 18.0103L5.85399 26.9272L14.7207 24.4616L23.5874 26.9272Z"
                      fill="#F7D700"
                    />
                    <path
                      d="M14.7206 20.8193C11.692 20.8193 9.22146 23.1303 9.0918 26.0283L14.7206 24.4614L20.3494 26.0265C20.2187 23.1293 17.7486 20.8193 14.7206 20.8193Z"
                      fill="#8AD8F6"
                    />
                    <path
                      d="M20.3489 26.0269C20.3433 25.9027 20.3331 25.7796 20.319 25.6577C20.2792 25.3144 20.2067 24.9808 20.1043 24.6598L14.7202 23.1628L10.7807 24.2594C11.5313 22.4309 13.2753 21.0883 15.3692 20.8559C12.6549 20.5319 10.0832 22.2352 9.33535 24.6617C9.19418 25.1034 9.11258 25.5659 9.09131 26.0287L14.7202 24.4619L20.3489 26.0269Z"
                      fill="#54C9F3"
                    />
                    <path
                      d="M10.4194 14.9847C10.4194 17.2818 12.3451 19.1439 14.7204 19.1439C17.0957 19.1439 19.0213 17.2817 19.0213 14.9847V12.8975H10.4194V14.9847Z"
                      fill="#FEF2E2"
                    />
                    <path
                      d="M15.9609 18.931C13.5856 18.931 11.66 17.0688 11.66 14.7718V12.8975H10.4194V14.9847C10.4194 17.2818 12.3451 19.1439 14.7204 19.1439C15.1988 19.1439 15.6584 19.0672 16.0882 18.9278C16.0458 18.929 16.0036 18.931 15.9609 18.931Z"
                      fill="#FFE1BA"
                    />
                    <path
                      d="M14.7203 8.31543L14.7202 12.8973H19.0212V12.4747C19.0212 10.1776 17.0956 8.31543 14.7203 8.31543Z"
                      fill="#F696C3"
                    />
                    <path
                      d="M10.4194 12.4747V12.8973H14.7203L14.7204 8.31543C12.3451 8.31543 10.4194 10.1776 10.4194 12.4747Z"
                      fill="#8AD8F6"
                    />
                    <path
                      d="M14.7204 8.49187V8.31543C12.3451 8.31543 10.4194 10.1776 10.4194 12.4747V12.8973H11.66V12.4747C11.66 10.5948 12.95 9.00697 14.7204 8.49187Z"
                      fill="#54C9F3"
                    />
                    <path
                      d="M14.7204 8.31543C14.0035 8.31543 13.4224 10.1776 13.4224 12.4747V12.8973H16.0185V12.4747C16.0185 10.1776 15.4373 8.31543 14.7204 8.31543Z"
                      fill="#FEE95D"
                    />
                    <path
                      d="M22.7704 2.33203C22.7704 3.48339 23.7356 4.4167 24.9261 4.4167C23.7355 4.4167 22.7704 5.35007 22.7704 6.50137C22.7704 5.35002 21.8053 4.4167 20.6147 4.4167C21.8053 4.4167 22.7704 3.48339 22.7704 2.33203Z"
                      fill="#FEE95D"
                    />
                    <path
                      d="M6.66984 2.33203C6.66984 3.48339 7.63501 4.4167 8.82552 4.4167C7.63495 4.4167 6.66984 5.35007 6.66984 6.50137C6.66984 5.35002 5.70468 4.4167 4.51416 4.4167C5.70468 4.4167 6.66984 3.48339 6.66984 2.33203Z"
                      fill="#FEE95D"
                    />
                    <path
                      d="M4.6616 11.8452L4.36719 11.0611L5.1779 10.7764L5.47231 11.5605L4.6616 11.8452ZM6.28309 11.2758L5.98868 10.4917L6.7994 10.207L7.0938 10.9911L6.28309 11.2758Z"
                      fill="white"
                    />
                    <path
                      d="M10.8508 14.9856H9.98828C9.98828 17.509 12.1111 19.5619 14.7205 19.5619C17.3299 19.5619 19.4527 17.509 19.4527 14.9856V13.3154H22.4832V12.4813H19.4527V12.4757C19.4527 9.95233 17.3299 7.89941 14.7205 7.89941C12.1111 7.89941 9.98828 9.95233 9.98828 12.4757V14.1515H10.8508V13.3154H18.5902V14.9856C18.5902 17.049 16.8543 18.7278 14.7205 18.7278C12.5867 18.7278 10.8508 17.0491 10.8508 14.9856ZM10.8508 12.4813V12.4757C10.8508 10.7957 12.0018 9.37079 13.5811 8.89929C13.5126 9.05333 13.4488 9.22493 13.3897 9.41416C13.1327 10.2378 12.9911 11.3251 12.9911 12.4757V12.4813H10.8508ZM13.8537 12.4813V12.4757C13.8537 10.0545 14.4762 8.81249 14.7205 8.73464C14.9648 8.81249 15.5873 10.0545 15.5873 12.4757V12.4813H13.8537ZM16.0513 9.41422C15.9922 9.22499 15.9284 9.05333 15.8599 8.89935C17.4393 9.37085 18.5902 10.7957 18.5902 12.4758V12.4814H16.4499V12.4758C16.4499 11.3251 16.3083 10.2378 16.0513 9.41422Z"
                      fill="black"
                    />
                    <path
                      d="M12.564 14.1875H13.4265V15.4002H12.564V14.1875Z"
                      fill="black"
                    />
                    <path
                      d="M16.0142 14.1875H16.8767V15.4002H16.0142V14.1875Z"
                      fill="black"
                    />
                    <path
                      d="M15.9214 17.0365L15.5896 16.2666L14.7205 16.6168L13.8513 16.2666L13.5195 17.0365L14.7205 17.5204L15.9214 17.0365Z"
                      fill="black"
                    />
                    <path
                      d="M22.3392 6.50241H23.2017C23.2017 5.58288 23.9753 4.83479 24.9261 4.83479V4.00068C23.9753 4.00062 23.2017 3.25253 23.2017 2.33301H22.3392C22.3392 3.25253 21.5656 4.00062 20.6147 4.00062V4.83474C21.5656 4.83474 22.3392 5.58282 22.3392 6.50241ZM22.7704 3.71474C22.9619 3.99312 23.2095 4.23256 23.4974 4.41773C23.2095 4.60285 22.9619 4.84235 22.7704 5.12073C22.5789 4.84235 22.3313 4.60291 22.0435 4.41773C22.3313 4.23256 22.5789 3.99312 22.7704 3.71474Z"
                      fill="black"
                    />
                    <path
                      d="M6.23907 6.50241H7.10159C7.10159 5.58288 7.87516 4.83479 8.82601 4.83479V4.00068C7.87516 4.00062 7.10159 3.25253 7.10159 2.33301H6.23907C6.23907 3.25253 5.4655 4.00062 4.51465 4.00062V4.83474C5.4655 4.83474 6.23907 5.58282 6.23907 6.50241ZM6.67033 3.71474C6.86181 3.99312 7.10941 4.23256 7.39727 4.41773C7.10941 4.60285 6.86181 4.84235 6.67033 5.12073C6.47885 4.84235 6.23125 4.60291 5.94339 4.41773C6.23125 4.23256 6.47885 3.99312 6.67033 3.71474Z"
                      fill="black"
                    />
                    <path
                      d="M29.2305 10.1491L20.6655 7.14141L15.0609 0.193359H14.38L8.77534 7.14141L0.210399 10.1491L0 10.7753L5.10109 18.0771L5.41235 26.8839L5.96316 27.271L14.7204 24.8357L23.4778 27.271L24.0286 26.884L24.2072 21.831L23.3442 21.8025L23.1845 26.3206L20.7517 25.644C20.4384 22.6716 17.8115 20.3932 14.7205 20.4026C11.618 20.3946 9.00615 22.6727 8.68851 25.6443L6.25642 26.3206L5.95654 17.8352L1.02537 10.7514L9.35651 7.82583L14.7204 1.12896L20.1439 7.84662L28.4155 10.7513L23.4849 17.8207L23.3738 20.9639L24.2367 20.9924L24.3398 18.077L29.4409 10.7753L29.2305 10.1491ZM11.3351 22.4422C13.2199 20.8629 16.1197 20.8375 18.0323 22.3833C18.9663 23.1275 19.6268 24.182 19.8449 25.3919L14.7204 23.9669L9.59577 25.3919C9.80801 24.2136 10.4398 23.1826 11.3351 22.4422Z"
                      fill="black"
                    />
                  </svg>
                  {title.title}
                </h2>
              );
            })}
            <Button className="mt-[29px] w-[200px] justify-around rounded-full bg-gradient-to-r from-gray-400 to-accent hover:bg-gradient-to-r hover:from-accent hover:to-gray-400 xl:w-[362px]">
              Talk to your Experts
              <FaArrowRightLong />
            </Button>
          </div>

          <div className="text-wrap2 flex flex-col items-center md:items-start">
            <span className="mb-[18px] text-clamptextmd font-bold md:text-[22px] xl:text-[24px]">
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Give me 100{" "}
              </span>
              <span className="bg-gradient-to-l from-accent to-grn bg-clip-text text-transparent">
                Days & I will{" "}
              </span>{" "}
              <span className="bg-gradient-to-l from-accent to-grn bg-clip-text text-transparent">
                get you CISSP{" "}
              </span>
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent">
                Certified
              </span>{" "}
            </span>
            <p className="mb-5 min-w-[100px] text-[20px] xl:w-[762px]">
              Hey there, I'm Manoj, your CISSP buddy! After helping over 3000+
              professionals in their CISSP Success, I have now come up with a
              game-changing Framework for busy professionals to ace the CISSP
              exam in just 100 Days.
            </p>
            <p className="mb-5 min-w-[100px] text-[20px] xl:w-[762px]">
              Exciting, right? You are just a step away from achieving your
              CISSP Dream!
            </p>
            <p className="mb-5 min-w-[100px] text-[20px] xl:w-[762px]">
              Be part of the ecosystem and follow the roadmap to Nail CISSP in
              100 Days!
            </p>
            <Button
              variant="outline"
              className="mb-6 mt-[29px] w-[180px] justify-around rounded-full xl:w-[302px]"
            >
              Know more
              <FaArrowRightLong />
            </Button>
          </div>
        </div>
        <div className="trainer">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Page2;
