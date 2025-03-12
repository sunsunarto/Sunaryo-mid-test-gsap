import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../CompnentsStyles/Adjustment.css';

gsap.registerPlugin(ScrollTrigger);

function Adjustment() {
  const slideshowRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const feedbackRef = useRef(null);

  useEffect(() => {
    const images = [image1Ref.current, image2Ref.current, image3Ref.current];

    gsap.to(images, {
      opacity: 1,

      xPercent: -100 * (images.length - 1),
      duration: 1,
      scrollTrigger: {
        trigger: slideshowRef.current,
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        pin: true,
        scrub: 1,
        markers: true
      }
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      feedbackRef.current,
      { y: 100 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: feedbackRef.current,
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);
  return (
    <div className='adjustment'>
      <div className="opText">
        <h1>Resizable Window</h1>
        <h1 className='gardian'>Your Space, Your Rules</h1>
        <h6>Whether you want more items or need larger previews, Paste adapts to your needs. It’s not just about flexibility, it’s about crafting a workspace that elevates productivity.</h6>
      </div>
      <div className="slideshow" ref={slideshowRef}>
        <div className="slide" ref={image1Ref}>
          <img src="https://framerusercontent.com/images/RCV6jPA5hRYTe1mMyfXXNwCrR1Y.jpg" alt="Slide 1" />
          <p>The larger size delivers more space for detailed previews.</p>
        </div>
        <div className="slide" ref={image2Ref}>
          <img src="https://framerusercontent.com/images/QHMMUthDIUxBk5MfYGY9NGPoQ.jpg" alt="Slide 2" />
          <p>the regular size strikes the perfect balance for content display.</p>
        </div>
        <div className="slide" ref={image3Ref}>
          <img src="https://framerusercontent.com/images/G0IleaYmabk3tuvTeB6K7PdckFc.jpg" alt="Slide 3" />
          <p>the compact size maximizes display without sacrificing content.</p>
        </div>
      </div>
      <div className="feedback" ref={feedbackRef}>
        <div className="backgroundSky" >
            <div className="contextSky">
                <div className="imgs">
                <img src="https://framerusercontent.com/images/RjN0yL5lKSlYI70aKAyuSCj6ETM.png" alt="" />
                <img src="https://framerusercontent.com/images/Kc4XUwUnUDtQYfw2fwNpWnddX6A.png" alt="" />
                <img src="https://framerusercontent.com/images/WfsSsFIxuhMuJCQTP668IBRq6E.png?scale-down-to=512" alt="" />
                <p>The content dynamically adapts to address your unique requirements.</p>
                </div>
            </div>
        </div>
        <div className="backgroundBlue">
            <div className="contextBlue">
                <h1>Feedback to Action</h1>
                <p>In our pursuit of creating an experience centered around you, we introduce the most requested feature, turning your valuable feedback into reality.</p>
                <img src="https://framerusercontent.com/images/kHe6mBmcsVpxOlwHvzSUAAZE28.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Adjustment;

