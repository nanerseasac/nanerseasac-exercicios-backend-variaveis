const feesTax = (m, c, n) => {
	const i = (m / c) ** (1 / n) - 1;
	return `${i.toFixed(3)}%`;
};

// **M:** 90000
// **C:** 60000
// **n:** 24

console.log(feesTax(90000, 60000, 24));
