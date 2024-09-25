import Hero from "@/components/Pages/Hero";
// import Popup from "@/components/Popup";
import "animate.css";
import BootCampSlider from "@/components/BootCampSlider";
import Schedule from "@/components/Schedule";
import Roadmap from "@/components/Roadmap";
import Comparision from "@/components/Comparision";
import Testimonials from "@/components/Testimonials";
import AccordionWrap from "@/components/AccordionWrap";
import Guidelines from "@/components/Guidelines";
import Connect from "@/components/Connect";
import Resources from "@/components/Resources";
import Positions from "@/components/Positions";
import QualityAssr from "@/components/QualityAssr";
import Benefits from "@/components/Benefits";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Tags from "@/components/Pages/Tags";
import SuccessStories from "@/components/Pages/SuccessStories";
import Slider from "@/components/CISSPLanding/Slider";
import TagsBanner from "@/components/CISSPLanding/TagsBanner";

export default function Home() {
  return (
    <div className="">
      {/* <BackWrapper /> */}
      {/* <Popup /> */}
      {/* <div className="">text</div> */}
      <Banner />
      <main className="">
        <div className="bg-white [&>header]:text-black">
          <Header />
          <Slider />
        </div>
        <TagsBanner />
        <div className="lg:mt-[7vw] xl:mt-0">
          {/* <Tags /> */}
          <SuccessStories />
        </div>
        <Guidelines />
        {/* <Resources /> */}
        <BootCampSlider />
        <Comparision />
        <Resources />
        <Roadmap />
        <Positions />
        <Connect />
        <Schedule />
        <Testimonials />
        <QualityAssr />
        <Benefits />
        {/* <Floater /> */}
        <AccordionWrap />
      </main>
      <Footer />
    </div>
  );
}
