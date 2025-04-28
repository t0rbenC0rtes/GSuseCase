import React, { forwardRef } from "react";
import "../styles/Services.css";

const Services = forwardRef((props, ref) => {
	return <div className="services-wrp" ref={ref}>Services</div>;
});

export default Services;
