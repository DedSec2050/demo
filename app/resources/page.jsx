"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MultiSteps from "@/components/MultiSteps";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/app/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
const cardData = [
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
];
const Resources = () => {
  // const data = fetchDataFromFirestore();
  const [user, setUser] = useAuthState(auth);
  console.log(user);
  return (
    <div className="">
      <Banner />
      <Header />
      <div className="flex flex-col items-center justify-center pt-[30px]">
        <div className="flex flex-col justify-between rounded-md border-4 border-accent p-6 md:p-20">
          <MultiSteps />
        </div>
      </div>
      {user ? <p>your currently logged email: {user.email}</p> : ""}
      <div className="flex items-center justify-center">
        <div className="grid max-w-[1280px] items-center justify-center md:grid-cols-2 xl:grid-cols-3 xlls:grid-cols-4">
          {cardData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-slate-500 px-4 py-2"
              >
                {/* For Text  */}
                <div className="flex min-h-[400px] w-[300px] flex-col items-center gap-4 rounded-[5px] border-2 border-accent bg-matteblue bg-opacity-[90%] p-8">
                  <div className="h-[90px] w-[190px] rounded-[5%] bg-black text-justify md:h-[150px] md:w-[250px]"></div>
                  <h1 className="font-semibold text-accent">
                    CISSP DOMAIN SUMMARIES
                  </h1>
                  <p className="leading-snug text-slate-200">
                    The CISSP exam covers an incredibly broad number of topics
                    across 8 domains - it can be overwhelming knowing what to
                    study! Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Repellat hic sed, ipsa at quas modi quidem, unde odio
                    recusandae facere animi veniam autem ut quae aut quia,
                    accusantium eos incidunt?
                  </p>
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
