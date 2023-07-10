const sumAngles = (n) => {
	const sum = (n - 2) * 180;
	const angleVal = sum / n;

	return `a soma dos angulos ${sum}º e o valor dos angulos ${angleVal}º`;
};

console.log(sumAngles(6));
