"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import "./contact.css";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import { Phone } from "lucide-react";

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
      }
      console.log(email.current.value);
      console.log(fname.current.value);
      console.log(parsePhoneNumberFromString("+" + phoneNumber).nationalNumber);

      console.log(query.current.value);
      alert("Response Submitted");
    } catch (e) {
      console.log(e);
      alert("Enter all the fields");
    }

    // if (validatePhoneNumber(document.getElementById("contact-phone").value))
    // console.log(value);
  };

  // Collecting values
  // const handleFname()

  return (
    <section>
      <Banner />
      <Floater />
      <BackWrapper />
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
              <label
                for="contact-name"
                htmlFor=""
                className="font-semibold text-white"
              >
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
              <label
                for="contact-email"
                htmlFor=""
                className="font-semibold text-white"
              >
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
              <label
                for="contact-phone"
                htmlFor=""
                className="font-semibold text-white"
              >
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
                for="contact-queries"
                htmlFor=""
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
        <div className="flex-grow-1 flex h-full flex-col items-center justify-start text-center font-semibold lg:max-w-[50%]">
          <h1 className="mb-4 text-clamptextsmm text-accent">
            Contact Information
          </h1>
          <div>Our HeadQuarter</div>
          <div className="text-textclampsm flex flex-col">
            <p>Cybernous Infosec Consulting LLP,</p>
            <p>GSTN- 29AASFC9800E1Z6</p>
            <p>Yelahanka, Bangalore - 560063, Karnataka, India</p>
          </div>

          <div className="text-textclampsm mt-4 flex flex-col text-justify">
            <p>
              <span className="font-semibold text-accent">Contact No.</span> -
              +91-8882343900 | +91-8130126306
            </p>
            <p>
              <span className="font-semibold text-accent">Contact Email</span> -
              contact@cybernous.com
            </p>
            <p>
              <span className="font-semibold text-accent">
                Director Sales and Marketing:
              </span>{" "}
              Pratima@cybernous
            </p>
            <p>
              <span className="font-semibold text-accent">
                Director Trainings:
              </span>{" "}
              manoj@cybernous.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
