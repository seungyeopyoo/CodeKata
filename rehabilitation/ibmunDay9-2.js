// 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중
// 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000
// 입출력 예
// num_list	result
// [1, 2, 3, 4, 5]	[2, 3]
// [1, 3, 5, 7]	[0, 4]
// 입출력 예 설명
// 입출력 예 #1

// [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
// 입출력 예 #2

// [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.

// step 1. 받아온 num_list의 짝수와 홀수를 저장한다.
// step 1-1. 짝홀은 어떻게 구하나 2로 나누어서 나머지가 0이면 짝수 아니면 홀수임 .
// step 2. [짝수 홀수] return한다.

const solution = function (num_list) {
	let jjak = 0;
	let hole = 0;
	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] % 2 === 0) {
			jjak++;
		} else {
			hole++;
		}
	}
	return [jjak, hole];
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
