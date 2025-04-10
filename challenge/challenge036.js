// 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로,
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// s	                return
// "try hello world"	"TrY HeLlO WoRlD"

// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면
// "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

// step 1. 빈배열 만들고 주어진 문자열을 공백기준 split
// step 2. 짝수인덱스면 upperCase 홀수인덱스면 LowerCase 로 map 메소드로 가공

const solution = function (s) {
	return s
		.split(' ') //['try', 'hello', 'world']
		.map(
			(word) =>
				word
					.split('') //['t', 'r', 'y'] ['h', 'e', 'l', 'l', 'o'] ['w', 'o', 'r', 'l', 'd']
					.map((char, i) =>
						i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
					) // ['T', 'r', 'Y'] ['H', 'e', 'L', 'l', 'O'] ['W', 'o', 'R', 'l', 'D']
					.join('') // ["TrY", "HeLlO", "WoRlD"]
		)
		.join(' '); // "TrY HeLlO WoRlD"
};
console.log(solution('try hello world'));
