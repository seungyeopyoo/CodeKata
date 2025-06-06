// 두 정수 사이의 합

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

// step 1. 빈배열만들고 둘중 더 큰놈 작은놈 선언한다.
// step 2. 1을 이용하여 for문 만들고 1빈배열에 push
// step 3. reduce 해서 더해준다.

const solution = function (a, b) {
	const arr = [];
	const bigNum = Math.max(a, b);
	const smallNum = Math.min(a, b);

	for (let i = smallNum; i <= bigNum; i++) {
		arr.push(i);
	}

	return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
