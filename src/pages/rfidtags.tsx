import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import productVideo from "../assets/rfidtags.mp4";
import React, { useState } from "react";

function RFID() {
	const [price, setPrice] = useState("$15.00");
	const [checkout, setCheckout] = useState("https://buy.stripe.com/bIYfZn5AEb7mg3m8wy");

	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<br />
				<section className="productPage">
					<h1 className="productPageHeader">Heigh Frequency RFID Tags</h1>
					<video autoPlay muted loop className="productVideo">
						<source src={productVideo} type="video/mp4" />
					</video>
					<div>
						<br />
						<h2 className="configPrice">{price}</h2>
						<div className="lineBreak"></div>
						<div className="buyButtonContainer">
							<a className="buyButton" href={checkout}>
								Buy
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
