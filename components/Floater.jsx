import React from "react";
import { SocialIcon } from "react-social-icons";
import "./css/floater.css";

const Floater = () => {
  return (
    <div className="floating-icon floating fixed bottom-[12vh] right-[2vw] z-10 flex flex-col items-center justify-center gap-5 rounded-full transition-all duration-100 [&:hover>.menu]:flex [&:hover>.menu]:translate-y-[0px] [&:hover>.menu]:opacity-100 [&>.menu]:translate-y-[50px]">
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-green">
        <SocialIcon url="https://chat.whatsapp.com/GUnUOJtxzD7DrGu1YlUDCd" />
      </div>
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-pink">
        <SocialIcon url="https://www.instagram.com/cybernous_infosec" />
      </div>
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-cyan">
        <SocialIcon url="https://www.facebook.com/cybernous" />
      </div>
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-red">
        <SocialIcon url="https://www.youtube.com/@cybernous" />
      </div>
      <div className="rounded-[30px] border-2 border-grn px-4 py-2 font-semibold transition-all duration-500 hover:scale-105 hover:border-accent hover:bg-accent hover:text-black">
        {/* <SocialIcon
          url="https://shareit.com"
          className="pointer-events-none"
          href=""
        /> */}
        Contact Us
      </div>
    </div>
  );
};

export default Floater;
