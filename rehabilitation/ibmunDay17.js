// 컨트롤 제트
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
//  문자열에 있는 숫자를 차례대로 더하려고 합니다.
// 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ s의 길이 ≤ 200
// -1,000 < s의 원소 중 숫자 < 1,000
// s는 숫자, "Z", 공백으로 이루어져 있습니다.
// s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
// 연속된 공백은 주어지지 않습니다.
// 0을 제외하고는 0으로 시작하는 숫자는 없습니다.
// s는 "Z"로 시작하지 않습니다.
// s의 시작과 끝에는 공백이 없습니다.
// "Z"가 연속해서 나오는 경우는 없습니다.
// s	          result
// "1 2 Z 3"	    4
// "10 20 30 40"	100
// "10 Z 20 Z 1"	1
// "10 Z 20 Z"	    0
// "-1 -2 -3 Z"	   -3

// 10 + 20 + 30 + 40 = 100을 return 합니다.
// "10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.

// step 1. s를 공백 단위로 분리하여 넣는다.
// step 2. z의 인덱스 위치를 구한다.
// step 3. 3 - 1의 값을 제거한다.
// step 4. z와 4를 제거한 값을 나열하여 더해준다.

const solution = function (s) {
	let arr = s.split(' ');
	let answer = [];
	arr.forEach((item) => {
		if (item === 'Z') {
			answer.pop();
		} else {
			answer.push(Number(item));
		}
	});
	return answer.reduce((sum, num) => sum + num, 0);
};
console.log(solution('1 2 Z 3'));
console.log(solution('10 20 30 40'));
console.log(solution('10 Z 20 Z 1'));
console.log(solution('10 Z 20 Z'));
console.log(solution('-1 -2 -3 Z'));
