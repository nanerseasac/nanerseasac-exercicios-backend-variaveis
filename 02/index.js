const Fahrenheit = (f) => {
	const faToCelsius = (f - 32) / (9 / 5);
	return faToCelsius.toFixed(2);
};

console.log(Fahrenheit(73));
