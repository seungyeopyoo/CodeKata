// 숨어있는 숫자의 덧셈 (1)
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
// my_string	result
// "aAb1B2cC34oOp"	10
// "1a2b3c4d123"	16

// "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
// "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.
// 연속된 숫자도 각각 한 자리 숫자로 취급합니다.

// step 1. my_string에서 문자를 제거해 준다.
// step 2. 1에서 남은 숫자들을 split 하여 각각 하나의 인덱스로 분리한다.map(Number)해서 숫자 배열로 만든다.
// step 3. 2를 for 문으로 arr.length 까지 나열 더해준 값을 받아온다.

const solution = function (my_string) {
	let removeStr = my_string.replace(/\D/g, '').split('').map(Number);

	let sum = 0;
	for (let i = 0; i < removeStr.length; i++) {
		sum += removeStr[i];
	}
	return sum;
};

console.log(solution('aAb1B2cC34oOp'));
console.log(solution('1a2b3c4d123'));
