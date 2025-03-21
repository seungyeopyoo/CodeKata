// 짝수의 합

// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

// 입출력 예
// n	result
// 10	30
// 4	6
// 입출력 예 설명
// 입출력 예 #1

// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
// 입출력 예 #2

// n이 4이므로 2 + 4 = 6을 return 합니다.

// step 1. 2의 배수를 나열한다. 언제까지? n 까지
// step 2. 걔들을 다 더해준다.
// step 3. 더해준 값을 return 한다.

const solution = function (n) {
	let answer = 0;
	for (let i = 2; i <= n; i += 2) {
		answer += i;
	}
	return answer;
};

console.log(solution(10));
console.log(solution(4));
