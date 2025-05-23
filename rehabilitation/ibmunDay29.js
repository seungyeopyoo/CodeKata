// 겹치는 선분의 길이
// 선분 3개가 평행하게 놓여 있습니다.
// 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]]
// 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때,
// 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

// lines의 길이 = 3
// lines의 원소의 길이 = 2
// 모든 선분은 길이가 1 이상입니다.
// lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
// -100 ≤ a < b ≤ 100
// lines	result
// [[0, 1], [2, 5], [3, 9]]	2      2345  3456789  345
// [[-1, 1], [1, 3], [3, 9]]	0
// [[0, 5], [3, 9], [1, 10]]	8  345 3456789 12345 123456789

// 두 번째, 세 번째 선분 [2, 5], [3, 9]가 [3, 5] 구간에 겹쳐있으므로 2를 return 합니다.

// 겹친 선분이 없으므로 0을 return 합니다.

// 첫 번째와 두 번째 선분이 [3, 5] 구간에서 겹칩니다.
// 첫 번째와 세 번째 선분 [1, 5] 구간에서 겹칩니다.
// 두 번째와 세 번째 선분 [3, 9] 구간에서 겹칩니다.
// 따라서 [1, 9] 구간에 두 개 이상의 선분이 겹쳐있으므로, 8을 return 합니다.

// step 1. 각 배열을 순회하면서 start 부터 end 까지 나열한다. ex) 2,5면 2345 3,9면 3456789
// step 2. 겹치는 구간끼리 filter 한다. 인덱스 0과1 0과2 1과2 3번확인하기
// step 3. length 한다.

const solution = function (lines) {
	let arr = new Array(201).fill(0); // -100 ~ 100 범위를 0 ~ 200으로 변환

	// 각 선분이 차지하는 범위를 1씩 증가
	for (let [start, end] of lines) {
		for (let i = start + 100; i < end + 100; i++) {
			arr[i]++;
		}
	}

	// 2개 이상 겹치는 부분의 길이 카운트
	return arr.filter((v) => v > 1).length;
};
console.log(
	solution([
		[0, 1],
		[2, 5],
		[3, 9],
	])
);
console.log(
	solution([
		[-1, 1],
		[1, 3],
		[3, 9],
	])
);
console.log(
	solution([
		[0, 5],
		[3, 9],
		[1, 10],
	])
);
