// 문자열 붙여서 출력하기
// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
// 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str1, str2의 길이 ≤ 10

// apple pen

// applepen

// Hello World!

// HelloWorld!

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	const input = line.split(' ');
	let str1 = input[0];
	let str2 = input[1];

	console.log(str1 + str2);
	rl.close();
});
