// let lowStar = '*'.repeat(5);

// let columnStar = lowStar.repeat(3);

// console.log(lowStar);
// console.log(lowStar);
// console.log(lowStar);
// console.log(lowStar);

let solution = function (n) {
	let lowStars = '*'.repeat(n);
	// let squareStars = lowStars.repeat(m);
	return lowStars;
};

console.log(solution(5));
