"use client";
import React, { useState } from "react";
import "../components/css/popup.css";
import "animate.css";
import { Button } from "./ui/button";

const Popup = () => {
  const [disp, setDisp] = useState("flex");

  // Handle click event to hide the popwrapper
  const handleClick = () => {
    if (disp !== "hidden") {
      setDisp("hidden");
    }
  };

  return (
    <>
      <div
        className={`${disp} popwrapper animate__animated animate__fadeIn flex flex-col gap-6 md:flex-row`}
      >
        <Button
          onClick={handleClick}
          className="animate__animated animate__backInDown hide-button"
        >
          X
        </Button>
        <div className="popitems animate__animated animate__backInDown"></div>
        <div className="popitems animate__animated animate__backInDown"></div>
      </div>
    </>
  );
};

export default Popup;
