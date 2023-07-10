const pi = Math.PI;

const vol = (r) => {
	const volume = (4 / 3) * pi * r ** 3;
	return volume;
};

console.log(vol(3));
