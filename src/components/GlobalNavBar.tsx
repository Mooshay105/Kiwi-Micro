import logo from "../assets/img/logo.png";

let pageTitle = document.title;
let fullPageURL = window.location.href;
let newPageTitle;
let pageURL = fullPageURL.split("/").slice(0, 3).join("/");

if (pageURL === "https://kiwi-micro.com") {
	newPageTitle = "Kiwi Micro | " + pageTitle;
} else if (pageURL === "https://kangaroo-micro.com") {
	newPageTitle = "Kangaroo Micro | " + pageTitle;
} else {
	newPageTitle = "Micro Dev of All Micros | " + pageTitle;
}

document.title = newPageTitle;

interface GlobalNavBarProps {
	blur: boolean;
}

function GlobalNavBar({ blur }: GlobalNavBarProps) {
	return (
		<nav className={blur ? "navBlur" : ""}>
			<div className="navContent">
				<ul className="navList">
					<a href="https://kiwi-micro.com" className="navLink">
						<img src={logo} width="30px" height="30px" alt="Logo" />
					</a>
					<a href="rfid.html" className="navLink">
						RFID Reader
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
