// 뒤에서 5등까지
// 정수로 이루어진 리스트 num_list가 주어집니다.
// num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 6 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 100

// num_list	                        result
// [12, 4, 15, 46, 38, 1, 14]	    [1, 4, 12, 14, 15]

// [12, 4, 15, 46, 38, 1, 14]를 정렬하면 [1, 4, 12, 14, 15, 38, 46]이 되고, 앞에서 부터 5개를 고르면 [1, 4, 12, 14, 15]가 됩니다.

// step 1. 빈배열 result 만든다
// step 2. num_list 정렬하고
// step 3. 5개만 1에 push한다.
// sort 하고 slice했으면 되네

const solution = function (num_list) {
	const result = [];

	const sortedArr = num_list.sort((a, b) => a - b);

	for (let i = 0; i < 5; i++) {
		result.push(sortedArr[i]);
	}

	return result;
};

console.log(solution([12, 4, 15, 46, 38, 1, 14]));
