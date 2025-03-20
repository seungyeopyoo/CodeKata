// 조건에 맞게 수열 변환하기 1
// 정수 배열 arr가 주어집니다.
// arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고,
// 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000,000
// 1 ≤ arr의 원소의 값 ≤ 100
// 입출력 예
// arr                          	result
// [1, 2, 3, 100, 99, 98]	[2, 2, 6, 50, 99, 49]

// 1, 3은 50 미만의 홀수 이므로 2를 곱하고, 100, 98은 50 이상의 짝수이므로 2로 나눕니다.
// 나머지 값들은 변경 조건에 해당하지 않으므로 바꾸지 않습니다.
// 따라서 [2, 2, 6, 50, 99, 49]를 return 합니다.

// step 1. 빈배열 만든다. result
// step 2. arr을 순회하면서 if
// step 3. arr[i] >= 50 && arr[i] %2 === 0 이면 arr[i] / 2 를 1에 push
// step 4. arr[i] < 50 && arr[i] % 2 === 1 이면 arr[i] * 2 를 1에 push
// step 5. return result

const solution = function (arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 50 && arr[i] % 2 === 0) {
			result.push(arr[i] / 2);
		} else if (arr[i] < 50 && arr[i] % 2 === 1) {
			result.push(arr[i] * 2);
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(solution([1, 2, 3, 100, 99, 98]));
