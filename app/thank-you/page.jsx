import Banner from "@/components/Banner";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <section>
      <Banner />
      <Floater />
      <Header />
      <div className="flex w-full flex-col items-center justify-center px-4 text-center [&>h1]:text-[2.9rem] [&>h1]:font-bold [&>h2]:text-[2.3rem] [&>h2]:font-semibold [&>h3]:pb-4 [&>h3]:text-[2.1rem] [&>h3]:font-semibold">
        <h1 className="text-accent">Thank You</h1>
        <h2 className="text-companyGrn">
          Your form has been submitted successfully.
        </h2>
        <h3>We appreciate your trust in us.</h3>
        <div className="flex flex-col items-center justify-center text-center text-[1.7rem] leading-normal">
          <p>
            Please check your inbox (and spam folder too) for a confirmation
            mail.
          </p>
          <p>Our technical consultant will reach out to you at the earliest.</p>
          <p>(Please expect a delay on non-business days).</p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-6 text-center text-[1.7rem] leading-normal">
          <p className="xl:max-w-[1200px]">
            Meanwhile, you can check out our latest offerings, upcoming free
            events and other resources. events and other popular courses from
            Cybernous.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
