// 접두사인지 확인하기
// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때,
// is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_prefix의 길이 ≤ 100
// my_string과 is_prefix는 영소문자로만 이루어져 있습니다.
// my_string	is_prefix	result
// "banana"	,"ban"	1
// "banana"	,"nan"	0
// "banana"	,"abcd"	0
// "banana"	,"bananan"	0

// 예제 1번에서 is_prefix가 my_string의 접두사이기 때문에 1을 return 합니다.
// 예제 2번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
// 예제 3번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
// 예제 4번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.

// step 1. my_string을 앞에서 부터 한글자식 순회하면서 slice한다.
// step 2. 1을 빈배열에 담아두고 is_prefix가 있는지 확인한다.
// step 3. true면 1반환 false면 0 반환

const solution = function (my_string, is_prefix) {
	let arr = [];
	for (let i = 1; i <= my_string.length; i++) {
		arr.push(my_string.slice(0, i));
	}
	return arr.some((prefix) => prefix === is_prefix) ? 1 : 0;
};

console.log(solution('banana', 'ban'));
console.log(solution('banana', 'nan'));
console.log(solution('banana', 'abcd'));
console.log(solution('banana', 'bananan'));
