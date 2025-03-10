// 배열 만들기 2
// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서
//  숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// 1 ≤ l ≤ r ≤ 1,000,000
// l	r	result
// 5	,555	[5, 50, 55, 500, 505, 550, 555]
// 10	,20	[-1]

// 5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다.
// 따라서 [5, 50, 55, 500, 505, 550, 555]를 return 합니다.

// 10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 return 합니다.

// step 1. l부터 r까지 for문 돌림
// step 2. if 0 || 5 every true면 빈배열에 push
// step 3. else 면 -1 push

const solution = function (l, r) {
	let arr = [];
	for (let i = l; i <= r; i++) {
		if ([...String(i)].every((digit) => digit === '0' || digit === '5')) {
			arr.push(i);
		}
	}

	return arr.length > 0 ? arr : [-1];
};

console.log(solution(5, 555));
console.log(solution(10, 20));
