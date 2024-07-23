"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/app/firebaseConfig";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";

const coursesList = ["Test_Course_1", "Test_Course_2", "Test_Course_3"];

const Page = () => {
  const [user, setUser] = useAuthState(auth);

  if (user) console.log(user.email);
  console.log(auth.currentUser);
  // RazorPay payment handler
  const paymentHandler = async (event, courseId) => {
    let amount = 500;
    let currency = "INR";
    const recieptId = "123455";
    // Generate order ID from backend
    const response = await fetch(
      "https://us-central1-cyb-lms.cloudfunctions.net/api/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
        }),
      },
      { selectedCourse: courseId },
    );

    const order = await response.json();
    console.log("order is ", order);

    var option = {
      key: "",
      amount,
      currency,
      name: "Cybernous",
      description: "Test Description",
      order_id: order.id,
      handler: async function (response) {
        // ADD FIELDS HERE
        const body = {
          ...response,
          email: user.email,
          payment_via: "Razorpay",
          selectedCourse: courseId,
          amount,
          currency,
        };
        const validateResponse = await fetch(
          "https://us-central1-cyb-lms.cloudfunctions.net/api/validate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          },
        );
        const jsonResponse = await validateResponse.json();
        console.log("jsonResponse", jsonResponse);
      },
      prefill: {
        // name: "John",
        email: user.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(option);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    event.preventDefault();
  };
  // PAYPAL
  const HandleSubmit = async (e, courseId) => {
    // e.preventDefault();
    // console.log(selectedCourse);
    console.log(courseId);
    if (!user) {
      window.location.href = "/resources";
      return;
    }

    console.log(user.email);
    let res = await axios.post(
      `https://us-central1-cyb-lms.cloudfunctions.net/api/payment`,
      { selectedCourse: courseId, selectedEmail: user.email },
    );
    console.log(res);
    if (res && res.data) {
      let link = res.data.links[1].href;
      window.location.href = link;
    }
  };

  return (
    <section>
      <Banner />
      <Header />
      <div className="flex w-screen flex-col items-center justify-center gap-4">
        Test course 1
        <Button
          onClick={(e) => HandleSubmit(e, "Course_1")}
          className="rounded-md bg-slate-800 p-4 font-semibold text-white"
        >
          Paypal
        </Button>
        {/* Add RazorPay Button  */}
        {/*  */}
        <Button
          onClick={(e) => paymentHandler(e, "Course_1")}
          className="rounded-md bg-slate-800 p-4 font-semibold text-white"
        >
          RazorPay
        </Button>
        {/*  */}
        {user ? (
          <p>your currently logged email: {user.email}</p>
        ) : (
          "Not signed in"
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Page;
