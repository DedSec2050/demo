import Link from "next/link";
import React from "react";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";
import { MdDeleteForever } from "react-icons/md";
import { PiMagicWandBold } from "react-icons/pi";
import { HiMiniEyeDropper } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";

const USP = () => {
  return (
    <section className="flex w-full flex-col bg-usp bg-cover bg-no-repeat">
      {/* Headers  */}
      <div className="w-full items-center justify-center bg-companyBlue bg-gradient-to-r from-grn via-accent to-grn bg-clip-text px-4 text-center font-[700] leading-tight text-transparent xl:py-8">
        <h2 className="text-clampheader">The 6 Differentiators</h2>
        <h3 className="text-clamptitle">
          Which make CISSP Success Toolkit (CST) the BEST Program
        </h3>
      </div>
      {/* Content Wrapper  */}
      <div className="flex flex-col items-baseline px-10 md:flex-row [&>div>h3]:text-center [&>div>h3]:text-[1.3rem] [&>div>h3]:font-bold [&>div>h3]:text-companyGrn xl:[&>div>h3]:text-[2.1rem] [&>div>p]:text-center [&>div>p]:italic xl:[&>div>p]:text-[1.6rem] [&>div]:px-4">
        {/* Titles  1 */}
        <div className="flex flex-col justify-center leading-normal [&>div>div>h3]:text-[1.3rem] [&>div>div>h3]:font-bold xl:[&>div>div>h3]:text-[2.1rem] [&>div>div]:flex [&>div>div]:items-center [&>div>div]:pb-4 [&>div>p]:text-[1rem] xl:[&>div>p]:text-[1.4rem] [&>div]:my-4 [&>div]:self-center [&>div]:rounded-[15px] [&>div]:border-2 [&>div]:bg-black [&>div]:px-8 [&>div]:py-4 xl:[&>div]:max-w-[550px]">
          <h3>Our Passion</h3>
          <p>
            We have proven{" "}
            <strong>"There is a difference between a Trainer & Coach"</strong>
          </p>
          <div>
            <div>
              <div className="mr-2 overflow-hidden rounded-[50%] bg-accent p-2">
                <PiFlagBannerFoldFill className="h-[30px] w-[30px]" />
              </div>
              <h3>100 Days Success Plan</h3>
            </div>
            <span>(4x depth compared to bootcamps)</span>

            <p>• 80+ hours of Self-paced Videos, Notes and Questions</p>
            <p>• 30+ hours of Live Theory Classes</p>
            <p>• Get-rid of heavy weight books to pass CISSP</p>
          </div>

          <div>
            <div>
              <div className="mr-2 min-h-[46px] min-w-[46px] overflow-hidden rounded-[50%] bg-accent p-2">
                <TfiCup className="h-[30px] w-[30px]" />
              </div>
              <h3>60+ Hours of Live Exam Practice</h3>
            </div>
            <span>(Other teach you CISSP, we teach you how to pass CISSP)</span>

            <p>• Master the mindset and learn the Exam hacks (Invaluable) </p>
            <p>• 15 Weeks of Live Exam Practice</p>
            <p>• 98% of our Students Nail CISSP in First attempt</p>
          </div>

          <div>
            <div>
              <div className="mr-2 min-h-[46px] min-w-[46px] overflow-hidden rounded-[50%] bg-accent p-2">
                <MdDeleteForever className="h-[30px] w-[30px]" />
              </div>
              <h3>1:1 Mentorship</h3>
            </div>
            <span>(Other teach you CISSP, we teach you how to pass CISSP)</span>

            <p>• Get 1:1 Mentorship directly from Manoj</p>
            <p>• Book a call with your coach anytime</p>
            <p>• Complete mentorship Before and after the exam</p>
          </div>
        </div>
        {/* Title 2 */}
        <div className="flex flex-col justify-center leading-normal [&>div>div>h3]:text-[1.3rem] [&>div>div>h3]:font-bold xl:[&>div>div>h3]:text-[2.1rem] [&>div>div]:flex [&>div>div]:items-center [&>div>div]:pb-4 [&>div>p]:text-[1rem] xl:[&>div>p]:text-[1.4rem] [&>div]:my-4 [&>div]:self-center [&>div]:rounded-[15px] [&>div]:border-2 [&>div]:bg-black [&>div]:px-8 [&>div]:py-4 xl:[&>div]:max-w-[550px]">
          <h3>Our Program</h3>
          <p>
            We have created{" "}
            <strong>"An ecosystem, which push you toward success"</strong>
          </p>
          <div>
            <div>
              <div className="mr-2 min-h-[46px] min-w-[46px] overflow-hidden rounded-[50%] bg-accent p-2">
                <PiMagicWandBold className="h-[30px] w-[30px]" />
              </div>
              <h3>3 Headed Preparation Approach </h3>
            </div>
            <span>(The best approach to Pass CISSP)</span>

            <p>• The most comprehensive approach to preparation</p>
            <p>• Program comes with daily Videos, Notes & Exam practice </p>
            <p>• Progress tracked everyday</p>
          </div>

          <div>
            <div>
              <div className="mr-2 min-h-[46px] min-w-[46px] overflow-hidden rounded-[50%] bg-accent p-2">
                <HiMiniEyeDropper className="h-[30px] w-[30px]" />
              </div>
              <h3>950+ Core Concepts to help you master CISSP</h3>
            </div>
            <span>(We know what you must know for the Exam Success)</span>

            <p>• Entire CISSP Broken down in 950+ Concepts</p>
            <p>• Avail all our Udemy Concept course for FREE </p>
            <p>
              <Link href="https://www.udemy.com/user/manoj-kumar-sharma-2013/">
                • Explore us on Udemy{" "}
              </Link>
            </p>
          </div>

          <div>
            <div>
              <div className="mr-2 min-h-[46px] min-w-[46px] overflow-hidden rounded-[50%] bg-accent p-2">
                <FaBook className="h-[30px] w-[30px]" />
              </div>
              <h3>Additional Mentoring for 15 Days Preparation</h3>
            </div>
            <span>(I hold your back when you are going through Stress)</span>

            <p>
              • Personalized attention and mentoring once you book your Exam,
            </p>
            <p>• Get customized plan for your last 15 days before the exam. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
