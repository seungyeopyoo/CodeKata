// 행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행,
// 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아,
// 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// arr1	                arr2	            return
// [[1,2],[2,3]]	,[[3,4],[5,6]]	        [[4,6],[7,9]]
// [[1],[2]]	  ,  [[3],[4]]	            [[4],[6]]

// step 1. 2차원 배열 0으로 채운거 선언하고
// step 2. answer[i][j] = arr1[i][j] + arr2[i][j]

const solution = function (arr1, arr2) {
	let answer = Array.from({ length: arr1.length }, () =>
		Array(arr1[0].length).fill(0)
	);

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr1[0].length; j++) {
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
console.log(solution([[1], [2]], [[3], [4]]));
