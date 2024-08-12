import React from "react";
const shouldDo = [
  {
    data: "Professionals committed to advance career in Cybersecurity ",
  },
  {
    data: "Professionals transforming their career into   Cybersecurity  ",
  },
  {
    data: "Companies Looking to increase resources with CISSP Designation       ",
  },
  {
    data: "Professionals who would like to enhance their Cyber security wisdom.  ",
  },
];
const topBenefits = [
  {
    data: "Career Advancement: CISSP Designation holders are trusted more by Executive management",
  },
  {
    data: "Higher Earning Potential: CISSP designation holders are generally paid here then their peers",
  },
  {
    data: "Global Recognition: CISSP is the gold certification in Security across the globe. ",
  },
  {
    data: "Enhance your Security knowledge and skills to gain professional credibility ",
  },
  {
    data: "Follow the highest ethical standards by committing to (ISC)2 Code of ethics",
  },
];

const Benefits = () => {
  return (
    <section>
      <div className="mt-6 px-[30px] sm:px-[50px] md:mb-[150px] xl:px-[10vw]">
        <div className="flex flex-col items-center justify-center xxl:mt-[40px]">
          <h2 className="mb-8 bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
            Benefits of doing CISSP Certification
          </h2>
          <div className="flex w-full flex-col rounded-[30px] border-2 border-accent bg-opacity-5 bg-gradient-to-r from-[#E8E8E808] to-[#FFFFFF24] p-6">
            <p className="mb-[2vh] w-full text-clamptextmd font-semibold text-grn xxl:mb-[45px] xxl:text-[1.5vw]">
              Who should Do CISSP Certification ?
            </p>
            {shouldDo.map((data, index) => {
              return (
                <li
                  key={index}
                  className="w-full text-clamptextsmm xxl:text-[1.3vw] xxl:leading-[65px]"
                >
                  {data.data}
                </li>
              );
            })}
            <br />
            <p className="mb-[2vh] mt-[2vh] w-full text-clamptextmd font-semibold text-grn xxl:mb-[45px] xxl:mt-[40px] xxl:text-[1.5vw]">
              Here are the top Benefits of achieving the CISSP Designation
            </p>
            {topBenefits.map((data, index) => {
              return (
                <li
                  key={index}
                  className="w-full text-clamptextsmm xxl:text-[1.3vw] xxl:leading-[65px]"
                >
                  {data.data}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
