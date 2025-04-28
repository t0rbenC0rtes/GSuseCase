import React, { forwardRef } from "react";
import "../styles/heading.css";
import { IoMdArrowDown } from "react-icons/io";

const Heading = forwardRef((props, ref) => {
	return (
		<div className="heading-wrp" ref={ref}>
			<div className="heading-inner">
				<h1>Design for people.</h1>
				<h1>Built for business.</h1>
				<p>Goods & Services is a design and engineering company.</p>
				<p>
					We help our clients navigate transformation with confidence.
				</p>
                <span>See what we've done <IoMdArrowDown className="icon"/></span>
			</div>
		</div>
	);
});

export default Heading;
