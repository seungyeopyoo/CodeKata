// 마지막 두 원소
// 정수 리스트 num_list가 주어질 때,
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 ,
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여
// return하도록 solution 함수를 완성해주세요.

// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
// num_list	result
// [2, 1, 6]	[2, 1, 6, 5]
// [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]

// 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.
// 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

// step 1. 마지막 원소 저장 그전 원소 저장
// step 2. lastindex가 secondLastIndex 크면 last - second를 num.list push
// step 3. else면 last * 2 push

const solution = function (num_list) {
	let lastIndex = num_list[num_list.length - 1];

	let secondLastIndex = num_list[num_list.length - 2];
	if (lastIndex > secondLastIndex) {
		num_list.push(lastIndex - secondLastIndex);
	} else {
		num_list.push(lastIndex * 2);
	}
	return num_list;
};

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
