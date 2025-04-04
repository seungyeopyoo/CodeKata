// x만큼 간격이 있는 n개의 숫자

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

// step 1. 빈배열을 만든다.
// step 2. for문을 n번 반복하면서 x * (i+1)을 배열에 넣는다

const solution = function (x, n) {
	const answer = [];
	for (let i = 0; i < n; i++) {
		answer.push(x * (i + 1));
	}
	return answer;
};

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
