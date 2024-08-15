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
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snipper": -1,
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
    google: "give verification id here",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybernous CISSP Online Training",
    description: "",
    creator: "@Marsal_Soren06",
    site: "@Marsal_Soren06",
    images: [
      {
        url: "@/public/assets/cyberlg.webp",
        height: 630,
        Width: 1200,
        alt: "cybernous logo",
      },
    ],
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
