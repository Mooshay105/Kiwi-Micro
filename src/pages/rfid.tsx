import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import RFIDProductVideo from "../assets/RFID.mp4";
import React, { useState } from "react";

function RFID() {
	const RFIDPrice = "Price Comming Soon!";
	const RFIDCheckout = "#";
	const [price, setPrice] = useState(RFIDPrice);
	const [activeOptionCheckout, setActiveOptionCheckout] = useState(RFIDCheckout);

	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<br />
				<section className="productPage">
					<h1 className="productPageHeader">RFID Reader</h1>
					<video autoPlay muted loop className="productVideo">
						<source src={RFIDProductVideo} type="video/mp4" />
					</video>
					<div>
						<p className="productPageDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sapiente illum adipisci, iste quos quis excepturi odit debitis blanditiis necessitatibus rerum iure, qui voluptatum magni omnis distinctio odio enim repellendus.</p>
						<br />
						<h2 className="configPrice">{price}</h2>
						<div className="lineBreak"></div>
						<div className="buyButtonContainer">
							<a className="buyButton" href={activeOptionCheckout}>
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RFID />);
