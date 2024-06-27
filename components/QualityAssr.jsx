const listdata = [
  {
    data: "Security Governance and Risk Management (16%) ",
  },
  {
    data: "Asset Security (10%)",
  },
  {
    data: "Security Architecture and Engineering (13%)",
  },
  {
    data: "Network and Communication Security (13%)",
  },
  {
    data: "Identity and Access Management (11%)",
  },
  {
    data: "Security Assessment, Testing and Audits (11%)",
  },
  {
    data: "Security Operations (13%)",
  },
  {
    data: "Software Development Security (10%)",
  },
];

const QualityAssr = () => {
  return (
    <div className="bg-grey-600 flex w-full flex-col items-center justify-center">
      <h1 className="mb-[5vh]">
        <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-center text-clamptitle font-bold text-transparent xxl:text-[2.5vw]">
          Quality Assurance at Cybernous
        </span>
      </h1>
      <p className="w-[80vw] text-left text-clamptextsmm font-semibold xxl:mt-[6vh] xxl:text-[1.5vw]">
        We have a strong vision to change lives and have positively impacted
        thousands of Careers. Almost every second Security professional wish to
        achieve the prestigious CISSP Designation, however many of such
        professionals never start the preparation due to fear of failure.
        Finding the right Training partner for your preparation can be a make or
        break in your CISSP journey.{" "}
      </p>
      <p className="w-[80vw] text-left text-clamptextsmm font-semibold xxl:mt-[6vh] xxl:text-[1.5vw]">
        We at Cybernous are committed to follow strict quality standards to
        provide you the Best CISSP Training experience during your CISSP Exam
        preparation.
      </p>
      <p className="w-[80vw] text-left text-clamptextsmm font-semibold xxl:mt-[6vh] xxl:text-[1.5vw]">
        Even our Competitors get inspired and copy us.
      </p>
      <p className="mb-[2vh] mt-[2vh] w-[80vw] text-left text-clamptextmd font-bold text-grn xxl:mt-[6vh] xxl:text-[1.8vw]">
        CISSP Course Curriculum
      </p>
      {listdata.map((data, index) => {
        return (
          <li
            key={index}
            className="w-[80vw] list-none text-clamptextsmm font-semibold xxl:text-[1.3vw] xxl:leading-[55px]"
          >
            {index + 1}. {data.data}
          </li>
        );
      })}
    </div>
  );
};

export default QualityAssr;
