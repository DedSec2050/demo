import Banner from "@/components/Banner";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const listData = [
  {
    no: 1,
    picPath: "/assets/SliderAssets/",
    altText: "Bibhas Biswas",
    date: "14th September 2024",
    testimonials: (
      <p>
        "I have passed my CISSP Yesterday. Thanks to Manoj Sharma and the CISSP
        Success Toolkit, His guidance made even the most complex parts of the
        CISSP Exam Outline clear and manageable! The Exam Live Practice Sessions
        were very helpful. I did not feel anything different in the CISSP exam.
        The program and the Live Exam practice is the real game changer."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecuritysuccess-mentorshipmatters-activity-7241664672267956224-dxZr?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/zreVn9Vx4Kc",
  },
  {
    no: 2,
    picPath: "/assets/SliderAssets/",
    altText: "Tanmay D Patre",
    date: "20th September 2024",
    testimonials: (
      <p>
        "I passed the CISSP certification, all thanks to Manoj Sharma's
        mentorship and the Cybernous CISSP Success Toolkit. The in-built notes
        made preparation so much easier, and Manoj’s ability to break down
        complex topics into simple concepts was key to my success."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cisspsuccessstory-cybersecurity-cisspexam-activity-7244246697340518401-EPdo?utm_source=share&utm_medium=member_desktop",
    youtube: "",
  },
  {
    no: 3,
    picPath: "/assets/SliderAssets/",
    altText: "Sohail Chandan",
    date: "5th August 2024",
    testimonials: (
      <p>
        "Manoj Sharma’s CISSP Success Toolkit removed my doubts about the CISSP
        Exam Requirements. Cracking the CISSP in 100 days seemed impossible
        until I joined Cybernous under Manoj Sharma’s guidance. The 80+ hours of
        recorded videos covered every domain thoroughly, making it easy to focus
        on what truly mattered. Manoj sir is an exceptional coach who always had
        my back!"
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecurity-successstory-activity-7229464327806672896-o9kl?utm_source=share&utm_medium=member_desktop",
    youtube: "",
  },
  {
    no: 4,
    picPath: "/assets/SliderAssets/",
    altText: "Karan Kumar Singh",
    date: "9th August 2024",
    testimonials: (
      <p>
        "I was skeptical about whether I could take CISSP without 5 years of
        experience, but Manoj Sharma’s CISSP Success Toolkit gave me the skills
        I needed. His methodical approach made me understand the core of the
        CISSP - Certified Information Systems Security Professional."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecurity-certification-activity-7228626263240818688-qjch?utm_source=share&utm_medium=member_desktop",
    youtube: "",
  },
  {
    no: 5,
    picPath: "/assets/SliderAssets/",
    altText: "Arun Kuriakose",
    date: "10th August 2024",
    testimonials: (
      <p>
        "Before I started, I wondered if CISSP is the hardest? However, with
        Manoj Sharma’s mentorship and the CISSP Success Toolkit, I felt fully
        prepared. His detailed Self-Study Tools were the key to my success!"
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecurity-certification-activity-7229347263532167168-To4W?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/ZK5eY4UXqps",
  },
  {
    no: 6,
    picPath: "/assets/SliderAssets/",
    altText: "BHAVIN",
    date: "27th July 2024",
    testimonials: (
      <p className="xl:text-[1.1rem]">
        "How to prepare online for the CISSP exam, training, and its training
        cost? These were the questions that I had before joining Cybernous for
        my CISSP Preparation but all my questions were cleared under the
        mentorship of Manoj sir. “Manoj Sharma’s CISSP Success Toolkit was
        invaluable for my success. The cost of CISSP training pales in
        comparison to the immense value delivered by the CISSP Success Toolkit
        program. The detailed training exceeded all expectations, answering my
        question, and offering far more than just Self-Study Tools."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-certifiedprofessional-cybersecurityexpert-activity-7223552367558901761-wM_6?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/xCFBZhZfQM8",
  },
  {
    no: 7,
    picPath: "/assets/SliderAssets/",
    altText: "Syed Adnan Ahmed",
    date: "27th July 2024",
    testimonials: (
      <p>
        "Thanks to Manoj Sharma’s incredible coaching, I understand why people
        say the CISSP is hard. But with the CISSP Success Toolkit’s 150-hour
        structured program. I couldn’t have passed without his insight into
        CISSP Certification Prep Course!"
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7223326692986044416?utm_source=share&utm_medium=member_desktop",
    youtube: "",
  },
  {
    no: 8,
    picPath: "/assets/SliderAssets/",
    altText: "Mobin Saeed Syed",
    date: "14th June 2024",
    testimonials: (
      <p>
        "The CISSP Success Toolkit was everything I needed for the CISSP Exam
        Outline. Manoj Sharma’s guidance was outstanding, and the tools provided
        helped me finally understand how to crack CISSP."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecurity-activity-7208007763124264960-Nj5d?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtube.com/shorts/ixwxFv7ebSI?feature=share",
  },
  {
    no: 9,
    picPath: "/assets/SliderAssets/",
    altText: "FAHAD KHAN",
    date: "13th June 2024",
    testimonials: (
      <p>
        "The Cybernous Success Toolkit provided over 5,000 practice questions
        that helped me nail my CISSP exam! Manoj Sharma’s insights into the
        question patterns were a game-changer. His guidance truly shaped my
        understanding of the exam."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cybersecurity-cissp-successstory-activity-7207620974060457984-APwl?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/xnNnacPdUNs",
  },
  {
    no: 10,
    picPath: "/assets/SliderAssets/",
    altText: "IMTIAZ HUSSAIN",
    date: "31st May 2024",
    testimonials: (
      <p>
        "With the CISSP Success Toolkit, the fear of failure disappeared. Manoj
        Sharma’s methods answered the question: Is the CISSP be achieved in 100
        days? But I nailed it in 50 Days with the CISSP Success Toolkit. His
        approach covered every angle, helping me achieve my Goal."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecurity-activity-7202237493478400000-eVQL?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/icZmh1Pcdrc",
  },
  {
    no: 11,
    picPath: "/assets/SliderAssets/",
    altText: "Sagar Kawale",
    date: "26th May 2024",
    testimonials: (
      <p>
        "Thanks to Manoj Sharma, I finally passed CISSP with confidence. The
        program is crafted for busy working professionals like me. The CISSP
        Success Toolkit was a lifesaver, preparing me thoroughly with insight
        into the CISSP All-in-One Exam Guide called CISSP Success Toolkit."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-successstory-cybersecurity-activity-7201223644679725056-cV4O?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/OdhaKyA_nUY",
  },
  {
    no: 12,
    picPath: "/assets/SliderAssets/",
    altText: "Rakhesh",
    date: "27th April 2024",
    testimonials: (
      <p>
        "Manoj Sharma is not just a trainer but a mentor who genuinely cares
        about your CISSP success. Cybernous’s focus on real CISSP questions and
        15-day intensive practice sessions made a huge difference in my exam
        readiness."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cissptraining-cybersecurity-activity-7191473957403828224-4rsN?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/E1ayswR4H14",
  },
  {
    no: 14,
    picPath: "/assets/SliderAssets/",
    altText: "JOE Mathai",
    date: "13th April 2024",
    testimonials: (
      <p>
        "The in-built notes from Cybernous saved me hours of studying! Manoj
        Sharma's focus on understanding concepts instead of just memorization
        helped me pass CISSP on the first try. Truly grateful for his support."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cisspsuccess-certifiedpro-cybersecuritychampion-activity-7185307049805668353-lz2d?utm_source=share&utm_medium=member_desktop",
    youtube: "",
  },
  {
    no: 15,
    picPath: "/assets/SliderAssets/",
    altText: "ASHOKE RANJAN",
    date: "10th April 2024",
    testimonials: (
      <p>
        "Manoj Sharma’s CISSP Success Toolkit made preparing for the Certified
        Information Systems Security Professional (Online) easy. His
        step-by-step guidance made me realize why they say the CISSP - Certified
        Information Systems Security Professional is essential."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cissptraining-informationsecurity-activity-7184103360197799936-_JXY?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/l14cvlOdQgE",
  },
  {
    no: 16,
    picPath: "/assets/SliderAssets/",
    altText: "Palani",
    date: "5th April 2024",
    testimonials: (
      <p>
        "I was uncertain about how many years it takes to get CISSP, but Manoj
        Sharma’s CISSP Success Toolkit made the path clear. "Cybernous’s CISSP
        Success Toolkit was a lifesaver! The 60+ hours of live practice
        sessions, combined with Manoj Sharma’s personalized feedback, prepared
        me for every question type."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cissptraining-informationsecuirty-activity-7183162367428423680--RDE?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/i0qWoGFYvi4",
  },
  {
    no: 17,
    picPath: "/assets/SliderAssets/",
    altText: "Vikram Singh Rajawat",
    date: "31st March 2024",
    testimonials: (
      <p>
        "I passed CISSP with flying colors. Thanks to the CISSP Success Toolkit.
        Manoj Sharma's mentorship helped me understand that with the right
        mentorship anyone can achieve their goals of passing CISSP Exam"
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-successstory-achievement-activity-7180244482469113856-0SWI?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/9_-Q8tYSZqM",
  },
  {
    no: 18,
    picPath: "/assets/SliderAssets/",
    altText: "Rajendran PK",
    date: "9th February 2024",
    testimonials: (
      <p>
        "Passing the CISSP seemed daunting until I joined Cybernous. Manoj
        Sharma’s focus on practical application through mock tests and quizzes
        helped me stay confident. His passion for cybersecurity is contagious!"
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cisspsuccess-cybersecurity-celebratingachievement-activity-7167212592799711233-lyCf?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/RwYxvG8fPrA",
  },
  {
    no: 19,
    picPath: "/assets/SliderAssets/",
    altText: "Fayiz Muhammed",
    date: "10th February 2024",
    testimonials: (
      <p>
        "The CISSP Success Toolkit was the perfect solution for my busy
        schedule. Manoj Sharma’s mentorship allowed me to complete best online
        self-paced CISSP training, making sure I was ready for the ISC2:
        Cybersecurity Certifications and Continuing Education."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_study-sessions-professional-activity-7163462120842444801-FRrU?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/En9d9oeDXns",
  },
  {
    no: 20,
    picPath: "/assets/SliderAssets/",
    altText: "Naveen Mittal",
    date: "14th Jan 2024",
    testimonials: (
      <p>
        "I passed CISSP under the guidance of Manoj Ji. The weekend sessions are
        purely Exam-focused and give the candidates the best practice to solve
        questions."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cybersecuritysuccess-cissp-makarsankranti-activity-7152295407769796608-SvkE?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/4rf9sIJ5XZg",
  },
  {
    no: 21,
    picPath: "/assets/SliderAssets/",
    altText: "Gautam Kumar",
    date: "30th Dec 2023",
    testimonials: (
      <p>
        "Cybernous’s 5,000+ practice questions and 15-day intensive exam prep
        were instrumental in my CISSP success. Manoj Sharma’s coaching style is
        focused, patient, and incredibly effective. His 950+ Udemy courses are
        best for revision purpose."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cybersecurity-successstory-activity-7147083706229305344-CzR9?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/XNRvFjM_Ke8",
  },
  {
    no: 23,
    picPath: "/assets/SliderAssets/",
    altText: "Muhammad Jawad",
    date: "11 Dec 2023",
    testimonials: (
      <p>
        "The CISSP Success Toolkit and Manoj Sharma’s detailed coaching made me
        confident about the Certified Information Systems Security Professional
        (CISSP) exam. I finally understood What is the CISSP in the context of
        information security training."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cisspsuccess-cybernousachievements-cybersecurityjourney-activity-7141462129676595200-VPo8?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/0cLNy2hbGhU",
  },
  {
    no: 24,
    picPath: "/assets/SliderAssets/",
    altText: "Pavan Kumar Rangaraju",
    date: "28th Nov 2023",
    testimonials: (
      <p>
        "Manoj Sharma’s CISSP Success Toolkit helped me master the material in
        the Certified Information Systems Security Professional (Online)
        program. His guidance made it clear why people say, Is CISSP the
        hardest?."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7135906453407612929",
    youtube: "https://youtu.be/aQOYCKc9a4w",
  },
  {
    no: 25,
    picPath: "/assets/SliderAssets/",
    altText: "Samir Roy",
    date: "29 Nov 2023",
    testimonials: (
      <p>
        "With Manoj Sharma’s CISSP Success Toolkit, I was able to sail through
        the CISSP - Certified Information Systems Security Professional process.
        "Manoj Sharma’s dedication to his students helped me overcome my fear of
        the CISSP exam. The 40 hours of concept clarification sessions by
        Cybernous provided the clarity I needed to succeed."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/posts/mksharma007_cissp-cissptraining-linkedinpost-activity-7135649165304352769-4KSz?utm_source=share&utm_medium=member_desktop",
    youtube: "https://youtu.be/Yyl5kan1yaA",
  },
  {
    no: 26,
    picPath: "/assets/SliderAssets/",
    altText: "Neha Agrawal",
    date: "25 Nov 2023",
    testimonials: (
      <p>
        "Thanks to the CISSP Success Toolkit, Manoj Sir helped me ace the Best
        CISSP Certification Training Course Online [2023]. "Manoj Sir’s coaching
        style is what helped me pass CISSP in 100 days. The Cybernous focus on
        exam-specific practice questions ensured I was well-prepared for the
        real test."
      </p>
    ),
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7134915764523843584",
    youtube: "https://youtu.be/6Ovf8IAaoIs",
  },
];

const page = () => {
  return (
    <div>
      <Banner />
      <Floater className="hidden md:flex" />
      <Header />
      <section className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-20">
        <h1 className="font-700 mb-[30px] text-[40px] font-bold text-accent">
          Hall of Fame
        </h1>
        {/* Content Container  */}
        <div className="flex min-w-[300px] flex-col gap-y-4 xl:gap-x-4">
          {listData.map((item, index) => {
            return (
              <div
                className="overflow-hidden rounded-[15px] border-[0.25px] border-accent bg-white font-semibold text-black"
                key={index}
              >
                <div className="flex flex-col items-center md:flex-row">
                  {/* Image here  */}
                  <div className="flex h-full w-full min-w-[350px] justify-center px-2 py-2 md:flex md:h-[350px] md:justify-start md:px-0 md:py-0">
                    <Image
                      height={350}
                      width={350}
                      src={item.picPath + item.no + ".webp"}
                      alt={item.altText}
                      className="overflow-hidden rounded-[25px] md:rounded-none"
                    ></Image>
                  </div>
                  {/* Content Here  */}
                  <div className="flex h-full min-w-[280px] max-w-[700px] flex-col px-4 py-4">
                    {/* Pass date  */}
                    <div className="self-end font-semibold xlg:text-[1.8rem]">
                      {item.date}
                    </div>
                    {/* Testimonials data here  */}
                    <div className="py-4 text-[1.2rem] leading-tight xlg:text-[1.3rem] xlg:leading-normal">
                      {item.testimonials}
                    </div>
                    {/* Socials here  */}
                    <div className="flex justify-end gap-x-2 self-end">
                      <Link rel="nofollow" href="#">
                        <AiFillYoutube className="text-[2.3rem] text-red-500" />
                      </Link>
                      <Link href="#" rel="nofollow">
                        <FaLinkedin className="text-[2.3rem] text-blue-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
