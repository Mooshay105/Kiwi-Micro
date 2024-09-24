import logo_kiwi from "../assets/img/logo-kiwi.png";
import logo_kangaroo from "../assets/img/logo-kangaroo.png";

let pageTitle = document.title;
let fullPageURL = window.location.href;
let newPageTitle;
let pageURL = fullPageURL.split("/").slice(0, 3).join("/");
let navLink: string;
let logo: string;

if (pageURL === "https://kiwi-micro.com" || pageURL === "http://kiwi-micro.com") {
	newPageTitle = "Kiwi Micro | " + pageTitle;
	navLink = "https://kiwi-micro.com";
	logo = logo_kiwi;
} else if (pageURL === "https://kangaroo-micro.com" || pageURL === "http://kangaroo-micro.com") {
	newPageTitle = "Kangaroo Micro | " + pageTitle;
	navLink = "https://kangaroo-micro.com";
	logo = logo_kangaroo;
} else {
	newPageTitle = "Micro Dev of All Micros | " + pageTitle;
	navLink = "http://localhost:5173/";
	logo = logo_kiwi;
}

document.title = newPageTitle;

interface GlobalNavBarProps {
	blur: boolean;
}

function GlobalNavBar({ blur }: GlobalNavBarProps) {
	return (
		<nav className={blur ? "navBlur" : ""}>
			<link rel="icon" href={logo} />
			<div className="navContent">
				<ul className="navList">
					<a href={navLink} className="navLink">
						<img src={logo} width="30px" height="30px" alt="Logo" />
					</a>
					<a href="rfid.html" className="navLink">
						RFID Reader
					</a>
					<a href="rfidtags.html" className="navLink">
						RFID Tags
					</a>
					<a href="nas.html" className="navLink">
						NAS
					</a>
					<a href="support.html" className="navLink">
						Support
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default GlobalNavBar;
