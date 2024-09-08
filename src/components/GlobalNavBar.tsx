import logo from "../assets/img/logo.png";

interface GlobalNavBarProps {
	blur: boolean;
}

function GlobalNavBar({ blur }: GlobalNavBarProps) {
	console.log("Hello Adventurer! Feel free to explore the logs! The Source Code is at https://github.com/Mooshay105/Kiwi-Micro.");
	return (
		<nav className={blur ? "navBlur" : ""}>
			<div className="navContent">
				<ul className="navList">
					<a href="https://kiwi-micro.com" className="navLink">
						<img src={logo} width="30px" height="30px" alt="Logo" />
					</a>
					<a href="kcamera.html" className="navLink">
						kCamera
					</a>
					<a href="kstore.html" className="navLink">
						kStore
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
