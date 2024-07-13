import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <section>
      <Banner />
      <Header />
      <h2 className="text-center text-clamptitle font-bold text-accent">
        Contact Form
      </h2>
      <div className="flex flex-col items-center justify-center gap-x-[5vw] md:flex-row xl:gap-x-[20vw]">
        <div className="flex-grow-1 flex flex-row items-center justify-center p-10 lg:max-w-[50%]">
          <form
            action=""
            className="items-center justify-center rounded-lg text-black sm:border-2 sm:bg-elevated sm:px-4 md:ml-[20%] md:px-8"
          >
            <div className="input-box my-4 flex flex-col gap-y-2">
              <label htmlFor="" className="font-semibold text-white">
                Full Name
              </label>
              <input
                type="text"
                className="field w-[280px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box my-4 flex flex-col gap-y-2">
              <label htmlFor="" className="font-semibold text-white">
                Email Address
              </label>
              <input
                type="email"
                className="w-[280px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box my-4 flex flex-col gap-y-2">
              <label htmlFor="" className="font-semibold text-white">
                Your Queries
              </label>
              <textarea
                cols="40"
                className="field max-w-[400px] rounded-md p-1 pb-10 text-black active:bg-accent"
                placeholder="Enter your Queries"
                required
              />
            </div>
            <Button variant="outline" className="my-6" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="flex-grow-1 flex h-full flex-col items-center justify-start text-center font-semibold lg:max-w-[50%]">
          <h1 className="mb-8 text-clamptextsmm text-accent">
            Contact Information
          </h1>
          <div>Our HeadQuarter</div>
          <div className="text-textclampsm flex flex-col">
            <p>Cybernous Infosec Consulting LLP,</p>
            <p>GSTN- 29AASFC9800E1Z6</p>
            <p>Yelahanka, Bangalore - 560063, Karnataka, India</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
