// 행렬의 곱셈
// 제출 내역
// 문제 설명
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
// 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
// 곱할 수 있는 배열만 주어집니다.
// 입출력 예
// arr1	                                 arr2	                                return
// [[1, 4], [3, 2], [4, 1]]         	[[3, 3], [3, 3]]	                    [[15, 15], [15, 15], [15, 15]]
// [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	    [[22, 22, 11], [36, 28, 18], [29, 20, 14]]

// step 1.arr1의 행을 기준으로 arr2의 열을 가져와서 같은 인덱스끼리 곱해서 다 더한다

const solution = function (arr1, arr2) {
	const result = [];

	for (let i = 0; i < arr1.length; i++) {
		const row = [];
		for (let j = 0; j < arr2[0].length; j++) {
			let sum = 0;
			for (let k = 0; k < arr1[0].length; k++) {
				sum += arr1[i][k] * arr2[k][j];
			}
			row.push(sum);
		}
		result.push(row);
	}

	return result;
};
