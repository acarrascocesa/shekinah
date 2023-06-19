import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <video src="/videos/backvideo.mp4" autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
    </div>
  );
};

export default Landing;
