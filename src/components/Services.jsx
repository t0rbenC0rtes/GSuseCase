import React, { forwardRef, useState, useEffect } from "react";
import "../styles/services.css";
import ServiceTab from "./ServiceTab";

const Services = forwardRef((props, ref) => {
  const [servicesTabs, setServicesTabs] = useState([]);

  useEffect(() => {
    fetch("/Services.json")
      .then((response) => response.json())
      .then((data) => setServicesTabs(data.servicesTabs))
      .catch((error) => console.error("Error fetching Services.json:", error));
  }, []);

  return (
    <div className="services-wrp" ref={ref}>
      <div className="services-title">
        <h2>Services</h2>
        <p>
          We craft exceptional digital experiences and <br /> solve
          mission-critical technology challenges.
        </p>
      </div>
      <div className="line"></div>

      {/* Mapping service tabs */}
      <div className="services-tabs">
        {servicesTabs.map((tab, index) => (
          <ServiceTab
            key={index}
            index={index}
            title={tab.title}
            description={tab.description}
            image={tab.image}
          />
        ))}
      </div>
    </div>
  );
});

export default Services;
