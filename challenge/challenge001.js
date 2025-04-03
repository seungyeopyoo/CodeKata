// 약수의 합

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

// n	return
// 12	28
// 5	6

// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

// step 1. 나누어서 나머지가 0이 되는 모든수를 더 한다. 빈배열만들고 reduce
// 초기값을 제외하고 했는데 런타임에러가 남  = > 배열이 0 일경우 에러가나는듯

const solution = function (n) {
	const result = [];
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			result.push(i);
		}
	}
	return result.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution(3000));
console.log(solution(5));
