const average = (d, t) => {
	const speed = d / t;
	return `${speed * 3.6}km/h`;
};

console.log(average(500, 10));
