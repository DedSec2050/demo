"use client";
// import Banner from "@/components/Banner";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import image from "@/public/assets/Resources/resource.webp";

// import "./contact.css";
// import BackWrapper from "@/components/BackWrapper";
// import Floater from "@/components/Floater";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import Image from "next/legacy/image";

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [fname, setFname] = useState("");
  // const [email, setEmail] = useState("");
  // const [query, setQuery] = useState("");
  const email = useRef(null);
  const query = useRef(null);
  const fname = useRef(null);
  const phno = useRef(null);

  const [valid, setValid] = useState(false);
  const handleChange = (value) => {
    setPhoneNumber(value);
    console.log(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberObject = parsePhoneNumberFromString("+" + phoneNumber);
    console.log(phoneNumberObject);
    if (phoneNumberObject && phoneNumberObject.isValid) {
      return phoneNumberObject.isValid();
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phno);
    try {
      if (!valid) {
        alert("Enter valid Ph no");
        return;
      } else if (fname.length < 4) {
        alert("Enter a valid Name");
        return;
      } else if (!email.current.value.includes("@")) {
        alert("Enter a valid Email");
        return;
      } else if (query.current.value.length < 10) {
        alert("Please enter atleast query of 10 characters.");
        return;
      } else {
        console.log(email.current.value);
        console.log(fname.current.value);
        console.log(
          parsePhoneNumberFromString("+" + phoneNumber).nationalNumber,
        );

        console.log(query.current.value);
        alert("Response Submitted");
      }
    } catch (e) {
      console.log(e);
      alert("Enter all the fields");
    }

    // if (validatePhoneNumber(document.getElementById("contact-phone").value))
    // console.log(value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-x-[5vw] xl:flex-row xl:gap-x-[20vw]">
      <div className="flex-grow-1 flex flex-row items-center justify-center p-10 lg:max-w-[50%]">
        <form
          action=""
          className="items-center justify-center rounded-[25px] bg-transparent bg-gradient-to-l from-[#739eed34] to-[#A8AEE000] text-black sm:border-2 sm:px-4 md:ml-[20%] md:px-8"
        >
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label htmlFor="contact-name" className="font-semibold text-white">
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              className="field w-[280px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
              placeholder="Enter your name"
              ref={fname}
              required
            />
          </div>
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label htmlFor="contact-email" className="font-semibold text-white">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              className="w-[280px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
              placeholder="Enter your email"
              ref={email}
              required
            />
          </div>
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label htmlFor="contact-phone" className="font-semibold text-white">
              Phone number
            </label>
            <PhoneInput
              id="contact-phone"
              country="in"
              type="text"
              className="w-[280px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
              inputProps={{
                required: true,
              }}
              value={phoneNumber}
              onChange={handleChange}
              ref={phno}
              placeholder="Enter your Phone number"
            />
            {!valid && (
              <p className="text-red-300">Enter a valid Phone number</p>
            )}
          </div>
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label
              htmlFor="contact-queries"
              className="font-semibold text-white"
            >
              Your Queries
            </label>
            <textarea
              id="contact-queries"
              cols="40"
              className="field max-w-[400px] rounded-md p-1 pb-10 text-black active:bg-accent"
              placeholder="Enter your Queries"
              ref={query}
              required
            />
          </div>
          <Button
            variant="outline"
            className="my-6"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="flex-grow-1 flex h-full flex-col items-center justify-start p-10 text-center font-semibold lg:max-w-[50%] xl:text-[1.5rem]">
        <div className="items-center justify-center rounded-[25px] bg-transparent sm:px-4 md:px-8">
          {/* <h1>Get More Information Here</h1> */}
          <div className="my-[40px] flex flex-col">
            <Image
              layout="responsive"
              src={image}
              width={700}
              height={1018}
              alt="image"
            />
          </div>
          <div>
            <Button
              // variant="outline"
              className="my-6 rounded-[30px] transition-all duration-500 xl:text-[17px]"
            >
              Book a FREE Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
