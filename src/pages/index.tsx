import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import ReactDOM from "react-dom/client";
import hero from "../assets/hero.mp4";
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
								See Our Code
							</a>
						</div>
					</div>
				</section>
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Index />);
