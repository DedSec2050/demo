"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
// import vidplay from "../public/assets/vidplay.webp";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import parse from "html-react-parser";
// import { data } from "autoprefixer";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "testimonials"));
  console.log(querySnapshot);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  console.log(data);
  return data;
}

const Page8 = () => {
  const [testiData, settestiData] = useState([]);
  const handleText = (text) => {
    if (40 < text.length)
      return (
        <>
          <p className="px-10">
            {parse("<p>" + text.slice(0, 100) + "...</p>")}
          </p>
        </>
      );
    else if (100 < text.length) {
      return (
        <>
          <p>{parse("<p>" + text + "</p>")}</p>
          {/* <p>{text.slice(0, 40)}</p>
          <p>{text.slice(41, 75)}</p>
          <p>{text.slice(76, 100)}</p> */}
        </>
      );
    } else {
      return <p>{text}</p>;
    }
  };
  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      // console.log(data[0].test[0]);
      settestiData(data[0].test);
    }
    // console.log(testiData);
    fetchData();
  }, []);
  const testimonialDataList = testiData;
  console.log(testimonialDataList);

  return (
    // Slideshow Testimonials section
    <section>
      <div className="flex flex-col px-[30px] sm:px-[50px] xl:mt-8 xl:px-[10vw]">
        {/* Add Testimonial Section here  */}
        <div className="mt-10">
          <h2 className="mt-2 text-center text-clamptitle">
            <strong>
              <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
                See what Participants say
              </span>{" "}
              <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
                about us:
              </span>
              <br />
            </strong>
          </h2>
        </div>
        <div className="flex px-4 py-8">
          <Marquee>
            {" "}
            {testimonialDataList.map((data, index) => {
              return (
                <div
                  className="mt-[100px] w-[100%] translate-y-[-30px] px-10 xxl:px-[7vw]"
                  key={index}
                >
                  <div className="flex h-[370px] w-[300px] flex-col items-center justify-center rounded-[3%] border-2 border-accent bg-gradient-to-r from-[#E8E8E808] to-[#FFFFFF24] xl:h-[370px] xl:w-[20rem] xxl:h-[43rem] xxl:w-[40rem]">
                    <div className="image flex py-2 xxl:translate-y-[-120px]">
                      <div className="bg-blue fixed top-0 mt-2 h-[100px] w-[100px] translate-x-[-50%] translate-y-[-65px] overflow-auto rounded-full border-4 border-blue-500 drop-shadow-blue xxl:h-[200px] xxl:w-[200px]">
                        <Image src={data.photoUrl} alt="testimonials" fill />
                      </div>
                    </div>
                    <div className="fixed top-0 mt-[40px] flex flex-col items-center justify-center px-4 text-center">
                      <div className="mt-[30px] text-[1rem] font-semibold xl:text-[1.2rem] xxl:text-[1.3vw]">
                        {data.name}
                      </div>
                      <div className="text-[0.75rem] xxl:translate-y-[-110px] xxl:text-[1.3vw]">
                        Nailed CISSP in {data.date}
                      </div>
                    </div>
                    <div className="fixed top-0 mt-[150px] flex translate-y-[0] flex-col items-center justify-center px-4 text-center">
                      <div className="w-full px-5 text-[0.85rem] xxl:text-[1.1vw]">
                        {handleText(data.desc)}
                        {data.desc.length > 100 ? (
                          <AlertDialog>
                            <AlertDialogTrigger>
                              <div className="text-right text-accent">
                                Read more..
                              </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-primary">
                              <AlertDialogHeader>
                                {/* <AlertDialogTitle>
                                  Are you absolutely sure?
                                </AlertDialogTitle> */}
                                <AlertDialogDescription>
                                  {parse(
                                    '<div className="text-white xl:text-[1.2rem] leading-normal">' +
                                      data.desc +
                                      "</div>",
                                  )}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Close</AlertDialogCancel>
                                {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="fixed bottom-0 mb-6 xl:translate-y-[-30px]">
                      <Link
                        href={
                          data.url ||
                          "https://youtu.be/_d8Jxaq_WSI?si=wku649exTUWMVgwi"
                        }
                      >
                        <Button className="rounded-[3rem] bg-red-700 text-white transition-all duration-500 hover:border-red-700">
                          Watch Here <FaPlay className="ml-2 text-white" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="flex w-full translate-y-[-30px] items-center justify-center xl:translate-y-0">
          <Link href="https://www.youtube.com/watch?v=_d8Jxaq_WSI&list=PLJ1GEK2Q0WrS5FNz6s2pLWlf0z_E_v0qM">
            <Button className="rounded-[30px] transition-all duration-500">
              Watch more Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page8;
