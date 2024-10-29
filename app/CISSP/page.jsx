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
import CISSPcontact from "@/components/CISSPLanding/CISSPcontact";
import CISSPheader from "@/components/CISSPLanding/CISSPheader";
import MovSlider from "@/components/CISSPLanding/MovSlider";
import USP from "@/components/USP";
import Floater from "@/components/Floater";
import BackWrapper from "@/components/BackWrapper";

export const metadata = {
  metadataBase: new URL("https://www.cybernous.com/"),
  title: {
    default: "CISSP",
    template: `%s | Cybernous`,
  },
  description:
    "Cybernous is the best platform for CISSP Certification Online Training. Explore expert-led CISSP preparation to advance your skills. Enroll now!",
  openGraph: {
    url: "https://cybernous.com/assets/og-image/image.png",
    type: "website",
    title: "Cybernous CISSP Online Training",
    description:
      "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
    images: [
      {
        url: "https://cybernous.com/assets/og-image/image.png",
        width: 1200,
        height: 630,
        alt: "Cybernous",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  keywords: [
    "CISSP",
    "Cybernous",
    "Cyber Security",
    "Cyber Security Online Training",
    "FREE CyberSecurity Resources",
  ],
  verification: {
    google: "3V77gokHFiFVtwpFrn6FH7tDTq8Q9KwUlNJG05_an0",
  },
  alternates: {
    canonical: "https://www.cybernous.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybernous CISSP Online Training",
    description: "",
    creator: "@Marsal_Soren06",
    site: "@Marsal_Soren06",
    images: [
      {
        url: "https://demo-gamma-ebon.vercel.app/assets/og-image/image.png",
        height: 630,
        width: 1200,
        alt: "cybernous logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="">
      {/* <BackWrapper /> */}
      {/* <Popup /> */}
      {/* <div className="">text</div> */}
      <BackWrapper />
      <Banner />
      <Floater />
      <main className="">
        <div className="bg-white">
          <CISSPheader />
          <MovSlider />

          <Slider />
          <div className="pb-4 xl:[&>div]:hidden">
            <CISSPcontact />
          </div>
          <TagsBanner />
        </div>
        <div className="lg:mt-[7vw] xl:mt-0">
          {/* <Tags /> */}
          <USP />
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
