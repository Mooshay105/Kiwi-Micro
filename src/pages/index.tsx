import GlobalNavBar from "../components/GlobalNavBar";
import HeroVideo from "../components/HeroVideo";
import GlobalFooter from "../components/GlobalFooter";
import FeaturedProduct from "../components/FeaturedProduct";
import React from "react";
import ReactDOM from "react-dom/client";
import kCameraProductImage from "../assets/img/kcamera.png";
import kStoreProductImage from "../assets/img/kstore.png";
import hero from "../assets/hero.mp4";
import "/assets/main.css";

function Index() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={true} />
				<HeroVideo headerText="kCamera" description="Sleek and Lightweight" buttonText="Learn More" buttonDestination="kcamera.html" hasDescription={true} hasButton={true} videoURL={hero} />
				<div className="feeturedProducts">
					<FeaturedProduct ProductName="kCamera" ProductPage="kcamera.html" ProductDescription="The Camera For Homes And Businesses" ProductImage={kCameraProductImage} />
					<FeaturedProduct ProductName="kStore" ProductPage="kstore.html" ProductDescription="The Perfect NAS for Small Businesses and Individuals" ProductImage={kStoreProductImage} />
				</div>
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Index />);
