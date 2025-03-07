// 편지

// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다.
// 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며,
// 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해
// 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

// 공백도 하나의 문자로 취급합니다.
// 1 ≤ message의 길이 ≤ 50
// 편지지의 여백은 생각하지 않습니다.
// message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.

// message	result
// "happy birthday!"	30
// "I love you~"	22

// message의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.
// message의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.

// step 1. 글자수 구한다.
// step 2. x2한다

const solution = function (message) {
	let answer = message.length;
	return answer * 2;
};

console.log(solution('happy birthday!'));
console.log(solution('I love you~'));
