// import Hero from "@/components/Pages/Hero";
// import Popup from "@/components/Popup";
import "animate.css";
// import BootCampSlider from "../components/BootCampSlider";
// import Schedule from "../components/Schedule";
// import Roadmap from "../components/Roadmap";
// import Comparision from "../components/Comparision";
// import Testimonials from "../components/Testimonials";
import AccordionWrap from "@/components/AccordionWrap";
// import Guidelines from "@/components/Guidelines";
// import Connect from "@/components/Connect";
// import Resources from "../components/Resources";
import Positions from "@/components/Positions";
// import QualityAssr from "@/components/QualityAssr";
// import Benefits from "@/components/Benefits";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Banner from "@/components/Banner";
// import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
import Tags from "@/components/Pages/Tags";
import SuccessStories from "@/components/Pages/SuccessStories";
import LandingSwiper from "@/components/Landing/LandingSwiper";
import Offers from "@/components/Landing/Offers";
import PartnerEco from "@/components/Landing/PartnerEco";
import ChooseCybernous from "@/components/Landing/ChooseCybernous";
import MobileLanding from "@/components/Landing/MobileLanding";
import MoU from "@/components/Landing/MoU";
import ProgramFeatures from "@/components/Landing/ProgramFeatures";
import Review from "@/components/Landing/Review";

export default function Home() {
  return (
    <div className="">
      {/* <BackWrapper /> */}

      {/* <Popup /> */}
      {/* <div className="">text</div> */}
      <main className="">
        <div className="">
          <Header />
          <Floater />
          <MobileLanding />
          <LandingSwiper />
          <Review />
          {/* <Hero /> */}
        </div>
        <div>
          <Offers />
          <PartnerEco />
          <MoU />
          {/* <ProgramFeatures /> */}
        </div>
        <div className="lg:mt-[7vw] xl:mt-0">
          <SuccessStories />
        </div>
        {/* <Testimonials /> */}
        <Floater />
        <ChooseCybernous />
        <AccordionWrap />
      </main>
      <Footer />
    </div>
  );
}
