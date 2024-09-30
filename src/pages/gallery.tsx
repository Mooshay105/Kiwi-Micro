import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import ReactDOM from "react-dom/client";
import "/assets/main.css";
import GalleryItem from "../components/GalleryItem";
import airportDatabase from "../assets/img/airportDatabase.png";
import linuxClone from "../assets/img/linuxClone.png";

function Support() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<br />
				<br />
				<br />
				<GalleryItem headerText="Airport Database" description="Hello World" buttonText="Visit" buttonDestination="https://airportdatabase.malcolmjh.com" imageURL={airportDatabase} />
				<br />
				<GalleryItem headerText="Linux Clone" description="Hello World" buttonText="Visit" buttonDestination="https://linux.malcolmjh.com" imageURL={linuxClone} leftOrRight="right" />
				<br />
				<br />
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Support />);
