import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MultiSteps from "@/components/MultiSteps";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";

// async function fetchDataFromFirestore() {
//   const querySnapshot = await getDocs(collection(db, "resources"));
//   console.log(querySnapshot);
//   const data = [];
//   querySnapshot.forEach((doc) => {
//     data.push(doc.data().resources);
//   });
//   console.log(data);
//   data[0].resources.forEach((item) => {
//     console.log(item);
//   });
//   console.log(data[0].resources);
//   return querySnapshot;
// }
const Resources = () => {
  // const data = fetchDataFromFirestore();
  return (
    <div className="">
      <Banner />
      <Header />
      <div className="flex flex-col items-center justify-center pt-[30px]">
        <div className="flex flex-col justify-between rounded-md border-4 border-accent p-6 md:p-20">
          <MultiSteps />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
