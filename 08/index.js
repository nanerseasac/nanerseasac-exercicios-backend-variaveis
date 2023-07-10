const pi = Math.PI;

const calcArea = (r) => {
	const c = 2 * pi * r;
	const a = pi * r ** 2;

	return `O comprimento é ${c.toFixed(1)} e a area é de ${a.toFixed(2)}`;
};

// Para um círculo com $R = 1$, os valores de $C$ e $A$ são:

console.log(calcArea(1));
