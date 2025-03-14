// 접미사인지 확인하기
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의
// 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_suffix의 길이 ≤ 100
// my_string과 is_suffix는 영소문자로만 이루어져 있습니다.
// 입출력 예
// my_string	is_suffix	result
// "banana",	"ana"	1
// "banana"	,"nan"	0
// "banana"	,"wxyz"	0
// "banana"	,"abanana"	0

// 예제 1번에서 is_suffix가 my_string의 접미사이기 때문에 1을 return 합니다.
// 예제 2번에서 is_suffix가 my_string의 접미사가 아니기 때문에 0을 return 합니다.
// 예제 3번에서 is_suffix가 my_string의 접미사가 아니기 때문에 0을 return 합니다.
// 예제 4번에서 is_suffix가 my_string의 접미사가 아니기 때문에 0을 return 합니다.

// step 1. 빈배열 만든다.
// step 2. my_string 을 순회하면서 slice하여 1에 push하여 접미사 배열을 만든다.
// step 3. some한다. true면 1 아니면 0 return 삼항

const solution = function (my_string, is_suffix) {
	let result = [];
	for (let i = 0; i < my_string.length; i++) {
		result.push(my_string.slice(my_string.length - i - 1));
	}
	return result.some((Element) => Element === is_suffix) ? 1 : 0;
};
console.log(solution('banana', 'ana'));
console.log(solution('banana', 'nan'));
console.log(solution('banana', 'wxyz'));
console.log(solution('banana', 'abanana'));
