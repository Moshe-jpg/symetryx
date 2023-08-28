import gsap, { Power3 } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const RunHomepageAnimation = () => {
  gsap.registerPlugin(Power3);

  // const cards = gsap.utils.toArray("#offerings header span");

  let tl = gsap.timeline();

  tl.to(".navbar a img", {
    autoAlpha: 1,
    scale: 1,
    duration: 2.5,
    delay: 0.5,
    ease: Power3,
  }).to(
    " .homepage-heading",
    {
      autoAlpha: 1,
      duration: 1,
      y: 0,
      ease: Power3,
    },
    1
  );
};

export default RunHomepageAnimation;
