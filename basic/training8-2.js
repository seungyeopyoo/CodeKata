// 원소들의 곱과 합
// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다
// 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
// 입출력 예
// num_list	result
// [3, 4, 5, 2, 1]	1
// [5, 7, 8, 3]	0

// 모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.
// 모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.

// step 1. num_list의 원소의 곱 구해서 선언한다.
// step 2. '' 합 제곱 구해서 선언
// step 3. 비교해서 1return 0return 삼항연산자

const solution = function (num_list) {
	let multiplication = num_list.reduce((acc, cur) => acc * cur);
	let square = num_list.reduce((acc, cur) => acc + cur) ** 2;
	return multiplication < square ? 1 : 0;
};
console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
