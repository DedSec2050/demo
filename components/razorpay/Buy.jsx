"use client";
import React, { useState } from "react";

const Buy = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <h1 className="text-2xl">Razor Pay Integration with NextJs 13</h1>
      <button
        onClick={() => {
          makePayment({ productId: "example_ebook" });
        }}
        disabled={isLoading}
        className={`mt-20 rounded bg-blue-500 px-4 py-2 font-semibold text-white ${
          isLoading ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Pay with RazorPay"}
      </button>
    </div>
  );
};

export default Buy;
