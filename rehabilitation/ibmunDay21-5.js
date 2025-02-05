// 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 1234	10
// 930211	16

// 1 + 2 + 3 + 4 = 10을 return합니다.
// 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

// step 1. 문자열로 바꾸고 split하고 Number 씌워주고reduce

const solution = function (n) {
	let answer = n
		.toString()
		.split('')
		.reduce((acc, cur) => acc + Number(cur), 0);
	return answer;
};

console.log(solution(1234));
console.log(solution(930211));
