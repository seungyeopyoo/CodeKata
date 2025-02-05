// n의 배수 고르기
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
//  numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ n ≤ 10,000
// 1 ≤ numlist의 크기 ≤ 100
// 1 ≤ numlist의 원소 ≤ 100,000
// n	numlist	result
// 3	[4, 5, 6, 7, 8, 9, 10, 11, 12]	[6, 9, 12]
// 5,	[1, 9, 3, 10, 13, 5]	[10, 5]
// 12,	[2, 100, 120, 600, 12, 12]	[120, 600, 12, 12]

// numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.
// numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.
// numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.

// step 1. filter 하면 될거 같은데

const solution = function (n, numlist) {
	let answer = numlist.filter((num) => num % n === 0);
	return answer;
};

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(solution(5, [1, 9, 3, 10, 13, 5]));
console.log(solution(12, [2, 100, 120, 600, 12, 12]));
