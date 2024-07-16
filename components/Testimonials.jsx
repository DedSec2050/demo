"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import vidplay from "../public/assets/vidplay.webp";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Link from "next/link";

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
          <p>{text.slice(0, 40)}</p>
          <p>{text.slice(41, 70)}</p>
          <p>{text.slice(71, 100)}...</p>
        </>
      );
    else if (100 < text.length) {
      return (
        <>
          <p>{text.slice(0, 40)}</p>
          <p>{text.slice(41, 75)}</p>
          <p>{text.slice(76, 100)}</p>
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
      <div className="mt-8 flex flex-col px-[30px] sm:px-[50px] xl:px-[15vw]">
        {/* Add Testimonial Section here  */}
        <div className="mt-8">
          <h1 className="mt-8 text-center text-clamptitle leading-9">
            <strong>
              <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent xxl:text-[2.5vw]">
                See what Participants say
              </span>{" "}
              <span className="bg-gradient-to-r from-accent to-grn bg-clip-text text-transparent xxl:text-[2.5vw]">
                about us:
              </span>
              <br />
            </strong>
          </h1>
        </div>
        <div className="flex px-4 py-8">
          <Marquee>
            {" "}
            {testimonialDataList.map((data, index) => {
              return (
                <div
                  className="mt-[150px] w-[100%] px-10 xxl:px-[7vw]"
                  key={index}
                >
                  <div className="flex h-[300px] w-[20rem] flex-col items-center justify-center rounded-[3%] border-4 border-accent xxl:h-[43rem] xxl:w-[40rem]">
                    <div className="image flex translate-y-[-65px] py-2 xxl:translate-y-[-120px]">
                      <div className="bg-blue relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-blue-500 drop-shadow-blue xxl:h-[200px] xxl:w-[200px]">
                        <Image
                          src="/assets/Testimonials/demo.webp"
                          alt=""
                          fill
                        />
                      </div>
                    </div>
                    <div className="justify-centers flex h-[70%] translate-y-[-40px] flex-col items-center px-4 text-center">
                      <div className="name mt-6 translate-y-[-30px] text-[1rem] xxl:translate-y-[-100px] xxl:text-[1.3vw]">
                        {data.name}
                      </div>
                      <div className="sep translate-y-[-28px] text-[0.75rem] xxl:translate-y-[-110px] xxl:text-[1.3vw]">
                        Nailed CISSP in {data.date}
                      </div>
                      <div className="w-full px-5 text-[0.85rem] xxl:translate-y-[-80px] xxl:text-[1.1vw]">
                        {handleText(data.desc)}
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 h-[75px] w-[75px] translate-x-[43rem] translate-y-[-2.8rem] md:h-[100px] md:w-[100px] md:translate-x-[17.2rem] xxl:h-[250px] xxl:w-[250px] xxl:translate-x-[34rem] xxl:translate-y-[-8.5rem]">
                    <Link href="https://youtu.be/_d8Jxaq_WSI?si=wku649exTUWMVgwi">
                      <Image
                        src={vidplay}
                        height={368}
                        width={368}
                        alt="video play"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Page8;
