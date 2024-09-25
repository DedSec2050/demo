"use client"; // Ensures the component is client-side in Next.js

import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

// Component to show after countdown completes
const Completionist = () => <span>Restarting...</span>;

const CountdownTimer = () => {
  // Initialize the state to 5 seconds in the future
  const curr = new Date();
  const initialTargetDate =
    Date.now() +
    curr.getSeconds() * 1000 * curr.getMinutes() * 60 * curr.getHours(); // Set initial countdown to 5 seconds
  const [targetDate, setTargetDate] = useState(initialTargetDate);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reinitialize the countdown after it completes
  useEffect(() => {
    if (isCompleted) {
      // Wait for a short period before reinitializing
      const timer = setTimeout(() => {
        setTargetDate(Date.now() + 5000); // Reset to 5 seconds from now
        setIsCompleted(false); // Reset completion state
      }, 1000); // Delay of 1 second after completion
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [isCompleted]);

  // Renderer callback with condition for countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Mark the countdown as completed and show the restart message
      setIsCompleted(true);
      return <Completionist />;
    } else {
      // Render the countdown timer
      return (
        <span className="px-2 py-2 text-white">
          {hours} Hr : {minutes < 10 ? `0${minutes}` : minutes} m :{" "}
          {seconds < 10 ? ` 0${seconds}` : seconds} s
        </span>
      );
    }
  };

  return (
    <div className="px-2 text-accent">
      {/* Pass the targetDate state into the Countdown component */}
      Claim Offer
      {!isCompleted && <Countdown date={targetDate} renderer={renderer} />}
    </div>
  );
};

export default CountdownTimer;
