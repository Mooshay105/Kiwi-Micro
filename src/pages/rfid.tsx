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
							<p className="productPageText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sapiente illum adipisci, iste quos quis excepturi odit debitis blanditiis necessitatibus rerum iure, qui voluptatum magni omnis distinctio odio enim repellendus.</p>
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
