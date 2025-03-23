// 간단한 식 계산하기
// 문자열 binomial이 매개변수로 주어집니다.
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다.
// 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 0 ≤ a, b ≤ 40,000
// 0을 제외하고 a, b는 0으로 시작하지 않습니다.

// binomial	            result
// "43 + 12"	        55
// "0 - 7777"	        -7777
// "40000 * 40000"	    1600000000

// 예제 1번의 binomial은 "43 + 12"로 이 식을 계산한 결과인 43 + 12 = 55를 return 합니다.
// 예제 2번의 binomial은 "0 - 7777"로 이 식을 계산한 결과인 0 - 7777 = -7777을 return 합니다.
// 예제 3번의 binomial은 "40000 * 40000"으로 이 식을 계산한 결과인
// 40000 × 40000 = 1600000000을 return 합니다.

// step 1. + - * 를 객체로 저장한다.
// step 2. binomal을 구조분해 할당한다 a op b
// step 3. 1을 참조하여 return 한다
// binomal을 split 했을때 문자열이라서 Number로 숫자형으로 변환

const solution = function (binomial) {
	const ops = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
	};
	const [a, op, b] = binomial.split(' ');
	return ops[op](Number(a), Number(b));
};

console.log(solution('43 + 12'));
console.log(solution('0 - 7777'));
console.log(solution('40000 * 40000'));
