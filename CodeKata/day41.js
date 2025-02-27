// 이상한 문자 만들기

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다.
// 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

// 짝수번째는 대문자로 홀수 번째는 소문자로 바꿔서 return
// 공백을 기준으로 짝홀수인덱스를 파악해야한다. 공백을 기준으로 나누어야함 split(' ')
// 0은 짝수로 취급
// 나눈후에 i를 2로나눈 나머지가 0 인 애들은 upperCase else는 lowerCase
// 빈배열에 push

let solution = function (s) {
	let words = s.split(' ');
	let result = [];
	for (let word of words) {
		let newWord = '';
		for (let i = 0; i < word.length; i++) {
			if (i % 2 === 0) {
				newWord += word[i].toUpperCase(); //짝수면 대문자로
			} else {
				newWord += word[i].toLowerCase(); // 나머지는 홀수로 출력
			}
		}
		result.push(newWord); // newWord에 단어 단위로 push[ 'TrY', 'HeLlO', 'WoRlD' ]
	}
	return result.join(' ');
};

console.log(solution('try hello world')); // "TrY HeLlO WoRlD"
