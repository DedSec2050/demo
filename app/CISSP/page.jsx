"use client";
import Hero from "@/components/Pages/Hero";
// import Popup from "@/components/Popup";
import "animate.css";
import BootCampSlider from "@/components/BootCampSlider";
import Toolkit from "@/components/Toolkit";
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
import Popup from "@/components/Popup";
import Banner from "@/components/Banner";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";

export default function Home() {
  return (
    <div className="">
      <BackWrapper />
      {/* <Popup /> */}
      {/* <div className="">text</div> */}
      <Banner />
      <main className="">
        <div className="">
          <Header />
          <Hero />
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
        <Floater />
        <AccordionWrap />
      </main>
      <Footer />
    </div>
  );
}