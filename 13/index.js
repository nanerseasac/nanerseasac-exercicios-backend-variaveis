const pi = Math.PI;

const totalArea = (r, h) => {
	const at = 2 * pi * r * (r + h);

	return at.toFixed(3);
};

console.log(totalArea(3, 1));
