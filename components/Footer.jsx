import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-elevated sm:px-[5vw]">
      <section className="mt-[8rem] sm:px-[3vw] xl:text-[1.2rem]">
        <div className="flex flex-col items-center justify-between bg-elevated p-10 text-center">
          <p className="text-justify">
            CISSP® is a registered trademark of ISC2, Inc. We make no claim of
            ownership of any trademark held by ISC2, nor are we affiliated with
            ISC2 in any way. We are just passionate about the CISSP®
            certification - and the difference it can make in your security
            career - and want to help you achieve your goal of getting
            certified. We refer to the registered trademark for
            educational purposes only.
          </p>
          <div className="flex w-[100%] flex-col items-start justify-center p-4 md:flex-row">
            <div className="flex w-[100%] flex-col items-center justify-center md:w-[50%] md:items-start">
              <div className="xxl:w-[13vw]">
                <Image
                  src="/assets/cyberlg.webp"
                  alt="cybernous logo"
                  width={150}
                  height={100}
                />
              </div>
              <div className="text-clamptextsm text-accent xl:text-[1.2rem] xxl:text-[1vw]">
                Copyright @ 2024
              </div>
              <div className="text-clamptextsm xl:text-[1.2rem] xxl:text-[1vw]">
                CISSP Success Toolkit
              </div>
            </div>
            <div className="mt-4 flex w-[100%] items-start justify-between md:w-[50%] xxl:justify-around">
              <div className="Company flex flex-col text-white xxl:text-[1vw] [&>a:hover]:text-accent">
                <>
                  <span className="text-md text-accent xl:text-[1.2rem]">
                    Company
                  </span>
                </>
                <Link href={"/"}>
                  <span className="xl:text-[1.2rem]">Home</span>
                </Link>
                <Link href={"/resources"}>
                  <span className="xl:text-[1.2rem]">Resources</span>
                </Link>
                <Link href={"/blog"}>
                  <span className="xl:text-[1.2rem]">Blog</span>
                </Link>
              </div>
              <div className="Policy flex flex-col text-white xxl:text-[1vw] [&>a:hover]:text-accent">
                <>
                  <span className="text-md text-accent">Policy</span>
                </>
                <Link href={"/privacypolicy"}>
                  <span>Privacy Policy</span>
                </Link>
                <Link href={"/cookiepolicy"}>
                  <span>Cookie Policy</span>
                </Link>
                <Link href={"/refundpolicy"}>
                  <span>Refund Policy</span>
                </Link>
                <Link href={"/terms-conditions"}>
                  <span>Terms & Conditions</span>
                </Link>
              </div>
              <div className="Support flex flex-col text-white xxl:text-[1vw] [&>a:hover]:text-accent">
                <>
                  <span className="text-md text-accent">Support</span>
                </>
                <Link href={"/contact-us"}>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="socials relative bottom-0 mt-10 flex w-screen flex-row items-center justify-center gap-3 text-accent">
            <hr className="h-px w-[25%] border-0 bg-accent dark:bg-gray-700"></hr>
            <Link href="https://www.linkedin.com/company/cybenrousinfosecconsulting">
              <SocialIcon url="https://linkedin.com" />
            </Link>
            <Link href="https://www.facebook.com/cybernous">
              <SocialIcon url="https://www.facebook.com/cybernous" />
            </Link>
            <Link href="https://www.instagram.com/cybernous_infosec">
              <SocialIcon url="https://www.instagram.com/cybernous_infosec" />
            </Link>
            <Link href="/">
              <SocialIcon url="https://www.telegram.com" />
            </Link>
            <Link href="https://www.youtube.com/@cybernous">
              <SocialIcon url="https://www.youtube.com/@cybernous" />
            </Link>
            <hr className="h-px w-[25%] border-0 bg-accent dark:bg-gray-700"></hr>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
