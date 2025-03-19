// 홀수 vs 짝수
// 정수 리스트 num_list가 주어집니다.
// 가장 첫 번째 원소를 1번 원소라고 할 때,
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요.
// 두 값이 같을 경우 그 값을 return합니다.

// 5 ≤ num_list의 길이 ≤ 50
// -9 ≤ num_list의 원소 ≤ 9
// 입출력 예
// num_list	            result
// [4, 2, 6, 1, 7, 6]	17
// [-1, 2, 5, 6, 3]	    8

// 홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 합은 2 + 1 + 6 = 9 이므로 17을 return합니다. 13579 02468
// 홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다.

// step 1. 홀수합 짝수합 구함
// step 2. 비교해서 더큰거 return 삼항연산자

const solution = function (num_list) {
	let holesu = 0;
	let jjaksu = 0;

	for (let i = 0; i < num_list.length; i++) {
		if (i % 2 === 0) {
			holesu += num_list[i];
		} else {
			jjaksu += num_list[i];
		}
	}

	return holesu >= jjaksu ? holesu : jjaksu;
};

console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution([-1, 2, 5, 6, 3]));
