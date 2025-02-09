// 최댓값 만들기 (2)
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers 의 길이 ≤ 100
// 입출력 예
// numbers	result
// [1, 2, -3, 4, -5]	15
// [0, -31, 24, 10, 1, 9]	240
// [10, 20, 30, 5, 5, 20, 5]	600

// 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.
// 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.
// 두 수의 곱중 최댓값은 20 * 30 = 600 입니다.

// step 1. 정렬한다.
// step 2. 0번 1번 인덱스 값 곱한다.
// step 3. length-1 , -2 값 곱한다 .
// step 4. 두놈중에 더큰놈 반환한다.

const solution = function (numbers) {
	numbers.sort((a, b) => a - b);

	const max1 = numbers[numbers.length - 1];
	const max2 = numbers[numbers.length - 2];

	const min1 = numbers[0];
	const min2 = numbers[1];

	return Math.max(max1 * max2, min1 * min2);
};

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
