// 문자열 정렬하기 (2)
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
//  my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 0 < my_string 길이 < 100
// 입출력 예
// my_string	result
// "Bcad"	"abcd"
// "heLLo"	"ehllo"
// "Python"	"hnopty"

// "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.
// "heLLo"를 모두 소문자로 바꾸면 "hello"이고 이를 알파벳 순으로 정렬하면 "ehllo"입니다.
// "Python"를 모두 소문자로 바꾸면 "python"이고 이를 알파벳 순으로 정렬하면 "hnopty"입니다.

// step 1. my_string 를 소문자로 바꾸고
// step 2. 걔를 오름차순 정렬함

const solution = function (my_string) {
	let answer = my_string.toLowerCase().split('');
	return answer.sort().join('');
};

console.log(solution('Bcad'));
console.log(solution('heLLo'));
console.log(solution('Python'));
