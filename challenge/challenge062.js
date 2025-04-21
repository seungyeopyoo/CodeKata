// 올바른 괄호
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// s	                answer
// "()()"	            true
// "(())()"	            true
// ")()("	            false
// "(()("	            false

// step 1. 빈배열을 만든다.
// step 2. s의 길이 만큼 순회하며 step1에 집어넣는다.
// step 3. ( 면 집어 넣음  , ) 면 step1이 비어있는지 확인 비어있다면 return false 안비어있으면 pop 한다.
// step 4. for 루프를 다 순회하고 나서 step1의 length가 0인지 검증

const solution = function (s) {
	let parentheses = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			parentheses.push(s[i]);
		} else {
			if (parentheses.length === 0) return false;

			parentheses.pop();
		}
	}
	return parentheses.length === 0;
};

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
console.log(solution('(()))'));
