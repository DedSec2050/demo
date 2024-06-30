"use client";
import React, { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { faqCISSP } from "./data/Page9.jsx";

const Accordion2 = () => {
  const [animationParent] = useAutoAnimate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion flex flex-col">
      {faqCISSP.map((data, index) => (
        <div
          ref={animationParent}
          key={index}
          className="flex flex-col gap-4 py-4"
        >
          {/* question  */}
          <p
            onClick={() => toggleAccordion(index)}
            className="flex cursor-pointer justify-between gap-2 font-semibold sm:text-lg"
          >
            <span className="xxl:py-4 xxl:text-[1.3vw] xxl:leading-[50px]">{`${index + 1}. ${data.question}`}</span>
            {openIndex === index ? (
              <FiMinusCircle className="text-[23px] font-semibold text-accent xxl:text-[1.5vw]" />
            ) : (
              <FiPlusCircle className="text-[23px] font-semibold text-accent xxl:text-[1.5vw]" />
            )}
          </p>
          {/* ans */}
          {openIndex === index && (
            <p className="text-sm text-yellow-400 sm:text-base xxl:py-4 xxl:text-[1.2vw] xxl:leading-[50px]">
              {data.ans}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion2;
