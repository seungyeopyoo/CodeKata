// 소문자로 바꾸기
// 제출 내역
// 문제 설명
// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString의 길이 ≤ 100,000
// myString은 알파벳으로 이루어진 문자열입니다.
// 입출력 예
// myString	result
// "aBcDeFg"	"abcdefg"
// "aaa"	"aaa"

// step 1. toLowerCase

const solution = function (myString) {
	return myString.toLowerCase();
};

console.log(solution('aBcDeFg'));
console.log(solution('aaa'));
