"use client"
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import { useState, useEffect } from "react";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import Page2 from "@/components/Page2";
 

export default function Home() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setTimedPopup(true);;
    }, 3000)
  },[])

  return (
    <main>
      <Popup trigger={timedPopup} 
        setTrigger={setTimedPopup}
      >
        <div className="wrapper flex flex-col xl:flex-row">
          <div className="video-container border-2 border-red-400 rounded-md ">
            <CldVideoPlayer
            width="1920"
            height="1080"
              src='samples/sea-turtle'
            />  
          </div>
          
          <div className="text-container p-3 border-2 rounded-md border-yellow-400 w-[100%] xl:w-[50%] ">
            <div className="weekly-newsletter justify-center text-center">
              <h1>Weekly Newsletter</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam voluptates dolore, accusantium nesciunt voluptatem, alias atque aspernatur voluptas maxime eveniet incidunt explicabo quasi, repellat deleniti facilis nihil. Quo, amet iste?
              </p>
            </div>
          </div>
        </div>
      </Popup>

      <Hero />
      <Page2 />
    </main>
  );
}
