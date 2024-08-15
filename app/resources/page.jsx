"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MultiSteps from "@/components/MultiSteps";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/app/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
import Image from "next/image";
import img1 from "@/public/assets/ResourcePage/TileImg/domainsummaries.webp";
import img2 from "@/public/assets/ResourcePage/TileImg/masterclass.webp";
import img3 from "@/public/assets/ResourcePage/TileImg/mocktest.webp";
import img4 from "@/public/assets/ResourcePage/TileImg/flashcards.webp";
const cardData = [
  {
    header: "CISSP Domain Notes",
    text: "CISSP is vast and it is important for you to have a short and concise revision. These Domain summaries will help you quickly grasp concepts you need to know before you CISSP exam. ",
    imgPath: img1,
  },
  {
    header: "FREE CISSP Masterclass",
    text: "Experience an immersive learning experience for your CISSP Exam with our FREE Master class. Register for it today!",
    imgPath: img2,
  },
  {
    header: "FREE Mock Test",
    text: "CISSP is a Tricky Exam and practicing right CISSP Questions is a must before the Exam. The Mock Test is scenario based and pointed to help you understand the technicalities of the CISSP Exam.",
    imgPath: img3,
  },
  {
    header: "FREE CISSP Flash Cards",
    text: "The FREE Flashcards has been designed to help candidates quickly revise the topics in an easy understandable format, providing you confidence for the CISSP Exam.",
    imgPath: img4,
  },
];
const Resources = () => {
  // const data = fetchDataFromFirestore();
  const [user, setUser] = useAuthState(auth);
  console.log(user);
  return (
    <div className="">
      <Banner />
      <Floater />
      <BackWrapper />
      <Header />
      <div className="flex flex-col items-center justify-center pt-[30px]">
        <div className="flex flex-col justify-between rounded-md border-4 border-accent p-6 md:p-20">
          <MultiSteps />
        </div>
      </div>
      {user ? <p>your currently logged email: {user.email}</p> : ""}
      <div className="flex items-center justify-center">
        <div className="grid max-w-[1280px] items-center justify-center gap-x-6 gap-y-6 md:grid-cols-2 xl:grid-cols-3 xlg:max-w-[1400px] xlls:grid-cols-4">
          {cardData.map((data, index) => {
            return (
              <div
                key={index}
                className="h-[400px] w-[300px] overflow-hidden rounded-[15px] bg-transparent bg-gradient-to-t from-[#739DED66] to-[#A8AEE000] transition-all duration-500 hover:translate-y-[-10px] xl:h-[400px] xl:w-[300px]"
              >
                <div className="flex h-[51px] items-center justify-center bg-gradient-to-b from-[#fad10354] to-transparent">
                  <span className="font-bold">{data.header}</span>
                </div>
                <div className="h- flex h-[173px] items-center justify-center overflow-hidden object-contain">
                  <Image
                    src={data.imgPath}
                    height={126}
                    width={233}
                    objectFit="contain"
                    alt="tile Image"
                  ></Image>
                </div>
                <div className="px-6 py-4 leading-normal">
                  <span>{data.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
