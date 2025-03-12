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
        markers: true
      }
    });
  }, []);

  return (
    <div className='adjustment'>
      <div className="opText">
        <h1>Resizable Window</h1>
        <h1 className='gardian'>Your Space, Your Rules</h1>
      </div>
      <div className="slideshow" ref={slideshowRef}>
        <div className="slide" ref={image1Ref}>
          <img src="https://th.bing.com/th/id/OIP.Yn3-DB_vCwU_sRc_yiXsOAHaFQ?rs=1&pid=ImgDetMain" alt="Slide 1" />

        </div>
        <div className="slide" ref={image2Ref}>
          <img src="https://th.bing.com/th/id/OIP.0XXzU8RTfEME94J2OB9argHaE7?rs=1&pid=ImgDetMain" alt="Slide 2" />
        </div>
        <div className="slide" ref={image3Ref}>
          <img src="https://th.bing.com/th/id/R.4f82226753a244673f187dacc44a9c63?rik=JeCyNIHrS1nO2g&riu=http%3a%2f%2fwww.aircraftsandplanes.com%2fwp-content%2fuploads%2f2014%2f08%2fNorth-American-P-51-Mustang-Red-Tail.jpg&ehk=1xvriG%2fppYwUmVdLKw4WfRBJvcGRfJbDPuwFEWCmC9M%3d&risl=&pid=ImgRaw&r=0" alt="Slide 3" />
        </div>
      </div>
    </div>
  );
};

export default Adjustment;
