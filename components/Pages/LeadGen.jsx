"use client";
import React, { useRef, useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { parsePhoneNumberFromString } from "libphonenumber-js";

// FireStore CODE
import { db } from "@/app/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Fetch Data from firestore
async function fetchDataFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "LeadGen"));
    const docsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(docsData);
    return docsData;
  } catch (e) {
    console.log(e);
  }
}

const LeadGen = () => {
  // Fetch Lead Data
  const [leadData, setLeadData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setLeadData(data);
    }
    fetchData();
  }, []);

  console.log(leadData);

  // Duplicacy Validation On Basis Of a email as Primary Key
  const isDuplicate = (getMail) => {
    return leadData.some((data) => data.email === getMail);
  };

  //
  const registerLeadDoc = async (gotEmail, gotPhone, gotCountryCode) => {
    console.log(gotEmail);
    console.log(gotPhone);
    console.log(gotCountryCode);
    const docRef = await addDoc(collection(db, "LeadGen"), {
      email: gotEmail,
      phone: gotPhone,
      isLead: false,
      countryCode: gotCountryCode,
    });
    console.log("Document written with ID", docRef.id);
    window.location.reload();
  };

  // Phone - Email validation
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tempMail, setTempMail] = useState("");
  const email = useRef(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(phno);
    try {
      //   console.log(email.current.value.includes("@"));
      if (!email.current.value.includes("@")) {
        alert("Enter a valid Email");
        return;
      } else if (!valid) {
        alert("Enter valid Ph no");
        return;
      } else {
        console.log(email.current.value);
        //   console.log(fname.current.value);
        console.log(
          parsePhoneNumberFromString("+" + phoneNumber).nationalNumber,
        );
        setTempMail(email.current.value);
        let flag = isDuplicate(email.current.value);
        console.log(flag);
        console.log(tempMail);
        if (flag) {
          console.log(flag);
          alert("You are already a lead");
          email.current.value = "";
          setPhoneNumber("");
          return;
        } else {
          console.log(email.current.value);
          console.log(phno);
          console.log("false");
          console.log(
            parsePhoneNumberFromString("+" + phoneNumber).countryCallingCode,
          );
          console.log(
            parsePhoneNumberFromString("+" + phoneNumber).nationalNumber,
          );
          await registerLeadDoc(
            email.current.value,
            parsePhoneNumberFromString("+" + phoneNumber).countryCallingCode,
            parsePhoneNumberFromString("+" + phoneNumber).nationalNumber,
          );
          //   registerLeadDoc()
        }
        alert("Response Submitted");
        email.current.value = "";
        setPhoneNumber("");
      }
    } catch (e) {
      console.log(e);
      alert("Enter all the fields");
    }

    // if (validatePhoneNumber(document.getElementById("contact-phone").value))
    // console.log(value);
  };

  return (
    <div className="ml-2 flex w-full justify-center md:ml-0 md:gap-x-6">
      <form
        action=""
        className="flex flex-col md:flex-row md:gap-x-6 [&>div>input]:text-black"
      >
        <div className="input-box flex flex-col md:gap-y-0">
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
            className="rounded-md p-1 active:bg-accent md:w-[280px] md:max-w-[350px]"
            placeholder="Enter your email"
            ref={email}
            required
          />
        </div>
        <div className="input-box flex flex-col">
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
            className="rounded-md p-1 text-black active:bg-accent md:w-[280px] md:max-w-[350px]"
            inputProps={{
              required: true,
            }}
            value={phoneNumber}
            onChange={handleChange}
            ref={phno}
            placeholder="Enter your Phone number"
          />
          {/* {!valid && <p className="text-red-300">Enter a valid Phone number</p>} */}
        </div>

        <Button className="my-6" type="submit" onClick={handleSubmit}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default LeadGen;
