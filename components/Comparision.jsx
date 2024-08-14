import Image from "next/image";
import React from "react";
import photo from "../public/assets/Comparision/comparisionfinal.webp";
import { Button } from "./ui/button";
import Link from "next/link";
import HeroContact from "./HeroContact";
const Page7 = () => {
  return (
    <section>
      <div className="mt-[30px] flex flex-col items-center justify-center px-[30px] sm:px-[50px] xl:my-[60px] xl:px-[10vw]">
        <div className="flex flex-col items-center justify-center [&>div]:text-justify">
          <div className="rounded-[30px] border-2 bg-gradient-to-t from-[#739DED66] to-[#A8AEE000] p-6">
            <h2 className="text-center text-clamptitle">
              <strong className="flex-row items-center justify-center gap-x-2">
                <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] leading-8 text-transparent xxl:text-[2.5vw]">
                  {/* <svg
                    className="mx-2 hidden xl:flex xl:translate-y-[10px]"
                    width="30"
                    height="40"
                    viewBox="0 0 67 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.3389 1.32691L28.5835 2.76339C28.4808 2.83222 28.3743 2.90418 28.2644 2.97917C27.1546 3.73663 25.6756 4.81616 24.1219 6.11248C21.0653 8.66278 17.5238 12.2106 16.1278 15.899L15.6161 17.2511L17.0447 17.4731C20.065 17.9426 22.6776 19.1491 24.3714 20.948C26.0215 22.7005 26.8789 25.0925 26.3194 28.1974C24.9498 33.4193 18.9685 36.8271 12.3605 36.8271C7.72831 36.8271 4.72441 35.4122 3.02941 33.3302C1.33112 31.2441 0.757883 28.257 1.47483 24.716C3.3838 16.2073 10.5023 8.36039 26.3389 1.32691ZM51.7333 15.4539L51.1374 16.8431L52.6311 17.0752C55.6212 17.54 58.1572 18.8277 59.7593 20.7062C61.3336 22.552 62.0872 25.0574 61.3945 28.1976L61.3931 28.2043C60.2798 33.3952 54.3357 36.8271 47.6909 36.8271C43.0587 36.8271 40.0548 35.4122 38.3598 33.3302C36.6615 31.2441 36.0883 28.2569 36.8052 24.7159C38.7142 16.2073 45.8327 8.36036 61.6693 1.32691L63.9252 2.77065C63.8411 2.82783 63.7545 2.88715 63.6656 2.94856C62.6004 3.68398 61.179 4.73152 59.6753 5.98897C56.7116 8.46738 53.2579 11.8996 51.7333 15.4539Z"
                      fill="url(#paint0_radial_74_935)"
                      stroke="url(#paint1_radial_74_935)"
                      strokeWidth="2.34584"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_74_935"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(18.8926 6.51429) rotate(54.2444) scale(38.7986 52.0748)"
                      >
                        <stop stopColor="#11D1C8" />
                        <stop
                          offset="1"
                          stopColor="#FFD600"
                          stopOpacity="0.933333"
                        />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_74_935"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.495 0.790236) rotate(39.7306) scale(56.8174 44.5441)"
                      >
                        <stop stopColor="white" stopOpacity="0.22" />
                        <stop
                          offset="1"
                          stopColor="#FFD600"
                          stopOpacity="0.933333"
                        />
                      </radialGradient>
                    </defs>
                  </svg> */}
                  CISSP Certification Bootcamps <br className="" />
                  VS <br className="" />
                  CISSP Success Toolkit (CST)
                </span>{" "}
              </strong>
            </h2>
            <div className="mt-10 text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
              CISSP Exam not only test your knowledge but also test your ability
              to take security decisions based on cognitive thinking as a
              leader. To Establish yourself as a Subject Matter Expert (SME) and
              a thought leader, you need to relate the CISSP Concepts with real
              world scenarios. This transformation requires time and a 5 day
              CISSP Certification bootcamp providing CISSP Training Online is
              barely effective. These CISSP Courses are very high level.
            </div>
            <div className="mt-[40px] text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
              CISSP Success Toolkit has been curated with the same intent in
              mind and has been programmed for busy working professionals to
              successfully make this transformation and pass the exam with 10x
              ease.
            </div>
            <div className="mb-[3rem] mt-[40px] w-full text-clamptextsmm font-medium leading-9 xxl:text-[1.5vw] xxl:leading-normal">
              Let me show you why I call this program as a complete Eco-system.
            </div>
          </div>
          <div className="relative mt-[45px] flex w-full items-center justify-center rounded-[30px] border-2 bg-transparent bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] p-10">
            <HeroContact />
          </div>
          <div className="relative mt-[45px] flex w-full rounded-[30px] border-2 bg-transparent bg-gradient-to-l from-[#739DED66] to-[#A8AEE000] p-10">
            <Image
              src={photo}
              priority
              height={1281}
              width={2056}
              alt="comparision"
            />
          </div>
        </div>

        <div className="mt-6 flex w-full items-center justify-center">
          <Link href="https://calendly.com/cisspsuccess">
            <Button className="scale-105 rounded-[30px] transition-all duration-500 xl:mt-10">
              Book a FREE Demo Class
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page7;
