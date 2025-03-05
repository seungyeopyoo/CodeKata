// 더 크게 합치기
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
// 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중
// 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// 1 ≤ a, b < 10,000
// a	b	result
// 9	,91	991
// 89,	8	898
// a ⊕ b = 991 이고, b ⊕ a = 919 입니다.
//  둘 중 더 큰 값은 991 이므로 991을 return 합니다.
// a ⊕ b = 898 이고, b ⊕ a = 889 입니다.
//  둘 중 더 큰 값은 898 이므로 898을 return 합니다.

// step 1. a+b b+a를 저장한다.
// step 2. 삼항연산자 사용 step 1 a+b가 더 크면 a+b반환 아니면 b+a반환

const solution = function (a, b) {
	const ab = '' + a + ('' + b);
	const ba = '' + b + ('' + a);

	return Number(ab) > Number(ba) ? Number(ab) : Number(ba);
};
console.log(solution(9, 91));
console.log(solution(89, 8));
