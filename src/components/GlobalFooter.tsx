function GlobalFooter() {
	let text = "Copyright © 2024 Micro Dev of All Micros";
	let fullURL = window.location.href;

	let URL = fullURL.split("/").slice(0, 3).join("/");

	if (URL === "https://kiwi-micro.com") {
		text = "Copyright © 2024 Kiwi Micro";
	}

	if (URL === "https://kangaroo-micro.com") {
		text = "Copyright © 2024 Kangaroo Micro";
	}

	return (
		<footer>
			<p>{text}</p>
		</footer>
	);
}

export default GlobalFooter;
