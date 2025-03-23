// 문자열 바꿔서 찾기
// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다.
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중
// pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// 1 ≤ myString의 길이 ≤ 100
// 1 ≤ pat의 길이 ≤ 10
// myString과 pat는 문자 "A"와 "B"로만 이루어진 문자열입니다.
// 입출력 예
// myString	        pat	        result
// "ABBAA"	  ,      "AABB"	        1
// "ABAB"	   ,     "ABAB"	        0

// "ABBAA"에서 "A"와 "B"를 서로 바꾸면 "BAABB"입니다.
// 여기에는 부분문자열 "AABB"가 있기 때문에 1을 return 합니다.

// "ABAB"에서 "A"와 "B"를 서로 바꾸면 "BABA"입니다.
// 여기에는 부분문자열 "BABA"가 없기 때문에 0을 return 합니다.

// step 1. 빈배열 만든다.
// step 2. myString 순회하면서 1에 push한다. A = B로 B는 A로
// step 3. includes(pat) ? 1: 0

const solution = function (myString, pat) {
	const result = [];
	for (let i = 0; i < myString.length; i++) {
		if (myString[i] === 'A') {
			result.push('B');
		} else {
			result.push('A');
		}
	}
	return result.join('').includes(pat) ? 1 : 0;
};

console.log(solution('ABBAA', 'AABB'));
console.log(solution('ABAB', 'ABAB'));
