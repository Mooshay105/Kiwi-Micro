import GlobalNavBar from "../components/GlobalNavBar";
import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import hero from "../assets/hero.mp4";
import malcolm from "../assets/img/malcolm.png";
import GalleryItem from "../components/GalleryItem";
import airportDatabase from "../assets/img/airportDatabase.png";
import linuxClone from "../assets/img/linuxClone.png";
import "../assets/main.css";

function Index() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={true} />
				<section className="hero">
					<video autoPlay muted loop playsInline className="heroVideo">
						<source src={hero} type="video/mp4" />
					</video>
					<div className="heroOverlay">
						<div className="heroContent">
							<h1>Kiwi Micro</h1>
							<p>Top-Tier Web Development Lives Right Here</p>
							<a href="gallery.html" className="btn">
								See Our Projects
							</a>
						</div>
					</div>
				</section>
				<CustomBreak height={1} />
				<div className="aboutMe">
					<img src={malcolm} />
					<div className="column">
						<h1>Hi, I'm Malcolm.</h1>
						<p>I am a 14 year-old living in Australia! I like to code in HTML, CSS, TypeScript, JavaScript, Java, a little C, and I am learning Swift.</p>
					</div>
				</div>
				<CustomBreak height={2} />
				<h1 className="centeredHeader">Code Gallery</h1>
				<CustomBreak height={1} hasHR={true} paddBothSides={true} />
				<GalleryItem headerText="Airport Database" description="Airport Database is a database of most of the IATA registered airports in the world." buttonText="Visit" buttonDestination="https://airportdatabase.malcolmjh.com" imageURL={airportDatabase} leftOrRight="left" />
				<CustomBreak height={1} hasHR={true} paddBothSides={true} />
				<GalleryItem headerText="Linux Clone" description="Linux Clone is a clone of Linux I made for some fun." buttonText="Visit" buttonDestination="https://linux.malcolmjh.com" imageURL={linuxClone} leftOrRight="right" />
				<CustomBreak height={2} />
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

export default Index;
