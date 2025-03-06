// flag에 따라 다른 값 반환하기
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때,
// flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

// -1,000 ≤ a, b ≤ 1,000
// 입출력 예
// a	b	flag	result
// -4	7	true	3
// -4	7	false	-11

// 예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.
// 예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.

// step 1. true일 경우 a+b false일 경우에 a-b 삼항연산자로 하는게 쉬울듯

const solution = function (a, b, flag) {
	const trueFalse = {
		true: (a, b) => a + b,
		false: (a, b) => a - b,
	};
	return trueFalse[flag](a, b);
};

console.log(solution(-4, 7, true));
console.log(solution(-4, 7, false));
