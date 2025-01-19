// 구슬을 나누는 경우의 수
// 제출 내역
// 문제 설명
// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//  balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 1 ≤ balls ≤ 30
// 1 ≤ share ≤ 30
// 구슬을 고르는 순서는 고려하지 않습니다.
// share ≤ balls
// balls	share	result
// 3	     2	      3
// 5	     3	      10

// 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
// 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다

// n! /(n-m)! x m!

// step 1 . 위의 hint를 코드로 구현해보자.. gg

const solution = function (balls, share) {
	// 구한 조합 수를 리턴하는 함수
	const combination = (n, m) => {
		// 대칭성: C(n, m) == C(n, n-m)
		if (m > n - m) m = n - m;
		let result = 1;
		// 분자와 분모를 동시에 계산
		for (let i = 0; i < m; i++) {
			result *= n - i;
			result /= i + 1;
		}
		return result;
	};

	return combination(balls, share);
};

console.log(solution(3, 2));
console.log(solution(5, 3));
