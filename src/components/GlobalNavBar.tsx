import logo from "../assets/img/logo.png";

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
					<a href="gallery.html" className="navLink">
						Gallery
					</a>
					<a href="contact.html" className="navLink">
						Contact
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default GlobalNavBar;
