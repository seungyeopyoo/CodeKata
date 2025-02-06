// 문자열안에 문자열
// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100
// 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.
//  str1	               str2 	result
// "ab6CDE443fgh22iJKlmn1o"	,"6CD"	1
// "ppprrrogrammers"	,"pppp"	2
// "AbcAbcA"	,"AAA"	2

// "ab6CDE443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return합니다.
// "ppprrrogrammers" str1에 str2가 없으므로 2를 return합니다.
// "AbcAbcA" str1에 str2가 없으므로 2를 return합니다.

// step 1. includes 해서 있으면 1 return 없으면 2return 삼항연산자로

const solution = function (str1, str2) {
	return str1.includes(str2) ? 1 : 2;
};

console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD'));
console.log(solution('ppprrrogrammers', 'pppp'));
console.log(solution('AbcAbcA', 'AAA'));
