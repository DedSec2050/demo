"use client";
import Hero from "@/components/Hero";
// import Popup from "@/components/Popup";
import { useState, useEffect } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import Page6 from "@/components/Page6";
import Page7 from "@/components/Page7";

export default function Home() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
    <main>
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <div className="wrapper flex flex-col xl:flex-row">
          <div className="video-container rounded-md border-2 border-red-400">
            <CldVideoPlayer
              width="1920"
              height="1080"
              src="samples/sea-turtle"
            />
          </div>

          <div className="text-container w-[100%] rounded-md border-2 border-yellow-400 p-3 xl:w-[50%]">
            <div className="weekly-newsletter justify-center text-center">
              <h1>Weekly Newsletter</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                voluptates dolore, accusantium nesciunt voluptatem, alias atque
                aspernatur voluptas maxime eveniet incidunt explicabo quasi,
                repellat deleniti facilis nihil. Quo, amet iste?
              </p>
            </div>
          </div>
        </div>
      </Popup> */}

      <Hero />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </main>
  );
}
