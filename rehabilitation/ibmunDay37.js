// k의 개수
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때,
// i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

// 1 ≤ i < j ≤ 100,000
// 0 ≤ k ≤ 9
// i	j	k	result
// 1	,13	,1	6
// 10	,50	,5	5
// 3	,10,	2	0

// 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.
// 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.

// step 1. i부터 j 까지 나열한다.
// step 2. 1을 하나씩 다 쪼개서 나열후에 k가 포함되는 것을 filter한다.
// step 3. 2의 length를 반환한다.

const solution = function (i, j, k) {
	let arr = [];
	for (let q = i; q <= j; q++) {
		arr.push(q);
	}

	let answer = arr
		.join('')
		.split('')
		.filter((num) => num === k.toString()).length;

	return answer;
};

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
