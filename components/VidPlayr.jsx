"use client";
import React, { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    // Load the VideoPal script dynamically
    const script = document.createElement("script");
    script.src = "https://videopal.me/js/vp_player.min.js?v=1.1.29";
    script.async = false;
    script.setAttribute("data-cfasync", "false");

    script.onload = () => {
      if (window.VpPlayer) {
        new VpPlayer({
          embedId: "ECBfvrvUV8zx",
        });
      }
    };

    script.onerror = (e) =>
      console.error("Error loading the VideoPal script:", e);

    document.body.appendChild(script);

    return () => {
      // Cleanup the script from the document when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div id="vp-player-container"></div>;
};

export default VideoPlayer;
