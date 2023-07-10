const calcCI = (c, i, t) => {
	const M = c * (1 + i) ** t;
	return M.toFixed(0);
};

// **C =** 1000
// **i =** 0,125
// **t =** 5

console.log(calcCI(1000, 0.125, 5));
