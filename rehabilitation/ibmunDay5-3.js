// 피자 나눠 먹기 (1)
// 문제 설명
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때,
//  모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100
// 입출력 예
// n	result
// 7	1
// 1	1
// 15	3
// 입출력 예 설명
// 입출력 예 #1

// 7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.
// 입출력 예 #2

// 1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.
// 입출력 예 #3

// 15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.

// step 1. n이 주어졌을때 7로 나누어 본다.
// step 2. 나눈값이 1보다 작거나 같으면 1을 반환한다.
// step 3. 나눈 값이 1보다 클경우 정수 부분에 +1해서 반환한다. <- 이렇게 하니까 실패함 14일 경우에 3판을 줘버리네
// step 4. 나눈 값이 1보다 클경우가 아닌   나머지가 있을때 +1 해야할듯
// step 5. 그냥 떨어지는 경우 그대로준다 / 나머지가 있을경우만 +1

const solution = function (n) {
	const pizza = Math.floor(n / 7);
	const namerge = n % 7;

	if (pizza <= 1) {
		return 1;
	}

	if (namerge > 0) {
		return pizza + 1;
	}

	return pizza;
};

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
