// [카카오 인턴] 키패드 누르기
// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// numbers 배열의 크기는 1 이상 1,000 이하입니다.                                       1 2 3               0,1  0,2  0,3
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.                                 4 5 6               1,1   1,2  1,3
// hand는 "left" 또는 "right" 입니다.                                                  7 8 9               2,1  2,2  2,3
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.                                * 0 #                     3,2
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

// numbers	                                hand	        result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	 ,   "right"	        "LRLLLRLLRRL"
//  L  R  L  L  L  R  L  L  R  R  L
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	 ,   "left"	        "LRLLRRLLLRR"
//  L  R  L  L  R  R  L  L  L  R  R
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	   ,     "right"	        "LLRLLRLLRL"

// 입출력 예에 대한 설명
// 입출력 예 #1
// 순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

// 왼손 위치	오른손 위치	            눌러야 할 숫자	    사용한 손	        설명
// *	        #	                    1	                L           	1은 왼손으로 누릅니다.
// 1	        #	                    3	                R	            3은 오른손으로 누릅니다.
// 1	        3	                    4	                L	            4는 왼손으로 누릅니다.
// 4	        3	                    5	                L	            왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	        3	                    8	                L	            왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
// 8	        3	                    2	                R	            왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
// 8	        2	                    1	                L	            1은 왼손으로 누릅니다.
// 1	        2	                    4	                L	            4는 왼손으로 누릅니다.
// 4	        2	                    5	                R	            왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
// 4	        5	                    9	                R	            9는 오른손으로 누릅니다.
// 4	        9	                    5	                L	            왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	        9	                    -	-
// 따라서 "LRLLLRLLRRL"를 return 합니다.

// 입출력 예 #2
// 왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.
// 입출력 예 #3
// 오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.

// step 1. 빈 배열 만듬 result
// step 2. 147은 left 369는 right 배열 만들어서 저장함
// step 3. moveCoordinate 배열하나 만듬 3,2 이하 0    0,1  0,2 0,3 이하 123     1,1 1,2 1,3 이하 456 ...
// step 4. numbers를 순회하며 147 나오면 step1. push (L) 반대369면 (R) 손위치 계속 갱신시켜주고// 2580이 나올때는 step3에서 각인덱스 간의 차 절대값으로 해서 만약 값이 같다면 hand에 해당하는거 밀어넣고 손도 이동 값이 다르다면 더 작은애를 push 하고 위치도 이동시켜줌
// step 5. 다 push 했으면 join return

const solution = function (numbers, hand) {
	const result = [];
	const lefthand = [1, 4, 7];
	const righthand = [3, 6, 9];
	const moveCoordinate = [
		[3, 2],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 1],
		[1, 2],
		[1, 3],
		[2, 1],
		[2, 2],
		[2, 3],
		[3, 1],
		[3, 3],
	];
	let leftLocation = 10;
	let rightLocation = 11;

	for (let i = 0; i < numbers.length; i++) {
		if (lefthand.includes(numbers[i])) {
			result.push('L');
			leftLocation = numbers[i];
		}
		if (righthand.includes(numbers[i])) {
			result.push('R');
			rightLocation = numbers[i];
		}
		if (
			numbers[i] === 2 ||
			numbers[i] === 5 ||
			numbers[i] === 8 ||
			numbers[i] === 0
		) {
			let target = moveCoordinate[numbers[i]];
			let leftDistance =
				Math.abs(moveCoordinate[leftLocation][0] - target[0]) +
				Math.abs(moveCoordinate[leftLocation][1] - target[1]);

			let rightDistance =
				Math.abs(moveCoordinate[rightLocation][0] - target[0]) +
				Math.abs(moveCoordinate[rightLocation][1] - target[1]);

			if (leftDistance === rightDistance) {
				result.push(hand[0].toUpperCase());
				if (hand === 'right') {
					rightLocation = numbers[i];
				} else {
					leftLocation = numbers[i];
				}
			} else if (leftDistance < rightDistance) {
				result.push('L');
				leftLocation = numbers[i];
			} else if (rightDistance < leftDistance) {
				result.push('R');
				rightLocation = numbers[i];
			}
		}
	}
	return result.join('');
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
