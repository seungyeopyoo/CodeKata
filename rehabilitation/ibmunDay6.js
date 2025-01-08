// 피자 나눠 먹기 (2)
// 제출 내역
// 문제 설명
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예
// n	result
// 6	1
// 10	5
// 4	2
// 입출력 예 설명
// 입출력 예 #1

// 6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.
// 입출력 예 #2

// 10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.
// 입출력 예 #3

// 4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.

//n과 6의 최소공배수를 구하는 문제인듯
// step 1. 6의 배수를 나열한다.
// step 2. n의 배수를 나열한다.
// step 3. 둘이 겹치는 수 중에 가장 작은 수를 꺼낸다.
// step 4. 그 수를 6으로 나누고 return 한다.

const solution = function (n) {
	let sixbaesu = [];
	let nbaesu = [];

	for (let i = 1; i <= 100; i++) {
		sixbaesu.push(6 * i);
	}

	for (let i = 1; i <= 100; i++) {
		nbaesu.push(n * i);
	}

	let piece = sixbaesu.find(function (num) {
		return nbaesu.includes(num);
	});

	return piece / 6;
};

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
