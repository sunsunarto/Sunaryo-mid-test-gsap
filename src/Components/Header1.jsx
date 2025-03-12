import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../CompnentsStyles/Header1.css";

gsap.registerPlugin(ScrollTrigger);

function Header1() {
  const headerText = useRef(null);
  const scrollHeader = useRef(null);
  const PC1 = useRef(null);
  const laptop1 = useRef(null);
  const laptop2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      scrollHeader.current,
      {
        y: 0,
      },
      {
        y: -200,
        duration: 1,
        scrollTrigger: {
          trigger: scrollHeader.current,
          start: "top 100%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      PC1.current,
      { scale: 1 },
      {
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: scrollHeader.current,
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      laptop1.current,
      { x: -200 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: scrollHeader.current,
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      laptop2.current,
      { x: 500 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: scrollHeader.current,
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="scrollHeader" ref={scrollHeader}>
      <div className="headerText">
        <div className="logoAndText">

        </div>
        div.
      </div>
      <div className="text">
        <h1>New Look. New Feel.</h1>
        <h1 className="gard">All-New Paste</h1>
        <p>
          Discover unprecedented efficiency with our most advanced, intuitive,
          and user-centric update yet.
        </p>
      </div>
      <div className="ImgPCAndLaptop">
        <img className="PC" ref={PC1} src="https://framerusercontent.com/images/XhrkXBnHJaTWtrEjq133BhtBg.png" alt=""/>
        <img className="laptop1" ref={laptop1} src="https://framerusercontent.com/images/MFsNIGZmcW4MYnZCHCETuFIL9tc.png" alt=""/>
        <img className="laptop2" ref={laptop2} src="https://framerusercontent.com/images/5wZGXwxBjkqvElgRafMjIwVrAk.png" alt=""/>
      </div>
    </div>
  );
}

export default Header1;

