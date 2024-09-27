import React from "react";
import { PiFlagBannerFoldFill } from "react-icons/pi";

const USP = () => {
  return (
    <section className="bg-usp flex w-full flex-col bg-cover bg-no-repeat">
      {/* Headers  */}
      <div className="w-full items-center justify-center bg-companyBlue bg-gradient-to-r from-grn via-accent to-grn bg-clip-text px-4 text-center font-[700] leading-tight text-transparent xl:py-8">
        <h2 className="text-clampheader">The 6 Differentiators</h2>
        <h3 className="text-clamptitle">
          Which make CISSP Success Toolkit (CST) the BEST Program
        </h3>
      </div>
      {/* Content Wrapper  */}
      <div className="flex flex-col px-10 md:flex-row [&>div>h3]:text-center [&>div>h3]:text-[1.3rem] [&>div>h3]:font-bold [&>div>h3]:text-companyGrn xl:[&>div>h3]:text-[2.1rem] [&>div>p]:text-center [&>div>p]:italic xl:[&>div>p]:text-[1.6rem] [&>div]:px-4">
        {/* Titles  1 */}
        <div className="leading-normal [&>div>div>h3]:text-[1.3rem] [&>div>div>h3]:font-bold xl:[&>div>div>h3]:text-[2.1rem] [&>div>div]:flex [&>div>div]:items-center [&>div>p]:text-[1rem] xl:[&>div>p]:text-[1.4rem] [&>div]:my-4 [&>div]:rounded-[15px] [&>div]:border-2 [&>div]:bg-black [&>div]:px-8 [&>div]:py-4 xl:[&>div]:max-w-[550px]">
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
              <h3>The 4x Depth</h3>
            </div>

            <p>
              Bootcamps are barely helpful to pass CISSP. Our approach is NOT A
              BOOTCAMP approach., rather an end-to-end style preparation. We
              follow a 4X approach to get you confident for the exam:
            </p>
            <ul>
              <li>70+ hours of Self-paced Videos, Notes and Questions</li>
              <li>30+ hours of Live Theory Classes</li>
              <li>60+ hours of Live Exam practice</li>
            </ul>
          </div>
          <div>
            <h3>The 3 Headed approach</h3>
            <p>
              The program is designed to get your ready through our Daily
              Videos, Daily Notes and Daily Exam practice.
            </p>
          </div>
          <div>
            <h3>1:1 mentorship</h3>
            <p>
              A passionate mentor is crucial for your CISSP Success. Once you
              enroll, you are going to be directly mentored 1:1 by your coach
              Manoj Sharma. You can book a call with your coach anytime, amazing
              right!
            </p>
          </div>
        </div>
        <div>
          <h3>Our Passion 2</h3>
          <p>
            We have proven "There is a difference between a Trainer & Coach"
          </p>
          <div>
            <h3>The 4x Depth</h3>
            <p>
              Bootcamps are barely helpful to pass CISSP. Our approach is NOT A
              BOOTCAMP approach., rather an end-to-end style preparation. We
              follow a 4X approach to get you confident for the exam:
            </p>
            <ul>
              <li>70+ hours of Self-paced Videos, Notes and Questions</li>
              <li>30+ hours of Live Theory Classes</li>
              <li>60+ hours of Live Exam practice</li>
            </ul>
          </div>
          <div>
            <h3>The 3 Headed approach</h3>
            <p>
              The program is designed to get your ready through our Daily
              Videos, Daily Notes and Daily Exam practice.
            </p>
          </div>
          <div>
            <h3>1:1 mentorship</h3>
            <p>
              A passionate mentor is crucial for your CISSP Success. Once you
              enroll, you are going to be directly mentored 1:1 by your coach
              Manoj Sharma. You can book a call with your coach anytime, amazing
              right!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
