// 이차원 배열 대각선 순회하기
// 2차원 정수 배열 board와 정수 k가 주어집니다.

// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

// 1 ≤ board의 길이 ≤ 100
// 1 ≤ board[i]의 길이 ≤ 100
// 1 ≤ board[i][j] ≤ 10,000
// 모든 board[i]의 길이는 같습니다.
// 0 ≤ k < board의 길이 + board[i]의 길이

// board	                                    k	result
// [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]],	2	8

// ij	0	1	2
// 0	0	1	2
// 1	1	2	3
// 2	2	3	4
// 3	3	4	5
// i + j가 2보다 작거나 같은 항들의 합은 0 + 1 + 2 + 1 + 2 + 2 = 8이므로 8을 return 합니다.

// step 1. 빈배열을 만든다 .
// step 2. i j 를 순회하며 if i + j 가 k보다 작을 경우 step1에 board[i][j]를 push한다.
// step 3. step1을 reduce하여 return

const solution = function (board, k) {
	const length = board[0].length;

	const result = [];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < length; j++) {
			if (i + j <= k) {
				result.push(board[i][j]);
			}
		}
	}
	return result.reduce((acc, cur) => acc + cur);
};

console.log(
	solution(
		[
			[0, 1, 2],
			[1, 2, 3],
			[2, 3, 4],
			[3, 4, 5],
		],
		2
	)
);
