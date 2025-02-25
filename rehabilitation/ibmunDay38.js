// 종이 자르기
// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
// 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

// 정수 M, N이 매개변수로 주어질 때,
// M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

// 0 < M, N < 100
// 종이를 겹쳐서 자를 수 없습니다.
// M	N	result
// 2,	2	3
// 2	,5	9
// 1,	1	0

// 가로 2 세로 5인 종이는 가로로 1번 세로로 8번 총 가위질 9번이 필요합니다.
// 이미 1 * 1 크기이므로 0을 return 합니다.

// step 1. if N M 이 1이면 0 return
// step 2. 잘 모르겠는데 넓이 -1 하면 되는거 같기도 .. ?

const solution = function (N, M) {
	if (N === 1 && M === 1) return 0;

	let answer = N * M - 1;
	return answer;
};

console.log(solution(2, 2));
console.log(solution(2, 5));
console.log(solution(1, 1));
