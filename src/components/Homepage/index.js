import React, { useRef, useEffect } from "react";
import RunHomepageAnimation from "../../helpers/animations/RunHomepageAnimation";
import Navbar from "../Navbar";
import LogoList from "../../logoList";
import Footer from "../Footer";

const Homepage = () => {

  const HomeRef = useRef(null);

  useEffect(() => {
    RunHomepageAnimation(HomeRef.current);
  }, []);

  return (
    <div className="homepage-container">
        <Navbar />
      <a href="/" className="homepage-heading-container">
        <h1 className="homepage-heading">Symetryx Corporation</h1>
      </a>
        <LogoList />
        <Footer />
    </div>
  );
};

export default Homepage;
