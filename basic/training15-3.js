// 문자열 뒤집기
// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 숫자와 알파벳으로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 0 ≤ s ≤ e < my_string의 길이
// 입출력 예
// my_string	s	e	result
// "Progra21Sremm3",	6	,12	"ProgrammerS123"  21Sremm
// "Stanley1yelnatS"	,4	,10	"Stanley1yelnatS"

// 예제 1번의 my_string에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은
// "ProgrammerS123"이므로 "ProgrammerS123"를 return 합니다.
// 예제 2번의 my_string에서 인덱스 4부터 인덱스 10까지를 뒤집으면
// 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 return 합니다.

// step 1. 주어진 se 만큼 slice 하고 reverse 한다. 배열 메소드라 split
// step 2. se만큼 1로 splice한다.
// step 3. join 하여 return 한다.

const solution = function (my_string, s, e) {
	let arr = my_string.split('');
	let reversed = arr.slice(s, e + 1).reverse();

	arr.splice(s, e - s + 1, ...reversed);
	return arr.join('');
};

console.log(solution('Progra21Sremm3', 6, 12));
console.log(solution('Stanley1yelnatS', 4, 10));
