import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import kStoreProductVideo from "../assets/kStore.mp4";
import React, { useState } from "react";

function Kstore() {
	const kStoreStorage256gbPrice = "kStore 256GB Coming Soon!";
	const kStoreStorage512gbPrice = "kStore 512GB Coming Soon!";
	const kStoreStorage256gbCheckout = "#";
	const kStoreStorage512gbCheckout = "#";
	const [price, setPrice] = useState(kStoreStorage256gbPrice);
	const [activeOption, setActiveOption] = useState("kStoreStorage256gb");
	const [activeOptionCheckout, setActiveOptionCheckout] = useState("kStoreStorage256gb");

	function handleConfigClick(option: string) {
		if (option === "kStoreStorage256gb") {
			setPrice(kStoreStorage256gbPrice);
			setActiveOption("kStoreStorage256gb");
			setActiveOptionCheckout("kStoreStorage256gb");
		} else if (option === "kStoreStorage512gb") {
			setPrice(kStoreStorage512gbPrice);
			setActiveOption("kStoreStorage512gb");
			setActiveOptionCheckout("kStoreStorage512gb");
		}
	}

	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<section className="hero">
					<video autoPlay muted loop className="heroVideo">
						<source src={kStoreProductVideo} type="video/mp4" />
					</video>
					<div className="heroOverlay">
						<div className="heroContent">
							<h1>kStore</h1>
							<h2>Chose How Much Storage You Want</h2>
							<button className={activeOption === "kStoreStorage256gb" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("kStoreStorage256gb")}>
								256 GB
							</button>
							<button className={activeOption === "kStoreStorage512gb" ? "configButtonActive" : "configButton"} onClick={() => handleConfigClick("kStoreStorage512gb")}>
								512 GB
							</button>
							<br />
							<h2 className="configPrice" id="configPrice">
								{price}
							</h2>
							<div className="lineBreak"></div>
							<a className="buyBTN" href={activeOptionCheckout === "kStoreStorage256gb" ? kStoreStorage256gbCheckout : kStoreStorage512gbCheckout} id="buyBTN">
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Kstore />);
