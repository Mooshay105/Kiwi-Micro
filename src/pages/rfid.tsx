import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import kCameraProductVideo from "../assets/rfid.mp4";
import React, { useState } from "react";

function Kcamera() {
	const RFIDReaderCheckoutURL = "#";
	const price = "$110";

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
							<h1>RFID Reader</h1>
							<p className="productPageText">Enhance your operations with our cutting-edge RFID Asset Management System, providing reliable RFID reading capabilities and efficient asset tracking.</p>
							<h2 className="configPrice" id="configPrice">
								{price}
							</h2>
							<div className="lineBreak"></div>
							<a className="buyBTN" href={RFIDReaderCheckoutURL} id="buyBTN">
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
