import React from "react";
import { SocialIcon } from "react-social-icons";
import "./css/floater.css";
import "animate.css";

const Floater = () => {
  return (
    <div className="floating fixed bottom-0 right-0 z-10 mb-4 mr-2 hidden flex-col items-center justify-center gap-5 rounded-full bg-transparent transition-all duration-100 md:flex [&>.menu-item]:hidden md:[&>.menu-item]:flex">
      <div className="menu-item animate__animated animate__infinite animate__pulse animate__slow overflow-hidden rounded-full text-center transition-all duration-500 hover:drop-shadow-green">
        <SocialIcon network="whatsapp" url="https://wa.me/+918595338705" />
      </div>
      <div className="menu-item animate__animated animate__infinite animate__pulse animate__slow overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-cyan">
        <SocialIcon url="https://linkedin.com" />
      </div>
      <div className="menu-item animate__animated animate__infinite animate__pulse animate__slow overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-red">
        <SocialIcon url="https://www.youtube.com/@cybernous" />
      </div>

      <div className="menu-item animate__animated animate__infinite animate__pulse animate__slow overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-cyan">
        <SocialIcon url="https://www.facebook.com/cybernous" />
      </div>
      <div className="menu-item animate__animated animate__infinite animate__pulse animate__slow overflow-hidden rounded-full transition-all duration-500 hover:drop-shadow-pink">
        <SocialIcon url="https://www.instagram.com/cybernous_infosec" />
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
