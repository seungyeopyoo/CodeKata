// OX퀴즈
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는
// 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다.
// 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
// 1 ≤ quiz의 길이 ≤ 10
// X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
// X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
// -10,000 ≤ X, Y ≤ 10,000
// -20,000 ≤ Z ≤ 20,000
// [연산자]는 + 와 - 중 하나입니다.
// quiz	                          result
// ["3 - 4 = -3", "5 + 6 = 11"]	["X", "O"]
// ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	["O", "O", "X", "O"]

// 3 - 4 = -3 은
// 틀린 수식이므로 "X", 5 + 6 = 11 은 옳은 수식이므로 "O" 입니다.
// 따라서 ["X", "O"]를 return합니다.
// 19 - 6 = 13 은 옳은 수식이므로 "O",
// 5 + 66 = 71 은 옳은 수식이므로 "O",
//  5 - 15 = 63 은 틀린 수식이므로 "X",
// 3 - 1 = 2는 옳은 수식이므로 "O" 따라서 ["O", "O", "X", "O"]를 return합니다.

// step 1. 빈 배열 만든다.
// step 2. for 문 사용 각 퀴즈를 인덱스 별로 나누고 또 공백별로 나누어서 파츠별로 쪼갠다.
// step 3. if 연산자가 + 면 +를 수행 -면 - 를 수행
// step 4. 계산결과가 2의 파츠4와 같은지 확인
// step 5. 맞으면 동그라미 1의 빈배열에 푸쉬 아니면 x 푸쉬

const solution = function (quiz) {
	let answer = [];

	for (let i = 0; i < quiz.length; i++) {
		let parts = quiz[i].split(' ');

		let num1 = Number(parts[0]);
		let operator = parts[1];
		let num2 = Number(parts[2]);
		let expected = Number(parts[4]);

		let result;

		if (operator === '+') {
			result = num1 + num2;
		} else if (operator === '-') {
			result = num1 - num2;
		}

		if (result === expected) {
			answer.push('O');
		} else {
			answer.push('X');
		}
	}

	return answer;
};
console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
	solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])
);
