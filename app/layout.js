import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import Floater from "@/components/Floater";
import Script from "next/script";
import logo from "@/public/assets/cyberlg.webp";
import logop from "@/public/assets/og-image/image.png";
export const metadata = {
  metadataBase: new URL("https://www.cybernous.com/"),
  title: {
    default: "Cybernous CISSP Online Training",
    template: `%s | Cybernous`,
  },
  description:
    "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
  openGraph: {
    url: "https://demo-gamma-ebon.vercel.app/assets/og-image/image.png",
    type: "website",
    title: "Cybernous CISSP Online Training",
    description:
      "Cybernous is the best platform to provide CISSP Certification Online Training. Explore expert-led CISSP preparation and training to advance your skills. Enroll now!",
    images: [
      {
        url: "https://demo-gamma-ebon.vercel.app/assets/og-image/image.png",
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
        url: "https://demo-gamma-ebon.vercel.app/assets/og-image/image.png",
        height: 630,
        Width: 1200,
        alt: "cybernous logo",
      },
    ],
  },
};

// JSONLD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cybernous CISSP Online Training",
  url: "https://www.cybernous.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.cybernous.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  sameAs: [
    "https://www.facebook.com/YourFacebookPage",
    "https://www.linkedin.com/company/YourLinkedInPage",
    "https://twitter.com/Marsal_Soren06",
  ],
  publisher: {
    "@type": "Organization",
    name: "Cybernous",
    url: "https://www.cybernous.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://demo-gamma-ebon.vercel.app/assets/og-image/image.png",
      width: 1200,
      height: 630,
    },
  },
  image: {
    "@type": "ImageObject",
    url: "https://demo-gamma-ebon.vercel.app/assets/og-image/image.png",
    width: 1200,
    height: 630,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}

        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      </body>
    </html>
  );
}
