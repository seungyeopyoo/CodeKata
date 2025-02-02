// 369게임
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신
// 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때,
// 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ order ≤ 1,000,000
// order	result
// 3	1
// 29423	2

// 3은 3이 1개 있으므로 1을 출력합니다.
// 29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.

// step 1. order + '' 하고 split한다.
// step 2. arr을 filter하여 3 6 9 만 빼서 clap 배열을 만든다.
// step 3. return clap.length

const solution = function (order) {
	let arr = (order + '').split('');
	let clap = arr.filter((num) => num === '3' || num === '6' || num === '9');
	console.log(clap);
	return clap.length;
};
console.log(solution(3));
console.log(solution(29423));
