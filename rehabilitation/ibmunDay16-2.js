// 문자열 정렬하기 (1)
// 문자열 my_string이 매개변수로 주어질 때,
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// 1 ≤ my_string의 길이 ≤ 100
// my_string에는 숫자가 한 개 이상 포함되어 있습니다.
// my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -
// my_string	result
// "hi12392"	[1, 2, 2, 3, 9]
// "p2o4i8gj2"	[2, 2, 4, 8]
// "abcde0"	[0]

// "hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.
// "p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.
// "abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.

// step 1. my_string에서 문자를 빼준다. replace or map
// step 2. 숫자들을 분리하여 각각 인덱스로 나누어준다.
// step 2-2. 배열안에 문자열로 들어가서 오답이 나옴... .map(Number)로 숫자배열로 전환
// step 3. 숫자를 오름차순 정렬한다.

const solution = function (my_string) {
	let removeStr = my_string.replace(/\D/g, '').split('').map(Number);

	let answer = removeStr.sort(function (a, b) {
		return a - b;
	});

	return answer;
};

console.log(solution('hi12392'));
console.log(solution('p2o4i8gj2'));
console.log(solution('abcde0'));
