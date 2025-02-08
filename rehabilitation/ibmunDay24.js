// 직사각형 넓이 구하기
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는
// 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// dots의 길이 = 4
// dots의 원소의 길이 = 2
// -256 < dots[i]의 원소 < 256
// 잘못된 입력은 주어지지 않습니다.
// 입출력 예
// dots	result
// [[1, 1], [2, 1], [2, 2], [1, 2]]	1
// [[-1, -1], [1, 1], [1, -1], [-1, 1]]	4

// 좌표 [[1, 1], [2, 1], [2, 2], [1, 2]] 를 꼭짓점으로 갖는
// 직사각형의 가로, 세로 길이는 각각 1, 1이므로 직사각형의 넓이는 1 x 1 = 1입니다.
// 좌표 [[-1, -1], [1, 1], [1, -1], [-1, 1]]를 꼭짓점으로 갖는
// 직사각형의 가로, 세로 길이는 각각 2, 2이므로 직사각형의 넓이는 2 x 2 = 4입니다.

// step 1. 배열 안의 0 번째 요소 -> x 좌표만 모아둔 새로운 배열을 만든다.
// step 2. y도 ㄱㄱ
// step 3. 1에서 만든 각 배열에서 최댓값 최소값의 차를 구한다.
// step 4. 3에서 구한 값끼리 곱해준다.

const solution = function (dots) {
	let arrX = dots.map((dotX) => dotX[0]);
	let arrY = dots.map((dotY) => dotY[1]);

	let garo = Math.max(...arrX) - Math.min(...arrX);
	let saero = Math.max(...arrY) - Math.min(...arrY);

	return garo * saero;
};
console.log(
	solution([
		[1, 1],
		[2, 1],
		[2, 2],
		[1, 2],
	])
);
console.log(
	solution([
		[-1, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
	])
);
