// 정수를 나선형으로 배치하기
// 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지
// 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// 1 ≤ n ≤ 30
// n	result
// 4	[[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
// 5	[[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]

// 예제 1번의 n의 값은 4로 4 × 4 배열에 다음과 같이 1부터 16까지 숫자를 채울 수 있습니다.
// 행 \ 열	0	1	2	3
// 0	    1	2	3	4
// 1	    12	13	14	5
// 2	    11	16	15	6
// 3	    10	9	8	7
// 따라서 [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]를 return 합니다.

// 행 \ 열	0	1	2	3	4
// 0	    1	2	3	4	5
// 1	    16	17	18	19	6
// 2	    15	24	25	20	7
// 3	    14	23	22	21	8
// 4	    13	12	11	10	9
// 따라서 [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]를 return 합니다.

// step 1. 이차원 배열을 만든다. 길이는 n만큼, 각인덱스도 n만큼 크기
// step 2. 규칙을 만들어서 넣을라고했는데 방향을 저장

const solution = function (n) {
	// n x n 크기의 2차원 배열을 0으로 초기화
	const result = Array.from({ length: n }, () => Array(n).fill(0));

	// 방향 이동 (오른쪽 →, 아래 ↓, 왼쪽 ←, 위 ↑)
	const dx = [0, 1, 0, -1];
	const dy = [1, 0, -1, 0];

	let x = 0,
		y = 0,
		direction = 0; // 시작 위치 (0,0), 초기 방향 → (오른쪽)

	for (let i = 1; i <= n * n; i++) {
		result[x][y] = i; // 현재 위치에 숫자 채우기

		// 다음 위치 계산
		let nx = x + dx[direction];
		let ny = y + dy[direction];

		// 범위를 벗어나거나 이미 채워진 곳이면 방향 변경
		if (nx < 0 || nx >= n || ny < 0 || ny >= n || result[nx][ny] !== 0) {
			direction = (direction + 1) % 4; // 방향 변경
			nx = x + dx[direction];
			ny = y + dy[direction];
		}

		// 새로운 위치로 이동
		x = nx;
		y = ny;
	}

	return result;
};

console.log(solution(4));
console.log(solution(5));
