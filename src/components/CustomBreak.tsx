interface CustomBreakProps {
	height: number;
	hasHR?: boolean;
}

function CustomBreak({ height, hasHR = false }: CustomBreakProps) {
	let br = "";
	for (let i = 0; i < height; i++) {
		br += "<br />";
	}
	if (hasHR) {
		br += "<hr />";
	}
	return <span dangerouslySetInnerHTML={{ __html: br }}></span>;
}

export default CustomBreak;
