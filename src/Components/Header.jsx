import { useRef , useEffect} from "react";
import '../CompnentsStyles/Header.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const header1 = useRef(null);
  const header2 = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const scrollHeader = useRef(null);

  useEffect(() => {
    const text = [header1.current, header2.current, image1.current, image2.current];
    const tl = gsap.timeline();
    tl.set(text, { y: 50, opacity: 0 });
    tl.to(header1.current, { y: -40, opacity: 1, duration: 0.7, ease: "power1.in" })
      .to(header1.current, { y: 10, opacity: 0, duration: 0.7, ease: "power1.out" })
      .to(header2.current, { y: -40, opacity: 1, duration: 0.7, ease: "power1.in" })
      .to(header2.current, { y: 10, opacity: 0, duration: 0.7, ease: "power1.out" })
      .to(image1.current, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power1.out" })
      .to(image1.current, { y: 0, opacity: 0, scale: 0.2, duration: 0.7, ease: "power1.out" })
      .to(image2.current, { y: 0, opacity: 1, scale: 1, zIndex: -1 })
      .to(image2.current, { y: 0, opacity: 1, scale: 1.5, zIndex: -1 });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      scrollHeader.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: scrollHeader.current,
          start: "top 100%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="header">
      <div className="gsapHeader">
      <div className="headerText1">
        <p ref={header1}>Your Workflow Amplified</p>
      </div>
      <div className="headerText2" ref={header2}>
        <p ref={header2}>Once Again</p>
      </div>
      <div className="headerImg1" >
        <img ref={image1} src="https://framerusercontent.com/modules/c8mJrTPIqkx5l0MUgmyY/ezXUcutlEwTxfTpyBQxd/assets/9aV5yKF0n3MKIlDKf0iVHhuaHc.png" alt="" />
      </div>
      <div className="headerImg2">
        <img ref={image2} src="https://framerusercontent.com/images/DhDsfyks1iwAWu29uci5zpO8.jpg" alt="" />
      </div>
      </div>
    </div>
  );
}

export default Header
