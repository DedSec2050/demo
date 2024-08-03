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
      <BackWrapper />
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
                {/* Header  */}

                {/* For Text  */}
                <div className="flex min-h-[400px] w-[300px] flex-col items-center gap-4 rounded-[25px] border-2 border-accent bg-matteblue bg-opacity-[90%]">
                  <div className="flex w-full items-center justify-between px-4 pt-4">
                    <div className="flex">
                      {/* Avatar  */}
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-full bg-green-500"></div>
                      <div className="ml-3 flex flex-col leading-6">
                        <span className="font-semibold text-slate-400">
                          Header
                        </span>
                        <span className="font-normal text-slate-400">
                          SubHead
                        </span>
                      </div>
                    </div>
                    <div className="cursor-pointer">
                      <SlOptionsVertical className="text-white" />
                    </div>
                  </div>
                  <div className="h-[150px] w-full bg-gray-700"></div>
                  <h1 className="flex w-full flex-col px-4 text-left font-semibold leading-6 text-accent">
                    <span>Title</span>
                    <span className="w-full text-justify text-accent">
                      Subhead
                    </span>
                  </h1>
                  <p className="px-4 pb-6 leading-snug text-gray-300">
                    The CISSP exam covers an incredibly broad number of topics
                    across 8 domains - it can be overwhelming knowing what to
                    study! Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Repellat hic sed, ipsa at quas modi quidem, unde odio
                    recusandae facere animi veniam autem ut quae aut quia,
                    accusantium eos incidunt?
                  </p>
                  <div className="flex w-full justify-end gap-4 px-4 pb-4">
                    <Button variant="outline" className="rounded-[40px]">
                      Disabled
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-[40px] bg-accent text-black hover:bg-transparent hover:text-accent"
                    >
                      Enabled
                    </Button>
                  </div>
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
