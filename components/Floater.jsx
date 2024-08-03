import React from "react";
import { SocialIcon } from "react-social-icons";
import "./css/floater.css";

const Floater = () => {
  return (
    <div className="floating-icon floating fixed bottom-[12vh] right-[2vw] z-10 flex flex-col items-center justify-center gap-5 rounded-full transition-all duration-100 [&:hover>.menu]:flex [&:hover>.menu]:translate-y-[0px] [&:hover>.menu]:opacity-100 [&>.menu]:translate-y-[50px]">
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-green">
        <SocialIcon url="https://whatsapp.com" />
      </div>
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-pink">
        <SocialIcon url="https://instagram.com" />
      </div>
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-cyan">
        <SocialIcon url="https://facebook.com" />
      </div>
      <div className="menu hidden overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-red">
        <SocialIcon url="https://youtube.com" />
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
    // <div className="floating fixed bottom-[12vh] right-[2vw] z-10 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full border-2 border-white transition-all delay-100 hover:h-[310px] hover:cursor-pointer active:h-[310px] xxl:h-[5vw] xxl:w-[5vw] [&:active>.menu]:flex [&:active>.menu]:opacity-100 [&:hover>.menu]:flex [&:hover>.menu]:opacity-100">
    //   <div className="menu relative hidden flex-col gap-[10px] pb-[10px] opacity-0 transition-opacity delay-500 [&>a:hover]:scale-105">
    //     <SocialIcon url="https://whatsapp.com" />
    //     <SocialIcon url="https://instagram.com" />
    //     <SocialIcon url="https://facebook.com" />
    //     <SocialIcon url="https://youtube.com" />
    //   </div>
    //   <div className="floater relative translate-y-[0]">
    //     <SocialIcon
    //       url="https://shareit.com"
    //       href="/"
    //       className="disabled pointer-events-none"
    //     />
    //   </div>
    // </div>
  );
};

export default Floater;
