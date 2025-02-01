// 중복된 문자 제거
// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ my_string ≤ 110
// my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
// 대문자와 소문자를 구분합니다.
// 공백(" ")도 하나의 문자로 구분합니다.
// 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

// my_string	result
// "people"	"peol"
// "We are the world"	"We arthwold"

// "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
// "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

// step 1. 문자열을 split 하여 단위로 나눔
// step 2. filter 메소드사용 중복제거
// step 3. 2의 배열을 다시 문자열로 join

// const solution = function (my_string) {
// 	let arr = my_string.split('');
// 	let answer = arr.filter((item, index) => arr.indexOf(item) === index);

// 	return answer.join('');
// };
function solution(my_string) {
	return [...new Set(my_string)].join('');
}

console.log(solution('people'));
console.log(solution('We are the world'));
