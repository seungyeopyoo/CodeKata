// 숨어있는 숫자의 덧셈 (2)

// 문자열 my_string이 매개변수로 주어집니다.
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
//  my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 연속된 수는 하나의 숫자로 간주합니다.
// 000123과 같이 0이 선행하는 경우는 없습니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.

// my_string	result
// "aAb1B2cC34oOp"	37
// "1a2b3c4d123Z"	133

// "aAb1B2cC34oOp"안의 자연수는 1, 2, 34 입니다. 따라서 1 + 2 + 34 = 37 을 return합니다.
// "1a2b3c4d123Z"안의 자연수는 1, 2, 3, 4, 123 입니다. 따라서 1 + 2 + 3 + 4 + 123 = 133 을 return합니다.

// step 1. my string에서 숫자만 빼낸다 // 문자열에 자연수가 없는 경우 0을 return 해주세요.
// step 2. 더해준다.

const solution = function (my_string) {
	let numArr = my_string.match(/\d+/g);

	if (!numArr) {
		return 0;
	}

	const sum = numArr.map(Number).reduce((acc, curr) => acc + curr, 0);

	return sum;
};

console.log(solution('aAb1B2cC34oOp'));
console.log(solution('1a2b3c4d123Z'));
