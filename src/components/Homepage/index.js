import React, { useRef, useEffect } from "react";
// import useAnalyticsEventTracker from "../../helpers/analytics";
import RunHomepageAnimation from "../../helpers/animations/RunHomepageAnimation";
import Navbar from "../Navbar";
import LogoList from "../../logoList";
import Footer from "../Footer";
import ReactGA from 'react-ga';


const Homepage = () => {

  ReactGA.pageview(window.location.pathname + window.location.search);

  const HomeRef = useRef(null);

  useEffect(() => {
    // gaEventTracker('Home Page');
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
