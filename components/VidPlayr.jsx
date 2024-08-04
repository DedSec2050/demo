import Script from "next/script";
import React, { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    if (window.VpPlayer) {
      new VpPlayer({
        embedId: "Hb2ydhhgMWJK",
      });
    }
  }, []);

  return (
    <div id="vp-player-container">
      Player Loadin
      <Script
        src="https://videopal.me/js/vp_player.min.js?v=1.1.29"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.VpPlayer) {
            new VpPlayer({
              embedId: "Hb2ydhhgMWJK",
            });
          }
        }}
        onError={(e) => console.error("Error loading the VideoPal script:", e)}
      />
    </div>
  );
};

export default VideoPlayer;
