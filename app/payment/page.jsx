import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <section>
      <Banner />
      <Header />
      <div className="w-screen"></div>
      <Footer />
    </section>
  );
};

export default page;
