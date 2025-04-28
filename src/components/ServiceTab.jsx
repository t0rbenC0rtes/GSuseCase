import React, { useRef, useState } from "react";
import gsap from "gsap";
import "../styles/serviceTabs.css";

const ServiceTab = ({ index, title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const verticalBarRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.6,
        ease: "power1.out",
      });
      gsap.to(verticalBarRef.current, {
        rotate: -90,
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(verticalBarRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className="service-tab">
      <div className="service-header" onClick={toggleOpen}>
        <div className="service-title">
          {index < 9 ? `0${index + 1}` : index + 1}. {title}
        </div>
        <div className="service-icon">
          <div className="horizontal-bar"></div>
          <div className="vertical-bar" ref={verticalBarRef}></div>
        </div>
      </div>

      <div className="service-content" ref={contentRef}>
        <p>{description}</p>
        <img src={image} alt={title} />
      </div>

      <div className="line"></div>
    </div>
  );
};

export default ServiceTab;
