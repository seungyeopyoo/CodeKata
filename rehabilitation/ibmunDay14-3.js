// 배열 회전시키기
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// 3 ≤ numbers의 길이 ≤ 20
// direction은 "left" 와 "right" 둘 중 하나입니다.

// numbers	direction	result
// [1, 2, 3]	"right"	[3, 1, 2]
// [4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]

// numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
// numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.

// step 1. direction이 right면 배열의 가장 끝 부분 지운다.
// step 2. 1에서 지운걸 첫번째 칸에 넣는다.
// step 3. direction이 left면 배열의 가장 첫째 부분을 지운다 .
// step 4. 3에서 지운걸 마지막에 넣는다.

const solution = function (numbers, direction) {
	if (direction === 'right') {
		const last = numbers.pop();
		numbers.unshift(last);
	} else if (direction === 'left') {
		const first = numbers.shift();
		numbers.push(first);
	}
	return numbers;
};

console.log(solution([1, 2, 3], 'right'));
console.log(solution([1, 2, 3], 'left'));
