// 팩토리얼
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// i! ≤ n
// 제한사항
// 0 < n ≤ 3,628,800
// 입출력 예
// n	result
// 3628800	10
// 7	3

// 10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
// 3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.

// step 1. 팩토리얼을 구하는 반복문을 만들고
// step 2. 반복문이 n보다 작거나 같을때까지 반복

const solution = (n) => {
	let factorial = 1;
	let i = 1;

	while (factorial <= n) {
		i++;
		factorial *= i;
	}

	return i - 1;
};
// 조건이 true의 범위를 벗어나서 종료되는 시점은 n이 팩토리얼 보다 크다. 해서 i -1
console.log(solution(3628800));
console.log(solution(7));
