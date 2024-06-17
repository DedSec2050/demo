import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="mt-[8rem]">
      <div className="flex flex-col items-center justify-between bg-footer p-10 text-center">
        <div className="flex w-[100%] flex-col items-start justify-center p-4 md:flex-row">
          <div className="flex w-[100%] flex-col items-center justify-center md:w-[50%] md:items-start">
            <Image src="/assets/cyberlg.webp" alt="" width={150} height={100} />
            <div className="text-clamptextsm text-accent">Copyright @ 2024</div>
            <div className="text-clamptextsm">CISSP Success toolkit</div>
          </div>
          <div className="mt-4 flex w-[100%] items-start justify-between md:w-[50%]">
            <div className="Company flex flex-col text-white">
              <Link href={"/"}>
                <span className="text-md text-accent">Company</span>
              </Link>
              <Link href={"/"}>
                <span>Home</span>
              </Link>
              <Link href={"/"}>
                <span>About Us</span>
              </Link>
              <Link href={"/"}>
                <span>Courses</span>
              </Link>
            </div>
            <div className="Policy flex flex-col text-white">
              <Link href={"/"}>
                <span className="text-md text-accent">Policy</span>
              </Link>
              <Link href={"/"}>
                <span>Privacy Policy</span>
              </Link>
              <Link href={"/"}>
                <span>Cookie Policy</span>
              </Link>
              <Link href={"/"}>
                <span>Refund Policy</span>
              </Link>
            </div>
            <div className="Support flex flex-col text-white">
              <Link href={"/"}>
                <span className="text-md text-accent">Support</span>
              </Link>
              <Link href={"/"}>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="socials relative bottom-0 mt-10 flex w-screen flex-row items-center justify-center gap-3 text-accent">
          <hr className="h-px w-[25%] border-0 bg-accent dark:bg-gray-700"></hr>
          <BsLinkedin />
          <FaFacebook />
          <FiInstagram />
          <TiSocialTwitter />
          <AiFillYoutube />
          <hr className="h-px w-[25%] border-0 bg-accent dark:bg-gray-700"></hr>
        </div>
      </div>
    </section>
  );
};

export default Footer;
