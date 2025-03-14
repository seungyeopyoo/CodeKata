// 접미사 배열
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때,
// my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 알파벳 소문자로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 100
// my_string	result
// "banana"	["a", "ana", "anana", "banana", "na", "nana"]
// "programmers"	["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]

// 예제 1번의 my_string는 "banana"로 모든 접미사는 문제의 설명과 같습니다.
// 이를 사전순으로 정렬하면 "a", "ana", "anana", "banana", "na", "nana"이므로
// ["a", "ana", "anana", "banana", "na", "nana"]를 return 합니다.
// 예제 2번의 my_string는 "programmers"이고 모든 접미사는
// "programmers", "rogrammers", "ogrammers", "grammers", "rammers", "ammers", "mmers", "mers", "ers", "rs", "s"입니다.
// 이를 사전순으로 정렬한 문자열 배열 ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]를 return 합니다.

// step 1. 빈배열만든다 result
// step 2. my_string를 length만큼 순회하면서 slice한다 뒤에서부터 자르는거니까 end 없이 length - i
// step 3. 1에 push하고 sort하여 return한다.

const solution = function (my_string) {
	let result = [];
	for (let i = 0; i < my_string.length; i++) {
		result.push(my_string.slice(my_string.length - i - 1));
	}
	return result.sort();
};
console.log(solution('banana'));
console.log(solution('programmers'));
