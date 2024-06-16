import React, { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { faq } from "./data/Page9";

const Accordion = () => {
  const [animationParent] = useAutoAnimate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faq.map((data, index) => (
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
            <span>{`${index + 1}. ${data.question}`}</span>
            {openIndex === index ? (
              <FiMinusCircle className="text-[23px] font-semibold text-accent" />
            ) : (
              <FiPlusCircle className="text-[23px] font-semibold text-accent" />
            )}
          </p>
          {/* ans */}
          {openIndex === index && (
            <p className="text-sm text-yellow-400 sm:text-base">{data.ans}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
