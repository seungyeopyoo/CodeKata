// 연속된 수의 합
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
// 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때,
//  정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
// num	total	result
// 3	,12	[3, 4, 5]
// 5	,15	[1, 2, 3, 4, 5]
// 4	,14	[2, 3, 4, 5]
// 5	,5	[-1, 0, 1, 2, 3]

// num = 3, total = 12인 경우 [3, 4, 5]를 return합니다.
// num = 5, total = 15인 경우 [1, 2, 3, 4, 5]를 return합니다.
// 4개의 연속된 수를 더해 14가 되는 경우는 2, 3, 4, 5입니다.
// 설명 생략

// step 1. 빈 배열을 만든다.
// step 2. 배열의 첫번째 숫자를 구한다.
// step 3. for문으로 num만큼 나열한다 i++ 1에 push

const solution = function (num, total) {
	let firstNum = Math.floor(total / num - (num - 1) / 2);
	let answer = [];

	for (let i = 0; i < num; i++) {
		answer.push(firstNum + i);
	}

	return answer;
};
console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
