import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import Floater from "@/components/Floater";
import Script from "next/script";

export const metadata = {
  title: "Cybernous CISSP Online Training",
  description:
    "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
  openGraph: {
    title: "Cybernous CISSP Online Training",
    description:
      "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        {children}
        <Floater />
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      </body>
    </html>
  );
}
