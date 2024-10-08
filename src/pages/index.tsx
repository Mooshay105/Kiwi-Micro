import GlobalNavBar from "../components/GlobalNavBar";
import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import ReactDOM from "react-dom/client";
import hero from "../assets/hero.mp4";
import malcolm from "../assets/img/malcolm.png";
import "/assets/main.css";

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
				<CustomBreak height={1} />
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Index />);
