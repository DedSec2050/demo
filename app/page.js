import Hero from "@/components/Pages/Hero";
// import Popup from "@/components/Popup";

import Timeline from "@/components/Timeline";
import Resources from "../components/Resources";
import BootCampSlider from "../components/BootCampSlider";
import Toolkit from "../components/Toolkit";
import Schedule from "../components/Schedule";
import Roadmap from "../components/Roadmap";
import Comparision from "../components/Comparision";
import Testimonials from "../components/Testimonials";
import AccordionWrap from "../components/AccordionWrap";

export default function Home() {
  return (
    <main>
      <Hero />
      <Resources />
      <BootCampSlider />
      <Comparision />
      <Toolkit />
      <Schedule />
      <Roadmap />
      <Timeline />
      <Testimonials />
      <AccordionWrap />
    </main>
  );
}
