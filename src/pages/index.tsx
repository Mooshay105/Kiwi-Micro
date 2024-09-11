import GlobalNavBar from "../components/GlobalNavBar";
import HeroVideo from "../components/HeroVideo";
import GlobalFooter from "../components/GlobalFooter";
import FeaturedProduct from "../components/FeaturedProduct";
import React from "react";
import ReactDOM from "react-dom/client";
import RFIDProductImage from "../assets/img/rfid.png";
import NASProductImage from "../assets/img/nas.png";
import hero from "../assets/hero.mp4";
import "/assets/main.css";

function Index() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={true} />
				<HeroVideo headerText="RFID Reader" description="Sleek and Lightweight" buttonText="Learn More" buttonDestination="rfid.html" hasDescription={true} hasButton={true} videoURL={hero} />
				<div className="feeturedProducts">
					<FeaturedProduct ProductName="RFID Reader" ProductPage="rfid.html" ProductDescription="Efficient and secure RFID reader for all your needs" ProductImage={RFIDProductImage} />
					<FeaturedProduct ProductName="NAS" ProductPage="nas.html" ProductDescription="The Perfect NAS for Small Businesses and Individuals" ProductImage={NASProductImage} />
				</div>
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Index />);
