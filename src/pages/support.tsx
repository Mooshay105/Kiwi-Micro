import GlobalNavBar from "../components/GlobalNavBar";
import HeroVideo from "../components/HeroVideo";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import ReactDOM from "react-dom/client";
import background from "../assets/hero.mp4";
import "/assets/main.css";

function Support() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<HeroVideo headerText="Support Portal Coming Soon!" description="Until Then Please Contact Us At:" buttonText="support@kiwi-micro.com" buttonDestination="mailto:support@kiwi-micro.com" hasDescription={true} hasButton={true} videoURL={background} />
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Support />);
