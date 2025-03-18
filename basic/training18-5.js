// n개 간격의 원소들
// 정수 리스트 num_list와 정수 n이 주어질 때,
// num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는
// 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 20
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ 4

// num_list	            n	 result
// [4, 2, 6, 1, 7, 6]	,2	[4, 6, 7]
// [4, 2, 6, 1, 7, 6]	,4	[4, 7]

// [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.
// [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.

// step 1. 빈배열만듬 result
// step 2. num_list 순회하면서 i += n 으로 증가시키면서 1에 push

const solution = function (num_list, n) {
	let result = [];
	for (let i = 0; i < num_list.length; i += n) {
		result.push(num_list[i]);
	}
	return result;
};

console.log(solution([4, 2, 6, 1, 7, 6], 2));
console.log(solution([4, 2, 6, 1, 7, 6], 4));
