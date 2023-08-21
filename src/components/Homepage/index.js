import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import buildingBg from "../../assets/building-bg.webp";
import LogoList from "../../logoList";

// import homepageBg from "../../assets/building-bg-sky-moving.mov";

const Homepage = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.3; // Set video to half speed
  //   }
  // }, []);

  return (
    <div className="homepage-container">
        <Navbar />
      {/* <video className="background-video" autoPlay loop muted ref={videoRef}>
        <source src={homepageBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img className="background-video" src={buildingBg} alt=""></img>
      <a href="/">
        <h1>Symetryx Corp.</h1>
      </a>
        <LogoList />
    </div>
  );
};

export default Homepage;
