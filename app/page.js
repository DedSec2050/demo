import Hero from "@/components/Pages/Hero";
// import Popup from "@/components/Popup";

import BootCampSlider from "../components/BootCampSlider";
import Toolkit from "../components/Toolkit";
import Schedule from "../components/Schedule";
import Roadmap from "../components/Roadmap";
import Comparision from "../components/Comparision";
import Testimonials from "../components/Testimonials";
import AccordionWrap from "../components/AccordionWrap";
import Guidelines from "@/components/Guidelines";
import Connect from "@/components/Connect";
import Resources from "./resources/page";
import Positions from "@/components/Positions";

export default function Home() {
  return (
    <main>
      <Hero />
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

      <AccordionWrap />
    </main>
  );
}
