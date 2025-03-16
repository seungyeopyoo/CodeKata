// 가까운 1 찾기
// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다.
// 정수 idx가 주어졌을 때, idx보다 크면서 배열의값이 1인 가장 작은 인덱스를 찾아서반환하는 solution 함수를 완성해 주세요.

// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

// 제한사항
// 3 ≤ arr의 길이 ≤ 100'000
// arr의 원소는 전부 1 또는 0입니다.
// 입출력 예
// arr	                    idx     	result
// [0, 0, 0, 1]	         ,    1	          3
// [1, 0, 0, 1, 0, 0]	  ,   4	         -1
// [1, 1, 1, 1, 0]	    ,     3	          3

// 1보다 크면서 원소가 1인 가장 작은 인덱스는 3입니다. 따라서 3을 return 합니다.
// 4번 인덱스 이후에 1은 등장하지 않습니다. 따라서 -1을 return 합니다.
// 3번 인덱스의 값이 1입니다. 따라서 3을 return 합니다.

// step 1. arr 나열하는데
// step 2. i가 idx보다 크고 arr[i]가 1인 거 반환
// step 3. for문 다 돌아도 없으면 -1 return
// i가 0부터 일 필요없고 idx부터해도 된다

const solution = function (arr, idx) {
	for (let i = idx; i < arr.length; i++) {
		if (i >= idx && arr[i] === 1) {
			return i;
		}
	}
	return -1;
};

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
