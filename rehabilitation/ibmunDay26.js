// 안전지대
// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
// 입출력 예
// board	result
// [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	16
// [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]	13
// [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]	0

// (3, 2)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선 총 8칸은 위험지역입니다. 따라서 16을 return합니다.
// (3, 2), (3, 3)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선은 위험지역입니다. 따라서 위험지역을 제외한 칸 수 13을 return합니다.
// 모든 지역에 지뢰가 있으므로 안전지역은 없습니다. 따라서 0을 return합니다.

const solution = function (board) {
	// 보드의 크기를 구한다. 정사각형 모양으로 n은 가로, 세로의 길이
	const n = board.length;
	// 위험 지역을 체크할 배열을 생성한다. Array.from 배열생성 , fill 채워넣음 (0)으로.
	const dangerZone = Array.from(Array(n), () => Array(n).fill(0));

	// 위험지역으로 표기할 지뢰 주변 8방향 (상, 하, 좌, 우, 대각선)
	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	// 지뢰 위치 찾기
	for (let i = 0; i < n; i++) {
		// 행을 탐색
		for (let j = 0; j < n; j++) {
			// 열을 탐색
			if (board[i][j] === 1) {
				// board에서 1이 나오면 거기가 지뢰지역 배열값임
				dangerZone[i][j] = 1; // 0으로 채워둔 새배열에서 지뢰 위치를 1로 표기
				// 위에 1로 표기한 지뢰지역에 directions만큼 이동하여 8방향 위험지역의 배열값도 구한다.
				for (let [dx, dy] of directions) {
					const nx = i + dx;
					const ny = j + dy;
					if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
						// 배열의 범위가 n을 벗어나지 않도록 체크한다. 범위 안에 있을때에만 위험지역으로 설정
						dangerZone[nx][ny] = 1;
					}
				}
			}
		}
	}

	// 0인 안전지역의 계수를 카운트한다.
	let safeCount = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (dangerZone[i][j] === 0) {
				safeCount++;
			}
		}
	}

	return safeCount;
};

console.log(
	solution([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	])
);
console.log(
	solution([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0],
	])
);
console.log(
	solution([
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
	])
);
