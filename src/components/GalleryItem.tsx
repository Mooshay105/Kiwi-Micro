import React from "react";

interface GalleryItemProps {
	headerText: string;
	description?: string;
	buttonText?: string;
	buttonDestination?: string;
	imageURL: string;
	leftOrRight?: string;
}

function GalleryItem({ headerText, description, buttonText, buttonDestination, imageURL, leftOrRight = "left" }: GalleryItemProps) {
	const [isLeftOrRight, setIsLeftOrRight] = React.useState<string>(leftOrRight);

	// run code on window resize
	React.useEffect(() => {
		function handleResize() {
			if (leftOrRight === "left" || window.innerWidth < 500) {
				setIsLeftOrRight("left");
			} else if (leftOrRight === "right") {
				setIsLeftOrRight("right");
			} else {
				setIsLeftOrRight("right");
			}
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	return (
		<div className="gallery">
			{isLeftOrRight === "left" && <img src={imageURL} className="galleryImage" alt={headerText} height="400px" width="400px" />}
			<div className={leftOrRight === "right" ? "infoLeft" : "info"}>
				<h1>{headerText}</h1>
				<p>{description}</p>
				<a href={buttonDestination} className="btn">
					{buttonText}
				</a>
			</div>
			{isLeftOrRight === "right" && <img src={imageURL} className="galleryImage" alt={headerText} height="400px" width="400px" />}
		</div>
	);
}

export default GalleryItem;
