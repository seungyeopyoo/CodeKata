// 수 조작하기 1
// 정수 n과 문자열 control이 주어집니다.
// control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며,
// control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

// -100,000 ≤ n ≤ 100,000
// 1 ≤ control의 길이 ≤ 100,000
// control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.
// n	control	result
// 0,	"wsdawsdassw"	-1

// 수 n은 control에 따라 다음과 같은 순서로 변하게 됩니다.
// 0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1
// 따라서 -1을 return 합니다.

// step 1. wsda를 객체로 저장한다.
// step 2. control을 step 1로 교체하고 n과 더해준다 그리고 return

const solution = function (n, control) {
	const wasd = {
		w: +1,
		s: -1,
		d: +10,
		a: -10,
	};

	for (const c of control) {
		n += wasd[c];
	}

	return n;
};
console.log(solution(0, 'wsdawsdassw'));
