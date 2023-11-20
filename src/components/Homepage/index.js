import React, { useRef, useEffect } from "react";
import RunHomepageAnimation from "../../helpers/animations/RunHomepageAnimation";
import LogoList from "../../logoList";
import Footer from "../Footer";

const Homepage = () => {
  const HomeRef = useRef(null);

  useEffect(() => {
    // gaEventTracker('Home Page');
    RunHomepageAnimation(HomeRef.current);
  }, []);

  return (
    <div className="homepage-container">
      <LogoList />
      <Footer />
    </div>
  );
};

export default Homepage;
