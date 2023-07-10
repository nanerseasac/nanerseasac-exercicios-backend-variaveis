const imc = (weight, height) => {
	const IMCcount = weight / height ** 2;
	return IMCcount.toFixed(2);
};

console.log(imc(76, 1.79));
