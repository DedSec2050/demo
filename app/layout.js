import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import Floater from "@/components/Floater";
import Script from "next/script";
import logo from "@/public/assets/cyberlg.webp";
export const metadata = {
  metadataBase: new URL("https://www.cybernous.com/"),
  title: {
    default: "Cybernous CISSP Online Training",
    template: `%s | Cybernous`,
  },
  description:
    "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
  openGraph: {
    title: "Cybernous CISSP Online Training",
    description:
      "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
    images: [
      {
        url: "/favicon.ico",
        alt: "Cybernous",
      },
    ],
  },
  verification: {
    google: "give verification id here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        {children}

        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      </body>
    </html>
  );
}
