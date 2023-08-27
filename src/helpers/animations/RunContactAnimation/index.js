import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunContactAnimation = () => {
    gsap.registerPlugin(Power3, ScrollTrigger);

        gsap.to(".contact-container", {
        //   duration: 1.5,
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        });
      
        gsap.to(".form", {
        //   duration: 1.5,
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        });
      };

export default RunContactAnimation;