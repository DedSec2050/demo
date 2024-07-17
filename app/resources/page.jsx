"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MultiSteps from "@/components/MultiSteps";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/app/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

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
      <Footer />
    </div>
  );
};

export default Resources;
