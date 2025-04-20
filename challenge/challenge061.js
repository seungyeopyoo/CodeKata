// 최댓값과 최솟값
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

// s	                        return
// "1 2 3 4"	                "1 4"
// "-1 -2 -3 -4"	            "-4 -1"
// "-1 -1"	                    "-1 -1"

// step 1. s를 split하고 math.min max
// s의 원소들을 숫자로 바꿔줘야한다고 생각했는데 안해도 되더라. math.min max가 암묵적 타입 변환 (Implicit Type Conversion) 해줌 만약 문자열이 숫자처럼 생기지 않았다면NaN을 반환한다.
//console.log(Math.min("10", "2")); // 2 ← 문자열인데도 비교 가능함 , , , Math.min("1", "a", "3"); // NaN 문자열처럼 안생겨서 NaN나옴

const solution = function (s) {
	s = s.split(' ');

	return Math.min(...s) + ' ' + Math.max(...s);
};

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
