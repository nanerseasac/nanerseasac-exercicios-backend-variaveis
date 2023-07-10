// **Po =** a população incial de pessoas infectadas \
// **X =** quantidade de pessoas para as quais um paciente infectado pode transmitir \
// **t =** tempo percorrido

const totalInfected = (po, x, t) => {
	const p = po * x ** (7 / t);
	return p;
};

// **Po =** 1000
// **x =** 4
// **t =** 7

console.log(totalInfected(1000, 4, 7));
