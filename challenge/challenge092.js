// 괄호 회전하기
// 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

// (), [], {} 는 모두 올바른 괄호 문자열입니다.
// 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
// 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
// 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
// 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

// s의 길이는 1 이상 1,000 이하입니다.

// s	            result
// "[](){}"	        3
// "}]()[{"	        2
// "[)(]"	        0
// "}}}"	        0
// 입출력 예 설명
// 입출력 예 #1
// 다음 표는 "[](){}" 를 회전시킨 모습을 나타낸 것입니다.
// x	s를 왼쪽으로 x칸만큼 회전	올바른 괄호 문자열?
// 0	"[](){}"	O
// 1	"](){}["	X
// 2	"(){}[]"	O
// 3	"){}[]("	X
// 4	"{}[]()"	O
// 5	"}[](){"	X
// 올바른 괄호 문자열이 되는 x가 3개이므로, 3을 return 해야 합니다.
// 입출력 예 #2
// 다음 표는 "}]()[{" 를 회전시킨 모습을 나타낸 것입니다.
// x	s를 왼쪽으로 x칸만큼 회전	올바른 괄호 문자열?
// 0	"}]()[{"	X
// 1	"]()[{}"	X
// 2	"()[{}]"	O
// 3	")[{}]("	X
// 4	"[{}]()"	O
// 5	"{}]()["	X
// 올바른 괄호 문자열이 되는 x가 2개이므로, 2를 return 해야 합니다.
// 입출력 예 #3
// s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.
// 입출력 예 #4
// s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.

// step 1. 초기값 count를 0으로 저장한다.
// step 2. s를 순회하며 slice 해서 왼쪽으로 한칸씩 회전하게 한다. slice(i) + slice(0,i)
// step 3. 빈배열을 만들고 step2를 순회함
// step 4. step2의 순회하는 요소가 ( { [ 여는 괄호면 step3 빈배열에 push하고
// step 4-2. 닫는 괄호라면 ) ] } 마지막요소가 짝이 맞는지 확인함
// step 5. 다 통과해서 length 0되면 count ++ 아니면 다시 for문
//let isValid = true; 넣어서 true false 관리해줘야함 반례 ](){}[ 일 경우에 틀린 괄호인데 stack 상태: [] (비어 있음) stack.length === 0 통과해버림 ㅠ
const solution = function (s) {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		const slicedS = s.slice(i) + s.slice(0, i);
		const stack = [];

		let isValid = true;
		for (let bracket of slicedS) {
			if (bracket === '(' || bracket === '[' || bracket === '{') {
				stack.push(bracket);
			} else {
				const last = stack.pop();
				if (
					(bracket === ')' && last !== '(') ||
					(bracket === ']' && last !== '[') ||
					(bracket === '}' && last !== '{')
				) {
					isValid = false;
					break;
				}
			}
		}
		if (isValid && stack.length === 0) count++;
	}

	return count;
};

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
