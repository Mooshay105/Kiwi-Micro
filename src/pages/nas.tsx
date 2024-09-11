import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import NASProductVideo from "../assets/nas.mp4";
import React, { useState } from "react";

function NAS() {
	const NASStorage500gbPrice = "NAS 500GB Coming Soon!";
	const NASStorage1tbPrice = "NAS 1TB Coming Soon!";
	const NASStorage2tbPrice = "NAS 2TB Coming Soon!";
	const NASStorage500gbCheckout = "#";
	const NASStorage1tbCheckout = "#";
	const NASStorage2tbCheckout = "#";
	const [price, setPrice] = useState(NASStorage500gbPrice);
	const [activeOption, setActiveOption] = useState("500gb");
	const [activeOptionCheckout, setActiveOptionCheckout] = useState(NASStorage500gbCheckout);

	function handleConfigClick(option: string) {
		if (option === "500gb") {
			setPrice(NASStorage500gbPrice);
			setActiveOption("500gb");
			setActiveOptionCheckout(NASStorage500gbCheckout);
		} else if (option === "1tb") {
			setPrice(NASStorage1tbPrice);
			setActiveOption("1tb");
			setActiveOptionCheckout(NASStorage1tbCheckout);
		} else if (option === "2tb") {
			setPrice(NASStorage2tbPrice);
			setActiveOption("2tb");
			setActiveOptionCheckout(NASStorage2tbCheckout);
		}
	}

	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<section className="hero">
					<video autoPlay muted loop className="heroVideo">
						<source src={NASProductVideo} type="video/mp4" />
					</video>
					<div className="heroOverlay">
						<div className="heroContent">
							<h1>NAS</h1>
							<p className="productPageText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sapiente illum adipisci, iste quos quis excepturi odit debitis blanditiis necessitatibus rerum iure, qui voluptatum magni omnis distinctio odio enim repellendus.</p>
							<h2>Chose How Much Storage You Want</h2>
							<button className={activeOption === "500gb" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("500gb")}>
								500 GB
							</button>
							<button className={activeOption === "1tb" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("1tb")}>
								1 TB
							</button>
							<button className={activeOption === "2tb" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("2tb")}>
								2 TB
							</button>
							<br />
							<h2 className="configPrice" id="configPrice">
								{price}
							</h2>
							<div className="lineBreak"></div>
							<a className="buyBTN" href={activeOptionCheckout} id="buyBTN">
								Coming Soon
							</a>
						</div>
					</div>
				</section>
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<NAS />);
