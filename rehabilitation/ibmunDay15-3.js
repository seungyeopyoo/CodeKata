// 최댓값 만들기 (1)
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100

// numbers	result
// [1, 2, 3, 4, 5]	20
// [0, 31, 24, 10, 1, 9]	744

// 두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
// 두 수의 곱중 최댓값은 31 * 24 = 744 입니다.

// step 1. numbers를 sort한다 내림차순으로
// step 2. 0번 1번 인덱스를 곱해준다.
// step 3. 걔를 return 한다 .

const solution = function (numbers) {
	let sortedArr = numbers.sort(function (a, b) {
		return b - a;
	});

	let maxNum = sortedArr[0] * sortedArr[1];

	return maxNum;
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
