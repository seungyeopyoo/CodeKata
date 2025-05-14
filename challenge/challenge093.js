// n^2 배열 자르기
// 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
// 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 107
// 0 ≤ left ≤ right < n2
// right - left < 105
// 입출력 예
// n	left	right	result
// 3	,2	 ,   5	    [3,2,2,3]
// 4,	7	 ,   14      [4,3,3,3,4,4,4,4]

// step 1. 빈배열 만들어서 숫자 쭉 채워넣고 left, right+1 slice한다. 1 2 3
//                                                                 2 2 3
//                                                                 3 3 3
// 런타임 에러남..
// const solution1 = function (n, left, right) {
// 	const arr = [];

// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			arr.push(Math.max(i, j) + 1);
// 		}
// 	}

// 	return arr.slice(left, right + 1);
// };
// 전체 배열을 만들지 않고 행과 열의 값을 구해서 그값만 빼먹기
const solution = function (n, left, right) {
	const result = [];

	for (let i = left; i <= right; i++) {
		const row = Math.floor(i / n);
		const col = i % n;
		result.push(Math.max(row, col) + 1);
	}

	return result;
};

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
