import GlobalNavBar from "../components/GlobalNavBar";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import ReactDOM from "react-dom/client";
import "/assets/main.css";

function Support() {
	return (
		<React.StrictMode>
			<div className="main">
				<GlobalNavBar blur={false} />
				<br />
				<br />
				<br />
				<div className="contact">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47696.19632762794!2d152.53291338320125!3d-25.358518551578666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6beb71d3dc7fb7af%3A0x400eef17f20ee40!2sTorbanlea%20QLD%204662!5e1!3m2!1sen!2sau!4v1727569365334!5m2!1sen!2sau" className="map"></iframe>
					<div className="info">
						<h1>Contact Us</h1>
						<a href="mailto:contact@kiwi-micro.com" className="btn">
							contact@kiwi-micro.com
						</a>
						<p>Phone: (+61) 0435556028</p>
						<p>Address: Torbanlea QLD 4662</p>
					</div>
				</div>
				<br />
				<br />
				<GlobalFooter />
			</div>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Support />);
