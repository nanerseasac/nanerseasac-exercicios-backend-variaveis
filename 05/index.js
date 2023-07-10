const distance = (x1, x2, y1, y2) => {
	const calcD = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

	return calcD;
};

// | x1  | x2  | y1  | y2  |
// | :-: | :-: | :-: | :-: |
// |  1  |  1  |  1  |  4  |

console.log(distance(1, 1, 1, 4));
