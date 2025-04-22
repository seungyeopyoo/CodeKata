// 다음 큰 숫자
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.

// n	result
// 78	83
// 15	23

// 문제 예시와 같습니다.
// 15(1111)의 다음 큰 숫자는 23(10111)입니다.

// step 1. 주어진 n 을 이진법으로 전환한다.
// step 2. step1. 의 1 갯수를 세고 선언한다.
// step 3. n증가시키면서 2진법으로 바꾸고 1 갯수샘 step2랑 똑같아지면 return

const solution = function (n) {
	const binaryN = n.toString(2);

	const countOne = binaryN.split('1').length - 1;

	for (let i = n + 1; i < 1000000; i++) {
		if (i.toString(2).split('1').length - 1 === countOne) {
			return i;
		}
	}
};

console.log(solution(78));
console.log(solution(15));
