import React, { useRef } from "react";
import "../styles/Hero.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import Services from "./Services";

const Hero = () => {
	gsap.registerPlugin(useGSAP, ScrollTrigger);

	const heroRef = useRef(null);
	const headingRef = useRef(null);
	const servicesRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "+=1800",
					scrub: 2,
					// markers: true,
					pin: true,
				},
			});

			tl.to(".logo-heading", { y: -360, opacity: 0, duration: 3 });
			tl.to([".goods-svg", ".amp-svg"], { x: -100, duration: 3 });
			tl.to(".amp-svg", { opacity: 1, duration: 3 }, "<");
			tl.to(".services-svg", { opacity: 1, duration: 2 });
			tl.from(".services-svg", { y: 180, duration: 2 }, "<");
			tl.to([".svg-top", ".svg-bottom"], {
				scale: 0,
				opacity: 0,
				duration: 4,
			});
			tl.fromTo(
				headingRef.current,
				{ y: "100vh" },
				{ y: 0, duration: 4, ease: "power3.out" },
				"<"
			);
			tl.fromTo(
				servicesRef.current,
				{ y: "100vh" },
				{ y: 0, duration: 4, ease: "power3.out" }
			);
		},
		{ scope: heroRef }
	);

	return (
		<div className="hero-wrp" ref={heroRef}>
			<div className="logo-wrp">
				<h1 className="logo-heading">call us</h1>
			</div>
			<div className="svg-top">
				<img
					className="svg goods-svg"
					src="https://cdn.prod.website-files.com/634541a9c7f09aff364e30fa/67f93b61e15d908dea6d69ab_goods.svg"
					alt="Goods Logo"
				/>
				<img
					className="svg amp-svg"
					src="https://cdn.prod.website-files.com/634541a9c7f09aff364e30fa/67f93b61bb38910e8c1e696f_%26.svg"
					alt="& Logo"
				/>
			</div>
			<div className="svg-bottom">
				<img
					className="svg services-svg"
					src="https://cdn.prod.website-files.com/634541a9c7f09aff364e30fa/67f93b6214f08868a73dca8f_services.svg"
					alt="Services Logo"
				/>
			</div>
			<Heading ref={headingRef} />
			<Services ref={servicesRef} />
		</div>
	);
};

export default Hero;
