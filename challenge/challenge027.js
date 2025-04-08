// 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고,
// 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// s	        return
// "a234"	    false
// "1234"	    true

// step 1. 숫자배열 0123456789하나 선언하고 s를 split하고 every includes(el)해서 return
// 길이도 체크해줘야되네

const solution = function (s) {
	const numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	return (
		(s.length === 4 || s.length === 6) &&
		s.split('').every((el) => numberArr.includes(el))
	);
};

console.log(solution('a234'));
console.log(solution('1234'));
