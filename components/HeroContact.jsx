"use client";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Button } from "@/components/ui/button";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const HeroContact = () => {
  const email = useRef(null);
  const query = useRef(null);
  const fname = useRef(null);
  const phno = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");

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
    console.log(email.current.value);
    try {
      //   if (!valid) {
      //     alert("Enter valid Ph no");
      //     return;
      //   }
      if (!email.current.value.includes("@")) {
        alert("Enter a valid email");
        return;
      }
      console.log(email.current.value);
      console.log(fname.current.value);
      //   console.log(parsePhoneNumberFromString("+" + phoneNumber).nationalNumber);

      //   console.log(query.current.value);
      alert("Response Submitted");
    } catch (e) {
      console.log(e);
      alert("Error in fields");
    }

    // if (validatePhoneNumber(document.getElementById("contact-phone").value))
    // console.log(value);
  };
  return (
    <form
      action=""
      className="flex flex-col items-end justify-start rounded-lg text-black sm:px-4 md:flex-row md:gap-x-6 md:px-8"
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
      {/* <div className="input-box my-4 flex flex-col gap-y-2">
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
          {!valid && <p className="text-red-300">Enter a valid Phone number</p>}
        </div> */}
      {/* <div className="input-box my-4 flex flex-col gap-y-2">
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
        </div> */}
      <Button
        variant="outline"
        className="my-6"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default HeroContact;
