// delta = b^2 - 4ac $$

const delta = (a, b, c) => {
	const d = b ** 2 - 4 * a * c;

	return d;
};

console.log(delta(5, 5, 1));
