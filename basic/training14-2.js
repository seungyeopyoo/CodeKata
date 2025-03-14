// 부분 문자열 이어 붙여 문자열 만들기
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
// 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을
// return 하는 solution 함수를 작성해 주세요.

// 1 ≤ my_strings의 길이 = parts의 길이 ≤ 100
// 1 ≤ my_strings의 원소의 길이 ≤ 100
// parts[i]를 [s, e]라 할 때, 다음을 만족합니다.
// 0 ≤ s ≤ e < my_strings[i]의 길이
// my_strings	parts	result
// ["progressive", "hamburger", "hammer", "ahocorasick"]
// [[0, 4], [1, 2], [3, 5], [7, 7]]	"programmers"

// 예제 1번의 입력을 보기 좋게 표로 나타내면 다음과 같습니다.
// i	my_strings[i]	parts[i]	부분 문자열
// 0	"progressive"	[0, 4]	"progr"
// 1	"hamburger"	[1, 2]	"am"
// 2	"hammer"	[3, 5]	"mer"
// 3	"ahocorasick"	[7, 7]	"s"
// 각 부분 문자열을 순서대로 이어 붙인 문자열은 "programmers"입니다.
// 따라서 "programmers"를 return 합니다.

// step 1. parts[i] s,e를 저장한다.
// step 2. my_strings를 순회하며 slice s ,e 한다 +1해야되네
// step 3. 2를 빈문자열에 더해주면서 return

const solution = function (my_string, parts) {
	let str = '';
	for (let i = 0; i < my_string.length; i++) {
		let [s, e] = parts[i];
		str += my_string[i].slice(s, e + 1);
	}
	return str;
};

console.log(
	solution(
		['progressive', 'hamburger', 'hammer', 'ahocorasick'],
		[
			[0, 4],
			[1, 2],
			[3, 5],
			[7, 7],
		]
	)
);
