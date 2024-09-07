interface HeroVideoProps {
	headerText: string;
	description?: string;
	buttonText?: string;
	buttonDestination?: string;
	hasDescription: boolean;
	hasButton: boolean;
	videoURL: string;
}

function HeroVideo({ headerText, description, buttonText, buttonDestination, hasDescription = true, hasButton = true, videoURL }: HeroVideoProps) {
	return (
		<section className="hero">
			<video autoPlay muted loop playsInline className="heroVideo">
				<source src={videoURL} type="video/mp4" />
			</video>
			<div className="heroOverlay">
				<div className="heroContent">
					<h1>{headerText}</h1>
					{hasDescription && <p>{description}</p>}
					{hasButton && (
						<a href={buttonDestination} className="btn">
							{buttonText}
						</a>
					)}
				</div>
			</div>
		</section>
	);
}

export default HeroVideo;
