import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

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
					<Link to="https://kiwi-micro.com" className="navLink">
						Home
					</Link>
					<Link to="contact" className="navLink">
						Contact
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default GlobalNavBar;
