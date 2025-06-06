// A로 B 만들기
// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < before의 길이 == after의 길이 < 1,000
// before와 after는 모두 소문자로 이루어져 있습니다.
// 입출력 예
// before	after	result
// "olleh"	,"hello"	1
// "allpe"	,"apple"	0

// "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.
// "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.

// step 1. before를 정렬한다.
// step 2. after를 정렬한다.
// step 3. 같으면 1리턴 없으면 0리턴 삼항연산자로

const solution = function (before, after) {
	return before.split('').sort().join('') === after.split('').sort().join('')
		? 1
		: 0;
};

console.log(solution('olleh', 'hello'));
console.log(solution('allpe', 'apple'));
