import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-20">
        <h1 className="font-700 mb-[30px] text-[40px] font-bold text-accent">
          CyberSecurity Certification Notes
        </h1>
      </div>
      <Footer />
    </section>
  );
};

export default page;
