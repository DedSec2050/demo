import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Components

import Script from "next/script";
import Head from "next/head";

export const metadata = {
  metadataBase: new URL("https://www.cybernous.com/"),
  title: {
    default: "CISSP Course in Bangalore",
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
  "@type": "LocalBusiness",
  name: "cybernous",
  image:
    "https://s3.us-east1.amazonaws.com/contents.newzenler.com/37503/library/65c38f65e0118_1707315045_cybernous-log-with-new-brand-color.png",
  "@id": "",
  url: "https://www.cybernous.com/",
  telephone: "+91 8595338705",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No. A/167, Bagalur Road, Vinayak Nagar, Near Yelahanka,Palanahalli, Bengaluru, Bengaluru Urban, Karnataka, 560064",
    addressLocality: "India",
    postalCode: "560064",
    addressCountry: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.107568,
    longitude: 77.571198,
  },
};
const jsonLdBlogs = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "cybernous",
  alternateName: "cybernous",
  url: "https://www.cybernous.com/",
  logo: "https://s3.us-east1.amazonaws.com/contents.newzenler.com/37503/library/65c38f65e0118_1707315045_cybernous-log-with-new-brand-color.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "8595338705",
    contactType: "sales",
    areaServed: "India",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/cybernous",
    "https://www.youtube.com/channel/UC43m9FCBm8cpZFnO9NCU2eg",
    "https://www.instagram.com/cybernous_india",
    "https://www.linkedin.com/in/mksharma007/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* LinkedIn Tag Manager */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "5937948";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="3V77gokHFiFVtwpFrn6FH7tDTq8Q9KwUlNJG05_an0"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16584736238"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16584736238');
            `,
          }}
        />
        <script src="https://cdnin.pagesense.io/js/cybernous8/9feb95c098fc4684b0369d37356bb969.js"></script>
      </Head>
      <body className="bg-primary">
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBlogs),
          }}
        />

        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GJE148Z2662"
        ></Script>

        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JE148Z2662"
        ></Script>
        <Script type="text/javascript">
          _linkedin_partner_id = "5937948"; window._linkedin_data_partner_ids =
          window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        </Script>
      </body>
    </html>
  );
}
