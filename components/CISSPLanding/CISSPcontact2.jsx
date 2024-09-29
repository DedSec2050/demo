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

const ContactUs2 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [fname, setFname] = useState("");
  // const [email, setEmail] = useState("");
  // const [query, setQuery] = useState("");
  const email = useRef(null);
  const query = useRef(null);
  const fname = useRef(null);
  const phno = useRef(null);

  const [valid, setValid] = useState(true);
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
    <div className="flex flex-col items-center justify-center gap-x-[5vw] xl:gap-x-[20vw]">
      <h2 className="py-4 text-[1.3rem] font-bold text-companyBlue xl:py-0">
        Join FREE Masterclass Today
      </h2>
      <div className="flex-grow-1 flex flex-row items-center justify-center py-2 sm:p-10">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-x-2 rounded-[25px] border-[0.5px] border-companyGrn bg-transparent bg-gradient-to-l from-[#23c4afec] to-[#A8AEE000] px-2 py-2 text-black md:gap-x-2 md:px-8 xl:gap-x-[5vw]"
        >
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label htmlFor="contact-name" className="font-semibold text-black">
              Full Name
            </label>
            <input
              id="contact-name2"
              type="text"
              className="field w-[250px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
              placeholder="Enter your name"
              ref={fname}
              required
            />
          </div>
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label htmlFor="contact-email" className="font-semibold text-black">
              Email Address
            </label>
            <input
              id="contact-email2"
              type="email"
              className="w-[250px] rounded-md p-1 active:bg-accent md:max-w-[350px]"
              placeholder="Enter your email"
              ref={email}
              required
            />
          </div>
          <div className="input-box my-4 flex flex-col gap-y-2">
            <label htmlFor="contact-phone" className="font-semibold text-black">
              Phone number
            </label>
            <PhoneInput
              id="contact-phone2"
              country="in"
              type="text"
              className="rounded-md p-1 active:bg-accent md:max-w-[350px] [&>.form-control]:max-w-[250px]"
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
          {/* <div className="input-box my-4 flex flex-col gap-y-2">
            <label
              htmlFor="contact-queries"
              className="font-semibold text-white"
            >
              Your Queries
            </label>
            <textarea
              id="contact-queries"
              cols="40"
              className="field w-[280px] max-w-[400px] rounded-md p-1 pb-10 text-black active:bg-accent"
              placeholder="Enter your Queries"
              ref={query}
              required
            />
          </div> */}
          <Button
            className="my-6 hover:text-black"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;
