// 행렬의 덧셈

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// arr1	              arr2	          return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	    [[3],[4]]	     [[4],[6]]

// arr 끼리 + 해보니까 문자열끼리 더한거 처럼 됨[1] + [2] = 12 대괄호도 사라지네
// 대괄호 뿌시고 숫자끼리 더해주고 다시 대괄호 씌울까
// 같은행 같은열끼리 어케 더함

let solution = function (arr1, arr2) {
	const numRows = arr1.length;
	const numCols = arr1[0].length;
	let answer = Array.from(Array(numRows), () => new Array(numCols));
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			answer[i][j] = arr1[i][j] + arr2[i][j];
		}
	}
	return answer;
};
console.log(
	solution(
		[
			[1, 2],
			[2, 3],
		],
		[
			[3, 4],
			[5, 6],
		]
	)
);
console.log(
	solution(
		[
			[1, 2],
			[3, 4],
			[4, 1],
		],
		[
			[1, 3],
			[2, 4],
			[1, 1],
		]
	)
);
