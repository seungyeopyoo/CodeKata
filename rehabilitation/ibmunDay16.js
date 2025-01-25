// 모음 제거
// 제출 내역
// 문제 설명
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string	result
// "bus"	"bs"
// "nice to meet you"	"nc t mt y"

// "bus"에서 모음 u를 제거한 "bs"를 return합니다.
// "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.

// step 1. filter 해서 걸러내면 되나

const solution = function (my_string) {
	const answer = my_string.replace(/[aeiou]/gi, '');

	return answer;
};
console.log(solution('bus'));
console.log(solution('nice to meet you'));
