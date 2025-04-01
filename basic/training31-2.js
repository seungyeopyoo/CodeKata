// 정사각형으로 만들기
// 이차원 정수 배열 arr이 매개변수로 주어집니다.
//  arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// 1 ≤ arr의 길이 ≤ 100
// 1 ≤ arr의 원소의 길이 ≤ 100
// arr의 모든 원소의 길이는 같습니다.
// 1 ≤ arr의 원소의 원소 ≤ 1,000

// arr	result
// [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]
// [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

// [[57, 192, 534, 2], [9, 345, 192, 999]]
// [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]

// [[1, 2], [3, 4]]
// [[1, 2], [3, 4]]

// 예제 1번의 arr은 행의 수가 4, 열의 수가 3입니다.
// 행의 수가 더 많으므로 열의 수를 4로 만들기 위해
// arr의 각 행의 끝에 0을 추가한 이차원 배열
// [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]를 return 합니다.

// 예제 2번의 arr은 행의 수가 2, 열의 수가 4입니다.
// 열의 수가 더 많으므로 행의 수를 4로 만들기 위해 arr의 각 열의 끝에 0을 추가한 이차원 배열
// [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]을 return 합니다.

// 예제 3번의 arr은 행의 수와 열의 수가 2로 같습니다. 따라서 0을 추가하지 않고 [[1, 2], [3, 4]]을 return 합니다.

// step 1. 행과 열을 선언한다. 그중 더 큰걸 기준으로 선언한다.
// step 2. 행이 더 많으면 arr을 순회하며 각 인덱스가 step1과 같아질때까지 0 추가
// step 3. 열이 더 많으면 0을 fill한 배열을 step1 만큼 추가
// step 4. 둘다 아니면 그냥 매개변수 return

const solution = function (arr) {
	const row = arr.length;
	const col = arr[0].length;
	const size = Math.max(row, col);

	for (let i = 0; i < arr.length; i++) {
		while (arr[i].length < size) {
			arr[i].push(0);
		}
	}

	while (arr.length < size) {
		arr.push(new Array(size).fill(0));
	}

	return arr;
};

console.log(
	solution([
		[572, 22, 37],
		[287, 726, 384],
		[85, 137, 292],
		[487, 13, 876],
	])
);
// [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

console.log(
	solution([
		[57, 192, 534, 2],
		[9, 345, 192, 999],
	])
);
// [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]

console.log(
	solution([
		[1, 2],
		[3, 4],
	])
);
// [[1, 2], [3, 4]]
