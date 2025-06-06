// 대소문자 바꿔서 출력하기
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.
// 입출력 예
// 입력 #1

// aBcDeFg
// 출력 #1

// AbCdEfG

// step 1. 문자열을 받아서 한글자씩 돌면서 if 대문자면 소문자로 소문자면 대문자로
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let result = '';

	for (let char of line) {
		if (char === char.toUpperCase()) {
			result += char.toLowerCase();
		} else {
			result += char.toUpperCase();
		}
	}
	console.log(result);
	rl.close();
});
