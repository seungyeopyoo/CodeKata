// 조건 문자열
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다.
// ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다.
//  그리고 두 정수 n과 m이 주어질 때,
// n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ n, m ≤ 100
// ineq	eq	n	m	result
// "<",	"="	,20	,50	1
// ">"	,"!",	41,	78	0

// 20 <= 50은 참이기 때문에 1을 return합니다.
// 41 > 78은 거짓이기 때문에 0을 return합니다.

// step 1. 주어진 ineq + eq 의 조합을 객체로 저장 4개
// step 2. 계산해서 참이면 1 return 거짓이면 0 return

const solution = function (ineq, eq, n, m) {
	const ineqSign = {
		'>=': (a, b) => a >= b,
		'<=': (a, b) => a <= b,
		'>!': (a, b) => a > b,
		'<!': (a, b) => a < b,
	};
	return ineqSign[ineq + eq](n, m) ? 1 : 0;
};

console.log(solution('<', '=', 20, 50));
console.log(solution('>', '!', 41, 78));
