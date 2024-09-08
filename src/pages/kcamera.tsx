import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import kCameraProductVideo from "../assets/kCamera.mp4";
import React, { useState } from "react";

function Kcamera() {
	const kCameraCameraWithoutNoIRPrice = "$100";
	const kCameraCameraNoIRPrice = "$110";
	const kCameraCameraNoIRCheckout = "#";
	const kCameraCameraWithoutNoIRCheckout = "#";
	const [price, setPrice] = useState(kCameraCameraWithoutNoIRPrice);
	const [activeOption, setActiveOption] = useState("kCameraCameraWithoutNoIR");
	const [activeOptionCheckout, setActiveOptionCheckout] = useState("kCameraCameraWithoutNoIR");

	function handleConfigClick(option: string) {
		if (option === "kCameraCameraNoIR") {
			setPrice(kCameraCameraNoIRPrice);
			setActiveOption("kCameraCameraNoIR");
			setActiveOptionCheckout("kCameraCameraNoIR");
		} else if (option === "kCameraCameraWithoutNoIR") {
			setPrice(kCameraCameraWithoutNoIRPrice);
			setActiveOption("kCameraCameraWithoutNoIR");
			setActiveOptionCheckout("kCameraCameraWithoutNoIR");
		}
	}

	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<section className="hero">
					<video autoPlay muted loop className="heroVideo">
						<source src={kCameraProductVideo} type="video/mp4" />
					</video>
					<div className="heroOverlay">
						<div className="heroContent">
							<h1>kCamera</h1>
							<h2>Chose How Much Storage You Want</h2>
							<button className={activeOption === "kCameraCameraWithoutNoIR" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("kCameraCameraWithoutNoIR")}>
								Without NoIR
							</button>
							<button className={activeOption === "kCameraCameraNoIR" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("kCameraCameraNoIR")}>
								NoIR
							</button>
							<br />
							<h2 className="configPrice" id="configPrice">
								{price}
							</h2>
							<div className="lineBreak"></div>
							<a className="buyBTN" href={activeOptionCheckout === "kCameraCameraNoIR" ? kCameraCameraNoIRCheckout : kCameraCameraWithoutNoIRCheckout} id="buyBTN">
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Kcamera />);
