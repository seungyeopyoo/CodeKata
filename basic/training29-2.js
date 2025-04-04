// 그림 확대
// 직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
// 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때,
// 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 1 ≤ picture의 길이 ≤ 20
// 1 ≤ picture의 원소의 길이 ≤ 20
// 모든 picture의 원소의 길이는 같습니다.
// picture의 원소는 '.'과 'x'로 이루어져 있습니다.
// 1 ≤ k ≤ 10

// picture                                                                                  	k	result
// [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."],	2	["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
// ["x.x", ".x.", "x.x"]	,3	["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]
// 예제 1번의 picture는 다음과 같습니다.

// .xx...xx.
// x..x.x..x
// x...x...x
// .x.....x.
// ..x...x..
// ...x.x...
// ....x....
// 이를 가로 세로로 k배, 즉 2배 확대하면 그림 파일은 다음과 같습니다.

// ..xxxx......xxxx..
// ..xxxx......xxxx..
// xx....xx..xx....xx
// xx....xx..xx....xx
// xx......xx......xx
// xx......xx......xx
// ..xx..........xx..
// ..xx..........xx..
// ....xx......xx....
// ....xx......xx....
// ......xx..xx......
// ......xx..xx......
// ........xx........
// ........xx........
// 따라서 ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]를 return 합니다.

// 입출력 예 #2

// 예제 2번의 picture는 다음과 같습니다.

// x.x
// .x.
// x.x
// 이를 가로 세로로 k배, 즉 3배 확대하면 그림 파일은 다음과 같습니다.

// xxx...xxx
// xxx...xxx
// xxx...xxx
// ...xxx...
// ...xxx...
// ...xxx...
// xxx...xxx
// xxx...xxx
// xxx...xxx
// 따라서 ["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]를 return 합니다.

// step 1. 주어진 문자열 순회하면서 각인덱스별로 k 배수만큼 증가 k만큼 repeat

const solution = function (picture, k) {
	let result = [];

	for (let i = 0; i < picture.length; i++) {
		let enlargedRow = picture[i]
			.split('')
			.map((char) => char.repeat(k))
			.join('');

		for (let j = 0; j < k; j++) {
			result.push(enlargedRow);
		}
	}

	return result;
};

console.log(
	solution(
		[
			'.xx...xx.',
			'x..x.x..x',
			'x...x...x',
			'.x.....x.',
			'..x...x..',
			'...x.x...',
			'....x....',
		],
		2
	)
);
console.log(solution(['x.x', '.x.', 'x.x'], 3));
