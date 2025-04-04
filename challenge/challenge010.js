// 문자열 내 p와 y의 개수
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// s	            answer
// "pPoooyY"	    true
// "Pyy"	        false

// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// step 1. 주어진 문자열을 대문자나 소문자로 바꿈
// step 2.  1을 ... 사용해서 filter countP countY 로 각각 length를 선언
// step 3. 2가 같으면 ? true : false

const solution = function (s) {
	const convertS = s.toUpperCase();

	const countP = [...convertS].filter((v) => v === 'P').length;
	const countY = [...convertS].filter((v) => v === 'Y').length;

	return countP === countY ? true : false;
};

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
