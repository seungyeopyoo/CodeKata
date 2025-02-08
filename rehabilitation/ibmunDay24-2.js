// 캐릭터의 좌표
// 머쓱이는 RPG게임을 하고 있습니다.
// 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면
// 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
// 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1],
// down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다.
// 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
// 캐릭터는 항상 [0,0]에서 시작할 때
// 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

// [0, 0]은 board의 정 중앙에 위치합니다.
// 예를 들어 board의 가로 크기가 9라면 캐릭터는
// 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.
// board은 [가로 크기, 세로 크기] 형태로 주어집니다.
// board의 가로 크기와 세로 크기는 홀수입니다.
// board의 크기를 벗어난 방향키 입력은 무시합니다.
// 0 ≤ keyinput의 길이 ≤ 50
// 1 ≤ board[0] ≤ 99
// 1 ≤ board[1] ≤ 99
// keyinput은 항상 up, down, left, right만 주어집니다.
// keyinput	board	result
// ["left", "right", "up", "right", "right"]	,[11, 11]	[2, 1]
// ["down", "down", "down", "down", "down"]	,[7, 9]	[0, -4]

// [0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.
// [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만
// 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.

// step 1. 방향 별로 좌표 변화를 저장 -> keyinput을 바꿔 줘야함 map
// step 2. 1을 x끼리 y끼리 모두 합한 값을 리턴 하는데
// step 3. 만약 맵 크기를 넘어버리면 맵의 최대값을 리턴

// const solution = function (keyinput, board) {
// 	let moving = {
// 		up: [0, 1],
// 		down: [0, -1],
// 		left: [-1, 0],
// 		right: [1, 0],
// 	};

// 	let convert = keyinput.map((move) => moving[move]);
// 	let x = convert
// 		.map((dotX) => dotX[0])
// 		.reduce((acc, cur) => {
// 			return acc + cur;
// 		}, 0);

// 	let y = convert
// 		.map((dotY) => dotY[1])
// 		.reduce((acc, cur) => {
// 			return acc + cur;
// 		}, 0);

// 	let mapOutX = Math.floor((board[0] - 1) / 2);
// 	let mapOutY = Math.floor((board[1] - 1) / 2);

// 	x = Math.max(-mapOutX, Math.min(x, mapOutX));
// 	y = Math.max(-mapOutY, Math.min(y, mapOutY));

// 	return [x, y];
// };
console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));

const solution = function (keyinput, board) {
	let moving = {
		up: [0, 1],
		down: [0, -1],
		left: [-1, 0],
		right: [1, 0],
	};

	let x = 0,
		y = 0;
	let maxX = Math.floor((board[0] - 1) / 2);
	let maxY = Math.floor((board[1] - 1) / 2);

	for (let move of keyinput) {
		let [dx, dy] = moving[move];

		// 이동할 좌표 계산
		let nextX = x + dx;
		let nextY = y + dy;

		// 범위를 벗어나지 않는 경우에만 이동
		if (Math.abs(nextX) <= maxX) x = nextX;
		if (Math.abs(nextY) <= maxY) y = nextY;
	}

	return [x, y];
};
