import React from "react";
import { toolkitData, toolkitTitle } from "./data/Page4";
const Page4 = () => {
  return (
    <section className="px-4">
      <div className="items-centerjustify-between flex flex-col md:flex-row">
        <div className="w-full md:w-[70vw]">
          <h1 className="text-clampheader md:text-clamptitle">
            Why CISSP Success toolkit{" "}
          </h1>
          <h1 className="leading-2 text-clamptitle md:text-clamptextmd">
            {toolkitTitle}
          </h1>
          {toolkitData.map((data, index) => {
            return (
              <li className="px-6 text-clamptextsm" key={index}>
                {data}
              </li>
            );
          })}
        </div>
        <div className="bg-faq mx-auto flex h-[20rem] w-[20rem] bg-contain bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Page4;
