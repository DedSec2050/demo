import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
const blogData = [
  {
    url: "/",
    imgLoc: "/assets/blog/blog1.webp",
    title: "Understand and Apply Risk Management Concepts",
    tags: "Manoj Sharma CISSP | CCSP | CISM | CRISC | PCI-DSS | ISMS | DCPP | GDPR Practioner",
    desc: "Understanding and applying risk management concepts involves a deep task to analyze, prioritize and find out ways to eliminate them.",
  },
  {
    url: "/",
    imgLoc: "/assets/blog/blog1.webp",
    title: "Understand and Apply Risk Management Concepts",
    tags: "Manoj Sharma CISSP | CCSP | CISM | CRISC | PCI-DSS | ISMS | DCPP | GDPR Practioner",
    desc: "Understanding and applying risk management concepts involves a deep task to analyze, prioritize and find out ways to eliminate them.",
  },
  {
    url: "/",
    imgLoc: "/assets/blog/blog1.webp",
    title: "Understand and Apply Risk Management Concepts",
    tags: "Manoj Sharma CISSP | CCSP | CISM | CRISC | PCI-DSS | ISMS | DCPP | GDPR Practioner",
    desc: "Understanding and applying risk management concepts involves a deep task to analyze, prioritize and find out ways to eliminate them.",
  },
  {
    url: "/",
    imgLoc: "/assets/blog/blog1.webp",
    title: "Understand and Apply Risk Management Concepts",
    tags: "Manoj Sharma CISSP | CCSP | CISM | CRISC | PCI-DSS | ISMS | DCPP | GDPR Practioner",
    desc: "Understanding and applying risk management concepts involves a deep task to analyze, prioritize and find out ways to eliminate them.",
  },
  {
    url: "/",
    imgLoc: "/assets/blog/blog1.webp",
    title: "Understand and Apply Risk Management Concepts",
    tags: "Manoj Sharma CISSP | CCSP | CISM | CRISC | PCI-DSS | ISMS | DCPP | GDPR Practioner",
    desc: "Understanding and applying risk management concepts involves a deep task to analyze, prioritize and find out ways to eliminate them.",
  },
];

const Blog = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center pb-[5vw] xxl:pb-[8vw]">
      <div className="flex flex-col items-center justify-center pb-[2vw] xxl:pb-[5vw]">
        <h1 className="text-center text-clamptitle font-bold uppercase xl:text-[2vw] xxl:text-[2.5vw]">
          Cybersecurity Certification Blog
        </h1>
        <Button className="text-clamptextmd xl:p-[1.3vw] xl:text-[1vw] xxl:p-[1.5vw] xxl:text-[1.1vw]">
          Enroll for CISSP Toolkit
        </Button>
      </div>
      <div className="grid gap-[3vw] md:grid-cols-2 md:gap-[1.3vw] xl:grid-cols-3">
        {blogData.map((data, index) => {
          return (
            <div
              key={index}
              className="mx-[1vw] my-[1vw] flex h-full w-full flex-col items-center overflow-hidden rounded-[5%] border-2 border-accent bg-primary text-clamptextsm xs:w-[60vw] md:w-[30vw] md:text-[1vw] xxl:mx-[2vw] xxl:my-[2vw] xxl:w-[25vw]"
            >
              {/* image  */}
              <div className="h-[50%]">
                <Image
                  alt="blogsPicture"
                  responsive
                  src={data.imgLoc}
                  height={675}
                  width={1200}
                />
              </div>
              {/* title  */}
              <div className="flex flex-col gap-[1.5vw]">
                <div className="mx-[1vw]">{data.title}</div>
                <div className="mx-[1vw] text-accent">{data.tags}</div>
                <div className="mx-[1vw]">{data.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
