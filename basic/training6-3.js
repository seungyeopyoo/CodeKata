// n의 배수
// 정수 num과 n이 매개 변수로 주어질 때,
// num이 n의 배수이면 1을 return n의 배수가 아니라면 0을
// return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num ≤ 100
// 2 ≤ n ≤ 9
// 입출력 예
// num	n	result
// 98	,2	1
// 34	,3	0

// 98은 2의 배수이므로 1을 return합니다.
// 32는 3의 배수가 아니므로 0을 return합니다.

// step 1. num % n === 0 이면 1 아니면 0

const solution = function (num, n) {
	return num % n === 0 ? 1 : 0;
};
console.log(solution(98, 2));
console.log(solution(34, 3));
