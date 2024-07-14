import Link from "next/link";
import React from "react";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SocialIcon } from "react-social-icons";

const Floater = () => {
  return (
    <div className="floating delay-750 fixed bottom-[12vh] right-[2vw] z-10 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full border-2 border-white transition-all hover:h-[250px] hover:cursor-pointer active:h-[200px] xxl:h-[5vw] xxl:w-[5vw] [&:active>div]:flex [&:hover>.floater]:translate-y-[-20px] [&:hover>.floater]:opacity-0 [&:hover>div]:flex [&:hover>div]:opacity-100">
      <div className="floater absolute transition-opacity">
        <SocialIcon url="https://shareit.com" href="/" className="disabled" />
      </div>
      <div className="relative hidden flex-col gap-3 opacity-0 transition-opacity [&>a:hover]:scale-105">
        <SocialIcon url="https://whatsapp.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://youtube.com" />
      </div>
    </div>
  );
};

export default Floater;
