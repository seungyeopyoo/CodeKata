// 수 조작하기 2
// 정수 배열 numLog가 주어집니다.
// 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로
// 다음과 같은 조작을 했다고 합시다.

// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다.
// 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 2 ≤ numLog의 길이 ≤ 100,000
// -100,000 ≤ numLog[0] ≤ 100,000
// 1 ≤ i ≤ numLog의 길이인 모든 i에 대해 |numLog[i] - numLog[i - 1]|의 값은 1 또는 10입니다.

// numLog	result
// [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	"wsdawsdassw"
// result인 "wsdawsdassw"를 따라 numLog[0]에서부터 시작해 조작을 하면 numLog의 값과 순서대로 일치합니다.
// 따라서 "wsdawsdassw"를 return 합니다.

// step 1. wasd를 객체로 저장한다.
// step 2. numlog를 인덱스 - 인덱스 -1로 차이를 계산하고 차이를 step1로 교체
// stetp 3. 반환한다.

const solution = function (numLog) {
	const wasd = {
		1: 'w',
		'-1': 's',
		10: 'd',
		'-10': 'a',
	};

	let result = '';
	for (let i = 1; i < numLog.length; i++) {
		const diff = numLog[i] - numLog[i - 1];
		result += wasd[String(diff)];
	}

	return result;
};

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
