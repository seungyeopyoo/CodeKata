// 문자열 정수의 합

// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ num_str ≤ 100

// num_str	result
// "123456789"	45
// "1000000"	1

// 문자열 안의 모든 숫자를 더하면 45가 됩니다.
// 문자열 안의 모든 숫자를 더하면 1이 됩니다.

const solution = function (num_str) {
	return num_str.split('').reduce((acc, cur) => Number(acc) + Number(cur));
};
console.log(solution('123456789'));

console.log(solution('1000000'));
