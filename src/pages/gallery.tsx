import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import GalleryItem from "../components/GalleryItem";
import CustomBreak from "../components/CustomBreak";
import airportDatabase from "../assets/img/airportDatabase.png";
import linuxClone from "../assets/img/linuxClone.png";

function Support() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<CustomBreak height={1} />
				<h1 className="centeredHeader">Code Gallery</h1>
				<GalleryItem headerText="Airport Database" description="Hello World" buttonText="Visit" buttonDestination="https://airportdatabase.malcolmjh.com" imageURL={airportDatabase} />
				<CustomBreak height={1} hasHR={true} />
				<CustomBreak height={1} />
				<GalleryItem headerText="Linux Clone" description="Hello World" buttonText="Visit" buttonDestination="https://linux.malcolmjh.com" imageURL={linuxClone} leftOrRight="right" />
				<CustomBreak height={2} />
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Support />);
