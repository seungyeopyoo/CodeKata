// x 사이의 개수
// 문자열 myString이 주어집니다.
// myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열
// 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 1 ≤ myString의 길이 ≤ 100,000
// myString은 알파벳 소문자로 이루어진 문자열입니다.

// myString         	result
// "oxooxoxxox"     	[1, 2, 1, 0, 1, 0]
// "xabcxdefxghi"	    [0, 3, 3, 3]

// "x"를 기준으로 문자열을 나누면 ["o", "oo", "o", "", "o", ""]가 됩니다.
// 각각의 길이로 배열을 만들면 [1, 2, 1, 0, 1, 0]입니다. 따라서 [1, 2, 1, 0, 1, 0]을 return 합니다.

// "x"를 기준으로 문자열을 나누면 ["", "abc", "def", "ghi"]가 됩니다.
// 각각의 길이로 배열을 만들면 [0, 3, 3, 3]입니다. 따라서 [0, 3, 3, 3]을 return 합니다.

// step 1. x 를 기준으로 split한다
// step 2. 빈배열 result를 만들고 1을 순회하며 length를 push한다.

const solution = function (myString) {
	splitStr = myString.split('x');

	const result = [];
	for (let i = 0; i < splitStr.length; i++) {
		result.push(splitStr[i].length);
	}
	return result;
};

console.log(solution('oxooxoxxox'));
console.log(solution('xabcxdefxghi'));
