// 직사각형 별찍기

// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// n과 m은 각각 1000 이하인 자연수입니다.

// 5 3

// *****
// *****
// *****

// 정수 n은 low 정수 m은 column
// console.log()로 출력?
// low를 n개 만큼 찍어내고 m만큼 반복해서 출력하면 될듯
// repeat였나
// lowStar은 맞았는데 columnStar는 줄바꿈을 해야하네 /n?

let solution = function (n, m) {
	let lowStars = '*'.repeat(n);
	let squareStars = [];
	// 반복문을 사용하여 각 줄을 출력
	for (let i = 0; i < m; i++) {
		squareStars.push(lowStars);
	}
	return squareStars.join('\n');
};

console.log(solution(5, 3));
// console은 맞게 나오는데 이거 정답체크하면 통과몬함 물어보고 해결해